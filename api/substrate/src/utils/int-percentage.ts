export function getIntPercentage(numerator: number, denominator: number, decimal = 9) {
  return Math.floor((numerator / denominator) * Math.pow(10, decimal));
}
