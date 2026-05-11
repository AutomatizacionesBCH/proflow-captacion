import type { VariantContent } from '@/components/variants'

type Props = { content: VariantContent }

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5 text-[#043D35] shrink-0 mt-0.5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export function VariantHero({ content }: Props) {
  return (
    <div className="flex flex-col justify-center py-8 md:py-12 lg:py-16">
      {/* Badge */}
      <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#043D35]/10 px-3 py-1 mb-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#043D35]">
          {content.badge}
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#0F172A] tracking-tight">
        {content.headline}
      </h1>

      {/* Subheadline */}
      <p className="mt-4 text-lg leading-relaxed text-[#64748B] max-w-xl">
        {content.subheadline}
      </p>

      {/* Bullet list */}
      <ul className="mt-8 space-y-3.5">
        {content.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-[#374151] text-base leading-snug">{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Social proof row */}
      <div className="mt-8 pt-6 border-t border-[#E2E8F0] grid grid-cols-3 gap-4">
        {content.socialProof.map((stat, i) => (
          <div key={i} className="flex flex-col gap-0.5">
            <span className="text-2xl font-bold text-[#043D35] leading-none">
              {stat.value}
            </span>
            <span className="text-xs text-[#64748B] leading-snug mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
