import { ensureBlock } from "./block"
import "@webb-tools/types"
import { Proposer, Session, SessionProposer, SessionValidator, Threshold, ThresholdVariant, Validator } from "../types"
import { u16, u32, Vec } from "@polkadot/types-codec"
import { DkgRuntimePrimitivesCryptoPublic } from "@polkadot/types/lookup"
import type { AccountId32 } from "@polkadot/types/interfaces/runtime"

import { ITuple } from "@polkadot/types-codec/types"
import { AbstractInt } from "@polkadot/types-codec/abstract/Int"
import { ensureAccount } from "./account"

/**
 * Check if the session is in the DB, if not create it
 * */
export const ensureSession = async (sessionNumber: string, block: string) => {
  await ensureBlock(block)
  const session = await Session.get(sessionNumber)
  if (session) {
    return session
  }
  const newSession = Session.create({
    blockId: block,
    blockNumber: Number(block),
    id: sessionNumber
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
  keyGenThreshold: ThresholdValue
  signatureThreshold: ThresholdValue
  proposerThreshold: ThresholdValue

  proposers: string[]
  proposersCount: number

  sessionAuthorities: SessionDKGAuthority[]
}> & { blockId: string; sessionId: string }

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
  const accountsTuple: [
    Vec<AccountId32>,
    Vec<AccountId32>,
    Vec<AccountId32>
  ] = (await Promise.all([
    api.query.dkg.currentAuthoritiesAccounts(),
    api.query.dkg.nextAuthoritiesAccounts(),
    api.query.session.validators()
  ])) as any
  const accounts = accountsTuple.reduce((acc: string[], accounts) => {
    const next = [...acc]
    accounts.forEach((a) => {
      if (next.includes(a.toString())) {
        return
      }
      next.push(a.toString())
    })
    return next
  }, [])

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
    api.query.dkg.nextBestAuthorities()
  ])) as any
  // Fetch reputations and authorities accounts for mapping
  const authorityReputations = await api.query.dkg.authorityReputations.entries()
  const currentAuthoritiesAccounts = await api.query.dkg.accountToAuthority.multi(
    accounts
  )
  // auth Id (DkgRuntimePrimitivesCryptoPublic::toString()) => Account32
  const authorityIdMap: Record<string, string> = {}
  // auth Id => auth reputation
  const authorityReputationMap: Record<string, string> = {}

  // Populate the authIdMap and authorityReputationMap
  currentAuthoritiesAccounts.forEach((authorityId, index) => {
    authorityIdMap[authorityId.toString().replace("0x", "")] = accounts[index]
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
      authorityId
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
    nextKeyGenThreshold
  ] = await Promise.all([
    api.query.dkg.pendingKeygenThreshold(),
    api.query.dkg.keygenThreshold(),
    api.query.dkg.nextKeygenThreshold()
  ]).then((val) => val.map((i) => parseInt(i.toHex())))
  const [
    pendingSignatureThreshold,
    currentSignatureThreshold,
    nextSignatureThreshold
  ] = await Promise.all([
    api.query.dkg.pendingSignatureThreshold(),
    api.query.dkg.signatureThreshold(),
    api.query.dkg.nextSignatureThreshold()
  ]).then((val) => val.map((i) => parseInt(i.toHex())))

  const keyGenThreshold: ThresholdValue = {
    current: currentKeyGenThreshold,
    next: nextKeyGenThreshold,
    pending: pendingKeyGenThreshold
  }
  const signatureThreshold: ThresholdValue = {
    current: currentSignatureThreshold,
    next: nextSignatureThreshold,
    pending: pendingSignatureThreshold
  }
  const pendingThresholdVal: u32 = (await api.query.dkgProposals.proposerThreshold()) as any
  const currentProposerThreshold = parseInt(pendingThresholdVal.toHex())
  const proposerThreshold: ThresholdValue = {
    current: currentProposerThreshold,
    next: currentProposerThreshold,
    pending: currentProposerThreshold
  }
  const inSet = (dkgAuth: DKGAuthority, set: DKGAuthority[]) =>
    set.findIndex((auth) => auth.authorityId === dkgAuth.authorityId) !== -1
  const sessionAuthorities = dkgAuthorities
    .map(
      (dkgAuth): SessionDKGAuthority => {
        return {
          authorityId: dkgAuth.authorityId,
          reputation: dkgAuth.reputation,
          accountId: dkgAuth.accountId,
          isBest: inSet(dkgAuth, bestDkgAuthorities),
          isNext: inSet(dkgAuth, nextDkgAuthorities),
          isNextBest: inSet(dkgAuth, nextBestDkgAuthorities)
        }
      }
    )
    .filter((s) => s.accountId !== undefined)

  const { sessionNumber: sessionId, sessionBlock } = await currentSessionId(
    blockNumber
  )
  return {
    sessionId,
    blockId: sessionBlock,
    sessionAuthorities,
    keyGenThreshold,
    signatureThreshold,
    proposerThreshold
  }
}
const SESSION_HEIGHT = 10

