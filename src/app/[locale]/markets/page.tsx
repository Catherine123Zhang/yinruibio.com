import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { markets } from "@/data/markets";
import { breadcrumbSchema } from "@/lib/schema";
import InquiryFormCompact from "@/components/InquiryFormCompact";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const titles: Record<Locale, string> = {
    en: "Global Markets — CarryOn Portable PCR Platform",
    zh: "全球市场 — CarryOn便携式PCR平台",
    ja: "グローバル市場 — CarryOnポータブルPCRプラットフォーム",
  };
  const descriptions: Record<Locale, string> = {
    en: "Explore CarryOn portable PCR diagnostics availability across 8 key global markets. Regulatory pathways, shipping logistics, and distribution partnerships for veterinary molecular diagnostics.",
    zh: "探索CarryOn便携式PCR诊断在全球8个重点市场的可用性。兽医分子诊断的监管途径、物流和分销合作。",
    ja: "8つの主要グローバル市場でのCarryOnポータブルPCR診断の展開をご覧ください。獣医分子診断の規制経路、物流、販売パートナーシップ。",
  };

  return {
    title: titles[locale as Locale],
    description: descriptions[locale as Locale],
    alternates: { canonical: `/${locale}/markets/` },
  };
}

export default async function MarketsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  const breadcrumbs = [
    { name: dict.nav.home, url: `/${locale}/` },
    { name: locale === "zh" ? "全球市场" : locale === "ja" ? "グローバル市場" : "Markets", url: `/${locale}/markets/` },
  ];

  const heroTitle: Record<Locale, string> = {
    en: "Global Markets",
    zh: "全球市场",
    ja: "グローバル市場",
  };
  const heroSubtitle: Record<Locale, string> = {
    en: "CarryOn portable PCR diagnostics are available worldwide. Explore regulatory pathways, shipping logistics, and distribution opportunities in your market.",
    zh: "CarryOn便携式PCR诊断面向全球市场。探索您所在市场的监管途径、物流和分销机会。",
    ja: "CarryOnポータブルPCR診断は世界中で利用可能です。お客様の市場における規制経路、物流、販売機会をご覧ください。",
  };

  const flagMap: Record<string, string> = {
    US: "\u{1F1FA}\u{1F1F8}",
    BR: "\u{1F1E7}\u{1F1F7}",
    IN: "\u{1F1EE}\u{1F1F3}",
    DE: "\u{1F1E9}\u{1F1EA}",
    JP: "\u{1F1EF}\u{1F1F5}",
    AU: "\u{1F1E6}\u{1F1FA}",
    GB: "\u{1F1EC}\u{1F1E7}",
    TH: "\u{1F1F9}\u{1F1ED}",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href={`/${locale}/`} className="hover:text-white">
              {dict.nav.home}
            </Link>
            <span>/</span>
            <span className="text-white/80">
              {locale === "zh" ? "全球市场" : locale === "ja" ? "グローバル市場" : "Markets"}
            </span>
          </nav>
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            {heroTitle[locale as Locale]}
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-3xl">
            {heroSubtitle[locale as Locale]}
          </p>
        </div>
      </section>

      {/* Market Grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {markets.map((market) => (
              <Link
                key={market.slug}
                href={`/${locale}/markets/${market.slug}/`}
                className="group block rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all"
              >
                <div className="text-4xl mb-3">
                  {flagMap[market.countryCode] || market.countryCode}
                </div>
                <h2 className="text-lg font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                  {market.name[locale as Locale]}
                </h2>
                <p className="mt-2 text-sm text-[var(--color-text-light)] line-clamp-3">
                  {market.heroSubtitle[locale as Locale]}
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-[var(--color-text-light)]">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {locale === "zh" ? "港口：" : locale === "ja" ? "港：" : "Port: "}
                  {market.port}
                </div>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--color-accent)]">
                  {locale === "zh" ? "了解更多" : locale === "ja" ? "詳細を見る" : "Learn More"}
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[var(--color-primary)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center text-white">
            <div>
              <div className="text-2xl sm:text-3xl font-bold">8+</div>
              <div className="mt-1 text-sm text-white/70">
                {locale === "zh" ? "目标市场" : locale === "ja" ? "ターゲット市場" : "Target Markets"}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold">CE + ISO</div>
              <div className="mt-1 text-sm text-white/70">
                {locale === "zh" ? "认证" : locale === "ja" ? "認証" : "Certified"}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold">3-35</div>
              <div className="mt-1 text-sm text-white/70">
                {locale === "zh" ? "天运输时间" : locale === "ja" ? "日の輸送時間" : "Days Shipping"}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold">FOB</div>
              <div className="mt-1 text-sm text-white/70">
                {locale === "zh" ? "宁波" : locale === "ja" ? "寧波" : "Ningbo"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-lg px-6">
          <InquiryFormCompact
            productName="CarryOn Portable PCR Platform"
            sourcePage="markets"
            locale={locale}
          />
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <span className="font-medium text-[var(--color-primary)]">
              {locale === "zh" ? "了解更多：" : locale === "ja" ? "もっと見る：" : "Explore:"}
            </span>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href={`/${locale}/products/carryon-device/`}
                className="inline-flex items-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                {locale === "zh" ? "CarryOn 设备" : locale === "ja" ? "CarryOn デバイス" : "CarryOn Device"}
              </Link>
              <Link
                href={`/${locale}/products/test-chips/`}
                className="inline-flex items-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                {locale === "zh" ? "检测芯片" : locale === "ja" ? "検査チップ" : "Test Chips"}
              </Link>
              <Link
                href={`/${locale}/technology/`}
                className="inline-flex items-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                {dict.nav.technology}
              </Link>
              <Link
                href={`/${locale}/blog/`}
                className="inline-flex items-center rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                {dict.nav.blog}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
