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
