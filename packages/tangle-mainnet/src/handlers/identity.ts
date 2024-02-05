import { SubstrateEvent } from '@subql/types';
import { Identity, CountryCode, HeartBeat, AuthorityUpTime } from '../types';
import { Option } from '@polkadot/types';
import { PalletIdentityRegistration } from '@polkadot/types/lookup';
import { getCurrentSessionId, ensureSession, updateSessionValidatorUptime } from './session';
import { addHb } from './source';
import { getIntPercentage } from '../utils/int-percentage';

async function ensureCountryCode(code: string) {
  const countryCode = await CountryCode.get(code);
  if (countryCode) return countryCode;

  const newCountryCode = CountryCode.create({
    code,
    id: code,
  });

  await newCountryCode.save();
  return newCountryCode;
}

export async function ensureIdentity(identityId: string) {
  let identity = await Identity.get(identityId);
  if (!identity) {
    identity = new Identity(identityId);
    await updateOrSetIdentity(identity);
  }
  return identity;
}

export async function updateOrSetIdentity(identity: Identity) {
  const accId = identity.id;
  identity.publicKey = identity.id;
  if ('identity' in api.query) {
    const identityInfo: Option<PalletIdentityRegistration> = (await api.query.identity.identityOf(accId)) as any;
    if (identityInfo.isSome) {
      const id = identityInfo.unwrap();

      const extraInfo = id.info.additional
        .filter(([key]) => key.isRaw)
        .reduce((acc, item) => {
          const key = String(item[0].value.toHuman());
          const value = String(item[1].value.toHuman());
          return { ...acc, [key]: value };
        }, {});

      if (extraInfo['countryCode']) {
        const country = await ensureCountryCode(extraInfo['countryCode']);
        identity.countryCodeId = country.id;
      }

      identity.display = id.info.display.isNone ? null : String(id.info.display.value.toHuman());
      identity.legal = id.info.legal.isNone ? null : String(id.info.legal.value.toHuman());
      identity.web = id.info.web.toHuman() ? null : String(id.info.web.value.toHuman());
      identity.riot = id.info.riot.isNone ? null : String(id.info.riot.value.toHuman());
      identity.email = id.info.email.isNone ? null : String(id.info.email.value.toHuman());
      identity.pgpFingerprint = id.info.pgpFingerprint.isNone ? null : String(id.info.pgpFingerprint.value.toHuman());
      identity.image = id.info.image.isNone ? null : String(id.info.image.value.toHuman());
      identity.twitter = id.info.twitter.isNone ? null : String(id.info.twitter.value.toHuman());
    }
  }

  return identity.save();
}

export async function removeIdentity(event: SubstrateEvent) {
  const identityId = event.event.data[0].toString();
  const data = await Identity.get(identityId);
  if (!data) return;
  await Identity.remove(identityId);
}

type Keys = {
  imOnline: string;
  babe: string;
  grandpa: string;
};

let queuedKeys: Record<string, Keys> | null = null;

function getCachedKeys(): Promise<Record<string, Keys>> {
  const fired = queuedKeys !== null;
  if (fired) {
    return Promise.resolve(queuedKeys);
  }
  queuedKeys = {};
  return new Promise((resolve) => {
    api.query.session.queuedKeys((data) => {
      data.forEach(([key, val]) => {
        queuedKeys[key.toString()] = {
          imOnline: val.imOnline.toString(),
          babe: val.babe.toString(),
          grandpa: val.grandpa.toString(),
        };
      });
      resolve(queuedKeys);
    });
  });
}

export async function recordHeartbeat(imOnlineId: string, blockNumber: string) {
  const sessionNumber = await getCurrentSessionId();
  const keys = await getCachedKeys();

  const identityId = Object.keys(keys).find((key) => {
    return keys[key].imOnline === imOnlineId;
  });

  if (identityId) {
    const heartbeatId = `${sessionNumber}-${identityId}`;
    const heartbeat = await HeartBeat.get(heartbeatId);
    logger.info(`Recording heartbeats for ${identityId}`);

    if (heartbeat) {
      logger.info(`Heartbeat already recoded for ${identityId} of session ${sessionNumber}`);
    } else {
      const session = await ensureSession(sessionNumber, blockNumber);
      const identity = await ensureIdentity(identityId);
      const hb = HeartBeat.create({
        id: heartbeatId,
        blockNumber: BigInt(blockNumber),
        identityId: identity.id,
        sessionId: session.id,
      });
      await hb.save();
      const [data, numberOfHeartbeats] = await addHb(identityId, '0');
      const uptime = getIntPercentage(numberOfHeartbeats, data.numberOfSessions);
      await updateSessionValidatorUptime(session.id, identityId, imOnlineId, uptime);
    }
  } else {
    logger.info(`No identity found for imOnlineId ${imOnlineId}`);
  }
}

export async function recordAuthorityUptime(authorityId: string, blockNumber: string) {
  try {
    const sessionNumber = await getCurrentSessionId();
    const keys = await getCachedKeys();
    const identityIdSendingHeartbeat = Object.keys(keys).find((key) => keys[key].imOnline === authorityId);
    const identityIds = Object.keys(keys).filter((key) => keys[key].imOnline);

    for (const identityId of identityIds) {
      if (identityId === identityIdSendingHeartbeat) {
        let authorityUptime = await AuthorityUpTime.get(identityId);

        const maxPossibleHeartbeats = Number(sessionNumber);
        let actualHeartbeats;

        if (authorityUptime) {
          authorityUptime.totalHeartbeats = (authorityUptime.totalHeartbeats || 0) + 1;
          actualHeartbeats = authorityUptime.totalHeartbeats;
          authorityUptime.blockNumber = BigInt(blockNumber);
          authorityUptime.sessionNumber = Number(sessionNumber);
        } else {
          actualHeartbeats = 1;
          authorityUptime = AuthorityUpTime.create({
            id: identityId,
            totalHeartbeats: actualHeartbeats,
            blockNumber: BigInt(blockNumber),
            sessionNumber: Number(sessionNumber),
            uptime: 100,
            authorityId: identityId,
          });
        }

        const rawUptime = (actualHeartbeats / maxPossibleHeartbeats) * 100;
        authorityUptime.uptime = Math.round(Math.min(100, rawUptime));

        await authorityUptime.save();
      } else {
        const authorityUptime = await AuthorityUpTime.get(identityId);

        if (authorityUptime) {
          const maxPossibleHeartbeats = Number(sessionNumber);
          const actualHeartbeats = authorityUptime.totalHeartbeats;
          const rawUptime = (actualHeartbeats / maxPossibleHeartbeats) * 100;
          authorityUptime.uptime = Math.round(Math.min(100, rawUptime));

          await authorityUptime.save();
        }
      }
    }
    logger.info(`Recorded uptimes for all authorities at session ${sessionNumber}`);
  } catch (error) {
    logger.error(`Error recording uptime for authorityId ${authorityId}: ${error.message}`);
  }
}
