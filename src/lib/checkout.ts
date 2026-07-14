/**
 * checkout.ts — Gestão centralizada das URLs de checkout
 *
 * INSTRUÇÕES: Substitua os valores abaixo pelos links reais
 * da sua plataforma (Hotmart, Kiwify, Eduzz, etc.)
 */

export const CHECKOUT_URLS = {
  /** Preço cheio — sem audiobook, sem desconto */
  full: "https://pay.gateway.com/METODO_CHEIO",
  /** Combo — e-book + audiobook (order bump marcado) */
  combo: "https://pay.gateway.com/METODO_AUDIOBOOK",
  /** Desconto 5% — exclusivo para usuários do Exit Intent Popup */
  discount: "https://pay.gateway.com/METODO_DESCONTO_5",
} as const;

export type CheckoutType = keyof typeof CHECKOUT_URLS;

/**
 * Retorna a URL de checkout correta com base no estado do order bump
 */
export function getCheckoutUrl(isAudiobookSelected: boolean): string {
  return isAudiobookSelected ? CHECKOUT_URLS.combo : CHECKOUT_URLS.full;
}
