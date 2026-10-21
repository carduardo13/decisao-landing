import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from './navbar';
import { translations } from '@/lib/translations';

// Mock LanguageSelector since we are testing Navbar in isolation
vi.mock('@/components/ui/language-selector', () => ({
  default: ({ lang, onLangChange }: { lang: string, onLangChange: (lang: string) => void }) => (
    <div data-testid="mock-language-selector">
      <button onClick={() => onLangChange('en')}>Change to EN</button>
      <span>Current Lang: {lang}</span>
    </div>
  )
}));

describe('Navbar Component', () => {
  const mockOnLangChange = vi.fn();
  const mockCheckoutUrl = 'https://example.com/checkout';

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders correctly in Portuguese (pt)', () => {
    render(<Navbar lang="pt" onLangChange={mockOnLangChange} checkoutUrl={mockCheckoutUrl} />);

    // Check brand and subtitle text
    expect(screen.getByText(translations.pt.navbar.brand)).toBeInTheDocument();
    expect(screen.getByText(translations.pt.navbar.subtitle)).toBeInTheDocument();

    // Check CTA button
    const ctaButton = screen.getByText(translations.pt.navbar.cta);
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', mockCheckoutUrl);
  });

  it('renders correctly in English (en)', () => {
    render(<Navbar lang="en" onLangChange={mockOnLangChange} checkoutUrl={mockCheckoutUrl} />);

    // Check brand and subtitle text
    expect(screen.getByText(translations.en.navbar.brand)).toBeInTheDocument();
    expect(screen.getByText(translations.en.navbar.subtitle)).toBeInTheDocument();

    // Check CTA button
    const ctaButton = screen.getByText(translations.en.navbar.cta);
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', mockCheckoutUrl);
  });

  it('renders correctly in Spanish (es)', () => {
    render(<Navbar lang="es" onLangChange={mockOnLangChange} checkoutUrl={mockCheckoutUrl} />);

    // Check brand and subtitle text
    expect(screen.getByText(translations.es.navbar.brand)).toBeInTheDocument();
    expect(screen.getByText(translations.es.navbar.subtitle)).toBeInTheDocument();

    // Check CTA button
    const ctaButton = screen.getByText(translations.es.navbar.cta);
    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveAttribute('href', mockCheckoutUrl);
  });

  it('passes props to LanguageSelector and handles lang change correctly', () => {
    render(<Navbar lang="pt" onLangChange={mockOnLangChange} checkoutUrl={mockCheckoutUrl} />);

    expect(screen.getByTestId('mock-language-selector')).toBeInTheDocument();
    expect(screen.getByText('Current Lang: pt')).toBeInTheDocument();

    const changeLangButton = screen.getByText('Change to EN');
    changeLangButton.click();

    expect(mockOnLangChange).toHaveBeenCalledWith('en');
    expect(mockOnLangChange).toHaveBeenCalledTimes(1);
  });
});
