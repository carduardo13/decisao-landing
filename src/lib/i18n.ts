/**
 * i18n.ts — Dicionário centralizado de traduções
 *
 * Suporta: PT-BR | EN | ES
 *
 * INSTRUÇÕES:
 *  - Substitua os valores de `vslUrls` pelos links reais do seu player por idioma
 *  - Substitua os valores de `checkoutUrls` pelos links reais dos gateways por idioma
 */

// ─── Tipos ───────────────────────────────────────────────────────────────────

export type Locale = 'pt-BR' | 'en' | 'es';

export const LOCALES: Locale[] = ['pt-BR', 'en', 'es'];

// ─── URLs do Player VSL por Idioma ───────────────────────────────────────────
// Substitua pelos embeds reais (Panda Video / Vimeo / YouTube por idioma/legenda)

export const vslUrls: Record<Locale, string> = {
  'pt-BR': '', // Ex: 'https://player.pandavideo.com.br/embed/?v=XXXXX_PT'
  'en':    '', // Ex: 'https://player.pandavideo.com.br/embed/?v=XXXXX_EN'
  'es':    '', // Ex: 'https://player.pandavideo.com.br/embed/?v=XXXXX_ES'
};

// ─── URLs de Checkout por Idioma e Tipo ──────────────────────────────────────
// Substitua pelos links reais dos seus gateways de pagamento

export type CheckoutType = 'full' | 'combo' | 'discount';

export const checkoutUrls: Record<Locale, Record<CheckoutType, string>> = {
  'pt-BR': {
    full:     'https://pay.gateway.com/METODO_PT',
    combo:    'https://pay.gateway.com/METODO_AUDIOBOOK_PT',
    discount: 'https://pay.gateway.com/METODO_DESCONTO_5_PT',
  },
  'en': {
    full:     'https://pay.gateway.com/METODO_EN',
    combo:    'https://pay.gateway.com/METODO_AUDIOBOOK_EN',
    discount: 'https://pay.gateway.com/METODO_DESCONTO_5_EN',
  },
  'es': {
    full:     'https://pay.gateway.com/METODO_ES',
    combo:    'https://pay.gateway.com/METODO_AUDIOBOOK_ES',
    discount: 'https://pay.gateway.com/METODO_DESCONTO_5_ES',
  },
};

/**
 * Retorna a URL de checkout correta baseada no idioma e no estado do order bump
 */
export function getCheckoutUrlByLocale(
  isAudiobookSelected: boolean,
  locale: Locale,
): string {
  return isAudiobookSelected
    ? checkoutUrls[locale].combo
    : checkoutUrls[locale].full;
}

// ─── Metadados do Seletor de Idioma ──────────────────────────────────────────

export const localeLabels: Record<Locale, { flag: string; label: string; fullName: string }> = {
  'pt-BR': { flag: '🇧🇷', label: 'PT', fullName: 'Português' },
  'en':    { flag: '🇺🇸', label: 'EN', fullName: 'English'   },
  'es':    { flag: '🇪🇸', label: 'ES', fullName: 'Español'   },
};

// ─── Dicionário de Traduções ──────────────────────────────────────────────────

