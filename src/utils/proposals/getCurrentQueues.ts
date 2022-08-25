/**
 * Get current signed and unsigned queues
 */
import { ProposalItemProps } from "./index"
import { Block, ProposalItem, ProposalType } from "../../types"
import { ensureBlock } from "../../handlers"

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
