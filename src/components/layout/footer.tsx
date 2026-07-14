'use client';

// =========================================================
// Footer — zero texto hardcoded
// =========================================================

import { translations, type Lang } from '@/lib/translations';

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;

  return (
    <footer role="contentinfo" className="bg-[#201d1d] py-10 px-6 text-center">
      <div className="font-serif text-xl font-bold text-white mb-3">
        <em className="text-brand-warm italic">{t.brand}</em>{' '}
        <span className="font-normal text-white/60 text-base">{t.subtitle}</span>
      </div>
      <nav className="flex justify-center gap-5 flex-wrap mb-5" aria-label="Links do rodapé">
        {t.links.map((item) => (
          <a
            key={item}
            href={item.toLowerCase().includes('faq') || item.toLowerCase().includes('preguntas') ? '#faq' : '#'}
            className="text-white/40 text-sm hover:text-brand-warm transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
      <p className="text-white/25 text-xs">{t.copyright}</p>
    </footer>
  );
}
