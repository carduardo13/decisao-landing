'use client';

// =========================================================
// Faq — zero texto hardcoded
// =========================================================

import { useState } from 'react';
import { translations, type Lang } from '@/lib/translations';

interface FaqProps {
  lang: Lang;
}

export default function Faq({ lang }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = translations[lang].faq;

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-12 md:py-20 bg-neutral-bg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-11">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-brand-warm/20 text-feedback-dor-dark border border-brand-warm/40 mb-4">
            {t.badge}
          </span>
          <h2 id="faq-heading" className="font-serif text-3xl font-bold">{t.heading}</h2>
        </div>

        <div className="max-w-2xl mx-auto divide-y divide-brand-gold/20">
          {t.items.map((faq, i) => (
            <div key={i} className="overflow-hidden">
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-btn-${i}`}
                className="w-full flex items-center justify-between py-5 gap-4 text-left font-semibold text-sm text-neutral-text hover:text-neutral-text/80 transition-colors"
              >
                <span>{faq.q}</span>
                <span
                  className={`w-7 h-7 rounded-full bg-brand-gold/12 flex items-center justify-center text-brand-gold text-sm flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-btn-${i}`}
                className={`overflow-hidden transition-all duration-400 ease-in-out ${openIndex === i ? 'max-h-64 pb-5' : 'max-h-0'}`}
                style={{ transitionDuration: '350ms' }}
              >
                <p className="text-sm text-neutral-muted leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
