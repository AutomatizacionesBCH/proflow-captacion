import { LeadCaptureForm } from '@/components/LeadCaptureForm'
import type { VariantContent } from '@/components/variants'
import type { UtmParams } from '@/lib/utm'

type Props = { content: VariantContent; utm: UtmParams }

export function AvatarLayout({ content, utm }: Props) {
  return (
    <div
      className="min-h-screen bg-white overflow-hidden"
      style={{ fontFamily: "'Nunito', system-ui, sans-serif" }}
    >
      {/* ── Hero gradient section ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #6C47FF 0%, #4B2FE8 45%, #2563EB 75%, #00D4FF 100%)',
        }}
      >
        {/* Blob 1 — large, top-left */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '500px',
            height: '500px',
            background: 'rgba(255,255,255,0.07)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            top: '-80px',
            left: '-80px',
            animation: 'float-blob 9s ease-in-out infinite',
          }}
        />
        {/* Blob 2 — medium, bottom-right */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '320px',
            height: '320px',
            background: 'rgba(0,212,255,0.13)',
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
            bottom: '-60px',
            right: '-40px',
            animation: 'float-blob-slow 11s ease-in-out infinite',
          }}
        />
        {/* Blob 3 — small, mid-right */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '180px',
            height: '180px',
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '50% 50% 40% 60% / 50% 60% 40% 50%',
            top: '25%',
            right: '12%',
            animation: 'float-blob 13s ease-in-out infinite 2.5s',
          }}
        />

        {/* Header */}
        <header className="relative z-20 py-5 px-6">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path
                    d="M3 8C3 5.239 5.239 3 8 3s5 2.239 5 5-2.239 5-5 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle cx="8" cy="8" r="1.5" fill="white" />
                </svg>
              </div>
              <span className="text-lg font-black text-white tracking-tight">ProFlow</span>
            </div>
            <span className="text-xs text-white/45">Evaluación sin compromiso</span>
          </div>
        </header>

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-8 pb-24">
          {/* CSS gradient avatar with glow ring */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div
                className="absolute rounded-full"
                style={{
                  inset: '-4px',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.7), rgba(0,212,255,0.7))',
                  animation: 'pulse-opacity 3s ease-in-out infinite',
                }}
              />
              <div
                className="relative w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black text-white select-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(0,212,255,0.35) 100%)',
                  backdropFilter: 'blur(8px)',
                  border: '2px solid rgba(255,255,255,0.4)',
                }}
              >
                AI
              </div>
            </div>
          </div>

          {/* Badge pill */}
          <div className="flex justify-center mb-5">
            <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full border border-white/25">
              {content.badge}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-center text-4xl sm:text-5xl font-black text-white leading-[1.08] mb-5"
            style={{ letterSpacing: '-0.02em' }}
          >
            {content.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-center text-white/65 text-base max-w-xl mx-auto leading-relaxed mb-10">
            {content.subheadline}
          </p>

          {/* Benefit pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {content.bullets.map((bullet, i) => (
              <span
                key={i}
                className="bg-white/12 backdrop-blur-sm text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/18"
              >
                {bullet.length > 48 ? bullet.substring(0, 48) + '…' : bullet}
              </span>
            ))}
          </div>

          {/* Social proof floating cards */}
          <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
            {content.socialProof.map((sp, i) => (
              <div
                key={sp.label}
                className="bg-white/12 backdrop-blur-sm rounded-2xl p-3 text-center border border-white/12"
                style={{
                  animation: `card-bob ${4 + i * 0.8}s ease-in-out infinite ${i * 0.5}s`,
                }}
              >
                <div className="text-xl font-black text-white">{sp.value}</div>
                <div className="text-[9px] text-white/50 mt-0.5 leading-snug">{sp.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rounded transition */}
      <div
        className="relative z-10 bg-white -mt-8"
        style={{ borderRadius: '32px 32px 0 0', marginTop: '-32px' }}
      >
        <div className="px-6 py-12">
          <div className="max-w-xl mx-auto">
            {/* Floating form card */}
            <div
              className="bg-white rounded-3xl p-7 sm:p-9"
              style={{
                boxShadow:
                  '0 20px 60px rgba(108,71,255,0.18), 0 4px 24px rgba(0,0,0,0.07)',
                animation: 'card-bob 7s ease-in-out infinite',
              }}
            >
              <div className="text-center mb-6">
                <h2
                  className="text-xl font-black text-[#1a1030]"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  Tu evaluación personalizada
                </h2>
                <p className="text-sm text-[#64748B] mt-1">
                  Completa tus datos y te contactamos hoy.
                </p>
              </div>
              <LeadCaptureForm utm={utm} />
            </div>

            <div className="flex flex-wrap justify-center gap-5 mt-6">
              {['Datos seguros', 'Sin compromiso', 'Respuesta en 2h'].map((t) => (
                <span key={t} className="text-xs text-[#94A3B8] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6C47FF]" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white py-6 border-t border-[#F1F5F9]">
        <p className="text-center text-xs text-[#CBD5E1]">
          © {new Date().getFullYear()} ProFlow · Orientación financiera responsable
        </p>
      </footer>
    </div>
  )
}
