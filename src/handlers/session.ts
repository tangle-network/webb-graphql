/*
export async function ensureSession(sessionIndex: number): Promise<Session> {
  let data = await Session.get(sessionIndex.toString())
  if (!data) {
    data = new Session(sessionIndex.toString())
    await data.save()
  }
  data.index = sessionIndex
  return data
}

export async function createSession(
  sessionIndex: number,
  blockNumber: number
): Promise<Session> {
  const data = await ensureSession(sessionIndex)
  const auth = await getCurrentAuthorities()
  const bestAuth = await getBestAuthorities()
  const all = Authorities.create({
    id: data.id.toString() + Math.random().toString(),
    next: auth.next,
    current: auth.current,
  })
  const best = Authorities.create({
    id: data.id.toString() + Math.random().toString(),
    next: auth.next,
    current: auth.current,
  })

  return data
}
*/
export {}
