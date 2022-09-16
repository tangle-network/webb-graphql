import { ensureBlock } from "./block"
import "@webb-tools/types"
import { Session, SessionValidator, Threshold, Validator } from "../types"
import { u16, u32, Vec } from "@polkadot/types-codec"
import { DkgRuntimePrimitivesCryptoPublic } from "@polkadot/types/lookup"
import { ITuple } from "@polkadot/types-codec/types"
import { AbstractInt } from "@polkadot/types-codec/abstract/Int"

/**
 * Check if the session is in the DB, if not create it
 * */
export const ensureSession = async (blockId: string) => {
  await ensureBlock(blockId)
  const session = await Session.get(blockId)
  if (session) {
    return session
  }
  const newSession = Session.create({
    proposers: [],
    proposersCount: undefined,
    keyGenThreshold: undefined,
    proposerThreshold: undefined,
    signatureThreshold: undefined,
    blockId: blockId,
    blockNumber: Number(blockId),
    id: blockId,
  })

  await newSession.save()
  return newSession
}
type DKGAuthority = {
  authorityId: string
  accountId: string
  reputation?: string
}

type SessionDKGAuthority = DKGAuthority & {
  isBest: boolean
  isNextBest: boolean
  isNext: boolean
  authorityId: string

  accountId: string

  reputation?: string
}
type SessionInput = Partial<{
  keyGenThreshold: Threshold
  signatureThreshold: Threshold
  ProposerThreshold: Threshold

  proposers: string[]
  proposersCount: number

  sessionAuthorities: SessionDKGAuthority[]
}> & { blockId: string }

function isSet<T>(val: T | undefined): val is T {
  return typeof val !== "undefined"
}

/**
 *
 * Fetch authorities for a block number
 * The block number is used as an identifier for the session
 * SubQuery provides an APIAt that will fetch the data at the current(SubQuery indexer) block number
 * */
export const fetchSessionAuthorizes = async (blockNumber: string) => {
  logger.info(`Fetching authorities for ${blockNumber}`)
  // Fetch authorities for a block number
  const [authorities, nextAuthorities, bestAuthorities, nextBestAuthorities]: [
    Vec<DkgRuntimePrimitivesCryptoPublic>,
    Vec<DkgRuntimePrimitivesCryptoPublic>,
    Vec<ITuple<[u16, DkgRuntimePrimitivesCryptoPublic]>>,
    Vec<ITuple<[u16, DkgRuntimePrimitivesCryptoPublic]>>
  ] = (await Promise.all([
    api.query.dkg.authorities(),
    api.query.dkg.nextAuthorities(),
    api.query.dkg.bestAuthorities(),
    api.query.dkg.nextBestAuthorities(),
  ])) as any
  // Fetch reputations and authorities accounts for mapping
  const authorityReputations = await api.query.dkg.authorityReputations.entries()
  const currentAuthoritiesAccounts = await api.query.dkg.accountToAuthority.entries()
  // auth Id (DkgRuntimePrimitivesCryptoPublic::toString()) => Account32
  const authorityIdMap: Record<string, string> = {}
  // auth Id => auth reputation
  const authorityReputationMap: Record<string, string> = {}

  // Populate the authIdMap and authorityReputationMap
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
  const pendingThresholdVal: u32 = (await api.query.dkgProposals.proposerThreshold()) as any
  const currentProposerThreshold = parseInt(pendingThresholdVal.toHex())
  const proposerThreshold: Threshold = {
    current: currentProposerThreshold,
    next: currentProposerThreshold,
    pending: currentProposerThreshold,
  }
  const inSet = (dkgAuth: DKGAuthority, set: DKGAuthority[]) =>
    set.findIndex((auth) => auth.authorityId === dkgAuth.authorityId) !== -1
  const sessionAuthorities = dkgAuthorities.map(
    (dkgAuth): SessionDKGAuthority => {
      return {
        authorityId: dkgAuth.authorityId,
        reputation: dkgAuth.reputation,
        accountId: dkgAuth.accountId,
        isBest: inSet(dkgAuth, bestDkgAuthorities),
        isNext: inSet(dkgAuth, nextDkgAuthorities),
        isNextBest: inSet(dkgAuth, nextBestDkgAuthorities),
      }
    }
  )
  return {
    blockId: blockNumber,
    sessionAuthorities,
    keyGenThreshold,
    signatureThreshold,
    proposerThreshold,
  }
}

export function nextSession(blockId: string): string {
  const blockNumber = Number(blockId)
  const sessionNumber = Math.floor(blockNumber / 10) * 10

  return String(sessionNumber + 10)
}
async function ensureValidator(id: string, authorityId: string) {
  const validator = await Validator.get(id)
  if (validator) {
    return validator
  }
  const newValidator = Validator.create({
    id,
    authorityId,
    accountId: id,
  })
  await newValidator.save()
  return newValidator
}
async function createOrUpdateSessionValidator(
  sessionId: string,
  input: SessionDKGAuthority
) {
  const id = `${sessionId}-${input.authorityId}`
  const sessionValidator = new SessionValidator(id)
  await ensureValidator(input.accountId, input.authorityId)
  sessionValidator.sessionId = sessionId
  sessionValidator.validatorId = input.accountId
  sessionValidator.bestOrder = 0
  sessionValidator.isBest = input.isBest
  sessionValidator.isNext = input.isNext
  sessionValidator.isNextBest = input.isNextBest
  sessionValidator.nextBestOrder = 0
  sessionValidator.reputation = input.reputation
  await sessionValidator.save()
  return sessionValidator
}

/**
 * Crate or update a session
 * A BlockId is used as a session id
 * The input is a partial entry of a session
 *
 * */
export const createOrUpdateSession = async ({
  blockId,
  ...input
}: SessionInput) => {
  // Ensure the session is not already created
  const session = await ensureSession(blockId)

  logger.info(`Update session ${blockId} values for ${Object.keys(input)}`)
  // Loop over the input and update the session
  for (const key of Object.keys(input)) {
    const val = input[key]
    // Filter only for values exists
    if (isSet(val)) {
      if (key === "sessionAuthorities") {
        const sessionAuthorizes = val as SessionDKGAuthority[]
        for (const sessionAuth of sessionAuthorizes) {
          await createOrUpdateSessionValidator(session.id, sessionAuth)
        }
        continue
      }
      session[key] = val
    }
  }
  // Save the session
  await session.save()
  return session
}

/**
 * Set the public key id in the session
 * */
export async function setSessionKey(blockId: string, keyId: string) {
  //Ensure the session is not already created
  const session = await ensureSession(blockId)
  session.publicKeyId = keyId
  await session.save()
}
