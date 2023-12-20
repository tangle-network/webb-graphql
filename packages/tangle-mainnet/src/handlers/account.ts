import { SubstrateEvent } from '@subql/types';
import { Account, CountryCode, HeartBeat, AuthorityUpTime } from '../types';
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

export async function ensureAccount(accountId: string) {
  let account = await Account.get(accountId);
  if (!account) {
    account = new Account(accountId);
    await updateOrSetAccount(account);
  }
  return account;
}

export async function updateOrSetAccount(account: Account) {
  const accId = account.id;
  account.publicKey = account.id;
  if ('identity' in api.query) {
    const identity: Option<PalletIdentityRegistration> = (await api.query.identity.identityOf(accId)) as any;
    if (identity.isSome) {
      const id = identity.unwrap();

      const extraInfo = id.info.additional
        .filter(([key]) => key.isRaw)
        .reduce((acc, item) => {
          const key = String(item[0].value.toHuman());
          const value = String(item[1].value.toHuman());
          return { ...acc, [key]: value };
        }, {});

      if (extraInfo['countryCode']) {
        const country = await ensureCountryCode(extraInfo['countryCode']);
        account.countryCodeId = country.id;
      }

      account.display = id.info.display.isNone ? null : String(id.info.display.value.toHuman());
      account.legal = id.info.legal.isNone ? null : String(id.info.legal.value.toHuman());
      account.web = id.info.web.toHuman() ? null : String(id.info.web.value.toHuman());
      account.riot = id.info.riot.isNone ? null : String(id.info.riot.value.toHuman());
      account.email = id.info.email.isNone ? null : String(id.info.email.value.toHuman());
      account.pgpFingerprint = id.info.pgpFingerprint.isNone ? null : String(id.info.pgpFingerprint.value.toHuman());
      account.image = id.info.image.isNone ? null : String(id.info.image.value.toHuman());
      account.twitter = id.info.twitter.isNone ? null : String(id.info.twitter.value.toHuman());
    }
  }

  return account.save();
}

export async function removeAccount(event: SubstrateEvent) {
  const accountId = event.event.data[0].toString();
  const data = await Account.get(accountId);
  if (!data) return;
  await Account.remove(accountId);
}

type Keys = {
  imOnline: string;
  aura: string;
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
          aura: val.aura.toString(),
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

  const accountId = Object.keys(keys).find((key) => {
    return keys[key].imOnline === imOnlineId;
  });

  if (accountId) {
    const heartbeatId = `${sessionNumber}-${accountId}`;
    const heartbeat = await HeartBeat.get(heartbeatId);
    logger.info(`Recording heartbeats for ${accountId}`);

    if (heartbeat) {
      logger.info(`Heartbeat already recoded for ${accountId} of session ${sessionNumber}`);
    } else {
      const session = await ensureSession(sessionNumber, blockNumber);
      const account = await ensureAccount(accountId);
      const hb = HeartBeat.create({
        id: heartbeatId,
        blockNumber: BigInt(blockNumber),
        accountId: account.id,
        sessionId: session.id,
      });
      await hb.save();
      const [data, numberOfHeartbeats] = await addHb(accountId, '0');
      const uptime = getIntPercentage(numberOfHeartbeats, data.numberOfSessions);
      await updateSessionValidatorUptime(session.id, accountId, uptime);
    }
  } else {
    logger.info(`No account found for imOnlineId ${imOnlineId}`);
  }
}

export async function recordAuthorityUptime(authorityId: string, blockNumber: string) {
  try {
    const sessionNumber = await getCurrentSessionId();
    const keys = await getCachedKeys();
    const accountIdSendingHeartbeat = Object.keys(keys).find((key) => keys[key].imOnline === authorityId);
    const accountIds = Object.keys(keys).filter((key) => keys[key].imOnline);

    for (const accountId of accountIds) {
      if (accountId === accountIdSendingHeartbeat) {
        let authorityUptime = await AuthorityUpTime.get(accountId);

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
            id: accountId,
            totalHeartbeats: actualHeartbeats,
            blockNumber: BigInt(blockNumber),
            sessionNumber: Number(sessionNumber),
            uptime: 100,
            authorityId: accountId,
          });
        }

        const rawUptime = (actualHeartbeats / maxPossibleHeartbeats) * 100;
        authorityUptime.uptime = Math.round(Math.min(100, rawUptime));

        await authorityUptime.save();
      } else {
        const authorityUptime = await AuthorityUpTime.get(accountId);

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
