'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

const REDIRECT_SECONDS = 4

function GraciasContent() {
  const searchParams = useSearchParams()
  const nombre = searchParams.get('nombre') ?? ''
  const wa = searchParams.get('wa') ?? ''

  const [countdown, setCountdown] = useState<number | null>(wa ? REDIRECT_SECONDS : null)

  useEffect(() => {
    if (!wa) return

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(interval)
          window.location.href = decodeURIComponent(wa)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [wa])

  function handleWhatsApp() {
    if (wa) {
      window.location.href = decodeURIComponent(wa)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-16 text-center">
      {/* Checkmark circle */}
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
        <svg
          className="h-12 w-12 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>

      {/* Headline */}
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {nombre ? `¡Gracias, ${nombre}!` : '¡Gracias!'}
      </h1>

      {/* Subtext */}
      <p className="mb-10 max-w-md text-lg leading-7 text-gray-500">
        Tu solicitud fue registrada. Te contactaremos en breve con orientación personalizada.
      </p>

      {/* WhatsApp button */}
      <button
        onClick={handleWhatsApp}
        disabled={!wa}
        className="mb-6 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-md transition-colors hover:bg-[#1EBE57] disabled:cursor-not-allowed disabled:opacity-50"
      >
        Continuar por WhatsApp →
      </button>

      {/* Countdown or fallback text */}
      {wa && countdown !== null && countdown > 0 ? (
        <p className="text-sm text-gray-400">Redirigiendo en {countdown} segundo{countdown !== 1 ? 's' : ''}...</p>
      ) : (
        <p className="text-sm text-gray-400">¿Prefieres esperar? Te escribiremos muy pronto.</p>
      )}
    </div>
  )
}

export default function GraciasPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-white">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-green-400 border-t-transparent" />
        </div>
      }
    >
      <GraciasContent />
    </Suspense>
  )
}
