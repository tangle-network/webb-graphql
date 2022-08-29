/**
 * Get current signed and unsigned queues
 */
import { ProposalItemProps } from "./index"
import {
  Block,
  ProposalItem,
  ProposalType,
  UnSigedProposalQueue,
} from "../../types"
import { ensureBlock } from "../../handlers"
import {
  DkgRuntimePrimitivesProposalDkgPayloadKey,
  DkgRuntimePrimitivesProposalStoredUnsignedProposal,
  WebbProposalsHeaderTypedChainId,
} from "@polkadot/types/lookup"

export interface UnsignedProposalQueueItem {
  key: Key
  value: Value
}

export interface Key {
  id: string
  chainId: string
  dkgKey: DkgKey
}

export type DkgKey = Record<ProposalType, string>

export interface Unsigned {
  kind: ProposalType
  data: string
}

export interface Value {
  proposal: Proposal
  timestamp: number
}

export interface Signed {
  kind: string
  data: string
  signature: string
}

export interface Proposal {
  unsigned: Unsigned
  signed: Signed
}

export function dkgPayloadKeyToProposalType(
  dkgKey: DkgRuntimePrimitivesProposalDkgPayloadKey
): ProposalType {
  switch (dkgKey.type) {
    case "EvmProposal":
      return ProposalType.EvmProposal
    case "RefreshVote":
      return ProposalType.RefreshVote
    case "ProposerSetUpdateProposal":
      return ProposalType.ProposerSetUpdateProposal
    case "AnchorCreateProposal":
      return ProposalType.AnchorCreateProposal
    case "AnchorUpdateProposal":
      return ProposalType.AnchorUpdateProposal
    case "TokenAddProposal":
      return ProposalType.TokenAddProposal
    case "TokenRemoveProposal":
      return ProposalType.TokenRemoveProposal
    case "WrappingFeeUpdateProposal":
      return ProposalType.WrappingFeeUpdateProposal
    case "ResourceIdUpdateProposal":
      return ProposalType.ResourceIdUpdateProposal
    case "RescueTokensProposal":
      return ProposalType.RescueTokensProposal
    case "MaxDepositLimitUpdateProposal":
      return ProposalType.MaxDepositLimitUpdateProposal
    case "MinWithdrawalLimitUpdateProposal":
      return ProposalType.MinWithdrawalLimitUpdateProposal
    case "SetVerifierProposal":
      return ProposalType.SetVerifierProposal
    case "SetTreasuryHandlerProposal":
      return ProposalType.SetTreasuryHandlerProposal
    case "FeeRecipientUpdateProposal":
      return ProposalType.FeeRecipientUpdateProposal
  }
}

export function createProposalId(
  chainId: WebbProposalsHeaderTypedChainId,
  dkgKey: DkgRuntimePrimitivesProposalDkgPayloadKey
): string {
  const dkgKeyHash = dkgKey.hash.toString()
  const chainIdValue = chainId.value.toString()
  return `${dkgKeyHash.replace("0x", "")}-${chainIdValue.trim() || "0"}`
}

export async function ensureSingedProposal(
  proposalId: string
): Promise<ProposalItem | null> {
  const items = await ProposalItem.getByProposalId(proposalId)
  const signed = items.find((item) => typeof item.signature !== "undefined")
  if (signed) {
    return signed
  }
  return null
}

export type ProposalCreateInput = {
  blockId: string
  proposalId: string
  type: ProposalType
  data: string
  signature: string
}

export async function syncUnsignedProposals(blockId: string) {
  logger.info("Sync syncUnsignedProposals for block id " + blockId)
  const queue = await api.query.dkgProposalHandler.unsignedProposalQueue.entries()
  const parsedQueue = queue.map(([key, value]) => {
    const proposalData = (value as unknown) as DkgRuntimePrimitivesProposalStoredUnsignedProposal
    const [chainId, dkgPayloadKey] = key.args
    // @ts-ignore
    const proposalId = createProposalId(chainId, dkgPayloadKey)
    const proposalUnsigned = proposalData.proposal.asUnsigned
    const data = proposalUnsigned.data.toString()
    const proposalType = dkgPayloadKeyToProposalType(dkgPayloadKey as any)
    return {
      data,
      proposalId,
      proposalType,
    }
  })
  let unsigQueue: null | string = null
  for (const proposal of parsedQueue) {
    const inserted = await ProposalItem.getByProposalId(proposal.proposalId)
    const unsigned = inserted.find(
      (item) => typeof item.signature === "undefined"
    )
    if (unsigned) {
      if (!unsigQueue) {
        unsigQueue = unsigned.unsignedQueueId || null
      }
      continue
    }
    if (unsigQueue) {
      const queue = UnSigedProposalQueue.create({
        blockId,
        id: blockId,
      })
      await queue.save()
      unsigQueue = queue.id
    }
    await createUnsignedProposal({
      blockId,
      data: proposal.data,
      proposalId: proposal.proposalId,
      type: proposal.proposalType,
      unsignedQueueId: unsigQueue,
      removed: false,
    })
  }
}

