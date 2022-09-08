export function getSessionIdFromBlock(blockNumber: string | number): string {
  const number = Number(blockNumber)
  const id = Math.floor(number / 10) * 10
  return String(id)
}

export const getTriSessionIdFromBlock = (
  blockNumber: string | number
): string => {
  const number = Number(blockNumber)
  const id = Math.floor(number / 30) * 30
  return String(id)
}
