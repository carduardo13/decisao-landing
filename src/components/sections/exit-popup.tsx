'use client';

// =========================================================
// ExitPopup — zero texto hardcoded
// =========================================================

import { useEffect, useState, useCallback, useRef } from 'react';
import { translations, type Lang } from '@/lib/translations';

const SESSION_KEY = 'decisao_exitPopupShown';
const INACTIVITY_THRESHOLD_MS = 15_000;

interface ExitPopupProps {
  lang: Lang;
  discountUrl: string;
}

export default function ExitPopup({ lang, discountUrl }: ExitPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const inactivityTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);
  const hasShown = useRef(false);
  const hasEnteredPage = useRef(false);
  const hasScrolled = useRef(false);
  const t = translations[lang].exitPopup;

  const showPopup = useCallback(() => {
    if (hasShown.current) return;
    if (typeof window !== 'undefined' && sessionStorage.getItem(SESSION_KEY)) return;
    hasShown.current = true;
    setIsVisible(true);
    if (typeof window !== 'undefined') sessionStorage.setItem(SESSION_KEY, '1');
  }, []);

  const closePopup = useCallback(() => setIsVisible(false), []);

  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    inactivityTimerRef.current = setTimeout(showPopup, INACTIVITY_THRESHOLD_MS);
  }, [showPopup]);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem(SESSION_KEY)) return;
    const isMobile = () => /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    const handleMouseEnter = () => { hasEnteredPage.current = true; };
    const handleMouseLeave = (e: MouseEvent) => {
      if (!isMobile() && hasEnteredPage.current && e.clientY < 50) showPopup();
    };
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (!hasScrolled.current) {
        hasScrolled.current = true;
        lastScrollY.current = currentY;
        resetInactivityTimer();
        return;
      }
      if (Math.abs(currentY - lastScrollY.current) > 50) {
        lastScrollY.current = currentY;
        resetInactivityTimer();
      }
    };
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    };
  }, [showPopup, resetInactivityTimer]);

  useEffect(() => {
    if (!isVisible) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closePopup(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isVisible, closePopup]);

  if (!isVisible) return null;

  return (
    <>
      <div aria-hidden="true" onClick={closePopup} className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm animate-fade-in" />

      <div role="dialog" aria-modal="true" aria-labelledby="exit-popup-title" aria-describedby="exit-popup-desc" className="fixed inset-0 z-[999] flex items-center justify-center p-4">
        <div className="relative w-full max-w-md bg-neutral-bg border-2 border-brand-gold rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.35)] animate-slide-up overflow-hidden">

          <div className="h-1.5 w-full bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold" />

          <button
            onClick={closePopup}
            aria-label={t.closeLabel}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-muted/15 flex items-center justify-center text-neutral-muted hover:bg-neutral-muted/25 transition-colors text-sm"
          >
            ✕
          </button>

          <div className="p-8 pt-6 text-center">
            <div className="text-4xl mb-4" aria-hidden="true">⚠️</div>

            <h2 id="exit-popup-title" className="font-serif text-2xl font-bold text-neutral-text mb-3 leading-tight">
              {t.title}
            </h2>

            <p id="exit-popup-desc" className="text-neutral-muted text-sm leading-relaxed mb-6">
              {t.body}{' '}
              <strong className="text-neutral-text">{t.bodyStrong}</strong>
            </p>

            <div className="bg-gradient-to-br from-brand-gold/15 to-brand-light/40 border border-brand-gold/40 rounded-2xl px-6 py-4 mb-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-muted mb-1">{t.offerLabel}</p>
              <p className="font-serif text-2xl font-black text-neutral-text">
                5%{' '}
                <span className="text-gradient-gold">{t.offerHeadline}</span>
              </p>
              <p className="text-xs text-neutral-muted mt-1">{t.offerSub}</p>
            </div>

            <a
              href={discountUrl}
              id="exit-popup-cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closePopup}
              className="block w-full py-4 px-6 rounded-full font-extrabold text-sm uppercase tracking-wide text-white bg-gradient-to-br from-feedback-dor to-feedback-dor-dark shadow-cta transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(163,29,29,0.5)] mb-4 text-center"
            >
              {t.cta}
            </a>

            <button
              onClick={closePopup}
              id="exit-popup-decline"
              className="text-xs text-neutral-muted hover:text-neutral-text transition-colors underline underline-offset-2 leading-relaxed px-2"
            >
              {t.decline}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
