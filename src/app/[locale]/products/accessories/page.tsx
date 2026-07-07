import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
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
  return {
    title: locale === "zh" ? "配件与耗材" : locale === "ja" ? "アクセサリー・消耗品" : "Accessories & Consumables",
    description:
      locale === "zh"
        ? "CarryOn 平台配套耗材：采样拭子、运输管等。"
        : locale === "ja"
          ? "CarryOnプラットフォーム用消耗品：採取スワブ、輸送チューブなど。"
          : "Consumables for the CarryOn platform: sampling swabs, transport tubes, and more.",
    alternates: { canonical: `/${locale}/products/accessories/` },
  };
}

export default async function AccessoriesPage({
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
    { name: lang === "zh" ? "配件与耗材" : lang === "ja" ? "アクセサリー" : "Accessories", url: `/${locale}/products/accessories/` },
  ];

  const accessories = [
    {
      name: lang === "zh" ? "采样拭子套装" : lang === "ja" ? "採取スワブキット" : "Sampling Swab Kit",
      desc: lang === "zh" ? "无菌包装采样拭子，适用于口鼻拭子和直肠拭子采样。" : lang === "ja" ? "無菌包装の採取スワブ。口鼻スワブおよび直腸スワブ採取に対応。" : "Sterile-packaged sampling swabs for oronasal and rectal sample collection.",
      icon: "🧬",
    },
    {
      name: lang === "zh" ? "样本保存管" : lang === "ja" ? "サンプル保存チューブ" : "Sample Transport Tube",
      desc: lang === "zh" ? "含保存液的样本运输管，常温保存样本稳定性。" : lang === "ja" ? "保存液入りサンプル輸送チューブ。室温でサンプルの安定性を維持。" : "Transport tubes with preservative fluid for room temperature sample stability.",
      icon: "🧪",
    },
    {
      name: lang === "zh" ? "充电底座" : lang === "ja" ? "充電ドック" : "Charging Dock",
      desc: lang === "zh" ? "CarryOn 设备专用充电底座，支持快速充电。" : lang === "ja" ? "CarryOnデバイス専用充電ドック。急速充電対応。" : "Dedicated charging dock for the CarryOn device with fast-charge support.",
      icon: "🔌",
    },
    {
      name: lang === "zh" ? "便携收纳箱" : lang === "ja" ? "ポータブルケース" : "Portable Carrying Case",
      desc: lang === "zh" ? "防水防震收纳箱，可容纳设备、芯片和配件。" : lang === "ja" ? "防水耐衝撃ケース。デバイス、チップ、アクセサリーを収納。" : "Waterproof, shockproof case for device, chips, and accessories.",
      icon: "💼",
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="relative bg-[var(--color-primary)] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-accent)] opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href={`/${locale}/products/`} className="hover:text-white">
              {dict.nav.products}
            </Link>
            <span>/</span>
            <span className="text-white">{lang === "zh" ? "配件与耗材" : lang === "ja" ? "アクセサリー" : "Accessories"}</span>
          </nav>
          <h1 className="text-4xl font-bold sm:text-5xl">
            {lang === "zh" ? "配件与耗材" : lang === "ja" ? "アクセサリー・消耗品" : "Accessories & Consumables"}
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            {lang === "zh"
              ? "为您的 CarryOn 检测平台配备完整的耗材和配件。"
              : lang === "ja"
                ? "CarryOn検査プラットフォーム用の完全な消耗品とアクセサリー。"
                : "Complete your CarryOn testing platform with our range of consumables and accessories."}
          </p>
        </div>
      </section>

      {/* Accessories List */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {accessories.map((item, i) => (
              <FadeIn key={item.name} delay={i * 100}>
                <div className="rounded-xl bg-white p-8 shadow-sm border border-[var(--color-border)]">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-[var(--color-primary)]">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-[var(--color-text-light)] leading-relaxed">
                    {item.desc}
                  </p>
                  <Link
                    href={`/${locale}/contact/`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-[var(--color-accent)] hover:underline"
                  >
                    {lang === "zh" ? "询价" : lang === "ja" ? "見積もり" : "Request Pricing"}
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            {lang === "zh" ? "相关产品" : lang === "ja" ? "関連製品" : "See Also"}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              href={`/${locale}/products/carryon-device/`}
              className="group block rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all"
            >
              <h3 className="text-base font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {lang === "zh" ? "CarryOn 检测设备" : lang === "ja" ? "CarryOn 検出デバイス" : "CarryOn Detection Device"}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-light)]">
                {lang === "zh" ? "手持式PCR分析仪，配件的核心设备。" : lang === "ja" ? "ハンドヘルドPCRアナライザー、アクセサリーのコアデバイス。" : "Handheld PCR analyzer — the core device for these accessories."}
              </p>
            </Link>
            <Link
              href={`/${locale}/products/test-chips/`}
              className="group block rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all"
            >
              <h3 className="text-base font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {lang === "zh" ? "检测芯片" : lang === "ja" ? "検査チップ" : "Test Chips"}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-light)]">
                {lang === "zh" ? "微流控检测芯片，覆盖犬猫、病原体和食材溯源检测。" : lang === "ja" ? "犬猫、病原体、食品検査用マイクロ流体チップ。" : "Microfluidic test chips for canine, feline, pathogen, and meat ID testing."}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Inline Inquiry Form */}
      <section className="py-16">
        <div className="mx-auto max-w-lg px-6">
          <InquiryFormCompact
            productName={lang === "zh" ? "配件与耗材" : lang === "ja" ? "アクセサリー" : "Accessories & Consumables"}
            sourcePage="accessories"
            locale={locale}
          />
        </div>
      </section>

      {/* CTA */}
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
    </main>
  );
}
