'use client';

// =========================================================
// page.tsx — Orquestrador Central da Landing Page
//
// Gerencia o estado global de idioma (pt | en | es).
// TODA a copy é derivada de translations[lang].
// Nenhum componente filho tem texto hardcoded.
// =========================================================

import { useState } from 'react';
import { type Lang } from '@/lib/translations';

// Layout
import TopBanner    from '@/components/layout/top-banner';
import Navbar       from '@/components/layout/navbar';
import Footer       from '@/components/layout/footer';

// Sections
import Hero         from '@/components/sections/hero';
import PainPoints   from '@/components/sections/pain-points';
import ScienceCycle from '@/components/sections/science-cycle';
import BookPreview  from '@/components/sections/book-preview';
import MethodCards  from '@/components/sections/method-cards';
import Testimonials from '@/components/sections/testimonials';
import CtaSection   from '@/components/sections/cta-section';
import Faq          from '@/components/sections/faq';
import ExitPopup    from '@/components/sections/exit-popup';

// UI flutuante
import StickyBar    from '@/components/ui/sticky-bar';

// ─── URLs de Checkout por idioma e tipo ────────────────
// Substitua pelos links reais dos seus gateways de pagamento
const CHECKOUT: Record<Lang, { full: string; discount: string }> = {
  pt: {
    full:     'https://pay.gateway.com/METODO_PT',
    discount: 'https://pay.gateway.com/METODO_DESCONTO_5_PT',
  },
  en: {
    full:     'https://pay.gateway.com/METODO_EN',
    discount: 'https://pay.gateway.com/METODO_DESCONTO_5_EN',
  },
  es: {
    full:     'https://pay.gateway.com/METODO_ES',
    discount: 'https://pay.gateway.com/METODO_DESCONTO_5_ES',
  },
};

// ─── Kintsugi divider ─────────────────────────────────
function KintsugiDivider() {
  return <div aria-hidden="true" className="kintsugi-divider" />;
}

// ─── Main Page ────────────────────────────────────────
export default function Home() {
  // Estado — idioma ativo
  const [lang, setLang] = useState<Lang>('es');

  // URLs por idioma
  const checkoutUrl = CHECKOUT[lang]?.full ?? '#';
  const discountUrl = CHECKOUT[lang]?.discount ?? '#';

  return (
    <>
      {/* ── Banner superior ───────────────────────────── */}
      <TopBanner lang={lang} />

      {/* ── Navbar com seletor de idioma ──────────────── */}
      <Navbar lang={lang} onLangChange={setLang} checkoutUrl={checkoutUrl} />

      {/* ── Conteúdo principal ────────────────────────── */}
      <main id="main-content" className="overflow-x-hidden">

        {/* Seção 1: Hero + VSL */}
        <Hero lang={lang} checkoutUrl={checkoutUrl} />
        <KintsugiDivider />

        {/* Seção 2: Dor / Pain Points */}
        <PainPoints lang={lang} />
        <KintsugiDivider />

        {/* Seção 3: O Vício Invisível / Ciência */}
        <ScienceCycle lang={lang} />
        <KintsugiDivider />

        {/* Seção 4: Demonstração Gratuita */}
        <BookPreview lang={lang} checkoutUrl={checkoutUrl} />
        <KintsugiDivider />

        {/* Seção 5: Método D.E.C.I.S.Ã.O. */}
        <MethodCards lang={lang} />
        <KintsugiDivider />

        {/* Seção 7: Depoimentos */}
        <Testimonials lang={lang} />
        <KintsugiDivider />

        {/* Seção 8: CTA Final + Tabela de Transformação */}
        <CtaSection lang={lang} checkoutUrl={checkoutUrl} />

        {/* Seção 9: FAQ */}
        <Faq lang={lang} />

      </main>

      {/* ── Footer ────────────────────────────────────── */}
      <Footer lang={lang} />

      {/* ── UI Flutuante ──────────────────────────────── */}

      {/* Barra sticky inferior */}
      <StickyBar lang={lang} checkoutUrl={checkoutUrl} />

      {/* Exit Intent Popup com desconto por idioma */}
      <ExitPopup lang={lang} discountUrl={discountUrl} />
    </>
  );
}
