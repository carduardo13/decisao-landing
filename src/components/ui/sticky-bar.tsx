'use client';

// =========================================================
// StickyBar — zero texto hardcoded
// =========================================================

import { useEffect, useState } from 'react';
import { translations, type Lang } from '@/lib/translations';

interface StickyBarProps {
  lang: Lang;
  checkoutUrl: string;
}

export default function StickyBar({ lang, checkoutUrl }: StickyBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[lang].stickyBar;

  useEffect(() => {
    const heroEl = document.getElementById('hero');
    if (!heroEl) return;
    const handleScroll = () => {
      setIsVisible(heroEl.getBoundingClientRect().bottom < 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      role="complementary"
      aria-label="Oferta fixada"
      className={`fixed bottom-0 left-0 right-0 z-40 bg-neutral-text border-t-2 border-brand-gold flex items-center justify-center gap-5 px-4 md:px-6 py-3.5 transition-transform duration-400 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <p className="text-white/80 text-sm font-medium hidden sm:block">
        {t.offer}{' '}
        <strong className="text-brand-gold">{t.offerStrong}</strong>{' '}
        {t.offerSuffix}
      </p>
      <a
        href={checkoutUrl}
        id="sticky-cta-btn"
        className="whitespace-normal px-4 md:px-7 py-3 w-full sm:w-auto text-center rounded-full font-extrabold text-xs uppercase tracking-wide text-white bg-gradient-to-br from-feedback-dor to-feedback-dor-dark shadow-cta transition-all hover:-translate-y-0.5"
      >
        {t.cta}
      </a>
    </div>
  );
}
