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
      className="py-20 bg-brand-light"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-11">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-brand-warm/20 text-feedback-dor-dark border border-brand-warm/40 mb-4">
            {t.badge}
          </span>
          <h2 id="testimonials-heading" className="font-serif text-3xl font-bold">
            {t.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 shadow-soft relative">
              <span
                aria-hidden="true"
                className="absolute top-2 left-5 font-serif text-[5rem] leading-none text-brand-light pointer-events-none select-none"
              >
                &ldquo;
              </span>
              <div className="text-brand-gold text-sm mb-3" aria-label="5 estrelas">★★★★★</div>
              <p className="text-sm text-neutral-muted italic leading-relaxed mb-4 pt-6">{item.text}</p>
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
