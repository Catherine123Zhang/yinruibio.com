import type { Locale } from "@/lib/i18n";

export interface MarketFAQ {
  q: Record<Locale, string>;
  a: Record<Locale, string>;
}

export interface Market {
  slug: string;
  countryCode: string;
  name: Record<Locale, string>;
  heroTitle: Record<Locale, string>;
  heroSubtitle: Record<Locale, string>;
  port: string;
  flagEmoji: string;
  marketOverview: Record<Locale, string>;
  regulatoryPathway: Record<Locale, string>;
  shippingLogistics: Record<Locale, string>;
  keyApplications: Record<Locale, string>;
  distributionModel: Record<Locale, string>;
  faqs: MarketFAQ[];
}

export const markets: Market[] = [
  // 1. United States
  {
    slug: "united-states",
    countryCode: "US",
    name: {
      en: "United States",
      zh: "美国",
      ja: "アメリカ",
    },
    heroTitle: {
      en: "Portable PCR Diagnostics for the U.S. Veterinary Market",
      zh: "面向美国兽医市场的便携式PCR诊断",
      ja: "米国獣医市場向けポータブルPCR診断",
    },
    heroSubtitle: {
      en: "PCR-accurate results in under 60 minutes for 30,000+ veterinary clinics, shelters, and livestock operations across the United States.",
      zh: "为美国30,000+家兽医诊所、动物收容所和畜牧场提供60分钟内的PCR级精准结果。",
      ja: "米国の30,000以上の動物病院、シェルター、畜産施設に60分以内のPCR精度の結果を提供。",
    },
    port: "Los Angeles / New York",
    flagEmoji: "US",
    marketOverview: {
      en: `The United States represents the world's largest veterinary diagnostics market, valued at over $3.5 billion annually. With more than 30,000 veterinary clinics, 3,500 animal shelters, and extensive livestock operations spanning beef cattle, dairy, poultry, and swine, the demand for rapid, accurate molecular diagnostics continues to grow at double-digit rates.

American pet owners spend an average of $400 per year on veterinary care per pet, and willingness to invest in advanced diagnostics is among the highest globally. The companion animal segment alone accounts for over 60% of veterinary diagnostic spending, driven by rising pet ownership rates that now exceed 66% of U.S. households.

The livestock sector presents equally compelling opportunities. USDA-APHIS monitors over 30 reportable animal diseases, and on-farm testing capabilities are increasingly demanded by producers seeking to reduce reliance on centralized reference laboratories. African Swine Fever preparedness, avian influenza surveillance, and bovine respiratory disease diagnostics represent high-priority testing needs.

The CarryOn Portable PCR Analyzer addresses a critical gap in the U.S. market: bringing gold-standard molecular diagnostics to the point of care without the $50,000+ equipment costs, cold chain requirements, and specialized training that traditional PCR systems demand.`,
      zh: `美国是全球最大的兽医诊断市场，年市值超过35亿美元。拥有超过30,000家兽医诊所、3,500个动物收容所，以及涵盖肉牛、奶牛、家禽和生猪的广泛畜牧业务，对快速、精准分子诊断的需求持续以两位数增长。

美国宠物主人每年平均为每只宠物花费400美元用于兽医护理，对先进诊断投资的意愿位居全球前列。仅伴侣动物领域就占兽医诊断支出的60%以上，这得益于现已超过66%美国家庭的宠物拥有率。

畜牧业同样充满机遇。USDA-APHIS监测超过30种可报告动物疾病，养殖者越来越需要农场现场检测能力，以减少对集中参考实验室的依赖。非洲猪瘟防备、禽流感监测和牛呼吸道疾病诊断代表了高优先级的检测需求。

CarryOn便携式PCR分析仪解决了美国市场的关键缺口：将金标准分子诊断带到护理现场，无需传统PCR系统所需的5万美元以上设备成本、冷链要求和专业培训。`,
      ja: `米国は世界最大の獣医診断市場であり、年間35億ドル以上の規模を誇ります。30,000以上の動物病院、3,500の動物シェルター、肉牛、乳牛、家禽、豚を含む広範な畜産事業を有し、迅速かつ正確な分子診断への需要は二桁成長を続けています。

米国のペットオーナーはペット1頭あたり年間平均400ドルを獣医ケアに費やし、先進診断への投資意欲は世界でもトップクラスです。コンパニオンアニマル分野だけで獣医診断支出の60%以上を占め、現在米国世帯の66%を超えるペット飼育率に支えられています。

畜産セクターも同様に大きな機会を提供します。USDA-APHISは30以上の届出対象動物疾病を監視しており、集中型参照検査室への依存を減らそうとする生産者から、農場での検査能力が求められています。

CarryOnポータブルPCRアナライザーは、米国市場の重要なギャップに対応します：従来のPCRシステムが必要とする5万ドル以上の機器コスト、コールドチェーン要件、専門的なトレーニングなしに、ゴールドスタンダードの分子診断をポイントオブケアにもたらします。`,
    },
    regulatoryPathway: {
      en: `### Regulatory Framework for Veterinary Diagnostics in the United States

The U.S. regulatory pathway for veterinary diagnostic devices involves multiple agencies depending on the intended use:

**USDA-APHIS Center for Veterinary Biologics (CVB):**
Veterinary diagnostic test kits used for regulatory purposes (disease surveillance, interstate transport, export certification) require USDA licensing. The CVB oversees product licensing, facility inspections, and lot release testing. The licensing process typically takes 12-24 months and requires demonstrated analytical sensitivity, specificity, and reproducibility through field validation studies.

**FDA Center for Veterinary Medicine (CVM):**
Diagnostic devices used in clinical veterinary practice fall under FDA oversight. While the FDA has historically exercised enforcement discretion for many veterinary diagnostics, the regulatory landscape is evolving toward more formal pathways. The CarryOn's CE certification and ISO 13485 quality management system provide a strong foundation for U.S. regulatory submissions.

**State Veterinary Diagnostic Laboratory Requirements:**
Individual states may have additional requirements for diagnostic testing. State veterinarians often mandate specific testing protocols for interstate movement of animals, and on-farm testing results may need confirmation by state-approved laboratories for regulatory decisions.

**Import Requirements:**
Medical devices entering the U.S. must comply with FDA import regulations, including prior notice, establishment registration, and device listing. The CarryOn's existing CE certification streamlines this process, as FDA recognizes ISO 13485 as a quality system standard.

Yinrui Bio works with experienced U.S. regulatory consultants to navigate the approval process and can support distributors with the necessary documentation for market entry.`,
      zh: `### 美国兽医诊断的监管框架

美国兽医诊断设备的监管途径涉及多个机构，具体取决于预期用途：

**USDA-APHIS 兽医生物制品中心 (CVB)：**
用于监管目的（疾病监测、州际运输、出口认证）的兽医诊断试剂盒需要USDA许可。CVB负责产品许可、设施检查和批次放行检测。许可流程通常需要12-24个月，需要通过现场验证研究证明分析灵敏度、特异性和重现性。

**FDA 兽医中心 (CVM)：**
用于临床兽医实践的诊断设备属于FDA监管范围。虽然FDA历来对许多兽医诊断产品行使执法自由裁量权，但监管格局正向更正式的途径演变。CarryOn的CE认证和ISO 13485质量管理体系为美国监管申报提供了坚实基础。

**州兽医诊断实验室要求：**
各州可能有额外的诊断检测要求。州兽医官通常对动物州际流动要求特定检测协议，农场现场检测结果可能需要经州批准实验室确认方可用于监管决策。

**进口要求：**
进入美国的医疗器械必须符合FDA进口法规，包括事先通知、机构注册和器械登记。CarryOn现有的CE认证简化了这一过程，因为FDA承认ISO 13485作为质量体系标准。

胤瑞生物与经验丰富的美国监管顾问合作，协助经销商完成市场准入所需文件。`,
      ja: `### 米国における獣医診断の規制枠組み

米国の獣医診断機器の規制経路は、使用目的に応じて複数の機関が関与します：

**USDA-APHIS 獣医生物学センター (CVB)：**
規制目的（疾病監視、州間輸送、輸出認証）で使用される獣医診断テストキットにはUSDAライセンスが必要です。CVBは製品ライセンス、施設検査、ロットリリーステストを監督します。ライセンスプロセスは通常12〜24ヶ月かかり、フィールドバリデーション研究を通じて分析感度、特異性、再現性の実証が必要です。

**FDA 獣医センター (CVM)：**
臨床獣医診療で使用される診断機器はFDAの監督下にあります。FDAは歴史的に多くの獣医診断に対して執行裁量を行使してきましたが、規制環境はより正式な経路に向けて進化しています。CarryOnのCE認証とISO 13485品質管理システムは、米国規制申請の強力な基盤を提供します。

**輸入要件：**
米国に入る医療機器はFDA輸入規制に準拠する必要があります。CarryOnの既存のCE認証はこのプロセスを簡素化します。

胤瑞バイオは経験豊富な米国規制コンサルタントと協力し、ディストリビューターの市場参入に必要な文書をサポートします。`,
    },
    shippingLogistics: {
      en: `### Shipping from Ningbo to the United States

**Primary Ports of Entry:** Los Angeles (LA/Long Beach) and New York/New Jersey (Newark)

**Ocean Freight:**
- Ningbo to Los Angeles: 12-15 days transit time (direct service)
- Ningbo to New York: 25-30 days transit time (via Panama Canal or transshipment)
- FCL (Full Container Load) and LCL (Less than Container Load) options available

**Air Freight:**
- Ningbo (NGB) to LAX or JFK: 2-3 days transit time
- Recommended for initial orders, demo units, and urgent shipments
- Express courier (DHL/FedEx/UPS) available for sample units

**Customs & Compliance:**
- FDA prior notice required for medical device imports
- Harmonized Tariff Schedule classification for diagnostic instruments
- Certificate of Free Sale and CE documentation facilitate customs clearance
- Incoterms: FOB Ningbo or CIF destination port available

**Warehousing & Distribution:**
- Room-temperature storage eliminates cold chain logistics costs
- Third-party logistics (3PL) partnerships available in Los Angeles and New Jersey
- Direct-to-distributor and drop-ship models supported

Yinrui Bio's export team handles all documentation including commercial invoices, packing lists, certificates of origin, and regulatory paperwork to ensure smooth customs clearance.`,
      zh: `### 从宁波发货至美国

**主要入境口岸：** 洛杉矶（LA/长滩）和纽约/新泽西（纽瓦克）

**海运：**
- 宁波至洛杉矶：12-15天运输时间（直达航线）
- 宁波至纽约：25-30天运输时间（经巴拿马运河或中转）
- 提供整柜(FCL)和拼柜(LCL)选项

**空运：**
- 宁波(NGB)至LAX或JFK：2-3天运输时间
- 推荐用于首批订单、演示设备和紧急出货

**海关与合规：**
- 医疗器械进口需FDA事先通知
- 诊断仪器的协调关税表分类
- 自由销售证书和CE文件有助于通关
- 贸易条款：FOB宁波或CIF目的港

**仓储与配送：**
- 室温存储消除冷链物流成本
- 洛杉矶和新泽西有第三方物流(3PL)合作

胤瑞生物出口团队处理所有文件，确保顺利通关。`,
      ja: `### 寧波から米国への出荷

**主要入港：** ロサンゼルス（LA/ロングビーチ）およびニューヨーク/ニュージャージー（ニューアーク）

**海上輸送：**
- 寧波からロサンゼルス：12〜15日の輸送時間（直行便）
- 寧波からニューヨーク：25〜30日の輸送時間
- FCL（コンテナ満載）およびLCL（混載）オプション利用可能

**航空輸送：**
- 寧波(NGB)からLAXまたはJFK：2〜3日の輸送時間
- 初回注文、デモユニット、緊急出荷に推奨

**通関・コンプライアンス：**
- 医療機器輸入にはFDA事前通知が必要
- CE文書が通関を円滑化
- 貿易条件：FOB寧波またはCIF仕向港

胤瑞バイオの輸出チームが全ての文書を処理し、スムーズな通関を確保します。`,
    },
    keyApplications: {
      en: `### Key Applications in the United States

**Companion Animal Diagnostics:**
With over 90 million dogs and 74 million cats in U.S. households, companion animal testing represents the largest opportunity. The CarryOn platform's canine panels (CDV-CPV-CCoV triple, respiratory triple, tick-borne triple) and feline panels (FHV-FCV-Mycoplasma respiratory, FeLV-FIV-FPV screening) address the most common diagnostic needs in small animal practice. Shelter medicine programs — performing intake screening at over 3,500 facilities nationwide — particularly benefit from the CarryOn's portability, room-temperature reagent storage, and fully automated workflow.

**Livestock Disease Surveillance:**
USDA-APHIS disease preparedness programs create demand for on-farm diagnostic capabilities. African Swine Fever (ASF) detection is a national priority, with USDA investing significantly in rapid detection infrastructure following global ASF outbreaks. The CarryOn's ASF and PRRSV test chips enable swine producers to conduct surveillance testing without sending samples to diagnostic laboratories. Bovine and poultry applications are under development.

**Wildlife and Conservation:**
Federal and state wildlife agencies increasingly use molecular diagnostics for disease monitoring in wild populations. Chronic Wasting Disease (CWD) in cervids, avian influenza in wild birds, and canine distemper in wildlife rehabilitation are active surveillance targets where portable PCR offers significant advantages over laboratory-based testing.

**Academic and Research:**
Over 30 AVMA-accredited veterinary schools in the U.S. represent both end users and opinion leaders. Teaching hospitals conducting research on infectious disease epidemiology, point-of-care diagnostics validation, and One Health initiatives are natural early adopters of portable PCR technology.`,
      zh: `### 美国市场主要应用

**伴侣动物诊断：**
美国家庭拥有超过9000万只狗和7400万只猫，伴侣动物检测代表最大机会。CarryOn平台的犬类面板和猫类面板满足小动物实践中最常见的诊断需求。全国3,500多家收容所的入所筛查项目特别受益于CarryOn的便携性、室温试剂存储和全自动工作流程。

**畜牧疾病监测：**
USDA-APHIS疾病防备计划创造了对农场现场诊断能力的需求。非洲猪瘟(ASF)检测是国家优先事项。CarryOn的ASF和PRRSV检测芯片使养猪生产者能够进行监测检测，无需将样本送至诊断实验室。

**野生动物与保护：**
联邦和州野生动物机构越来越多地使用分子诊断进行野生种群疾病监测。便携式PCR在此领域比实验室检测具有显著优势。

**学术与研究：**
美国30多所AVMA认可的兽医学校既是最终用户也是意见领袖，是便携式PCR技术的天然早期采用者。`,
      ja: `### 米国市場における主要アプリケーション

**コンパニオンアニマル診断：**
米国の家庭には9,000万頭以上の犬と7,400万頭以上の猫がおり、コンパニオンアニマル検査は最大の機会です。CarryOnプラットフォームの犬用パネルと猫用パネルは、小動物診療で最も一般的な診断ニーズに対応します。全国3,500以上の施設で入所スクリーニングを行うシェルター医療プログラムは、CarryOnの携帯性、室温試薬保存、全自動ワークフローの恩恵を特に受けます。

**家畜疾病監視：**
USDA-APHISの疾病準備プログラムは、農場での診断能力への需要を生み出します。アフリカ豚熱(ASF)検出は国家的優先事項です。

**野生動物と保全：**
連邦および州の野生動物機関は、野生個体群の疾病モニタリングに分子診断を活用しています。

**学術・研究：**
米国の30以上のAVMA認定獣医学校は、ポータブルPCR技術の自然な早期採用者です。`,
    },
    distributionModel: {
      en: `### Distribution & Partnership Opportunities in the United States

Yinrui Bio seeks strategic distribution partners across the United States to bring CarryOn portable PCR technology to veterinary clinics, shelters, and livestock operations.

**Ideal Distribution Partners:**
- Established veterinary diagnostic distributors with existing clinic relationships
- Veterinary supply companies seeking to expand their molecular diagnostics portfolio
- Regional distributors covering specific states or territories
- Veterinary group purchasing organizations (GPOs)

**Partnership Benefits:**
- Exclusive or semi-exclusive territory agreements available
- Competitive distributor pricing with strong margin potential
- Full technical training and marketing support
- Demo unit programs for clinic trials
- Co-branded marketing materials and clinical education resources
- Dedicated account manager and technical support line

**Market Entry Strategy:**
Our recommended approach begins with companion animal diagnostics in small animal clinics and shelter medicine programs, then expands to livestock and specialty applications. This phased approach allows distributors to build expertise and customer relationships before broadening the product portfolio.

Contact our international sales team to discuss partnership opportunities and receive detailed distributor pricing and territory availability.`,
      zh: `### 美国市场分销与合作机会

胤瑞生物寻求美国战略分销合作伙伴，将CarryOn便携式PCR技术带给兽医诊所、收容所和畜牧场。

**理想分销合作伙伴：**
- 与诊所有既定关系的兽医诊断经销商
- 希望扩展分子诊断产品组合的兽医供应公司
- 覆盖特定州或地区的区域经销商

**合作优势：**
- 可提供独家或半独家区域协议
- 有竞争力的经销商定价，利润空间大
- 全面技术培训和市场营销支持
- 演示设备计划
- 专属客户经理和技术支持

联系我们的国际销售团队，讨论合作机会。`,
      ja: `### 米国における販売・パートナーシップ機会

胤瑞バイオは、CarryOnポータブルPCR技術を動物病院、シェルター、畜産施設に届けるため、米国全土で戦略的販売パートナーを募集しています。

**理想的な販売パートナー：**
- 既存のクリニックとの関係を持つ獣医診断ディストリビューター
- 分子診断ポートフォリオの拡大を目指す獣医用品会社
- 特定の州や地域をカバーする地域ディストリビューター

**パートナーシップのメリット：**
- 独占または準独占テリトリー契約が可能
- 競争力のあるディストリビューター価格と高い利益率
- 完全な技術トレーニングとマーケティングサポート
- デモユニットプログラム

国際営業チームにお問い合わせください。`,
    },
    faqs: [
      {
        q: {
          en: "Does the CarryOn PCR analyzer require FDA approval for use in U.S. veterinary clinics?",
          zh: "CarryOn PCR分析仪在美国兽医诊所使用是否需要FDA批准？",
          ja: "CarryOn PCRアナライザーは米国の動物病院で使用するためにFDA承認が必要ですか？",
        },
        a: {
          en: "The regulatory pathway for veterinary diagnostics in the U.S. depends on the intended use. For clinical veterinary practice, FDA has historically exercised enforcement discretion for many veterinary diagnostic devices. The CarryOn holds CE certification and is manufactured under ISO 13485, providing a strong regulatory foundation. For USDA-regulated testing (interstate transport, export), additional USDA-APHIS licensing may be required. Yinrui Bio works with regulatory consultants to support U.S. market entry.",
          zh: "美国兽医诊断的监管途径取决于预期用途。对于临床兽医实践，FDA历来对许多兽医诊断设备行使执法自由裁量权。CarryOn持有CE认证，并在ISO 13485体系下生产。对于USDA监管的检测，可能需要额外的USDA-APHIS许可。胤瑞生物与监管顾问合作支持美国市场准入。",
          ja: "米国における獣医診断の規制経路は使用目的によって異なります。臨床獣医診療では、FDAは多くの獣医診断機器に対して執行裁量を行使してきました。CarryOnはCE認証を取得し、ISO 13485の下で製造されており、強力な規制基盤を提供します。",
        },
      },
      {
        q: {
          en: "How long does shipping take from China to the United States?",
          zh: "从中国运送到美国需要多长时间？",
          ja: "中国から米国への配送にはどのくらいかかりますか？",
        },
        a: {
          en: "Ocean freight from Ningbo to Los Angeles takes 12-15 days, and to New York 25-30 days. Air freight takes 2-3 days to either coast. Express courier (DHL/FedEx) is available for sample units and typically delivers within 3-5 business days. All CarryOn products store at room temperature, eliminating cold chain shipping requirements.",
          zh: "从宁波到洛杉矶的海运需要12-15天，到纽约需要25-30天。空运到两个海岸需要2-3天。所有CarryOn产品室温存储，无需冷链运输。",
          ja: "寧波からロサンゼルスへの海上輸送は12〜15日、ニューヨークへは25〜30日かかります。航空輸送はどちらの海岸にも2〜3日です。全てのCarryOn製品は室温保存で、コールドチェーン輸送は不要です。",
        },
      },
      {
        q: {
          en: "Can the CarryOn system be used for shelter intake screening in the U.S.?",
          zh: "CarryOn系统可以用于美国收容所入所筛查吗？",
          ja: "CarryOnシステムは米国のシェルター入所スクリーニングに使用できますか？",
        },
        a: {
          en: "Yes, the CarryOn is ideally suited for shelter intake screening. The Feline FeLV-FIV-FPV Screening Triple Test Chip and Canine CDV-CPV-CCoV Triple Test Chip provide PCR-level accuracy for the most critical intake screening tests. The device's portability, battery operation, and room-temperature reagent storage make it practical for high-volume shelter environments where traditional PCR infrastructure is not available.",
          zh: "是的，CarryOn非常适合收容所入所筛查。猫FeLV-FIV-FPV筛查三联检芯片和犬CDV-CPV-CCoV三联检芯片为最关键的入所筛查检测提供PCR级精度。",
          ja: "はい、CarryOnはシェルター入所スクリーニングに最適です。猫FeLV-FIV-FPVスクリーニング3連検査チップと犬CDV-CPV-CCoV 3連検査チップが、最も重要な入所スクリーニング検査にPCRレベルの精度を提供します。",
        },
      },
      {
        q: {
          en: "What is the price range for the CarryOn system in the U.S. market?",
          zh: "CarryOn系统在美国市场的价格范围是多少？",
          ja: "米国市場でのCarryOnシステムの価格帯はどのくらいですか？",
        },
        a: {
          en: "The CarryOn analyzer is positioned at $3,000-5,000 for the device, with per-test chip costs of $15-30 depending on the panel. This is significantly more affordable than traditional laboratory PCR systems ($50,000+) and delivers comparable accuracy. Distributor pricing and volume discounts are available. Contact us for a detailed quote.",
          zh: "CarryOn分析仪的设备定价为3,000-5,000美元，每次检测芯片费用为15-30美元。这比传统实验室PCR系统（5万美元以上）经济得多。经销商定价和批量折扣可用。",
          ja: "CarryOnアナライザーはデバイス価格3,000〜5,000ドル、テストチップコストはパネルにより1回15〜30ドルです。従来の検査室PCRシステム（5万ドル以上）と比べて大幅に手頃です。ディストリビューター価格とボリュームディスカウントをご用意しています。",
        },
      },
      {
        q: {
          en: "Does Yinrui Bio offer distributor partnerships in the United States?",
          zh: "胤瑞生物在美国提供经销商合作吗？",
          ja: "胤瑞バイオは米国でディストリビューターパートナーシップを提供していますか？",
        },
        a: {
          en: "Yes, we are actively seeking distribution partners across the United States. We offer exclusive and semi-exclusive territory agreements, competitive pricing, technical training, demo unit programs, and dedicated account management. Ideal partners include veterinary diagnostic distributors, veterinary supply companies, and regional distributors with established clinic relationships.",
          zh: "是的，我们正在积极寻求美国各地的分销合作伙伴。我们提供独家和半独家区域协议、有竞争力的定价、技术培训、演示设备计划和专属客户管理。",
          ja: "はい、米国全土でディストリビューションパートナーを積極的に募集しています。独占・準独占テリトリー契約、競争力のある価格設定、技術トレーニング、デモユニットプログラム、専任アカウント管理を提供しています。",
        },
      },
      {
        q: {
          en: "Which CarryOn test panels are most relevant for U.S. veterinary practices?",
          zh: "哪些CarryOn检测面板最适合美国兽医实践？",
          ja: "米国の獣医診療に最も関連するCarryOnテストパネルはどれですか？",
        },
        a: {
          en: "For small animal practices, the top panels are: Canine CDV-CPV-CCoV Triple (puppy screening), Feline FeLV-FIV-FPV Screening (shelter intake), Feline Respiratory Triple (upper respiratory infections), Canine Respiratory Triple (kennel cough), and Canine Tick-Borne Triple (Babesia, Ehrlichia, Leptospira). For livestock operations, the African Swine Fever and PRRSV chips are high priority. View the complete test chip catalog for all available panels.",
          zh: "对于小动物诊所，最热门的面板包括：犬CDV-CPV-CCoV三联检（幼犬筛查）、猫FeLV-FIV-FPV筛查（收容所入所）、猫呼吸道三联检、犬呼吸道三联检和犬蜱传疾病三联检。对于畜牧场，非洲猪瘟和PRRSV芯片是高优先级。",
          ja: "小動物診療では、犬CDV-CPV-CCoV 3連（子犬スクリーニング）、猫FeLV-FIV-FPVスクリーニング（シェルター入所）、猫呼吸器3連、犬呼吸器3連、犬ダニ媒介3連が人気パネルです。畜産では、アフリカ豚熱とPRRSVチップが高優先度です。",
        },
      },
    ],
  },

  // 2. Brazil
  {
    slug: "brazil",
    countryCode: "BR",
    name: { en: "Brazil", zh: "巴西", ja: "ブラジル" },
    heroTitle: {
      en: "Portable PCR Diagnostics for Brazil's Veterinary & Livestock Market",
      zh: "面向巴西兽医与畜牧市场的便携式PCR诊断",
      ja: "ブラジルの獣医・畜産市場向けポータブルPCR診断",
    },
    heroSubtitle: {
      en: "Serving Latin America's largest animal health market with field-deployable molecular diagnostics for cattle, poultry, swine, and companion animals.",
      zh: "以现场可部署的分子诊断服务拉美最大的动物健康市场，覆盖牛、禽、猪和伴侣动物。",
      ja: "牛、家禽、豚、コンパニオンアニマル向けのフィールド展開可能な分子診断で、ラテンアメリカ最大の動物健康市場にサービスを提供。",
    },
    port: "Santos",
    flagEmoji: "BR",
    marketOverview: {
      en: `Brazil is the world's second-largest veterinary market and the largest in Latin America. The country's animal health sector generates over $2 billion annually, driven by the world's largest commercial cattle herd (over 220 million head), the third-largest poultry industry, and a rapidly growing companion animal population exceeding 140 million pets.

The livestock sector dominates Brazil's agricultural economy, with beef and poultry exports representing critical national revenue. Brazil's Ministry of Agriculture (MAPA) maintains rigorous disease surveillance programs for foot-and-mouth disease, African Swine Fever, avian influenza, and bovine brucellosis. On-farm and field-deployable diagnostic capabilities are essential for maintaining Brazil's disease-free status and protecting export market access.

The companion animal market in Brazil has grown dramatically, with pet ownership reaching over 60% of households. Brazilian pet owners are increasingly investing in advanced veterinary care, and the number of veterinary clinics has grown to over 50,000 nationwide. Demand for point-of-care diagnostics — particularly PCR-based testing for canine parvovirus, ehrlichiosis, and leishmaniasis — continues to accelerate.

The CarryOn Portable PCR Analyzer is particularly well-suited for Brazil's vast geography, where many livestock operations and veterinary clinics are located far from reference laboratories. Battery-powered operation, room-temperature reagent storage, and rugged portability make it ideal for field deployment across Brazil's diverse agricultural regions.`,
      zh: `巴西是全球第二大兽医市场，也是拉丁美洲最大的市场。该国的动物健康行业年产值超过20亿美元，拥有全球最大的商业牛群（超过2.2亿头）、第三大家禽产业，以及超过1.4亿只宠物的快速增长的伴侣动物群体。

畜牧业主导巴西的农业经济，牛肉和禽肉出口是国家重要收入来源。巴西农业部(MAPA)对口蹄疫、非洲猪瘟、禽流感和牛布鲁氏菌病维持严格的疾病监测计划。

伴侣动物市场增长迅猛，宠物拥有率超过60%的家庭。兽医诊所已增至全国50,000多家。

CarryOn便携式PCR分析仪特别适合巴西广袤的地理环境，许多畜牧场和兽医诊所远离参考实验室。电池供电、室温试剂存储和坚固的便携性使其成为巴西多样化农业地区现场部署的理想选择。`,
      ja: `ブラジルは世界第2位の獣医市場であり、ラテンアメリカ最大の市場です。同国の動物健康セクターは年間20億ドル以上を生み出し、世界最大の商業牛群（2億2000万頭以上）、第3位の家禽産業、そして1億4000万頭を超える急速に成長するコンパニオンアニマル集団を有しています。

畜産セクターはブラジルの農業経済を支配しており、牛肉と家禽の輸出は重要な国家収入です。ブラジル農業省(MAPA)は口蹄疫、アフリカ豚熱、鳥インフルエンザ、牛ブルセラ症に対する厳格な疾病監視プログラムを維持しています。

コンパニオンアニマル市場は劇的に成長し、ペット飼育率は世帯の60%以上に達しています。動物病院は全国50,000以上に増加しています。

CarryOnポータブルPCRアナライザーは、多くの畜産施設や動物病院が参照検査室から遠く離れたブラジルの広大な地理に特に適しています。`,
    },
    regulatoryPathway: {
      en: `### Regulatory Pathway in Brazil

**MAPA (Ministry of Agriculture, Livestock and Supply):**
Veterinary diagnostic products in Brazil are regulated by MAPA. Registration requires submission of product technical documentation, analytical validation data, and quality management system certification. MAPA recognizes CE marking and ISO 13485 certification, which accelerates the registration process.

The registration process typically takes 6-12 months. MAPA may require Brazilian field validation studies for certain product claims. Yinrui Bio works with experienced Brazilian regulatory agents to manage the registration process.

**ANVISA:**
For diagnostic products that may have human health applications (such as zoonotic disease testing), ANVISA (National Health Surveillance Agency) oversight may apply. The CarryOn's pathogen detection panels for influenza and respiratory diseases may require ANVISA registration depending on the intended use claim.

**Import Requirements:**
Brazil imposes import duties and taxes (II, IPI, ICMS, PIS, COFINS) on medical device imports. Total landed cost including taxes can add 40-60% to the FOB price. Strategic bonded warehouse arrangements and Manaus Free Trade Zone options may reduce the tax burden for high-volume distributors.

CE certification and ISO 13485 documentation are recognized by Brazilian authorities, providing a streamlined pathway for CarryOn registration.`,
      zh: `### 巴西监管途径

**MAPA（农业、畜牧和供给部）：**
巴西的兽医诊断产品由MAPA监管。注册需要提交产品技术文件、分析验证数据和质量管理体系认证。MAPA承认CE标志和ISO 13485认证，这加速了注册过程。注册过程通常需要6-12个月。

**ANVISA：**
对于可能涉及人类健康的诊断产品（如人畜共患疾病检测），可能需要ANVISA（国家卫生监督局）的监管。

**进口要求：**
巴西对医疗器械进口征收进口关税和税费（II、IPI、ICMS、PIS、COFINS）。含税总到岸成本可能增加FOB价格的40-60%。

CE认证和ISO 13485文件获得巴西当局认可，为CarryOn注册提供了简化途径。`,
      ja: `### ブラジルにおける規制経路

**MAPA（農業・畜産・食料供給省）：**
ブラジルの獣医診断製品はMAPAによって規制されています。登録にはCEマーキングとISO 13485認証が認められ、プロセスが加速されます。登録プロセスは通常6〜12ヶ月かかります。

**ANVISA：**
人の健康に関わる診断製品にはANVISA（国家衛生監視庁）の監督が適用される場合があります。

**輸入要件：**
ブラジルは医療機器輸入に関税・税金を課します。税込みの総着岸コストはFOB価格の40〜60%増加する可能性があります。

CE認証とISO 13485文書はブラジル当局に認められており、CarryOn登録の合理化された経路を提供します。`,
    },
    shippingLogistics: {
      en: `### Shipping from Ningbo to Brazil

**Primary Port:** Santos (Sao Paulo region) — Latin America's largest port

**Ocean Freight:**
- Ningbo to Santos: 30-35 days transit time
- Direct services and transshipment via Singapore or Mediterranean available
- FCL and LCL options

**Customs Considerations:**
- Brazilian import process is complex with multiple tax layers
- Experienced customs broker essential
- MAPA clearance required for diagnostic products
- Room-temperature storage requirement simplifies logistics significantly

**Distribution Hub:**
- Sao Paulo serves as the primary distribution hub for all of Brazil
- Third-party logistics partnerships available for nationwide coverage

Yinrui Bio provides complete FOB Ningbo documentation and works with Brazilian import partners experienced in medical device logistics.`,
      zh: `### 从宁波发货至巴西

**主要港口：** 桑托斯（圣保罗地区）——拉美最大港口

**海运：**
- 宁波至桑托斯：30-35天运输时间
- 提供直达和经新加坡或地中海中转服务

**清关注意事项：**
- 巴西进口程序复杂，多层税收
- 室温存储要求大大简化物流

胤瑞生物提供完整的FOB宁波文件，与有医疗器械物流经验的巴西进口合作伙伴合作。`,
      ja: `### 寧波からブラジルへの出荷

**主要港：** サントス（サンパウロ地域）——ラテンアメリカ最大の港

**海上輸送：**
- 寧波からサントス：30〜35日の輸送時間
- 直行便およびシンガポールまたは地中海経由の積替え利用可能

**通関上の注意：**
- ブラジルの輸入プロセスは複雑で複数の税層があります
- 室温保存要件により物流が大幅に簡素化されます

胤瑞バイオはFOB寧波の完全な文書を提供します。`,
    },
    keyApplications: {
      en: `### Key Applications in Brazil

**Cattle Disease Surveillance:**
Brazil's 220+ million cattle herd requires extensive disease surveillance. Bovine brucellosis, tuberculosis, and foot-and-mouth disease testing are mandatory under MAPA regulations. The CarryOn platform enables on-farm testing that reduces reliance on centralized laboratories and accelerates disease response times across Brazil's vast rural areas.

**Poultry Health Monitoring:**
As the world's third-largest poultry producer, Brazil's poultry industry requires continuous avian influenza and Newcastle disease surveillance. Farm-level molecular testing capabilities help producers maintain Brazil's disease-free status critical for export market access.

**Swine Disease Control:**
African Swine Fever preparedness is a national priority. The CarryOn ASF test chip enables rapid on-farm screening at swine operations, supporting MAPA's surveillance programs and protecting Brazil's growing pork export industry.

**Companion Animal Diagnostics:**
With 140+ million pets and 50,000+ veterinary clinics, Brazil's companion animal market demands accessible molecular diagnostics. Canine parvovirus, ehrlichiosis (endemic in tropical Brazil), and leishmaniasis testing are high-priority applications. The CarryOn's affordability and ease of use make PCR diagnostics accessible to clinics across all economic segments.

**Aquaculture:**
Brazil's growing aquaculture industry, particularly tilapia farming, presents emerging opportunities for waterborne pathogen detection and fish disease surveillance.`,
      zh: `### 巴西市场主要应用

**牛病监测：** 巴西2.2亿+头牛群需要广泛的疾病监测。牛布鲁氏菌病、结核病和口蹄疫检测在MAPA法规下是强制性的。

**家禽健康监测：** 作为世界第三大家禽生产国，巴西需要持续的禽流感和新城疫监测。

**猪病防控：** 非洲猪瘟防备是国家优先事项。CarryOn ASF检测芯片支持MAPA的监测计划。

**伴侣动物诊断：** 拥有1.4亿+宠物和5万+兽医诊所，犬细小病毒、埃利希体病和利什曼病检测是高优先级应用。

**水产养殖：** 巴西不断增长的水产养殖业提供了新兴的水产病原体检测机会。`,
      ja: `### ブラジル市場における主要アプリケーション

**牛疾病監視：** ブラジルの2億2000万頭以上の牛群には広範な疾病監視が必要です。

**家禽健康モニタリング：** 世界第3位の家禽生産国として、ブラジルは継続的な鳥インフルエンザ・ニューカッスル病の監視が必要です。

**豚疾病管理：** アフリカ豚熱への備えは国家的優先事項です。

**コンパニオンアニマル診断：** 1億4000万頭以上のペットと5万以上の動物病院を持つブラジルでは、犬パルボウイルス、エールリヒア症、リーシュマニア症の検査が高優先度です。

**水産養殖：** ブラジルの成長する水産養殖業は、水産病原体検出の新たな機会を提供しています。`,
    },
    distributionModel: {
      en: `### Distribution & Partnership in Brazil

Yinrui Bio is seeking established veterinary and livestock diagnostics distributors in Brazil, ideally with MAPA registration experience.

**Partner Profile:**
- Veterinary diagnostics distributors with national or regional coverage
- Agricultural input companies serving livestock producers
- Veterinary laboratory chains seeking point-of-care expansion

**Support Provided:**
- MAPA registration guidance and documentation support
- Portuguese-language marketing materials
- Technical training in Portuguese
- Demo unit programs
- Competitive distributor margins

Contact us to explore distribution opportunities in Brazil and across Latin America.`,
      zh: `### 巴西分销与合作

胤瑞生物寻求在巴西有MAPA注册经验的兽医和畜牧诊断经销商。提供MAPA注册指导、葡语营销材料、技术培训和演示设备计划。联系我们探讨巴西及拉美分销机会。`,
      ja: `### ブラジルにおける販売・パートナーシップ

胤瑞バイオは、MAPA登録経験を持つブラジルの獣医・畜産診断ディストリビューターを募集しています。MAPA登録ガイダンス、ポルトガル語マーケティング資料、技術トレーニング、デモユニットプログラムを提供します。`,
    },
    faqs: [
      {
        q: { en: "Is the CarryOn registered with MAPA in Brazil?", zh: "CarryOn是否在巴西MAPA注册？", ja: "CarryOnはブラジルのMAPAに登録されていますか？" },
        a: { en: "Yinrui Bio is actively pursuing MAPA registration for the CarryOn platform in Brazil. Our CE certification and ISO 13485 quality management system are recognized by MAPA, which facilitates the registration process. We work with experienced Brazilian regulatory agents to manage the registration timeline, typically 6-12 months.", zh: "胤瑞生物正在积极推进CarryOn平台在巴西的MAPA注册。我们的CE认证和ISO 13485质量管理体系获得MAPA认可，有助于加速注册。", ja: "胤瑞バイオはブラジルでCarryOnプラットフォームのMAPA登録を積極的に推進しています。CE認証とISO 13485はMAPAに認められています。" },
      },
      {
        q: { en: "How long does shipping take from China to Santos, Brazil?", zh: "从中国运送到巴西桑托斯需要多长时间？", ja: "中国からブラジルのサントスまでの配送時間は？" },
        a: { en: "Ocean freight from Ningbo to Santos takes approximately 30-35 days. Air freight is available for urgent orders (3-5 days). All CarryOn products store at room temperature, eliminating cold chain shipping requirements that add cost and complexity in Brazil's warm climate.", zh: "从宁波到桑托斯的海运约需30-35天。空运可用于紧急订单（3-5天）。所有CarryOn产品室温存储。", ja: "寧波からサントスへの海上輸送は約30〜35日です。航空輸送は緊急注文に利用可能（3〜5日）。全製品は室温保存です。" },
      },
      {
        q: { en: "Which diseases are most important for testing in Brazil?", zh: "巴西最重要的检测疾病有哪些？", ja: "ブラジルで最も重要な検査対象疾病は？" },
        a: { en: "For livestock: African Swine Fever, PRRSV, bovine brucellosis, and avian influenza are priorities. For companion animals: canine parvovirus, ehrlichiosis (highly endemic in tropical regions), leishmaniasis, and feline FeLV/FIV are the most-requested tests. Our test chip development pipeline includes panels specifically addressing Brazilian market needs.", zh: "畜牧：非洲猪瘟、PRRSV、牛布鲁氏菌病和禽流感是重点。伴侣动物：犬细小病毒、埃利希体病、利什曼病和猫FeLV/FIV是最常需要的检测。", ja: "家畜：アフリカ豚熱、PRRSV、牛ブルセラ症、鳥インフルエンザが優先。コンパニオンアニマル：犬パルボウイルス、エールリヒア症、リーシュマニア症、猫FeLV/FIVが最も需要のある検査です。" },
      },
      {
        q: { en: "What are the import taxes for diagnostic equipment in Brazil?", zh: "巴西诊断设备的进口税是多少？", ja: "ブラジルにおける診断機器の輸入税はいくらですか？" },
        a: { en: "Brazil has multiple tax layers on imports: Import Duty (II), IPI, ICMS, PIS, and COFINS. Total taxes can add 40-60% to the FOB price. Medical diagnostic equipment may qualify for reduced rates under certain tariff classifications. We work with Brazilian import specialists to optimize the landed cost structure for our distributors.", zh: "巴西对进口有多层税收：进口关税(II)、IPI、ICMS、PIS和COFINS。总税费可增加FOB价格的40-60%。我们与巴西进口专家合作优化到岸成本结构。", ja: "ブラジルには輸入に対する複数の税層があります。合計税金はFOB価格の40〜60%増加する可能性があります。ブラジルの輸入専門家と協力してディストリビューターのランディングコスト構造を最適化します。" },
      },
      {
        q: { en: "Does the CarryOn work in Brazil's tropical climate?", zh: "CarryOn能在巴西的热带气候下工作吗？", ja: "CarryOnはブラジルの熱帯気候で使用できますか？" },
        a: { en: "Yes. The CarryOn is designed for field deployment in diverse environments, including tropical climates. The device operates at temperatures from 15-35 degrees C, and test chips store at room temperature (15-30 degrees C) with a 12-month shelf life. The closed-system design prevents environmental contamination, and the battery-powered operation eliminates the need for stable power infrastructure common in remote agricultural areas.", zh: "是的。CarryOn专为多样环境的现场部署设计，包括热带气候。设备在15-35°C温度下工作，芯片室温存储12个月有效期。", ja: "はい。CarryOnは熱帯気候を含む多様な環境でのフィールド展開用に設計されています。デバイスは15〜35°Cで動作し、チップは室温で12ヶ月の有効期限です。" },
      },
      {
        q: { en: "Can the CarryOn be used for meat species identification in Brazil?", zh: "CarryOn能用于巴西的肉类物种鉴定吗？", ja: "CarryOnはブラジルでの肉種鑑定に使用できますか？" },
        a: { en: "Yes. Our meat species identification quad test chips can detect beef, pork, chicken, duck, lamb, horse, and donkey DNA in processed or raw meat products within 60 minutes. This is relevant for Brazil's meat export industry, food safety enforcement, and Halal certification compliance — critical for maintaining access to Middle Eastern export markets.", zh: "是的。我们的肉源鉴定四联检芯片可在60分钟内检测加工或生鲜肉产品中的牛肉、猪肉、鸡肉、鸭肉等DNA。这与巴西肉类出口业和清真认证合规相关。", ja: "はい。肉種鑑定4連検査チップは60分以内に加工肉・生肉の牛、豚、鶏、鴨等のDNAを検出できます。ブラジルの食肉輸出業とハラール認証に関連します。" },
      },
    ],
  },

  // 3. India
  {
    slug: "india",
    countryCode: "IN",
    name: { en: "India", zh: "印度", ja: "インド" },
    heroTitle: {
      en: "Portable PCR Diagnostics for India's Veterinary & Livestock Sector",
      zh: "面向印度兽医与畜牧领域的便携式PCR诊断",
      ja: "インドの獣医・畜産分野向けポータブルPCR診断",
    },
    heroSubtitle: {
      en: "Empowering India's livestock disease surveillance and growing companion animal care with affordable, field-deployable molecular diagnostics.",
      zh: "以经济实惠、可现场部署的分子诊断赋能印度畜牧疾病监测和日益增长的伴侣动物护理。",
      ja: "手頃な価格でフィールド展開可能な分子診断で、インドの家畜疾病監視と成長するコンパニオンアニマルケアを支援。",
    },
    port: "Mumbai / Chennai",
    flagEmoji: "IN",
    marketOverview: {
      en: `India is home to the world's largest livestock population, with over 300 million cattle, 150 million goats, 75 million buffalo, and rapidly growing poultry and aquaculture industries. The veterinary diagnostics market in India is estimated at $500 million and growing at 12-15% annually, making it one of the fastest-growing markets globally.

The Indian government's National Animal Disease Control Programme (NADCP) has allocated over $1.5 billion for disease eradication, focusing on foot-and-mouth disease and brucellosis. This creates substantial demand for field-deployable diagnostic tools that can support nationwide surveillance campaigns in rural areas where laboratory infrastructure is limited.

India's companion animal market is also experiencing explosive growth. Urban pet ownership is rising rapidly, and India now has over 10,000 veterinary clinics. The pet care industry is growing at 20%+ annually, with increasing demand for advanced diagnostics that were previously unavailable outside major cities.

The CarryOn platform addresses India's unique challenge: delivering laboratory-quality molecular diagnostics across a vast, geographically diverse country where cold chain infrastructure and trained laboratory personnel are concentrated in urban centers. Battery-powered operation, room-temperature reagent storage, and zero-training requirements make it accessible to veterinary professionals at every level.`,
      zh: `印度拥有全球最大的畜牧群体，超过3亿头牛、1.5亿只山羊、7500万头水牛，以及快速增长的家禽和水产养殖业。印度兽医诊断市场估值5亿美元，年增长率12-15%，是全球增长最快的市场之一。

印度政府的国家动物疾病控制计划(NADCP)已拨款超过15亿美元用于疾病消灭。这为现场可部署的诊断工具创造了巨大需求。

CarryOn平台解决了印度的独特挑战：在冷链基础设施和训练有素的实验室人员集中在城市中心的广大国家，提供实验室级分子诊断。`,
      ja: `インドは世界最大の家畜群を有し、3億頭以上の牛、1億5000万頭の山羊、7500万頭の水牛、そして急速に成長する家禽・水産養殖業を擁しています。インドの獣医診断市場は5億ドルと推定され、年率12〜15%で成長しており、世界で最も急成長する市場の一つです。

CarryOnプラットフォームは、コールドチェーンインフラと訓練された検査室スタッフが都市部に集中するインドの独自の課題に対応します。`,
    },
    regulatoryPathway: {
      en: `### Regulatory Framework in India

**CDSCO (Central Drugs Standard Control Organisation):**
In vitro diagnostic devices in India are regulated under the Medical Devices Rules 2017. IVDs are classified into Classes A through D based on risk. Veterinary diagnostic devices typically fall under Class A or B, requiring registration with CDSCO through an authorized Indian agent.

**DAHD (Department of Animal Husbandry and Dairying):**
Veterinary-specific diagnostics used in government surveillance programs may require approval from DAHD. The department coordinates with state animal husbandry departments for disease surveillance and vaccination campaigns.

**BIS Certification:**
Certain electronic devices may require Bureau of Indian Standards (BIS) certification for import and sale. The CarryOn device's specifications are compatible with BIS requirements.

**Import Requirements:**
- Medical devices require import licenses from CDSCO
- CE-marked devices benefit from expedited review
- Basic customs duty ranges from 5-10% for diagnostic instruments
- GST at 12-18% applies to medical devices

Yinrui Bio partners with established Indian regulatory consultants to navigate CDSCO registration and facilitate market entry.`,
      zh: `### 印度监管框架

**CDSCO（中央药品标准控制组织）：**
印度的体外诊断设备受2017年医疗器械规则监管。兽医诊断设备通常属于A类或B类，需通过授权的印度代理商向CDSCO注册。

**DAHD（畜牧和乳业部）：**
政府监测计划中使用的兽医专用诊断可能需要DAHD批准。

**进口要求：**
- 医疗器械需要CDSCO进口许可
- CE标记设备享受加速审查
- 诊断仪器基本关税5-10%
- 医疗器械GST 12-18%

胤瑞生物与印度监管顾问合作推进市场准入。`,
      ja: `### インドにおける規制枠組み

**CDSCO（中央医薬品基準管理機構）：**
インドのIVDは2017年医療機器規則の下で規制されています。獣医診断機器は通常クラスAまたはBに分類され、インドの認定代理店を通じてCDSCOへの登録が必要です。

**輸入要件：**
- 医療機器にはCDSCO輸入ライセンスが必要
- CEマーク付き機器は迅速審査の恩恵あり
- 基本関税は診断機器で5〜10%

胤瑞バイオはインドの規制コンサルタントと提携し、市場参入を促進します。`,
    },
    shippingLogistics: {
      en: `### Shipping from Ningbo to India

**Primary Ports:** Mumbai (JNPT/Nhava Sheva) and Chennai

**Ocean Freight:**
- Ningbo to Mumbai: 12-16 days transit time
- Ningbo to Chennai: 10-14 days transit time
- Frequent direct services available

**Customs Process:**
- CDSCO import license required before shipment
- BIS certification may apply for electronic components
- Basic customs duty 5-10% + GST 12-18%
- Room-temperature storage simplifies inland logistics across India's diverse climate zones

**Distribution Considerations:**
- Mumbai and Delhi serve as primary distribution hubs
- Third-party cold chain infrastructure is limited in rural India — room-temperature storage is a critical advantage
- E-commerce and direct-to-clinic distribution models emerging

Yinrui Bio provides FOB Ningbo or CIF Indian port terms with complete documentation for Indian customs clearance.`,
      zh: `### 从宁波发货至印度

**主要港口：** 孟买（JNPT）和金奈
**海运：** 宁波至孟买12-16天，宁波至金奈10-14天
**关税：** 基本关税5-10% + GST 12-18%
**室温存储是关键优势** — 印度农村地区冷链基础设施有限

胤瑞生物提供FOB宁波或CIF印度港口条款。`,
      ja: `### 寧波からインドへの出荷

**主要港：** ムンバイ（JNPT）およびチェンナイ
**海上輸送：** 寧波からムンバイ12〜16日、チェンナイ10〜14日
**関税：** 基本関税5〜10% + GST 12〜18%
**室温保存が重要な優位性** — インド農村部はコールドチェーンインフラが限られています`,
    },
    keyApplications: {
      en: `### Key Applications in India

**Livestock Disease Surveillance:**
India's National Animal Disease Control Programme creates massive demand for field diagnostics. Foot-and-mouth disease, brucellosis, avian influenza, and African Swine Fever surveillance across India's 300+ million cattle and extensive poultry operations require portable testing solutions that work without laboratory infrastructure.

**Dairy Industry Quality Control:**
India is the world's largest milk producer. Testing for bovine tuberculosis, brucellosis, and mastitis-causing pathogens supports dairy quality and export compliance. The CarryOn's portability enables testing at dairy cooperatives and collection centers across rural India.

**Companion Animal Diagnostics:**
India's pet care industry is growing at 20%+ annually. Canine parvovirus, distemper, and tick-borne diseases (ehrlichiosis, babesiosis) are the most common diagnostic needs. The CarryOn makes PCR-level diagnostics accessible to the growing number of companion animal clinics in tier-2 and tier-3 cities.

**Poultry and Aquaculture:**
India's $30+ billion poultry industry and rapidly growing aquaculture sector require pathogen surveillance for avian influenza, Newcastle disease, and fish pathogens. On-farm testing reduces response times and supports export compliance.

**Government and NGO Programs:**
International organizations (FAO, OIE, World Bank) fund animal disease surveillance programs in India. Portable PCR platforms are increasingly specified in tender documents for these programs.`,
      zh: `### 印度市场主要应用

**畜牧疾病监测：** 印度国家动物疾病控制计划创造了对现场诊断的大量需求。
**乳业质量控制：** 印度是全球最大的牛奶生产国，需要检测牛结核、布鲁氏菌病等。
**伴侣动物诊断：** 印度宠物产业年增长20%+，犬细小病毒、犬瘟热和蜱传疾病检测需求最大。
**家禽和水产养殖：** 印度300亿美元以上的家禽产业需要病原体监测。
**政府和NGO项目：** 国际组织资助的动物疾病监测项目越来越多地在招标文件中指定便携式PCR。`,
      ja: `### インド市場における主要アプリケーション

**家畜疾病監視：** インドの国家動物疾病管理プログラムは、フィールド診断への大きな需要を生み出します。
**乳業品質管理：** インドは世界最大の牛乳生産国で、牛結核、ブルセラ症の検査が必要です。
**コンパニオンアニマル診断：** インドのペットケア産業は年率20%以上で成長しています。
**家禽・水産養殖：** インドの300億ドル以上の家禽産業は病原体監視が必要です。`,
    },
    distributionModel: {
      en: `### Distribution & Partnership in India

Yinrui Bio seeks distribution partners across India, with particular focus on veterinary diagnostics companies, agricultural input distributors, and government tender specialists.

**Ideal Partners:**
- Veterinary diagnostics distributors with pan-India or regional networks
- Agricultural input companies serving livestock farmers
- Companies with experience in government tender processes (DAHD, state animal husbandry departments)
- Veterinary pharmaceutical distributors seeking diagnostics expansion

**Support:** Technical training, Hindi and regional language marketing materials, demo unit programs, government tender support, and competitive pricing for the Indian market.

Contact us to discuss distribution opportunities across India.`,
      zh: `### 印度分销与合作

胤瑞生物寻求印度各地的分销合作伙伴，特别关注兽医诊断公司、农业投入品经销商和政府招标专家。提供技术培训、本地语言营销材料和有竞争力的印度市场定价。`,
      ja: `### インドにおける販売・パートナーシップ

胤瑞バイオはインド全土でディストリビューションパートナーを募集しています。技術トレーニング、現地語マーケティング資料、デモユニットプログラム、政府入札サポートを提供します。`,
    },
    faqs: [
      { q: { en: "Is the CarryOn suitable for use in rural India without reliable electricity?", zh: "CarryOn适合在没有可靠电力的印度农村使用吗？", ja: "CarryOnは安定した電力のないインドの農村部で使用できますか？" }, a: { en: "Yes. The CarryOn operates on a rechargeable lithium battery with approximately 3.5 hours of runtime — enough for multiple tests on a single charge. Combined with room-temperature reagent storage, it is specifically designed for field deployment where electricity and cold chain infrastructure are unreliable or unavailable.", zh: "是的。CarryOn使用可充电锂电池运行，续航约3.5小时——单次充电可完成多次测试。结合室温试剂存储，专为电力和冷链不可靠的现场部署设计。", ja: "はい。CarryOnは充電式リチウムバッテリーで約3.5時間稼働し、1回の充電で複数のテストが可能です。室温試薬保存と組み合わせて、電力やコールドチェーンが不安定な現場での使用に設計されています。" } },
      { q: { en: "What is the CDSCO registration process for the CarryOn in India?", zh: "CarryOn在印度的CDSCO注册流程是什么？", ja: "インドでのCarryOnのCDSCO登録プロセスは？" }, a: { en: "CDSCO registration for IVD devices involves filing through an authorized Indian agent, submitting technical documentation, quality system certificates (ISO 13485, CE), and analytical performance data. Class A/B devices typically take 3-6 months for registration. Yinrui Bio partners with experienced Indian regulatory consultants to manage this process.", zh: "CDSCO的IVD设备注册需要通过授权的印度代理提交技术文件和质量体系证书。A/B类设备通常需要3-6个月注册。胤瑞生物与印度监管顾问合作管理此过程。", ja: "CDSCOへのIVD機器登録は認定インドエージェントを通じて申請します。クラスA/B機器は通常3〜6ヶ月で登録完了します。胤瑞バイオはインドの規制コンサルタントと提携しています。" } },
      { q: { en: "How affordable is the CarryOn for the Indian market?", zh: "CarryOn对印度市场来说价格如何？", ja: "CarryOnはインド市場にとって手頃な価格ですか？" }, a: { en: "The CarryOn is positioned as one of the most affordable true PCR platforms globally, at $3,000-5,000 for the device. This is a fraction of the cost of traditional PCR systems ($50,000+). Per-test chip costs are also competitive, making molecular diagnostics accessible to clinics and livestock operations across India's diverse economic landscape.", zh: "CarryOn定位为全球最经济的真正PCR平台之一，设备价格3,000-5,000美元，远低于传统PCR系统（5万美元以上）。每次检测芯片成本也有竞争力。", ja: "CarryOnは最も手頃な真のPCRプラットフォームの一つで、デバイス価格は3,000〜5,000ドルです。従来のPCRシステム（5万ドル以上）のごく一部のコストです。" } },
      { q: { en: "Can the CarryOn be used in India's National Animal Disease Control Programme?", zh: "CarryOn能用于印度国家动物疾病控制计划吗？", ja: "CarryOnはインドの国家動物疾病管理プログラムで使用できますか？" }, a: { en: "Yes, the CarryOn's capabilities align well with NADCP's field diagnostic requirements. Its portability, battery operation, room-temperature reagents, and relevant test panels (brucellosis, ASF, avian flu) make it suitable for government surveillance programs. We can support partners with technical documentation for government tender submissions.", zh: "是的，CarryOn的功能与NADCP的现场诊断需求高度契合。其便携性、电池运行和相关检测面板使其适合政府监测计划。", ja: "はい、CarryOnの機能はNADCPのフィールド診断要件に合致しています。携帯性、バッテリー稼働、関連テストパネルは政府監視プログラムに適しています。" } },
      { q: { en: "What diseases are most commonly tested in Indian veterinary practice?", zh: "印度兽医实践中最常检测的疾病有哪些？", ja: "インドの獣医診療で最も一般的に検査される疾病は？" }, a: { en: "For livestock: foot-and-mouth disease, brucellosis, bovine tuberculosis, and avian influenza are priorities under NADCP. For companion animals: canine parvovirus, distemper, ehrlichiosis, babesiosis, and leptospirosis are the most common diagnostic needs, particularly in tropical and monsoon-affected regions.", zh: "畜牧：口蹄疫、布鲁氏菌病、牛结核和禽流感是NADCP下的优先事项。伴侣动物：犬细小病毒、犬瘟热、埃利希体病是最常见需求。", ja: "家畜：口蹄疫、ブルセラ症、牛結核、鳥インフルエンザがNADCPの優先事項。コンパニオンアニマル：犬パルボウイルス、ジステンパー、エールリヒア症が最も一般的です。" } },
      { q: { en: "Does Yinrui Bio support government tenders in India?", zh: "胤瑞生物支持印度政府招标吗？", ja: "胤瑞バイオはインドの政府入札をサポートしますか？" }, a: { en: "Yes. We provide comprehensive tender support including technical specifications documentation, compliance certificates, test performance data, and competitive pricing for government procurement. Our partners in India have successfully participated in state-level and national animal health program tenders.", zh: "是的。我们提供全面的招标支持，包括技术规格文件、合规证书、检测性能数据和政府采购竞争性定价。", ja: "はい。技術仕様書、コンプライアンス証明書、テスト性能データ、政府調達向け競争力のある価格設定など、包括的な入札サポートを提供します。" } },
    ],
  },

  // 4. Germany
  {
    slug: "germany",
    countryCode: "DE",
    name: { en: "Germany", zh: "德国", ja: "ドイツ" },
    heroTitle: { en: "Portable PCR Diagnostics for the German & European Veterinary Market", zh: "面向德国及欧洲兽医市场的便携式PCR诊断", ja: "ドイツ・欧州獣医市場向けポータブルPCR診断" },
    heroSubtitle: { en: "CE-certified portable molecular diagnostics for Europe's leading veterinary and livestock market, shipped directly from Ningbo to Hamburg.", zh: "CE认证的便携式分子诊断设备，直达欧洲领先的兽医和畜牧市场，从宁波直运至汉堡。", ja: "CE認証取得のポータブル分子診断、寧波からハンブルクへ直送、欧州をリードする獣医・畜産市場向け。" },
    port: "Hamburg",
    flagEmoji: "DE",
    marketOverview: { en: `Germany is Europe's largest veterinary diagnostics market and serves as the gateway for EU market access. The German veterinary sector is highly developed, with approximately 12,000 veterinary practices, 4,000 livestock veterinarians, and a strong tradition of evidence-based veterinary medicine that prioritizes molecular diagnostics.\n\nThe German pet population includes over 15 million cats, 10 million dogs, and millions of small mammals, birds, and reptiles. German pet owners are among the highest spenders on veterinary care in Europe, with strong demand for advanced diagnostic services including PCR testing.\n\nGermany's livestock sector is significant, particularly in pig and poultry production. The country experienced its first African Swine Fever outbreaks in 2020, dramatically increasing demand for field-deployable ASF diagnostics. Porcine diseases, avian influenza surveillance, and bovine respiratory disease testing are ongoing priorities.\n\nThe CarryOn's existing CE certification is a major advantage for German market entry, as it demonstrates compliance with EU safety and performance requirements. The EU In Vitro Diagnostic Regulation (IVDR) came into full effect in May 2022, and the CarryOn platform is well-positioned to meet its requirements through Yinrui Bio's ISO 13485-certified manufacturing.`, zh: `德国是欧洲最大的兽医诊断市场，也是进入欧盟市场的门户。德国兽医行业高度发达，约有12,000家兽医诊所和4,000名畜牧兽医。\n\n德国宠物数量包括1500万只猫和1000万只狗。德国宠物主人在欧洲兽医护理支出中位居前列。\n\n德国畜牧业尤其在猪和家禽生产方面非常重要。2020年首次爆发非洲猪瘟，大幅增加了对现场可部署ASF诊断的需求。\n\nCarryOn现有的CE认证是进入德国市场的主要优势。`, ja: `ドイツは欧州最大の獣医診断市場であり、EU市場アクセスのゲートウェイです。約12,000の動物病院と4,000人の畜産獣医を有する高度に発達した獣医セクターです。\n\nドイツのペット数は猫1,500万頭以上、犬1,000万頭以上を含みます。\n\nCarryOnの既存のCE認証はドイツ市場参入の大きな利点です。` },
    regulatoryPathway: { en: `### Regulatory Framework for Germany & the EU\n\n**CE Marking (Already Obtained):**\nThe CarryOn platform holds CE certification, demonstrating compliance with EU safety, health, and environmental protection standards. This is the primary market access requirement for medical devices in Germany and all EU member states.\n\n**EU IVDR (In Vitro Diagnostic Regulation 2017/746):**\nThe IVDR replaced the IVD Directive in May 2022. Under IVDR, veterinary IVDs are generally classified as Class A (low risk), requiring self-certification and technical documentation. The CarryOn's existing CE marking provides the foundation for IVDR compliance.\n\n**TierGesG (Animal Health Act):**\nGermany's Tiergesundheitsgesetz governs animal disease control. Diagnostic tests used for official disease surveillance (e.g., ASF, avian influenza) must meet specific performance standards approved by the Friedrich-Loeffler-Institut (FLI), Germany's federal research institute for animal health.\n\n**Import & Market Access:**\n- CE marking enables free circulation throughout the EU/EEA\n- No additional German-specific device registration required\n- Medical device import subject to standard EU customs duties (0-6.5%)\n- VAT at 19% applies`, zh: `### 德国及欧盟监管框架\n\n**CE标志（已获得）：** CarryOn平台持有CE认证，满足欧盟安全和健康标准。\n\n**EU IVDR：** 兽医IVD通常分为A类（低风险），需要自我认证。CarryOn现有的CE标志为IVDR合规提供基础。\n\n**TierGesG（动物健康法）：** 用于官方疾病监测的诊断测试需满足FLI批准的性能标准。\n\n**进口：** CE标志允许在整个EU/EEA自由流通。`, ja: `### ドイツおよびEUの規制枠組み\n\n**CEマーキング（取得済み）：** CarryOnプラットフォームはCE認証を取得しています。\n\n**EU IVDR：** 獣医IVDは一般的にクラスA（低リスク）に分類され、自己認証が必要です。\n\n**TierGesG（動物衛生法）：** 公式疾病監視に使用される診断テストはFLI承認の性能基準を満たす必要があります。` },
    shippingLogistics: { en: `### Shipping from Ningbo to Germany\n\n**Primary Port:** Hamburg — Europe's third-largest container port\n\n**Ocean Freight:**\n- Ningbo to Hamburg: 25-30 days transit time\n- Multiple direct services weekly\n- FCL and LCL options available\n\n**Customs & Import:**\n- CE-marked devices enter the EU with minimal customs friction\n- EU customs duties 0-6.5% for diagnostic instruments\n- VAT at 19% (reclaimable for commercial importers)\n- EORI number required for all EU importers\n\n**Distribution Hub:**\n- Hamburg serves as an ideal distribution hub for all of Northern and Central Europe\n- Well-connected by road, rail, and inland waterways to all EU member states\n- Room-temperature storage eliminates costly GDP-compliant cold chain logistics\n\nYinrui Bio offers FOB Ningbo, CIF Hamburg, and DDP (Delivered Duty Paid) terms for German distributors.`, zh: `### 从宁波发货至德国\n\n**主要港口：** 汉堡\n**海运：** 宁波至汉堡25-30天\n**关税：** EU关税0-6.5%，增值税19%（商业进口商可抵扣）\n\nCE标记设备进入EU海关摩擦最小。提供FOB宁波、CIF汉堡和DDP条款。`, ja: `### 寧波からドイツへの出荷\n\n**主要港：** ハンブルク\n**海上輸送：** 寧波からハンブルク25〜30日\n**関税：** EU関税0〜6.5%、VAT 19%\n\nCEマーク付き機器はEUへの通関が円滑です。FOB寧波、CIFハンブルク、DDPの取引条件を提供。` },
    keyApplications: { en: `### Key Applications in Germany\n\n**Companion Animal Diagnostics:**\nGermany's 25+ million pets drive strong demand for molecular diagnostics. Canine parvovirus, distemper, tick-borne diseases (particularly Borrelia, Babesia, and Anaplasma — prevalent across Central Europe), and feline respiratory infections represent key testing needs.\n\n**Livestock Disease Control:**\nAfrican Swine Fever surveillance is a national priority following wild boar outbreaks. The CarryOn ASF test chip supports farm-level screening and border zone surveillance. Avian influenza, PRRSV, and bovine respiratory disease panels address additional livestock diagnostic needs.\n\n**Food Safety & Meat Authentication:**\nGermany has strict food safety regulations. The CarryOn meat species identification chips support enforcement of EU labeling laws and detection of meat adulteration — a topic of heightened scrutiny since the 2013 European horsemeat scandal.\n\n**Wildlife and Conservation:**\nGermany's wildlife monitoring programs, particularly for ASF in wild boar populations, benefit from field-deployable PCR testing that enables rapid on-site confirmation during hunting and surveillance operations.`, zh: `### 德国市场主要应用\n\n**伴侣动物诊断：** 德国2500万+宠物驱动对分子诊断的强劲需求。\n**畜牧疾病控制：** 非洲猪瘟监测是国家优先事项。\n**食品安全与肉类鉴定：** 德国有严格的食品安全法规，肉源鉴定芯片支持EU标签法执行。\n**野生动物与保护：** 野猪ASF监测受益于现场PCR检测。`, ja: `### ドイツ市場における主要アプリケーション\n\n**コンパニオンアニマル診断：** ドイツの2,500万頭以上のペットが分子診断の強い需要を牽引します。\n**家畜疾病管理：** アフリカ豚熱監視は国家的優先事項です。\n**食品安全・肉種鑑定：** 厳格な食品安全規制下で肉種鑑定チップがEU表示法の執行を支援します。` },
    distributionModel: { en: `### Distribution & Partnership in Germany\n\nGermany is a strategic priority market for Yinrui Bio, serving as the EU gateway.\n\n**Ideal Partners:**\n- Established veterinary diagnostics distributors with pan-European reach\n- Medical device distributors serving veterinary laboratories\n- Agricultural supply companies with livestock farmer networks\n\n**EU Market Advantage:**\nA German distribution partner can serve the entire EU/EEA through CE marking — 27 EU member states plus Norway, Iceland, and Liechtenstein — from a single regulatory framework.\n\n**Support:** German-language marketing materials, CE/IVDR technical documentation, demo programs, and training support.\n\nContact us to discuss exclusive distribution partnerships for Germany and the EU.`, zh: `### 德国分销与合作\n\n德国是胤瑞生物的战略优先市场，作为EU门户。德国分销合作伙伴可通过CE标志服务整个EU/EEA的27个成员国。\n\n提供德语营销材料、CE/IVDR技术文件和培训支持。`, ja: `### ドイツにおける販売・パートナーシップ\n\nドイツは胤瑞バイオの戦略的優先市場であり、EUゲートウェイです。ドイツのディストリビューションパートナーはCEマーキングを通じてEU/EEA全体にサービスを提供できます。\n\nドイツ語マーケティング資料、CE/IVDR技術文書、トレーニングサポートを提供します。` },
    faqs: [
      { q: { en: "Does the CarryOn have CE certification for the EU market?", zh: "CarryOn是否持有EU市场的CE认证？", ja: "CarryOnはEU市場のCE認証を取得していますか？" }, a: { en: "Yes. The CarryOn Portable PCR Analyzer and its test chip reagent kits hold CE certification. The device is manufactured under ISO 13485 quality management system. This enables market access across all EU/EEA member states without additional country-specific registrations.", zh: "是的。CarryOn便携式PCR分析仪及其检测芯片试剂盒持有CE认证，设备在ISO 13485体系下生产。", ja: "はい。CarryOnポータブルPCRアナライザーとテストチップ試薬キットはCE認証を取得しています。ISO 13485品質管理システムの下で製造されています。" } },
      { q: { en: "How does the CarryOn comply with EU IVDR?", zh: "CarryOn如何符合EU IVDR？", ja: "CarryOnはEU IVDRにどのように準拠していますか？" }, a: { en: "Under EU IVDR 2017/746, veterinary IVDs are generally classified as Class A devices, requiring manufacturer self-certification and comprehensive technical documentation. The CarryOn's existing CE certification and ISO 13485 quality system provide the foundation for IVDR compliance. Yinrui Bio maintains current technical files and declarations of conformity.", zh: "根据EU IVDR，兽医IVD通常分为A类设备。CarryOn现有的CE认证和ISO 13485体系为IVDR合规提供基础。", ja: "EU IVDR 2017/746の下で、獣医IVDは一般的にクラスA機器に分類されます。CarryOnの既存のCE認証とISO 13485品質システムがIVDR準拠の基盤を提供します。" } },
      { q: { en: "What is the shipping time from Ningbo to Hamburg?", zh: "从宁波到汉堡的运输时间是多少？", ja: "寧波からハンブルクへの輸送時間は？" }, a: { en: "Ocean freight from Ningbo to Hamburg takes 25-30 days with multiple direct services available weekly. Air freight takes 3-5 days. Express courier (DHL) from China to Germany typically delivers within 3-4 business days for sample units.", zh: "宁波到汉堡的海运需25-30天，每周有多条直达航线。空运3-5天。", ja: "寧波からハンブルクへの海上輸送は25〜30日で、毎週複数の直行便があります。航空輸送は3〜5日です。" } },
      { q: { en: "Can the CarryOn be used for ASF surveillance in Germany?", zh: "CarryOn能用于德国的非洲猪瘟监测吗？", ja: "CarryOnはドイツのASF監視に使用できますか？" }, a: { en: "Yes. The CarryOn's African Swine Fever test chip provides field-deployable PCR detection that supports farm-level screening and wild boar surveillance programs. For official regulatory testing, results may need confirmation by FLI-approved reference laboratories, but the CarryOn provides critical rapid screening capability for immediate quarantine decisions.", zh: "是的。CarryOn的非洲猪瘟检测芯片提供现场可部署的PCR检测，支持农场级筛查和野猪监测计划。", ja: "はい。CarryOnのアフリカ豚熱テストチップは農場レベルのスクリーニングと野生イノシシ監視プログラムを支援するフィールド展開可能なPCR検出を提供します。" } },
      { q: { en: "Does Yinrui Bio seek exclusive EU distribution partners?", zh: "胤瑞生物是否寻求独家EU分销合作伙伴？", ja: "胤瑞バイオはEU独占販売パートナーを募集していますか？" }, a: { en: "Yes, we offer exclusive and semi-exclusive territory agreements for qualified EU distribution partners. A German-based partner can leverage CE marking to distribute across all 27 EU member states plus EEA countries. We provide comprehensive support including regulatory documentation, marketing materials in German and other EU languages, and technical training.", zh: "是的，我们为合格的EU分销合作伙伴提供独家和半独家区域协议。德国合作伙伴可利用CE标志在27个EU成员国分销。", ja: "はい、適格なEUディストリビューションパートナーに独占・準独占テリトリー契約を提供しています。ドイツを拠点とするパートナーはCEマーキングを活用してEU全27加盟国に販売できます。" } },
      { q: { en: "What languages does the CarryOn interface support?", zh: "CarryOn界面支持哪些语言？", ja: "CarryOnのインターフェースはどの言語をサポートしていますか？" }, a: { en: "The CarryOn device features a touchscreen interface with support for English and Chinese. Additional language options including German are available through firmware updates. All test results are displayed with universal symbols and numerical values that do not require language-specific interpretation.", zh: "CarryOn设备的触摸屏界面支持英文和中文。通过固件更新可提供包括德语在内的其他语言选项。", ja: "CarryOnのタッチスクリーンインターフェースは英語と中国語をサポートしています。ファームウェアアップデートによりドイツ語を含む追加言語オプションが利用可能です。" } },
    ],
  },

  // 5. Japan
  {
    slug: "japan",
    countryCode: "JP",
    name: { en: "Japan", zh: "日本", ja: "日本" },
    heroTitle: { en: "Portable PCR Diagnostics for Japan's Veterinary Market", zh: "面向日本兽医市场的便携式PCR诊断", ja: "日本の獣医市場向けポータブルPCR診断" },
    heroSubtitle: { en: "Advanced molecular diagnostics for Japan's premium companion animal care and livestock disease surveillance.", zh: "为日本高端伴侣动物护理和畜牧疾病监测提供先进分子诊断。", ja: "日本のプレミアムコンパニオンアニマルケアと畜産疾病監視のための先進分子診断。" },
    port: "Yokohama",
    flagEmoji: "JP",
    marketOverview: { en: `Japan is Asia's most advanced veterinary diagnostics market, characterized by high per-pet spending, a strong culture of companion animal care, and rigorous regulatory standards. Japan's 15,000+ veterinary clinics serve over 18 million pets (approximately 9 million dogs and 9 million cats), with annual veterinary spending exceeding $4 billion.\n\nJapanese pet owners are among the world's highest spenders on veterinary care, with strong demand for advanced diagnostics and a willingness to pay premium prices for gold-standard testing. The companion animal diagnostics market in Japan is growing at 8-10% annually, driven by an aging pet population that requires more frequent and comprehensive health screening.\n\nJapan's livestock industry, while smaller than its companion animal market, includes significant swine, poultry, and cattle operations concentrated in Hokkaido, Kyushu, and the Tohoku region. Japan has experienced devastating outbreaks of Classical Swine Fever (CSF) and avian influenza, driving investment in rapid on-farm diagnostic capabilities.\n\nThe CarryOn platform appeals to Japan's quality-conscious veterinary market through its PCR-level accuracy, compact design, and fully automated operation — qualities that align with Japanese expectations for precision medical technology.`, zh: `日本是亚洲最先进的兽医诊断市场，拥有15,000+家兽医诊所、超过1800万只宠物。日本宠物主人在全球兽医护理支出中位居前列，伴侣动物诊断市场年增长8-10%。\n\n日本畜牧业曾经历猪瘟和禽流感的毁灭性爆发，推动了对现场快速诊断能力的投资。\n\nCarryOn平台以其PCR级精度、紧凑设计和全自动操作吸引日本注重品质的兽医市场。`, ja: `日本はアジアで最も先進的な獣医診断市場であり、ペット1頭あたりの支出が高く、コンパニオンアニマルケアの文化が根付いています。15,000以上の動物病院が1,800万頭以上のペットにサービスを提供し、年間獣医支出は40億ドルを超えています。\n\n日本のペットオーナーは世界で最も獣医ケアに支出する層の一つで、先進診断への需要が強く、ゴールドスタンダードの検査にプレミアム価格を支払う意欲があります。コンパニオンアニマル診断市場は年率8〜10%で成長しています。\n\n日本の畜産業は豚コレラ(CSF)や鳥インフルエンザの壊滅的な発生を経験し、迅速な農場での診断能力への投資を推進しています。\n\nCarryOnプラットフォームは、PCRレベルの精度、コンパクトな設計、全自動操作により、日本の品質重視の獣医市場にアピールします。` },
    regulatoryPathway: { en: `### Regulatory Framework in Japan\n\n**PMDA (Pharmaceuticals and Medical Devices Agency):**\nMedical devices in Japan are regulated by PMDA under the Pharmaceutical and Medical Devices Act (PMD Act). IVD devices are classified into Classes I-IV. Veterinary diagnostic devices may fall under Class I or II, depending on intended use.\n\n**MAFF (Ministry of Agriculture, Forestry and Fisheries):**\nVeterinary-specific diagnostics used in official animal disease control are overseen by MAFF. Test kits used for notifiable disease surveillance must meet standards set by the National Institute of Animal Health (NIAH).\n\n**Import Registration:**\n- Foreign Manufacturer Registration (FMR) required\n- Marketing Authorization Holder (MAH) in Japan required\n- CE and ISO 13485 recognized but Japanese clinical data may be required\n- Japanese-language labeling mandatory\n\nYinrui Bio is exploring partnerships with established Japanese regulatory agents to facilitate PMDA registration and market entry.`, zh: `### 日本监管框架\n\n**PMDA：** 医疗器械受PMDA监管。IVD设备分为I-IV类。\n**MAFF：** 用于官方动物疾病控制的兽医诊断由MAFF监管。\n**进口注册：** 需要外国制造商注册(FMR)和日本营销授权持有人(MAH)。\n\n胤瑞生物正在探索与日本监管代理的合作以推进PMDA注册。`, ja: `### 日本における規制枠組み\n\n**PMDA（医薬品医療機器総合機構）：**\n日本の医療機器はPMDAの下、医薬品医療機器等法（薬機法）により規制されています。IVD機器はクラスI〜IVに分類されます。\n\n**農林水産省（MAFF）：**\n公式動物疾病管理に使用される獣医専用診断はMAFFの監督下にあります。届出疾病の監視に使用されるテストキットは農研機構動物衛生研究部門が設定する基準を満たす必要があります。\n\n**輸入登録：**\n- 外国製造業者登録（FMR）が必要\n- 日本の製造販売業者（MAH）が必要\n- CEとISO 13485は認められるが、日本の臨床データが必要な場合がある\n- 日本語ラベリングが義務\n\n胤瑞バイオはPMDA登録と市場参入を促進するため、日本の経験豊富な規制エージェントとのパートナーシップを模索しています。` },
    shippingLogistics: { en: `### Shipping from Ningbo to Japan\n\n**Primary Port:** Yokohama (Tokyo Bay)\n\n**Ocean Freight:**\n- Ningbo to Yokohama: 3-5 days transit time\n- Multiple daily services — one of the fastest shipping routes from China\n- FCL and LCL options\n\n**Air Freight:**\n- Ningbo to Narita/Haneda: 1-2 days\n- Express courier widely available\n\n**Customs:**\n- Japan customs process is efficient and predictable\n- Medical device import requires PMDA registration\n- Import duty 0-5% for diagnostic instruments\n- Consumption tax (10%) applies\n\nThe extremely short shipping distance from Ningbo to Japan is a significant advantage, enabling rapid order fulfillment and low inventory holding costs for Japanese distributors.`, zh: `### 从宁波发货至日本\n\n**主要港口：** 横滨\n**海运：** 宁波至横滨仅3-5天——中国最快的航线之一\n**空运：** 1-2天\n**关税：** 0-5%，消费税10%\n\n极短的运输距离是重大优势，支持快速订单履行。`, ja: `### 寧波から日本への出荷\n\n**主要港：** 横浜（東京湾）\n\n**海上輸送：**\n- 寧波から横浜：3〜5日——中国からの最速ルートの一つ\n- 毎日複数の便が運航\n\n**航空輸送：**\n- 寧波から成田/羽田：1〜2日\n\n**通関：**\n- 日本の通関プロセスは効率的\n- 医療機器輸入にはPMDA登録が必要\n- 関税0〜5%、消費税10%\n\n寧波から日本への極めて短い輸送距離は大きな利点であり、迅速な注文履行と日本のディストリビューターの低い在庫保有コストを可能にします。` },
    keyApplications: { en: `### Key Applications in Japan\n\n**Premium Companion Animal Diagnostics:**\nJapan's culture of premium pet care creates strong demand for gold-standard molecular diagnostics. Canine parvovirus, distemper, tick-borne diseases, and feline respiratory infections are common testing needs. The aging pet population in Japan drives demand for regular health screening panels.\n\n**Shelter and Rescue:**\nAnimal welfare organizations in Japan perform intake screening for infectious diseases. The CarryOn's feline FeLV-FIV-FPV and canine CDV-CPV-CCoV panels are well-suited for shelter medicine applications.\n\n**Livestock Disease Control:**\nJapan's experience with CSF and avian influenza outbreaks has led to investment in rapid on-farm diagnostics. The CarryOn's ASF and PRRSV test chips support livestock surveillance programs. Wagyu beef production health monitoring is a premium application.\n\n**Veterinary Hospitals and Teaching Hospitals:**\nJapan's 16 veterinary university teaching hospitals and major referral centers are early adopters of innovative diagnostic technologies and serve as opinion leaders for the broader market.`, zh: `### 日本市场主要应用\n\n**高端伴侣动物诊断：** 日本的优质宠物护理文化创造了对金标准分子诊断的强劲需求。\n**收容所和救助：** 动物福利组织进行传染病入所筛查。\n**畜牧疾病控制：** CSF和禽流感经验推动了现场快速诊断投资。和牛生产健康监测是高端应用。\n**教学医院：** 日本16所兽医大学教学医院是创新诊断技术的早期采用者。`, ja: `### 日本市場における主要アプリケーション\n\n**プレミアムコンパニオンアニマル診断：**\n日本のプレミアムペットケア文化は、ゴールドスタンダードの分子診断への強い需要を生み出します。犬パルボウイルス、ジステンパー、ダニ媒介疾患、猫呼吸器感染症が一般的な検査ニーズです。高齢化するペット集団は定期健康スクリーニングの需要を牽引します。\n\n**シェルター・レスキュー：**\n動物福祉団体は感染症の入所スクリーニングを実施しています。\n\n**家畜疾病管理：**\nCSFや鳥インフルエンザの発生経験から、農場での迅速な診断への投資が進んでいます。和牛生産の健康モニタリングはプレミアムアプリケーションです。\n\n**獣医大学病院：**\n日本の16の獣医大学教育病院は革新的な診断技術の早期採用者であり、市場全体のオピニオンリーダーです。` },
    distributionModel: { en: `### Distribution & Partnership in Japan\n\nYinrui Bio seeks a premium distribution partner for the Japanese market, ideally with experience in veterinary diagnostic device distribution and PMDA regulatory processes.\n\n**Ideal Partners:**\n- Established veterinary medical device distributors with national coverage\n- Companies with PMDA MAH (Marketing Authorization Holder) capabilities\n- Laboratory equipment distributors serving veterinary teaching hospitals\n\n**Support:** Japanese-language interface and materials, PMDA registration support, technical training, demo programs, and Japan-specific marketing materials.\n\nContact us to discuss exclusive distribution partnerships for Japan.`, zh: `### 日本分销与合作\n\n胤瑞生物寻求日本市场的高端分销合作伙伴，理想情况下具有兽医诊断设备分销和PMDA监管经验。\n\n提供日语界面和材料、PMDA注册支持、技术培训。`, ja: `### 日本における販売・パートナーシップ\n\n胤瑞バイオは日本市場のプレミアムディストリビューションパートナーを募集しています。獣医診断機器販売とPMDA規制プロセスの経験を持つパートナーが理想的です。\n\n**理想的なパートナー：**\n- 全国カバレッジを持つ確立された獣医医療機器ディストリビューター\n- PMDA製造販売業者（MAH）能力を持つ企業\n- 獣医大学教育病院にサービスを提供する検査機器ディストリビューター\n\n**サポート：** 日本語インターフェースと資料、PMDA登録支援、技術トレーニング、デモプログラム。\n\n日本での独占販売パートナーシップについてお問い合わせください。` },
    faqs: [
      { q: { en: "Is the CarryOn registered with PMDA in Japan?", zh: "CarryOn是否在日本PMDA注册？", ja: "CarryOnはPMDAに登録されていますか？" }, a: { en: "Yinrui Bio is actively pursuing the Japanese market and exploring partnerships with PMDA-experienced regulatory agents. Our CE certification and ISO 13485 quality system provide a strong foundation for PMDA registration. The process typically requires a Japanese Marketing Authorization Holder (MAH) and may include Japanese clinical data requirements.", zh: "胤瑞生物正在积极开拓日本市场，探索与PMDA经验丰富的监管代理合作。CE认证和ISO 13485为PMDA注册提供坚实基础。", ja: "胤瑞バイオは日本市場を積極的に開拓しており、PMDAに経験豊富な規制エージェントとのパートナーシップを模索しています。CE認証とISO 13485品質システムがPMDA登録の強力な基盤を提供します。" } },
      { q: { en: "How quickly can orders be delivered from China to Japan?", zh: "从中国到日本的订单交付速度如何？", ja: "中国から日本への注文はどのくらい早く届きますか？" }, a: { en: "Japan is one of the fastest destinations from our Ningbo manufacturing facility. Ocean freight takes just 3-5 days, and air freight 1-2 days. This proximity enables rapid order fulfillment, minimal inventory holding requirements, and just-in-time replenishment models for Japanese distributors.", zh: "日本是从我们宁波工厂最快到达的目的地之一。海运仅需3-5天，空运1-2天。", ja: "日本は寧波の製造施設からの最速の目的地の一つです。海上輸送はわずか3〜5日、航空輸送は1〜2日です。この近さにより、迅速な注文履行、最小限の在庫保有要件、日本のディストリビューター向けのジャストインタイム補充モデルが可能です。" } },
      { q: { en: "Does the CarryOn support Japanese language?", zh: "CarryOn是否支持日语？", ja: "CarryOnは日本語をサポートしていますか？" }, a: { en: "The CarryOn device currently supports English and Chinese interfaces. Japanese language support is in development and can be prioritized through firmware updates for the Japanese market. All test results use universal numerical and visual indicators that are language-independent.", zh: "CarryOn目前支持英文和中文界面。日语支持正在开发中，可通过固件更新优先为日本市场提供。", ja: "CarryOnデバイスは現在英語と中国語のインターフェースをサポートしています。日本語サポートは開発中で、日本市場向けにファームウェアアップデートを通じて優先的に提供できます。すべてのテスト結果は言語に依存しない普遍的な数値・視覚インジケーターを使用しています。" } },
      { q: { en: "What companion animal tests are most relevant for Japan?", zh: "哪些伴侣动物检测最适合日本？", ja: "日本に最も関連するコンパニオンアニマル検査は？" }, a: { en: "For dogs: CDV-CPV-CCoV triple screening, tick-borne disease panel (Babesia, Ehrlichia, Leptospira), and respiratory panel. For cats: FeLV-FIV-FPV screening and respiratory triple panel (FHV-FCV-Mycoplasma). Japan's aging pet population also drives demand for regular health screening, where PCR provides superior sensitivity to detect subclinical infections.", zh: "犬类：CDV-CPV-CCoV三联筛查、蜱传疾病和呼吸道面板。猫类：FeLV-FIV-FPV筛查和呼吸道三联面板。日本高龄宠物群体推动定期健康筛查需求。", ja: "犬：CDV-CPV-CCoV 3連スクリーニング、ダニ媒介疾患パネル、呼吸器パネル。猫：FeLV-FIV-FPVスクリーニング、呼吸器3連パネル。日本の高齢化するペット集団は定期健康スクリーニングの需要を牽引し、PCRは無症候性感染の検出に優れた感度を提供します。" } },
      { q: { en: "How does the CarryOn compare to existing Japanese veterinary PCR systems?", zh: "CarryOn与日本现有的兽医PCR系统相比如何？", ja: "CarryOnは既存の日本の獣医PCRシステムとどう比較されますか？" }, a: { en: "The CarryOn differentiates through true handheld portability (2.0 kg with battery), fully automated closed-system operation (zero training required), and room-temperature reagent storage. Most existing PCR systems in Japan are benchtop units requiring AC power, manual sample preparation, and cold chain reagent storage. The CarryOn brings PCR-level accuracy to any location without laboratory infrastructure.", zh: "CarryOn通过真正的手持便携性（2.0kg含电池）、全自动封闭系统操作和室温试剂存储实现差异化。日本现有的大多数PCR系统是需要交流电源和手动样品准备的台式设备。", ja: "CarryOnは真のハンドヘルド携帯性（2.0kg、バッテリー搭載）、全自動クローズドシステム操作（トレーニング不要）、室温試薬保存で差別化されます。日本の既存PCRシステムの多くはAC電源、手動サンプル準備、コールドチェーン試薬保存を必要とするベンチトップユニットです。" } },
      { q: { en: "Does Yinrui Bio attend veterinary trade shows in Japan?", zh: "胤瑞生物是否参加日本的兽医展会？", ja: "胤瑞バイオは日本の獣医見本市に出展していますか？" }, a: { en: "Yinrui Bio participates in major international veterinary exhibitions and is planning attendance at Japanese veterinary events. We welcome meeting potential partners at events such as the Japan Veterinary Medical Association annual conference and Interzoo Asia. Contact us to arrange a meeting or product demonstration.", zh: "胤瑞生物参加主要国际兽医展览，并计划参加日本兽医活动。欢迎在展会上与我们会面或安排产品演示。", ja: "胤瑞バイオは主要な国際獣医展示会に参加しており、日本の獣医イベントへの出展を計画しています。日本獣医学会年次大会やインターズーアジアなどのイベントでの面談を歓迎します。ミーティングや製品デモンストレーションのアレンジはお問い合わせください。" } },
    ],
  },

  // 6. Australia
  {
    slug: "australia",
    countryCode: "AU",
    name: { en: "Australia", zh: "澳大利亚", ja: "オーストラリア" },
    heroTitle: { en: "Portable PCR Diagnostics for Australia's Veterinary & Biosecurity Market", zh: "面向澳大利亚兽医与生物安全市场的便携式PCR诊断", ja: "オーストラリアの獣医・バイオセキュリティ市場向けポータブルPCR診断" },
    heroSubtitle: { en: "Supporting Australia's strict biosecurity standards and diverse animal health needs with field-deployable PCR technology.", zh: "以现场可部署的PCR技术支持澳大利亚严格的生物安全标准和多样化的动物健康需求。", ja: "フィールド展開可能なPCR技術でオーストラリアの厳格なバイオセキュリティ基準と多様な動物健康ニーズを支援。" },
    port: "Sydney",
    flagEmoji: "AU",
    marketOverview: { en: `Australia's veterinary diagnostics market combines a strong companion animal sector with a critically important livestock and biosecurity segment. The country's geographic isolation has kept it free from many global animal diseases, making biosecurity surveillance the highest priority for diagnostic testing.\n\nAustralia has over 6,000 veterinary practices, 29 million pets, and one of the world's highest pet ownership rates at 69% of households. Australian pet owners spend an average of AUD $1,500+ annually on veterinary care per pet, creating strong demand for advanced diagnostics.\n\nThe livestock sector is a cornerstone of Australia's economy, with 23+ million cattle, 70+ million sheep, and significant poultry operations. Australia's live animal export industry — one of the world's largest — requires extensive health testing before export, creating unique demand for portable diagnostic capabilities at export yards and quarantine facilities.\n\nAustralia's unique wildlife — including koalas, wombats, and Tasmanian devils — faces disease threats that require molecular diagnostics for conservation efforts. Chlamydia in koalas, Devil Facial Tumour Disease, and wildlife disease surveillance represent niche but critical applications.\n\nThe CarryOn's battery-powered portability is particularly valuable in Australia, where vast distances and remote locations characterize much of the agricultural landscape.`, zh: `澳大利亚兽医诊断市场结合了强大的伴侣动物行业和至关重要的畜牧及生物安全领域。该国的地理隔离使其免受许多全球动物疾病的影响。\n\n澳大利亚有6,000+家兽医诊所、2900万只宠物，宠物拥有率高达69%。畜牧业是经济基石，拥有2300万+头牛和7000万+只羊。\n\n澳大利亚独特的野生动物面临需要分子诊断的疾病威胁。CarryOn的电池便携性在澳大利亚广阔的地理环境中特别有价值。`, ja: `オーストラリアの獣医診断市場は、強力なコンパニオンアニマルセクターと重要な畜産・バイオセキュリティ分野を組み合わせています。\n\nオーストラリアには6,000以上の動物病院、2,900万頭のペットがあり、世帯の69%というペット飼育率は世界最高水準の一つです。\n\nCarryOnのバッテリー駆動の携帯性は、広大な距離と遠隔地が特徴のオーストラリアで特に価値があります。` },
    regulatoryPathway: { en: `### Regulatory Framework in Australia\n\n**TGA (Therapeutic Goods Administration):**\nIVD devices in Australia are regulated by the TGA under the Therapeutic Goods Act 1989. IVDs are classified into Classes 1-4. Veterinary IVDs are generally exempt from TGA regulation but may require inclusion on the Australian Register of Therapeutic Goods (ARTG) depending on claims.\n\n**APVMA (Australian Pesticides and Veterinary Medicines Authority):**\nVeterinary diagnostic test kits may require registration with APVMA if they contain biological agents. The regulatory pathway depends on the specific product composition.\n\n**Biosecurity Requirements:**\nAustralia's Department of Agriculture enforces strict biosecurity import conditions. All diagnostic devices and reagents must comply with BICON (Biosecurity Import Conditions) requirements.\n\n**Import Requirements:**\n- TGA notification or ARTG inclusion may be required\n- Biosecurity import permits for biological components\n- GST at 10% applies\n- Customs duty varies by classification`, zh: `### 澳大利亚监管框架\n\n**TGA：** IVD设备受TGA监管。兽医IVD通常豁免TGA监管。\n**APVMA：** 含生物试剂的兽医诊断试剂盒可能需要APVMA注册。\n**生物安全要求：** 所有诊断设备和试剂必须符合BICON要求。\n**进口：** GST 10%。`, ja: `### オーストラリアにおける規制枠組み\n\n**TGA（医療品管理局）：** IVD機器はTGAにより規制されます。獣医IVDは一般的にTGA規制から免除されます。\n**APVMA：** 生物学的試薬を含む獣医診断キットはAPVMA登録が必要な場合があります。\n**バイオセキュリティ要件：** 全ての診断機器と試薬はBICON要件に準拠する必要があります。` },
    shippingLogistics: { en: `### Shipping from Ningbo to Australia\n\n**Primary Port:** Sydney (Port Botany)\n\n**Ocean Freight:**\n- Ningbo to Sydney: 12-16 days transit time\n- Direct services available\n- FCL and LCL options\n\n**Biosecurity Clearance:**\n- All goods entering Australia undergo biosecurity screening\n- Clean packaging and documentation essential\n- Wooden packaging requires ISPM 15 treatment certification\n- Room-temperature storage simplifies biosecurity compliance\n\n**Distribution:**\n- Sydney and Melbourne serve as primary distribution hubs\n- Australia Post and national freight networks provide nationwide coverage\n\nYinrui Bio provides complete export documentation and works with Australian import agents experienced in medical device and biosecurity clearance.`, zh: `### 从宁波发货至澳大利亚\n\n**主要港口：** 悉尼\n**海运：** 宁波至悉尼12-16天\n**生物安全通关：** 所有进入澳大利亚的货物需经生物安全检查。室温存储简化合规。`, ja: `### 寧波からオーストラリアへの出荷\n\n**主要港：** シドニー\n**海上輸送：** 寧波からシドニー12〜16日\n**バイオセキュリティ通関：** オーストラリアに入る全ての貨物はバイオセキュリティ検査を受けます。室温保存がコンプライアンスを簡素化します。` },
    keyApplications: { en: `### Key Applications in Australia\n\n**Livestock Export Testing:**\nAustralia's live animal export industry requires extensive pre-export health testing. Portable PCR at export yards and quarantine facilities enables rapid testing without sending samples to distant laboratories — critical for time-sensitive export schedules.\n\n**Companion Animal Diagnostics:**\nWith 29 million pets, Australia's companion animal market demands advanced diagnostics. Canine parvovirus, tick-borne diseases (particularly Ehrlichia canis, newly established in northern Australia), and feline FIV/FeLV are key testing needs.\n\n**Biosecurity Surveillance:**\nAustralia's freedom from diseases like ASF, FMD, and rabies depends on active surveillance. Portable PCR capabilities at border checkpoints, quarantine stations, and remote pastoral properties support Australia's biosecurity posture.\n\n**Wildlife Disease:**\nChlamydial disease in koalas, Devil Facial Tumour Disease in Tasmanian devils, and bat lyssavirus surveillance are conservation-critical applications where field-deployable PCR offers significant advantages.`, zh: `### 澳大利亚市场主要应用\n\n**活畜出口检测：** 澳大利亚活畜出口业需要广泛的出口前健康检测。\n**伴侣动物诊断：** 2900万宠物市场需要先进诊断。\n**生物安全监测：** 维持ASF、FMD、狂犬病的无疫状态依赖主动监测。\n**野生动物疾病：** 考拉衣原体病、袋獾面部肿瘤病的保护性应用。`, ja: `### オーストラリア市場における主要アプリケーション\n\n**家畜輸出検査：** オーストラリアの生体動物輸出業は広範な輸出前健康検査を必要としています。\n**コンパニオンアニマル診断：** 2,900万頭のペットを持つ市場は先進診断を求めています。\n**バイオセキュリティ監視：** ASF、FMD、狂犬病からの自由は積極的な監視に依存しています。\n**野生動物疾病：** コアラのクラミジア病、タスマニアデビルの顔面腫瘍病は保全に重要なアプリケーションです。` },
    distributionModel: { en: `### Distribution & Partnership in Australia\n\nYinrui Bio seeks an established Australian veterinary diagnostics distributor with experience in regulatory compliance and national distribution.\n\n**Ideal Partners:**\n- Veterinary diagnostic equipment distributors with national coverage\n- Agricultural supply companies serving livestock industries\n- Companies with TGA/APVMA regulatory experience\n\n**Support:** Regulatory guidance, marketing materials, technical training, demo units, and competitive pricing for the Australian market.\n\nContact us to discuss distribution opportunities across Australia and New Zealand.`, zh: `### 澳大利亚分销与合作\n\n胤瑞生物寻求具有监管合规和全国分销经验的澳大利亚兽医诊断经销商。提供监管指导、营销材料和技术培训。`, ja: `### オーストラリアにおける販売・パートナーシップ\n\n胤瑞バイオは規制コンプライアンスと全国販売の経験を持つオーストラリアの獣医診断ディストリビューターを募集しています。規制ガイダンス、マーケティング資料、技術トレーニングを提供します。` },
    faqs: [
      { q: { en: "Does the CarryOn meet Australian biosecurity import requirements?", zh: "CarryOn是否满足澳大利亚生物安全进口要求？", ja: "CarryOnはオーストラリアのバイオセキュリティ輸入要件を満たしていますか？" }, a: { en: "The CarryOn device itself is an electronic instrument that meets standard import requirements. Test chips containing reagents require biosecurity assessment under BICON conditions. Room-temperature stable reagents simplify the biosecurity import process. Yinrui Bio works with Australian import specialists to ensure all biosecurity documentation is complete.", zh: "CarryOn设备本身是符合标准进口要求的电子仪器。含试剂的芯片需要BICON条件下的生物安全评估。室温稳定试剂简化进口流程。", ja: "CarryOnデバイス自体は標準的な輸入要件を満たす電子機器です。試薬を含むテストチップはBICON条件下のバイオセキュリティ評価が必要です。室温安定試薬がバイオセキュリティ輸入プロセスを簡素化します。" } },
      { q: { en: "Can the CarryOn be used in remote Australian pastoral stations?", zh: "CarryOn能在澳大利亚偏远牧场使用吗？", ja: "CarryOnはオーストラリアの遠隔牧場で使用できますか？" }, a: { en: "Absolutely. The CarryOn is designed for exactly these environments — battery-powered (3.5 hours runtime), room-temperature reagent storage, fully automated operation, and rugged portable design. It operates without laboratory infrastructure, electricity grid, or cold chain — all common challenges in remote Australian pastoral settings.", zh: "完全可以。CarryOn正是为这类环境设计的——电池供电（3.5小时续航）、室温试剂存储、全自动操作。", ja: "もちろんです。CarryOnはまさにこのような環境向けに設計されています——バッテリー駆動（3.5時間稼働）、室温試薬保存、全自動操作、頑丈なポータブル設計。" } },
      { q: { en: "Is Ehrlichia testing available for the Australian market?", zh: "澳大利亚市场有埃利希体检测吗？", ja: "オーストラリア市場でエールリヒア検査は利用可能ですか？" }, a: { en: "Yes. The Canine Babesia-Ehrlichia-Leptospira Triple Test Chip detects Ehrlichia canis, which was first confirmed in Australian dogs in 2020 and has since become an emerging disease concern, particularly in northern Australia. This panel is highly relevant for Australian veterinary practices.", zh: "是的。犬巴贝斯虫-艾利希体-钩端螺旋体三联检芯片可检测犬艾利希体，该病于2020年在澳大利亚犬只中首次确认。", ja: "はい。犬バベシア・エールリヒア・レプトスピラ3連検査チップはエールリヒア・カニスを検出します。2020年にオーストラリアの犬で初めて確認され、新興疾病として懸念されています。" } },
      { q: { en: "What are the import duties for diagnostic devices in Australia?", zh: "澳大利亚诊断设备的进口关税是多少？", ja: "オーストラリアにおける診断機器の輸入関税は？" }, a: { en: "Import duties for diagnostic instruments in Australia typically range from 0-5% depending on the tariff classification. GST at 10% applies to the landed value. Medical and scientific instruments may qualify for concessional duty rates. Free Trade Agreement benefits between China and Australia (ChAFTA) may apply to reduce duty costs.", zh: "澳大利亚诊断仪器的进口关税通常为0-5%。GST 10%。中澳自贸协定(ChAFTA)可能适用以降低关税成本。", ja: "オーストラリアにおける診断機器の輸入関税は通常0〜5%です。GST 10%が適用されます。中豪FTA(ChAFTA)により関税コストが削減される可能性があります。" } },
      { q: { en: "Can the CarryOn support wildlife disease research in Australia?", zh: "CarryOn能支持澳大利亚的野生动物疾病研究吗？", ja: "CarryOnはオーストラリアの野生動物疾病研究を支援できますか？" }, a: { en: "Yes. The CarryOn's field portability makes it valuable for wildlife research and conservation programs. Its use in detecting chlamydial disease in koalas, monitoring bat lyssavirus, and supporting Tasmanian devil conservation would require custom test chip development. Yinrui Bio's R&D team can work with Australian research institutions to develop wildlife-specific panels.", zh: "是的。CarryOn的现场便携性使其对野生动物研究和保护项目很有价值。胤瑞生物研发团队可与澳大利亚研究机构合作开发野生动物专用面板。", ja: "はい。CarryOnのフィールド携帯性は野生動物研究と保全プログラムに価値があります。胤瑞バイオのR&Dチームはオーストラリアの研究機関と協力して野生動物専用パネルを開発できます。" } },
      { q: { en: "Does Yinrui Bio support distribution across both Australia and New Zealand?", zh: "胤瑞生物是否支持澳大利亚和新西兰的分销？", ja: "胤瑞バイオはオーストラリアとニュージーランド両方の販売をサポートしますか？" }, a: { en: "Yes. We welcome distribution partnerships covering both Australia and New Zealand (Oceania region). Both countries share similar biosecurity priorities and regulatory frameworks, making a combined distribution strategy efficient. New Zealand's MPI (Ministry for Primary Industries) regulatory requirements are compatible with our CE-certified product documentation.", zh: "是的。我们欢迎覆盖澳大利亚和新西兰的分销合作。两国具有相似的生物安全优先事项和监管框架。", ja: "はい。オーストラリアとニュージーランド（オセアニア地域）をカバーするディストリビューションパートナーシップを歓迎します。両国は類似のバイオセキュリティ優先事項と規制枠組みを共有しています。" } },
    ],
  },

  // 7. United Kingdom
  {
    slug: "united-kingdom",
    countryCode: "GB",
    name: { en: "United Kingdom", zh: "英国", ja: "イギリス" },
    heroTitle: { en: "Portable PCR Diagnostics for the UK Veterinary Market", zh: "面向英国兽医市场的便携式PCR诊断", ja: "英国獣医市場向けポータブルPCR診断" },
    heroSubtitle: { en: "UKCA-ready portable molecular diagnostics for the UK's companion animal, livestock, and disease surveillance sectors.", zh: "UKCA就绪的便携式分子诊断，服务英国伴侣动物、畜牧和疾病监测领域。", ja: "英国のコンパニオンアニマル、畜産、疾病監視セクター向けUKCA対応ポータブル分子診断。" },
    port: "Felixstowe",
    flagEmoji: "GB",
    marketOverview: { en: `The United Kingdom has a highly developed veterinary diagnostics market with a strong tradition of evidence-based veterinary medicine and rigorous regulatory standards. The UK has approximately 5,500 veterinary practices, over 12 million dogs, 12 million cats, and significant livestock operations across England, Scotland, Wales, and Northern Ireland.\n\nPost-Brexit, the UK has established its own regulatory framework separate from the EU, creating the UKCA (UK Conformity Assessed) marking system. While CE marking remains accepted through transitional provisions, the move toward UKCA certification creates opportunities for manufacturers who proactively adapt to UK-specific requirements.\n\nThe UK's Animal and Plant Health Agency (APHA) coordinates national disease surveillance and controls the reporting of notifiable diseases including avian influenza, African Swine Fever, and bovine tuberculosis. The UK invested significantly in diagnostic infrastructure following COVID-19, and this investment extends to veterinary molecular diagnostics.\n\nThe UK's veterinary profession is internationally influential, with the Royal College of Veterinary Surgeons (RCVS) setting standards that are recognized globally. UK-based evidence and endorsements carry significant weight in international markets.`, zh: `英国拥有高度发达的兽医诊断市场。约5,500家兽医诊所、超过1200万只狗和1200万只猫。\n\n脱欧后，英国建立了自己的UKCA标志系统。虽然CE标志通过过渡条款仍被接受，但向UKCA认证的转变为主动适应的制造商创造了机会。\n\nAPHA协调国家疾病监测。英国兽医专业在国际上具有影响力。`, ja: `英国は高度に発達した獣医診断市場を有しています。約5,500の動物病院、1,200万頭以上の犬と猫がいます。\n\nBrexit後、英国はUKCA（英国適合性評価）マーキングシステムを確立しました。CEマーキングは移行措置として引き続き受け入れられています。\n\n英国の動物植物衛生庁（APHA）が国家疾病監視を調整しています。` },
    regulatoryPathway: { en: `### Regulatory Framework in the United Kingdom\n\n**MHRA (Medicines and Healthcare products Regulatory Agency):**\nPost-Brexit, the MHRA regulates medical devices in the UK under the Medical Devices Regulations 2002 (as amended). The UKCA marking is being phased in to replace CE marking, with transitional deadlines.\n\n**UKCA Marking:**\nCE marked devices are currently accepted under transitional provisions. Manufacturers should prepare for UKCA certification, which requires a UK Responsible Person and UK-based conformity assessment. Yinrui Bio is preparing UKCA documentation to ensure uninterrupted UK market access.\n\n**APHA (Animal and Plant Health Agency):**\nDiagnostic tests used for notifiable disease reporting must meet APHA-approved standards. Official disease testing for bovine TB, avian influenza, and ASF may require confirmation by APHA-approved laboratories.\n\n**Import Requirements:**\n- UKCA or CE marking (transitional) required\n- UK Responsible Person designation required\n- UK customs duty varies by classification\n- VAT at 20% applies`, zh: `### 英国监管框架\n\n**MHRA：** 脱欧后，MHRA监管英国医疗器械。UKCA标志正在分阶段替代CE标志。\n**APHA：** 用于可报告疾病报告的诊断测试需满足APHA标准。\n**进口：** 需要英国负责人指定。VAT 20%。`, ja: `### 英国における規制枠組み\n\n**MHRA（医薬品・医療製品規制庁）：** Brexit後、MHRAが英国の医療機器を規制します。UKCAマーキングがCEマーキングに代わり段階的に導入されています。\n**APHA：** 届出疾病の報告に使用される診断テストはAPHA基準を満たす必要があります。\n**輸入：** 英国責任者の指定が必要。VAT 20%。` },
    shippingLogistics: { en: `### Shipping from Ningbo to the United Kingdom\n\n**Primary Port:** Felixstowe — UK's largest container port\n\n**Ocean Freight:**\n- Ningbo to Felixstowe: 28-33 days transit time\n- Direct services and transshipment via Mediterranean hubs available\n- FCL and LCL options\n\n**Post-Brexit Customs:**\n- UK customs procedures are separate from EU\n- UK Responsible Person required for medical device imports\n- Customs duty varies; medical devices may qualify for reduced rates\n- VAT at 20%\n\n**Distribution:**\n- Felixstowe provides excellent road and rail connections across England\n- Room-temperature storage eliminates GDP cold chain requirements\n\nYinrui Bio provides complete documentation for UK customs clearance and works with experienced UK customs brokers.`, zh: `### 从宁波发货至英国\n\n**主要港口：** 费利克斯托\n**海运：** 宁波至费利克斯托28-33天\n**脱欧后海关：** 英国海关程序独立于EU。VAT 20%。`, ja: `### 寧波から英国への出荷\n\n**主要港：** フェリクストウ\n**海上輸送：** 寧波からフェリクストウ28〜33日\n**Brexit後の通関：** 英国の通関手続きはEUとは別。VAT 20%。` },
    keyApplications: { en: `### Key Applications in the United Kingdom\n\n**Companion Animal Diagnostics:**\nThe UK's 24+ million dogs and cats drive strong demand for molecular diagnostics. Canine parvovirus, tick-borne diseases (Babesia canis recently confirmed in the UK), Leishmania (in imported dogs), and feline respiratory infections are key testing needs. The UK's large rescue and rehoming sector performs extensive intake screening.\n\n**Livestock Disease Surveillance:**\nBovine tuberculosis remains the UK's most challenging livestock disease. Avian influenza surveillance is a national priority following multiple outbreaks. ASF preparedness and PRRSV monitoring support the UK's pig industry.\n\n**Post-Brexit Border Controls:**\nNew border controls on animal products entering the UK create demand for rapid diagnostic testing at ports of entry. Meat species identification for food fraud detection is increasingly important.\n\n**Equine Health:**\nThe UK's significant equine industry (approximately 800,000 horses) requires disease testing for strangles, equine influenza, and other respiratory pathogens.`, zh: `### 英国市场主要应用\n\n**伴侣动物诊断：** 英国2400万+猫狗驱动分子诊断需求。\n**畜牧疾病监测：** 牛结核仍是最大挑战。禽流感监测是国家优先事项。\n**脱欧后边境管控：** 新的边境管控创造了入境点快速诊断需求。\n**马匹健康：** 英国约80万匹马需要疾病检测。`, ja: `### 英国市場における主要アプリケーション\n\n**コンパニオンアニマル診断：** 英国の2,400万頭以上の犬猫が分子診断の需要を牽引。\n**家畜疾病監視：** 牛結核は英国最大の家畜疾病課題。鳥インフルエンザ監視は国家的優先事項。\n**Brexit後の国境管理：** 新たな国境管理が入港地での迅速診断需要を創出。` },
    distributionModel: { en: `### Distribution & Partnership in the United Kingdom\n\nYinrui Bio seeks a UK-based distribution partner with veterinary diagnostics expertise and MHRA/UKCA regulatory knowledge.\n\n**Ideal Partners:**\n- Veterinary diagnostic equipment distributors with UK-wide coverage\n- Companies with MHRA Responsible Person capabilities\n- Agricultural diagnostics companies serving the livestock sector\n\n**Support:** UKCA documentation preparation, UK-market marketing materials, technical training, demo programs, and competitive pricing.\n\nContact us to discuss distribution opportunities in the United Kingdom and Ireland.`, zh: `### 英国分销与合作\n\n胤瑞生物寻求具有兽医诊断专业知识和MHRA/UKCA监管知识的英国分销合作伙伴。提供UKCA文件准备、营销材料和技术培训。`, ja: `### 英国における販売・パートナーシップ\n\n胤瑞バイオは獣医診断の専門知識とMHRA/UKCA規制の知識を持つ英国のディストリビューションパートナーを募集しています。UKCA文書準備、マーケティング資料、技術トレーニングを提供します。` },
    faqs: [
      { q: { en: "Does the CarryOn have UKCA certification?", zh: "CarryOn是否有UKCA认证？", ja: "CarryOnはUKCA認証を取得していますか？" }, a: { en: "The CarryOn currently holds CE certification, which is accepted in the UK under transitional provisions. Yinrui Bio is actively preparing UKCA certification documentation to ensure uninterrupted UK market access as the transition to UKCA marking progresses. Our ISO 13485 quality system supports both CE and UKCA compliance.", zh: "CarryOn目前持有CE认证，在过渡条款下被英国接受。胤瑞生物正在积极准备UKCA认证文件。", ja: "CarryOnは現在CE認証を保持しており、移行措置の下で英国で受け入れられています。胤瑞バイオはUKCA認証文書を積極的に準備しています。" } },
      { q: { en: "What is the shipping time from Ningbo to the UK?", zh: "从宁波到英国的运输时间是多少？", ja: "寧波から英国への配送時間は？" }, a: { en: "Ocean freight from Ningbo to Felixstowe takes 28-33 days. Air freight takes 3-5 days. Express courier services (DHL/FedEx) deliver sample units within 3-5 business days.", zh: "从宁波到费利克斯托的海运需28-33天。空运3-5天。", ja: "寧波からフェリクストウへの海上輸送は28〜33日です。航空輸送は3〜5日です。" } },
      { q: { en: "How is the CarryOn relevant for bovine TB testing in the UK?", zh: "CarryOn与英国牛结核检测有什么关联？", ja: "CarryOnは英国の牛結核検査にどう関連しますか？" }, a: { en: "While the CarryOn platform's current test chip menu does not include a specific bovine TB panel, our R&D pipeline includes livestock disease panels relevant to the UK market. For existing livestock panels (ASF, PRRSV), the CarryOn provides immediate value. Bovine TB detection capability is under active development.", zh: "虽然CarryOn目前的芯片菜单不包括专门的牛结核面板，但我们的研发管线包括与英国市场相关的畜牧疾病面板。牛结核检测能力正在积极开发中。", ja: "CarryOnの現在のテストチップメニューには牛結核専用パネルは含まれていませんが、R&Dパイプラインには英国市場に関連する畜産疾病パネルが含まれています。牛結核検出能力は積極的に開発中です。" } },
      { q: { en: "Can the CarryOn be used for tick-borne disease testing in UK dogs?", zh: "CarryOn能用于英国犬的蜱传疾病检测吗？", ja: "CarryOnは英国の犬のダニ媒介疾患検査に使用できますか？" }, a: { en: "Yes. The Canine Babesia-Ehrlichia-Leptospira Triple Test Chip is highly relevant for the UK, where Babesia canis was recently confirmed for the first time in non-traveled UK dogs. This panel also detects Ehrlichia and Leptospira, both of which are diagnostic priorities in the UK.", zh: "是的。犬巴贝斯虫-艾利希体-钩端螺旋体三联检芯片与英国高度相关，英国最近首次在未出境犬只中确认了犬巴贝斯虫。", ja: "はい。犬バベシア・エールリヒア・レプトスピラ3連検査チップは英国に非常に関連があります。バベシア・カニスは最近初めて渡航歴のない英国の犬で確認されました。" } },
      { q: { en: "Does Yinrui Bio have a UK Responsible Person?", zh: "胤瑞生物在英国有负责人吗？", ja: "胤瑞バイオには英国責任者がいますか？" }, a: { en: "Yinrui Bio is in the process of establishing UK Responsible Person arrangements to comply with post-Brexit medical device regulations. We welcome partnerships with UK-based entities that can serve in this capacity while also acting as distribution partners.", zh: "胤瑞生物正在建立英国负责人安排以符合脱欧后的医疗器械法规。我们欢迎与可担任此角色的英国实体合作。", ja: "胤瑞バイオはBrexit後の医療機器規制に準拠するため、英国責任者の手配を進めています。ディストリビューションパートナーとしても機能できる英国の事業体とのパートナーシップを歓迎します。" } },
      { q: { en: "What support does Yinrui Bio offer UK distributors?", zh: "胤瑞生物为英国经销商提供什么支持？", ja: "胤瑞バイオは英国のディストリビューターにどのようなサポートを提供しますか？" }, a: { en: "We offer comprehensive support including: UKCA certification documentation, competitive distributor pricing, technical training programs, demo unit loan programs, marketing materials, dedicated account management, and participation support for UK veterinary events such as BSAVA Congress and the London Vet Show.", zh: "我们提供全面支持，包括：UKCA认证文件、有竞争力的经销商定价、技术培训、演示设备和英国兽医活动参展支持。", ja: "UKCA認証文書、競争力のあるディストリビューター価格、技術トレーニング、デモユニット、マーケティング資料、BSAVA CongressやLondon Vet Showなどの英国獣医イベントへの参加サポートを提供します。" } },
    ],
  },

  // 8. Southeast Asia (Thailand)
  {
    slug: "thailand",
    countryCode: "TH",
    name: { en: "Thailand & Southeast Asia", zh: "泰国及东南亚", ja: "タイ・東南アジア" },
    heroTitle: { en: "Portable PCR Diagnostics for Thailand & Southeast Asia", zh: "面向泰国及东南亚的便携式PCR诊断", ja: "タイ・東南アジア向けポータブルPCR診断" },
    heroSubtitle: { en: "Affordable molecular diagnostics for Southeast Asia's fast-growing veterinary, livestock, and aquaculture industries.", zh: "为东南亚快速增长的兽医、畜牧和水产养殖业提供经济实惠的分子诊断。", ja: "東南アジアの急成長する獣医、畜産、水産養殖業向けの手頃な分子診断。" },
    port: "Laem Chabang",
    flagEmoji: "TH",
    marketOverview: { en: `Southeast Asia represents one of the world's fastest-growing veterinary diagnostics markets, with Thailand serving as the regional hub. The ASEAN veterinary diagnostics market is estimated at $800 million and growing at 15-20% annually, driven by expanding livestock production, rising pet ownership, and increasing food safety enforcement.\n\nThailand specifically is a major center for livestock production (particularly poultry and swine), aquaculture (the world's fourth-largest shrimp producer), and companion animal care. The country has over 4,000 veterinary clinics, a growing pet population, and a livestock sector that exports globally.\n\nSoutheast Asia's unique disease challenges — including African Swine Fever (which has devastated swine herds across the region), highly pathogenic avian influenza, and tropical tick-borne diseases — create urgent demand for rapid, field-deployable molecular diagnostics.\n\nThe CarryOn platform is exceptionally well-suited for Southeast Asia: affordable price point for emerging market clinics, battery-powered operation for areas with unreliable electricity, room-temperature reagent storage essential in tropical climates without cold chain, and zero-training operation for veterinary staff with varying levels of laboratory experience.\n\nFrom Thailand, Yinrui Bio aims to serve the broader ASEAN market including Vietnam, Indonesia, Philippines, Malaysia, Myanmar, and Cambodia.`, zh: `东南亚是全球增长最快的兽医诊断市场之一，泰国是区域中心。ASEAN兽医诊断市场估值8亿美元，年增长15-20%。\n\n泰国是畜牧生产（家禽和生猪）、水产养殖（世界第四大虾生产国）和伴侣动物护理的主要中心。拥有4,000+家兽医诊所。\n\n东南亚独特的疾病挑战——非洲猪瘟、高致病性禽流感和热带蜱传疾病——创造了对现场分子诊断的迫切需求。\n\nCarryOn平台非常适合东南亚市场。从泰国，胤瑞生物旨在服务更广泛的ASEAN市场。`, ja: `東南アジアは世界で最も急成長する獣医診断市場の一つで、タイが地域のハブです。ASEAN獣医診断市場は8億ドルと推定され、年率15〜20%で成長しています。\n\nタイは畜産（家禽・豚）、水産養殖（世界第4位のエビ生産国）、コンパニオンアニマルケアの主要センターです。4,000以上の動物病院を有しています。\n\nCarryOnプラットフォームは東南アジアに非常に適しています。タイから、胤瑞バイオはベトナム、インドネシア、フィリピン、マレーシアなどのASEAN市場にサービスを提供することを目指しています。` },
    regulatoryPathway: { en: `### Regulatory Framework in Thailand & ASEAN\n\n**Thai FDA (Food and Drug Administration):**\nMedical devices in Thailand are regulated by the Thai FDA under the Medical Device Act B.E. 2551. IVD devices are classified based on risk. CE-marked and ISO 13485-certified devices benefit from expedited review processes.\n\n**ASEAN Medical Device Directive (AMDD):**\nASEAN has adopted a harmonized framework for medical device regulation (ASEAN Medical Device Directive). Countries implementing AMDD include Thailand, Singapore, Malaysia, and Indonesia. Registration in one AMDD-compliant country can facilitate registration across other ASEAN members.\n\n**DLD (Department of Livestock Development):**\nThailand's DLD oversees animal disease control and may require specific approvals for veterinary diagnostic products used in official surveillance programs.\n\n**Import Requirements:**\n- Thai FDA registration/notification required\n- CE marking recognized and facilitates approval\n- Import duty 0-10% depending on classification\n- VAT at 7%\n\nYinrui Bio works with Thai regulatory agents to manage registration and supports ASEAN-wide market access strategies.`, zh: `### 泰国及ASEAN监管框架\n\n**泰国FDA：** 医疗器械受泰国FDA监管。CE标记和ISO 13485认证设备享受加速审查。\n**ASEAN AMDD：** ASEAN采用了统一的医疗器械监管框架。一个国家的注册可促进其他成员国注册。\n**DLD：** 泰国畜牧发展部监管动物疾病控制。\n**进口：** 关税0-10%，VAT 7%。`, ja: `### タイおよびASEANにおける規制枠組み\n\n**タイFDA：** 医療機器はタイFDAにより規制されます。CEマーク・ISO 13485認証機器は迅速審査の恩恵があります。\n**ASEAN AMDD：** ASEANは統一された医療機器規制枠組みを採用しています。\n**DLD：** タイ畜産開発局が動物疾病管理を監督します。\n**輸入：** 関税0〜10%、VAT 7%。` },
    shippingLogistics: { en: `### Shipping from Ningbo to Thailand\n\n**Primary Port:** Laem Chabang (near Bangkok)\n\n**Ocean Freight:**\n- Ningbo to Laem Chabang: 5-8 days transit time\n- Frequent direct services\n- Very competitive freight rates on this route\n\n**Air Freight:**\n- Ningbo to Bangkok (BKK/Suvarnabhumi): 1-2 days\n- Express courier widely available\n\n**ASEAN Distribution:**\n- Thailand/Bangkok serves as the ASEAN distribution hub\n- Short shipping times to Vietnam (2-3 days), Malaysia (3-4 days), Indonesia (4-5 days), and Philippines (3-4 days)\n- Room-temperature storage is critical in tropical climates — eliminates costly cold chain requirements\n\nThe proximity of Ningbo to Southeast Asia provides a significant logistics advantage, with transit times of under one week to most ASEAN destinations.`, zh: `### 从宁波发货至泰国\n\n**主要港口：** 林查班（曼谷附近）\n**海运：** 宁波至林查班仅5-8天\n**空运：** 1-2天\n**ASEAN分销：** 泰国/曼谷作为ASEAN分销中心。室温存储在热带气候中至关重要。\n\n宁波到东南亚的邻近性提供了显著的物流优势。`, ja: `### 寧波からタイへの出荷\n\n**主要港：** レムチャバン（バンコク近郊）\n**海上輸送：** 寧波からレムチャバンわずか5〜8日\n**航空輸送：** 1〜2日\n**ASEAN配送：** タイ/バンコクがASEAN配送ハブ。室温保存は熱帯気候で重要です。` },
    keyApplications: { en: `### Key Applications in Thailand & Southeast Asia\n\n**Aquaculture Disease Monitoring:**\nThailand is a global leader in shrimp and fish farming. White Spot Syndrome Virus (WSSV), Early Mortality Syndrome (EMS), and Tilapia Lake Virus (TiLV) cause billions of dollars in losses across the region annually. Portable PCR enables pond-side testing that can detect outbreaks before they devastate entire farms.\n\n**African Swine Fever Response:**\nASF has caused catastrophic losses across Southeast Asia since 2018. Thailand, Vietnam, Philippines, and Indonesia have all been affected. The CarryOn ASF test chip enables rapid on-farm screening at pig operations, supporting containment efforts and restocking decisions.\n\n**Poultry Disease Surveillance:**\nSoutheast Asia is a global hotspot for avian influenza. Thailand's large poultry export industry requires continuous surveillance. Farm-level molecular testing capabilities help producers maintain disease-free status critical for export access.\n\n**Companion Animal Diagnostics:**\nSoutheast Asia's pet population is growing rapidly. Canine parvovirus, ehrlichiosis (highly endemic in tropical climates), and feline infectious diseases are common diagnostic needs. The CarryOn's affordable price point makes PCR diagnostics accessible to clinics across the economic spectrum.\n\n**Meat Species Identification:**\nHalal food compliance in Muslim-majority countries (Malaysia, Indonesia, Brunei) and growing food safety enforcement create demand for portable meat authentication testing. Our meat species quad chips are directly relevant for this market.`, zh: `### 泰国及东南亚主要应用\n\n**水产养殖疾病监测：** 泰国是虾和鱼养殖的全球领导者。白斑综合症病毒、早期死亡综合症等每年造成数十亿美元损失。便携式PCR能实现池塘边检测。\n\n**非洲猪瘟应对：** 自2018年以来ASF在东南亚造成灾难性损失。\n\n**家禽疾病监测：** 东南亚是禽流感全球热点地区。\n\n**伴侣动物诊断：** 东南亚宠物数量快速增长，CarryOn的经济价格使PCR诊断可及。\n\n**肉类物种鉴定：** 穆斯林国家的清真食品合规需求。`, ja: `### タイ・東南アジアにおける主要アプリケーション\n\n**水産養殖疾病モニタリング：** タイはエビ・魚養殖の世界的リーダーです。ポータブルPCRで池側検査が可能です。\n\n**アフリカ豚熱対応：** 2018年以降、ASFは東南アジア全域で壊滅的な被害をもたらしました。\n\n**家禽疾病監視：** 東南アジアは鳥インフルエンザのグローバルホットスポットです。\n\n**コンパニオンアニマル診断：** 東南アジアのペット数は急速に増加しています。\n\n**肉種鑑定：** ムスリム多数派国でのハラール食品コンプライアンス需要。` },
    distributionModel: { en: `### Distribution & Partnership in Thailand & ASEAN\n\nYinrui Bio seeks regional distribution partners for Thailand and the broader ASEAN market.\n\n**Ideal Partners:**\n- Veterinary or aquaculture diagnostics distributors with regional coverage\n- Agricultural input companies serving livestock and aquaculture producers\n- Companies with Thai FDA and ASEAN AMDD registration experience\n\n**Regional Strategy:**\nThailand-based partners can leverage ASEAN AMDD harmonization to serve multiple countries from a single registration hub. Key secondary markets include Vietnam, Indonesia, Philippines, and Malaysia.\n\n**Support:** Thai-language materials, regulatory guidance, technical training, demo programs, and pricing optimized for Southeast Asian markets.\n\nContact us to explore distribution opportunities across ASEAN.`, zh: `### 泰国及ASEAN分销与合作\n\n胤瑞生物寻求泰国和ASEAN市场的区域分销合作伙伴。泰国合作伙伴可利用ASEAN AMDD统一框架从单一注册中心服务多个国家。\n\n提供泰语材料、监管指导和针对东南亚市场优化的定价。`, ja: `### タイおよびASEANにおける販売・パートナーシップ\n\n胤瑞バイオはタイおよびASEAN市場のリージョナルディストリビューションパートナーを募集しています。ASEAN AMDD統一化を活用して複数国にサービスを提供できます。\n\nタイ語資料、規制ガイダンス、東南アジア市場向けに最適化された価格設定を提供します。` },
    faqs: [
      { q: { en: "Is the CarryOn registered with Thai FDA?", zh: "CarryOn是否在泰国FDA注册？", ja: "CarryOnはタイFDAに登録されていますか？" }, a: { en: "Yinrui Bio is pursuing Thai FDA registration for the CarryOn platform. Our CE certification and ISO 13485 quality system are recognized by Thai FDA, facilitating the registration process. We work with experienced Thai regulatory agents to manage the registration timeline.", zh: "胤瑞生物正在推进CarryOn平台的泰国FDA注册。CE认证和ISO 13485获得泰国FDA认可。", ja: "胤瑞バイオはCarryOnプラットフォームのタイFDA登録を推進しています。CE認証とISO 13485はタイFDAに認められています。" } },
      { q: { en: "Can the CarryOn test for aquaculture diseases?", zh: "CarryOn能检测水产养殖疾病吗？", ja: "CarryOnは水産養殖疾病を検査できますか？" }, a: { en: "Our R&D pipeline includes aquaculture-specific test panels for White Spot Syndrome Virus (WSSV), Early Mortality Syndrome (EMS), and other critical aquaculture pathogens. These panels are being developed with input from Southeast Asian aquaculture partners. The CarryOn platform's microfluidic chip technology is adaptable to aquaculture sample types.", zh: "我们的研发管线包括水产养殖专用检测面板，包括白斑综合症病毒(WSSV)、早期死亡综合症(EMS)等。这些面板正在与东南亚水产合作伙伴合作开发。", ja: "R&Dパイプラインには白斑症候群ウイルス(WSSV)、早期死亡症候群(EMS)などの水産養殖専用テストパネルが含まれています。東南アジアの水産養殖パートナーの意見を取り入れて開発中です。" } },
      { q: { en: "How short is the shipping time from China to Thailand?", zh: "从中国到泰国的运输时间有多短？", ja: "中国からタイへの配送時間はどのくらいですか？" }, a: { en: "Ocean freight from Ningbo to Laem Chabang (Thailand) takes just 5-8 days, making it one of the fastest international shipping routes from our factory. Air freight takes 1-2 days. This proximity enables rapid order fulfillment and minimal inventory holding requirements for Thai and ASEAN distributors.", zh: "从宁波到林查班（泰国）的海运仅需5-8天，是我们工厂最快的国际航线之一。空运1-2天。", ja: "寧波からレムチャバン（タイ）への海上輸送はわずか5〜8日で、工場からの最速の国際輸送ルートの一つです。航空輸送は1〜2日です。" } },
      { q: { en: "Can the CarryOn handle tropical heat and humidity?", zh: "CarryOn能应对热带高温和湿度吗？", ja: "CarryOnは熱帯の高温多湿に対応できますか？" }, a: { en: "Yes. The CarryOn is designed for field deployment in diverse environments, including tropical conditions. The device operates at ambient temperatures up to 35 degrees C. Test chips are stable at room temperature (15-30 degrees C) for 12 months. The closed-system design protects internal reagents from environmental humidity. Avoid direct sunlight exposure and store chips in climate-controlled spaces when possible.", zh: "是的。CarryOn专为多样环境设计，包括热带条件。设备在最高35°C环境温度下工作。芯片在室温下稳定12个月。封闭系统设计保护试剂免受环境湿度影响。", ja: "はい。CarryOnは熱帯条件を含む多様な環境でのフィールド展開用に設計されています。デバイスは最高35°Cの環境温度で動作します。チップは室温で12ヶ月安定しています。" } },
      { q: { en: "Does Yinrui Bio offer ASEAN-wide distribution agreements?", zh: "胤瑞生物是否提供ASEAN范围的分销协议？", ja: "胤瑞バイオはASEAN全域の販売契約を提供していますか？" }, a: { en: "Yes. We offer regional distribution agreements covering Thailand and the broader ASEAN market. ASEAN AMDD harmonization allows registration in one member country to facilitate market access across the region. We support partners with multi-country regulatory strategies and pricing optimized for each market.", zh: "是的。我们提供覆盖泰国和ASEAN市场的区域分销协议。ASEAN AMDD统一化允许在一个成员国注册后促进整个区域的市场准入。", ja: "はい。タイおよびASEAN市場をカバーするリージョナルディストリビューション契約を提供しています。ASEAN AMDD統一化により、1つの加盟国での登録が地域全体の市場アクセスを促進します。" } },
      { q: { en: "What is the ASF testing situation in Southeast Asia?", zh: "东南亚的非洲猪瘟检测情况如何？", ja: "東南アジアにおけるASF検査の状況は？" }, a: { en: "African Swine Fever has caused unprecedented losses across Southeast Asia since 2018, with major outbreaks in Vietnam, Philippines, Indonesia, Myanmar, and confirmed cases in Thailand. The disease has killed hundreds of millions of pigs regionally. Rapid on-farm ASF detection is now a critical priority for all ASEAN countries. The CarryOn's ASF test chip enables PCR-level detection at farm sites without laboratory infrastructure, supporting containment and restocking decisions.", zh: "自2018年以来，非洲猪瘟在东南亚造成了前所未有的损失。在农场快速ASF检测现在是所有ASEAN国家的关键优先事项。CarryOn的ASF检测芯片支持现场PCR级检测。", ja: "アフリカ豚熱は2018年以降、東南アジア全域で前例のない被害をもたらしました。農場での迅速なASF検出は全ASEAN諸国の重要な優先事項です。CarryOnのASFテストチップは検査室インフラなしに農場でのPCRレベル検出を可能にします。" } },
    ],
  },
];

// Helper functions
export function getMarketBySlug(slug: string): Market | undefined {
  return markets.find((m) => m.slug === slug);
}

export function getAllMarketSlugs(): string[] {
  return markets.map((m) => m.slug);
}
