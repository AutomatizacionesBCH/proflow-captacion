export type UtmParams = {
  src?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  ref?: string
  landing_variant?: string
  domain?: string
  account_slug?: string
  creative_id?: string
}

export type LandingVariant = 'educativa' | 'ejecutiva' | 'historia' | 'avatar' | 'directa'

const UTM_KEYS: (keyof UtmParams)[] = [
  'src',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'ref',
  'landing_variant',
  'domain',
  'account_slug',
  'creative_id',
]

/**
 * Parse UTM params from URLSearchParams or a plain Record<string, string>.
 */
export function parseUtm(
  params: URLSearchParams | Record<string, string>
): UtmParams {
  const result: UtmParams = {}

  const get = (key: string): string | undefined => {
    if (params instanceof URLSearchParams) {
      return params.get(key) ?? undefined
    }
    return params[key] ?? undefined
  }

  for (const key of UTM_KEYS) {
    const value = get(key)
    if (value !== undefined && value !== '') {
      result[key] = value
    }
  }

  return result
}

/**
 * Serialize UtmParams back to a query string (without leading '?').
 */
export function serializeUtm(utm: UtmParams): string {
  const sp = new URLSearchParams()

  for (const key of UTM_KEYS) {
    const value = utm[key]
    if (value !== undefined && value !== '') {
      sp.set(key, value)
    }
  }

  return sp.toString()
}

const VALID_VARIANTS = new Set<LandingVariant>([
  'educativa',
  'ejecutiva',
  'historia',
  'avatar',
  'directa',
])

/**
 * Resolve the landing variant from UTM params.
 * Falls back to defaultVariant (default: 'directa').
 */
export function resolveVariant(
  utm: UtmParams,
  defaultVariant: LandingVariant = 'directa'
): LandingVariant {
  const candidate = utm.landing_variant
  if (candidate && VALID_VARIANTS.has(candidate as LandingVariant)) {
    return candidate as LandingVariant
  }
  return defaultVariant
}
