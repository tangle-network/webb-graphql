import { Account, CountryCode, HeartBeat } from "../types"
import { Data, Option } from "@polkadot/types"
import { PalletIdentityRegistration } from "@polkadot/types/lookup"
import { ITuple } from "@polkadot/types-codec/types"
import { Vec } from "@polkadot/types-codec"
import {
  currentSessionId,
  ensureSession,
  setSessionValidatorUptime,
} from "./session"
import { encodeAddress } from "@polkadot/util-crypto"
import { addHb } from "./source"
async function ensureCountryCode(code: string) {
  const c = await CountryCode.get(code)
  if (c) {
    return c
  }
  const newCountry = CountryCode.create({
    code,
    id: code,
  })
  await newCountry.save()
  return newCountry
}

export async function UpdateOrSetIdentity(account: Account) {
  const id = account.id
  if ("identity" in api.query) {
    const identity: Option<PalletIdentityRegistration> = (await api.query.identity.identityOf(
      id
    )) as any
    if (identity.isSome) {
      const id = identity.unwrap()

      const extraInfo = (id.info.additional as Vec<ITuple<[Data, Data]>>)
        .filter(([key]) => key.isRaw)
        .reduce((acc, item) => {
          const key = String(item[0].value.toHuman())
          const value = String(item[1].value.toHuman())
          return { ...acc, [key]: value }
        }, {})
      if (extraInfo["countryCode"]) {
        const country = await ensureCountryCode(extraInfo["countryCode"])
        account.countryCodeId = country.id
      }
      account.display = id.info.display.isNone
        ? null
        : String(id.info.display.value.toHuman())
      account.legal = id.info.legal.isNone
        ? null
        : String(id.info.legal.value.toHuman())
      account.web = id.info.web.toHuman()
        ? null
        : String(id.info.web.value.toHuman())
      account.riot = id.info.riot.isNone
        ? null
        : String(id.info.riot.value.toHuman())
      account.email = id.info.email.isNone
        ? null
        : String(id.info.email.value.toHuman())
      account.pgpFingerprint = id.info.pgpFingerprint.isNone
        ? null
        : String(id.info.pgpFingerprint.value.toHuman())
      account.image = id.info.image.isNone
        ? null
        : String(id.info.image.value.toHuman())
      account.twitter = id.info.twitter.isNone
        ? null
        : String(id.info.twitter.value.toHuman())
    }
  }

  return account.save()
}

export async function ensureAccount(account: string) {
  let data = await Account.get(account)
  if (!data) {
    data = new Account(account)
    await UpdateOrSetIdentity(data)
  }
  return data
}

type Keys = {
  dkg: string
  imOnline: string
}
let queuedKeys: Record<string, Keys> | null = null

export function getCachedKeys(): Promise<Record<string, Keys>> {
  const fired = queuedKeys !== null
  if (fired) {
    return Promise.resolve(queuedKeys)
  }
  queuedKeys = {}
  return new Promise((resolve) => {
    api.query.session.queuedKeys((data) => {
      data.forEach(([key, val]) => {
        queuedKeys[key.toString()] = {
          dkg: val.dkg.toString(),
          imOnline: val.imOnline.toString(),
        }
      })
      resolve(queuedKeys)
    })
  })
}
export async function RecordHeartbeat(imOnlineId: string, blockNumber: string) {
  const { sessionNumber, sessionBlock } = await currentSessionId(blockNumber)
  const keys = await getCachedKeys()
  const accountId = Object.keys(keys).find((key) => {
    return keys[key].imOnline === imOnlineId
  })
  const heartbeatId = `${sessionNumber}-${accountId}`
  const heartbeat = await HeartBeat.get(heartbeatId)
  logger.info(`Recording heartbeats for ${accountId}`)
  if (heartbeat) {
    logger.info(
      `Heartbeat already recoded for ${accountId} of session ${sessionNumber}`
    )
  } else {
    const session = await ensureSession(sessionNumber, sessionBlock)
    const account = await ensureAccount(accountId)
    const hb = HeartBeat.create({
      id: heartbeatId,
      blockNumber: BigInt(blockNumber),
      accountId: account.id,
      sessionId: session.id,
    })
    await hb.save()
    const [data, numberOfHeartbeats] = await addHb(accountId, "0")
    const uptime = Math.floor(
      (numberOfHeartbeats / data.numberOfSessions) * Math.pow(10, 7)
    )
    await setSessionValidatorUptime(session.id, accountId, uptime)
  }
}

export async function getAccount(account: string) {
  const data = await Account.get(account)
  return data
}
