export const locales = ["en", "zh", "ja", "vi", "pt"] as const;
export type Locale = (typeof locales)[number];
// Locales that are actually built, linked (hreflang / switcher) and put in the sitemap.
// Staged rollout: add a locale here only after the previous one is indexed by Google.
export const activeLocales: readonly Locale[] = ["en", "zh", "ja", "vi"];
export const defaultLocale: Locale = "en";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "中文",
  ja: "日本語",
  vi: "Tiếng Việt",
  pt: "Português",
};
