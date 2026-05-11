import { LeadCaptureForm } from '@/components/LeadCaptureForm'
import type { VariantContent } from '@/components/variants'
import type { UtmParams } from '@/lib/utm'

type Props = { content: VariantContent; utm: UtmParams }

function DotSeparator() {
  return (
    <div className="flex items-center justify-center gap-1.5 py-7">
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="rounded-full bg-[#0F2D6B]/20"
          style={{ width: i === 3 ? '8px' : '4px', height: i === 3 ? '8px' : '4px' }}
        />
      ))}
    </div>
  )
}

export function EducativaLayout({ content, utm }: Props) {
  return (
    <div
      className="min-h-screen bg-white relative overflow-hidden"
      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
    >
      {/* Dot-grid paper texture */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(15,45,107,0.045) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Magazine top strip */}
      <div className="relative z-10 bg-[#0F2D6B] py-1.5">
        <p className="text-center text-[10px] text-white/60 uppercase tracking-[0.35em]">
          Evaluación Financiera · Edición Digital · 2024
        </p>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-[#0F2D6B]/10 py-5">
        <div className="max-w-[680px] mx-auto px-6 flex items-center justify-between">
          <div>
            <span
              className="text-2xl font-bold text-[#0F2D6B] tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Pro<span className="italic">Flow</span>
            </span>
            <span className="block text-[9px] text-[#0F2D6B]/35 uppercase tracking-[0.35em] mt-0.5">
              Orientación Financiera
            </span>
          </div>
          <div className="text-right">
            <span className="text-[9px] text-[#0F2D6B]/35 uppercase tracking-widest">
              N° 01 · 2024
            </span>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-[680px] mx-auto px-6 pb-20">
        {/* Badge */}
        <div className="pt-12 mb-6">
          <span className="inline-block border border-[#0F2D6B] text-[#0F2D6B] text-[10px] font-semibold uppercase tracking-[0.25em] px-4 py-2">
            {content.badge}
          </span>
          {/* Decorative rule */}
          <div className="mt-5 flex items-center gap-2">
            <div className="h-px bg-[#0F2D6B] flex-1" />
            <div
              className="w-2 h-2 bg-[#F5A623]"
              style={{ transform: 'rotate(45deg)' }}
            />
            <div className="h-px bg-[#0F2D6B]/25 w-5" />
            <div
              className="w-1 h-1 bg-[#0F2D6B]/25"
              style={{ transform: 'rotate(45deg)' }}
            />
            <div className="h-px bg-[#0F2D6B] flex-1" />
          </div>
        </div>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl font-bold text-[#0F2D6B] leading-[1.08] mb-5"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {content.headline}
        </h1>

        {/* Subheadline — blockquote accent */}
        <p className="text-[#0F2D6B]/60 leading-relaxed text-base border-l-[3px] border-[#F5A623] pl-4 mb-2">
          {content.subheadline}
        </p>

        <DotSeparator />

        {/* Numbered steps */}
        <div className="space-y-9">
          {content.bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="shrink-0 w-14 text-right">
                <span
                  className="text-5xl font-bold leading-none text-[#F5A623]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex-1 pt-3 border-t border-[#0F2D6B]/10">
                <p className="text-[#0F2D6B]/80 leading-relaxed">{bullet}</p>
              </div>
            </div>
          ))}
        </div>

        <DotSeparator />

        {/* Social proof */}
        <div className="grid grid-cols-3 gap-4 text-center">
          {content.socialProof.map((sp) => (
            <div key={sp.label}>
              <div
                className="text-3xl font-bold text-[#0F2D6B]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {sp.value}
              </div>
              <div className="text-[9px] text-[#0F2D6B]/40 uppercase tracking-widest mt-2 leading-snug">
                {sp.label}
              </div>
            </div>
          ))}
        </div>

        {/* Form section */}
        <div className="mt-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-[#0F2D6B] flex-1" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0F2D6B] whitespace-nowrap">
              Solicita tu evaluación
            </span>
            <div className="h-px bg-[#0F2D6B] flex-1" />
          </div>
          <LeadCaptureForm utm={utm} />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#0F2D6B]/10 py-8">
        <p className="text-center text-[9px] text-[#0F2D6B]/25 uppercase tracking-[0.45em]">
          ProFlow · Orientación personalizada · Uso responsable
        </p>
      </footer>
    </div>
  )
}
