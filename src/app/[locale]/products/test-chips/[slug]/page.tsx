import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getChipProducts, getProductBySlug, products } from "@/data/products";
import { breadcrumbSchema } from "@/lib/schema";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import InquiryFormCompact from "@/components/InquiryFormCompact";
import ProductViewTracker from "@/components/ProductViewTracker";

const chipProducts = getChipProducts();

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const chip of chipProducts) {
      params.push({ locale, slug: chip.slug });
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
  const product = getProductBySlug(slug);
  if (!product) return {};
  const lang = locale as Locale;
  return {
    title: product.name[lang],
    description: product.tagline[lang],
    alternates: { canonical: `/${locale}/products/test-chips/${slug}/` },
  };
}

export default async function ChipDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const lang = locale as Locale;
  const dict = await getDictionary(lang);

  const product = getProductBySlug(slug);
  if (!product) notFound();

  const breadcrumbs = [
    { name: dict.nav.home, url: `/${locale}/` },
    { name: dict.nav.products, url: `/${locale}/products/` },
    { name: lang === "zh" ? "检测芯片" : lang === "ja" ? "検査チップ" : "Test Chips", url: `/${locale}/products/test-chips/` },
    { name: product.name[lang], url: `/${locale}/products/test-chips/${slug}/` },
  ];

  const categoryLabel =
    product.category === "chip-canine"
      ? (lang === "zh" ? "犬类检测" : lang === "ja" ? "犬用検査" : "Canine")
      : product.category === "chip-feline"
        ? (lang === "zh" ? "猫类检测" : lang === "ja" ? "猫用検査" : "Feline")
        : product.category === "chip-pathogen"
          ? (lang === "zh" ? "病原体检测" : lang === "ja" ? "病原体検査" : "Pathogen")
          : (lang === "zh" ? "食材溯源" : lang === "ja" ? "食品トレーサビリティ" : "Meat ID");

  // Get related products
  const relatedProducts = product.relatedProducts
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products;

  // Generate product schema
  const chipSchema = {
    "@context": "https://schema.org",
    "@type": ["Product", "MedicalDevice"],
    name: product.name.en,
    description: product.description.en,
    brand: { "@type": "Brand", name: "CarryOn" },
    manufacturer: {
      "@type": "Organization",
      name: "Ningbo Yinrui Biomedical Instruments Co., Ltd",
    },
    category: "Veterinary Diagnostic Reagent",
    additionalProperty: product.fullSpecs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label.en,
      value: spec.value,
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chipSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Above the Fold: Image + Info */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            {/* Left: Image */}
            <div>
              <div className="relative bg-[var(--color-bg)] rounded-2xl p-8 md:p-12">
                <Image
                  src={product.images[0]}
                  alt={product.name[lang]}
                  width={500}
                  height={400}
                  className="object-contain w-full max-h-[400px]"
                  priority
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
                    {categoryLabel}
                  </span>
                  {product.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="rounded-full bg-[var(--color-green)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-green)]"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
              {product.images.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {product.images.map((img, i) => (
                    <div
                      key={i}
                      className="bg-[var(--color-bg)] rounded-lg p-2 border border-[var(--color-border)]"
                    >
                      <Image
                        src={img}
                        alt={`${product.name[lang]} view ${i + 1}`}
                        width={120}
                        height={120}
                        className="object-contain w-full h-20"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Info */}
            <div>
              {/* Breadcrumb */}
              <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-light)] mb-6">
                <Link href={`/${locale}/products/`} className="hover:text-[var(--color-accent)]">
                  {dict.nav.products}
                </Link>
                <span>/</span>
                <Link href={`/${locale}/products/test-chips/`} className="hover:text-[var(--color-accent)]">
                  {lang === "zh" ? "检测芯片" : lang === "ja" ? "検査チップ" : "Test Chips"}
                </Link>
                <span>/</span>
                <span className="text-[var(--color-primary)]">{categoryLabel}</span>
              </nav>

              <h1 className="text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">
                {product.name[lang]}
              </h1>
              <p className="mt-3 text-lg text-[var(--color-accent)] font-medium">
                {product.tagline[lang]}
              </p>
              <p className="mt-4 text-[var(--color-text-light)] leading-relaxed">
                {product.description[lang]}
              </p>

              {/* Key Specs */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                {product.keySpecs.map((spec) => (
                  <div
                    key={spec.value}
                    className="rounded-xl border border-[var(--color-border)] p-3 text-center"
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

              {/* Detected Targets */}
              {product.detectedTargets && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider">
                    {lang === "zh" ? "检测靶标" : lang === "ja" ? "検出ターゲット" : "Detection Targets"}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {product.detectedTargets.map((target) => (
                      <li key={target[lang]} className="flex items-center gap-3 text-[var(--color-text-light)]">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-green)]/10 text-[var(--color-green)] text-xs">
                          ✓
                        </span>
                        {target[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/${locale}/contact/?product=${encodeURIComponent(product.name.en)}`}
                  className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-base font-semibold text-white hover:bg-[var(--color-accent-light)] transition-colors"
                >
                  {lang === "zh" ? "获取报价" : lang === "ja" ? "見積もりを取得" : "Get a Quote"}
                </Link>
                <Link
                  href={`/${locale}/contact/?product=${encodeURIComponent(product.name.en)}`}
                  className="inline-flex items-center justify-center rounded-lg border border-[var(--color-border)] px-8 py-3.5 text-base font-semibold text-[var(--color-primary)] hover:bg-[var(--color-bg)] transition-colors"
                >
                  {dict.nav.requestDemo}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Specs Table */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-[var(--color-primary)]">
            {dict.products.specs.title}
          </h2>
          <div className="mt-8">
            <div className="divide-y divide-[var(--color-border)] border border-[var(--color-border)] rounded-xl overflow-hidden">
              {product.fullSpecs.map((spec, i) => (
                <div
                  key={spec.value + i}
                  className={`flex flex-col sm:flex-row sm:justify-between px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-[var(--color-bg)]"}`}
                >
                  <span className="font-medium text-[var(--color-primary)]">
                    {spec.label[lang]}
                  </span>
                  <span className="text-[var(--color-text-light)] mt-1 sm:mt-0">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">
              {lang === "zh" ? "相关产品" : lang === "ja" ? "関連製品" : "Related Products"}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((rp, i) => {
                const href = rp.category === "device"
                  ? `/${locale}/products/carryon-device/`
                  : `/${locale}/products/test-chips/${rp.slug}/`;
                return (
                  <FadeIn key={rp.id} delay={i * 80}>
                    <Link
                      href={href}
                      className="group block rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md transition-all"
                    >
                      <h3 className="text-base font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                        {rp.name[lang]}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--color-text-light)] line-clamp-2">
                        {rp.tagline[lang]}
                      </p>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Inline Inquiry Form */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-lg px-6">
          <InquiryFormCompact
            productName={product.name[lang]}
            sourcePage={`test-chips/${slug}`}
            locale={locale}
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-bold">{dict.cta.title}</h2>
          <p className="mt-4 text-lg text-white/80">{dict.cta.subtitle}</p>
          <Link
            href={`/${locale}/contact/`}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[var(--color-accent)] hover:bg-white/90 transition-colors"
          >
            {dict.cta.button}
          </Link>
        </div>
      </section>

      <ProductViewTracker productName={product.name.en} productCategory={product.category} />
    </main>
  );
}
