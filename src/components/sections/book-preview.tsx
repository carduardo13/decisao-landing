'use client';

// =========================================================
// BookPreview — zero texto hardcoded
// Seção 4: Demonstração Gratuita — Leitor de Capítulo
// =========================================================

import { useState } from 'react';
import { translations, type Lang } from '@/lib/translations';

interface BookPreviewProps {
  lang: Lang;
  checkoutUrl: string;
}

type Paragraph = { type: string; content?: string; before?: string; strong?: string };

function renderParagraph(p: Paragraph, idx: number) {
  if (p.type === 'p') {
    return <p key={idx} className="mb-5">{p.content}</p>;
  }
  if (p.type === 'p-strong') {
    return (
      <p key={idx} className="mb-5">
        {p.before}<strong>{p.strong}</strong>
      </p>
    );
  }
  if (p.type === 'italic') {
    return <p key={idx} className="mb-5 italic">&ldquo;{p.content}&rdquo;</p>;
  }
  return null;
}

export default function BookPreview({ lang, checkoutUrl }: BookPreviewProps) {
  const [activeTab, setActiveTab] = useState(0);
  const t = translations[lang].bookPreview;

  return (
    <section
      id="preview"
      aria-labelledby="preview-heading"
      className="py-20 bg-neutral-bg"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-brand-gold to-brand-gold-light text-neutral-text mb-4">
            {t.badge}
          </span>
          <h2 id="preview-heading" className="font-serif text-3xl md:text-4xl font-bold mb-4">
            {t.heading}
          </h2>
          <p className="text-neutral-muted text-lg">{t.subheading}</p>
        </div>

        {/* Book Reader */}
        <div
          role="region"
          aria-label={t.readerAriaLabel}
          className="bg-white rounded-3xl shadow-card border border-brand-gold/20 overflow-hidden"
        >
          {/* Tabs */}
          <div role="tablist" aria-label={t.tabsAriaLabel} className="flex border-b border-brand-gold/20 bg-brand-light">
            {t.pages.map((p, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={activeTab === i}
                aria-controls={`reader-page-${i}`}
                id={`reader-tab-${i}`}
                onClick={() => setActiveTab(i)}
                className={`flex-1 py-4 text-sm font-semibold tracking-wide transition-all border-b-[3px] -mb-px ${
                  activeTab === i
                    ? 'text-feedback-dor border-feedback-dor bg-white'
                    : 'text-neutral-muted border-transparent hover:bg-white/50 hover:text-neutral-text'
                }`}
              >
                {p.tab}
              </button>
            ))}
            <button
              disabled
              aria-disabled="true"
              className="flex-1 py-4 text-sm font-semibold text-neutral-muted/50 cursor-not-allowed border-b-[3px] border-transparent -mb-px"
            >
              {t.lockedTabLabel}
            </button>
          </div>

          {/* Content */}
          <div className="p-10 md:p-14 font-serif text-base leading-[1.85] text-neutral-text min-h-[420px]">
            {t.pages.map((page, i) => (
              <div
                key={i}
                role="tabpanel"
                id={`reader-page-${i}`}
                aria-labelledby={`reader-tab-${i}`}
                hidden={activeTab !== i}
              >
                <h3 className="font-serif text-2xl font-bold text-feedback-dor mb-6">
                  {page.chapterTitle}
                </h3>

                {/* Page 0 — simple paragraphs */}
                {i === 0 && (
                  <>
                    {page.paragraphs.map((p, pi) => renderParagraph(p as Paragraph, pi))}
                    {'pageLabel' in page && (
                      <p className="text-right text-xs text-neutral-muted mt-6 font-sans">
                        {(page as { pageLabel: string }).pageLabel}
                      </p>
                    )}
                  </>
                )}

                {/* Page 1 — blurred bottom + gate */}
                {i === 1 && (
                  <>
                    <div className="relative">
                      {page.paragraphs.map((p, pi) => renderParagraph(p as Paragraph, pi))}
                      {/* Blur fade-out */}
                      <div
                        aria-hidden="true"
                        className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-white pointer-events-none"
                      />
                    </div>

                    {'gate' in page && (
                      <div className="mt-6 mx-0 p-8 rounded-2xl text-center border-2 border-brand-gold bg-gradient-to-br from-brand-gold/10 to-brand-light/30">
                        <div className="text-3xl mb-3" aria-hidden="true">🔒</div>
                        <h4 className="font-serif text-xl font-bold text-neutral-text mb-2">
                          {page.gate.heading}
                        </h4>
                        <p className="text-sm text-neutral-muted mb-5 leading-relaxed whitespace-pre-line">
                          {page.gate.subtext}
                        </p>
                        <a
                          href={checkoutUrl}
                          className="inline-block px-8 py-4 rounded-full font-extrabold text-sm uppercase tracking-wide text-white bg-gradient-to-br from-feedback-dor to-feedback-dor-dark shadow-cta transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(163,29,29,0.5)]"
                        >
                          {page.gate.cta}
                        </a>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
