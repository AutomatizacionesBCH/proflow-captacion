import type { LandingVariant, UtmParams } from '@/lib/utm'
import type { VariantContent } from '@/components/variants'
import { EducativaLayout } from '@/components/layouts/EducativaLayout'
import { EjecutivaLayout } from '@/components/layouts/EjecutivaLayout'
import { HistoriaLayout } from '@/components/layouts/HistoriaLayout'
import { AvatarLayout } from '@/components/layouts/AvatarLayout'
import { DirectaLayout } from '@/components/layouts/DirectaLayout'

type Props = {
  variant: LandingVariant
  content: VariantContent
  utm: UtmParams
}

export function LandingPage({ variant, content, utm }: Props) {
  switch (variant) {
    case 'educativa': return <EducativaLayout content={content} utm={utm} />
    case 'ejecutiva': return <EjecutivaLayout content={content} utm={utm} />
    case 'historia':  return <HistoriaLayout content={content} utm={utm} />
    case 'avatar':    return <AvatarLayout content={content} utm={utm} />
    case 'directa':   return <DirectaLayout content={content} utm={utm} />
  }
}