export const dict: Record<Locale, {
  navbar: {
    subtitle: string;
    cta: string;
  };
  hero: {
    badge: string;
    headlinePart1: string;
    headlineEm1: string;
    headlinePart2: string;
    headlineEm2: string;
    subheadline: string;
    subheadlineStrong: string;
    vslLabel: string;
    vslDuration: string;
    vslPlaceholder: string;
    cta: string;
    trustBadge: string;
  };
  stickyBar: {
    offer: string;
    offerStrong: string;
    cta: string;
  };
  exitPopup: {
    title: string;
    body: string;
    bodyStrong: string;
    offerLabel: string;
    offerHeadline: string;
    offerSub: string;
    cta: string;
    decline: string;
    closeLabel: string;
  };
  ctaSection: {
    badge: string;
    heading: string;
    subheading: string;
    tableHeaderBefore: string;
    tableHeaderAfter: string;
    finalQuote: string;
    finalQuoteStrong: string;
    cta: string;
    trustBadge: string;
    guarantee: string;
  };
}> = {

  // ════════════════════════════════════════════
  // PT-BR
  // ════════════════════════════════════════════
  'pt-BR': {
    navbar: {
      subtitle: '— Não Sofrer Mais Por Amor',
      cta: 'Quero Acessar ↓',
    },
    hero: {
      badge: '✦ Guia Estratégico de Transformação Afetiva',
      headlinePart1: 'Você não sofre porque',
      headlineEm1: 'ama demais.',
      headlinePart2: 'Você sofre porque',
      headlineEm2: 'se abandona demais.',
      subheadline: 'Chega de esperar uma mensagem que não chega. Chega de negociar sua dignidade para manter alguém por perto. Está na hora de tomar a',
      subheadlineStrong: 'única decisão que liberta',
      vslLabel: 'Assista ao vídeo —',
      vslDuration: 'Duração: 08:24',
      vslPlaceholder: 'Cole aqui o iframe do Panda Video / Vimeo / YouTube',
      cta: '🔓 QUERO PARAR DE ME ABANDONAR AGORA',
      trustBadge: 'Ambiente 100% seguro\u00a0·\u00a0Acesso imediato\u00a0·\u00a0Garantia de 7 dias',
    },
    stickyBar: {
      offer: '🔒 Oferta com',
      offerStrong: 'Garantia de 7 dias',
      cta: '🔓 Quero o Método Agora',
    },
    exitPopup: {
      title: 'Espere! Não desista de você agora...',
      body: 'Mudar seus padrões amorosos exige uma decisão. Se o problema for o preço, nós removemos essa barreira para você',
      bodyStrong: 'nas próximas 5 minutos.',
      offerLabel: 'Oferta Exclusiva de Saída',
      offerHeadline: '5% de Desconto Imediato',
      offerSub: 'Aplicado automaticamente no checkout — por tempo limitado',
      cta: '🔓 Quero Meu Desconto e Ativar Minha Mudança',
      decline: 'Não, prefiro continuar repetindo os mesmos ciclos e sofrendo por amor.',
      closeLabel: 'Fechar popup',
    },
    ctaSection: {
      badge: '✦ Transformação',
      heading: 'Antes e Depois da Decisão',
      subheading: 'Veja exatamente o que muda quando você aplica o Método D.E.C.I.S.Ã.O.',
      tableHeaderBefore: '😔 Identidade Antiga',
      tableHeaderAfter: '✨ Nova Identidade',
      finalQuote: 'A decisão mais importante',
      finalQuoteStrong: 'é esta.',
      cta: '🔓 QUERO PARAR DE ME ABANDONAR AGORA',
      trustBadge: 'Acesso imediato ao E-book · Exercícios Práticos · [Opcional] Audiobook · Garantia incondicional de 7 dias',
      guarantee: 'Garantia Incondicional de 7 dias — Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas.',
    },
  },

  // ════════════════════════════════════════════
  // EN
  // ════════════════════════════════════════════
  'en': {
    navbar: {
      subtitle: '— Stop Suffering for Love',
      cta: 'Get Access ↓',
    },
    hero: {
      badge: '✦ Strategic Guide to Emotional Transformation',
      headlinePart1: 'You don\'t suffer because you',
      headlineEm1: 'love too much.',
      headlinePart2: 'You suffer because you',
      headlineEm2: 'abandon yourself too much.',
      subheadline: 'Stop waiting for a text that never arrives. Stop negotiating your dignity to keep someone around. It is time to make the',
      subheadlineStrong: 'only decision that sets you free',
      vslLabel: 'Watch the video —',
      vslDuration: 'Duration: 08:24',
      vslPlaceholder: 'Paste your Panda Video / Vimeo / YouTube iframe here',
      cta: '🔓 I WANT TO STOP ABANDONING MYSELF NOW',
      trustBadge: '100% secure environment\u00a0·\u00a0Instant access\u00a0·\u00a07-day guarantee',
    },
    stickyBar: {
      offer: '🔒 Offer with',
      offerStrong: '7-Day Guarantee',
      cta: '🔓 I Want the Method Now',
    },
    exitPopup: {
      title: 'Wait! Don\'t give up on yourself now...',
      body: 'Changing your love patterns requires a decision. If price is the issue, we\'re removing that barrier for you',
      bodyStrong: 'in the next 5 minutes.',
      offerLabel: 'Exclusive Exit Offer',
      offerHeadline: '5% Instant Discount',
      offerSub: 'Automatically applied at checkout — limited time only',
      cta: '🔓 Claim My Discount and Activate My Change',
      decline: 'No, I prefer to keep repeating the same cycles and suffering for love.',
      closeLabel: 'Close popup',
    },
    ctaSection: {
      badge: '✦ Transformation',
      heading: 'Before and After the Decision',
      subheading: 'See exactly what changes when you apply the D.E.C.I.S.I.O.N. Method.',
      tableHeaderBefore: '😔 Old Identity',
      tableHeaderAfter: '✨ New Identity',
      finalQuote: 'The most important decision',
      finalQuoteStrong: 'is this one.',
      cta: '🔓 I WANT TO STOP ABANDONING MYSELF NOW',
      trustBadge: 'Instant access to the E-book · Practical Exercises · [Optional] Audiobook · Unconditional 7-day guarantee',
      guarantee: 'Unconditional 7-Day Guarantee — If you\'re not satisfied, we refund 100% of your money. No questions asked.',
    },
  },

  // ════════════════════════════════════════════
  // ES
  // ════════════════════════════════════════════
  'es': {
    navbar: {
      subtitle: '— Deja de Sufrir por Amor',
      cta: 'Obtener Acceso ↓',
    },
    hero: {
      badge: '✦ Guía Estratégica de Transformación Afectiva',
      headlinePart1: 'No sufres porque',
      headlineEm1: 'amas demasiado.',
      headlinePart2: 'Sufres porque',
      headlineEm2: 'te abandonas demasiado.',
      subheadline: 'Basta de esperar un mensaje que no llega. Basta de negociar tu dignidad para mantener a alguien cerca. Es hora de tomar la',
      subheadlineStrong: 'única decisión que libera',
      vslLabel: 'Mira el video —',
      vslDuration: 'Duración: 08:24',
      vslPlaceholder: 'Pega aquí el iframe de Panda Video / Vimeo / YouTube',
      cta: '🔓 QUIERO DEJAR DE ABANDONARME AHORA',
      trustBadge: 'Entorno 100% seguro\u00a0·\u00a0Acceso inmediato\u00a0·\u00a0Garantía de 7 días',
    },
    stickyBar: {
      offer: '🔒 Oferta con',
      offerStrong: 'Garantía de 7 días',
      cta: '🔓 Quiero el Método Ahora',
    },
    exitPopup: {
      title: '¡Espera! No te rindas de ti misma ahora...',
      body: 'Cambiar tus patrones amorosos requiere una decisión. Si el precio es el problema, nosotros removemos esa barrera para ti',
      bodyStrong: 'en los próximos 5 minutos.',
      offerLabel: 'Oferta Exclusiva de Salida',
      offerHeadline: '5% de Descuento Inmediato',
      offerSub: 'Aplicado automáticamente en el checkout — por tiempo limitado',
      cta: '🔓 Quiero mi Descuento y Activar mi Cambio',
      decline: 'No, prefiero seguir repitiendo los mismos ciclos y sufriendo por amor.',
      closeLabel: 'Cerrar ventana',
    },
    ctaSection: {
      badge: '✦ Transformación',
      heading: 'Antes y Después de la Decisión',
      subheading: 'Mira exactamente qué cambia cuando aplicas el Método D.E.C.I.S.I.Ó.N.',
      tableHeaderBefore: '😔 Identidad Antigua',
      tableHeaderAfter: '✨ Nueva Identidad',
      finalQuote: 'La decisión más importante',
      finalQuoteStrong: 'es esta.',
      cta: '🔓 QUIERO DEJAR DE ABANDONARME AHORA',
      trustBadge: 'Acceso inmediato al E-book · Ejercicios Prácticos · [Opcional] Audiolibro · Garantía incondicional de 7 días',
      guarantee: 'Garantía Incondicional de 7 días — Si no te gusta, devolvemos el 100% de tu dinero. Sin preguntas.',
    },
  },
};
