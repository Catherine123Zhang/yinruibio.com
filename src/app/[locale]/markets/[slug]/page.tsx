import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { markets, getMarketBySlug, getAllMarketSlugs } from "@/data/markets";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import InquiryFormCompact from "@/components/InquiryFormCompact";
import CatalogButton from "@/components/CatalogButton";

export async function generateStaticParams() {
  const slugs = getAllMarketSlugs();
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const market = getMarketBySlug(slug);
  if (!market) return {};

  return {
    title: market.heroTitle[locale as Locale],
    description: market.heroSubtitle[locale as Locale],
    alternates: { canonical: `/${locale}/markets/${slug}/` },
    openGraph: {
      title: market.heroTitle[locale as Locale],
      description: market.heroSubtitle[locale as Locale],
      type: "article",
      url: `https://yinruibio.com/${locale}/markets/${slug}/`,
    },
  };
}

/* Render markdown-like section content with headings, lists, paragraphs */
function renderSection(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trim() === "") continue;

    // H3 (### )
    if (line.startsWith("### ")) {
      // Skip — we render section titles separately
      continue;
    }

    // Bold section headers like **USDA-APHIS:**
    if (line.startsWith("**") && line.includes(":**")) {
      const match = line.match(/^\*\*(.+?):\*\*\s*(.*)/);
      if (match) {
        elements.push(
          <div key={`bh-${i}`} className="mt-6 first:mt-0">
            <h4 className="text-base font-bold text-[var(--color-primary)]">
              {match[1]}
            </h4>
            {match[2] && (
              <p className="mt-1 text-[var(--color-text-light)] leading-relaxed">
                {match[2]}
              </p>
            )}
          </div>
        );
        continue;
      }
    }

    // List items
    if (line.trim().startsWith("- ")) {
      // Collect consecutive list items
      const items: string[] = [];
      let j = i;
      while (j < lines.length && lines[j].trim().startsWith("- ")) {
        items.push(lines[j].trim().replace(/^- /, ""));
        j++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="mt-2 space-y-1.5 list-disc list-inside text-[var(--color-text-light)]">
          {items.map((item, idx) => (
            <li key={idx} className="text-sm leading-relaxed">{item}</li>
          ))}
        </ul>
      );
      i = j - 1;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={`p-${i}`} className="mt-3 text-[var(--color-text-light)] leading-relaxed">
        {line}
      </p>
    );
  }

  return elements;
}

