export function getIntPercentage(
  numerator: number,
  denominator: number,
  resolution = 7
) {
  return Math.floor((numerator / denominator) * Math.pow(10, resolution))
}
