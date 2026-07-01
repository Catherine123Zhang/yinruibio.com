import type { Locale } from "@/lib/i18n";

export type ProductCategory = "device" | "chip-canine" | "chip-feline" | "chip-pathogen" | "chip-meat" | "accessory";

export interface Product {
  id: string;
  slug: string;
  category: ProductCategory;
  categorySlug: string;
  name: Record<Locale, string>;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  images: string[];
  keySpecs: { label: Record<Locale, string>; value: string }[];
  fullSpecs: { label: Record<Locale, string>; value: string }[];
  detectedTargets?: Record<Locale, string>[];
  certifications: string[];
  relatedProducts: string[];
}

export interface ProductCategoryInfo {
  slug: string;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  image: string;
  icon: string;
}

export const productCategories: ProductCategoryInfo[] = [
  {
    slug: "carryon-device",
    name: {
      en: "CarryOn Detection Device",
      zh: "CarryOn 检测设备",
      ja: "CarryOn 検出デバイス",
    },
    description: {
      en: "Handheld, battery-powered real-time fluorescence PCR analyzer with microfluidic chip technology.",
      zh: "手持式、电池驱动的实时荧光PCR分析仪，采用微流控芯片技术。",
      ja: "マイクロ流体チップ技術を搭載したハンドヘルド型バッテリー駆動リアルタイム蛍光PCRアナライザー。",
    },
    image: "/images/products/carryon-device.png",
    icon: "device",
  },
  {
    slug: "test-chips",
    name: {
      en: "Test Chips",
      zh: "检测芯片",
      ja: "検査チップ",
    },
    description: {
      en: "Single-use microfluidic chips for fully automated sample-to-result testing. Room temperature storage, no cold chain required.",
      zh: "一次性微流控芯片，全自动「样本进-结果出」检测。室温存储，无需冷链。",
      ja: "全自動サンプルから結果までの検査用使い捨てマイクロ流体チップ。室温保存、コールドチェーン不要。",
    },
    image: "/images/products/chip-in-hand.png",
    icon: "chip",
  },
  {
    slug: "accessories",
    name: {
      en: "Accessories & Consumables",
      zh: "配件与耗材",
      ja: "アクセサリー・消耗品",
    },
    description: {
      en: "Sampling swabs, transport tubes, and other consumables for the CarryOn platform.",
      zh: "采样拭子、运输管及 CarryOn 平台其他耗材。",
      ja: "採取スワブ、輸送チューブ、その他CarryOnプラットフォーム用消耗品。",
    },
    image: "/images/products/microfluidic-chips.jpg",
    icon: "accessory",
  },
];

