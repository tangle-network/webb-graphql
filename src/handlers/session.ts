import { ensureBlock } from "./block"
import "@webb-tools/types"
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
  // auth Id (DkgRuntimePrimitivesCryptoPublic::toString()) => Account32
  const authorityIdMap: Record<string, string> = {}
  // auth Id => auth reputation
  const authorityReputationMap: Record<string, string> = {}

  currentAuthoritiesAccounts.forEach(([key, val]) => {
    const account32 = key.args[0].toString().replace("0x", "")
    const authId = val.toString().replace("0x", "")
    authorityIdMap[authId] = account32
  })
  authorityReputations.forEach(([key, val]) => {
    const authId = key.args[0].toString().replace("0x", "")
    authorityReputationMap[authId] = val.toString()
  })

  const dkgAuthorityMapper = (
    authIdRaw: DkgRuntimePrimitivesCryptoPublic
  ): DKGAuthority => {
    const authorityId = authIdRaw.toString().replace("0x", "")

    const accountId = authorityIdMap[authorityId]
    return {
      accountId,
      reputation: authorityReputationMap[authorityId] || "0",
      authorityId,
    }
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

  const [
    pendingKeyGenThreshold,
    currentKeyGenThreshold,
    nextKeyGenThreshold,
  ] = await Promise.all([
    api.query.dkg.pendingKeygenThreshold(),
    api.query.dkg.keygenThreshold(),
    api.query.dkg.nextKeygenThreshold(),
  ]).then((val) => val.map((i) => parseInt(i.toHex())))
  const [
    pendingSignatureThreshold,
    currentSignatureThreshold,
    nextSignatureThreshold,
  ] = await Promise.all([
    api.query.dkg.pendingSignatureThreshold(),
    api.query.dkg.signatureThreshold(),
    api.query.dkg.nextSignatureThreshold(),
  ]).then((val) => val.map((i) => parseInt(i.toHex())))

  const keyGenThreshold: Threshold = {
    current: currentKeyGenThreshold,
    next: nextKeyGenThreshold,
    pending: pendingKeyGenThreshold,
  }
  const signatureThreshold: Threshold = {
    current: currentSignatureThreshold,
    next: nextSignatureThreshold,
    pending: pendingSignatureThreshold,
  }
  return {
    blockId: blockNumber,
    authorities: dkgAuthorities,
    nextAuthorities: nextDkgAuthorities,
    bestAuthorities: bestDkgAuthorities,
    nextBestAuthorities: nextBestDkgAuthorities,
    keyGenThreshold,
    signatureThreshold,
  }
}

export const createOrUpdateSession = async ({
  blockId,
  ...input
}: SessionInput) => {
  const session = await ensureSession(blockId)

  logger.info(`Update session ${blockId} values for ${Object.keys(input)}`)

  for (const key of Object.keys(input)) {
    const val = input[key]
    if (isSet(val)) {
      session[key] = val
    }
  }
  await session.save()
  return session
}
