import type { VariantContent } from '@/components/variants'
import type { UtmParams } from '@/lib/utm'
import { VariantHero } from '@/components/VariantHero'
import { LeadCaptureForm } from '@/components/LeadCaptureForm'

type Props = {
  content: VariantContent
  utm: UtmParams
}

function ProFlowLogo() {
  return (
    <div className="flex items-center gap-2">
      {/* Compact teal mark */}
      <span
        aria-hidden="true"
        className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#043D35]"
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path
            d="M3 8C3 5.239 5.239 3 8 3s5 2.239 5 5-2.239 5-5 5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="8" cy="8" r="1.5" fill="white" />
        </svg>
      </span>
      <span className="text-lg font-bold text-[#0F172A] tracking-tight">
        Pro<span className="text-[#043D35]">Flow</span>
      </span>
    </div>
  )
}

export function LandingPage({ content, utm }: Props) {
  return (
    <main className="min-h-screen bg-white font-[var(--font-geist-sans),system-ui,sans-serif]">
      {/* ── Header ──────────────────────────────────────────── */}
      <header className="sticky top-0 z-20 border-b border-[#E2E8F0] bg-white/90 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <ProFlowLogo />
          <p className="hidden sm:block text-xs text-[#64748B] font-medium">
            Orientación personalizada · Uso responsable
          </p>
        </div>
      </header>

      {/* ── Main content ────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <section
          aria-label="Evaluación de cupo internacional"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start"
        >
          {/* Left — Hero */}
          <div className="md:sticky md:top-24">
            <VariantHero content={content} />
          </div>

          {/* Right — Form card */}
          <div>
            <div
              className="
                bg-white
                border border-[#E2E8F0]
                border-t-4 border-t-[#043D35]
                rounded-2xl
                shadow-lg
                p-6
              "
            >
              <div className="mb-5">
                <h2 className="text-base font-semibold text-[#0F172A]">
                  Solicita tu evaluación sin compromiso
                </h2>
                <p className="mt-1 text-sm text-[#64748B]">
                  Completa el formulario y te contactamos en menos de 2 horas.
                </p>
              </div>
              <LeadCaptureForm utm={utm} />
            </div>

            {/* Trust badges below form */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 px-2">
              <span className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                <svg
                  className="w-3.5 h-3.5 text-[#10B981]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
                Datos seguros y confidenciales
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                <svg
                  className="w-3.5 h-3.5 text-[#10B981]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Sin compromiso de contratación
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                <svg
                  className="w-3.5 h-3.5 text-[#10B981]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z"
                    clipRule="evenodd"
                  />
                </svg>
                Respuesta en menos de 2 horas
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t border-[#E2E8F0] mt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <ProFlowLogo />
          <p className="text-xs text-[#94A3B8] text-center">
            Orientación personalizada. Uso responsable.
          </p>
          <p className="text-xs text-[#CBD5E1]">
            &copy; {new Date().getFullYear()} ProFlow
          </p>
        </div>
      </footer>
    </main>
  )
}
