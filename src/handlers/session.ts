import { Session } from "../types"
import { getCurrentAuthorities } from "../utils/authorities/getCurrent"
import { getBestAuthorities } from "../utils/authorities/getBest"

export async function ensureSession(sessionIndex: number): Promise<Session> {
  let data = await Session.get(sessionIndex.toString())
  if (!data) {
    data = new Session(sessionIndex.toString())
    await data.save()
  }
  data.index = sessionIndex
  return data
}

export async function createSession(sessionIndex: number): Promise<Session> {
  const data = ensureSession(sessionIndex)
  const auth = await getCurrentAuthorities();
  const bestAuth = await getBestAuthorities();

  return data
}
