import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { productCategories, products } from "@/data/products";
import { breadcrumbSchema } from "@/lib/schema";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import CatalogButton from "@/components/CatalogButton";

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
  const dict = await getDictionary(locale);
  return {
    title: dict.products.title,
    description: dict.products.subtitle,
    alternates: { canonical: `/${locale}/products/` },
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const lang = locale as Locale;
  const dict = await getDictionary(lang);

  const breadcrumbs = [
    { name: dict.nav.home, url: `/${locale}/` },
    { name: dict.nav.products, url: `/${locale}/products/` },
  ];

  // Featured product (the device)
  const device = products.find((p) => p.id === "carryon-device")!;

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="relative bg-[var(--color-primary)] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-accent)] opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">{dict.products.title}</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">{dict.products.subtitle}</p>
        </div>
      </section>

      {/* Featured: CarryOn Device */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="relative bg-[var(--color-bg)] rounded-2xl p-8 flex items-center justify-center">
                <Image
                  src={device.images[0]}
                  alt={device.name[lang]}
                  width={500}
                  height={500}
                  className="object-contain max-h-[400px] w-auto"
                />
              </div>
              <div>
                <span className="inline-block rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-sm font-medium text-[var(--color-accent)] mb-4">
                  {lang === "zh" ? "核心设备" : lang === "ja" ? "コアデバイス" : "Core Device"}
                </span>
                <h2 className="text-3xl font-bold text-[var(--color-primary)]">
                  {device.name[lang]}
                </h2>
                <p className="mt-2 text-lg text-[var(--color-accent)] font-medium">
                  {device.tagline[lang]}
                </p>
                <p className="mt-4 text-[var(--color-text-light)] leading-relaxed">
                  {device.description[lang]}
                </p>

                {/* Key specs */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {device.keySpecs.map((spec) => (
                    <div
                      key={spec.value}
                      className="rounded-lg bg-[var(--color-bg)] p-3 text-center"
                    >
                      <div className="text-lg font-bold text-[var(--color-primary)]">
                        {spec.value}
                      </div>
                      <div className="text-xs text-[var(--color-text-light)]">
                        {spec.label[lang]}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/${locale}/products/carryon-device/`}
                    className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-6 py-3 text-base font-semibold text-white hover:bg-[var(--color-accent-light)] transition-colors"
                  >
                    {lang === "zh" ? "查看详情" : lang === "ja" ? "詳細を見る" : "View Details"}
                  </Link>
                  <Link
                    href={`/${locale}/contact/`}
                    className="inline-flex items-center justify-center rounded-lg border border-[var(--color-border)] px-6 py-3 text-base font-semibold text-[var(--color-primary)] hover:bg-[var(--color-bg)] transition-colors"
                  >
                    {dict.nav.requestDemo}
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">
            {lang === "zh" ? "产品分类" : lang === "ja" ? "製品カテゴリー" : "Product Categories"}
          </h2>
          <p className="mt-4 text-center text-[var(--color-text-light)] max-w-2xl mx-auto">
            {lang === "zh"
              ? "完整的即时分子诊断解决方案——从设备到检测芯片到耗材。"
              : lang === "ja"
                ? "デバイスから検査チップ、消耗品まで——完全なポイントオブケア分子診断ソリューション。"
                : "A complete point-of-care molecular diagnostics solution — from device to test chips to consumables."}
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {productCategories.map((cat, i) => (
              <FadeIn key={cat.slug} delay={i * 100}>
                <Link
                  href={`/${locale}/products/${cat.slug}/`}
                  className="group block rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all"
                >
                  <div className="relative h-48 bg-[var(--color-bg)] rounded-lg overflow-hidden mb-6 flex items-center justify-center">
                    <Image
                      src={cat.image}
                      alt={cat.name[lang]}
                      width={300}
                      height={200}
                      className="object-contain max-h-[160px] w-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    {cat.name[lang]}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-light)] leading-relaxed">
                    {cat.description[lang]}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--color-accent)]">
                    {lang === "zh" ? "查看全部" : lang === "ja" ? "すべて見る" : "View All"}
                    <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <CatalogButton
              label={dict.cta.downloadCatalog}
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
