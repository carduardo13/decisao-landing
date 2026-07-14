'use client';

// =========================================================
// Navbar — Client Component
// Recebe lang + onLangChange para hospedar o LanguageSelector
// =========================================================

import { translations, type Lang } from '@/lib/translations';
import LanguageSelector from '@/components/ui/language-selector';

interface NavbarProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  checkoutUrl: string;
}

export default function Navbar({ lang, onLangChange, checkoutUrl }: NavbarProps) {
  const t = translations[lang].navbar;
  return (
    <nav
      role="navigation"
      aria-label="Navegação Principal"
      className="sticky top-0 z-50 bg-neutral-bg/92 backdrop-blur-md border-b border-brand-gold/20 flex items-center justify-between px-6 py-4"
    >
      {/* Brand */}
      <div className="font-serif text-lg font-bold text-neutral-text">
        <em className="text-feedback-dor not-italic italic">{t.brand}</em>{' '}
        <span className="hidden sm:inline text-neutral-muted font-normal text-base">
          {t.subtitle}
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <LanguageSelector lang={lang} onLangChange={onLangChange} />
        <a
          href={checkoutUrl}
          id="nav-cta-btn"
          className="bg-gradient-to-br from-feedback-dor to-feedback-dor-dark text-white font-bold text-sm rounded-full px-5 py-2.5 tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-cta"
        >
          {t.cta}
        </a>
      </div>
    </nav>
  );
}
