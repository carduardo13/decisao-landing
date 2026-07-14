'use client';

// =========================================================
// CtaSection — zero texto hardcoded
// Seção 7: Tabela de Transformação + CTA Final
// =========================================================

import { translations, type Lang } from '@/lib/translations';

interface CtaSectionProps {
  lang: Lang;
  checkoutUrl: string;
}

export default function CtaSection({ lang, checkoutUrl }: CtaSectionProps) {
  const t = translations[lang].ctaSection;

  return (
    <section
      id="checkout"
      aria-labelledby="cta-heading"
      className="relative py-24 bg-gradient-to-b from-neutral-text to-[#2a2626] text-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(212,175,55,0.12),transparent)]"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-brand-gold to-brand-gold-light text-neutral-text mb-4">
            {t.badge}
          </span>
          <h2 id="cta-heading" className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            {t.heading}
          </h2>
          <p className="text-white/60 text-lg">{t.subheading}</p>
        </div>

        {/* Transformation Table */}
        <div className="overflow-x-auto mb-14">
          <table
            className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
            role="table"
            aria-label={t.tableAriaLabel}
          >
            <thead>
              <tr>
                <th scope="col" className="py-4 px-7 font-serif text-base font-bold tracking-wide text-white bg-feedback-dor/70 text-center">
                  {t.tableHeaderBefore}
                </th>
                <th scope="col" className="py-4 px-7 font-serif text-base font-bold tracking-wide text-neutral-text bg-gradient-to-r from-brand-gold/90 to-brand-gold/60 text-center">
                  {t.tableHeaderAfter}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white/4' : 'bg-white/8'}>
                  <td className="py-3.5 px-7 text-sm text-brand-light/80 border-b border-white/5 text-center leading-snug">{row.before}</td>
                  <td className="py-3.5 px-7 text-sm text-brand-gold-light border-b border-white/5 text-center leading-snug">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Final CTA Block */}
        <div className="flex flex-col items-center gap-5">
          <p className="font-serif text-2xl md:text-3xl text-white italic">
            {t.finalQuote}{' '}
            <strong className="text-brand-gold not-italic">{t.finalQuoteStrong}</strong>
          </p>

          <a
            href={checkoutUrl}
            id="final-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 rounded-full font-extrabold text-base uppercase tracking-wide text-neutral-text bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold shadow-gold animate-pulse-gold transition-all hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_16px_48px_rgba(212,175,55,0.55)]"
          >
            {t.cta}
          </a>

          <div className="flex items-center gap-1.5 text-xs text-white/50">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            {t.trustBadge}
          </div>

          <div className="flex items-center gap-3 bg-white/6 border border-brand-gold/25 rounded-full px-6 py-2.5 text-white/65 text-sm">
            <span className="text-xl" aria-hidden="true">🛡️</span>
            <span>{t.guarantee}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
