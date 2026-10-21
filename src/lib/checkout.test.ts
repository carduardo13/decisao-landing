import { describe, it, expect } from 'vitest';
import { getCheckoutUrl, CHECKOUT_URLS } from './checkout';

describe('checkout utils', () => {
  describe('getCheckoutUrl', () => {
    it('should return combo URL when isAudiobookSelected is true', () => {
      const result = getCheckoutUrl(true);
      expect(result).toBe(CHECKOUT_URLS.combo);
    });

    it('should return full URL when isAudiobookSelected is false', () => {
      const result = getCheckoutUrl(false);
      expect(result).toBe(CHECKOUT_URLS.full);
    });
  });
});
