/**
 * Normalize a raw Chilean phone number to the 9XXXXXXXX format (9 digits).
 *
 * Rules:
 *   - Strip all non-digit characters first.
 *   - Starts with '569' and is 11 digits  → drop first 2 → 9XXXXXXXX
 *   - Starts with '56'  and is 10 digits  → drop first 2 → XXXXXXXX
 *   - Starts with '9'   and is  9 digits  → keep as-is
 *   - Otherwise: return the stripped string and let validation catch it.
 */
export function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, '')

  if (digits.startsWith('569') && digits.length === 11) {
    return digits.slice(2) // removes '56' → 9XXXXXXXX
  }

  if (digits.startsWith('56') && digits.length === 10) {
    return digits.slice(2) // removes '56' → XXXXXXXX
  }

  if (digits.startsWith('9') && digits.length === 9) {
    return digits
  }

  return digits
}

/**
 * Validate a normalized phone number.
 * Valid: exactly 9 digits starting with '9'.
 */
export function isValidChileanPhone(normalized: string): boolean {
  return /^9\d{8}$/.test(normalized)
}

/**
 * Format a normalized phone number for display: +56 9 XXXX XXXX
 * Assumes the input is a valid normalized phone (9XXXXXXXX).
 */
export function formatPhoneDisplay(normalized: string): string {
  if (!isValidChileanPhone(normalized)) {
    return normalized
  }
  // 9XXXXXXXX → +56 9 XXXX XXXX
  const area = normalized[0]           // '9'
  const part1 = normalized.slice(1, 5) // 4 digits
  const part2 = normalized.slice(5)    // 4 digits
  return `+56 ${area} ${part1} ${part2}`
}
