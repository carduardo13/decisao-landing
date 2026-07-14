'use client';

// =========================================================
// OrderBump — zero texto hardcoded
// Seção 5: Audiobook Upgrade
// =========================================================

import { translations, type Lang } from '@/lib/translations';

interface OrderBumpProps {
  lang: Lang;
  onToggle: (selected: boolean) => void;
  isSelected: boolean;
}

const WaveBar = ({ delay }: { delay: string }) => (
  <div className="w-1 rounded-sm bg-brand-warm animate-wave" style={{ animationDelay: delay }} />
);

const WAVE_DELAYS = ['0s','0.1s','0.2s','0.3s','0.4s','0.5s','0.6s','0.7s','0.8s'];

export default function OrderBump({ lang, onToggle, isSelected }: OrderBumpProps) {
  const t = translations[lang].orderBump;
  const handleToggle = () => onToggle(!isSelected);

  return (
    <section
      id="audiobook"
      aria-labelledby="audiobook-heading"
      className="py-20 bg-gradient-to-br from-brand-light via-[#ffe8e1] to-brand-light"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Mockup Visual */}
          <div className="flex justify-center">
            <div className="w-72 h-64 bg-gradient-to-br from-brand-light to-brand-warm rounded-2xl flex flex-col items-center justify-center gap-4 shadow-[0_20px_60px_rgba(61,58,58,0.2)]">
              <span className="text-6xl" aria-hidden="true">🎧</span>
              <div className="text-center">
                <p className="font-serif font-bold text-neutral-text text-lg leading-tight">{t.audiobookLabel}</p>
                <p className="font-serif italic text-feedback-dor text-base">{t.audiobookTitle}</p>
              </div>
              <div className="flex items-end gap-[3px] h-6" aria-label={t.waveAriaLabel}>
                {WAVE_DELAYS.map((d, i) => <WaveBar key={i} delay={d} />)}
              </div>
            </div>
          </div>

          {/* Copy & Order Bump */}
          <div className="text-center md:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-brand-gold to-brand-gold-light text-neutral-text mb-4">
              {t.badge}
            </span>
            <h2 id="audiobook-heading" className="font-serif text-3xl font-bold mb-4">
              {t.heading}
              <br />
              {t.headingLine2}
            </h2>
            <p className="text-neutral-muted mb-6 leading-relaxed">{t.body}</p>

            {/* Waveform decoration */}
            <div className="flex items-end gap-[3px] h-6 mb-7 justify-center md:justify-start" aria-hidden="true">
              {WAVE_DELAYS.map((d, i) => <WaveBar key={i} delay={d} />)}
            </div>

            {/* ORDER BUMP BOX */}
            <button
              type="button"
              onClick={handleToggle}
              id="audiobook-bump"
              role="checkbox"
              aria-checked={isSelected}
              aria-label={t.checkboxAriaLabel}
              className={`relative w-full text-left border-2 border-dashed rounded-2xl p-6 flex items-start gap-4 transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'border-brand-gold bg-brand-gold/12'
                  : 'border-brand-gold bg-brand-gold/7 hover:bg-brand-gold/12'
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 bg-brand-gold text-neutral-text text-[0.6rem] font-extrabold tracking-widest py-1 px-2.5 rounded-tl-none rounded-tr-[14px] rounded-br-none rounded-bl-lg"
              >
                ✦ UPGRADE
              </span>

              {/* Checkbox */}
              <div
                aria-hidden="true"
                className={`w-6 h-6 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 ${
                  isSelected ? 'bg-brand-gold border-brand-gold' : 'bg-white border-brand-gold'
                }`}
              >
                {isSelected && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7l4 4 6-7" stroke="#3D3A3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>

              <div>
                <strong className="block font-bold text-neutral-text text-base mb-1">{t.checkboxLabel}</strong>
                <span className="text-sm text-neutral-muted">{t.checkboxSub}</span>
                <p className="mt-2 font-extrabold text-brand-gold text-base">{t.price}</p>
              </div>
            </button>

            {isSelected && (
              <p role="status" aria-live="polite" className="mt-3 text-xs text-brand-gold font-semibold flex items-center gap-1.5">
                {t.added}
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
