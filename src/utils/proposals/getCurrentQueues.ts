/**
 * Get current signed and unsigned queues
 */
import { ProposalItemProps } from "./index"
import { ProposalType } from "../../types"

export interface UnsignedProposalQueueItem {
  key: Key
  value: Value
}

export interface Key {
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

export interface Proposal {
  unsigned: Unsigned
}

export async function getCurrentQueues(): Promise<{
  signed: Omit<ProposalItemProps, "id">[]
  unsigned: Omit<ProposalItemProps, "id">[]
}> {
  const signedProposalsData = await api.query.dkgProposalHandler.signedProposals.entries()
  const signedProposals = signedProposalsData.map(([key, value]) => {
    return {
      key: {
        chainId: key.args[0].toString(),
        dkgKey: key.args[1].toHuman(),
      },
      value: value,
    }
  })
  const unsignedProposalsData = await api.query.dkgProposalHandler.unsignedProposalQueue.entries()
  const unsignedProposalsQueue = signedProposalsData.map(([key, value]) => {
    return {
      key: {
        chainId: key.args[0].toString(),
        dkgKey: key.args[1].toHuman(),
      },
      value: value,
    } as any
  }) as Array<UnsignedProposalQueueItem>

  return {
    signed: [],
    unsigned: [],
  }
}
