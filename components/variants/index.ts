import type { LandingVariant } from '@/lib/utm'

export type VariantContent = {
  headline: string
  subheadline: string
  bullets: string[]
  cta: string
  badge: string
  socialProof: { label: string; value: string }[]
}

const SOCIAL_PROOF_DEFAULT: { label: string; value: string }[] = [
  { label: 'Evaluaciones realizadas', value: '2,400+' },
  { label: 'Tiempo de respuesta', value: '< 2 horas' },
  { label: 'Satisfacción', value: '97%' },
]

export const VARIANTS: Record<LandingVariant, VariantContent> = {
  educativa: {
    badge: '¿Cómo funciona?',
    headline: 'Entiende tu perfil de crédito internacional en 3 pasos simples',
    subheadline:
      'El cupo internacional es una capacidad que ya tienes en tu tarjeta. Te explicamos cómo evaluarla, qué factores influyen y cómo aprovecharla con orientación personalizada.',
    bullets: [
      'Analizamos el cupo disponible en tu tarjeta internacional actual',
      'Te explicamos las condiciones y rangos según tu perfil financiero',
      'Recibes orientación clara sobre cómo utilizar ese cupo de forma responsable',
      'Sin letra chica: todo el proceso es transparente y sin compromiso',
    ],
    cta: 'Quiero entender mi evaluación',
    socialProof: SOCIAL_PROOF_DEFAULT,
  },

  ejecutiva: {
    badge: 'Para perfiles calificados',
    headline: 'Liquidez internacional para profesionales que saben lo que quieren',
    subheadline:
      'Si tienes una tarjeta internacional activa, es probable que ya cuentes con un cupo disponible que no estás aprovechando. Evaluamos tu perfil y te entregamos orientación directa.',
    bullets: [
      'Evaluación discreta y profesional de tu cupo internacional',
      'Orientación personalizada según tu perfil y necesidades específicas',
      'Respuesta en menos de 2 horas hábiles',
      'Proceso 100% confidencial y sin compromiso de contratación',
    ],
    cta: 'Solicitar evaluación profesional',
    socialProof: SOCIAL_PROOF_DEFAULT,
  },

  historia: {
    badge: 'Caso real',
    headline: 'Necesitaba liquidez internacional. No sabía que ya la tenía.',
    subheadline:
      'Como muchos, Rodrigo tenía una tarjeta internacional sin explorar. Una evaluación sin compromiso le mostró un cupo que no conocía. Hoy usa ese recurso con orientación y responsabilidad.',
    bullets: [
      'Descubrió un cupo internacional disponible en su tarjeta habitual',
      'Recibió orientación personalizada sobre cómo utilizarlo responsablemente',
      'El proceso tomó menos de un día desde la evaluación hasta la respuesta',
      'Sin sorpresas: información clara en cada paso del camino',
    ],
    cta: 'Quiero conocer mi situación',
    socialProof: SOCIAL_PROOF_DEFAULT,
  },

  avatar: {
    badge: 'Para ti',
    headline: 'Tienes una tarjeta internacional. ¿Ya sabes cuánto cupo puedes activar?',
    subheadline:
      'Si eres emprendedor o profesional independiente con tarjeta de crédito internacional, es muy probable que tengas acceso a liquidez que aún no has evaluado. Descúbrelo hoy.',
    bullets: [
      'Diseñado para perfiles con actividad internacional o negocios propios',
      'Evaluamos tu cupo de forma personalizada, sin trámites complicados',
      'Orientación adaptada a tu realidad como emprendedor o independiente',
      'Evaluación sin compromiso: decides si avanzar o no con total libertad',
    ],
    cta: 'Ver mi evaluación personalizada',
    socialProof: SOCIAL_PROOF_DEFAULT,
  },

  directa: {
    badge: 'Rápido y sin compromiso',
    headline: 'Conoce tu cupo internacional ahora. Evaluación en menos de 2 horas.',
    subheadline:
      'Sin vueltas: completa el formulario, recibimos tu solicitud y te entregamos una evaluación personalizada de tu cupo internacional. Tú decides si continuar.',
    bullets: [
      'Completa el formulario en menos de 2 minutos',
      'Evaluación real de tu cupo internacional disponible',
      'Respuesta directa con orientación personalizada',
      'Sin compromiso ni condiciones ocultas',
    ],
    cta: 'Quiero conocer mi evaluación →',
    socialProof: SOCIAL_PROOF_DEFAULT,
  },
}
