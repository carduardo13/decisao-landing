'use client';

// =========================================================
// page.tsx — Orquestrador Central da Landing Page
//
// Gerencia DOIS estados globais:
//   1. lang               — idioma ativo (pt | en | es)
//   2. isAudiobookSelected — controla checkout full vs. combo
//
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
import OrderBump    from '@/components/sections/order-bump';
import MethodCards  from '@/components/sections/method-cards';
import Testimonials from '@/components/sections/testimonials';
import CtaSection   from '@/components/sections/cta-section';
import Faq          from '@/components/sections/faq';
import ExitPopup    from '@/components/sections/exit-popup';

// UI flutuante
import StickyBar    from '@/components/ui/sticky-bar';

// ─── URLs de Checkout por idioma e tipo ────────────────
// Substitua pelos links reais dos seus gateways de pagamento
const CHECKOUT: Record<Lang, { full: string; combo: string; discount: string }> = {
  pt: {
    full:     'https://pay.gateway.com/METODO_PT',
    combo:    'https://pay.gateway.com/METODO_AUDIOBOOK_PT',
    discount: 'https://pay.gateway.com/METODO_DESCONTO_5_PT',
  },
  en: {
    full:     'https://pay.gateway.com/METODO_EN',
    combo:    'https://pay.gateway.com/METODO_AUDIOBOOK_EN',
    discount: 'https://pay.gateway.com/METODO_DESCONTO_5_EN',
  },
  es: {
    full:     'https://pay.gateway.com/METODO_ES',
    combo:    'https://pay.gateway.com/METODO_AUDIOBOOK_ES',
    discount: 'https://pay.gateway.com/METODO_DESCONTO_5_ES',
  },
};

// ─── Kintsugi divider ─────────────────────────────────
function KintsugiDivider() {
  return <div aria-hidden="true" className="kintsugi-divider" />;
}

// ─── Main Page ────────────────────────────────────────
export default function Home() {
  // Estado 1 — idioma ativo
  const [lang, setLang] = useState<Lang>('es');

  // Estado 2 — audiobook order bump
  const [isAudiobookSelected, setIsAudiobookSelected] = useState(false);

  // URLs dinâmicas: idioma × tipo de produto
  const checkoutUrl = isAudiobookSelected ? CHECKOUT[lang].combo : CHECKOUT[lang].full;
  const discountUrl = CHECKOUT[lang].discount;

  return (
    <>
      {/* ── Banner superior ───────────────────────────── */}
      <TopBanner lang={lang} />

      {/* ── Navbar com seletor de idioma ──────────────── */}
      <Navbar lang={lang} onLangChange={setLang} checkoutUrl={checkoutUrl} />

      {/* ── Conteúdo principal ────────────────────────── */}
      <main id="main-content">

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

        {/* Seção 5: Audiobook Order Bump */}
        <OrderBump
          lang={lang}
          isSelected={isAudiobookSelected}
          onToggle={setIsAudiobookSelected}
        />
        <KintsugiDivider />

        {/* Seção 6: Método D.E.C.I.S.Ã.O. */}
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
