import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getChipProducts } from "@/data/products";
import { breadcrumbSchema } from "@/lib/schema";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

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
    title: locale === "zh" ? "检测芯片" : locale === "ja" ? "検査チップ" : "Test Chips — Microfluidic PCR Panels",
    description:
      locale === "zh"
        ? "CarryOn 微流控检测芯片，覆盖犬类、猫类疾病检测。室温存储，一次性使用。"
        : locale === "ja"
          ? "CarryOnマイクロ流体検査チップ。犬・猫の疾患検査に対応。室温保存、使い捨て。"
          : "CarryOn microfluidic test chips for canine and feline disease detection. Room temperature storage, single-use closed system.",
    alternates: { canonical: `/${locale}/products/test-chips/` },
  };
}

export default async function TestChipsPage({
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
    { name: lang === "zh" ? "检测芯片" : lang === "ja" ? "検査チップ" : "Test Chips", url: `/${locale}/products/test-chips/` },
  ];

  const chips = getChipProducts();
  const canineChips = chips.filter((c) => c.category === "chip-canine");
  const felineChips = chips.filter((c) => c.category === "chip-feline");
  const pathogenChips = chips.filter((c) => c.category === "chip-pathogen");
  const meatChips = chips.filter((c) => c.category === "chip-meat");

  const chipGroups = [
    {
      title: lang === "zh" ? "伴侣动物检测 — 犬类" : lang === "ja" ? "コンパニオンアニマル — 犬用" : "Companion Animal — Canine",
      icon: "🐕",
      items: canineChips,
    },
    {
      title: lang === "zh" ? "伴侣动物检测 — 猫类" : lang === "ja" ? "コンパニオンアニマル — 猫用" : "Companion Animal — Feline",
      icon: "🐈",
      items: felineChips,
    },
    {
      title: lang === "zh" ? "致病微生物类检测 — 人用临床·防疫·动物疫控" : lang === "ja" ? "病原微生物検出 — 臨床・防疫・動物疫病管理" : "Pathogen Detection — Clinical · Epidemic Prevention · Animal Disease Control",
      icon: "🦠",
      items: pathogenChips,
    },
    {
      title: lang === "zh" ? "食材溯源类检测 — 食药环侦检测领域" : lang === "ja" ? "食品トレーサビリティ — 食品安全・法執行" : "Meat Species Identification — Food Safety & Regulatory Enforcement",
      icon: "🥩",
      items: meatChips,
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
            <span className="text-white">{lang === "zh" ? "检测芯片" : lang === "ja" ? "検査チップ" : "Test Chips"}</span>
          </nav>
          <h1 className="text-4xl font-bold sm:text-5xl">
            {lang === "zh" ? "微流控检测芯片" : lang === "ja" ? "マイクロ流体検査チップ" : "Microfluidic Test Chips"}
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            {lang === "zh"
              ? "全预置试剂、室温存储、一次性使用的封闭式微流控芯片。样本进，结果出。"
              : lang === "ja"
                ? "全試薬プリロード、室温保存、使い捨てクローズドシステム。サンプル投入から結果出力まで。"
                : "Pre-loaded reagents. Room temperature storage. Single-use closed system. Sample in, result out."}
          </p>
        </div>
      </section>

      {/* Key Features Banner */}
      <section className="bg-white border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: lang === "zh" ? "检测时间" : lang === "ja" ? "検出時間" : "Time to Result", value: "< 60 min" },
              { label: lang === "zh" ? "存储条件" : lang === "ja" ? "保存条件" : "Storage", value: lang === "zh" ? "室温" : lang === "ja" ? "室温" : "Room Temp" },
              { label: lang === "zh" ? "芯片类型" : lang === "ja" ? "タイプ" : "Type", value: lang === "zh" ? "一次性封闭" : lang === "ja" ? "使い捨て" : "Single-use" },
              { label: lang === "zh" ? "认证" : lang === "ja" ? "認証" : "Certified", value: "CE" },
            ].map((item) => (
              <div key={item.value}>
                <div className="text-lg font-bold text-[var(--color-primary)]">{item.value}</div>
                <div className="text-xs text-[var(--color-text-light)]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chip Groups */}
      {chipGroups.map((group) => (
        <section key={group.title} className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] flex items-center gap-3">
              <span className="text-3xl">{group.icon}</span>
              {group.title}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map((chip, i) => (
                <FadeIn key={chip.id} delay={i * 80}>
                  <Link
                    href={`/${locale}/products/test-chips/${chip.slug}/`}
                    className="group block rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all h-full"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {chip.certifications.map((c) => (
                        <span key={c} className="rounded-full bg-[var(--color-green)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--color-green)]">
                          {c}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      {chip.name[lang]}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-text-light)] line-clamp-3">
                      {chip.tagline[lang]}
                    </p>

                    {/* Detected Targets */}
                    {chip.detectedTargets && (
                      <ul className="mt-4 space-y-1.5">
                        {chip.detectedTargets.map((target) => (
                          <li key={target[lang]} className="flex items-center gap-2 text-sm text-[var(--color-text-light)]">
                            <span className="text-[var(--color-green)] text-xs">●</span>
                            {target[lang]}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-4 pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-[var(--color-text-light)]">
                        {chip.keySpecs.slice(1, 3).map((spec) => (
                          <span key={spec.value}>
                            {spec.label[lang]}: <span className="font-semibold text-[var(--color-primary)]">{spec.value}</span>
                          </span>
                        ))}
                      </div>
                      <svg className="h-4 w-4 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-16 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-bold">
            {lang === "zh" ? "需要定制检测项目？" : lang === "ja" ? "カスタム検査パネルが必要ですか？" : "Need a Custom Test Panel?"}
          </h2>
          <p className="mt-4 text-lg text-white/80">
            {lang === "zh"
              ? "我们可根据您的检测需求定制开发新的检测芯片。联系我们了解详情。"
              : lang === "ja"
                ? "検査ニーズに合わせてカスタムチップを開発可能です。詳細はお問い合わせください。"
                : "We can develop custom test chips for your specific detection needs. Contact us to learn more."}
          </p>
          <Link
            href={`/${locale}/contact/`}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[var(--color-accent)] hover:bg-white/90 transition-colors"
          >
            {dict.nav.requestDemo}
          </Link>
        </div>
      </section>
    </main>
  );
}
