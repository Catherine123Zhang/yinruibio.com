import { activeLocales, isValidLocale  } from "@/lib/i18n";
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
  return activeLocales.map((locale) => ({ locale }));
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
    vi: "Máy PCR cầm tay CarryOn — Thiết bị chẩn đoán thú y cầm tay 2 kg",
    pt: "Termociclador PCR portátil CarryOn — dispositivo de diagnóstico veterinário portátil de 2 kg",
  };
  const descMap: Record<string, string> = {
    en: "Handheld real-time fluorescence PCR analyzer. 2.0 kg, 5-color detection, results in 40 minutes. Battery-powered, no lab required. Detect African swine fever (ASF), PRRSV, canine, feline diseases & meat species. CE + ISO 13485 certified.",
    zh: "手持式实时荧光PCR分析仪。2.0公斤，5色检测通道，40分钟出结果。电池供电，无需实验室。检测非洲猪瘟、蓝耳病、犬猫疾病及肉类鉴定。CE + ISO 13485认证。",
    ja: "ハンドヘルド型リアルタイム蛍光PCRアナライザー。2.0kg、5色検出、40分で結果。バッテリー駆動、ラボ不要。アフリカ豚熱・PRRS・犬猫疾患・食肉種鑑定に対応。CE + ISO 13485認証。",
    vi: "Máy PCR huỳnh quang thời gian thực (real-time PCR) cầm tay. Nặng 2,0 kg, phát hiện 5 màu, cho kết quả trong 40 phút. Dùng pin, không cần phòng xét nghiệm. Phát hiện dịch tả lợn châu Phi (ASF), PRRSV, bệnh ở chó, mèo và định danh loài thịt. Đạt chứng nhận CE + ISO 13485.",
    pt: "Termociclador PCR em tempo real por fluorescência portátil. 2,0 kg, detecção em 5 cores, resultados em 40 minutos. Alimentado por bateria, sem necessidade de laboratório. Detecta peste suína africana (PSA), PRRSV, doenças caninas e felinas e espécies de carne. Certificações CE + ISO 13485.",
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
      a: "Yes. The CarryOn runs a 13-chip swine disease panel — African swine fever (ASFV), PRRSV, classical swine fever (CSFV), pseudorabies (PRV), PCV2, Glaesserella parasuis, Actinobacillus pleuropneumoniae, TGEV, rotavirus, PEDV, porcine parvovirus, foot-and-mouth disease and Japanese encephalitis — on whole blood, serum, swabs, feces or tissue, with results in under 60 minutes. Because the device weighs 2 kg, runs on battery, and the chips store at room temperature, a field technician can test directly at the farm gate or pen — no cold chain, no laboratory. Vet-pharma distributors typically pair one CarryOn per field team for surveillance, quarantine decisions, and pre-movement screening.",
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
      title: lang === "zh" ? "加入样本" : lang === "ja" ? "サンプル投入" : lang === "vi" ? "Nạp mẫu" : lang === "pt" ? "Carregar amostra" : "Load Sample",
      desc: lang === "zh" ? "将拭子/血液样本加入微流控芯片" : lang === "ja" ? "スワブ/血液サンプルをチップに投入" : lang === "vi" ? "Cho mẫu tăm bông hoặc mẫu máu vào chip vi lưu" : lang === "pt" ? "Adicione amostra de swab ou de sangue ao chip microfluídico" : "Add swab or blood sample to the microfluidic chip",
    },
    {
      num: "02",
      title: lang === "zh" ? "插入芯片" : lang === "ja" ? "チップ挿入" : lang === "vi" ? "Lắp chip" : lang === "pt" ? "Inserir chip" : "Insert Chip",
      desc: lang === "zh" ? "将芯片插入CarryOn设备" : lang === "ja" ? "チップをデバイスに挿入" : lang === "vi" ? "Đặt chip vào thiết bị CarryOn" : lang === "pt" ? "Coloque o chip no dispositivo CarryOn" : "Place the chip into the CarryOn device",
    },
    {
      num: "03",
      title: lang === "zh" ? "自动检测" : lang === "ja" ? "自動検出" : lang === "vi" ? "Tự động xử lý" : lang === "pt" ? "Processamento automático" : "Auto Process",
      desc: lang === "zh" ? "自动完成核酸提取、纯化和PCR扩增" : lang === "ja" ? "核酸抽出・精製・PCR増幅を自動実行" : lang === "vi" ? "Tự động tách chiết, tinh sạch và khuếch đại PCR" : lang === "pt" ? "Extração, purificação e amplificação por PCR automatizadas" : "Automated extraction, purification, and PCR amplification",
    },
    {
      num: "04",
      title: lang === "zh" ? "读取结果" : lang === "ja" ? "結果表示" : lang === "vi" ? "Đọc kết quả" : lang === "pt" ? "Ler resultado" : "Read Result",
      desc: lang === "zh" ? "触屏显示检测报告，支持WiFi传输" : lang === "ja" ? "タッチスクリーンで結果表示、WiFi転送対応" : lang === "vi" ? "Kết quả hiển thị trên màn hình cảm ứng, hỗ trợ truyền qua WiFi" : lang === "pt" ? "Resultados exibidos na tela sensível ao toque, com suporte a transferência por WiFi" : "Results displayed on touchscreen, WiFi transfer supported",
    },
  ];

  const L = (r: { en: string } & Partial<Record<Locale, string>>) => r[lang] ?? r.en;

  const comparisonRows = [
    { k: L({ en: "Weight", zh: "重量", ja: "重量", pt: "Peso", vi: "Trọng lượng" }), c: "2.0 kg", b: L({ en: "10–20 kg", zh: "10–20 公斤", ja: "10–20 kg", pt: "10–20 kg", vi: "10–20 kg" }) },
    { k: L({ en: "Where it runs", zh: "使用场所", ja: "使用場所", pt: "Onde é utilizado", vi: "Nơi vận hành" }), c: L({ en: "Farm, clinic, checkpoint, vehicle", zh: "猪场 / 诊所 / 检疫点 / 车载", ja: "農場・クリニック・検疫所・車内", pt: "Fazenda, clínica veterinária, posto de controle, veículo", vi: "Trang trại, phòng khám, chốt kiểm dịch, xe" }), b: L({ en: "Laboratory bench only", zh: "仅限实验室台面", ja: "ラボのベンチのみ", pt: "Somente em bancada de laboratório", vi: "Chỉ dùng trên bàn phòng thí nghiệm" }) },
    { k: L({ en: "Power", zh: "电源", ja: "電源", pt: "Alimentação", vi: "Công suất" }), c: L({ en: "Battery, ~3.5 h", zh: "电池，约 3.5 小时", ja: "バッテリー、約3.5時間", pt: "Bateria, ~3,5 h", vi: "Pin, ~3,5 h" }), b: L({ en: "Mains power", zh: "市电", ja: "商用電源", pt: "Alimentação pela rede elétrica", vi: "Nguồn điện lưới" }) },
    { k: L({ en: "Nucleic acid extraction", zh: "核酸提取", ja: "核酸抽出", pt: "Extração de ácido nucleico", vi: "Tách chiết axit nucleic" }), c: L({ en: "Built-in, automatic", zh: "芯片内自动完成", ja: "チップ内で自動", pt: "Integrada, automática", vi: "Tích hợp, tự động" }), b: L({ en: "Separate extraction kit & equipment", zh: "需另配提取仪和试剂", ja: "別途抽出装置・試薬が必要", pt: "Kit e equipamento de extração separados", vi: "Bộ kit và thiết bị tách chiết riêng" }) },
    { k: L({ en: "Fluorescence channels", zh: "荧光通道", ja: "蛍光チャンネル", pt: "Canais de fluorescência", vi: "Kênh huỳnh quang" }), c: L({ en: "5-color (multiplex + internal control)", zh: "5 色（多重检测 + 内参）", ja: "5色（マルチプレックス＋内部コントロール）", pt: "5 cores (multiplex + controle interno)", vi: "5 màu (multiplex + đối chứng nội)" }), b: L({ en: "4–7 channels", zh: "4–7 通道", ja: "4–7チャンネル", pt: "4–7 canais", vi: "4–7 kênh" }) },
    { k: L({ en: "Throughput", zh: "通量", ja: "スループット", pt: "Capacidade de processamento", vi: "Thông lượng" }), c: L({ en: "1 chip per run, < 60 min", zh: "每次 1 张芯片，< 60 分钟", ja: "1ランにつき1チップ、60分未満", pt: "1 chip de teste por execução, < 60 min", vi: "1 chip mỗi lần chạy, < 60 phút" }), b: L({ en: "Batch of up to 96 wells, 1.5–3 h incl. extraction", zh: "单批最多 96 孔，含提取 1.5–3 小时", ja: "最大96ウェル／バッチ、抽出込み1.5–3時間", pt: "Lote de até 96 poços, 1,5–3 h incl. extração", vi: "Lô tối đa 96 giếng, 1.5–3 h bao gồm tách chiết" }) },
    { k: L({ en: "Reagent storage", zh: "试剂保存", ja: "試薬保存", pt: "Armazenamento dos reagentes", vi: "Bảo quản thuốc thử" }), c: L({ en: "Room temperature (15–30 °C)", zh: "常温（15–30 °C）", ja: "室温（15–30 °C）", pt: "Temperatura ambiente (15–30 °C)", vi: "Nhiệt độ phòng (15–30 °C)" }), b: L({ en: "Frozen / cold chain", zh: "冷冻 / 冷链", ja: "冷凍／コールドチェーン", pt: "Congelado / cadeia de frio", vi: "Đông lạnh / chuỗi lạnh" }) },
    { k: L({ en: "Operator", zh: "操作人员", ja: "操作者", pt: "Operador", vi: "Người vận hành" }), c: L({ en: "Any trained staff, ~30 min training", zh: "普通员工，约 30 分钟培训", ja: "一般スタッフ、約30分の研修", pt: "Qualquer profissional treinado, ~30 min de treinamento", vi: "Bất kỳ nhân viên đã qua đào tạo, đào tạo ~30 phút" }), b: L({ en: "Laboratory technician", zh: "实验室技术员", ja: "ラボ技術者", pt: "Técnico de laboratório", vi: "Kỹ thuật viên phòng xét nghiệm" }) },
    { k: L({ en: "Best for", zh: "适合", ja: "適する用途", pt: "Ideal para", vi: "Phù hợp nhất cho" }), c: L({ en: "On-site screening, outbreak response, pre-movement checks", zh: "现场筛查、疫情应急、调运前检测", ja: "現場スクリーニング、アウトブレイク対応、移動前検査", pt: "Triagem no local, resposta a surtos, verificações pré-movimentação", vi: "Sàng lọc tại chỗ, ứng phó ổ dịch, kiểm tra trước khi di chuyển" }), b: L({ en: "High-volume central lab testing", zh: "中心实验室大批量检测", ja: "中央ラボでの大量検査", pt: "Testes de alto volume em laboratório central", vi: "Xét nghiệm khối lượng lớn tại phòng xét nghiệm trung tâm" }) },
  ];

  const panelGroups = [
    { label: L({ en: "Swine / Livestock", zh: "猪 · 畜牧", ja: "豚・家畜", pt: "Suínos / Pecuária", vi: "Lợn / Vật nuôi" }), ids: ["pathogen-asf", "pathogen-prrsv", "swine-csfv", "swine-prv", "swine-pcv2", "swine-gps", "swine-app", "swine-tgev", "swine-porv", "swine-pedv", "swine-ppv", "swine-fmdv", "swine-jev"], note: L({ en: "13 chips: ASF, PRRS, CSF, PRV, PCV2, G. parasuis, APP, TGE, rotavirus, PED, PPV, FMD, JEV.", zh: "13 张芯片：非洲猪瘟、蓝耳、猪瘟、伪狂犬、圆环、副猪嗜血杆菌、胸膜肺炎、传染性胃肠炎、轮状、流行性腹泻、细小、口蹄疫、乙脑。", ja: "13種：ASF、PRRS、CSF、PRV、PCV2、G. parasuis、APP、TGE、ロタ、PED、PPV、FMD、JEV。", pt: "13 chips de teste: PSA, PRRS, CSF, PRV, PCV2, G. parasuis, APP, TGE, rotavírus, PED, PPV, FMD, JEV.", vi: "13 chip xét nghiệm: ASF, PRRS, CSF, PRV, PCV2, G. parasuis, APP, TGE, rotavirus, PED, PPV, FMD, JEV." }) },
    { label: L({ en: "Canine", zh: "犬", ja: "犬", pt: "Caninos", vi: "Chó" }), ids: ["canine-triple", "canine-triple-resp", "canine-tick"], note: L({ en: "Parvo, distemper, respiratory, tick-borne panels.", zh: "细小、犬瘟、呼吸道、蜱传病 panel。", ja: "パルボ、ジステンパー、呼吸器、ダニ媒介パネル。", pt: "Painéis de parvovírus, cinomose, respiratórios e transmitidos por carrapatos.", vi: "Bộ xét nghiệm parvo, distemper, hô hấp, lây truyền qua ve." }) },
    { label: L({ en: "Feline", zh: "猫", ja: "猫", pt: "Felinos", vi: "Mèo" }), ids: ["feline-triple-screening", "feline-triple-resp"], note: L({ en: "FeLV / FIV / FPV screening and respiratory panels.", zh: "FeLV / FIV / FPV 筛查与呼吸道 panel。", ja: "FeLV／FIV／FPVスクリーニングと呼吸器パネル。", pt: "Triagem de FeLV / FIV / FPV e painéis respiratórios.", vi: "Sàng lọc FeLV / FIV / FPV và bộ xét nghiệm hô hấp." }) },
    { label: L({ en: "Human pathogen", zh: "人用病原体", ja: "ヒト病原体", pt: "Patógeno humano", vi: "Tác nhân gây bệnh ở người" }), ids: ["pathogen-flu-covid", "pathogen-respiratory", "pathogen-sti"], note: L({ en: "Influenza / SARS-CoV-2, respiratory, STI panels.", zh: "流感 / 新冠、呼吸道、STI panel。", ja: "インフルエンザ／SARS-CoV-2、呼吸器、STIパネル。", pt: "Painéis de influenza / SARS-CoV-2, respiratórios e IST.", vi: "Bộ xét nghiệm cúm / SARS-CoV-2, hô hấp, STI." }) },
    { label: L({ en: "Meat species ID", zh: "肉类鉴定", ja: "食肉種鑑定", pt: "Identificação de espécies de carne", vi: "Định danh loài thịt" }), ids: ["meat-quad-bpcd", "meat-quad-shpcd", "meat-quad-dhpd"], note: L({ en: "Quad-species adulteration screening.", zh: "四物种掺假筛查。", ja: "4種同時の混入スクリーニング。", pt: "Triagem de adulteração de quatro espécies.", vi: "Sàng lọc pha trộn bốn loài." }) },
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
                <span className="text-[var(--color-primary)]">{lang === "zh" ? "检测设备" : lang === "ja" ? "検出デバイス" : lang === "vi" ? "Thiết bị phát hiện" : lang === "pt" ? "Dispositivo de detecção" : "Detection Device"}</span>
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
                  {lang === "zh" ? "商务条款" : lang === "ja" ? "取引条件" : lang === "vi" ? "Điều khoản kinh doanh" : lang === "pt" ? "Condições comerciais" : "Business Terms"}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-light)]">MOQ</span>
                    <span className="font-medium text-[var(--color-primary)]">1 unit (device), 50 pcs (chips)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-light)]">{lang === "zh" ? "样品" : lang === "ja" ? "サンプル" : lang === "vi" ? "Mẫu" : lang === "pt" ? "Amostra" : "Sample"}</span>
                    <span className="font-medium text-[var(--color-primary)]">{lang === "zh" ? "可提供演示机" : lang === "ja" ? "デモ機提供可" : lang === "vi" ? "Có sẵn thiết bị demo" : lang === "pt" ? "Unidade de demonstração disponível" : "Demo unit available"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-light)]">{lang === "zh" ? "交期" : lang === "ja" ? "納期" : lang === "vi" ? "Thời gian giao hàng" : lang === "pt" ? "Prazo de entrega" : "Lead Time"}</span>
                    <span className="font-medium text-[var(--color-primary)]">7-14d (stock) / 30d (bulk)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-light)]">{lang === "zh" ? "付款" : lang === "ja" ? "支払い" : lang === "vi" ? "Thanh toán" : lang === "pt" ? "Pagamento" : "Payment"}</span>
                    <span className="font-medium text-[var(--color-primary)]">T/T, L/C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-light)]">{lang === "zh" ? "发货" : lang === "ja" ? "出荷" : lang === "vi" ? "Vận chuyển" : lang === "pt" ? "Envio" : "Shipping"}</span>
                    <span className="font-medium text-[var(--color-primary)]">FOB Ningbo, DDP available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--color-text-light)]">{lang === "zh" ? "定制" : lang === "ja" ? "カスタム" : lang === "vi" ? "Tùy chỉnh" : lang === "pt" ? "Personalização" : "Customization"}</span>
                    <span className="font-medium text-[var(--color-primary)]">{lang === "zh" ? "贴牌/定制芯片" : lang === "ja" ? "OEM/カスタムパネル" : lang === "vi" ? "Nhãn riêng, bộ xét nghiệm tùy chỉnh" : lang === "pt" ? "Marca própria, painéis personalizados" : "Private label, custom panels"}</span>
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
                  {lang === "zh" ? "获取报价" : lang === "ja" ? "見積もりを取得" : lang === "vi" ? "Nhận báo giá" : lang === "pt" ? "Solicitar orçamento" : "Get a Quote"}
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
            {lang === "zh" ? "操作流程" : lang === "ja" ? "操作手順" : lang === "vi" ? "Cách hoạt động" : lang === "pt" ? "Como funciona" : "How It Works"}
          </h2>
          <p className="mt-4 text-center text-[var(--color-text-light)]">
            {lang === "zh" ? "4步完成检测，无需专业培训" : lang === "ja" ? "4ステップで検査完了、専門トレーニング不要"
                : lang === "vi" ? "4 bước đơn giản. Không cần đào tạo."
                : lang === "pt" ? "4 etapas simples. Não é necessário treinamento."
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
              {lang === "zh" ? "获取详细规格书" : lang === "ja" ? "詳細仕様書を取得" : lang === "vi" ? "Tải bảng thông số kỹ thuật đầy đủ" : lang === "pt" ? "Baixar ficha técnica completa" : "Download Full Spec Sheet"}
            </Link>
          </div>
        </div>
      </section>

      {/* CarryOn vs Benchtop qPCR */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">
            {L({ en: "CarryOn vs. Benchtop Real-Time PCR", zh: "CarryOn 与台式荧光定量 PCR 对比", ja: "CarryOn とベンチトップ型リアルタイムPCRの比較", pt: "CarryOn vs. PCR em tempo real de bancada", vi: "CarryOn so với PCR huỳnh quang thời gian thực để bàn" })}
          </h2>
          <p className="mt-4 text-center text-[var(--color-text-light)] max-w-3xl mx-auto">
            {L({ en: "Both deliver real-time fluorescence PCR accuracy. The difference is where the test can happen: a benchtop system stays in the laboratory, the CarryOn goes to the farm, the clinic, or the checkpoint.", zh: "两者都是实时荧光定量 PCR 级别的准确度，区别在于检测能在哪里发生：台式机留在实验室，CarryOn 可以带到猪场、诊所和检疫点。", ja: "どちらもリアルタイム蛍光PCRの精度を提供します。違いは検査を行える場所です。ベンチトップ型はラボに据え置き、CarryOn は農場・クリニック・検疫所へ持ち運べます。", pt: "Ambos oferecem a precisão da PCR em tempo real por fluorescência. A diferença está em onde o teste pode ser realizado: um sistema de bancada permanece no laboratório, enquanto o CarryOn vai para a fazenda, a clínica veterinária ou o posto de fiscalização.", vi: "Cả hai đều mang lại độ chính xác của PCR huỳnh quang thời gian thực. Khác biệt nằm ở nơi có thể thực hiện xét nghiệm: hệ thống để bàn chỉ đặt tại phòng xét nghiệm, còn CarryOn có thể đến trang trại, phòng khám thú y hoặc trạm kiểm dịch." })}
          </p>
          <div className="mt-12 overflow-x-auto rounded-xl border border-[var(--color-border)]">
            <table className="w-full text-sm">
              <thead className="bg-[var(--color-primary)] text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold w-1/4"></th>
                  <th className="px-4 py-3 text-left font-semibold">CarryOn</th>
                  <th className="px-4 py-3 text-left font-semibold">{L({ en: "Benchtop qPCR", zh: "台式 qPCR", ja: "ベンチトップ qPCR", pt: "qPCR de bancada", vi: "qPCR để bàn" })}</th>
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
            {L({ en: "Many distributors stock both: benchtop units for the central laboratory, CarryOn units for field veterinary teams.", zh: "很多经销商两种都卖：台式机放中心实验室，CarryOn 配给下场的兽医团队。", ja: "多くの販売代理店は両方を扱います。ベンチトップ型は中央ラボに、CarryOn は現場の獣医チームに。", pt: "Muitos distribuidores mantêm os dois em estoque: unidades de bancada para o laboratório central e unidades CarryOn para equipes veterinárias de campo.", vi: "Nhiều nhà phân phối dự trữ cả hai dòng: thiết bị để bàn cho phòng xét nghiệm trung tâm và thiết bị CarryOn cho đội thú y thực địa." })}
          </p>
        </div>
      </section>

      {/* Test Panels by Animal */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">
            {L({ en: "Test Panels by Animal & Application", zh: "按动物与应用分类的检测芯片", ja: "動物・用途別の検査パネル", pt: "Painéis de teste por animal e aplicação", vi: "Bộ xét nghiệm theo loài vật & ứng dụng" })}
          </h2>
          <p className="mt-4 text-center text-[var(--color-text-light)] max-w-2xl mx-auto">
            {L({ en: "One CarryOn device runs every chip below — including a 13-target swine disease panel developed for farms, veterinary stations and quarantine checkpoints. Custom multiplex panels are available for distribution partners.", zh: "一台 CarryOn 可运行以下全部芯片——包括为猪场、兽医站和检疫点开发的 13 项猪病检测 panel。经销合作伙伴可定制多重检测 panel。", ja: "1台の CarryOn で以下すべてのチップを実行できます。農場・獣医ステーション・検疫所向けに開発した13項目の豚疾病パネルも含まれます。販売パートナー向けのカスタムマルチプレックスパネルも対応可能です。", pt: "Um único dispositivo CarryOn executa todos os chips abaixo — incluindo um painel de doenças suínas com 13 alvos, desenvolvido para fazendas, postos veterinários e postos de controle de quarentena. Painéis multiplex personalizados estão disponíveis para parceiros de distribuição.", vi: "Một thiết bị CarryOn có thể chạy mọi chip dưới đây — bao gồm bộ xét nghiệm bệnh ở lợn gồm 13 mục tiêu, được phát triển cho trại lợn, trạm thú y và chốt kiểm dịch. Các bộ xét nghiệm multiplex tùy chỉnh sẵn có cho đối tác phân phối." })}
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
              {L({ en: "Request a Swine Panel Quote", zh: "获取猪病检测方案报价", ja: "豚用パネルの見積もりを依頼", pt: "Solicite uma cotação do painel suíno", vi: "Yêu cầu báo giá bộ xét nghiệm bệnh lợn" })}
            </Link>
          </div>
        </div>
      </section>

      {/* Compatible Test Chips */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">
            {lang === "zh" ? "配套检测芯片" : lang === "ja" ? "対応検査チップ" : lang === "vi" ? "Chip xét nghiệm tương thích" : lang === "pt" ? "Chips de teste compatíveis" : "Compatible Test Chips"}
          </h2>
          <p className="mt-4 text-center text-[var(--color-text-light)] max-w-2xl mx-auto">
            {lang === "zh" ? "选择适合您检测需求的微流控芯片，覆盖猪病（非洲猪瘟、蓝耳）、犬猫、病原体和食材溯源检测。" : lang === "ja" ? "犬、猫、病原体、食品トレーサビリティ検査をカバーする検査チップを選択。"
                : lang === "vi" ? "Chọn chip vi lưu phù hợp với nhu cầu xét nghiệm của bạn. Bao gồm lợn (ASF, PRRSV), chó, mèo, tác nhân gây bệnh ở người và nhận diện loài trong thịt."
                : lang === "pt" ? "Escolha o chip microfluídico ideal para suas necessidades de teste. Cobre suínos (ASF, PRRSV), cães, gatos, patógenos humanos e identificação de espécies de carne."
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
                        ? L({ en: "Canine", zh: "犬类", ja: "犬用", pt: "Caninos", vi: "Chó" })
                        : chip.category === "chip-feline"
                          ? L({ en: "Feline", zh: "猫类", ja: "猫用", pt: "Felinos", vi: "Mèo" })
                          : chip.category === "chip-meat"
                            ? L({ en: "Meat ID", zh: "肉类鉴定", ja: "食肉鑑定", pt: "Identificação de carne", vi: "Định danh thịt" })
                            : chip.id.includes("asf") || chip.id.includes("prrsv")
                              ? L({ en: "Swine", zh: "猪", ja: "豚", pt: "Suíno", vi: "Lợn" })
                              : L({ en: "Pathogen", zh: "病原体", ja: "病原体", pt: "Patógeno", vi: "Tác nhân gây bệnh" })}
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
              {lang === "zh" ? "查看全部检测芯片" : lang === "ja" ? "すべての検査チップを見る" : lang === "vi" ? "Xem tất cả chip xét nghiệm" : lang === "pt" ? "Ver todos os chips de teste" : "View All Test Chips"}
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
            {lang === "zh" ? "相关产品" : lang === "ja" ? "関連製品" : lang === "vi" ? "Sản phẩm liên quan" : lang === "pt" ? "Produtos relacionados" : "Related Products"}
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <Link
              href={`/${locale}/products/test-chips/`}
              className="group block rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all"
            >
              <h3 className="text-base font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {lang === "zh" ? "检测芯片" : lang === "ja" ? "検査チップ" : lang === "vi" ? "Chip xét nghiệm" : lang === "pt" ? "Chips de Teste" : "Test Chips"}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-light)]">
                {lang === "zh" ? "微流控检测芯片，覆盖犬猫、病原体和食材溯源检测。" : lang === "ja" ? "犬猫、病原体、食品検査用マイクロ流体チップ。" : lang === "vi" ? "Chip xét nghiệm vi lưu dùng cho xét nghiệm chó, mèo, tác nhân gây bệnh và định danh loài thịt." : lang === "pt" ? "Chips de teste microfluídicos para testes de identificação de cães, gatos, patógenos e carne." : "Microfluidic test chips for canine, feline, pathogen, and meat ID testing."}
              </p>
            </Link>
            <Link
              href={`/${locale}/products/accessories/`}
              className="group block rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all"
            >
              <h3 className="text-base font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                {lang === "zh" ? "配件与耗材" : lang === "ja" ? "アクセサリー" : lang === "vi" ? "Phụ kiện & vật tư tiêu hao" : lang === "pt" ? "Acessórios e Consumíveis" : "Accessories & Consumables"}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-light)]">
                {lang === "zh" ? "采样拭子、运输管和充电底座等配套产品。" : lang === "ja" ? "採取スワブ、輸送チューブ、充電ドックなど。" : lang === "vi" ? "Tăm bông lấy mẫu, ống vận chuyển, đế sạc và nhiều hơn nữa." : lang === "pt" ? "Swabs de coleta, tubos de transporte, base de carregamento e muito mais." : "Sampling swabs, transport tubes, charging dock, and more."}
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
                {lang === "zh" ? "了解微流控PCR技术和工作原理。" : lang === "ja" ? "マイクロ流体PCR技術と仕組みについて。" : lang === "vi" ? "Tìm hiểu về công nghệ PCR vi lưu và cách hoạt động." : lang === "pt" ? "Saiba mais sobre a tecnologia de PCR microfluídico e como ela funciona." : "Learn about microfluidic PCR technology and how it works."}
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
            {lang === "zh" ? "常见问题" : lang === "ja" ? "よくある質問" : lang === "vi" ? "Câu hỏi thường gặp" : lang === "pt" ? "Perguntas frequentes" : "Frequently Asked Questions"}
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
