// This module is server-only. Import it only from Server Components, Route
// Handlers, or Server Actions — never from client components.

import type { UtmParams } from './utm'

type Urgencia = 'hoy' | 'esta_semana' | 'solo_cotizando'

export type CaptureInput = {
  full_name: string
  phone: string
  email?: string
  cupo_aprox_usd?: number
  banco_tarjeta?: string
  urgencia: Urgencia
  acepta_contacto: boolean
  utm: UtmParams
}

export type CaptureResult =
  | { success: true; leadId: string; isNew: boolean }
  | { success: false; error: string }

export async function captureLeadOnServer(
  input: CaptureInput
): Promise<CaptureResult> {
  const apiUrl = process.env.PROFLOW_API_URL
  const secret = process.env.LANDING_API_SECRET

  if (!apiUrl || !secret) {
    return { success: false, error: 'Configuración del servidor incompleta' }
  }

  let response: Response
  try {
    response = await fetch(`${apiUrl}/api/leads/capture`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-landing-secret': secret,
      },
      body: JSON.stringify(input),
    })
  } catch {
    return { success: false, error: 'Error de conexión' }
  }

  if (!response.ok) {
    let errorMessage = `Error ${response.status}`
    try {
      const body = (await response.json()) as Record<string, unknown>
      if (typeof body.error === 'string') {
        errorMessage = body.error
      } else if (typeof body.message === 'string') {
        errorMessage = body.message
      }
    } catch {
      // Response body was not valid JSON; keep the status-based message.
    }
    return { success: false, error: errorMessage }
  }

  try {
    const data = (await response.json()) as {
      leadId: string
      isNew: boolean
    }
    return { success: true, leadId: data.leadId, isNew: data.isNew }
  } catch {
    return { success: false, error: 'Respuesta inesperada del servidor' }
  }
}
