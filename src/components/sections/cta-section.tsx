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
      className="relative py-16 md:py-24 bg-[#141414] text-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(212,175,55,0.12),transparent)]"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
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

        {/* ── Offer Stack ──────────────────────────────── */}
        <div className="bg-white/6 border border-white/10 rounded-2xl p-7 max-w-2xl mx-auto mb-10">
          <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-6 text-center">
            {t.offerStackTitle}
          </p>

          {/* Product mockup — E-book only */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4 bg-white/5 rounded-xl p-5 max-w-xs w-full">
              <div className="w-12 h-16 bg-gradient-to-br from-feedback-dor to-feedback-dor-dark rounded-md flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm">E-book</p>
                <p className="text-white/50 text-xs">PDF · 61 pág.</p>
                <p className="text-green-400/80 text-xs mt-0.5">✓ Acesso imediato</p>
              </div>
            </div>
          </div>

          {/* Deliverables checklist */}
          <ul className="space-y-2.5 mb-6">
            {t.offerStackItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white/85">
                <span className="w-5 h-5 rounded-full bg-green-500/15 border border-green-400/30 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l3 3 5-5" stroke="#4ade80" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* Guarantee seal */}
          <div className="flex items-center gap-4 bg-green-500/8 border border-green-500/20 rounded-xl p-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5" className="flex-shrink-0" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
            <div>
              <p className="text-white font-bold text-sm">{t.offerGuaranteeTitle}</p>
              <p className="text-white/55 text-xs">{t.offerGuaranteeSub}</p>
            </div>
          </div>
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
            className="inline-block px-4 md:px-12 py-4 md:py-5 w-full sm:w-auto text-center whitespace-normal rounded-lg font-extrabold text-base uppercase tracking-wide text-white bg-[#A31D1D] hover:bg-[#7A1212] shadow-lg shadow-red-900/30 transition-all transform hover:scale-105 active:scale-100"
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
