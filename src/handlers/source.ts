import { SourceState } from "../types"

export async function ensureSource(id: string) {
  const source = await SourceState.get(id)
  if (source) {
    return source
  }

  const initSource = SourceState.create({
    id,
    numberOfSessions: 0,
    heartBeatCounters: [],
  })
  await initSource.save()
  return initSource
}

export async function addHb(
  accountId: string,
  sourceId: string
): Promise<[SourceState, number]> {
  const source = await ensureSource(sourceId)
  let numberOfHeartbeats = 0
  const heartBeatCounters = []
  let updated = false
  for (const [index, heartBeastCounter] of source.heartBeatCounters.entries()) {
    if (heartBeastCounter.authorityId === accountId) {
      numberOfHeartbeats = heartBeastCounter.numberOfHeartBeats + 1
      heartBeatCounters.push({
        authorityId: accountId,
        numberOfHeartBeats: heartBeastCounter.numberOfHeartBeats + 1,
      })
      updated = true
    } else {
      heartBeatCounters.push(heartBeastCounter)
    }
    // the entry wasn't there, it's added here
    if (index + 1 === source.heartBeatCounters.length && !updated) {
      heartBeatCounters.push({
        authorityId: accountId,
        numberOfHeartBeats: 1,
      })
    }
  }
  source.heartBeatCounters = source.heartBeatCounters.map((v) => {
    if (v.authorityId === accountId) {
      numberOfHeartbeats = v.numberOfHeartBeats + 1
      return {
        authorityId: accountId,
        numberOfHeartBeats: v.numberOfHeartBeats + 1,
      }
    } else {
      return v
    }
  })
  await source.save()
  return [source, numberOfHeartbeats]
}

export async function increaseSourceSession(sourceId: string) {
  const hb = await ensureSource(sourceId)
  hb.numberOfSessions = hb.numberOfSessions + 1
  return hb.save()
}
