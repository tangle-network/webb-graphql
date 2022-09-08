/**
 * Get current signed and unsigned queues
 */
import {
  ProposalCounter,
  ProposalItem,
  ProposalStatus,
  ProposalStatusCount,
  ProposalType,
  ProposalTypeCount,
  UnsignedProposalsQueue,
  UnsignedProposalsQueueItem,
} from "../../types"
import {
  DkgRuntimePrimitivesProposalDkgPayloadKey,
  WebbProposalsHeaderTypedChainId,
} from "@polkadot/types/lookup"
import { getSessionIdFromBlock } from "../sessionId"

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

export async function ensureProposalQueue(blockId: string) {
  const queue = await UnsignedProposalsQueue.get(blockId)
  if (queue) {
    return queue
  }
  const newQueue = UnsignedProposalsQueue.create({
    id: blockId,
    blockId,
    blockNumber: Number(blockId),
  })
  await newQueue.save()
  return newQueue
}

export async function ensureProposalQueueItem(
  blockId: string,
  proposalId: string
) {
  const id = `${blockId}-${proposalId}`
  const item = await UnsignedProposalsQueueItem.get(id)
  // TODO : Debug this more as the proposal isn't created while it should be
  await ensureProposalItem({ blockId, nonce: proposalId })
  if (item) {
    return item
  }
  const newItem = UnsignedProposalsQueueItem.create({
    id,
    queueId: blockId,
    proposalId,
  })
  await newItem.save()
  return newItem
}

export function createProposalId(
  chainId: WebbProposalsHeaderTypedChainId,
  dkgKey: DkgRuntimePrimitivesProposalDkgPayloadKey
): string {
  const dkgKeyHash = dkgKey.hash.toString()
  const chainIdValue = chainId.value.toString()
  return `${dkgKeyHash.replace("0x", "")}-${chainIdValue.trim() || "0"}`
}

