import type { Metadata } from 'next'
import { headers } from 'next/headers'
import type { LandingVariant, UtmParams } from '@/lib/utm'
import { parseUtm, resolveVariant } from '@/lib/utm'
import { VARIANTS } from '@/components/variants'
import { LandingPage } from '@/components/LandingPage'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Evaluación de Cupo Internacional',
  description:
    'Recibe orientación personalizada sobre tu cupo internacional. Evaluación sin compromiso.',
  robots: 'noindex, nofollow',
}

type Props = {
  searchParams: Promise<Record<string, string>>
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams
  const requestHeaders = await headers()

  // Parse UTM from search params
  const utm: UtmParams = parseUtm(params)

  // Check if middleware injected a domain-based variant
  const domainVariant = requestHeaders.get('x-landing-variant') as LandingVariant | null
  const domainSlug = requestHeaders.get('x-account-slug')
  const domainUtmSource = requestHeaders.get('x-utm-source')
  const domain = requestHeaders.get('x-domain')

  // Merge domain config into utm (domain config wins over URL params for account_slug/utm_source)
  const mergedUtm: UtmParams = {
    ...utm,
    domain: domain ?? utm.domain,
    account_slug: domainSlug ?? utm.account_slug,
    utm_source: domainUtmSource ?? utm.utm_source,
  }

  // Resolve variant: URL param ?v= wins over domain, fallback to env default
  const variantParam = params.v as LandingVariant | undefined
  const defaultVariant =
    (process.env.NEXT_PUBLIC_DEFAULT_VARIANT as LandingVariant) ?? 'directa'
  const variant = resolveVariant(
    {
      ...mergedUtm,
      landing_variant: variantParam ?? domainVariant ?? undefined,
    },
    defaultVariant,
  )

  // Set landing_variant in utm for tracking
  mergedUtm.landing_variant = variant

  const content = VARIANTS[variant]

  return <LandingPage content={content} utm={mergedUtm} />
}
