import { ensureBlock } from "./block"
import { DKGAuthority, Session, Threshold } from "../types"

export const ensureSession = async (blockId: string) => {
  const block = await ensureBlock(blockId)
  const session = await Session.get(blockId)
  if (session) {
    return session
  }
  const newSession = Session.create({
    authorities: [], nextAuthorities: [], proposers: [], proposersCount: undefined,
    bestAuthorities: [],
    keyGenThreshold: undefined,
    nextBestAuthorities: [],
    proposerThreshold: undefined,
    signatureThreshold: undefined,
    blockId: blockId,
    id: blockId
  })

  await newSession.save()
  return newSession
}

type SessionInput = Partial<{
  keyGenThreshold: Threshold;
  signatureThreshold: Threshold;
  ProposerThreshold: Threshold;

  proposers: string[]
  proposersCount: number

  nextBestAuthorities: DKGAuthority[];
  bestAuthorities: DKGAuthority[];
  authorities: DKGAuthority[];
  nextAuthorities: DKGAuthority[];
}> & { blockId: string };

function isSet<T>(val: T | undefined): val is T {
  return typeof val !== "undefined"
}

export const createOrUpdateSession = async ({ blockId, ...input }: SessionInput) => {
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
