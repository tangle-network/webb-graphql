import { SubstrateEvent } from '@subql/types'
import { Event } from '../types'
import { ensureBlock } from './block'
import { ensureExtrinsic } from './extrinsic'
import { createDemocracy } from './democracy'

export async function ensureEvent(event: SubstrateEvent) {
  const block = await ensureBlock(event.block.block.header.number.toString())
  const idx = event.idx
  const recordId = `${block.id}-${idx}`
  let data = await Event.get(recordId)
  if (!data) {
    data = new Event(recordId)
    data.index = idx
    data.blockId = block.id
    data.blockNumber = BigInt(block.id)
    data.timestamp = block.timestamp
    await data.save()
  }
  return data
}

export async function createEvent(event: SubstrateEvent) {
  const data = await ensureEvent(event)
  data.section = event.event.section
  data.method = event.event.method
  // lazy method
  data.docs = event.event.data.meta.docs.toString()
  data.arguments = event.event.data.meta.args.toString()
  data.data = event.event.data.toString()

  const extrinsic = await (event.extrinsic
    ? ensureExtrinsic(event.extrinsic)
    : undefined)
  if (extrinsic) {
    data.extrinsicId = extrinsic.id
  }

  await data.save()

  switch (data.section) {
    case 'democracy': {
      await createDemocracy(event)
    }

    default:
      break
  }

  return data
}
