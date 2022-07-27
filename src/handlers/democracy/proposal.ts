import { SubstrateEvent } from '@subql/types'
import { Proposal } from '../../types'
import { getTimeline } from '.'

export async function ensureProposal(propIndex: string) {
  let data = await Proposal.get(propIndex)
  if (!data) {
    data = new Proposal(propIndex)
    data.propIndex = Number(propIndex)
    await data.save()
  }
  return data
}

export async function createProposal(event: SubstrateEvent) {
  const [propIndex, deposit] = event.event.data.toJSON() as [string, string]
  const data = await ensureProposal(propIndex)
  data.deposit = BigInt(deposit)
  data.author = event.extrinsic.extrinsic.signer.toString()
  data.preimage = event.extrinsic.extrinsic.args[0].toString()
  data.timeline = [getTimeline(event)]

  await data.save()
  return data
}

export async function updateProposal(event: SubstrateEvent) {
  const data = await ensureProposal(event.event.data[0].toString())
  const timeline = getTimeline(event)
  if (data.timeline) {
    data.timeline.push(timeline)
  } else {
    data.timeline = [timeline]
  }
  await data.save()
  return data
}