export type ProposalCreateInput = {
  blockId: string
  proposalId: string
  type: ProposalType
  data: string
  signature?: string
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

/**
 *
 * Ensure a proposal item is added
 * return the proposal item if exists or creates a new unsigned empty votes proposal item
 * */
export async function ensureProposalItemStorage(
  input: ProposalCreateInput
): Promise<ProposalItem> {
  const id = String(input.nonce)
  const proposalItem = await ProposalItem.get(id)
  if (proposalItem) {
    return proposalItem
  }
  const { blockId, type, data, nonce } = input
  const status = {
    blockNumber: blockId,
    status: ProposalStatus.Open.toString(),
    txHash: "",
  }
  const newProposalItem = ProposalItem.create({
    blockId,
    data,
    removed: false,
    nonce,
    id,
    type,
    votes: [
      {
        for: 0,
        against: 0,
        againstVoters: [],
        forVoters: [],
        blockNumber: blockId,
      },
    ],
    status: status.status.toString(),
    timelineStatus: [status],
    currentStatus: status,
  })
  await newProposalItem.save()
  return newProposalItem
}

type ProposalItemFindInput = {
  blockId: string
  nonce: string
}

export async function ensureProposalItem(input: ProposalItemFindInput) {
  const { blockId, nonce } = input
  const id = String(nonce)
  const proposal = await ProposalItem.get(id)
  if (proposal) {
    return proposal
  }
  const status = {
    blockNumber: blockId,
    status: ProposalStatus.Open.toString(),
    txHash: "",
  }
  const newProposal = ProposalItem.create({
    id,
    blockId: input.blockId,
    data: "0x00",
    removed: false,
    nonce: Number(id),
    timelineStatus: [status],
    votes: [
      {
        for: 0,
        against: 0,
        againstVoters: [],
        forVoters: [],
        blockNumber: blockId,
      },
    ],
    type: ProposalType.Unknown,
    currentStatus: status,
    status: status.status.toString(),
    signature: undefined,
  })
  await newProposal.save()
  return newProposal
}

export async function addVote(
  input: ProposalItemFindInput,
  voter: string,
  isFor = true
) {
  const proposal = await ensureProposalItem(input)
  const lastVotes = proposal.votes[proposal.votes.length - 1]
  proposal.votes.push({
    for: lastVotes.for + (isFor ? 1 : 0),
    against: lastVotes.against + (isFor ? 0 : 1),
    forVoters: isFor
      ? [...lastVotes.forVoters, voter]
      : [...lastVotes.forVoters],
    againstVoters: isFor
      ? [...lastVotes.againstVoters]
      : [...lastVotes.againstVoters, voter],
    blockNumber: input.blockId,
  })
  await proposal.save()
}

async function updateProposalStatus(
  findInput: ProposalItemFindInput,
  status: ProposalStatus
) {
  const proposal = await ensureProposalItem(findInput)

  proposal.timelineStatus.push({
    status: status.toString(),
    blockNumber: findInput.blockId,
  })

  const currentStatus = proposal.status as ProposalStatus
  let activeTimelineStatus = { ...proposal.currentStatus }
  switch (currentStatus) {
    case ProposalStatus.Signed:
      {
        switch (status) {
          case ProposalStatus.Rejected:
          case ProposalStatus.Accepted:
          case ProposalStatus.Executed:
          case ProposalStatus.FailedToExecute:
            activeTimelineStatus = {
              status: status.toString(),
              txHash: "",
              blockNumber: findInput.blockId,
            }
        }
      }
      break
    case ProposalStatus.Open:
      {
        switch (status) {
          case ProposalStatus.Signed:
          case ProposalStatus.Rejected:
          case ProposalStatus.Accepted:
          case ProposalStatus.Executed:
          case ProposalStatus.FailedToExecute:
            activeTimelineStatus = {
              status: status.toString(),
              txHash: "",
              blockNumber: findInput.blockId,
            }
        }
      }
      break
  }
  proposal.status = activeTimelineStatus.status
  proposal.currentStatus = activeTimelineStatus
  await proposal.save()
  return proposal
}

export async function approveProposal(findInput: ProposalItemFindInput) {
  await updateProposalStatus(findInput, ProposalStatus.Accepted)
}

export async function rejectProposal(findInput: ProposalItemFindInput) {
  await updateProposalStatus(findInput, ProposalStatus.Rejected)
}

export async function signProposal(
  findInput: ProposalItemFindInput,
  sig: string
) {
  const proposal = await updateProposalStatus(findInput, ProposalStatus.Signed)
  proposal.signature = sig
  await proposal.save()
}

export async function removeProposal(findInput: ProposalItemFindInput) {
  const proposal = await updateProposalStatus(findInput, ProposalStatus.Removed)
  proposal.removed = true
  await proposal.save()
}

export async function executedProposal(findInput: ProposalItemFindInput) {
  const proposal = await updateProposalStatus(
    findInput,
    ProposalStatus.Executed
  )
  proposal.removed = true
  await proposal.save()
}

export async function failedProposal(findInput: ProposalItemFindInput) {
  const proposal = await updateProposalStatus(
    findInput,
    ProposalStatus.FailedToExecute
  )
  proposal.removed = true
  await proposal.save()
}

export async function createProposalCounter(
  blockId: string
): Promise<ProposalCounter> {
  const signedProposalsData = await api.query.dkgProposalHandler.signedProposals.entries()
  const unSignedProposalsData = await api.query.dkgProposalHandler.unsignedProposalQueue.entries()
  const parsedSigProposals = signedProposalsData.map(([key]) => {
    const [_chainId, dkgKey] = (key.args as unknown) as [
      WebbProposalsHeaderTypedChainId,
      DkgRuntimePrimitivesProposalDkgPayloadKey
    ]
    const proposalType = dkgPayloadKeyToProposalType(dkgKey as any)
    const nonce = dkgKey.value.toString()
    return {
      proposalId: nonce,
      proposalType,
    }
  })
  const parsedUnSigProposals = unSignedProposalsData.map(([key]) => {
    const [_chainId, dkgKey] = (key.args as unknown) as [
      WebbProposalsHeaderTypedChainId,
      DkgRuntimePrimitivesProposalDkgPayloadKey
    ]
    const proposalType = dkgPayloadKeyToProposalType(dkgKey as any)
    const nonce = dkgKey.value.toString()
    return {
      proposalId: nonce,
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
  const proposalStatusMap: Partial<Record<
    ProposalStatus,
    ProposalStatusCount
  >> = {}
  const proposalsStatuses = [
    ProposalStatus.Open,
    ProposalStatus.Signed,
    ProposalStatus.Accepted,
    ProposalStatus.Rejected,
    // ProposalStatus.Removed,
    ProposalStatus.Executed,
    ProposalStatus.FailedToExecute,
  ].map(async (status) => {
    const proposals = await ProposalItem.getByStatus(String(status))
    proposals.forEach((proposal) => {
      if (proposalStatusMap[status]) {
        proposalStatusMap[status].count = String(
          Number(proposalStatusMap[status].count) + 1
        )
        proposalStatusMap[status].proposalId.push(proposal.id)
      } else {
        proposalStatusMap[status] = {
          count: "1",
          status: status.toString(),
          proposalId: [proposal.id],
        }
      }
    })
  })
  await Promise.all(proposalsStatuses)
  const signedProposalsCount = signedProposalsData.length
  const unSignedProposalsCount = unSignedProposalsData.length
  const counterId = blockId
  const counter = ProposalCounter.create({
    id: counterId,
    blockNumber: Number(blockId),
    blockId,
    signedProposalsCount,
    unSignedProposalsCount,
    signedProposalsMap: Object.values(signedCounter),
    unSignedProposalsMap: Object.values(unSignedCounter),
    statusMap: Object.values(proposalStatusMap),
  })
  await ensureProposalQueue(blockId)
  await Promise.all(
    parsedUnSigProposals.map((p) => {
      return ensureProposalQueueItem(blockId, p.proposalId)
    })
  )
  await counter.save()
  return counter
}
