export function ethFromWei(value: number, decimals: number): number {
  return Math.pow(10, -decimals) * value;
}
