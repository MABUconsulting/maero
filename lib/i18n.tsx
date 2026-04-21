'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export const LOCALES = ['ro', 'en', 'it', 'fr'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'ro';

const STORAGE_KEY = 'maero-locale';

function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE;
  const langs = [navigator.language, ...(navigator.languages ?? [])];
  for (const lang of langs) {
    const code = lang.slice(0, 2).toLowerCase();
    if ((LOCALES as readonly string[]).includes(code)) return code as Locale;
  }
  return DEFAULT_LOCALE;
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  ready: boolean;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) as Locale | null;
    if (stored && (LOCALES as readonly string[]).includes(stored)) {
      setLocaleState(stored);
    } else {
      setLocaleState(detectBrowserLocale());
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch {}
    if (typeof document !== 'undefined') document.documentElement.lang = locale;
  }, [locale, ready]);

  const setLocale = (l: Locale) => setLocaleState(l);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, ready }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used inside LocaleProvider');
  return ctx;
}

export type LocalizedString = Record<Locale, string>;
export type LocalizedStringArray = Record<Locale, string[]>;

export function tString(value: LocalizedString | string, locale: Locale): string {
  if (typeof value === 'string') return value;
  return value[locale] ?? value[DEFAULT_LOCALE] ?? '';
}

export function tArray(value: LocalizedStringArray | string[], locale: Locale): string[] {
  if (Array.isArray(value)) return value;
  return value[locale] ?? value[DEFAULT_LOCALE] ?? [];
}
