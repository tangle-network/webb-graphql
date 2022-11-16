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
  let numberOfHeartbeats
  const hb = source.heartBeatCounters.find((hb) => hb.authorityId === accountId)
  // set if not exist
  if (!hb) {
    numberOfHeartbeats = 1
    source.heartBeatCounters.push({
      authorityId: accountId,
      numberOfHeartBeats: 1,
    })
  } else {
    // update if  exist
    numberOfHeartbeats = hb.numberOfHeartBeats + 1

    hb.numberOfHeartBeats = hb.numberOfHeartBeats + 1
  }

  await source.save()
  return [source, numberOfHeartbeats]
}

export async function increaseSourceSession(sourceId: string) {
  const hb = await ensureSource(sourceId)
  hb.numberOfSessions = hb.numberOfSessions + 1
  return hb.save()
}
