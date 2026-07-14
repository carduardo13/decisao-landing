'use client';

// =========================================================
// Testimonials — zero texto hardcoded
// =========================================================

import { translations, type Lang } from '@/lib/translations';

interface TestimonialsProps {
  lang: Lang;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const t = translations[lang].testimonials;

  return (
    <section
      id="depoimentos"
      aria-labelledby="testimonials-heading"
      className="py-12 md:py-20 bg-brand-light"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-11">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-brand-warm/20 text-feedback-dor-dark border border-brand-warm/40 mb-4">
            {t.badge}
          </span>
          <h2 id="testimonials-heading" className="font-serif text-3xl font-bold">
            {t.heading}
          </h2>
          <p className="text-sm text-neutral-muted mt-3 font-medium">{t.social}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-soft relative hover:-translate-y-1 hover:shadow-card transition-all duration-300">
              <span
                aria-hidden="true"
                className="absolute top-2 left-5 font-serif text-[5rem] leading-none text-brand-light pointer-events-none select-none"
              >
                &ldquo;
              </span>
              {/* Verified badge */}
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-green-700 bg-green-50 border border-green-200 rounded-full px-2.5 py-0.5 mb-3">
                <svg width="8" height="6" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                  <path d="M1 4l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {t.verified}
              </span>
              <div className="text-yellow-400 text-base mb-3" aria-label="5 estrelas">★★★★★</div>
              <p className="text-sm text-neutral-muted italic leading-relaxed mb-4 pt-4">{item.text}</p>
              <div className="flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold`}
                >
                  {item.initial}
                </div>
                <div>
                  <p className="font-bold text-sm text-neutral-text">{item.name}</p>
                  <p className="text-xs text-neutral-muted">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
