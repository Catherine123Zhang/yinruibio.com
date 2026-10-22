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
  const titleMap: Record<string, string> = {
    en: "CarryOn Portable PCR Analyzer — 2 kg Handheld Veterinary Diagnostic Device",
    zh: "CarryOn 便携式PCR分析仪 — 2公斤手持兽医诊断设备",
    ja: "CarryOn ポータブルPCRアナライザー — 2kgハンドヘルド獣医診断デバイス",
  };
  const descMap: Record<string, string> = {
    en: "Handheld real-time fluorescence PCR analyzer. 2.0 kg, 5-color detection, results in 40 minutes. Battery-powered, no lab required. Detect African swine fever (ASF), PRRSV, canine, feline diseases & meat species. CE + ISO 13485 certified.",
    zh: "手持式实时荧光PCR分析仪。2.0公斤，5色检测通道，40分钟出结果。电池供电，无需实验室。检测非洲猪瘟、蓝耳病、犬猫疾病及肉类鉴定。CE + ISO 13485认证。",
    ja: "ハンドヘルド型リアルタイム蛍光PCRアナライザー。2.0kg、5色検出、40分で結果。バッテリー駆動、ラボ不要。アフリカ豚熱・PRRS・犬猫疾患・食肉種鑑定に対応。CE + ISO 13485認証。",
  };
  return {
    title: titleMap[lang] || titleMap.en,
    description: descMap[lang] || descMap.en,
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
      q: "Can the CarryOn be used on swine farms for African swine fever (ASF) and PRRS testing?",
      a: "Yes. The CarryOn runs dedicated African Swine Fever (ASFV) and PRRSV (blue ear) test chips on whole blood, serum, or tissue homogenate, with results in under 60 minutes. Because the device weighs 2 kg, runs on battery, and the chips store at room temperature, a field technician can test directly at the farm gate or pen — no cold chain, no laboratory. Vet-pharma distributors typically pair one CarryOn per field team for surveillance, quarantine decisions, and pre-movement screening.",
    },
    {
      q: "How does the CarryOn compare with a benchtop real-time PCR machine?",
      a: "A benchtop qPCR system (typically 10–20 kg, 4–7 channels, mains power, 96-well plates) belongs in a laboratory and needs a separate extraction step, trained staff, and cold-chain reagents. The CarryOn trades plate capacity for portability: one sample-to-answer chip per run, 5-color detection, 2 kg, 3.5-hour battery, and no extraction equipment. For farm-level or clinic-level testing, the CarryOn delivers PCR-grade results where a benchtop system cannot physically go. Many distributors stock both: benchtop units for the central lab, CarryOn units for field teams.",
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

  const t3 = (en: string, zh: string, ja: string) => (lang === "zh" ? zh : lang === "ja" ? ja : en);

  const comparisonRows = [
    { k: t3("Weight", "重量", "重量"), c: "2.0 kg", b: t3("10–20 kg", "10–20 公斤", "10–20 kg") },
    { k: t3("Where it runs", "使用场所", "使用場所"), c: t3("Farm, clinic, checkpoint, vehicle", "猪场 / 诊所 / 检疫点 / 车载", "農場・クリニック・検疫所・車内"), b: t3("Laboratory bench only", "仅限实验室台面", "ラボのベンチのみ") },
    { k: t3("Power", "电源", "電源"), c: t3("Battery, ~3.5 h", "电池，约 3.5 小时", "バッテリー、約3.5時間"), b: t3("Mains power", "市电", "商用電源") },
    { k: t3("Nucleic acid extraction", "核酸提取", "核酸抽出"), c: t3("Built-in, automatic", "芯片内自动完成", "チップ内で自動"), b: t3("Separate extraction kit & equipment", "需另配提取仪和试剂", "別途抽出装置・試薬が必要") },
    { k: t3("Fluorescence channels", "荧光通道", "蛍光チャンネル"), c: t3("5-color (multiplex + internal control)", "5 色（多重检测 + 内参）", "5色（マルチプレックス＋内部コントロール）"), b: t3("4–7 channels", "4–7 通道", "4–7チャンネル") },
    { k: t3("Throughput", "通量", "スループット"), c: t3("1 chip per run, < 60 min", "每次 1 张芯片，< 60 分钟", "1ランにつき1チップ、60分未満"), b: t3("Batch of up to 96 wells, 1.5–3 h incl. extraction", "单批最多 96 孔，含提取 1.5–3 小时", "最大96ウェル／バッチ、抽出込み1.5–3時間") },
    { k: t3("Reagent storage", "试剂保存", "試薬保存"), c: t3("Room temperature (15–30 °C)", "常温（15–30 °C）", "室温（15–30 °C）"), b: t3("Frozen / cold chain", "冷冻 / 冷链", "冷凍／コールドチェーン") },
    { k: t3("Operator", "操作人员", "操作者"), c: t3("Any trained staff, ~30 min training", "普通员工，约 30 分钟培训", "一般スタッフ、約30分の研修"), b: t3("Laboratory technician", "实验室技术员", "ラボ技術者") },
    { k: t3("Best for", "适合", "適する用途"), c: t3("On-site screening, outbreak response, pre-movement checks", "现场筛查、疫情应急、调运前检测", "現場スクリーニング、アウトブレイク対応、移動前検査"), b: t3("High-volume central lab testing", "中心实验室大批量检测", "中央ラボでの大量検査") },
  ];

  const panelGroups = [
    { label: t3("Swine / Livestock", "猪 · 畜牧", "豚・家畜"), ids: ["pathogen-asf", "pathogen-prrsv"], note: t3("Whole blood, serum, tissue. Farm & quarantine use.", "全血 / 血清 / 组织，猪场与检疫点使用。", "全血・血清・組織。農場・検疫向け。") },
    { label: t3("Canine", "犬", "犬"), ids: ["canine-triple", "canine-triple-resp", "canine-tick"], note: t3("Parvo, distemper, respiratory, tick-borne panels.", "细小、犬瘟、呼吸道、蜱传病 panel。", "パルボ、ジステンパー、呼吸器、ダニ媒介パネル。") },
    { label: t3("Feline", "猫", "猫"), ids: ["feline-triple-screening", "feline-triple-resp"], note: t3("FeLV / FIV / FPV screening and respiratory panels.", "FeLV / FIV / FPV 筛查与呼吸道 panel。", "FeLV／FIV／FPVスクリーニングと呼吸器パネル。") },
    { label: t3("Human pathogen", "人用病原体", "ヒト病原体"), ids: ["pathogen-flu-covid", "pathogen-respiratory", "pathogen-sti"], note: t3("Influenza / SARS-CoV-2, respiratory, STI panels.", "流感 / 新冠、呼吸道、STI panel。", "インフルエンザ／SARS-CoV-2、呼吸器、STIパネル。") },
    { label: t3("Meat species ID", "肉类鉴定", "食肉種鑑定"), ids: ["meat-quad-bpcd", "meat-quad-shpcd", "meat-quad-dhpd"], note: t3("Quad-species adulteration screening.", "四物种掺假筛查。", "4種同時の混入スクリーニング。") },
  ].map((g) => ({ ...g, chips: g.ids.map((id) => products.find((p) => p.id === id)!).filter(Boolean) }));

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

              {/* Business Terms */}
              <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5">
                <h3 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wide mb-3">
                  {lang === "zh" ? "商务条款" : lang === "ja" ? "取引条件" : "Business Terms"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-light)]">MOQ</span>
                    <span className="font-medium text-[var(--color-primary)]">1 unit (device), 50 pcs (chips)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-light)]">{lang === "zh" ? "样品" : lang === "ja" ? "サンプル" : "Sample"}</span>
                    <span className="font-medium text-[var(--color-primary)]">{lang === "zh" ? "可提供演示机" : lang === "ja" ? "デモ機提供可" : "Demo unit available"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-light)]">{lang === "zh" ? "交期" : lang === "ja" ? "納期" : "Lead Time"}</span>
                    <span className="font-medium text-[var(--color-primary)]">7-14d (stock) / 30d (bulk)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-light)]">{lang === "zh" ? "付款" : lang === "ja" ? "支払い" : "Payment"}</span>
                    <span className="font-medium text-[var(--color-primary)]">T/T, L/C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-light)]">{lang === "zh" ? "发货" : lang === "ja" ? "出荷" : "Shipping"}</span>
                    <span className="font-medium text-[var(--color-primary)]">FOB Ningbo, DDP available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-light)]">{lang === "zh" ? "定制" : lang === "ja" ? "カスタム" : "Customization"}</span>
                    <span className="font-medium text-[var(--color-primary)]">{lang === "zh" ? "贴牌/定制芯片" : lang === "ja" ? "OEM/カスタムパネル" : "Private label, custom panels"}</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
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

      {/* CarryOn vs Benchtop qPCR */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">
            {t3("CarryOn vs. Benchtop Real-Time PCR", "CarryOn 与台式荧光定量 PCR 对比", "CarryOn とベンチトップ型リアルタイムPCRの比較")}
          </h2>
          <p className="mt-4 text-center text-[var(--color-text-light)] max-w-3xl mx-auto">
            {t3(
              "Both deliver real-time fluorescence PCR accuracy. The difference is where the test can happen: a benchtop system stays in the laboratory, the CarryOn goes to the farm, the clinic, or the checkpoint.",
              "两者都是实时荧光定量 PCR 级别的准确度，区别在于检测能在哪里发生：台式机留在实验室，CarryOn 可以带到猪场、诊所和检疫点。",
              "どちらもリアルタイム蛍光PCRの精度を提供します。違いは検査を行える場所です。ベンチトップ型はラボに据え置き、CarryOn は農場・クリニック・検疫所へ持ち運べます。"
            )}
          </p>
          <div className="mt-12 overflow-x-auto rounded-xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead className="bg-[var(--color-primary)] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold w-1/4"></th>
                  <th className="px-4 py-3 text-left font-semibold">CarryOn</th>
                  <th className="px-4 py-3 text-left font-semibold">{t3("Benchtop qPCR", "台式 qPCR", "ベンチトップ qPCR")}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.k} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-bg)]"}>
                    <td className="px-4 py-3 font-medium text-[var(--color-primary)] align-top">{row.k}</td>
                    <td className="px-4 py-3 text-[var(--color-text)] align-top font-medium">{row.c}</td>
                    <td className="px-4 py-3 text-[var(--color-text-light)] align-top">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-[var(--color-text-light)]">
            {t3(
              "Many distributors stock both: benchtop units for the central laboratory, CarryOn units for field veterinary teams.",
              "很多经销商两种都卖：台式机放中心实验室，CarryOn 配给下场的兽医团队。",
              "多くの販売代理店は両方を扱います。ベンチトップ型は中央ラボに、CarryOn は現場の獣医チームに。"
            )}
          </p>
        </div>
      </section>

      {/* Test Panels by Animal */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">
            {t3("Test Panels by Animal & Application", "按动物与应用分类的检测芯片", "動物・用途別の検査パネル")}
          </h2>
          <p className="mt-4 text-center text-[var(--color-text-light)] max-w-2xl mx-auto">
            {t3(
              "One CarryOn device runs every chip below. Custom panels (e.g. CSF, PCV2, PEDV for swine) are available for distribution partners.",
              "一台 CarryOn 可运行以下全部芯片。经销合作伙伴可定制 panel（如猪瘟 CSF、圆环 PCV2、腹泻 PEDV）。",
              "1台の CarryOn で以下すべてのチップを実行できます。販売パートナー向けにカスタムパネル（CSF、PCV2、PEDV など）も対応可能です。"
            )}
          </p>
          <div className="mt-12 space-y-6">
            {panelGroups.map((g) => (
              <div key={g.label} className="rounded-xl bg-white border border-[var(--color-border)] p-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold text-[var(--color-primary)]">{g.label}</h3>
                  <p className="text-sm text-[var(--color-text-light)]">{g.note}</p>
                </div>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {g.chips.map((chip) => (
                    <li key={chip.id}>
                      <Link
                        href={`/${locale}/products/test-chips/${chip.slug}/`}
                        className="group flex items-start justify-between gap-3 rounded-lg border border-[var(--color-border)] px-4 py-3 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/5 transition-colors"
                      >
                        <span>
                          <span className="block text-sm font-medium text-[var(--color-primary)] group-hover:text-[var(--color-accent)]">{chip.name[lang]}</span>
                          <span className="block mt-1 text-xs text-[var(--color-text-light)]">{chip.keySpecs.slice(0, 2).map((x) => x.value).join(" · ")}</span>
                        </span>
                        <svg className="mt-1 h-4 w-4 shrink-0 text-[var(--color-text-light)] group-hover:text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href={`/${locale}/contact/?product=carryon-swine`}
              className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-base font-semibold text-white hover:bg-[var(--color-accent-light)] transition-colors"
            >
              {t3("Request a Swine Panel Quote", "获取猪病检测方案报价", "豚用パネルの見積もりを依頼")}
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
              ? "选择适合您检测需求的微流控芯片，覆盖猪病（非洲猪瘟、蓝耳）、犬猫、病原体和食材溯源检测。"
              : lang === "ja"
                ? "犬、猫、病原体、食品トレーサビリティ検査をカバーする検査チップを選択。"
                : "Choose the right microfluidic chip for your testing needs. Covering swine (ASF, PRRSV), canine, feline, human pathogen, and meat species identification."}
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
                        ? t3("Canine", "犬类", "犬用")
                        : chip.category === "chip-feline"
                          ? t3("Feline", "猫类", "猫用")
                          : chip.category === "chip-meat"
                            ? t3("Meat ID", "肉类鉴定", "食肉鑑定")
                            : chip.id.includes("asf") || chip.id.includes("prrsv")
                              ? t3("Swine", "猪", "豚")
                              : t3("Pathogen", "病原体", "病原体")}
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
