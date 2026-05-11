import { LeadCaptureForm } from '@/components/LeadCaptureForm'
import type { VariantContent } from '@/components/variants'
import type { UtmParams } from '@/lib/utm'

type Props = { content: VariantContent; utm: UtmParams }

const TIMER_UNITS = [
  { n: '01', label: 'HRS' },
  { n: '47', label: 'MIN' },
  { n: '23', label: 'SEG' },
]

const PROGRESS_BARS = [
  { label: 'Perfil estimado', pct: '87%' },
  { label: 'Elegibilidad', pct: '94%' },
]

export function DirectaLayout({ content, utm }: Props) {
  return (
    <div className="min-h-screen bg-black" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>

      {/* ── BLACK HERO ── */}
      <div className="relative overflow-hidden bg-black">
        {/* Orange glow corner */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(255,92,0,0.14) 0%, transparent 68%)',
            top: '-120px',
            right: '-100px',
          }}
        />
        {/* Second subtle glow bottom-left */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255,92,0,0.06) 0%, transparent 70%)',
            bottom: '0',
            left: '-60px',
          }}
        />

        {/* Header */}
        <header className="relative z-20 border-b border-white/5 py-4 px-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#FF5C00] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path
                    d="M3 8C3 5.239 5.239 3 8 3s5 2.239 5 5-2.239 5-5 5"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="8" cy="8" r="1.5" fill="black" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">ProFlow</span>
            </div>
            {/* Badge — orange bg, black, uppercase */}
            <div
              className="bg-[#FF5C00] text-black text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {content.badge}
            </div>
          </div>
        </header>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-14 pb-20">
          {/* MASSIVE headline */}
          <h1
            className="font-black text-white uppercase leading-[0.88] mb-10 tracking-tight"
            style={{
              fontFamily: "'Barlow Condensed', Impact, 'Arial Narrow', sans-serif",
              fontSize: 'clamp(54px, 9.5vw, 116px)',
              letterSpacing: '-0.01em',
            }}
          >
            {content.headline.split(' ').map((word, i, arr) => (
              <span
                key={i}
                style={{ color: i === arr.length - 1 || i === arr.length - 2 ? '#FF5C00' : 'white' }}
              >
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Animated down arrow */}
          <div
            className="flex items-center gap-3 mb-12"
            style={{ animation: 'bounce-down 1.9s ease-in-out infinite' }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-10 h-10 text-[#FF5C00]"
              aria-hidden="true"
            >
              <path
                d="M12 4v16m-7-7l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-white/35 text-sm uppercase tracking-widest"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Completa ahora
            </span>
          </div>

          {/* Decorative timer */}
          <div className="mb-12">
            <p
              className="text-[#FF5C00]/45 text-[10px] uppercase tracking-widest mb-3"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Evaluación disponible por
            </p>
            <div className="flex items-end gap-3">
              {TIMER_UNITS.map(({ n, label }) => (
                <div key={label} className="flex flex-col items-center gap-1">
                  <div
                    className="text-white font-black px-3 py-2 border"
                    style={{
                      fontFamily: "'Barlow Condensed', monospace",
                      fontSize: '36px',
                      lineHeight: 1,
                      animation: 'timer-pulse 2s ease-in-out infinite',
                      background: 'rgba(255,92,0,0.05)',
                    }}
                  >
                    {n}
                  </div>
                  <span
                    className="text-[9px] text-white/25 tracking-widest"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative progress bars */}
          <div className="space-y-3 max-w-xs">
            {PROGRESS_BARS.map(({ label, pct }) => (
              <div key={label}>
                <div className="flex justify-between items-center mb-1">
                  <span
                    className="text-[10px] text-white/25 uppercase tracking-widest"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-[10px] text-[#FF5C00] font-bold"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {pct}
                  </span>
                </div>
                <div className="h-1 bg-white/6 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FF5C00] rounded-full"
                    style={{ width: pct }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ORANGE FORM SECTION ── */}
      <div className="bg-[#FF5C00] px-6 py-14">
        <div className="max-w-xl mx-auto">
          <div className="mb-8">
            <h2
              className="text-3xl sm:text-4xl font-black text-black uppercase leading-[1.0]"
              style={{ fontFamily: "'Barlow Condensed', Impact, sans-serif" }}
            >
              Completa tus datos ahora
            </h2>
            <p
              className="text-black/55 text-sm mt-2"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              Sin letras chicas. Tu evaluación en menos de 2 horas.
            </p>
          </div>

          {/* White form card */}
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-2xl">
            <LeadCaptureForm utm={utm} />
          </div>

          <div className="mt-5 flex flex-wrap gap-5 justify-center">
            {['Datos confidenciales', 'Sin compromiso', 'Respuesta hoy'].map((t) => (
              <span key={t} className="text-black/45 text-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-black/30" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 py-5">
        <p className="text-center text-xs text-white/18">
          © {new Date().getFullYear()} ProFlow · Orientación financiera responsable
        </p>
      </footer>
    </div>
  )
}
