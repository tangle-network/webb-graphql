import { SubstrateEvent } from '@subql/types'
import { createProposal, updateProposal } from './proposal'
import { createReferendum, updateReferendum } from './referendum'

export function getTimeline(event: SubstrateEvent) {
  const timeline = {
    status: event.event.method,
    extrinsic:
      event.extrinsic &&
      `${event.block.block.header.number}-${event.extrinsic.idx}`,
    timestamp: event.block.timestamp,
  }
  return timeline
}

const Action = {
  Proposed: createProposal,
  Tabled: updateProposal,

  Started: createReferendum,
  Cancelled: updateReferendum,
  Passed: updateReferendum,
  NotPassed: updateReferendum,
  Executed: updateReferendum,
}

export async function createDemocracy(event: SubstrateEvent) {
  if (Object.prototype.hasOwnProperty.call(Action, event.event.method)) {
    await Action[event.event.method](event)
  }
}