/**
 * Round the block number to a session id
 * a session is from block 0 to block $SessionHeight - 1
 *
 * */
export async function nextSessionId(
  blockId: string
): Promise<{ sessionNumber: string; sessionBlock: string }> {
  const sessionLength = await getSessionLength();
  const blockNumber = Number(blockId)
  const sessionNumber = Math.floor(blockNumber / sessionLength) + 1
  return {
    sessionNumber: sessionNumber.toString(),
    sessionBlock: `${sessionNumber * sessionLength}`
  }
}
let sessionLength = null;

async function getSessionLength():Promise<number>{
  if(sessionLength){
    return sessionLength
  }
  const period = await api.consts.dkgProposals.period as unknown as u32
  sessionLength = parseInt(period.toHex())
  logger.info(`Session length is ${sessionLength}`)
  return  sessionLength
}
export async function  currentSessionId(
  blockId: string
): Promise<{ sessionNumber: string; sessionBlock: string }> {
  const blockNumber = Number(blockId)
  const sessionLength = await getSessionLength()
  const sessionNumber = Math.floor(blockNumber / sessionLength)
  return {
    sessionNumber: sessionNumber.toString(),
    sessionBlock: `${sessionNumber * sessionLength}`
  }
}

export interface ThresholdValue {
  next: number;

  current: number;

  pending: number;
}

async function ensureThreshold(
  sessionId: string,
  value: ThresholdValue,
  variant: ThresholdVariant
) {
  const threshold = Threshold.create({
    id: `${sessionId}-${variant}`,
    sessionId,
    next: value.next,
    current: value.current,
    pending: value.pending,
    variant
  })

  await threshold.save()
  return threshold
}

async function ensureValidator(id: string, authorityId: string) {
  const validator = await Validator.get(id)
  if (validator) {
    return validator
  }
  await ensureAccount(id)
  const newValidator = Validator.create({
    id,
    authorityId,
    accountId: id
  })
  await newValidator.save()
  return newValidator
}

async function createOrUpdateSessionValidator(
  sessionId: string,
  input: SessionDKGAuthority,
  blockNumber:number
) {
  const id = `${sessionId}-${input.accountId}`
  logger.info(
    `Creating or updating session validator ${id} - ${input.accountId}`
  )
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
  sessionValidator.blockNumber = BigInt(blockNumber)
  await sessionValidator.save()
  return sessionValidator
}

async function ensureProposer(accountId) {
  const proposer = await Proposer.get(accountId)
  if (proposer) {
    return proposer
  }
  await ensureAccount(accountId)
  const newProposer = Proposer.create({
    id: accountId,
    accountId
  })
  await newProposer.save()
  return newProposer
}

async function createOrUpdateSessionProposer(
  sessionId: string,
  proposerAccount: string
) {
  const id = `${sessionId}-${proposerAccount}`
  const sessionProposer = new SessionProposer(id)
  await ensureProposer(proposerAccount)
  sessionProposer.sessionId = sessionId
  sessionProposer.proposerId = proposerAccount
  await sessionProposer.save()
}

/**
 * Crate or update a session
 * A BlockId is used as a session id
 * The input is a partial entry of a session
 *
 * */
export const createOrUpdateSession = async ({
                                              blockId,
                                              sessionId,
                                              ...input
                                            }: SessionInput) => {
  // Ensure the session is not already created
  const session = await ensureSession(sessionId, blockId)

  logger.info(`Update session ${blockId} values for ${Object.keys(input)}`)
  // Loop over the input and update the session
  for (const key of Object.keys(input) as Array<keyof SessionInput>) {
    const val = input[key]
    // Filter only for values exists
    if (isSet(val)) {
      if (key === "sessionAuthorities") {
        const sessionAuthorizes = val as SessionDKGAuthority[]
        for (const sessionAuth of sessionAuthorizes) {
          await createOrUpdateSessionValidator(session.id, sessionAuth , Number(blockId))
        }
        continue
      }

      if (key === "proposers") {
        const proposers = val as string[]
        for (const proposerAccount of proposers) {
          await createOrUpdateSessionProposer(session.id, proposerAccount)
        }
        continue
      }

      if (key === "keyGenThreshold") {
        await ensureThreshold(sessionId, val as any, ThresholdVariant.KEY_GEN)
        continue

      }
      if (key === "signatureThreshold") {
        await ensureThreshold(sessionId, val as any, ThresholdVariant.SIGNATURE)
        continue
      }

      if (key === "proposerThreshold") {
        await ensureThreshold(sessionId, val as any, ThresholdVariant.PROPOSER)
        continue

      }



      session[key] = val as any
    }
  }
  // Save the session
  await session.save()
  return session
}

/**
 * Set the public key id in the session
 * */
export async function setSessionKey(
  sessionId: string,
  blockId: string,
  keyId: string
) {
  //Ensure the session is not already created
  const session = await ensureSession(sessionId, blockId)
  session.publicKeyId = keyId
  await session.save()
}
