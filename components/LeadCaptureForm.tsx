'use client'

import { useState, useTransition, useMemo } from 'react'
import { captureLeadAction } from '@/actions/captureLeadAction'
import type { UtmParams } from '@/lib/utm'

type Props = { utm: UtmParams }

const inputBase =
  'w-full rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2.5 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#043D35] focus:border-transparent transition-shadow'

const labelBase = 'block text-sm font-medium text-[#0F172A] mb-1.5'

const errorBase = 'mt-1.5 text-xs text-red-600'

type UrgenciaValue = 'hoy' | 'esta_semana' | 'solo_cotizando'

const URGENCIA_OPTIONS: { value: UrgenciaValue; label: string }[] = [
  { value: 'hoy', label: 'Lo necesito hoy' },
  { value: 'esta_semana', label: 'Esta semana' },
  { value: 'solo_cotizando', label: 'Solo estoy cotizando' },
]

export function LeadCaptureForm({ utm }: Props) {
  const [isPending, startTransition] = useTransition()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [urgencia, setUrgencia] = useState<UrgenciaValue | ''>('')
  const utmJson = useMemo(() => JSON.stringify(utm), [utm])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setErrors({})
    const fd = new FormData(e.currentTarget)
    // Ensure urgencia is in FormData (radio value may not be included if none selected)
    if (urgencia) {
      fd.set('urgencia', urgencia)
    }
    startTransition(async () => {
      const result = await captureLeadAction(fd)
      if (!result.success) {
        setErrors(result.errors)
      } else {
        window.location.href = result.redirectUrl
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* General form error */}
      {errors.form && (
        <div
          role="alert"
          className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
        >
          {errors.form}
        </div>
      )}

      {/* Hidden UTM field */}
      <input type="hidden" name="utm_json" value={utmJson} readOnly />

      {/* 1. Nombre completo */}
      <div>
        <label htmlFor="full_name" className={labelBase}>
          Nombre completo
        </label>
        <input
          id="full_name"
          type="text"
          name="full_name"
          placeholder="Tu nombre completo"
          required
          autoComplete="name"
          className={`${inputBase} ${errors.full_name ? 'border-red-400 focus:ring-red-400' : ''}`}
        />
        {errors.full_name && (
          <p className={errorBase} role="alert">
            {errors.full_name}
          </p>
        )}
      </div>

      {/* 2. Teléfono */}
      <div>
        <label htmlFor="phone" className={labelBase}>
          Teléfono
        </label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="9 XXXX XXXX"
          required
          autoComplete="tel"
          className={`${inputBase} ${errors.phone ? 'border-red-400 focus:ring-red-400' : ''}`}
        />
        <p className="mt-1 text-xs text-[#94A3B8]">
          Formato: 9 seguido de 8 dígitos (número chileno)
        </p>
        {errors.phone && (
          <p className={errorBase} role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      {/* 3. Email (opcional) */}
      <div>
        <label htmlFor="email" className={labelBase}>
          Email{' '}
          <span className="text-[#94A3B8] font-normal">(opcional)</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="correo@ejemplo.com"
          autoComplete="email"
          className={`${inputBase} ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`}
        />
        {errors.email && (
          <p className={errorBase} role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* 4. Cupo aprox. */}
      <div>
        <label htmlFor="cupo_aprox_usd" className={labelBase}>
          ¿Cuánto aproximadamente necesitas?
        </label>
        <select
          id="cupo_aprox_usd"
          name="cupo_aprox_usd"
          defaultValue=""
          className={`${inputBase} ${errors.cupo_aprox_usd ? 'border-red-400 focus:ring-red-400' : ''}`}
        >
          <option value="" disabled>
            Selecciona un rango...
          </option>
          <option value="500">Menos de $1.000 USD</option>
          <option value="2500">$1.000 – $4.999 USD</option>
          <option value="7500">$5.000 – $9.999 USD</option>
          <option value="15000">$10.000 USD o más</option>
          <option value="0">Prefiero no decir</option>
        </select>
        {errors.cupo_aprox_usd && (
          <p className={errorBase} role="alert">
            {errors.cupo_aprox_usd}
          </p>
        )}
      </div>

      {/* 5. Banco o tarjeta (opcional) */}
      <div>
        <label htmlFor="banco_tarjeta" className={labelBase}>
          Banco o tarjeta{' '}
          <span className="text-[#94A3B8] font-normal">(opcional)</span>
        </label>
        <input
          id="banco_tarjeta"
          type="text"
          name="banco_tarjeta"
          placeholder="Ej: Santander Visa, BCI Mastercard"
          autoComplete="off"
          className={`${inputBase} ${errors.banco_tarjeta ? 'border-red-400 focus:ring-red-400' : ''}`}
        />
        {errors.banco_tarjeta && (
          <p className={errorBase} role="alert">
            {errors.banco_tarjeta}
          </p>
        )}
      </div>

      {/* 6. Urgencia — styled radio cards */}
      <div>
        <p className={labelBase}>¿Cuándo lo necesitas?</p>
        <input type="hidden" name="urgencia" value={urgencia} />
        <div className="grid grid-cols-1 gap-2">
          {URGENCIA_OPTIONS.map(({ value, label }) => {
            const isSelected = urgencia === value
            return (
              <button
                key={value}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setUrgencia(value)}
                className={`
                  flex items-center gap-3 w-full rounded-lg border px-4 py-3 text-sm text-left
                  transition-all duration-150 cursor-pointer
                  ${
                    isSelected
                      ? 'border-[#043D35] bg-[#043D35]/5 text-[#043D35] font-medium ring-1 ring-[#043D35]'
                      : 'border-[#E2E8F0] bg-white text-[#374151] hover:border-[#043D35]/40 hover:bg-[#043D35]/5'
                  }
                `}
              >
                <span
                  className={`
                    w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0
                    ${isSelected ? 'border-[#043D35]' : 'border-[#CBD5E1]'}
                  `}
                >
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#043D35]" />
                  )}
                </span>
                {label}
              </button>
            )
          })}
        </div>
        {errors.urgencia && (
          <p className={errorBase} role="alert">
            {errors.urgencia}
          </p>
        )}
      </div>

      {/* 7. Acepta contacto */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="acepta_contacto"
            value="true"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-[#CBD5E1] text-[#043D35] accent-[#043D35] focus:ring-[#043D35] cursor-pointer"
          />
          <span className="text-sm text-[#374151] leading-snug group-hover:text-[#0F172A] transition-colors">
            Acepto ser contactado para recibir orientación personalizada sobre
            evaluación de cupo internacional.
          </span>
        </label>
        {errors.acepta_contacto && (
          <p className={`${errorBase} mt-2`} role="alert">
            {errors.acepta_contacto}
          </p>
        )}
      </div>

      {/* Submit */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={isPending}
          className="
            w-full flex items-center justify-center gap-2
            bg-[#043D35] text-white text-sm font-semibold
            px-6 py-3.5 rounded-xl shadow-md
            hover:bg-[#065F46] active:bg-[#032D27]
            disabled:opacity-60 disabled:cursor-not-allowed
            transition-colors duration-150
            focus:outline-none focus:ring-2 focus:ring-[#043D35] focus:ring-offset-2
          "
        >
          {isPending ? (
            <>
              <svg
                className="animate-spin w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              <span>Enviando...</span>
            </>
          ) : (
            'Quiero conocer mi evaluación →'
          )}
        </button>

        <p className="mt-3 text-center text-xs text-[#94A3B8]">
          Sin compromiso. Tu información es confidencial.
        </p>
      </div>
    </form>
  )
}
