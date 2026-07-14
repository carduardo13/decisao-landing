'use client';

// =========================================================
// ScienceCycle — zero texto hardcoded
// =========================================================

import { translations, type Lang } from '@/lib/translations';

const stepColors = [
  { colorClass: 'bg-feedback-dor/25 border-feedback-dor', titleColor: 'text-white' },
  { colorClass: 'bg-feedback-dor/35 border-[#c42020]',   titleColor: 'text-white' },
  { colorClass: 'bg-feedback-dor/50 border-[#d42e2e]',   titleColor: 'text-white' },
  { colorClass: 'bg-brand-gold/20 border-brand-gold',    titleColor: 'text-brand-gold' },
  { colorClass: 'bg-feedback-dor/65 border-feedback-dor',titleColor: 'text-white' },
];

interface ScienceCycleProps {
  lang: Lang;
}

export default function ScienceCycle({ lang }: ScienceCycleProps) {
  const t = translations[lang].scienceCycle;

  return (
    <section
      id="ciencia"
      aria-labelledby="science-heading"
      className="relative py-16 md:py-24 bg-neutral-text overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(163,29,29,0.25),transparent)]"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-brand-gold to-brand-gold-light text-neutral-text mb-4">
            {t.badge}
          </span>
          <h2 id="science-heading" className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            {t.heading}
          </h2>
          <p className="text-white/65 text-lg max-w-lg mx-auto">{t.subheading}</p>
        </div>

        {/* Callout */}
        <div className="max-w-2xl mx-auto mb-14 bg-white/5 border border-brand-gold/30 rounded-3xl p-6 md:p-10 backdrop-blur-sm text-center">
          <blockquote className="font-serif text-xl md:text-2xl text-white italic leading-relaxed mb-4">
            &ldquo;{t.quote}{' '}
            <strong className="text-brand-warm not-italic">{t.quoteStrong}</strong>{' '}
            {t.quoteSuffix}&rdquo;
          </blockquote>
          <cite className="text-brand-gold text-xs uppercase tracking-widest not-italic">
            {t.citeSource}
          </cite>
        </div>

        {/* Cycle Diagram */}
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-brand-gold font-serif text-lg mb-8 tracking-wide">
            {t.cycleTitle}
          </p>
          <div
            role="img"
            aria-label="Diagrama do ciclo de reforço intermitente"
            className="flex flex-wrap items-center justify-center gap-0"
          >
            {t.steps.map((step, i) => {
              const colors = stepColors[i] ?? stepColors[0];
              return (
                <div key={i} className="flex items-center">
                  <div
                    title={step.tooltip}
                    className={`w-24 h-24 md:w-28 md:h-28 rounded-full border-2 flex flex-col items-center justify-center text-center cursor-default transition-transform hover:scale-110 ${colors.colorClass}`}
                  >
                    <span className="text-2xl mb-1">{step.icon}</span>
                    <span className={`text-[0.65rem] font-bold leading-tight px-1 whitespace-pre-line ${colors.titleColor}`}>
                      {step.label}
                    </span>
                  </div>
                  {i < t.steps.length - 1 && (
                    <span aria-hidden="true" className="text-white/30 text-xl px-1 md:px-2 hidden sm:block">→</span>
                  )}
                </div>
              );
            })}
          </div>
          <p className="text-center text-white/40 text-xs mt-6">{t.cycleFooter}</p>
        </div>
      </div>
    </section>
  );
}
