'use client';

// =========================================================
// MethodCards — zero texto hardcoded
// Seção 6: Método D.E.C.I.S.Ã.O.
// =========================================================

import { translations, type Lang } from '@/lib/translations';

interface MethodCardsProps {
  lang: Lang;
}

export default function MethodCards({ lang }: MethodCardsProps) {
  const t = translations[lang].methodCards;

  return (
    <section
      id="metodo"
      aria-labelledby="method-heading"
      className="py-12 md:py-20 bg-neutral-bg"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-brand-gold to-brand-gold-light text-neutral-text mb-4">
            {t.badge}
          </span>
          <h2 id="method-heading" className="font-serif text-3xl md:text-4xl font-bold mb-4">
            {t.heading}
            <br />
            {t.headingLine2}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-brand-gold to-brand-gold-light rounded-full mx-auto mb-4" />
          <p className="text-neutral-muted text-lg">{t.subheading}</p>
        </div>

        {/* Method Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch max-w-5xl mx-auto">
          {t.steps.map((step, i) => (
            <div
              key={i}
              className={`h-full flex flex-col bg-white rounded-2xl p-6 md:p-8 shadow-soft border-t-[3px] border-brand-gold group hover:-translate-y-1 hover:shadow-card transition-all duration-300 relative overflow-hidden ${
                'fullWidth' in step && step.fullWidth ? 'md:col-span-2 lg:col-span-4 max-w-md mx-auto w-full' : ''
              }`}
            >
              <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-brand-warm to-brand-gold transition-all duration-500" />
              <div
                className={`font-serif font-black text-brand-gold/80 leading-none mb-2 ${'letterSmall' in step && step.letterSmall ? 'text-4xl' : 'text-5xl'}`}
                aria-hidden="true"
              >
                {step.letter}
              </div>
              <h3 className="font-serif font-bold text-base text-neutral-text mb-2.5">{step.title}</h3>
              <p className="text-sm text-neutral-muted leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
