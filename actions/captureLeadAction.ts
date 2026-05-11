'use server'

import { normalizePhone, isValidChileanPhone } from '@/lib/phone'
import { captureLeadOnServer } from '@/lib/capture'
import type { UtmParams } from '@/lib/utm'

export type CaptureActionResult =
  | { success: true; leadId: string; isNew: boolean; redirectUrl: string }
  | { success: false; errors: Record<string, string> }

const VALID_URGENCIA = new Set(['hoy', 'esta_semana', 'solo_cotizando'])

export async function captureLeadAction(
  formData: FormData
): Promise<CaptureActionResult> {
  const errors: Record<string, string> = {}

  // --- Extract raw fields ---
  const full_name = (formData.get('full_name') as string | null)?.trim() ?? ''
  const rawPhone = (formData.get('phone') as string | null)?.trim() ?? ''
  const email = (formData.get('email') as string | null)?.trim() || undefined
  const cupoRaw = (formData.get('cupo_aprox_usd') as string | null)?.trim()
  const banco_tarjeta =
    (formData.get('banco_tarjeta') as string | null)?.trim() || undefined
  const urgenciaRaw =
    (formData.get('urgencia') as string | null)?.trim() ?? ''
  const aceptaRaw =
    (formData.get('acepta_contacto') as string | null)?.trim() ?? ''
  const utmJson = (formData.get('utm_json') as string | null) ?? ''

  // --- Validate full_name ---
  if (!full_name) {
    errors.full_name = 'El nombre es requerido'
  } else if (full_name.length < 2) {
    errors.full_name = 'El nombre debe tener al menos 2 caracteres'
  }

  // --- Validate phone ---
  let normalizedPhone = ''
  if (!rawPhone) {
    errors.phone = 'El teléfono es requerido'
  } else {
    normalizedPhone = normalizePhone(rawPhone)
    if (!isValidChileanPhone(normalizedPhone)) {
      errors.phone = 'Ingresa un teléfono chileno válido (9 dígitos, comenzando en 9)'
    }
  }

  // --- Validate urgencia ---
  if (!urgenciaRaw) {
    errors.urgencia = 'La urgencia es requerida'
  } else if (!VALID_URGENCIA.has(urgenciaRaw)) {
    errors.urgencia = 'Valor de urgencia no válido'
  }

  // --- Validate acepta_contacto ---
  if (aceptaRaw !== 'true') {
    errors.acepta_contacto = 'Debes aceptar el contacto para continuar'
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors }
  }

  // --- Parse optional numeric field ---
  const cupo_aprox_usd =
    cupoRaw && cupoRaw !== '' ? Number(cupoRaw) : undefined

  // --- Parse utm_json safely ---
  let utm: UtmParams = {}
  try {
    const parsed = JSON.parse(utmJson) as unknown
    if (parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed)) {
      utm = parsed as UtmParams
    }
  } catch {
    // Malformed or empty utm_json — use empty object.
  }

  // --- Call server capture ---
  const captureResult = await captureLeadOnServer({
    full_name,
    phone: normalizedPhone,
    email,
    cupo_aprox_usd,
    banco_tarjeta,
    urgencia: urgenciaRaw as 'hoy' | 'esta_semana' | 'solo_cotizando',
    acepta_contacto: true,
    utm,
  })

  if (!captureResult.success) {
    return { success: false, errors: { form: captureResult.error } }
  }

  // Prefer whatsappUrl from server; build locally as fallback if missing
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '56966810468'
  const fallbackMessage = `Hola, me interesa recibir orientación personalizada sobre evaluación de cupo internacional. Mi nombre es ${full_name}.`
  const fallbackUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(fallbackMessage)}`
  const redirectUrl = captureResult.whatsappUrl ?? fallbackUrl

  return {
    success: true,
    leadId: captureResult.leadId,
    isNew: captureResult.isNew,
    redirectUrl,
  }
}
