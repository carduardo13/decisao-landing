'use client';

// =========================================================
// TopBanner — recebe copy traduzida via prop
// =========================================================

import { translations, type Lang } from '@/lib/translations';

interface TopBannerProps {
  lang: Lang;
}

export default function TopBanner({ lang }: TopBannerProps) {
  const t = translations[lang].topBanner;
  return (
    <div
      role="banner"
      className="bg-gradient-to-r from-feedback-dor-dark via-feedback-dor to-[#C4302B] text-white text-center py-2 sm:py-2.5 px-4 text-xs sm:text-sm font-semibold tracking-wide leading-snug"
    >
      {t.text}{' '}
      <span className="text-brand-gold-light">{t.highlight}</span>{' '}
      {t.suffix}
    </div>
  );
}
