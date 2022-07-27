import { SubstrateEvent } from '@subql/types'
import { Referendum } from '../../types'
import { getTimeline } from '.'

export async function ensureReferendum(refIndex: string) {
  let data = await Referendum.get(refIndex)
  if (!data) {
    data = new Referendum(refIndex)
    data.refIndex = Number(refIndex)
    await data.save()
  }
  return data
}

export async function createReferendum(event: SubstrateEvent) {
  const [refIndex, threshold] = event.event.data.toJSON() as [string, string]
  const data = await ensureReferendum(refIndex)
  data.threshold = threshold
  data.timeline = [getTimeline(event)]

  await data.save()
  return data
}

export async function updateReferendum(event: SubstrateEvent) {
  const data = await ensureReferendum(event.event.data[0].toString())
  const timeline = getTimeline(event)
  if (data.timeline) {
    data.timeline.push(timeline)
  } else {
    data.timeline = [timeline]
  }
  data.executed = data.executed || timeline.status === 'Executed'
  await data.save()
  return data
}
