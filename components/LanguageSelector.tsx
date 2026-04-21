'use client';

import { useLocale, LOCALES, type Locale } from '@/lib/i18n';

const FLAGS: Record<Locale, string> = {
  ro: '🇷🇴',
  en: '🇬🇧',
  it: '🇮🇹',
  fr: '🇫🇷',
};

const LABELS: Record<Locale, string> = {
  ro: 'RO',
  en: 'EN',
  it: 'IT',
  fr: 'FR',
};

export function LanguageSelector() {
  const { locale, setLocale } = useLocale();
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-1 bg-cream/95 backdrop-blur border border-gold/30 rounded-full px-2 py-1 shadow-soft">
      {LOCALES.map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          aria-label={LABELS[l]}
          className={`px-2 py-1 text-xs font-mark tracking-wider rounded-full transition-colors ${
            locale === l
              ? 'bg-gold text-cream'
              : 'text-cocoa/70 hover:text-gold'
          }`}
        >
          <span className="mr-1">{FLAGS[l]}</span>
          {LABELS[l]}
        </button>
      ))}
    </div>
  );
}
