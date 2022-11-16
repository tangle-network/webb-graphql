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
