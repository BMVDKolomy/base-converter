export const isInteger = (integer: number): boolean => {
  return !(typeof integer !== 'number' || integer % 1)
}