export const products: Product[] = [
  // === DEVICE ===
  {
    id: "carryon-device",
    slug: "carryon-device",
    category: "device",
    categorySlug: "carryon-device",
    name: {
      en: "CarryOn Portable PCR Analyzer",
      zh: "CarryOn 便携式PCR分析仪",
      ja: "CarryOn ポータブルPCRアナライザー",
    },
    tagline: {
      en: "Palm-sized lab. PCR-accurate results in 40 minutes.",
      zh: "掌心实验室。40分钟获得PCR级精度结果。",
      ja: "手のひらサイズのラボ。40分でPCR精度の結果。",
    },
    description: {
      en: "The CarryOn is a fully automated, closed-system nucleic acid amplification analyzer. It automatically completes sample nucleic acid extraction, purification, and real-time fluorescence PCR amplification. Paired with dedicated microfluidic chips, it detects nucleic acid targets in specimens and provides instant test reports via its embedded touchscreen system.",
      zh: "CarryOn 是一款全自动封闭式核酸扩增分析系统，可自动完成样本核酸提取、纯化和实时荧光PCR扩增检测全过程。与检测专用微流控芯片配合使用，用于检测标本中的核酸靶点，其嵌入式软件会自动判断结果并提供检测报告。",
      ja: "CarryOnは全自動クローズドシステム核酸増幅アナライザーです。サンプルの核酸抽出、精製、リアルタイム蛍光PCR増幅を自動的に完了します。専用マイクロ流体チップと組み合わせて使用し、検体中の核酸ターゲットを検出、内蔵タッチスクリーンで即時検査レポートを提供します。",
    },
    images: ["/images/products/carryon-device.png"],
    keySpecs: [
      { label: { en: "Time to Result", zh: "出结果时间", ja: "結果時間" }, value: "< 60 min" },
      { label: { en: "Weight", zh: "重量", ja: "重量" }, value: "2.0 kg" },
      { label: { en: "Channels", zh: "检测通路", ja: "チャンネル" }, value: "5-color" },
      { label: { en: "Power", zh: "电源", ja: "電源" }, value: "3.5h battery" },
    ],
    fullSpecs: [
      { label: { en: "Product Name", zh: "产品名称", ja: "製品名" }, value: "Fully Automated Closed Nucleic Acid Amplification System" },
      { label: { en: "Dimensions", zh: "产品尺寸", ja: "寸法" }, value: "297 x 159 x 126 mm" },
      { label: { en: "Weight", zh: "产品重量", ja: "重量" }, value: "2.0 kg" },
      { label: { en: "Detection Channels", zh: "检测通路", ja: "検出チャンネル" }, value: "5-color fluorescence" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間" }, value: "< 60 minutes" },
      { label: { en: "Power Supply", zh: "电源", ja: "電源" }, value: "Rechargeable lithium battery (~3.5 hours runtime)" },
      { label: { en: "Sample Types", zh: "样本来源", ja: "サンプルタイプ" }, value: "Swabs, swab preservative fluid, blood, saliva" },
      { label: { en: "Consumables", zh: "试剂耗材", ja: "消耗品" }, value: "Pre-loaded microfluidic chips" },
      { label: { en: "Heating Rate", zh: "升温速率", ja: "加熱速度" }, value: "6°C/s" },
      { label: { en: "Cooling Rate", zh: "降温速率", ja: "冷却速度" }, value: "4.5°C/s" },
      { label: { en: "Software", zh: "软件系统", ja: "ソフトウェア" }, value: "Proprietary touchscreen OS & analysis software" },
      { label: { en: "Sensitivity", zh: "检测灵敏度", ja: "感度" }, value: "50 copies/test" },
      { label: { en: "Environment", zh: "检测环境", ja: "環境" }, value: "Room temperature (field-deployable)" },
      { label: { en: "Connectivity", zh: "传输方式", ja: "通信" }, value: "WiFi" },
      { label: { en: "Reproducibility", zh: "样本检测重复度", ja: "再現性" }, value: "CV ≤ 3%" },
    ],
    certifications: ["CE", "ISO13485"],
    relatedProducts: ["canine-triple", "feline-triple-resp"],
  },

  // === CANINE CHIPS ===
  {
    id: "canine-triple",
    slug: "canine-triple-screening",
    category: "chip-canine",
    categorySlug: "test-chips",
    name: {
      en: "Canine CDV-CPV-CCoV Triple Test Chip",
      zh: "犬瘟热-犬细小-犬冠状三联检芯片",
      ja: "犬ジステンパー・パルボ・コロナ3連検査チップ",
    },
    tagline: {
      en: "Routine screening panel for canine distemper, parvovirus, and coronavirus.",
      zh: "犬瘟热、细小病毒、冠状病毒常规体检筛查。",
      ja: "犬ジステンパー、パルボウイルス、コロナウイルスのルーチンスクリーニング。",
    },
    description: {
      en: "A comprehensive triple screening panel designed for routine health checks. Simultaneously detects Canine Distemper Virus (CDV), Canine Parvovirus (CPV), and Canine Coronavirus (CCoV) from a single swab sample in under 60 minutes.",
      zh: "专为常规体检筛查设计的三联检测面板。仅需一个拭子样本，60分钟内同时检测犬瘟热病毒(CDV)、犬细小病毒(CPV)和犬冠状病毒(CCoV)。",
      ja: "定期健康診断用に設計された包括的なトリプルスクリーニングパネル。1つのスワブサンプルから60分以内に犬ジステンパーウイルス(CDV)、犬パルボウイルス(CPV)、犬コロナウイルス(CCoV)を同時検出。",
    },
    images: ["/images/products/chip-in-hand.png", "/images/products/microfluidic-chips.jpg"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "CDV + CPV + CCoV" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル" }, value: "Swab" },
      { label: { en: "Time", zh: "检测时间", ja: "時間" }, value: "< 60 min" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存" }, value: "Room temp" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "CDV, CPV, CCoV" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ" }, value: "Oronasal swab, rectal swab" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Shelf Life", zh: "有效期", ja: "有効期限" }, value: "12 months" },
      { label: { en: "Chip Type", zh: "芯片类型", ja: "チップタイプ" }, value: "Single-use, closed system" },
    ],
    detectedTargets: [
      { en: "Canine Distemper Virus (CDV)", zh: "犬瘟热病毒 (CDV)", ja: "犬ジステンパーウイルス (CDV)" },
      { en: "Canine Parvovirus (CPV)", zh: "犬细小病毒 (CPV)", ja: "犬パルボウイルス (CPV)" },
      { en: "Canine Coronavirus (CCoV)", zh: "犬冠状病毒 (CCoV)", ja: "犬コロナウイルス (CCoV)" },
    ],
    certifications: ["CE"],
    relatedProducts: ["carryon-device", "canine-triple-resp", "canine-tick"],
  },
  {
    id: "canine-triple-resp",
    slug: "canine-triple-respiratory",
    category: "chip-canine",
    categorySlug: "test-chips",
    name: {
      en: "Canine CPIV-CAV-CIV Respiratory Triple Test Chip",
      zh: "犬副流感-犬腺病毒-犬流感三联检芯片",
      ja: "犬パラインフルエンザ・アデノ・インフルエンザ3連検査チップ",
    },
    tagline: {
      en: "Respiratory symptom screening for parainfluenza, adenovirus, and influenza.",
      zh: "呼吸道症状筛查：副流感、腺病毒、流感病毒。",
      ja: "呼吸器症状スクリーニング：パラインフルエンザ、アデノウイルス、インフルエンザ。",
    },
    description: {
      en: "Specifically designed for dogs presenting respiratory symptoms. Detects Canine Parainfluenza Virus (CPIV), Canine Adenovirus (CAV), and Canine Influenza Virus (CIV) in a single test to rapidly identify the cause of coughing, sneezing, and nasal discharge.",
      zh: "专为犬呼吸道症状设计。一次检测同时识别犬副流感病毒(CPIV)、犬腺病毒(CAV)和犬流感病毒(CIV)，快速确定咳嗽、打喷嚏和流鼻涕的病因。",
      ja: "呼吸器症状を呈する犬専用に設計。犬パラインフルエンザウイルス(CPIV)、犬アデノウイルス(CAV)、犬インフルエンザウイルス(CIV)を1回の検査で同時検出し、咳、くしゃみ、鼻水の原因を迅速に特定。",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "CPIV + CAV + CIV" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル" }, value: "Nasal swab" },
      { label: { en: "Time", zh: "检测时间", ja: "時間" }, value: "< 60 min" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存" }, value: "Room temp" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "CPIV, CAV, CIV" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ" }, value: "Nasal swab" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Shelf Life", zh: "有效期", ja: "有効期限" }, value: "12 months" },
      { label: { en: "Chip Type", zh: "芯片类型", ja: "チップタイプ" }, value: "Single-use, closed system" },
    ],
    detectedTargets: [
      { en: "Canine Parainfluenza Virus (CPIV)", zh: "犬副流感病毒 (CPIV)", ja: "犬パラインフルエンザウイルス (CPIV)" },
      { en: "Canine Adenovirus (CAV)", zh: "犬腺病毒 (CAV)", ja: "犬アデノウイルス (CAV)" },
      { en: "Canine Influenza Virus (CIV)", zh: "犬流感病毒 (CIV)", ja: "犬インフルエンザウイルス (CIV)" },
    ],
    certifications: ["CE"],
    relatedProducts: ["carryon-device", "canine-triple"],
  },
  {
    id: "canine-tick",
    slug: "canine-tick-borne",
    category: "chip-canine",
    categorySlug: "test-chips",
    name: {
      en: "Canine Babesia-Ehrlichia-Leptospira Triple Test Chip",
      zh: "犬巴贝斯虫-艾利希体-钩端螺旋体三联检芯片",
      ja: "犬バベシア・エールリヒア・レプトスピラ3連検査チップ",
    },
    tagline: {
      en: "Tick-borne disease screening: Babesia, Ehrlichia, and Leptospira.",
      zh: "蜱虫叮咬疾病筛查：巴贝斯虫、艾利希体、钩端螺旋体。",
      ja: "ダニ媒介疾患スクリーニング：バベシア、エールリヒア、レプトスピラ。",
    },
    description: {
      en: "Essential panel for dogs with tick exposure history. Simultaneously detects Babesia, Ehrlichia, and Leptospira — three critical tick-borne pathogens that can cause severe illness if left undiagnosed.",
      zh: "蜱虫接触史犬只的必备检测面板。同时检测巴贝斯虫、艾利希体和钩端螺旋体——三种如不及时诊断可导致严重疾病的蜱传病原体。",
      ja: "ダニ暴露歴のある犬に必須のパネル。バベシア、エールリヒア、レプトスピラ——診断されなければ重篤な疾患を引き起こす3つの重要なダニ媒介病原体を同時検出。",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "Babesia + Ehrlichia + Leptospira" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル" }, value: "Blood" },
      { label: { en: "Time", zh: "检测时间", ja: "時間" }, value: "< 60 min" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存" }, value: "Room temp" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "Babesia, Ehrlichia, Leptospira" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ" }, value: "Whole blood" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Shelf Life", zh: "有效期", ja: "有効期限" }, value: "12 months" },
      { label: { en: "Chip Type", zh: "芯片类型", ja: "チップタイプ" }, value: "Single-use, closed system" },
    ],
    detectedTargets: [
      { en: "Babesia canis", zh: "犬巴贝斯虫", ja: "犬バベシア" },
      { en: "Ehrlichia canis", zh: "犬艾利希体", ja: "犬エールリヒア" },
      { en: "Leptospira spp.", zh: "钩端螺旋体", ja: "レプトスピラ" },
    ],
    certifications: ["CE"],
    relatedProducts: ["carryon-device", "canine-triple"],
  },

  // === FELINE CHIPS ===
  {
    id: "feline-triple-resp",
    slug: "feline-triple-respiratory",
    category: "chip-feline",
    categorySlug: "test-chips",
    name: {
      en: "Feline FHV-FCV-Mycoplasma Respiratory Triple Test Chip",
      zh: "猫疱疹-猫杯状-猫支原体三联检芯片",
      ja: "猫ヘルペス・カリシ・マイコプラズマ3連検査チップ",
    },
    tagline: {
      en: "Respiratory symptom screening for herpesvirus, calicivirus, and mycoplasma.",
      zh: "不明呼吸道症状筛查：疱疹病毒、杯状病毒、支原体。",
      ja: "呼吸器症状スクリーニング：ヘルペスウイルス、カリシウイルス、マイコプラズマ。",
    },
    description: {
      en: "Designed for cats with unexplained respiratory symptoms. Detects Feline Herpesvirus (FHV), Feline Calicivirus (FCV), and Feline Mycoplasma in a single test, covering the most common causes of upper respiratory infections in cats.",
      zh: "专为不明原因呼吸道症状猫只设计。一次检测同时识别猫疱疹病毒(FHV)、猫杯状病毒(FCV)和猫支原体，覆盖猫上呼吸道感染最常见病因。",
      ja: "原因不明の呼吸器症状を呈する猫用に設計。猫ヘルペスウイルス(FHV)、猫カリシウイルス(FCV)、猫マイコプラズマを1回の検査で同時検出し、猫の上気道感染症の最も一般的な原因をカバー。",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "FHV + FCV + Mycoplasma" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル" }, value: "Oronasal swab" },
      { label: { en: "Time", zh: "检测时间", ja: "時間" }, value: "< 60 min" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存" }, value: "Room temp" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "FHV, FCV, Mycoplasma felis" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ" }, value: "Oronasal swab" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Shelf Life", zh: "有效期", ja: "有効期限" }, value: "12 months" },
      { label: { en: "Chip Type", zh: "芯片类型", ja: "チップタイプ" }, value: "Single-use, closed system" },
    ],
    detectedTargets: [
      { en: "Feline Herpesvirus (FHV-1)", zh: "猫疱疹病毒 (FHV-1)", ja: "猫ヘルペスウイルス (FHV-1)" },
      { en: "Feline Calicivirus (FCV)", zh: "猫杯状病毒 (FCV)", ja: "猫カリシウイルス (FCV)" },
      { en: "Mycoplasma felis", zh: "猫支原体", ja: "猫マイコプラズマ" },
    ],
    certifications: ["CE"],
    relatedProducts: ["carryon-device", "feline-triple-screening"],
  },
  {
    id: "feline-triple-screening",
    slug: "feline-triple-screening",
    category: "chip-feline",
    categorySlug: "test-chips",
    name: {
      en: "Feline FeLV-FIV-FPV Screening Triple Test Chip",
      zh: "猫白血病-猫艾滋-猫瘟三联检芯片",
      ja: "猫白血病・猫エイズ・猫パルボ3連検査チップ",
    },
    tagline: {
      en: "Routine health screening for leukemia, immunodeficiency, and panleukopenia.",
      zh: "常规体检筛查：白血病、免疫缺陷、猫瘟。",
      ja: "定期健康スクリーニング：白血病、免疫不全、汎白血球減少症。",
    },
    description: {
      en: "Essential screening panel for shelter intake and routine health checks. Detects Feline Leukemia Virus (FeLV), Feline Immunodeficiency Virus (FIV), and Feline Panleukopenia Virus (FPV) — the three most critical infectious diseases in cats.",
      zh: "收容所入所筛查和常规体检的必备检测面板。检测猫白血病病毒(FeLV)、猫免疫缺陷病毒(FIV)和猫瘟病毒(FPV)——猫最重要的三种传染病。",
      ja: "シェルター入所スクリーニングと定期健康診断に必須のパネル。猫白血病ウイルス(FeLV)、猫免疫不全ウイルス(FIV)、猫パルボウイルス(FPV)——猫の最も重要な3つの感染症を検出。",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "FeLV + FIV + FPV" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル" }, value: "Blood" },
      { label: { en: "Time", zh: "检测时间", ja: "時間" }, value: "< 60 min" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存" }, value: "Room temp" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "FeLV, FIV, FPV" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ" }, value: "Whole blood" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Shelf Life", zh: "有效期", ja: "有効期限" }, value: "12 months" },
      { label: { en: "Chip Type", zh: "芯片类型", ja: "チップタイプ" }, value: "Single-use, closed system" },
    ],
    detectedTargets: [
      { en: "Feline Leukemia Virus (FeLV)", zh: "猫白血病病毒 (FeLV)", ja: "猫白血病ウイルス (FeLV)" },
      { en: "Feline Immunodeficiency Virus (FIV)", zh: "猫免疫缺陷病毒 (FIV)", ja: "猫免疫不全ウイルス (FIV)" },
      { en: "Feline Panleukopenia Virus (FPV)", zh: "猫瘟病毒 (FPV)", ja: "猫パルボウイルス (FPV)" },
    ],
    certifications: ["CE"],
    relatedProducts: ["carryon-device", "feline-triple-resp"],
  },

  // === PATHOGEN DETECTION — HUMAN CLINICAL ===
  {
    id: "pathogen-flu-covid",
    slug: "influenza-covid-triple",
    category: "chip-pathogen",
    categorySlug: "test-chips",
    name: {
      en: "Influenza A/B + SARS-CoV-2 Triple Test Chip",
      zh: "甲乙流+新冠三联检芯片",
      ja: "インフルエンザA/B + SARS-CoV-2 3連検査チップ",
    },
    tagline: {
      en: "Rapid differentiation of Influenza A, Influenza B, and SARS-CoV-2 in a single test.",
      zh: "一次检测快速区分甲型流感、乙型流感和新冠病毒。",
      ja: "1回の検査でインフルエンザA型、B型、SARS-CoV-2を迅速に鑑別。",
    },
    description: {
      en: "Designed for respiratory symptom triage in clinical and border control settings. Simultaneously detects Influenza A virus, Influenza B virus, and SARS-CoV-2, enabling rapid differential diagnosis and appropriate treatment decisions.",
      zh: "专为临床和口岸防控场景中的呼吸道症状分诊设计。同时检测甲型流感病毒、乙型流感病毒和新冠病毒(SARS-CoV-2)，实现快速鉴别诊断和精准治疗决策。",
      ja: "臨床および国境管理における呼吸器症状トリアージ用に設計。A型インフルエンザ、B型インフルエンザ、SARS-CoV-2を同時検出し、迅速な鑑別診断と適切な治療判断を可能にします。",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "Flu A + Flu B + SARS-CoV-2" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル" }, value: "Nasal swab" },
      { label: { en: "Time", zh: "检测时间", ja: "時間" }, value: "< 60 min" },
      { label: { en: "Use", zh: "应用场景", ja: "用途" }, value: "Clinical / Border" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "Influenza A, Influenza B, SARS-CoV-2" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ" }, value: "Nasopharyngeal swab" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Application", zh: "应用领域", ja: "用途" }, value: "Human clinical diagnostics, border control, epidemic prevention" },
    ],
    detectedTargets: [
      { en: "Influenza A Virus", zh: "甲型流感病毒", ja: "A型インフルエンザウイルス" },
      { en: "Influenza B Virus", zh: "乙型流感病毒", ja: "B型インフルエンザウイルス" },
      { en: "SARS-CoV-2", zh: "新型冠状病毒 (SARS-CoV-2)", ja: "SARS-CoV-2" },
    ],
    certifications: ["CE"],
    relatedProducts: ["carryon-device", "pathogen-respiratory"],
  },
  {
    id: "pathogen-respiratory",
    slug: "respiratory-pathogen-triple",
    category: "chip-pathogen",
    categorySlug: "test-chips",
    name: {
      en: "Mycoplasma + RSV + Adenovirus Respiratory Triple Test Chip",
      zh: "肺支+合胞病毒+腺病毒三联检芯片",
      ja: "マイコプラズマ + RS + アデノウイルス 3連検査チップ",
    },
    tagline: {
      en: "Respiratory pathogen panel for Mycoplasma pneumoniae, RSV, and Adenovirus.",
      zh: "呼吸道病原体检测：肺炎支原体、合胞病毒、腺病毒。",
      ja: "呼吸器病原体パネル：マイコプラズマ肺炎、RSウイルス、アデノウイルス。",
    },
    description: {
      en: "Comprehensive respiratory pathogen panel targeting three common causes of pneumonia and upper respiratory infections. Ideal for pediatric clinics and hospitals where rapid differentiation drives treatment decisions.",
      zh: "全面的呼吸道病原体检测面板，针对肺炎和上呼吸道感染的三种常见病因。特别适用于儿科诊所和医院，快速鉴别指导治疗决策。",
      ja: "肺炎および上気道感染症の3つの一般的な原因を対象とする包括的な呼吸器病原体パネル。迅速な鑑別が治療方針の決定に直結する小児科クリニックや病院に最適。",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "M.pneumoniae + RSV + Adeno" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル" }, value: "Nasal swab" },
      { label: { en: "Time", zh: "检测时间", ja: "時間" }, value: "< 60 min" },
      { label: { en: "Use", zh: "应用场景", ja: "用途" }, value: "Clinical" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "Mycoplasma pneumoniae, RSV, Adenovirus" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ" }, value: "Nasopharyngeal swab" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Application", zh: "应用领域", ja: "用途" }, value: "Human clinical diagnostics, pediatrics" },
    ],
    detectedTargets: [
      { en: "Mycoplasma pneumoniae", zh: "肺炎支原体", ja: "マイコプラズマ肺炎" },
      { en: "Respiratory Syncytial Virus (RSV)", zh: "呼吸道合胞病毒 (RSV)", ja: "RSウイルス" },
      { en: "Adenovirus", zh: "腺病毒", ja: "アデノウイルス" },
    ],
    certifications: ["CE"],
    relatedProducts: ["carryon-device", "pathogen-flu-covid"],
  },
  {
    id: "pathogen-sti",
    slug: "sti-triple-test",
    category: "chip-pathogen",
    categorySlug: "test-chips",
    name: {
      en: "Chlamydia + Ureaplasma + Gonorrhea STI Triple Test Chip",
      zh: "沙眼+解脲+淋球性传播感染三联检芯片",
      ja: "クラミジア + ウレアプラズマ + 淋菌 STI 3連検査チップ",
    },
    tagline: {
      en: "Sexually transmitted infection screening: Chlamydia, Ureaplasma, and Gonorrhea.",
      zh: "性传播感染筛查：沙眼衣原体、解脲脲原体、淋球菌。",
      ja: "性感染症スクリーニング：クラミジア、ウレアプラズマ、淋菌。",
    },
    description: {
      en: "Point-of-care STI screening panel for three of the most prevalent sexually transmitted pathogens. Enables rapid, confidential testing in clinical settings without sending samples to reference laboratories.",
      zh: "针对三种最常见性传播病原体的现场检测面板。在临床环境中实现快速、保密的检测，无需将样本送至参考实验室。",
      ja: "最も一般的な3つの性感染病原体を対象としたポイントオブケアSTIスクリーニングパネル。参照検査室へのサンプル送付なしに、臨床環境で迅速かつ秘密厳守の検査を実現。",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "CT + UU + NG" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル" }, value: "Swab" },
      { label: { en: "Time", zh: "检测时间", ja: "時間" }, value: "< 60 min" },
      { label: { en: "Use", zh: "应用场景", ja: "用途" }, value: "Clinical" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "Chlamydia trachomatis, Ureaplasma urealyticum, Neisseria gonorrhoeae" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ" }, value: "Urogenital swab" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Application", zh: "应用领域", ja: "用途" }, value: "Human clinical diagnostics, STI screening" },
    ],
    detectedTargets: [
      { en: "Chlamydia trachomatis (CT)", zh: "沙眼衣原体 (CT)", ja: "クラミジア・トラコマティス (CT)" },
      { en: "Ureaplasma urealyticum (UU)", zh: "解脲脲原体 (UU)", ja: "ウレアプラズマ・ウレアリティクム (UU)" },
      { en: "Neisseria gonorrhoeae (NG)", zh: "淋球菌 (NG)", ja: "淋菌 (NG)" },
    ],
    certifications: ["CE"],
    relatedProducts: ["carryon-device"],
  },

  // === PATHOGEN DETECTION — LIVESTOCK ===
  {
    id: "pathogen-asf",
    slug: "african-swine-fever",
    category: "chip-pathogen",
    categorySlug: "test-chips",
    name: {
      en: "African Swine Fever (ASF) Test Chip",
      zh: "非洲猪瘟核酸检测芯片",
      ja: "アフリカ豚熱 (ASF) 検査チップ",
    },
    tagline: {
      en: "Field-deployable ASF detection for livestock disease control.",
      zh: "现场部署的非洲猪瘟检测，用于畜牧疫病防控。",
      ja: "畜産疾病管理のための現場展開可能なASF検出。",
    },
    description: {
      en: "Critical tool for African Swine Fever surveillance and outbreak response. Enables on-site PCR-level detection at farms, checkpoints, and slaughterhouses without laboratory infrastructure, supporting rapid quarantine decisions.",
      zh: "非洲猪瘟监测和疫情应急的关键工具。可在养殖场、检查站和屠宰场实现现场PCR级检测，无需实验室基础设施，支持快速隔离决策。",
      ja: "アフリカ豚熱の監視と発生対応に不可欠なツール。農場、検問所、食肉処理場で実験室インフラなしにPCRレベルの現場検出を可能にし、迅速な検疫判断を支援。",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Target", zh: "检测靶标", ja: "ターゲット" }, value: "ASFV" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル" }, value: "Blood / Tissue" },
      { label: { en: "Time", zh: "检测时间", ja: "時間" }, value: "< 60 min" },
      { label: { en: "Use", zh: "应用场景", ja: "用途" }, value: "Field / Farm" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ" }, value: "Real-time fluorescence PCR" },
      { label: { en: "Target", zh: "检测靶标", ja: "ターゲット" }, value: "African Swine Fever Virus (ASFV)" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ" }, value: "Whole blood, tissue homogenate" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Application", zh: "应用领域", ja: "用途" }, value: "Livestock disease control, border quarantine, farm surveillance" },
    ],
    detectedTargets: [
      { en: "African Swine Fever Virus (ASFV)", zh: "非洲猪瘟病毒 (ASFV)", ja: "アフリカ豚熱ウイルス (ASFV)" },
    ],
    certifications: ["CE"],
    relatedProducts: ["carryon-device", "pathogen-prrsv"],
  },
  {
    id: "pathogen-prrsv",
    slug: "prrsv-test",
    category: "chip-pathogen",
    categorySlug: "test-chips",
    name: {
      en: "Porcine PRRSV (Blue Ear) Test Chip",
      zh: "猪蓝耳病毒核酸检测芯片",
      ja: "豚PRRSV（ブルーイヤー）検査チップ",
    },
    tagline: {
      en: "PRRS virus detection for swine herd health monitoring.",
      zh: "猪蓝耳病毒检测，用于猪群健康监控。",
      ja: "豚群健康モニタリングのためのPRRSウイルス検出。",
    },
    description: {
      en: "Porcine Reproductive and Respiratory Syndrome Virus (PRRSV) detection for swine farms. Supports herd health monitoring and outbreak control through rapid on-site nucleic acid testing.",
      zh: "猪繁殖与呼吸综合征病毒(PRRSV/蓝耳病)检测，用于养猪场猪群健康监控和疫情防控。通过现场快速核酸检测支持猪群健康管理。",
      ja: "養豚場における豚繁殖・呼吸器症候群ウイルス(PRRSV)検出。現場での迅速な核酸検査を通じて、豚群の健康管理と発生制御を支援。",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Target", zh: "检测靶标", ja: "ターゲット" }, value: "PRRSV" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル" }, value: "Blood / Serum" },
      { label: { en: "Time", zh: "检测时间", ja: "時間" }, value: "< 60 min" },
      { label: { en: "Use", zh: "应用场景", ja: "用途" }, value: "Farm / Vet Station" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ" }, value: "Real-time fluorescence PCR" },
      { label: { en: "Target", zh: "检测靶标", ja: "ターゲット" }, value: "Porcine Reproductive and Respiratory Syndrome Virus (PRRSV)" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ" }, value: "Whole blood, serum" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件" }, value: "Room temperature (15-30°C)" },
    ],
    detectedTargets: [
      { en: "PRRSV (Blue Ear Disease Virus)", zh: "猪蓝耳病毒 (PRRSV)", ja: "PRRSV（ブルーイヤー病ウイルス）" },
    ],
    certifications: ["CE"],
    relatedProducts: ["carryon-device", "pathogen-asf"],
  },

  // === MEAT SPECIES IDENTIFICATION ===
  {
    id: "meat-quad-bpcd",
    slug: "meat-beef-pork-chicken-duck",
    category: "chip-meat",
    categorySlug: "test-chips",
    name: {
      en: "Beef-Pork-Chicken-Duck Meat ID Quad Test Chip",
      zh: "牛猪鸡鸭肉源鉴定四联检芯片",
      ja: "牛・豚・鶏・鴨 肉種鑑定4連検査チップ",
    },
    tagline: {
      en: "Simultaneously identify beef, pork, chicken, and duck meat species in a single test.",
      zh: "一次检测同时鉴定牛肉、猪肉、鸡肉和鸭肉。",
      ja: "1回の検査で牛肉、豚肉、鶏肉、鴨肉を同時鑑定。",
    },
    description: {
      en: "Multi-species meat identification panel for food safety enforcement and Halal/Kosher compliance. Detects DNA of beef (cattle), pork (swine), chicken, and duck in processed or raw meat products, exposing adulteration and mislabeling within 60 minutes on-site.",
      zh: "多物种肉源鉴定面板，用于食品安全执法和清真/Halal合规检测。可在加工或生鲜肉制品中检测牛(黄牛)、猪、鸡、鸭的DNA，60分钟内现场揭露掺假和错标。",
      ja: "食品安全法執行およびハラール/コーシャー準拠のための多種肉源鑑定パネル。加工肉または生肉製品中の牛、豚、鶏、鴨のDNAを検出し、60分以内に現場で偽装・不正表示を暴露。",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "Beef + Pork + Chicken + Duck" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル" }, value: "Meat tissue" },
      { label: { en: "Time", zh: "检测时间", ja: "時間" }, value: "< 60 min" },
      { label: { en: "Use", zh: "应用场景", ja: "用途" }, value: "Food safety" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "Cattle (Bos taurus), Swine (Sus scrofa), Chicken (Gallus gallus), Duck (Anas)" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ" }, value: "Raw or processed meat tissue" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Application", zh: "应用领域", ja: "用途" }, value: "Food safety, customs, Halal/Kosher certification, anti-adulteration" },
    ],
    detectedTargets: [
      { en: "Cattle / Beef (Bos taurus)", zh: "黄牛 / 牛肉", ja: "牛肉（ウシ）" },
      { en: "Swine / Pork (Sus scrofa)", zh: "猪 / 猪肉", ja: "豚肉（ブタ）" },
      { en: "Chicken (Gallus gallus)", zh: "鸡 / 鸡肉", ja: "鶏肉（ニワトリ）" },
      { en: "Duck (Anas)", zh: "鸭 / 鸭肉", ja: "鴨肉（アヒル）" },
    ],
    certifications: ["CE"],
    relatedProducts: ["carryon-device", "meat-quad-shpcd"],
  },
  {
    id: "meat-quad-shpcd",
    slug: "meat-lamb-pork-chicken-duck",
    category: "chip-meat",
    categorySlug: "test-chips",
    name: {
      en: "Lamb-Pork-Chicken-Duck Meat ID Quad Test Chip",
      zh: "羊猪鸡鸭肉源鉴定四联检芯片",
      ja: "羊・豚・鶏・鴨 肉種鑑定4連検査チップ",
    },
    tagline: {
      en: "Detect lamb adulteration — simultaneously identify lamb, pork, chicken, and duck.",
      zh: "检测羊肉掺假——同时鉴定羊肉、猪肉、鸡肉和鸭肉。",
      ja: "羊肉偽装を検出——羊肉、豚肉、鶏肉、鴨肉を同時鑑定。",
    },
    description: {
      en: "Specifically designed for lamb adulteration detection, a widespread food fraud issue. Identifies whether lamb products have been substituted or mixed with pork, chicken, or duck — common cheaper alternatives used in food fraud.",
      zh: "专为羊肉掺假检测设计，这是一个广泛的食品欺诈问题。鉴别羊肉产品是否被猪肉、鸡肉或鸭肉替代或掺混——这些是食品欺诈中常用的低价替代品。",
      ja: "広範な食品詐欺問題である羊肉偽装検出専用に設計。羊肉製品が豚肉、鶏肉、鴨肉——食品詐欺で一般的に使用される安価な代替品——で代替または混入されていないかを鑑定。",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "Lamb + Pork + Chicken + Duck" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル" }, value: "Meat tissue" },
      { label: { en: "Time", zh: "检测时间", ja: "時間" }, value: "< 60 min" },
      { label: { en: "Use", zh: "应用场景", ja: "用途" }, value: "Food safety" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "Sheep (Ovis aries), Swine, Chicken, Duck" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ" }, value: "Raw or processed meat tissue" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件" }, value: "Room temperature (15-30°C)" },
    ],
    detectedTargets: [
      { en: "Sheep / Lamb (Ovis aries)", zh: "绵羊 / 羊肉", ja: "羊肉（ヒツジ）" },
      { en: "Swine / Pork", zh: "猪 / 猪肉", ja: "豚肉" },
      { en: "Chicken", zh: "鸡 / 鸡肉", ja: "鶏肉" },
      { en: "Duck", zh: "鸭 / 鸭肉", ja: "鴨肉" },
    ],
    certifications: ["CE"],
    relatedProducts: ["carryon-device", "meat-quad-bpcd"],
  },
  {
    id: "meat-quad-dhpd",
    slug: "meat-donkey-horse-pork-duck",
    category: "chip-meat",
    categorySlug: "test-chips",
    name: {
      en: "Donkey-Horse-Pork-Duck Meat ID Quad Test Chip",
      zh: "驴马猪鸭肉源鉴定四联检芯片",
      ja: "ロバ・馬・豚・鴨 肉種鑑定4連検査チップ",
    },
    tagline: {
      en: "Detect donkey/horse meat substitution in pork and duck products.",
      zh: "检测猪肉和鸭肉制品中的驴肉/马肉替代。",
      ja: "豚肉・鴨肉製品中のロバ肉・馬肉代替を検出。",
    },
    description: {
      en: "Targets fraud involving donkey and horse meat — species commonly involved in international meat scandals. Essential for customs enforcement and food regulatory agencies combating cross-border meat fraud.",
      zh: "针对涉及驴肉和马肉的欺诈——国际肉类丑闻中常涉及的物种。对于打击跨境肉类欺诈的海关执法和食品监管部门至关重要。",
      ja: "ロバ肉と馬肉に関わる詐欺を対象——国際的な食肉スキャンダルで頻繁に関与する種。越境食肉詐欺と戦う税関執行機関と食品規制当局に不可欠。",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "Donkey + Horse + Pork + Duck" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル" }, value: "Meat tissue" },
      { label: { en: "Time", zh: "检测时间", ja: "時間" }, value: "< 60 min" },
      { label: { en: "Use", zh: "应用场景", ja: "用途" }, value: "Customs / Food safety" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット" }, value: "Donkey (Equus asinus), Horse (Equus caballus), Swine, Duck" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ" }, value: "Raw or processed meat tissue" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件" }, value: "Room temperature (15-30°C)" },
    ],
    detectedTargets: [
      { en: "Donkey (Equus asinus)", zh: "驴", ja: "ロバ" },
      { en: "Horse (Equus caballus)", zh: "马", ja: "馬" },
      { en: "Swine / Pork", zh: "猪 / 猪肉", ja: "豚肉" },
      { en: "Duck", zh: "鸭 / 鸭肉", ja: "鴨肉" },
    ],
    certifications: ["CE"],
    relatedProducts: ["carryon-device", "meat-quad-bpcd"],
  },
];

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getChipProducts(): Product[] {
  return products.filter((p) => p.category.startsWith("chip-"));
}

export function getCategoryBySlug(slug: string): ProductCategoryInfo | undefined {
  return productCategories.find((c) => c.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
