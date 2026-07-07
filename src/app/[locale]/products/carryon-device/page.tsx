import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getChipProducts } from "@/data/products";
import { productSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import InquiryFormCompact from "@/components/InquiryFormCompact";
import ProductViewTracker from "@/components/ProductViewTracker";

const device = products.find((p) => p.id === "carryon-device")!;

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
  const lang = locale as Locale;
  return {
    title: device.name[lang],
    description: device.tagline[lang],
    alternates: { canonical: `/${locale}/products/carryon-device/` },
  };
}

export default async function CarryOnDevicePage({
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
    { name: device.name[lang], url: `/${locale}/products/carryon-device/` },
  ];

  const chipProducts = getChipProducts();

  const deviceFaqs = [
    {
      q: "How does the CarryOn portable PCR analyzer work?",
      a: "The CarryOn uses real-time fluorescence PCR with microfluidic chip technology. You simply load a sample (swab, blood, or saliva) into the pre-loaded microfluidic chip, insert it into the device, and the system automatically completes nucleic acid extraction, purification, and PCR amplification. Results appear on the built-in touchscreen in under 60 minutes.",
    },
    {
      q: "What is the accuracy of the CarryOn PCR system?",
      a: "The CarryOn delivers PCR-level accuracy with a sensitivity of 50 copies per test and a reproducibility of CV ≤ 3%. Real-time fluorescence PCR is the gold standard in molecular diagnostics, offering sensitivity above 99% and virtually zero false positives.",
    },
    {
      q: "Does the CarryOn require regular maintenance?",
      a: "The CarryOn requires minimal maintenance. The closed-system, single-use microfluidic chips eliminate contamination risk and the need for decontamination protocols. Simply charge the battery, keep the exterior clean, and store the device at room temperature. There are no consumable parts to replace on the device itself.",
    },
    {
      q: "How long does the battery last on the CarryOn device?",
      a: "The CarryOn's rechargeable lithium battery provides approximately 3.5 hours of continuous runtime, which is enough to run 3-4 complete tests on a single charge. The device can also operate while plugged in for unlimited testing sessions.",
    },
    {
      q: "Do I need laboratory training to operate the CarryOn?",
      a: "No laboratory training is required. The CarryOn is designed as a sample-in, result-out system. The entire PCR process — extraction, purification, amplification, and detection — happens automatically inside the sealed microfluidic chip. Any staff member can be trained to operate it in approximately 30 minutes.",
    },
    {
      q: "What certifications does the CarryOn device hold?",
      a: "The CarryOn Portable PCR Analyzer holds CE certification for medical devices, and the manufacturing facility is ISO 13485 certified. The company has also been recognized as a National High-Tech Enterprise and a Ningbo 'Specialized & Innovative' SME.",
    },
    {
      q: "What is the warranty on the CarryOn PCR analyzer?",
      a: "The CarryOn comes with a manufacturer warranty covering hardware defects. Contact our sales team for specific warranty terms for your region. Extended warranty and service agreements are also available for distribution partners.",
    },
    {
      q: "Can the CarryOn device connect to my clinic's computer system?",
      a: "Yes. The CarryOn supports WiFi connectivity for wireless result transfer. Test results can be exported from the built-in touchscreen system and integrated into your clinic's medical records. The proprietary software provides automatic result interpretation and report generation.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: lang === "zh" ? "加入样本" : lang === "ja" ? "サンプル投入" : "Load Sample",
      desc: lang === "zh" ? "将拭子/血液样本加入微流控芯片" : lang === "ja" ? "スワブ/血液サンプルをチップに投入" : "Add swab or blood sample to the microfluidic chip",
    },
    {
      num: "02",
      title: lang === "zh" ? "插入芯片" : lang === "ja" ? "チップ挿入" : "Insert Chip",
      desc: lang === "zh" ? "将芯片插入CarryOn设备" : lang === "ja" ? "チップをデバイスに挿入" : "Place the chip into the CarryOn device",
    },
    {
      num: "03",
      title: lang === "zh" ? "自动检测" : lang === "ja" ? "自動検出" : "Auto Process",
      desc: lang === "zh" ? "自动完成核酸提取、纯化和PCR扩增" : lang === "ja" ? "核酸抽出・精製・PCR増幅を自動実行" : "Automated extraction, purification, and PCR amplification",
    },
    {
      num: "04",
      title: lang === "zh" ? "读取结果" : lang === "ja" ? "結果表示" : "Read Result",
      desc: lang === "zh" ? "触屏显示检测报告，支持WiFi传输" : lang === "ja" ? "タッチスクリーンで結果表示、WiFi転送対応" : "Results displayed on touchscreen, WiFi transfer supported",
    },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero: Product Above the Fold */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* Left: Product Image */}
            <div className="relative bg-[var(--color-bg)] rounded-2xl p-8 md:p-12">
              <Image
                src={device.images[0]}
                alt={device.name[lang]}
                width={600}
                height={600}
                className="object-contain w-full max-h-[500px]"
                priority
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {device.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="rounded-full bg-[var(--color-green)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-green)]"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div>
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-[var(--color-text-light)] mb-6">
                <Link href={`/${locale}/products/`} className="hover:text-[var(--color-accent)]">
                  {dict.nav.products}
                </Link>
                <span>/</span>
                <span className="text-[var(--color-primary)]">{lang === "zh" ? "检测设备" : lang === "ja" ? "検出デバイス" : "Detection Device"}</span>
              </nav>

              <h1 className="text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
                {device.name[lang]}
              </h1>
              <p className="mt-3 text-lg text-[var(--color-accent)] font-medium">
                {device.tagline[lang]}
              </p>
              <p className="mt-4 text-[var(--color-text-light)] leading-relaxed">
                {device.description[lang]}
              </p>

              {/* Key Specs */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {device.keySpecs.map((spec) => (
                  <div
                    key={spec.value}
                    className="rounded-xl border border-[var(--color-border)] p-4"
                  >
                    <div className="text-2xl font-bold text-[var(--color-primary)]">
                      {spec.value}
                    </div>
                    <div className="text-sm text-[var(--color-text-light)] mt-1">
                      {spec.label[lang]}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/${locale}/contact/?product=${encodeURIComponent("CarryOn Portable PCR Analyzer")}`}
                  className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-base font-semibold text-white hover:bg-[var(--color-accent-light)] transition-colors"
                >
                  {dict.nav.requestDemo}
                </Link>
                <Link
                  href={`/${locale}/contact/?product=${encodeURIComponent("CarryOn Portable PCR Analyzer")}`}
                  className="inline-flex items-center justify-center rounded-lg border border-[var(--color-border)] px-8 py-3.5 text-base font-semibold text-[var(--color-primary)] hover:bg-[var(--color-bg)] transition-colors"
                >
                  {lang === "zh" ? "获取报价" : lang === "ja" ? "見積もりを取得" : "Get a Quote"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">
            {lang === "zh" ? "操作流程" : lang === "ja" ? "操作手順" : "How It Works"}
          </h2>
          <p className="mt-4 text-center text-[var(--color-text-light)]">
            {lang === "zh"
              ? "4步完成检测，无需专业培训"
              : lang === "ja"
                ? "4ステップで検査完了、専門トレーニング不要"
                : "4 simple steps. No training required."}
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 100}>
                <div className="relative rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-lg font-bold text-[var(--color-accent)] mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--color-primary)]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-text-light)]">{step.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 text-[var(--color-border)]">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Full Specs Table */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">
            {dict.products.specs.title}
          </h2>
          <div className="mt-12">
            <div className="divide-y divide-[var(--color-border)] border border-[var(--color-border)] rounded-xl overflow-hidden">
              {device.fullSpecs.map((spec, i) => (
                <div
                  key={spec.value + i}
                  className={`flex flex-col sm:flex-row sm:justify-between px-6 py-4 ${i % 2 === 0 ? "bg-[var(--color-bg)]" : "bg-white"}`}
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

          {/* Mid-page CTA */}
          <div className="mt-12 text-center">
            <Link
              href={`/${locale}/contact/`}
              className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-base font-semibold text-white hover:bg-[var(--color-accent-light)] transition-colors"
            >
              {lang === "zh" ? "获取详细规格书" : lang === "ja" ? "詳細仕様書を取得" : "Download Full Spec Sheet"}
            </Link>
          </div>
        </div>
      </section>

      {/* Compatible Test Chips */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">
            {lang === "zh" ? "配套检测芯片" : lang === "ja" ? "対応検査チップ" : "Compatible Test Chips"}
          </h2>
          <p className="mt-4 text-center text-[var(--color-text-light)] max-w-2xl mx-auto">
            {lang === "zh"
              ? "选择适合您检测需求的微流控芯片，覆盖犬类、猫类、病原体和食材溯源检测。"
              : lang === "ja"
                ? "犬、猫、病原体、食品トレーサビリティ検査をカバーする検査チップを選択。"
                : "Choose the right microfluidic chip for your testing needs. Covering canine, feline, pathogen, and meat species identification."}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {chipProducts.map((chip, i) => (
              <FadeIn key={chip.id} delay={i * 80}>
                <Link
                  href={`/${locale}/products/test-chips/${chip.slug}/`}
                  className="group block rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="rounded-full bg-[var(--color-accent)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--color-accent)]">
                      {chip.category === "chip-canine"
                        ? (lang === "zh" ? "犬类" : lang === "ja" ? "犬用" : "Canine")
                        : (lang === "zh" ? "猫类" : lang === "ja" ? "猫用" : "Feline")}
                    </span>
                    {chip.certifications.map((c) => (
                      <span key={c} className="rounded-full bg-[var(--color-green)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--color-green)]">
                        {c}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                    {chip.name[lang]}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-text-light)] line-clamp-2">
                    {chip.tagline[lang]}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-[var(--color-text-light)]">
                    {chip.keySpecs.slice(0, 2).map((spec) => (
                      <span key={spec.value}>
                        <span className="font-semibold text-[var(--color-primary)]">{spec.value}</span>
                      </span>
                    ))}
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href={`/${locale}/products/test-chips/`}
              className="inline-flex items-center text-[var(--color-accent)] font-medium hover:underline"
            >
              {lang === "zh" ? "查看全部检测芯片" : lang === "ja" ? "すべての検査チップを見る" : "View All Test Chips"}
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-8">
            {lang === "zh" ? "相关产品" : lang === "ja" ? "関連製品" : "Related Products"}
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
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
            <Link
              href={`/${locale}/products/accessories/`}
              className="group block rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all"
            >
              <h3 className="text-base font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {lang === "zh" ? "配件与耗材" : lang === "ja" ? "アクセサリー" : "Accessories & Consumables"}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-light)]">
                {lang === "zh" ? "采样拭子、运输管和充电底座等配套产品。" : lang === "ja" ? "採取スワブ、輸送チューブ、充電ドックなど。" : "Sampling swabs, transport tubes, charging dock, and more."}
              </p>
            </Link>
            <Link
              href={`/${locale}/technology/`}
              className="group block rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all"
            >
              <h3 className="text-base font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {dict.nav.technology}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-light)]">
                {lang === "zh" ? "了解微流控PCR技术和工作原理。" : lang === "ja" ? "マイクロ流体PCR技術と仕組みについて。" : "Learn about microfluidic PCR technology and how it works."}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(deviceFaqs)) }}
          />
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-8">
            {lang === "zh" ? "常见问题" : lang === "ja" ? "よくある質問" : "Frequently Asked Questions"}
          </h2>
          <div className="space-y-4">
            {deviceFaqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-[var(--color-primary)]">
                  {faq.q}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-text-light)] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Inquiry Form */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-lg px-6">
          <InquiryFormCompact
            productName={device.name[lang]}
            sourcePage="carryon-device"
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
          </div>
        </div>
      </section>

      <ProductViewTracker productName={device.name.en} productCategory="device" />
    </main>
  );
}
