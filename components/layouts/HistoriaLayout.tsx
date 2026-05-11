import { LeadCaptureForm } from '@/components/LeadCaptureForm'
import type { VariantContent } from '@/components/variants'
import type { UtmParams } from '@/lib/utm'

type Props = { content: VariantContent; utm: UtmParams }

export function HistoriaLayout({ content, utm }: Props) {
  return (
    <div
      className="min-h-screen bg-[#FDF6EC]"
      style={{ fontFamily: "'Lora', Georgia, serif" }}
    >
      {/* Header */}
      <header className="border-b border-[#1A3A2A]/10 py-5">
        <div className="max-w-[720px] mx-auto px-6 flex items-center justify-between">
          <div>
            <span
              className="text-xl font-bold text-[#1A3A2A] italic"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              ProFlow
            </span>
            <span
              className="block text-[9px] text-[#1A3A2A]/35 uppercase tracking-[0.3em] mt-0.5"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              Historias reales
            </span>
          </div>
          <span
            className="text-xs text-[#1A3A2A]/30 italic"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            Orientación financiera
          </span>
        </div>
      </header>

      <main className="max-w-[720px] mx-auto px-6">
        {/* Giant opening quotation mark */}
        <div
          className="text-[#C4622D]/18 select-none mt-10 mb-3 leading-none"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '130px',
            lineHeight: '0.75',
          }}
        >
          &#8220;
        </div>

        {/* Avatar + person info */}
        <div className="flex items-center gap-4 mb-8">
          {/* CSS sepia avatar */}
          <div
            className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center text-white font-bold text-xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #8B6914 0%, #C4622D 100%)',
            }}
          >
            <span style={{ fontFamily: "'Lora', serif" }}>R</span>
            {/* Noise overlay */}
            <div
              className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='80' height='80' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-[#1A3A2A]">Rodrigo M.</p>
            <p
              className="text-sm text-[#1A3A2A]/45 mt-0.5"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              34 años, Santiago · Emprendedor
            </p>
          </div>
        </div>

        {/* Badge pill */}
        <div className="mb-6">
          <span
            className="inline-block bg-[#C4622D]/12 text-[#C4622D] text-xs font-medium px-3.5 py-1.5 rounded-full"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            {content.badge}
          </span>
        </div>

        {/* Headline + subheadline with terracota left border */}
        <div className="border-l-4 border-[#C4622D] pl-6 mb-9">
          <h1
            className="text-3xl sm:text-4xl font-bold text-[#1A3A2A] italic leading-[1.2] mb-4"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            {content.headline}
          </h1>
          <p
            className="text-[#1A3A2A]/60 leading-relaxed text-base"
            style={{ fontFamily: "'Lora', Georgia, serif" }}
          >
            {content.subheadline}
          </p>
        </div>

        {/* Organic separator */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-px bg-[#1A3A2A]/10" />
          <span className="text-[#C4622D] text-base leading-none">✦</span>
          <span className="text-[#1A3A2A]/20 text-xs leading-none">✦</span>
          <span className="text-[#C4622D] text-base leading-none">✦</span>
          <div className="flex-1 h-px bg-[#1A3A2A]/10" />
        </div>

        {/* Bullets as narrative points */}
        <ul className="space-y-5 mb-10">
          {content.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-4">
              <div className="mt-2 w-2 h-2 rounded-full bg-[#C4622D]/35 shrink-0" />
              <p
                className="text-[#1A3A2A]/72 leading-relaxed"
                style={{ fontFamily: "'Lora', Georgia, serif" }}
              >
                {bullet}
              </p>
            </li>
          ))}
        </ul>

        {/* Social proof */}
        <div className="grid grid-cols-3 gap-4 py-7 border-y border-[#1A3A2A]/10 mb-12">
          {content.socialProof.map((sp) => (
            <div key={sp.label} className="text-center">
              <div
                className="text-2xl font-bold text-[#1A3A2A]"
                style={{ fontFamily: "'Lora', Georgia, serif" }}
              >
                {sp.value}
              </div>
              <div
                className="text-[10px] text-[#1A3A2A]/38 mt-1.5 leading-snug"
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                {sp.label}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Form section — dark green */}
      <div className="bg-[#1A3A2A]">
        <div className="max-w-[720px] mx-auto px-6 py-14">
          <div className="mb-8">
            <h2
              className="text-2xl font-bold text-white italic mb-2"
              style={{ fontFamily: "'Lora', Georgia, serif" }}
            >
              Continúa la historia
            </h2>
            <p
              className="text-white/45 text-sm"
              style={{ fontFamily: 'system-ui, sans-serif' }}
            >
              Descubre qué cupo tienes disponible, igual que Rodrigo.
            </p>
          </div>

          {/* White card containing the form */}
          <div className="bg-white rounded-xl p-6 sm:p-8">
            <LeadCaptureForm utm={utm} />
          </div>

          <p
            className="mt-5 text-center text-xs text-white/22"
            style={{ fontFamily: 'system-ui, sans-serif' }}
          >
            Sin compromiso · Datos seguros · Respuesta en menos de 2 horas
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1A3A2A] border-t border-white/5 py-6">
        <p
          className="text-center text-[9px] text-white/18 uppercase tracking-[0.4em]"
          style={{ fontFamily: 'system-ui, sans-serif' }}
        >
          ProFlow · Orientación financiera responsable
        </p>
      </footer>
    </div>
  )
}
