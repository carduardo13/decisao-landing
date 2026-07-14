'use client';

// =========================================================
// LanguageSelector — atualizado para usar Lang de translations.ts
// =========================================================

import { useState, useEffect, useRef } from 'react';
import { type Lang } from '@/lib/translations';

const LANGS: { lang: Lang; flag: string; label: string; fullName: string }[] = [
  { lang: 'pt', flag: '🇧🇷', label: 'PT', fullName: 'Português' },
  { lang: 'en', flag: '🇺🇸', label: 'EN', fullName: 'English' },
  { lang: 'es', flag: '🇪🇸', label: 'ES', fullName: 'Español' },
];

interface LanguageSelectorProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}

export default function LanguageSelector({ lang, onLangChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fecha ao clicar fora
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Fecha com Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  const current = LANGS.find((l) => l.lang === lang) ?? LANGS[0];

  return (
    <div ref={containerRef} className="relative" id="language-selector">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Idioma atual: ${current.fullName}. Clique para mudar.`}
        id="language-selector-trigger"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold text-neutral-text bg-neutral-bg/80 border border-brand-gold/20 backdrop-blur-sm transition-all duration-200 hover:border-brand-gold/50 hover:bg-brand-gold/8 select-none"
      >
        <span aria-hidden="true">{current.flag}</span>
        <span>{current.label}</span>
        <svg
          width="12" height="12" viewBox="0 0 12 12" fill="none"
          aria-hidden="true"
          className={`transition-transform duration-200 text-neutral-muted ${isOpen ? 'rotate-180' : ''}`}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul
          role="listbox"
          aria-label="Selecionar idioma"
          className="absolute right-0 mt-2 w-40 bg-neutral-bg border border-brand-gold/25 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.18)] overflow-hidden z-[200] animate-fade-in"
        >
          {LANGS.map(({ lang: l, flag, fullName }) => {
            const isActive = l === lang;
            return (
              <li key={l}>
                <button
                  role="option"
                  aria-selected={isActive}
                  id={`lang-option-${l}`}
                  onClick={() => { onLangChange(l); setIsOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors duration-150 ${
                    isActive
                      ? 'bg-brand-gold/12 text-neutral-text font-semibold'
                      : 'text-neutral-muted hover:bg-brand-gold/8 hover:text-neutral-text'
                  }`}
                >
                  <span className="text-base" aria-hidden="true">{flag}</span>
                  <span>{fullName}</span>
                  {isActive && <span className="ml-auto text-brand-gold text-xs" aria-hidden="true">✓</span>}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
