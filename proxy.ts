import { NextRequest, NextResponse } from 'next/server'
import type { LandingVariant } from '@/lib/utm'

type DomainConfig = {
  variant: LandingVariant
  account_slug: string
  utm_source: string
}

// Add domains here once configured in EasyPanel
const DOMAIN_MAP: Record<string, DomainConfig> = {
  // 'cupo.dominio.com': { variant: 'educativa', account_slug: 'meta-cl', utm_source: 'Meta' },
}

export function proxy(req: NextRequest) {
  const hostname = req.headers.get('host') ?? ''
  const domain = hostname.split(':')[0]

  const config = DOMAIN_MAP[domain]
  const res = NextResponse.next()

  res.headers.set('x-domain', domain)

  if (config) {
    res.headers.set('x-landing-variant', config.variant)
    res.headers.set('x-account-slug', config.account_slug)
    res.headers.set('x-utm-source', config.utm_source)
  }

  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.png$).*)'],
}
