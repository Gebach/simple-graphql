export default function formatPhone(input: string): string {
  const digits = input.replace(/\D/g, '')
  const phoneDigits = digits.slice(0, 11)

  return `+7 (${phoneDigits.slice(1, 4)}) ${phoneDigits.slice(4, 7)}-${phoneDigits.slice(7, 9)}-${phoneDigits.slice(
    9,
    11
  )}`
}
