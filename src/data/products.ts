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
      vi: "Thiết bị phát hiện CarryOn",
    },
    description: {
      en: "Handheld, battery-powered real-time fluorescence PCR analyzer with microfluidic chip technology.",
      zh: "手持式、电池驱动的实时荧光PCR分析仪，采用微流控芯片技术。",
      ja: "マイクロ流体チップ技術を搭載したハンドヘルド型バッテリー駆動リアルタイム蛍光PCRアナライザー。",
      vi: "Máy PCR huỳnh quang thời gian thực (real-time PCR) cầm tay, dùng pin, với công nghệ chip vi lưu.",
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
      vi: "Chip xét nghiệm",
    },
    description: {
      en: "Single-use microfluidic chips for fully automated sample-to-result testing. Room temperature storage, no cold chain required.",
      zh: "一次性微流控芯片，全自动「样本进-结果出」检测。室温存储，无需冷链。",
      ja: "全自動サンプルから結果までの検査用使い捨てマイクロ流体チップ。室温保存、コールドチェーン不要。",
      vi: "Chip vi lưu dùng một lần cho xét nghiệm tự động hoàn toàn từ mẫu đến kết quả. Bảo quản ở nhiệt độ phòng, không cần chuỗi lạnh.",
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
      vi: "Phụ kiện & vật tư tiêu hao",
    },
    description: {
      en: "Sampling swabs, transport tubes, and other consumables for the CarryOn platform.",
      zh: "采样拭子、运输管及 CarryOn 平台其他耗材。",
      ja: "採取スワブ、輸送チューブ、その他CarryOnプラットフォーム用消耗品。",
      vi: "Tăm bông lấy mẫu, ống vận chuyển và các vật tư tiêu hao khác cho nền tảng CarryOn.",
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
      vi: "Máy PCR cầm tay CarryOn",
    },
    tagline: {
      en: "Palm-sized lab. PCR-accurate results in 40 minutes.",
      zh: "掌心实验室。40分钟获得PCR级精度结果。",
      ja: "手のひらサイズのラボ。40分でPCR精度の結果。",
      vi: "Phòng xét nghiệm trong lòng bàn tay. Kết quả chính xác chuẩn PCR trong 40 phút.",
    },
    description: {
      en: "The CarryOn is a fully automated, closed-system nucleic acid amplification analyzer. It automatically completes sample nucleic acid extraction, purification, and real-time fluorescence PCR amplification. Paired with dedicated microfluidic chips, it detects nucleic acid targets in specimens and provides instant test reports via its embedded touchscreen system.",
      zh: "CarryOn 是一款全自动封闭式核酸扩增分析系统，可自动完成样本核酸提取、纯化和实时荧光PCR扩增检测全过程。与检测专用微流控芯片配合使用，用于检测标本中的核酸靶点，其嵌入式软件会自动判断结果并提供检测报告。",
      ja: "CarryOnは全自動クローズドシステム核酸増幅アナライザーです。サンプルの核酸抽出、精製、リアルタイム蛍光PCR増幅を自動的に完了します。専用マイクロ流体チップと組み合わせて使用し、検体中の核酸ターゲットを検出、内蔵タッチスクリーンで即時検査レポートを提供します。",
      vi: "CarryOn là máy khuếch đại axit nucleic tự động hoàn toàn, hệ thống kín. Máy tự động thực hiện tách chiết, tinh sạch axit nucleic từ mẫu và khuếch đại PCR huỳnh quang thời gian thực (real-time PCR). Kết hợp với chip vi lưu chuyên dụng, máy phát hiện mục tiêu axit nucleic trong mẫu bệnh phẩm và cung cấp báo cáo xét nghiệm tức thì qua hệ thống màn hình cảm ứng tích hợp.",
    },
    images: ["/images/products/carryon-device.png"],
    keySpecs: [
      { label: { en: "Time to Result", zh: "出结果时间", ja: "結果時間", vi: "Thời gian có kết quả" }, value: "< 60 min" },
      { label: { en: "Weight", zh: "重量", ja: "重量", vi: "Trọng lượng" }, value: "2.0 kg" },
      { label: { en: "Channels", zh: "检测通路", ja: "チャンネル", vi: "Kênh" }, value: "5-color" },
      { label: { en: "Power", zh: "电源", ja: "電源", vi: "Công suất" }, value: "3.5h battery" },
    ],
    fullSpecs: [
      { label: { en: "Product Name", zh: "产品名称", ja: "製品名", vi: "Tên sản phẩm" }, value: "Fully Automated Closed Nucleic Acid Amplification System" },
      { label: { en: "Dimensions", zh: "产品尺寸", ja: "寸法", vi: "Kích thước" }, value: "297 x 159 x 126 mm" },
      { label: { en: "Weight", zh: "产品重量", ja: "重量", vi: "Trọng lượng" }, value: "2.0 kg" },
      { label: { en: "Detection Channels", zh: "检测通路", ja: "検出チャンネル", vi: "Kênh phát hiện" }, value: "5-color fluorescence" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間", vi: "Thời gian có kết quả" }, value: "< 60 minutes" },
      { label: { en: "Power Supply", zh: "电源", ja: "電源", vi: "Nguồn điện" }, value: "Rechargeable lithium battery (~3.5 hours runtime)" },
      { label: { en: "Sample Types", zh: "样本来源", ja: "サンプルタイプ", vi: "Loại mẫu" }, value: "Swabs, swab preservative fluid, blood, saliva" },
      { label: { en: "Consumables", zh: "试剂耗材", ja: "消耗品", vi: "Vật tư tiêu hao" }, value: "Pre-loaded microfluidic chips" },
      { label: { en: "Heating Rate", zh: "升温速率", ja: "加熱速度", vi: "Tốc độ gia nhiệt" }, value: "6°C/s" },
      { label: { en: "Cooling Rate", zh: "降温速率", ja: "冷却速度", vi: "Tốc độ làm mát" }, value: "4.5°C/s" },
      { label: { en: "Software", zh: "软件系统", ja: "ソフトウェア", vi: "Phần mềm" }, value: "Proprietary touchscreen OS & analysis software" },
      { label: { en: "Sensitivity", zh: "检测灵敏度", ja: "感度", vi: "Độ nhạy" }, value: "50 copies/test" },
      { label: { en: "Environment", zh: "检测环境", ja: "環境", vi: "Môi trường" }, value: "Room temperature (field-deployable)" },
      { label: { en: "Connectivity", zh: "传输方式", ja: "通信", vi: "Kết nối" }, value: "WiFi" },
      { label: { en: "Reproducibility", zh: "样本检测重复度", ja: "再現性", vi: "Độ tái lập" }, value: "CV ≤ 3%" },
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
      vi: "Chip xét nghiệm bộ ba CDV-CPV-CCoV cho chó",
    },
    tagline: {
      en: "Routine screening panel for canine distemper, parvovirus, and coronavirus.",
      zh: "犬瘟热、细小病毒、冠状病毒常规体检筛查。",
      ja: "犬ジステンパー、パルボウイルス、コロナウイルスのルーチンスクリーニング。",
      vi: "Bộ xét nghiệm sàng lọc thường quy đối với bệnh care, parvovirus và coronavirus ở chó.",
    },
    description: {
      en: "A comprehensive triple screening panel designed for routine health checks. Simultaneously detects Canine Distemper Virus (CDV), Canine Parvovirus (CPV), and Canine Coronavirus (CCoV) from a single swab sample in under 60 minutes.",
      zh: "专为常规体检筛查设计的三联检测面板。仅需一个拭子样本，60分钟内同时检测犬瘟热病毒(CDV)、犬细小病毒(CPV)和犬冠状病毒(CCoV)。",
      ja: "定期健康診断用に設計された包括的なトリプルスクリーニングパネル。1つのスワブサンプルから60分以内に犬ジステンパーウイルス(CDV)、犬パルボウイルス(CPV)、犬コロナウイルス(CCoV)を同時検出。",
      vi: "Bộ xét nghiệm sàng lọc bộ ba toàn diện được thiết kế cho kiểm tra sức khỏe thường quy. Đồng thời phát hiện Virus bệnh care ở chó (CDV), Parvovirus ở chó (CPV) và Coronavirus ở chó (CCoV) từ một mẫu tăm bông duy nhất trong vòng dưới 60 phút.",
    },
    images: ["/images/products/chip-in-hand.png", "/images/products/microfluidic-chips.jpg"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "CDV + CPV + CCoV" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル", vi: "Mẫu" }, value: "Swab" },
      { label: { en: "Time", zh: "检测时间", ja: "時間", vi: "Thời gian" }, value: "< 60 min" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存", vi: "Bảo quản" }, value: "Room temp" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ", vi: "Loại xét nghiệm" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "CDV, CPV, CCoV" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ", vi: "Loại mẫu" }, value: "Oronasal swab, rectal swab" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間", vi: "Thời gian có kết quả" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件", vi: "Bảo quản" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Shelf Life", zh: "有效期", ja: "有効期限", vi: "Hạn sử dụng" }, value: "12 months" },
      { label: { en: "Chip Type", zh: "芯片类型", ja: "チップタイプ", vi: "Loại chip" }, value: "Single-use, closed system" },
    ],
    detectedTargets: [
      { en: "Canine Distemper Virus (CDV)", zh: "犬瘟热病毒 (CDV)", ja: "犬ジステンパーウイルス (CDV)", vi: "Virus bệnh care ở chó (CDV)" },
      { en: "Canine Parvovirus (CPV)", zh: "犬细小病毒 (CPV)", ja: "犬パルボウイルス (CPV)", vi: "Parvovirus ở chó (CPV)" },
      { en: "Canine Coronavirus (CCoV)", zh: "犬冠状病毒 (CCoV)", ja: "犬コロナウイルス (CCoV)", vi: "Coronavirus ở chó (CCoV)" },
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
      vi: "Chip xét nghiệm ba tác nhân hô hấp CPIV-CAV-CIV ở chó",
    },
    tagline: {
      en: "Respiratory symptom screening for parainfluenza, adenovirus, and influenza.",
      zh: "呼吸道症状筛查：副流感、腺病毒、流感病毒。",
      ja: "呼吸器症状スクリーニング：パラインフルエンザ、アデノウイルス、インフルエンザ。",
      vi: "Sàng lọc triệu chứng hô hấp đối với parainfluenza, adenovirus và cúm.",
    },
    description: {
      en: "Specifically designed for dogs presenting respiratory symptoms. Detects Canine Parainfluenza Virus (CPIV), Canine Adenovirus (CAV), and Canine Influenza Virus (CIV) in a single test to rapidly identify the cause of coughing, sneezing, and nasal discharge.",
      zh: "专为犬呼吸道症状设计。一次检测同时识别犬副流感病毒(CPIV)、犬腺病毒(CAV)和犬流感病毒(CIV)，快速确定咳嗽、打喷嚏和流鼻涕的病因。",
      ja: "呼吸器症状を呈する犬専用に設計。犬パラインフルエンザウイルス(CPIV)、犬アデノウイルス(CAV)、犬インフルエンザウイルス(CIV)を1回の検査で同時検出し、咳、くしゃみ、鼻水の原因を迅速に特定。",
      vi: "Được thiết kế chuyên biệt cho chó có triệu chứng hô hấp. Phát hiện Virus parainfluenza ở chó (CPIV), Adenovirus ở chó (CAV) và Virus cúm ở chó (CIV) trong một lần xét nghiệm, giúp xác định nhanh nguyên nhân gây ho, hắt hơi và chảy nước mũi.",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "CPIV + CAV + CIV" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル", vi: "Mẫu" }, value: "Nasal swab" },
      { label: { en: "Time", zh: "检测时间", ja: "時間", vi: "Thời gian" }, value: "< 60 min" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存", vi: "Bảo quản" }, value: "Room temp" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ", vi: "Loại xét nghiệm" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "CPIV, CAV, CIV" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ", vi: "Loại mẫu" }, value: "Nasal swab" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間", vi: "Thời gian có kết quả" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件", vi: "Bảo quản" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Shelf Life", zh: "有效期", ja: "有効期限", vi: "Hạn sử dụng" }, value: "12 months" },
      { label: { en: "Chip Type", zh: "芯片类型", ja: "チップタイプ", vi: "Loại chip" }, value: "Single-use, closed system" },
    ],
    detectedTargets: [
      { en: "Canine Parainfluenza Virus (CPIV)", zh: "犬副流感病毒 (CPIV)", ja: "犬パラインフルエンザウイルス (CPIV)", vi: "Virus parainfluenza ở chó (CPIV)" },
      { en: "Canine Adenovirus (CAV)", zh: "犬腺病毒 (CAV)", ja: "犬アデノウイルス (CAV)", vi: "Adenovirus ở chó (CAV)" },
      { en: "Canine Influenza Virus (CIV)", zh: "犬流感病毒 (CIV)", ja: "犬インフルエンザウイルス (CIV)", vi: "Virus cúm ở chó (CIV)" },
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
      vi: "Chip xét nghiệm ba tác nhân Babesia-Ehrlichia-Leptospira ở chó",
    },
    tagline: {
      en: "Tick-borne disease screening: Babesia, Ehrlichia, and Leptospira.",
      zh: "蜱虫叮咬疾病筛查：巴贝斯虫、艾利希体、钩端螺旋体。",
      ja: "ダニ媒介疾患スクリーニング：バベシア、エールリヒア、レプトスピラ。",
      vi: "Sàng lọc bệnh do ve truyền: Babesia, Ehrlichia và Leptospira.",
    },
    description: {
      en: "Essential panel for dogs with tick exposure history. Simultaneously detects Babesia, Ehrlichia, and Leptospira — three critical tick-borne pathogens that can cause severe illness if left undiagnosed.",
      zh: "蜱虫接触史犬只的必备检测面板。同时检测巴贝斯虫、艾利希体和钩端螺旋体——三种如不及时诊断可导致严重疾病的蜱传病原体。",
      ja: "ダニ暴露歴のある犬に必須のパネル。バベシア、エールリヒア、レプトスピラ——診断されなければ重篤な疾患を引き起こす3つの重要なダニ媒介病原体を同時検出。",
      vi: "Bộ xét nghiệm thiết yếu cho chó có tiền sử tiếp xúc với ve. Phát hiện đồng thời Babesia, Ehrlichia và Leptospira — ba mầm bệnh do ve truyền nguy hiểm có thể gây bệnh nặng nếu không được chẩn đoán kịp thời.",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "Babesia + Ehrlichia + Leptospira" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル", vi: "Mẫu" }, value: "Blood" },
      { label: { en: "Time", zh: "检测时间", ja: "時間", vi: "Thời gian" }, value: "< 60 min" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存", vi: "Bảo quản" }, value: "Room temp" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ", vi: "Loại xét nghiệm" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "Babesia, Ehrlichia, Leptospira" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ", vi: "Loại mẫu" }, value: "Whole blood" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間", vi: "Thời gian có kết quả" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件", vi: "Bảo quản" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Shelf Life", zh: "有效期", ja: "有効期限", vi: "Hạn sử dụng" }, value: "12 months" },
      { label: { en: "Chip Type", zh: "芯片类型", ja: "チップタイプ", vi: "Loại chip" }, value: "Single-use, closed system" },
    ],
    detectedTargets: [
      { en: "Babesia canis", zh: "犬巴贝斯虫", ja: "犬バベシア", vi: "Babesia canis" },
      { en: "Ehrlichia canis", zh: "犬艾利希体", ja: "犬エールリヒア", vi: "Ehrlichia canis" },
      { en: "Leptospira spp.", zh: "钩端螺旋体", ja: "レプトスピラ", vi: "Leptospira spp." },
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
      vi: "Chip xét nghiệm ba tác nhân hô hấp FHV-FCV-Mycoplasma ở mèo",
    },
    tagline: {
      en: "Respiratory symptom screening for herpesvirus, calicivirus, and mycoplasma.",
      zh: "不明呼吸道症状筛查：疱疹病毒、杯状病毒、支原体。",
      ja: "呼吸器症状スクリーニング：ヘルペスウイルス、カリシウイルス、マイコプラズマ。",
      vi: "Sàng lọc triệu chứng hô hấp đối với virus herpes, calicivirus và mycoplasma.",
    },
    description: {
      en: "Designed for cats with unexplained respiratory symptoms. Detects Feline Herpesvirus (FHV), Feline Calicivirus (FCV), and Feline Mycoplasma in a single test, covering the most common causes of upper respiratory infections in cats.",
      zh: "专为不明原因呼吸道症状猫只设计。一次检测同时识别猫疱疹病毒(FHV)、猫杯状病毒(FCV)和猫支原体，覆盖猫上呼吸道感染最常见病因。",
      ja: "原因不明の呼吸器症状を呈する猫用に設計。猫ヘルペスウイルス(FHV)、猫カリシウイルス(FCV)、猫マイコプラズマを1回の検査で同時検出し、猫の上気道感染症の最も一般的な原因をカバー。",
      vi: "Được thiết kế cho mèo có triệu chứng hô hấp chưa rõ nguyên nhân. Phát hiện Virus herpes ở mèo (FHV), Calicivirus ở mèo (FCV) và Mycoplasma ở mèo trong một lần xét nghiệm, bao phủ các nguyên nhân phổ biến nhất gây nhiễm trùng đường hô hấp trên ở mèo.",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "FHV + FCV + Mycoplasma" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル", vi: "Mẫu" }, value: "Oronasal swab" },
      { label: { en: "Time", zh: "检测时间", ja: "時間", vi: "Thời gian" }, value: "< 60 min" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存", vi: "Bảo quản" }, value: "Room temp" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ", vi: "Loại xét nghiệm" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "FHV, FCV, Mycoplasma felis" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ", vi: "Loại mẫu" }, value: "Oronasal swab" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間", vi: "Thời gian có kết quả" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件", vi: "Bảo quản" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Shelf Life", zh: "有效期", ja: "有効期限", vi: "Hạn sử dụng" }, value: "12 months" },
      { label: { en: "Chip Type", zh: "芯片类型", ja: "チップタイプ", vi: "Loại chip" }, value: "Single-use, closed system" },
    ],
    detectedTargets: [
      { en: "Feline Herpesvirus (FHV-1)", zh: "猫疱疹病毒 (FHV-1)", ja: "猫ヘルペスウイルス (FHV-1)", vi: "Virus herpes ở mèo (FHV-1)" },
      { en: "Feline Calicivirus (FCV)", zh: "猫杯状病毒 (FCV)", ja: "猫カリシウイルス (FCV)", vi: "Calicivirus ở mèo (FCV)" },
      { en: "Mycoplasma felis", zh: "猫支原体", ja: "猫マイコプラズマ", vi: "Mycoplasma felis" },
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
      vi: "Chip xét nghiệm ba tác nhân sàng lọc FeLV-FIV-FPV ở mèo",
    },
    tagline: {
      en: "Routine health screening for leukemia, immunodeficiency, and panleukopenia.",
      zh: "常规体检筛查：白血病、免疫缺陷、猫瘟。",
      ja: "定期健康スクリーニング：白血病、免疫不全、汎白血球減少症。",
      vi: "Sàng lọc sức khỏe định kỳ đối với bệnh bạch cầu, suy giảm miễn dịch và giảm bạch cầu.",
    },
    description: {
      en: "Essential screening panel for shelter intake and routine health checks. Detects Feline Leukemia Virus (FeLV), Feline Immunodeficiency Virus (FIV), and Feline Panleukopenia Virus (FPV) — the three most critical infectious diseases in cats.",
      zh: "收容所入所筛查和常规体检的必备检测面板。检测猫白血病病毒(FeLV)、猫免疫缺陷病毒(FIV)和猫瘟病毒(FPV)——猫最重要的三种传染病。",
      ja: "シェルター入所スクリーニングと定期健康診断に必須のパネル。猫白血病ウイルス(FeLV)、猫免疫不全ウイルス(FIV)、猫パルボウイルス(FPV)——猫の最も重要な3つの感染症を検出。",
      vi: "Bộ xét nghiệm sàng lọc thiết yếu cho tiếp nhận tại trại cứu hộ và kiểm tra sức khỏe định kỳ. Phát hiện Virus gây bệnh bạch cầu ở mèo (FeLV), Virus gây suy giảm miễn dịch ở mèo (FIV) và Virus gây bệnh giảm bạch cầu ở mèo (FPV) — ba bệnh truyền nhiễm nguy hiểm nhất ở mèo.",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "FeLV + FIV + FPV" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル", vi: "Mẫu" }, value: "Blood" },
      { label: { en: "Time", zh: "检测时间", ja: "時間", vi: "Thời gian" }, value: "< 60 min" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存", vi: "Bảo quản" }, value: "Room temp" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ", vi: "Loại xét nghiệm" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "FeLV, FIV, FPV" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ", vi: "Loại mẫu" }, value: "Whole blood" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間", vi: "Thời gian có kết quả" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件", vi: "Bảo quản" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Shelf Life", zh: "有效期", ja: "有効期限", vi: "Hạn sử dụng" }, value: "12 months" },
      { label: { en: "Chip Type", zh: "芯片类型", ja: "チップタイプ", vi: "Loại chip" }, value: "Single-use, closed system" },
    ],
    detectedTargets: [
      { en: "Feline Leukemia Virus (FeLV)", zh: "猫白血病病毒 (FeLV)", ja: "猫白血病ウイルス (FeLV)", vi: "Virus gây bệnh bạch cầu ở mèo (FeLV)" },
      { en: "Feline Immunodeficiency Virus (FIV)", zh: "猫免疫缺陷病毒 (FIV)", ja: "猫免疫不全ウイルス (FIV)", vi: "Virus gây suy giảm miễn dịch ở mèo (FIV)" },
      { en: "Feline Panleukopenia Virus (FPV)", zh: "猫瘟病毒 (FPV)", ja: "猫パルボウイルス (FPV)", vi: "Virus gây bệnh giảm bạch cầu ở mèo (FPV)" },
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
      vi: "Chip xét nghiệm bộ ba Cúm A/B + SARS-CoV-2",
    },
    tagline: {
      en: "Rapid differentiation of Influenza A, Influenza B, and SARS-CoV-2 in a single test.",
      zh: "一次检测快速区分甲型流感、乙型流感和新冠病毒。",
      ja: "1回の検査でインフルエンザA型、B型、SARS-CoV-2を迅速に鑑別。",
      vi: "Phân biệt nhanh Cúm A, Cúm B và SARS-CoV-2 trong một lần xét nghiệm.",
    },
    description: {
      en: "Designed for respiratory symptom triage in clinical and border control settings. Simultaneously detects Influenza A virus, Influenza B virus, and SARS-CoV-2, enabling rapid differential diagnosis and appropriate treatment decisions.",
      zh: "专为临床和口岸防控场景中的呼吸道症状分诊设计。同时检测甲型流感病毒、乙型流感病毒和新冠病毒(SARS-CoV-2)，实现快速鉴别诊断和精准治疗决策。",
      ja: "臨床および国境管理における呼吸器症状トリアージ用に設計。A型インフルエンザ、B型インフルエンザ、SARS-CoV-2を同時検出し、迅速な鑑別診断と適切な治療判断を可能にします。",
      vi: "Được thiết kế để phân loại triệu chứng hô hấp tại cơ sở y tế và kiểm soát biên giới. Phát hiện đồng thời virus Cúm A, virus Cúm B và SARS-CoV-2, giúp chẩn đoán phân biệt nhanh chóng và đưa ra quyết định điều trị phù hợp.",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "Flu A + Flu B + SARS-CoV-2" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル", vi: "Mẫu" }, value: "Nasal swab" },
      { label: { en: "Time", zh: "检测时间", ja: "時間", vi: "Thời gian" }, value: "< 60 min" },
      { label: { en: "Use", zh: "应用场景", ja: "用途", vi: "Công dụng" }, value: "Clinical / Border" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ", vi: "Loại xét nghiệm" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "Influenza A, Influenza B, SARS-CoV-2" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ", vi: "Loại mẫu" }, value: "Nasopharyngeal swab" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間", vi: "Thời gian có kết quả" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件", vi: "Bảo quản" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Application", zh: "应用领域", ja: "用途", vi: "Ứng dụng" }, value: "Human clinical diagnostics, border control, epidemic prevention" },
    ],
    detectedTargets: [
      { en: "Influenza A Virus", zh: "甲型流感病毒", ja: "A型インフルエンザウイルス", vi: "Virus Cúm A" },
      { en: "Influenza B Virus", zh: "乙型流感病毒", ja: "B型インフルエンザウイルス", vi: "Virus Cúm B" },
      { en: "SARS-CoV-2", zh: "新型冠状病毒 (SARS-CoV-2)", ja: "SARS-CoV-2", vi: "SARS-CoV-2" },
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
      vi: "Chip xét nghiệm bộ ba hô hấp Mycoplasma + RSV + Adenovirus",
    },
    tagline: {
      en: "Respiratory pathogen panel for Mycoplasma pneumoniae, RSV, and Adenovirus.",
      zh: "呼吸道病原体检测：肺炎支原体、合胞病毒、腺病毒。",
      ja: "呼吸器病原体パネル：マイコプラズマ肺炎、RSウイルス、アデノウイルス。",
      vi: "Bộ xét nghiệm tác nhân gây bệnh hô hấp cho Mycoplasma pneumoniae, RSV và Adenovirus.",
    },
    description: {
      en: "Comprehensive respiratory pathogen panel targeting three common causes of pneumonia and upper respiratory infections. Ideal for pediatric clinics and hospitals where rapid differentiation drives treatment decisions.",
      zh: "全面的呼吸道病原体检测面板，针对肺炎和上呼吸道感染的三种常见病因。特别适用于儿科诊所和医院，快速鉴别指导治疗决策。",
      ja: "肺炎および上気道感染症の3つの一般的な原因を対象とする包括的な呼吸器病原体パネル。迅速な鑑別が治療方針の決定に直結する小児科クリニックや病院に最適。",
      vi: "Bộ xét nghiệm tác nhân gây bệnh hô hấp toàn diện nhắm đến ba nguyên nhân phổ biến gây viêm phổi và nhiễm trùng đường hô hấp trên. Lý tưởng cho phòng khám nhi và bệnh viện, nơi việc phân biệt nhanh giúp định hướng quyết định điều trị.",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "M.pneumoniae + RSV + Adeno" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル", vi: "Mẫu" }, value: "Nasal swab" },
      { label: { en: "Time", zh: "检测时间", ja: "時間", vi: "Thời gian" }, value: "< 60 min" },
      { label: { en: "Use", zh: "应用场景", ja: "用途", vi: "Công dụng" }, value: "Clinical" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ", vi: "Loại xét nghiệm" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "Mycoplasma pneumoniae, RSV, Adenovirus" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ", vi: "Loại mẫu" }, value: "Nasopharyngeal swab" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間", vi: "Thời gian có kết quả" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件", vi: "Bảo quản" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Application", zh: "应用领域", ja: "用途", vi: "Ứng dụng" }, value: "Human clinical diagnostics, pediatrics" },
    ],
    detectedTargets: [
      { en: "Mycoplasma pneumoniae", zh: "肺炎支原体", ja: "マイコプラズマ肺炎", vi: "Mycoplasma pneumoniae" },
      { en: "Respiratory Syncytial Virus (RSV)", zh: "呼吸道合胞病毒 (RSV)", ja: "RSウイルス", vi: "Virus hợp bào hô hấp (RSV)" },
      { en: "Adenovirus", zh: "腺病毒", ja: "アデノウイルス", vi: "Adenovirus" },
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
      vi: "Chip xét nghiệm bộ ba bệnh lây truyền qua đường tình dục (STI) Chlamydia + Ureaplasma + Gonorrhea",
    },
    tagline: {
      en: "Sexually transmitted infection screening: Chlamydia, Ureaplasma, and Gonorrhea.",
      zh: "性传播感染筛查：沙眼衣原体、解脲脲原体、淋球菌。",
      ja: "性感染症スクリーニング：クラミジア、ウレアプラズマ、淋菌。",
      vi: "Sàng lọc bệnh lây truyền qua đường tình dục: Chlamydia, Ureaplasma và Gonorrhea.",
    },
    description: {
      en: "Point-of-care STI screening panel for three of the most prevalent sexually transmitted pathogens. Enables rapid, confidential testing in clinical settings without sending samples to reference laboratories.",
      zh: "针对三种最常见性传播病原体的现场检测面板。在临床环境中实现快速、保密的检测，无需将样本送至参考实验室。",
      ja: "最も一般的な3つの性感染病原体を対象としたポイントオブケアSTIスクリーニングパネル。参照検査室へのサンプル送付なしに、臨床環境で迅速かつ秘密厳守の検査を実現。",
      vi: "Bộ xét nghiệm sàng lọc STI tại chỗ cho ba trong số các tác nhân lây truyền qua đường tình dục phổ biến nhất. Cho phép xét nghiệm nhanh chóng, bảo mật tại cơ sở lâm sàng mà không cần gửi mẫu đến phòng xét nghiệm tham chiếu.",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "CT + UU + NG" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル", vi: "Mẫu" }, value: "Swab" },
      { label: { en: "Time", zh: "检测时间", ja: "時間", vi: "Thời gian" }, value: "< 60 min" },
      { label: { en: "Use", zh: "应用场景", ja: "用途", vi: "Công dụng" }, value: "Clinical" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ", vi: "Loại xét nghiệm" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "Chlamydia trachomatis, Ureaplasma urealyticum, Neisseria gonorrhoeae" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ", vi: "Loại mẫu" }, value: "Urogenital swab" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間", vi: "Thời gian có kết quả" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件", vi: "Bảo quản" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Application", zh: "应用领域", ja: "用途", vi: "Ứng dụng" }, value: "Human clinical diagnostics, STI screening" },
    ],
    detectedTargets: [
      { en: "Chlamydia trachomatis (CT)", zh: "沙眼衣原体 (CT)", ja: "クラミジア・トラコマティス (CT)", vi: "Chlamydia trachomatis (CT)" },
      { en: "Ureaplasma urealyticum (UU)", zh: "解脲脲原体 (UU)", ja: "ウレアプラズマ・ウレアリティクム (UU)", vi: "Ureaplasma urealyticum (UU)" },
      { en: "Neisseria gonorrhoeae (NG)", zh: "淋球菌 (NG)", ja: "淋菌 (NG)", vi: "Neisseria gonorrhoeae (NG)" },
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
      vi: "Chip xét nghiệm dịch tả lợn châu Phi (ASF)",
    },
    tagline: {
      en: "Field-deployable ASF detection for livestock disease control.",
      zh: "现场部署的非洲猪瘟检测，用于畜牧疫病防控。",
      ja: "畜産疾病管理のための現場展開可能なASF検出。",
      vi: "Phát hiện ASF triển khai tại hiện trường để kiểm soát dịch bệnh vật nuôi.",
    },
    description: {
      en: "Critical tool for African Swine Fever surveillance and outbreak response. Enables on-site PCR-level detection at farms, checkpoints, and slaughterhouses without laboratory infrastructure, supporting rapid quarantine decisions.",
      zh: "非洲猪瘟监测和疫情应急的关键工具。可在养殖场、检查站和屠宰场实现现场PCR级检测，无需实验室基础设施，支持快速隔离决策。",
      ja: "アフリカ豚熱の監視と発生対応に不可欠なツール。農場、検問所、食肉処理場で実験室インフラなしにPCRレベルの現場検出を可能にし、迅速な検疫判断を支援。",
      vi: "Công cụ thiết yếu cho giám sát và ứng phó ổ dịch dịch tả lợn châu Phi. Cho phép phát hiện tại chỗ ở mức PCR tại trại lợn, chốt kiểm dịch và lò mổ mà không cần hạ tầng phòng xét nghiệm, hỗ trợ quyết định cách ly nhanh chóng.",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Target", zh: "检测靶标", ja: "ターゲット", vi: "Mục tiêu" }, value: "ASFV" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル", vi: "Mẫu" }, value: "Blood / Tissue" },
      { label: { en: "Time", zh: "检测时间", ja: "時間", vi: "Thời gian" }, value: "< 60 min" },
      { label: { en: "Use", zh: "应用场景", ja: "用途", vi: "Công dụng" }, value: "Field / Farm" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ", vi: "Loại xét nghiệm" }, value: "Real-time fluorescence PCR" },
      { label: { en: "Target", zh: "检测靶标", ja: "ターゲット", vi: "Mục tiêu" }, value: "African Swine Fever Virus (ASFV)" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ", vi: "Loại mẫu" }, value: "Whole blood, tissue homogenate" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間", vi: "Thời gian có kết quả" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件", vi: "Bảo quản" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Application", zh: "应用领域", ja: "用途", vi: "Ứng dụng" }, value: "Livestock disease control, border quarantine, farm surveillance" },
    ],
    detectedTargets: [
      { en: "African Swine Fever Virus (ASFV)", zh: "非洲猪瘟病毒 (ASFV)", ja: "アフリカ豚熱ウイルス (ASFV)", vi: "Virus dịch tả lợn châu Phi (ASFV)" },
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
      vi: "Chip xét nghiệm bệnh tai xanh ở lợn (PRRSV)",
    },
    tagline: {
      en: "PRRS virus detection for swine herd health monitoring.",
      zh: "猪蓝耳病毒检测，用于猪群健康监控。",
      ja: "豚群健康モニタリングのためのPRRSウイルス検出。",
      vi: "Phát hiện virus PRRS để giám sát sức khỏe đàn lợn.",
    },
    description: {
      en: "Porcine Reproductive and Respiratory Syndrome Virus (PRRSV) detection for swine farms. Supports herd health monitoring and outbreak control through rapid on-site nucleic acid testing.",
      zh: "猪繁殖与呼吸综合征病毒(PRRSV/蓝耳病)检测，用于养猪场猪群健康监控和疫情防控。通过现场快速核酸检测支持猪群健康管理。",
      ja: "養豚場における豚繁殖・呼吸器症候群ウイルス(PRRSV)検出。現場での迅速な核酸検査を通じて、豚群の健康管理と発生制御を支援。",
      vi: "Phát hiện virus gây hội chứng rối loạn sinh sản và hô hấp ở lợn (PRRSV) cho trại lợn. Hỗ trợ giám sát sức khỏe đàn và kiểm soát ổ dịch thông qua xét nghiệm axit nucleic nhanh tại chỗ.",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Target", zh: "检测靶标", ja: "ターゲット", vi: "Mục tiêu" }, value: "PRRSV" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル", vi: "Mẫu" }, value: "Blood / Serum" },
      { label: { en: "Time", zh: "检测时间", ja: "時間", vi: "Thời gian" }, value: "< 60 min" },
      { label: { en: "Use", zh: "应用场景", ja: "用途", vi: "Công dụng" }, value: "Farm / Vet Station" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ", vi: "Loại xét nghiệm" }, value: "Real-time fluorescence PCR" },
      { label: { en: "Target", zh: "检测靶标", ja: "ターゲット", vi: "Mục tiêu" }, value: "Porcine Reproductive and Respiratory Syndrome Virus (PRRSV)" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ", vi: "Loại mẫu" }, value: "Whole blood, serum" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間", vi: "Thời gian có kết quả" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件", vi: "Bảo quản" }, value: "Room temperature (15-30°C)" },
    ],
    detectedTargets: [
      { en: "PRRSV (Blue Ear Disease Virus)", zh: "猪蓝耳病毒 (PRRSV)", ja: "PRRSV（ブルーイヤー病ウイルス）", vi: "PRRSV (virus gây bệnh tai xanh)" },
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
      vi: "Chip xét nghiệm Quad định danh thịt bò-lợn-gà-vịt",
    },
    tagline: {
      en: "Simultaneously identify beef, pork, chicken, and duck meat species in a single test.",
      zh: "一次检测同时鉴定牛肉、猪肉、鸡肉和鸭肉。",
      ja: "1回の検査で牛肉、豚肉、鶏肉、鴨肉を同時鑑定。",
      vi: "Đồng thời định danh các loài thịt bò, thịt lợn, thịt gà và thịt vịt trong một lần xét nghiệm.",
    },
    description: {
      en: "Multi-species meat identification panel for food safety enforcement and Halal/Kosher compliance. Detects DNA of beef (cattle), pork (swine), chicken, and duck in processed or raw meat products, exposing adulteration and mislabeling within 60 minutes on-site.",
      zh: "多物种肉源鉴定面板，用于食品安全执法和清真/Halal合规检测。可在加工或生鲜肉制品中检测牛(黄牛)、猪、鸡、鸭的DNA，60分钟内现场揭露掺假和错标。",
      ja: "食品安全法執行およびハラール/コーシャー準拠のための多種肉源鑑定パネル。加工肉または生肉製品中の牛、豚、鶏、鴨のDNAを検出し、60分以内に現場で偽装・不正表示を暴露。",
      vi: "Bộ xét nghiệm định danh nhiều loài thịt phục vụ thực thi an toàn thực phẩm và tuân thủ Halal/Kosher. Phát hiện DNA của thịt bò (bò), thịt lợn (lợn), thịt gà và thịt vịt trong sản phẩm thịt đã qua chế biến hoặc tươi sống, giúp phát hiện hành vi pha trộn và ghi nhãn sai trong vòng 60 phút tại chỗ.",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "Beef + Pork + Chicken + Duck" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル", vi: "Mẫu" }, value: "Meat tissue" },
      { label: { en: "Time", zh: "检测时间", ja: "時間", vi: "Thời gian" }, value: "< 60 min" },
      { label: { en: "Use", zh: "应用场景", ja: "用途", vi: "Công dụng" }, value: "Food safety" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ", vi: "Loại xét nghiệm" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "Cattle (Bos taurus), Swine (Sus scrofa), Chicken (Gallus gallus), Duck (Anas)" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ", vi: "Loại mẫu" }, value: "Raw or processed meat tissue" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間", vi: "Thời gian có kết quả" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件", vi: "Bảo quản" }, value: "Room temperature (15-30°C)" },
      { label: { en: "Application", zh: "应用领域", ja: "用途", vi: "Ứng dụng" }, value: "Food safety, customs, Halal/Kosher certification, anti-adulteration" },
    ],
    detectedTargets: [
      { en: "Cattle / Beef (Bos taurus)", zh: "黄牛 / 牛肉", ja: "牛肉（ウシ）", vi: "Bò / Thịt bò (Bos taurus)" },
      { en: "Swine / Pork (Sus scrofa)", zh: "猪 / 猪肉", ja: "豚肉（ブタ）", vi: "Lợn / Thịt lợn (Sus scrofa)" },
      { en: "Chicken (Gallus gallus)", zh: "鸡 / 鸡肉", ja: "鶏肉（ニワトリ）", vi: "Gà (Gallus gallus)" },
      { en: "Duck (Anas)", zh: "鸭 / 鸭肉", ja: "鴨肉（アヒル）", vi: "Vịt (Anas)" },
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
      vi: "Chip xét nghiệm Quad nhận diện thịt cừu-thịt lợn-thịt gà-thịt vịt",
    },
    tagline: {
      en: "Detect lamb adulteration — simultaneously identify lamb, pork, chicken, and duck.",
      zh: "检测羊肉掺假——同时鉴定羊肉、猪肉、鸡肉和鸭肉。",
      ja: "羊肉偽装を検出——羊肉、豚肉、鶏肉、鴨肉を同時鑑定。",
      vi: "Phát hiện tình trạng pha trộn thịt cừu — đồng thời nhận diện thịt cừu, thịt lợn, thịt gà và thịt vịt.",
    },
    description: {
      en: "Specifically designed for lamb adulteration detection, a widespread food fraud issue. Identifies whether lamb products have been substituted or mixed with pork, chicken, or duck — common cheaper alternatives used in food fraud.",
      zh: "专为羊肉掺假检测设计，这是一个广泛的食品欺诈问题。鉴别羊肉产品是否被猪肉、鸡肉或鸭肉替代或掺混——这些是食品欺诈中常用的低价替代品。",
      ja: "広範な食品詐欺問題である羊肉偽装検出専用に設計。羊肉製品が豚肉、鶏肉、鴨肉——食品詐欺で一般的に使用される安価な代替品——で代替または混入されていないかを鑑定。",
      vi: "Được thiết kế chuyên biệt để phát hiện tình trạng pha trộn thịt cừu — một vấn nạn gian lận thực phẩm phổ biến. Nhận diện liệu sản phẩm thịt cừu có bị thay thế hoặc trộn với thịt lợn, thịt gà hay thịt vịt — những lựa chọn thay thế rẻ hơn thường được sử dụng trong gian lận thực phẩm.",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "Lamb + Pork + Chicken + Duck" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル", vi: "Mẫu" }, value: "Meat tissue" },
      { label: { en: "Time", zh: "检测时间", ja: "時間", vi: "Thời gian" }, value: "< 60 min" },
      { label: { en: "Use", zh: "应用场景", ja: "用途", vi: "Công dụng" }, value: "Food safety" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ", vi: "Loại xét nghiệm" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "Sheep (Ovis aries), Swine, Chicken, Duck" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ", vi: "Loại mẫu" }, value: "Raw or processed meat tissue" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間", vi: "Thời gian có kết quả" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件", vi: "Bảo quản" }, value: "Room temperature (15-30°C)" },
    ],
    detectedTargets: [
      { en: "Sheep / Lamb (Ovis aries)", zh: "绵羊 / 羊肉", ja: "羊肉（ヒツジ）", vi: "Cừu / Cừu non (Ovis aries)" },
      { en: "Swine / Pork", zh: "猪 / 猪肉", ja: "豚肉", vi: "Lợn / Thịt lợn" },
      { en: "Chicken", zh: "鸡 / 鸡肉", ja: "鶏肉", vi: "Gà" },
      { en: "Duck", zh: "鸭 / 鸭肉", ja: "鴨肉", vi: "Vịt" },
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
      vi: "Chip xét nghiệm Quad nhận diện thịt lừa-ngựa-lợn-vịt",
    },
    tagline: {
      en: "Detect donkey/horse meat substitution in pork and duck products.",
      zh: "检测猪肉和鸭肉制品中的驴肉/马肉替代。",
      ja: "豚肉・鴨肉製品中のロバ肉・馬肉代替を検出。",
      vi: "Phát hiện việc thay thế bằng thịt lừa/thịt ngựa trong các sản phẩm thịt lợn và thịt vịt.",
    },
    description: {
      en: "Targets fraud involving donkey and horse meat — species commonly involved in international meat scandals. Essential for customs enforcement and food regulatory agencies combating cross-border meat fraud.",
      zh: "针对涉及驴肉和马肉的欺诈——国际肉类丑闻中常涉及的物种。对于打击跨境肉类欺诈的海关执法和食品监管部门至关重要。",
      ja: "ロバ肉と馬肉に関わる詐欺を対象——国際的な食肉スキャンダルで頻繁に関与する種。越境食肉詐欺と戦う税関執行機関と食品規制当局に不可欠。",
      vi: "Nhắm đến gian lận liên quan đến thịt lừa và thịt ngựa — những loài thường xuất hiện trong các vụ bê bối thịt quốc tế. Cần thiết cho cơ quan thực thi hải quan và cơ quan quản lý thực phẩm trong công tác chống gian lận thịt xuyên biên giới.",
    },
    images: ["/images/products/chip-in-hand.png"],
    keySpecs: [
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "Donkey + Horse + Pork + Duck" },
      { label: { en: "Sample", zh: "样本类型", ja: "サンプル", vi: "Mẫu" }, value: "Meat tissue" },
      { label: { en: "Time", zh: "检测时间", ja: "時間", vi: "Thời gian" }, value: "< 60 min" },
      { label: { en: "Use", zh: "应用场景", ja: "用途", vi: "Công dụng" }, value: "Customs / Food safety" },
    ],
    fullSpecs: [
      { label: { en: "Test Type", zh: "检测类型", ja: "検査タイプ", vi: "Loại xét nghiệm" }, value: "Multiplex real-time fluorescence PCR" },
      { label: { en: "Targets", zh: "检测靶标", ja: "ターゲット", vi: "Tác nhân mục tiêu" }, value: "Donkey (Equus asinus), Horse (Equus caballus), Swine, Duck" },
      { label: { en: "Sample Type", zh: "样本类型", ja: "サンプルタイプ", vi: "Loại mẫu" }, value: "Raw or processed meat tissue" },
      { label: { en: "Time to Result", zh: "检测时间", ja: "検出時間", vi: "Thời gian có kết quả" }, value: "< 60 minutes" },
      { label: { en: "Storage", zh: "存储条件", ja: "保存条件", vi: "Bảo quản" }, value: "Room temperature (15-30°C)" },
    ],
    detectedTargets: [
      { en: "Donkey (Equus asinus)", zh: "驴", ja: "ロバ", vi: "Lừa (Equus asinus)" },
      { en: "Horse (Equus caballus)", zh: "马", ja: "馬", vi: "Ngựa (Equus caballus)" },
      { en: "Swine / Pork", zh: "猪 / 猪肉", ja: "豚肉", vi: "Lợn / Thịt lợn" },
      { en: "Duck", zh: "鸭 / 鸭肉", ja: "鴨肉", vi: "Vịt" },
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
