import { LeadCaptureForm } from '@/components/LeadCaptureForm'
import type { VariantContent } from '@/components/variants'
import type { UtmParams } from '@/lib/utm'

type Props = { content: VariantContent; utm: UtmParams }

export function EjecutivaLayout({ content, utm }: Props) {
  return (
    <div
      className="min-h-screen bg-[#0D0D0D] relative overflow-hidden"
      style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      {/* Subtle grid lines */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Large translucent green circle */}
      <div
        className="fixed pointer-events-none rounded-full"
        style={{
          width: '700px',
          height: '700px',
          background:
            'radial-gradient(circle, rgba(0,196,140,0.08) 0%, transparent 65%)',
          right: '-150px',
          top: '-150px',
        }}
      />

      {/* Big decorative number in background */}
      <div
        className="fixed pointer-events-none select-none"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '340px',
          fontWeight: 700,
          color: 'rgba(255,255,255,0.018)',
          right: '-10px',
          bottom: '-70px',
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        97
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#00C48C] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                <path
                  d="M3 8C3 5.239 5.239 3 8 3s5 2.239 5 5-2.239 5-5 5"
                  stroke="#0D0D0D"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="8" cy="8" r="1.5" fill="#0D0D0D" />
              </svg>
            </div>
            <span className="text-lg font-bold text-white tracking-tight">ProFlow</span>
          </div>
          <span className="text-xs text-white/20 uppercase tracking-widest">
            Finanzas Internacionales
          </span>
        </div>
      </header>

      {/* Two-column layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: Hero ── */}
          <div className="lg:sticky lg:top-24">
            {/* Badge — plain text with green dot */}
            <div className="flex items-center gap-2 mb-7">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00C48C]" />
              <p className="text-[#00C48C] text-sm font-medium uppercase tracking-[0.2em]">
                {content.badge}
              </p>
            </div>

            {/* HUGE headline */}
            <h1
              className="font-bold text-white leading-[0.92] tracking-tight mb-8"
              style={{ fontSize: 'clamp(50px, 6.5vw, 86px)', fontWeight: 700 }}
            >
              {content.headline}
            </h1>

            {/* Thin green separator */}
            <div className="w-14 h-px bg-[#00C48C] mb-7" />

            {/* Subheadline */}
            <p className="text-white/45 leading-relaxed text-base max-w-md mb-10">
              {content.subheadline}
            </p>

            {/* Bullets */}
            <ul className="space-y-4 mb-12">
              {content.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#00C48C] shrink-0" />
                  <span className="text-white/55 text-sm leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Social proof */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/6">
              {content.socialProof.map((sp) => (
                <div key={sp.label}>
                  <div className="text-2xl font-bold text-[#00C48C]">{sp.value}</div>
                  <div className="text-[10px] text-white/25 mt-1.5 leading-snug">{sp.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form card ── */}
          <div>
            <div
              className="bg-white rounded-2xl p-8 border-t-4 border-t-[#00C48C]"
              style={{
                boxShadow:
                  '0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
              }}
            >
              <h2 className="text-lg font-bold text-[#0D0D0D] mb-1">
                Solicita tu evaluación
              </h2>
              <p className="text-sm text-[#64748B] mb-6">
                Te contactamos en menos de 2 horas hábiles.
              </p>
              <LeadCaptureForm utm={utm} />
            </div>

            {/* Trust items */}
            <div className="mt-5 flex flex-wrap gap-5 justify-center">
              {['Datos confidenciales', 'Sin compromiso', 'Respuesta en 2h'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-white/25">
                  <span className="w-1 h-1 rounded-full bg-[#00C48C]" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
