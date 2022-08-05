export function getSlicingString(str: string, count: number) {
  if (str.length <= count) return str

  return str.slice(0, count + 1) + '...'
}