import { Proposers } from "../../../types"

export async function createProposers(
  blockId: string,
  proposers: string[]
): Promise<Proposers> {
  const proposersEntity = Proposers.create({
    proposers,
    blockId,
    id: blockId,
    count: proposers.length,
  })
  await proposersEntity.save()
  return proposersEntity
}
