'use client';

// =========================================================
// Hero — zero texto hardcoded
// =========================================================

import { translations, type Lang } from '@/lib/translations';

// URLs do player VSL por idioma — substitua pelos embeds reais
const vslUrls: Record<Lang, string> = {
  pt: '', // 'https://player.pandavideo.com.br/embed/?v=ID_PT'
  en: '', // 'https://player.pandavideo.com.br/embed/?v=ID_EN'
  es: '', // 'https://player.pandavideo.com.br/embed/?v=ID_ES'
};

interface HeroProps {
  lang: Lang;
  checkoutUrl: string;
}

export default function Hero({ lang, checkoutUrl }: HeroProps) {
  const t = translations[lang].hero;
  const vslSrc = vslUrls[lang];

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative pt-16 md:pt-24 pb-12 md:pb-20 text-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(247,214,205,0.45),transparent)]"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Badge */}
        <div className="mb-5">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-brand-warm/20 text-feedback-dor-dark border border-brand-warm/40">
            {t.badge}
          </span>
        </div>

        {/* H1 */}
        <h1
          id="hero-heading"
          className="font-serif font-black text-4xl md:text-5xl lg:text-6xl text-neutral-text mb-6 leading-tight max-w-3xl mx-auto"
        >
          {t.headlinePart1}{' '}
          <em className="text-feedback-dor italic">{t.headlineEm1}</em>
          <br />
          {t.headlinePart2}{' '}
          <em className="text-feedback-dor italic">{t.headlineEm2}</em>
        </h1>

        {/* Subheadline */}
        <p className="text-neutral-muted text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          {t.subheadline}{' '}
          <strong className="text-neutral-text">{t.subheadlineStrong}</strong>.
        </p>

        {/* VSL */}
        <div
          id="vsl-container"
          className="relative max-w-3xl mx-auto mb-9 rounded-2xl overflow-hidden"
          style={{ boxShadow: '0 20px 80px rgba(61,58,58,0.18), 0 0 0 2px rgba(212,175,55,0.3)' }}
        >
          <div className="relative w-full bg-[#0d0d0d]" style={{ paddingBottom: '56.25%' }}>
            {vslSrc ? (
              <iframe
                src={vslSrc}
                title="VSL — Decisão"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : (
              <div
                id="vsl-placeholder"
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-gradient-to-b from-[#1a0a0a] via-[#2d1515] to-[#1a0a0a] transition-all hover:brightness-110"
              >
                <div className="w-[90px] h-[90px] rounded-full bg-gradient-to-br from-feedback-dor to-feedback-dor-dark flex items-center justify-center animate-pulse-play mb-4">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true" className="ml-1.5">
                    <polygon points="8,4 26,15 8,26" fill="white" />
                  </svg>
                </div>
                <p className="text-white/60 text-sm uppercase tracking-widest">
                  {t.vslLabel}{' '}
                  <span className="text-brand-warm font-semibold">{t.vslDuration}</span>
                </p>
                <p className="text-white/30 text-xs mt-2">{t.vslPlaceholder}</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <a
            href={checkoutUrl}
            id="hero-cta-btn"
            className="inline-block px-4 md:px-10 py-4 md:py-5 w-full sm:w-auto text-center whitespace-normal rounded-lg font-extrabold text-base uppercase tracking-wide text-white bg-[#A31D1D] hover:bg-[#7A1212] shadow-lg shadow-red-900/30 transition-all transform hover:scale-105 active:scale-100 animate-pulse-cta"
          >
            {t.cta}
          </a>
          <div className="flex items-center gap-1.5 text-xs text-neutral-muted">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" />
            </svg>
            {t.trustBadge}
          </div>
        </div>
      </div>
    </section>
  );
}