export async function createUnsignedProposal({
  proposalId,
  blockId,
  type,
  data,
  unsignedQueueId,
  removed,
}: Omit<ProposalCreateInput, "signature"> & {
  unsignedQueueId: string
  removed: boolean
}) {
  const block = await ensureBlock(blockId)
  const unSingedProposal = ProposalItem.create({
    blockId,
    proposalId,
    data,
    removed,
    id: `${block.id}-${proposalId}-${removed ? "0" : "1"}`,
    type,
    unsignedQueueId,
  })
  await unSingedProposal.save()
  return unSingedProposal
}

export async function ensureUnsignedQueueProposal(blockId: string) {
  const block = await ensureBlock(blockId)
  const queuesOfBlock = await UnSigedProposalQueue.getByBlockId(blockId)
  const queue = queuesOfBlock[0]
  if (queue) {
    return queue
  }
  const newQueue = UnSigedProposalQueue.create({
    id: `${block.id}-0`,
    blockId,
  })
  await newQueue.save()
  return newQueue
}

export async function createSignedProposal({
  proposalId,
  blockId,
  type,
  data,
  signature,
}: ProposalCreateInput) {
  const block = await ensureBlock(blockId)
  const singedProposal = ProposalItem.create({
    blockId,
    proposalId,
    data,
    signature,
    removed: false,
    id: `${block.id}-${proposalId}-0`,

    type,
  })
  await singedProposal.save()
}

/**
 *
 * Fetch all the proposals from chain
 * */
export async function SyncSingedProposals() {
  const signedProposalsData = await api.query.dkgProposalHandler.signedProposals.entries()
  const signedProposals = signedProposalsData.map(([key, value]) => {
    const payloadKey = key.args[1]
    const id = payloadKey.toHuman()
    return {
      key: {
        id: key.toString(),
        chainId: key.args[0].toString(),
        dkgKey: key.args[1].toHuman(),
      },
      value: {
        proposal: value,
      },
    } as any
  }) as Array<UnsignedProposalQueueItem>

  const chainBlock = await api.rpc.chain.getBlock()
  const blockNumber = chainBlock.block.header.number.toNumber()
  const block = await ensureBlock(blockNumber.toString())

  for (const signedProposal of signedProposals) {
    // check if this proposal exists in singed proposals
    const possibleProposals = await ProposalItem.getByProposalId(
      signedProposal.key.id
    )
    const isSigned = possibleProposals.some(
      (proposal) => typeof proposal.signature !== undefined
    )
    // if it's inserted  skip it
    if (isSigned) {
      continue
    }
    // Add the proposal  it to be a signed proposal
    const sigData = signedProposal.value.proposal.signed
    const newSignedProposal = ProposalItem.create({
      signature: sigData.signature,
      data: sigData.data,
      proposalId: signedProposal.key.id,
      type: undefined,
      id: `${block.id}-${signedProposal.key.id}`,
      blockId: block.id,
      removed: false,
    })
    await newSignedProposal.save()
  }
}

export async function getCurrentQueues(): Promise<{
  signed: Omit<ProposalItemProps, "id">[]
  unsigned: Omit<ProposalItemProps, "id">[]
  block: Block
}> {
  const signedProposalsData = await api.query.dkgProposalHandler.signedProposals.entries()
  const signedProposals = signedProposalsData.map(([key, value]) => {
    return {
      key: {
        id: key.toString(),
        chainId: key.args[0].toString(),
        dkgKey: key.args[1].toHuman(),
      },
      value: {
        proposal: value,
      },
    } as any
  }) as Array<UnsignedProposalQueueItem>
  const unsignedProposalsData = await api.query.dkgProposalHandler.unsignedProposalQueue.entries()
  const unsignedProposalsQueue = unsignedProposalsData.map(([key, value]) => {
    return {
      key: {
        id: key.toString(),
        chainId: key.args[0].toString(),
        dkgKey: key.args[1].toHuman(),
      },
      value: value,
    } as any
  }) as Array<UnsignedProposalQueueItem>
  const chainBlock = await api.rpc.chain.getBlock()
  const blockNumber = chainBlock.block.header.number.toNumber()
  const block = await ensureBlock(blockNumber.toString())

  for (const signedProposal of signedProposals) {
    // check if this proposal exists in singed proposals
    const possibleProposals = await ProposalItem.getByProposalId(
      signedProposal.key.id
    )
    const isSigned = possibleProposals.some(
      (proposal) => typeof proposal.signature !== undefined
    )
    // if it's inserted  skip it

    if (isSigned) {
      continue
    }
    // Add the proposal  it to be a signed proposal
    const sigData = signedProposal.value.proposal.signed
    const newSignedProposal = ProposalItem.create({
      signature: sigData.signature,
      data: sigData.data,
      proposalId: signedProposal.key.id,
      type: undefined,
      id: `${block.id}-${signedProposal.key.id}`,
      blockId: block.id,
      removed: false,
    })
    await newSignedProposal.save()
  }

  return {
    signed: [],
    unsigned: [],
    block,
  }
}
