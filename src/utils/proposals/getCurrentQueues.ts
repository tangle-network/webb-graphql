/**
 * Get current signed and unsigned queues
 */
import { ProposalItemProps } from "./index"
import {
  Block,
  ProposalCounter,
  ProposalItem,
  ProposalType,
  ProposalTypeCount,
} from "../../types"
import { ensureBlock } from "../../handlers"
import {
  DkgRuntimePrimitivesProposalDkgPayloadKey,
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
  nonce: number
}

function constructProposalItemId(
  input: Omit<ProposalCreateInput, "signature"> & {
    signature?: string
    removed?: boolean
  }
): string {
  return `${input.blockId}-${input.proposalId}-${input.nonce}-${
    input.removed ? "0" : "1"
  }${input.signature ? "1" : "0"}`
}

export async function createUnsignedProposal(
  input: Omit<ProposalCreateInput, "signature"> & {
    removed: boolean
  }
) {
  const { proposalId, blockId, type, data, removed, nonce } = input
  await ensureBlock(blockId)
  const id = constructProposalItemId(input)
  const unSingedProposal = ProposalItem.create({
    blockId,
    proposalId,
    data,
    removed,
    nonce,
    id,
    type,
  })
  await unSingedProposal.save()
  return unSingedProposal
}

export async function createSignedProposal(input: ProposalCreateInput) {
  const { proposalId, blockId, type, data, nonce, signature } = input
  await ensureBlock(blockId)
  const id = constructProposalItemId(input)
  const singedProposal = ProposalItem.create({
    blockId,
    proposalId,
    data,
    signature,
    removed: false,
    nonce,
    id,
    type,
  })
  await singedProposal.save()
}

export async function createProposalCounter(
  blockId: string
): Promise<ProposalCounter> {
  const signedProposalsData = await api.query.dkgProposalHandler.signedProposals.entries()
  const unSignedProposalsData = await api.query.dkgProposalHandler.unsignedProposalQueue.entries()
  const parsedSigProposals = signedProposalsData.map(([key]) => {
    const [chainId, dkgKey] = key.args
    const proposalType = dkgPayloadKeyToProposalType(dkgKey as any)
    const proposalId = createProposalId(chainId as any, dkgKey as any)
    return {
      proposalId,
      proposalType,
    }
  })
  const parsedUnSigProposals = unSignedProposalsData.map(([key]) => {
    const [chainId, dkgKey] = key.args
    const proposalType = dkgPayloadKeyToProposalType(dkgKey as any)
    const proposalId = createProposalId(chainId as any, dkgKey as any)
    return {
      proposalId,
      proposalType,
    }
  })
  const signedCounter: Partial<Record<ProposalType, ProposalTypeCount>> = {}
  const unSignedCounter: Partial<Record<ProposalType, ProposalTypeCount>> = {}

  parsedSigProposals.forEach((proposal) => {
    if (signedCounter[proposal.proposalType]) {
      signedCounter[proposal.proposalType].count = String(
        Number(signedCounter[proposal.proposalType].count) + 1
      )
      signedCounter[proposal.proposalType].proposalId.push(proposal.proposalId)
    } else {
      signedCounter[proposal.proposalType] = {
        count: "1",
        type: proposal.proposalType.toString(),
        proposalId: [proposal.proposalId],
      }
    }
  })

  parsedUnSigProposals.forEach((proposal) => {
    if (unSignedCounter[proposal.proposalType]) {
      unSignedCounter[proposal.proposalType].count = String(
        Number(unSignedCounter[proposal.proposalType].count) + 1
      )
      unSignedCounter[proposal.proposalType].proposalId.push(
        proposal.proposalId
      )
    } else {
      unSignedCounter[proposal.proposalType] = {
        count: "1",
        type: proposal.proposalType.toString(),
        proposalId: [proposal.proposalId],
      }
    }
  })

  const signedProposalsCount = signedProposalsData.length
  const unSignedProposalsCount = unSignedProposalsData.length

  const counter = ProposalCounter.create({
    id: blockId,
    blockNumber: Number(blockId),
    blockId,
    signedProposalsCount,
    unSignedProposalsCount,
    signedProposalsMap: Object.values(signedCounter),
    unSignedProposalsMap: Object.values(unSignedCounter),
  })
  await counter.save()
  return counter
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
      nonce: 0,
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
      nonce: 0,
    })
    await newSignedProposal.save()
  }

  return {
    signed: [],
    unsigned: [],
    block,
  }
}
