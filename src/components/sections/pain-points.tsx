'use client';

// =========================================================
// PainPoints — zero texto hardcoded
// =========================================================

import { translations, type Lang } from '@/lib/translations';

interface PainPointsProps {
  lang: Lang;
}

export default function PainPoints({ lang }: PainPointsProps) {
  const t = translations[lang].painPoints;

  return (
    <section
      id="dor"
      aria-labelledby="pain-heading"
      className="py-20 bg-gradient-to-b from-neutral-bg to-[#f5ede9]"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-feedback-dor/10 text-feedback-dor border border-feedback-dor/25 mb-4">
            {t.badge}
          </span>
          <h2 id="pain-heading" className="font-serif text-3xl md:text-4xl font-bold mb-4">
            {t.heading}
            <br />
            {t.headingLine2}
          </h2>
          <p className="text-neutral-muted text-lg max-w-lg mx-auto">{t.subheading}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border-l-4 border-feedback-dor shadow-card hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(61,58,58,0.15)] transition-all duration-300 relative overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-20 h-20 rounded-full bg-[radial-gradient(circle,rgba(163,29,29,0.06),transparent)]"
              />
              <div className="w-12 h-12 rounded-xl bg-feedback-dor/10 flex items-center justify-center text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="font-serif font-bold text-lg text-feedback-dor mb-2.5">{item.title}</h3>
              <p className="text-sm text-neutral-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
