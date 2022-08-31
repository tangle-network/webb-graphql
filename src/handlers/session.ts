import { ensureBlock } from "./block"
import { DKGAuthority, Session, Threshold } from "../types"
import { u16, Vec } from "@polkadot/types-codec"
import { DkgRuntimePrimitivesCryptoPublic } from "@polkadot/types/lookup"
import { ITuple } from "@polkadot/types-codec/types"
import { AbstractInt } from "@polkadot/types-codec/abstract/Int"

export const ensureSession = async (blockId: string) => {
  const block = await ensureBlock(blockId)
  const session = await Session.get(blockId)
  if (session) {
    return session
  }
  const newSession = Session.create({
    authorities: [],
    nextAuthorities: [],
    proposers: [],
    proposersCount: undefined,
    bestAuthorities: [],
    keyGenThreshold: undefined,
    nextBestAuthorities: [],
    proposerThreshold: undefined,
    signatureThreshold: undefined,
    blockId: blockId,
    id: blockId,
  })

  await newSession.save()
  return newSession
}

type SessionInput = Partial<{
  keyGenThreshold: Threshold
  signatureThreshold: Threshold
  ProposerThreshold: Threshold

  proposers: string[]
  proposersCount: number

  nextBestAuthorities: DKGAuthority[]
  bestAuthorities: DKGAuthority[]
  authorities: DKGAuthority[]
  nextAuthorities: DKGAuthority[]
}> & { blockId: string }

function isSet<T>(val: T | undefined): val is T {
  return typeof val !== "undefined"
}

export const fetchSessionAuthorizes = async (blockNumber: string) => {
  logger.info(`Fetching authorities for ${blockNumber}`)
  const authorities: Vec<DkgRuntimePrimitivesCryptoPublic> = (await api.query.dkg.authorities()) as any
  const nextAuthorities: Vec<DkgRuntimePrimitivesCryptoPublic> = (await api.query.dkg.nextAuthorities()) as any

  const bestAuthorities: Vec<ITuple<
    [u16, DkgRuntimePrimitivesCryptoPublic]
  >> = (await api.query.dkg.bestAuthorities()) as any
  const nextBestAuthorities: Vec<ITuple<
    [u16, DkgRuntimePrimitivesCryptoPublic]
  >> = (await api.query.dkg.nextBestAuthorities()) as any

  const authorityReputations = await api.query.dkg.authorityReputations.entries()
  const currentAuthoritiesAccounts = await api.query.dkg.accountToAuthority.entries()
  // Acount32 => auth Id
  const authorityIdMap: Record<string, string> = {}
  // auth Id => auth reputation
  const authorityReputationMap: Record<string, string> = {}

  currentAuthoritiesAccounts.forEach(([key, val]) => {
    authorityIdMap[
      key.args[0].toString().replace("0x", "")
    ] = val.toString().replace("0x", "")
  })
  authorityReputations.forEach(([key, val]) => {
    authorityReputationMap[
      key.args[0].toString().replace("0x", "")
    ] = val.toString()
  })

  const dkgAuthorityMapper = (
    id: DkgRuntimePrimitivesCryptoPublic
  ): DKGAuthority => {
    const accountId = id.toString().replace("0x", "")

    const authorityId = authorityIdMap[accountId]
    const data = {
      accountId,
      reputation: authorityReputationMap[authorityId],
      authorityId,
    }
    logger.info(`
	DKGAuthority
	account:${accountId}
	data:${JSON.stringify(data, null, 2)}
	accountId:${accountId},
	reputation: ${authorityReputationMap[authorityId]},
	authorityId:${authorityId},
	 `)
    return data
  }
  const dkgAuthorities: DKGAuthority[] = authorities.map(dkgAuthorityMapper)
  const nextDkgAuthorities: DKGAuthority[] = nextAuthorities.map(
    dkgAuthorityMapper
  )
  const bestDkgAuthorities: DKGAuthority[] = bestAuthorities
    .sort((a, b) => {
      const aOrder = (a[0] as AbstractInt).toNumber()
      const bOrder = (b[0] as AbstractInt).toNumber()
      return aOrder > bOrder ? 1 : aOrder < bOrder ? -1 : 0
    })
    .map(([_order, key]) => {
      return dkgAuthorityMapper(key)
    })

  const nextBestDkgAuthorities: DKGAuthority[] = nextBestAuthorities
    .sort((a, b) => {
      const aOrder = (a[0] as AbstractInt).toNumber()
      const bOrder = (b[0] as AbstractInt).toNumber()
      return aOrder > bOrder ? 1 : aOrder < bOrder ? -1 : 0
    })
    .map(([_order, key]) => {
      return dkgAuthorityMapper(key)
    })

  logger.info(`Fetching authorities for ${blockNumber}

  data:${JSON.stringify(
    {
      blockId: blockNumber,
      reputations: authorityReputationMap,
      accounts: authorityIdMap,
      authorities: dkgAuthorities,
      nextAuthorities: nextDkgAuthorities,
      bestAuthorities: bestDkgAuthorities,
      nextBestAuthorities: nextBestDkgAuthorities,
    },
    null,
    2
  )})
  `)

  return {
    blockId: blockNumber,
    authorities: dkgAuthorities,
    nextAuthorities: nextDkgAuthorities,
    bestAuthorities: bestDkgAuthorities,
    nextBestAuthorities: nextBestDkgAuthorities,
  }
}

export const createOrUpdateSession = async ({
  blockId,
  ...input
}: SessionInput) => {
  const session = await ensureSession(blockId)

  for (const key in Object.keys(input)) {
    const val = input[key]
    if (isSet(val)) {
      session[key] = val
    }
  }
  await session.save()
  return session
}