export default async function MarketDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const market = getMarketBySlug(slug);
  if (!market) notFound();
  const dict = await getDictionary(locale as Locale);

  const loc = locale as Locale;

  const breadcrumbs = [
    { name: dict.nav.home, url: `/${locale}/` },
    { name: locale === "zh" ? "全球市场" : locale === "ja" ? "グローバル市場" : "Markets", url: `/${locale}/markets/` },
    { name: market.name[loc], url: `/${locale}/markets/${slug}/` },
  ];

  const faqItems = market.faqs.map((f) => ({ q: f.q[loc], a: f.a[loc] }));

  // Other markets for "Explore More"
  const otherMarkets = markets.filter((m) => m.slug !== slug).slice(0, 4);

  const sectionLabels: Record<Locale, {
    overview: string;
    regulatory: string;
    shipping: string;
    applications: string;
    distribution: string;
    faq: string;
    otherMarkets: string;
  }> = {
    en: {
      overview: "Market Overview",
      regulatory: "Regulatory Pathway",
      shipping: "Shipping & Logistics",
      applications: "Key Applications",
      distribution: "Distribution & Partnership",
      faq: "Frequently Asked Questions",
      otherMarkets: "Explore Other Markets",
    },
    zh: {
      overview: "市场概述",
      regulatory: "监管途径",
      shipping: "运输与物流",
      applications: "主要应用",
      distribution: "分销与合作",
      faq: "常见问题",
      otherMarkets: "探索其他市场",
    },
    ja: {
      overview: "市場概要",
      regulatory: "規制経路",
      shipping: "出荷・物流",
      applications: "主要アプリケーション",
      distribution: "販売・パートナーシップ",
      faq: "よくある質問",
      otherMarkets: "他の市場を探す",
    },
  };

  const labels = sectionLabels[loc];

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqItems)),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href={`/${locale}/markets/`} className="hover:text-white">
              {locale === "zh" ? "全球市场" : locale === "ja" ? "グローバル市場" : "Markets"}
            </Link>
            <span>/</span>
            <span className="text-white/80">{market.name[loc]}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{flagMap[market.countryCode] || ""}</span>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {locale === "zh" ? "港口：" : locale === "ja" ? "港：" : "Port: "}
              {market.port}
            </div>
          </div>

          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight">
            {market.heroTitle[loc]}
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-3xl">
            {market.heroSubtitle[loc]}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={`/${locale}/contact/`}
              className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-[var(--color-accent-light)] transition-colors"
            >
              {dict.cta.button}
            </a>
            <CatalogButton
              label={dict.cta.downloadCatalog}
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Top Inquiry Form */}
      <section className="py-12 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-lg px-6">
          <InquiryFormCompact
            productName={`CarryOn PCR — ${market.name.en}`}
            sourcePage={`markets/${slug}`}
            locale={locale}
          />
        </div>
      </section>

      {/* Content Sections */}
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">

          {/* Market Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 pb-2 border-b border-[var(--color-border)]">
              {labels.overview}
            </h2>
            <div>{renderSection(market.marketOverview[loc])}</div>
          </section>

          {/* Regulatory Pathway */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 pb-2 border-b border-[var(--color-border)]">
              {labels.regulatory}
            </h2>
            <div className="rounded-xl bg-[var(--color-bg)] p-6 md:p-8">
              {renderSection(market.regulatoryPathway[loc])}
            </div>
          </section>

          {/* Shipping & Logistics */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 pb-2 border-b border-[var(--color-border)]">
              {labels.shipping}
            </h2>
            <div>{renderSection(market.shippingLogistics[loc])}</div>
          </section>

          {/* Key Applications */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 pb-2 border-b border-[var(--color-border)]">
              {labels.applications}
            </h2>
            <div>{renderSection(market.keyApplications[loc])}</div>
          </section>

          {/* Internal Product Links */}
          <section className="mb-16 rounded-xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-6 md:p-8">
            <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4">
              {locale === "zh" ? "相关产品" : locale === "ja" ? "関連製品" : "Related Products"}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href={`/${locale}/products/carryon-device/`}
                className="flex items-center gap-3 rounded-lg bg-white p-4 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] font-bold text-sm">
                  PCR
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-primary)] text-sm">
                    {locale === "zh" ? "CarryOn 检测设备" : locale === "ja" ? "CarryOn デバイス" : "CarryOn Device"}
                  </div>
                  <div className="text-xs text-[var(--color-text-light)]">
                    {locale === "zh" ? "2.0kg 便携式PCR分析仪" : locale === "ja" ? "2.0kg ポータブルPCRアナライザー" : "2.0kg Portable PCR Analyzer"}
                  </div>
                </div>
              </Link>
              <Link
                href={`/${locale}/products/test-chips/`}
                className="flex items-center gap-3 rounded-lg bg-white p-4 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] font-bold text-sm">
                  Chip
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-primary)] text-sm">
                    {locale === "zh" ? "检测芯片" : locale === "ja" ? "検査チップ" : "Test Chips"}
                  </div>
                  <div className="text-xs text-[var(--color-text-light)]">
                    {locale === "zh" ? "犬、猫、病原体、肉源鉴定" : locale === "ja" ? "犬、猫、病原体、肉種鑑定" : "Canine, Feline, Pathogen, Meat ID"}
                  </div>
                </div>
              </Link>
              <Link
                href={`/${locale}/technology/`}
                className="flex items-center gap-3 rounded-lg bg-white p-4 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] font-bold text-sm">
                  Tech
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-primary)] text-sm">
                    {dict.nav.technology}
                  </div>
                  <div className="text-xs text-[var(--color-text-light)]">
                    {locale === "zh" ? "微流控PCR技术" : locale === "ja" ? "マイクロ流体PCR技術" : "Microfluidic PCR Technology"}
                  </div>
                </div>
              </Link>
              <Link
                href={`/${locale}/blog/`}
                className="flex items-center gap-3 rounded-lg bg-white p-4 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center text-[var(--color-accent)] font-bold text-sm">
                  Blog
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-primary)] text-sm">
                    {dict.nav.blog}
                  </div>
                  <div className="text-xs text-[var(--color-text-light)]">
                    {locale === "zh" ? "技术文章与指南" : locale === "ja" ? "技術記事とガイド" : "Technical Articles & Guides"}
                  </div>
                </div>
              </Link>
            </div>
          </section>

          {/* Distribution Model */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4 pb-2 border-b border-[var(--color-border)]">
              {labels.distribution}
            </h2>
            <div>{renderSection(market.distributionModel[loc])}</div>
          </section>

          {/* FAQs */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6 pb-2 border-b border-[var(--color-border)]">
              {labels.faq}
            </h2>
            <div className="space-y-4">
              {market.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm"
                >
                  <h3 className="text-base font-semibold text-[var(--color-primary)]">
                    {faq.q[loc]}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--color-text-light)] leading-relaxed">
                    {faq.a[loc]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Other Markets */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
              {labels.otherMarkets}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {otherMarkets.map((m) => (
                <Link
                  key={m.slug}
                  href={`/${locale}/markets/${m.slug}/`}
                  className="group block rounded-xl bg-white p-4 shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all text-center"
                >
                  <div className="text-2xl mb-2">
                    {flagMap[m.countryCode] || m.countryCode}
                  </div>
                  <div className="text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    {m.name[loc]}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>

      {/* Bottom Inquiry Form */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-lg px-6">
          <InquiryFormCompact
            productName={`CarryOn PCR — ${market.name.en}`}
            sourcePage={`markets/${slug}`}
            locale={locale}
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-bold">{dict.cta.title}</h2>
          <p className="mt-4 text-lg text-white/80">{dict.cta.subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/contact/`}
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[var(--color-accent)] hover:bg-white/90 transition-colors"
            >
              {dict.cta.button}
            </Link>
            <Link
              href={`/${locale}/products/carryon-device/`}
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              {locale === "zh" ? "查看CarryOn设备" : locale === "ja" ? "CarryOnデバイスを見る" : "View CarryOn Device"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
