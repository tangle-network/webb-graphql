import { ProposalItem } from "../types"

export async function ensureProposal(proposalId: number) {
  const proposal = await ProposalItem.get(String(proposalId))
  if (proposal) {
    return proposal
  }

  // const props = ProposalItem.create({
  //   id,
  // })
}

export async function createProposal() {
  // await proposal.save()
}
