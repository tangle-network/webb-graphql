import { Account } from "../types"
import { Data, Option } from "@polkadot/types"
import { PalletIdentityRegistration } from "@polkadot/types/lookup"
import { ITuple } from "@polkadot/types-codec/types"
import { Vec } from "@polkadot/types-codec"

export async function ensureAccount(account: string) {
  let data = await Account.get(account)
  if (!data) {
    data = new Account(account)
    const identity: Option<PalletIdentityRegistration> = (await api.query.identity.identityOf(
      account
    )) as any
    if (identity.isSome) {
      const id = identity.unwrap()

      const extraInfo = (id.info.additional as Vec<ITuple<[Data, Data]>>)
        .filter(([key]) => key.isBasic)
        .reduce((acc, item) => {
          const key = String(item[0].asRaw.toHuman())
          const value = String(item[1].asRaw.toHuman())
          return { ...acc, [key]: value }
        }, {})
      if (extraInfo["countryCode"]) {
        data.countryCode = extraInfo["location"]
      }
      data.display = id.info.display.isNone
        ? null
        : String(id.info.display.toHuman())
      data.legal = id.info.legal.isNone ? null : String(id.info.legal.toHuman())
      data.web = id.info.web.isNone ? null : String(id.info.web.toHuman())
      data.riot = id.info.riot.isNone ? null : String(id.info.riot.toHuman())
      data.email = id.info.email.isNone ? null : String(id.info.email.toHuman())
      data.pgpFingerprint = id.info.pgpFingerprint.isNone
        ? null
        : String(id.info.pgpFingerprint.toHuman())
      data.image = id.info.image.isNone ? null : String(id.info.image.toHuman())
      data.twitter = id.info.twitter.isNone
        ? null
        : String(id.info.twitter.toHuman())
    }
    await data.save()
  }
  return data
}

export async function getAccount(account: string) {
  const data = await Account.get(account)
  return data
}
