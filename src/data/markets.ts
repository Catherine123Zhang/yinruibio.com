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
      vi: "Hoa Kỳ",
    },
    heroTitle: {
      en: "Portable PCR Diagnostics for the U.S. Veterinary Market",
      zh: "面向美国兽医市场的便携式PCR诊断",
      ja: "米国獣医市場向けポータブルPCR診断",
      vi: "Chẩn đoán PCR cầm tay cho thị trường thú y Hoa Kỳ",
    },
    heroSubtitle: {
      en: "PCR-accurate results in under 60 minutes for 30,000+ veterinary clinics, shelters, and livestock operations across the United States.",
      zh: "为美国30,000+家兽医诊所、动物收容所和畜牧场提供60分钟内的PCR级精准结果。",
      ja: "米国の30,000以上の動物病院、シェルター、畜産施設に60分以内のPCR精度の結果を提供。",
      vi: "Kết quả chính xác như PCR trong dưới 60 phút cho hơn 30.000 phòng khám thú y, trung tâm cứu hộ và cơ sở chăn nuôi trên khắp Hoa Kỳ.",
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
      vi: `Hoa Kỳ là thị trường chẩn đoán thú y lớn nhất thế giới, trị giá hơn 3,5 tỷ USD mỗi năm. Với hơn 30.000 phòng khám thú y, 3.500 trung tâm cứu hộ động vật và nhiều cơ sở chăn nuôi trải rộng từ bò thịt, bò sữa, gia cầm đến lợn, nhu cầu về chẩn đoán phân tử nhanh và chính xác tiếp tục tăng ở mức hai chữ số.

Chủ nuôi thú cưng tại Hoa Kỳ chi trung bình 400 USD mỗi năm cho chăm sóc thú y trên mỗi thú cưng, và mức sẵn sàng đầu tư vào chẩn đoán tiên tiến thuộc hàng cao nhất trên toàn cầu. Riêng phân khúc động vật đồng hành chiếm hơn 60% chi tiêu chẩn đoán thú y, nhờ tỷ lệ nuôi thú cưng gia tăng hiện vượt 66% số hộ gia đình Hoa Kỳ.

Lĩnh vực chăn nuôi cũng mang đến những cơ hội hấp dẫn tương tự. USDA-APHIS giám sát hơn 30 bệnh động vật thuộc diện phải báo cáo, và năng lực xét nghiệm tại trang trại ngày càng được người chăn nuôi yêu cầu nhằm giảm phụ thuộc vào các phòng xét nghiệm tham chiếu tập trung. Sự sẵn sàng ứng phó dịch tả lợn châu Phi, giám sát cúm gia cầm và chẩn đoán bệnh hô hấp ở bò là những nhu cầu xét nghiệm ưu tiên cao.

Máy PCR cầm tay CarryOn giải quyết một khoảng trống quan trọng tại thị trường Hoa Kỳ: đưa chẩn đoán phân tử tiêu chuẩn vàng đến điểm chăm sóc tại chỗ mà không cần chi phí thiết bị hơn 50.000 USD, yêu cầu chuỗi lạnh và đào tạo chuyên biệt mà các hệ thống PCR truyền thống đòi hỏi.`,
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
      vi: `### Khung pháp lý đối với chẩn đoán thú y tại Hoa Kỳ

Lộ trình pháp lý của Hoa Kỳ đối với thiết bị chẩn đoán thú y liên quan đến nhiều cơ quan, tùy thuộc vào mục đích sử dụng:

**Trung tâm Sinh phẩm Thú y USDA-APHIS (CVB):**
Bộ kit xét nghiệm chẩn đoán thú y dùng cho mục đích quản lý (giám sát dịch bệnh, vận chuyển giữa các bang, chứng nhận xuất khẩu) yêu cầu giấy phép của USDA. CVB giám sát việc cấp phép sản phẩm, thanh tra cơ sở và kiểm nghiệm giải phóng lô. Quá trình cấp phép thường mất 12-24 tháng và yêu cầu chứng minh độ nhạy phân tích, độ đặc hiệu và độ tái lập thông qua các nghiên cứu thẩm định thực địa.

**Trung tâm Thuốc Thú y FDA (CVM):**
Thiết bị chẩn đoán dùng trong thực hành thú y lâm sàng thuộc sự giám sát của FDA. Mặc dù FDA trước đây đã thực hiện quyền tự quyết trong thực thi đối với nhiều xét nghiệm chẩn đoán thú y, bối cảnh pháp lý đang phát triển theo hướng các lộ trình chính thức hơn. Chứng nhận CE và hệ thống quản lý chất lượng ISO 13485 của CarryOn tạo nền tảng vững chắc cho các hồ sơ đăng ký pháp lý tại Hoa Kỳ.

**Yêu cầu của phòng xét nghiệm chẩn đoán thú y cấp bang:**
Mỗi bang có thể có các yêu cầu bổ sung đối với xét nghiệm chẩn đoán. Bác sĩ thú y cấp bang thường yêu cầu các quy trình xét nghiệm cụ thể đối với việc di chuyển động vật giữa các bang, và kết quả xét nghiệm tại trang trại có thể cần được xác nhận bởi các phòng xét nghiệm được bang phê duyệt để đưa ra quyết định quản lý.

**Yêu cầu nhập khẩu:**
Thiết bị y tế nhập khẩu vào Hoa Kỳ phải tuân thủ các quy định nhập khẩu của FDA, bao gồm thông báo trước, đăng ký cơ sở và liệt kê thiết bị. Chứng nhận CE hiện có của CarryOn giúp đơn giản hóa quy trình này, vì FDA công nhận ISO 13485 là tiêu chuẩn hệ thống chất lượng.

Yinrui Bio làm việc với các chuyên gia tư vấn pháp lý Hoa Kỳ có kinh nghiệm để định hướng quy trình phê duyệt và có thể hỗ trợ nhà phân phối các tài liệu cần thiết để thâm nhập thị trường.`,
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
      vi: `### Vận chuyển từ Ningbo đến Hoa Kỳ

**Cảng nhập khẩu chính:** Los Angeles (LA/Long Beach) và New York/New Jersey (Newark)

**Vận tải đường biển:**
- Ningbo đến Los Angeles: thời gian vận chuyển 12-15 ngày (dịch vụ trực tiếp)
- Ningbo đến New York: thời gian vận chuyển 25-30 ngày (qua Kênh đào Panama hoặc chuyển tải)
- Có các lựa chọn FCL (Full Container Load) và LCL (Less than Container Load)

**Vận tải hàng không:**
- Ningbo (NGB) đến LAX hoặc JFK: thời gian vận chuyển 2-3 ngày
- Khuyến nghị cho đơn hàng đầu tiên, thiết bị demo và lô hàng khẩn cấp
- Có dịch vụ chuyển phát nhanh (DHL/FedEx/UPS) cho các đơn vị mẫu

**Hải quan & Tuân thủ:**
- Yêu cầu thông báo trước của FDA đối với nhập khẩu thiết bị y tế
- Phân loại theo Harmonized Tariff Schedule đối với thiết bị chẩn đoán
- Giấy chứng nhận bán tự do và tài liệu CE tạo thuận lợi cho thông quan
- Incoterms: có FOB Ningbo hoặc CIF cảng đích

**Kho bãi & Phân phối:**
- Bảo quản ở nhiệt độ phòng loại bỏ chi phí logistics chuỗi lạnh
- Có quan hệ đối tác logistics bên thứ ba (3PL) tại Los Angeles và New Jersey
- Hỗ trợ mô hình giao trực tiếp cho nhà phân phối và drop-ship

Đội xuất khẩu của Yinrui Bio xử lý toàn bộ tài liệu bao gồm hóa đơn thương mại, phiếu đóng gói, giấy chứng nhận xuất xứ và hồ sơ pháp lý để đảm bảo thông quan thuận lợi.`,
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
      vi: `### Các ứng dụng chính tại Hoa Kỳ

**Chẩn đoán động vật đồng hành:**
Với hơn 90 triệu con chó và 74 triệu con mèo trong các hộ gia đình Hoa Kỳ, xét nghiệm động vật đồng hành đại diện cho cơ hội lớn nhất. Các bộ xét nghiệm cho chó của nền tảng CarryOn (bộ ba CDV-CPV-CCoV, bộ ba hô hấp, bộ ba bệnh do ve) và các bộ xét nghiệm cho mèo (hô hấp FHV-FCV-Mycoplasma, sàng lọc FeLV-FIV-FPV) đáp ứng những nhu cầu chẩn đoán phổ biến nhất trong thực hành thú y động vật nhỏ. Các chương trình y học tại trung tâm cứu hộ — thực hiện sàng lọc khi tiếp nhận tại hơn 3.500 cơ sở trên toàn quốc — đặc biệt hưởng lợi từ tính di động, khả năng bảo quản thuốc thử ở nhiệt độ phòng và quy trình làm việc tự động hoàn toàn của CarryOn.

**Giám sát dịch bệnh vật nuôi:**
Các chương trình chuẩn bị ứng phó dịch bệnh của USDA-APHIS tạo ra nhu cầu về năng lực chẩn đoán tại trang trại. Phát hiện dịch tả lợn châu Phi (ASF) là ưu tiên quốc gia, với việc USDA đầu tư đáng kể vào cơ sở hạ tầng phát hiện nhanh sau các đợt bùng phát ASF toàn cầu. Chip xét nghiệm ASF và PRRSV của CarryOn cho phép người chăn nuôi lợn thực hiện xét nghiệm giám sát mà không cần gửi mẫu đến phòng xét nghiệm chẩn đoán. Các ứng dụng cho bò và gia cầm đang được phát triển.

**Động vật hoang dã và bảo tồn:**
Các cơ quan quản lý động vật hoang dã liên bang và cấp bang ngày càng sử dụng chẩn đoán phân tử để giám sát dịch bệnh trong quần thể hoang dã. Bệnh hao mòn mãn tính (CWD) ở họ hươu nai, cúm gia cầm ở chim hoang dã và bệnh care ở chó trong cứu hộ động vật hoang dã là các mục tiêu giám sát chủ động, nơi PCR cầm tay mang lại lợi thế đáng kể so với xét nghiệm dựa trên phòng thí nghiệm.

**Học thuật và nghiên cứu:**
Hơn 30 trường thú y được AVMA công nhận tại Hoa Kỳ đại diện cho cả người dùng cuối và chuyên gia có ảnh hưởng. Các bệnh viện giảng dạy thực hiện nghiên cứu về dịch tễ học bệnh truyền nhiễm, thẩm định chẩn đoán tại chỗ và các sáng kiến One Health là những đơn vị tiên phong áp dụng sớm công nghệ PCR cầm tay.`,
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
      vi: `### Cơ hội phân phối & hợp tác tại Hoa Kỳ

Yinrui Bio tìm kiếm các đối tác phân phối chiến lược trên khắp Hoa Kỳ để đưa công nghệ PCR cầm tay CarryOn đến các phòng khám thú y, trung tâm cứu hộ và cơ sở chăn nuôi.

**Đối tác phân phối lý tưởng:**
- Các nhà phân phối chẩn đoán thú y lâu năm có quan hệ sẵn có với phòng khám
- Các công ty cung cấp vật tư thú y mong muốn mở rộng danh mục chẩn đoán phân tử
- Các nhà phân phối khu vực phụ trách các bang hoặc lãnh thổ cụ thể
- Các tổ chức mua hàng theo nhóm trong ngành thú y (GPO)

**Lợi ích hợp tác:**
- Có các thỏa thuận lãnh thổ độc quyền hoặc bán độc quyền
- Giá nhà phân phối cạnh tranh với tiềm năng biên lợi nhuận cao
- Hỗ trợ đào tạo kỹ thuật và tiếp thị đầy đủ
- Chương trình thiết bị demo cho thử nghiệm tại phòng khám
- Tài liệu tiếp thị đồng thương hiệu và tài nguyên giáo dục lâm sàng
- Quản lý tài khoản chuyên trách và đường dây hỗ trợ kỹ thuật

**Chiến lược thâm nhập thị trường:**
Cách tiếp cận được khuyến nghị của chúng tôi bắt đầu với chẩn đoán động vật đồng hành tại các phòng khám động vật nhỏ và chương trình y học tại trung tâm cứu hộ, sau đó mở rộng sang vật nuôi và các ứng dụng chuyên biệt. Cách tiếp cận theo giai đoạn này cho phép nhà phân phối xây dựng chuyên môn và quan hệ khách hàng trước khi mở rộng danh mục sản phẩm.

Liên hệ đội ngũ kinh doanh quốc tế của chúng tôi để thảo luận cơ hội hợp tác và nhận giá nhà phân phối chi tiết cùng tình trạng lãnh thổ còn trống.`,
    },
    faqs: [
      {
        q: {
          en: "Does the CarryOn PCR analyzer require FDA approval for use in U.S. veterinary clinics?",
          zh: "CarryOn PCR分析仪在美国兽医诊所使用是否需要FDA批准？",
          ja: "CarryOn PCRアナライザーは米国の動物病院で使用するためにFDA承認が必要ですか？",
          vi: "Máy PCR CarryOn có yêu cầu phê duyệt của FDA để sử dụng tại các phòng khám thú y ở Hoa Kỳ không?",
        },
        a: {
          en: "The regulatory pathway for veterinary diagnostics in the U.S. depends on the intended use. For clinical veterinary practice, FDA has historically exercised enforcement discretion for many veterinary diagnostic devices. The CarryOn holds CE certification and is manufactured under ISO 13485, providing a strong regulatory foundation. For USDA-regulated testing (interstate transport, export), additional USDA-APHIS licensing may be required. Yinrui Bio works with regulatory consultants to support U.S. market entry.",
          zh: "美国兽医诊断的监管途径取决于预期用途。对于临床兽医实践，FDA历来对许多兽医诊断设备行使执法自由裁量权。CarryOn持有CE认证，并在ISO 13485体系下生产。对于USDA监管的检测，可能需要额外的USDA-APHIS许可。胤瑞生物与监管顾问合作支持美国市场准入。",
          ja: "米国における獣医診断の規制経路は使用目的によって異なります。臨床獣医診療では、FDAは多くの獣医診断機器に対して執行裁量を行使してきました。CarryOnはCE認証を取得し、ISO 13485の下で製造されており、強力な規制基盤を提供します。",
          vi: "Lộ trình quản lý đối với chẩn đoán thú y tại Hoa Kỳ phụ thuộc vào mục đích sử dụng. Đối với thực hành lâm sàng thú y, trong lịch sử FDA thường áp dụng quyền tự quyết thực thi đối với nhiều thiết bị chẩn đoán thú y. CarryOn có chứng nhận CE và được sản xuất theo ISO 13485, tạo nền tảng pháp lý vững chắc. Đối với xét nghiệm thuộc quản lý của USDA (vận chuyển liên bang, xuất khẩu), có thể cần thêm giấy phép của USDA-APHIS. Yinrui Bio làm việc với các chuyên gia tư vấn pháp lý để hỗ trợ thâm nhập thị trường Hoa Kỳ.",
        },
      },
      {
        q: {
          en: "How long does shipping take from China to the United States?",
          zh: "从中国运送到美国需要多长时间？",
          ja: "中国から米国への配送にはどのくらいかかりますか？",
          vi: "Vận chuyển từ Trung Quốc đến Hoa Kỳ mất bao lâu?",
        },
        a: {
          en: "Ocean freight from Ningbo to Los Angeles takes 12-15 days, and to New York 25-30 days. Air freight takes 2-3 days to either coast. Express courier (DHL/FedEx) is available for sample units and typically delivers within 3-5 business days. All CarryOn products store at room temperature, eliminating cold chain shipping requirements.",
          zh: "从宁波到洛杉矶的海运需要12-15天，到纽约需要25-30天。空运到两个海岸需要2-3天。所有CarryOn产品室温存储，无需冷链运输。",
          ja: "寧波からロサンゼルスへの海上輸送は12〜15日、ニューヨークへは25〜30日かかります。航空輸送はどちらの海岸にも2〜3日です。全てのCarryOn製品は室温保存で、コールドチェーン輸送は不要です。",
          vi: "Vận tải đường biển từ Ningbo đến Los Angeles mất 12-15 ngày, đến New York mất 25-30 ngày. Vận tải hàng không mất 2-3 ngày đến cả hai bờ. Chuyển phát nhanh (DHL/FedEx) có sẵn cho thiết bị mẫu và thường giao trong vòng 3-5 ngày làm việc. Tất cả sản phẩm CarryOn bảo quản ở nhiệt độ phòng, loại bỏ yêu cầu vận chuyển chuỗi lạnh.",
        },
      },
      {
        q: {
          en: "Can the CarryOn system be used for shelter intake screening in the U.S.?",
          zh: "CarryOn系统可以用于美国收容所入所筛查吗？",
          ja: "CarryOnシステムは米国のシェルター入所スクリーニングに使用できますか？",
          vi: "Hệ thống CarryOn có thể được sử dụng để sàng lọc khi tiếp nhận tại trại cứu hộ ở Hoa Kỳ không?",
        },
        a: {
          en: "Yes, the CarryOn is ideally suited for shelter intake screening. The Feline FeLV-FIV-FPV Screening Triple Test Chip and Canine CDV-CPV-CCoV Triple Test Chip provide PCR-level accuracy for the most critical intake screening tests. The device's portability, battery operation, and room-temperature reagent storage make it practical for high-volume shelter environments where traditional PCR infrastructure is not available.",
          zh: "是的，CarryOn非常适合收容所入所筛查。猫FeLV-FIV-FPV筛查三联检芯片和犬CDV-CPV-CCoV三联检芯片为最关键的入所筛查检测提供PCR级精度。",
          ja: "はい、CarryOnはシェルター入所スクリーニングに最適です。猫FeLV-FIV-FPVスクリーニング3連検査チップと犬CDV-CPV-CCoV 3連検査チップが、最も重要な入所スクリーニング検査にPCRレベルの精度を提供します。",
          vi: "Có, CarryOn rất phù hợp để sàng lọc khi tiếp nhận tại trại cứu hộ. Chip xét nghiệm bộ ba sàng lọc FeLV-FIV-FPV ở mèo và chip xét nghiệm bộ ba CDV-CPV-CCoV ở chó cung cấp độ chính xác tương đương PCR cho các xét nghiệm sàng lọc tiếp nhận quan trọng nhất. Tính di động của thiết bị, vận hành bằng pin và bảo quản thuốc thử ở nhiệt độ phòng khiến thiết bị phù hợp thực tế cho môi trường trại cứu hộ có lưu lượng lớn, nơi không có cơ sở hạ tầng PCR truyền thống.",
        },
      },
      {
        q: {
          en: "What is the price range for the CarryOn system in the U.S. market?",
          zh: "CarryOn系统在美国市场的价格范围是多少？",
          ja: "米国市場でのCarryOnシステムの価格帯はどのくらいですか？",
          vi: "Khoảng giá của hệ thống CarryOn trên thị trường Hoa Kỳ là bao nhiêu?",
        },
        a: {
          en: "The CarryOn analyzer is positioned at $3,000-5,000 for the device, with per-test chip costs of $15-30 depending on the panel. This is significantly more affordable than traditional laboratory PCR systems ($50,000+) and delivers comparable accuracy. Distributor pricing and volume discounts are available. Contact us for a detailed quote.",
          zh: "CarryOn分析仪的设备定价为3,000-5,000美元，每次检测芯片费用为15-30美元。这比传统实验室PCR系统（5万美元以上）经济得多。经销商定价和批量折扣可用。",
          ja: "CarryOnアナライザーはデバイス価格3,000〜5,000ドル、テストチップコストはパネルにより1回15〜30ドルです。従来の検査室PCRシステム（5万ドル以上）と比べて大幅に手頃です。ディストリビューター価格とボリュームディスカウントをご用意しています。",
          vi: "Máy CarryOn được định giá ở mức $3,000-5,000 cho thiết bị, với chi phí chip cho mỗi xét nghiệm là $15-30 tùy theo bộ xét nghiệm. Mức này phải chăng hơn đáng kể so với hệ thống PCR phòng xét nghiệm truyền thống ($50,000+) và mang lại độ chính xác tương đương. Có giá dành cho nhà phân phối và chiết khấu theo số lượng. Liên hệ với chúng tôi để nhận báo giá chi tiết.",
        },
      },
      {
        q: {
          en: "Does Yinrui Bio offer distributor partnerships in the United States?",
          zh: "胤瑞生物在美国提供经销商合作吗？",
          ja: "胤瑞バイオは米国でディストリビューターパートナーシップを提供していますか？",
          vi: "Yinrui Bio có cung cấp quan hệ đối tác phân phối tại Hoa Kỳ không?",
        },
        a: {
          en: "Yes, we are actively seeking distribution partners across the United States. We offer exclusive and semi-exclusive territory agreements, competitive pricing, technical training, demo unit programs, and dedicated account management. Ideal partners include veterinary diagnostic distributors, veterinary supply companies, and regional distributors with established clinic relationships.",
          zh: "是的，我们正在积极寻求美国各地的分销合作伙伴。我们提供独家和半独家区域协议、有竞争力的定价、技术培训、演示设备计划和专属客户管理。",
          ja: "はい、米国全土でディストリビューションパートナーを積極的に募集しています。独占・準独占テリトリー契約、競争力のある価格設定、技術トレーニング、デモユニットプログラム、専任アカウント管理を提供しています。",
          vi: "Có, chúng tôi đang tích cực tìm kiếm đối tác phân phối trên khắp Hoa Kỳ. Chúng tôi cung cấp thỏa thuận lãnh thổ độc quyền và bán độc quyền, giá cạnh tranh, đào tạo kỹ thuật, chương trình thiết bị demo và quản lý tài khoản chuyên trách. Đối tác lý tưởng bao gồm nhà phân phối chẩn đoán thú y, công ty vật tư thú y và nhà phân phối khu vực có quan hệ sẵn có với phòng khám.",
        },
      },
      {
        q: {
          en: "Which CarryOn test panels are most relevant for U.S. veterinary practices?",
          zh: "哪些CarryOn检测面板最适合美国兽医实践？",
          ja: "米国の獣医診療に最も関連するCarryOnテストパネルはどれですか？",
          vi: "Bộ xét nghiệm CarryOn nào phù hợp nhất với các phòng khám thú y tại Hoa Kỳ?",
        },
        a: {
          en: "For small animal practices, the top panels are: Canine CDV-CPV-CCoV Triple (puppy screening), Feline FeLV-FIV-FPV Screening (shelter intake), Feline Respiratory Triple (upper respiratory infections), Canine Respiratory Triple (kennel cough), and Canine Tick-Borne Triple (Babesia, Ehrlichia, Leptospira). For livestock operations, the African Swine Fever and PRRSV chips are high priority. View the complete test chip catalog for all available panels.",
          zh: "对于小动物诊所，最热门的面板包括：犬CDV-CPV-CCoV三联检（幼犬筛查）、猫FeLV-FIV-FPV筛查（收容所入所）、猫呼吸道三联检、犬呼吸道三联检和犬蜱传疾病三联检。对于畜牧场，非洲猪瘟和PRRSV芯片是高优先级。",
          ja: "小動物診療では、犬CDV-CPV-CCoV 3連（子犬スクリーニング）、猫FeLV-FIV-FPVスクリーニング（シェルター入所）、猫呼吸器3連、犬呼吸器3連、犬ダニ媒介3連が人気パネルです。畜産では、アフリカ豚熱とPRRSVチップが高優先度です。",
          vi: "Đối với phòng khám động vật nhỏ, các bộ xét nghiệm hàng đầu là: Bộ ba CDV-CPV-CCoV ở chó (sàng lọc chó con), Sàng lọc FeLV-FIV-FPV ở mèo (tiếp nhận tại trại cứu hộ), Bộ ba hô hấp ở mèo (nhiễm trùng đường hô hấp trên), Bộ ba hô hấp ở chó (ho cũi chó) và Bộ ba bệnh do ve truyền ở chó (Babesia, Ehrlichia, Leptospira). Đối với cơ sở chăn nuôi, chip dịch tả lợn châu Phi (ASF) và PRRSV là ưu tiên cao. Xem danh mục chip xét nghiệm đầy đủ để biết tất cả bộ xét nghiệm hiện có.",
        },
      },
    ],
  },

  // 2. Brazil
  {
    slug: "brazil",
    countryCode: "BR",
    name: { en: "Brazil", zh: "巴西", ja: "ブラジル", vi: "Brazil" },
    heroTitle: {
      en: "Portable PCR Diagnostics for Brazil's Veterinary & Livestock Market",
      zh: "面向巴西兽医与畜牧市场的便携式PCR诊断",
      ja: "ブラジルの獣医・畜産市場向けポータブルPCR診断",
      vi: "Chẩn đoán PCR cầm tay cho thị trường thú y và chăn nuôi Brazil",
    },
    heroSubtitle: {
      en: "Serving Latin America's largest animal health market with field-deployable molecular diagnostics for cattle, poultry, swine, and companion animals.",
      zh: "以现场可部署的分子诊断服务拉美最大的动物健康市场，覆盖牛、禽、猪和伴侣动物。",
      ja: "牛、家禽、豚、コンパニオンアニマル向けのフィールド展開可能な分子診断で、ラテンアメリカ最大の動物健康市場にサービスを提供。",
      vi: "Phục vụ thị trường sức khỏe động vật lớn nhất Mỹ Latinh bằng chẩn đoán phân tử triển khai tại thực địa cho gia súc, gia cầm, lợn và động vật cảnh.",
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
      vi: `Brazil là thị trường thú y lớn thứ hai thế giới và lớn nhất Mỹ Latinh. Ngành sức khỏe động vật của nước này tạo ra hơn 2 tỷ USD mỗi năm, nhờ đàn gia súc thương mại lớn nhất thế giới (hơn 220 triệu con), ngành gia cầm lớn thứ ba và quần thể động vật cảnh đang tăng nhanh với hơn 140 triệu thú cưng.

Ngành chăn nuôi chi phối nền kinh tế nông nghiệp của Brazil, với xuất khẩu thịt bò và gia cầm đóng góp nguồn thu quốc gia quan trọng. Bộ Nông nghiệp Brazil (MAPA) duy trì các chương trình giám sát dịch bệnh nghiêm ngặt đối với bệnh lở mồm long móng, dịch tả lợn châu Phi, cúm gia cầm và bệnh brucellosis ở bò. Năng lực chẩn đoán tại trang trại và triển khai tại thực địa là thiết yếu để duy trì tình trạng sạch bệnh của Brazil và bảo vệ khả năng tiếp cận thị trường xuất khẩu.

Thị trường động vật cảnh tại Brazil đã tăng trưởng mạnh mẽ, với tỷ lệ hộ gia đình nuôi thú cưng đạt hơn 60%. Chủ vật nuôi Brazil ngày càng đầu tư vào chăm sóc thú y tiên tiến, và số phòng khám thú y đã tăng lên hơn 50.000 trên toàn quốc. Nhu cầu về chẩn đoán tại chỗ — đặc biệt là xét nghiệm dựa trên PCR đối với parvovirus ở chó, ehrlichiosis và leishmaniasis — tiếp tục tăng nhanh.

Máy PCR cầm tay CarryOn đặc biệt phù hợp với địa lý rộng lớn của Brazil, nơi nhiều cơ sở chăn nuôi và phòng khám thú y nằm xa phòng xét nghiệm tham chiếu. Vận hành bằng pin, bảo quản thuốc thử ở nhiệt độ phòng và tính di động chắc chắn khiến thiết bị lý tưởng để triển khai tại thực địa trên khắp các vùng nông nghiệp đa dạng của Brazil.`,
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
      vi: `### Lộ trình quản lý tại Brazil

**MAPA (Bộ Nông nghiệp, Chăn nuôi và Cung ứng):**
Sản phẩm chẩn đoán thú y tại Brazil do MAPA quản lý. Đăng ký yêu cầu nộp hồ sơ kỹ thuật sản phẩm, dữ liệu xác nhận phân tích và chứng nhận hệ thống quản lý chất lượng. MAPA công nhận dấu CE và chứng nhận ISO 13485, giúp tăng tốc quá trình đăng ký.

Quá trình đăng ký thường mất 6-12 tháng. MAPA có thể yêu cầu các nghiên cứu xác nhận thực địa tại Brazil đối với một số tuyên bố sản phẩm. Yinrui Bio làm việc với các đại lý quản lý quy định có kinh nghiệm của Brazil để xử lý quá trình đăng ký.

**ANVISA:**
Đối với các sản phẩm chẩn đoán có thể có ứng dụng cho sức khỏe con người (như xét nghiệm bệnh lây từ động vật sang người), có thể áp dụng sự giám sát của ANVISA (Cơ quan Giám sát Sức khỏe Quốc gia). Các bộ xét nghiệm phát hiện mầm bệnh cúm và bệnh hô hấp của CarryOn có thể cần đăng ký ANVISA tùy theo tuyên bố mục đích sử dụng.

**Yêu cầu nhập khẩu:**
Brazil áp thuế nhập khẩu và các loại thuế (II, IPI, ICMS, PIS, COFINS) đối với thiết bị y tế nhập khẩu. Tổng chi phí đến nơi bao gồm thuế có thể cộng thêm 40-60% vào giá FOB. Các thỏa thuận kho ngoại quan chiến lược và lựa chọn Khu thương mại tự do Manaus có thể giảm gánh nặng thuế cho các nhà phân phối có sản lượng cao.

Chứng nhận CE và tài liệu ISO 13485 được cơ quan chức năng Brazil công nhận, tạo lộ trình thuận lợi cho việc đăng ký CarryOn.`,
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
      vi: `### Vận chuyển từ Ningbo đến Brazil

**Cảng chính:** Santos (khu vực Sao Paulo) — cảng lớn nhất Mỹ Latinh

**Vận tải đường biển:**
- Ningbo đến Santos: thời gian vận chuyển 30-35 ngày
- Có dịch vụ trực tiếp và trung chuyển qua Singapore hoặc Địa Trung Hải
- Lựa chọn FCL và LCL

**Lưu ý hải quan:**
- Quy trình nhập khẩu của Brazil phức tạp với nhiều tầng thuế
- Cần đại lý hải quan có kinh nghiệm
- Sản phẩm chẩn đoán yêu cầu thông quan MAPA
- Yêu cầu bảo quản ở nhiệt độ phòng giúp đơn giản hóa đáng kể logistics

**Trung tâm phân phối:**
- Sao Paulo là trung tâm phân phối chính cho toàn Brazil
- Có quan hệ đối tác logistics bên thứ ba để phủ sóng toàn quốc

Yinrui Bio cung cấp đầy đủ chứng từ FOB Ningbo và làm việc với các đối tác nhập khẩu Brazil có kinh nghiệm trong logistics thiết bị y tế.`,
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
      vi: `### Ứng dụng chính tại Brazil

**Giám sát bệnh ở gia súc:**
Đàn gia súc hơn 220 triệu con của Brazil đòi hỏi giám sát dịch bệnh trên diện rộng. Xét nghiệm bệnh brucellosis ở bò, bệnh lao và bệnh lở mồm long móng là bắt buộc theo quy định của MAPA. Nền tảng CarryOn cho phép xét nghiệm tại trang trại, giúp giảm phụ thuộc vào phòng xét nghiệm tập trung và tăng tốc thời gian ứng phó dịch bệnh trên khắp các vùng nông thôn rộng lớn của Brazil.

**Giám sát sức khỏe gia cầm:**
Là nhà sản xuất gia cầm lớn thứ ba thế giới, ngành gia cầm Brazil đòi hỏi giám sát liên tục cúm gia cầm và bệnh Newcastle. Năng lực xét nghiệm phân tử tại trang trại giúp người chăn nuôi duy trì tình trạng sạch bệnh của Brazil, yếu tố quan trọng để tiếp cận thị trường xuất khẩu.

**Kiểm soát bệnh ở lợn:**
Chuẩn bị ứng phó dịch tả lợn châu Phi là ưu tiên quốc gia. Chip xét nghiệm ASF của CarryOn cho phép sàng lọc nhanh tại trang trại ở các cơ sở chăn nuôi lợn, hỗ trợ các chương trình giám sát của MAPA và bảo vệ ngành xuất khẩu thịt lợn đang tăng trưởng của Brazil.

**Chẩn đoán động vật cảnh:**
Với hơn 140 triệu thú cưng và hơn 50.000 phòng khám thú y, thị trường động vật cảnh của Brazil đòi hỏi chẩn đoán phân tử dễ tiếp cận. Xét nghiệm parvovirus ở chó, ehrlichiosis (đặc hữu ở vùng nhiệt đới Brazil) và leishmaniasis là những ứng dụng ưu tiên cao. Giá phải chăng và tính dễ sử dụng của CarryOn giúp chẩn đoán PCR tiếp cận được với các phòng khám ở mọi phân khúc kinh tế.

**Nuôi trồng thủy sản:**
Ngành nuôi trồng thủy sản đang phát triển của Brazil, đặc biệt là nuôi cá rô phi, mở ra cơ hội mới cho phát hiện mầm bệnh trong nước và giám sát bệnh ở cá.`,
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
      vi: `### Phân phối & Đối tác tại Brazil

Yinrui Bio đang tìm kiếm các nhà phân phối chẩn đoán thú y và chăn nuôi có uy tín tại Brazil, lý tưởng là có kinh nghiệm đăng ký MAPA.

**Hồ sơ đối tác:**
- Nhà phân phối chẩn đoán thú y có phạm vi toàn quốc hoặc khu vực
- Công ty vật tư nông nghiệp phục vụ người chăn nuôi
- Chuỗi phòng xét nghiệm thú y đang tìm cách mở rộng chẩn đoán tại chỗ

**Hỗ trợ cung cấp:**
- Hướng dẫn đăng ký MAPA và hỗ trợ tài liệu
- Tài liệu tiếp thị bằng tiếng Bồ Đào Nha
- Đào tạo kỹ thuật bằng tiếng Bồ Đào Nha
- Chương trình thiết bị demo
- Biên lợi nhuận cạnh tranh cho nhà phân phối

Liên hệ với chúng tôi để khám phá cơ hội phân phối tại Brazil và khắp Mỹ Latinh.`,
    },
    faqs: [
      {
        q: { en: "Is the CarryOn registered with MAPA in Brazil?", zh: "CarryOn是否在巴西MAPA注册？", ja: "CarryOnはブラジルのMAPAに登録されていますか？", vi: "CarryOn đã được đăng ký với MAPA tại Brazil chưa?" },
        a: { en: "Yinrui Bio is actively pursuing MAPA registration for the CarryOn platform in Brazil. Our CE certification and ISO 13485 quality management system are recognized by MAPA, which facilitates the registration process. We work with experienced Brazilian regulatory agents to manage the registration timeline, typically 6-12 months.", zh: "胤瑞生物正在积极推进CarryOn平台在巴西的MAPA注册。我们的CE认证和ISO 13485质量管理体系获得MAPA认可，有助于加速注册。", ja: "胤瑞バイオはブラジルでCarryOnプラットフォームのMAPA登録を積極的に推進しています。CE認証とISO 13485はMAPAに認められています。", vi: "Yinrui Bio đang tích cực theo đuổi việc đăng ký MAPA cho nền tảng CarryOn tại Brazil. Chứng nhận CE và hệ thống quản lý chất lượng ISO 13485 của chúng tôi được MAPA công nhận, giúp tạo thuận lợi cho quá trình đăng ký. Chúng tôi làm việc với các đại diện pháp lý Brazil có kinh nghiệm để quản lý tiến độ đăng ký, thường từ 6-12 tháng." },
      },
      {
        q: { en: "How long does shipping take from China to Santos, Brazil?", zh: "从中国运送到巴西桑托斯需要多长时间？", ja: "中国からブラジルのサントスまでの配送時間は？", vi: "Thời gian vận chuyển từ Trung Quốc đến Santos, Brazil là bao lâu?" },
        a: { en: "Ocean freight from Ningbo to Santos takes approximately 30-35 days. Air freight is available for urgent orders (3-5 days). All CarryOn products store at room temperature, eliminating cold chain shipping requirements that add cost and complexity in Brazil's warm climate.", zh: "从宁波到桑托斯的海运约需30-35天。空运可用于紧急订单（3-5天）。所有CarryOn产品室温存储。", ja: "寧波からサントスへの海上輸送は約30〜35日です。航空輸送は緊急注文に利用可能（3〜5日）。全製品は室温保存です。", vi: "Vận tải đường biển từ Ningbo đến Santos mất khoảng 30-35 ngày. Vận tải hàng không có sẵn cho các đơn hàng khẩn cấp (3-5 ngày). Tất cả sản phẩm CarryOn được bảo quản ở nhiệt độ phòng, loại bỏ yêu cầu vận chuyển chuỗi lạnh vốn làm tăng chi phí và độ phức tạp trong khí hậu ấm của Brazil." },
      },
      {
        q: { en: "Which diseases are most important for testing in Brazil?", zh: "巴西最重要的检测疾病有哪些？", ja: "ブラジルで最も重要な検査対象疾病は？", vi: "Những bệnh nào là quan trọng nhất để xét nghiệm tại Brazil?" },
        a: { en: "For livestock: African Swine Fever, PRRSV, bovine brucellosis, and avian influenza are priorities. For companion animals: canine parvovirus, ehrlichiosis (highly endemic in tropical regions), leishmaniasis, and feline FeLV/FIV are the most-requested tests. Our test chip development pipeline includes panels specifically addressing Brazilian market needs.", zh: "畜牧：非洲猪瘟、PRRSV、牛布鲁氏菌病和禽流感是重点。伴侣动物：犬细小病毒、埃利希体病、利什曼病和猫FeLV/FIV是最常需要的检测。", ja: "家畜：アフリカ豚熱、PRRSV、牛ブルセラ症、鳥インフルエンザが優先。コンパニオンアニマル：犬パルボウイルス、エールリヒア症、リーシュマニア症、猫FeLV/FIVが最も需要のある検査です。", vi: "Đối với vật nuôi: dịch tả lợn châu Phi (ASF), PRRSV, brucellosis ở bò và cúm gia cầm là những ưu tiên. Đối với thú cưng: parvovirus ở chó, ehrlichiosis (rất phổ biến ở các vùng nhiệt đới), leishmaniasis và FeLV/FIV ở mèo là những xét nghiệm được yêu cầu nhiều nhất. Quy trình phát triển chip xét nghiệm của chúng tôi bao gồm các bộ xét nghiệm đáp ứng cụ thể nhu cầu thị trường Brazil." },
      },
      {
        q: { en: "What are the import taxes for diagnostic equipment in Brazil?", zh: "巴西诊断设备的进口税是多少？", ja: "ブラジルにおける診断機器の輸入税はいくらですか？", vi: "Thuế nhập khẩu đối với thiết bị chẩn đoán tại Brazil là gì?" },
        a: { en: "Brazil has multiple tax layers on imports: Import Duty (II), IPI, ICMS, PIS, and COFINS. Total taxes can add 40-60% to the FOB price. Medical diagnostic equipment may qualify for reduced rates under certain tariff classifications. We work with Brazilian import specialists to optimize the landed cost structure for our distributors.", zh: "巴西对进口有多层税收：进口关税(II)、IPI、ICMS、PIS和COFINS。总税费可增加FOB价格的40-60%。我们与巴西进口专家合作优化到岸成本结构。", ja: "ブラジルには輸入に対する複数の税層があります。合計税金はFOB価格の40〜60%増加する可能性があります。ブラジルの輸入専門家と協力してディストリビューターのランディングコスト構造を最適化します。", vi: "Brazil có nhiều lớp thuế đối với hàng nhập khẩu: Thuế nhập khẩu (II), IPI, ICMS, PIS và COFINS. Tổng thuế có thể cộng thêm 40-60% vào giá FOB. Thiết bị chẩn đoán y tế có thể đủ điều kiện hưởng mức thuế ưu đãi theo một số phân loại thuế quan nhất định. Chúng tôi làm việc với các chuyên gia nhập khẩu Brazil để tối ưu cơ cấu chi phí hàng về đến nơi cho các nhà phân phối của mình." },
      },
      {
        q: { en: "Does the CarryOn work in Brazil's tropical climate?", zh: "CarryOn能在巴西的热带气候下工作吗？", ja: "CarryOnはブラジルの熱帯気候で使用できますか？", vi: "CarryOn có hoạt động được trong khí hậu nhiệt đới của Brazil không?" },
        a: { en: "Yes. The CarryOn is designed for field deployment in diverse environments, including tropical climates. The device operates at temperatures from 15-35 degrees C, and test chips store at room temperature (15-30 degrees C) with a 12-month shelf life. The closed-system design prevents environmental contamination, and the battery-powered operation eliminates the need for stable power infrastructure common in remote agricultural areas.", zh: "是的。CarryOn专为多样环境的现场部署设计，包括热带气候。设备在15-35°C温度下工作，芯片室温存储12个月有效期。", ja: "はい。CarryOnは熱帯気候を含む多様な環境でのフィールド展開用に設計されています。デバイスは15〜35°Cで動作し、チップは室温で12ヶ月の有効期限です。", vi: "Có. CarryOn được thiết kế để triển khai tại thực địa trong nhiều môi trường khác nhau, bao gồm khí hậu nhiệt đới. Thiết bị hoạt động ở nhiệt độ từ 15-35 degrees C, và chip xét nghiệm được bảo quản ở nhiệt độ phòng (15-30 degrees C) với hạn sử dụng 12 tháng. Thiết kế hệ thống kín giúp ngăn ngừa ô nhiễm môi trường, và vận hành bằng pin loại bỏ nhu cầu về hạ tầng nguồn điện ổn định vốn phổ biến ở các khu vực nông nghiệp xa xôi." },
      },
      {
        q: { en: "Can the CarryOn be used for meat species identification in Brazil?", zh: "CarryOn能用于巴西的肉类物种鉴定吗？", ja: "CarryOnはブラジルでの肉種鑑定に使用できますか？", vi: "CarryOn có thể được sử dụng để xác định loài thịt tại Brazil không?" },
        a: { en: "Yes. Our meat species identification quad test chips can detect beef, pork, chicken, duck, lamb, horse, and donkey DNA in processed or raw meat products within 60 minutes. This is relevant for Brazil's meat export industry, food safety enforcement, and Halal certification compliance — critical for maintaining access to Middle Eastern export markets.", zh: "是的。我们的肉源鉴定四联检芯片可在60分钟内检测加工或生鲜肉产品中的牛肉、猪肉、鸡肉、鸭肉等DNA。这与巴西肉类出口业和清真认证合规相关。", ja: "はい。肉種鑑定4連検査チップは60分以内に加工肉・生肉の牛、豚、鶏、鴨等のDNAを検出できます。ブラジルの食肉輸出業とハラール認証に関連します。", vi: "Có. Chip xét nghiệm 4 chỉ tiêu xác định loài thịt của chúng tôi có thể phát hiện ADN bò, lợn, gà, vịt, cừu, ngựa và lừa trong các sản phẩm thịt đã qua chế biến hoặc tươi sống trong vòng 60 phút. Điều này có ý nghĩa đối với ngành xuất khẩu thịt của Brazil, công tác thực thi an toàn thực phẩm và tuân thủ chứng nhận Halal — quan trọng để duy trì khả năng tiếp cận thị trường xuất khẩu Trung Đông." },
      },
    ],
  },

  // 3. India
  {
    slug: "india",
    countryCode: "IN",
    name: { en: "India", zh: "印度", ja: "インド", vi: "Ấn Độ" },
    heroTitle: {
      en: "Portable PCR Diagnostics for India's Veterinary & Livestock Sector",
      zh: "面向印度兽医与畜牧领域的便携式PCR诊断",
      ja: "インドの獣医・畜産分野向けポータブルPCR診断",
      vi: "Chẩn đoán PCR cầm tay cho ngành Thú y & Chăn nuôi Ấn Độ",
    },
    heroSubtitle: {
      en: "Empowering India's livestock disease surveillance and growing companion animal care with affordable, field-deployable molecular diagnostics.",
      zh: "以经济实惠、可现场部署的分子诊断赋能印度畜牧疾病监测和日益增长的伴侣动物护理。",
      ja: "手頃な価格でフィールド展開可能な分子診断で、インドの家畜疾病監視と成長するコンパニオンアニマルケアを支援。",
      vi: "Nâng cao năng lực giám sát dịch bệnh vật nuôi và chăm sóc thú cưng đang phát triển tại Ấn Độ bằng các giải pháp chẩn đoán phân tử giá cả phải chăng, có thể triển khai tại thực địa.",
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
      vi: `Ấn Độ là quốc gia có đàn vật nuôi lớn nhất thế giới, với hơn 300 triệu bò, 150 triệu dê, 75 triệu trâu, cùng ngành chăn nuôi gia cầm và nuôi trồng thủy sản đang phát triển nhanh. Thị trường chẩn đoán thú y tại Ấn Độ ước tính đạt 500 triệu USD và tăng trưởng 12-15% mỗi năm, đưa nơi đây trở thành một trong những thị trường tăng trưởng nhanh nhất toàn cầu.

Chương trình Kiểm soát Dịch bệnh Động vật Quốc gia (NADCP) của Chính phủ Ấn Độ đã phân bổ hơn 1,5 tỷ USD cho công tác xóa bỏ dịch bệnh, tập trung vào bệnh lở mồm long móng và brucellosis. Điều này tạo ra nhu cầu đáng kể đối với các công cụ chẩn đoán có thể triển khai tại thực địa, hỗ trợ các chiến dịch giám sát toàn quốc tại khu vực nông thôn nơi hạ tầng phòng xét nghiệm còn hạn chế.

Thị trường thú cưng của Ấn Độ cũng đang tăng trưởng bùng nổ. Tỷ lệ nuôi thú cưng tại đô thị tăng nhanh, và Ấn Độ hiện có hơn 10.000 phòng khám thú y. Ngành chăm sóc thú cưng đang tăng trưởng hơn 20% mỗi năm, kéo theo nhu cầu ngày càng cao đối với các dịch vụ chẩn đoán tiên tiến mà trước đây không có sẵn bên ngoài các thành phố lớn.

Nền tảng CarryOn giải quyết thách thức đặc thù của Ấn Độ: cung cấp chẩn đoán phân tử đạt chất lượng phòng xét nghiệm trên khắp một quốc gia rộng lớn, đa dạng về địa lý, nơi hạ tầng chuỗi lạnh và nhân sự phòng xét nghiệm được đào tạo tập trung tại các trung tâm đô thị. Vận hành bằng pin, bảo quản thuốc thử ở nhiệt độ phòng và yêu cầu không cần đào tạo giúp thiết bị dễ tiếp cận với chuyên gia thú y ở mọi cấp độ.`,
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
      vi: `### Khung pháp lý tại Ấn Độ

**CDSCO (Central Drugs Standard Control Organisation):**
Thiết bị chẩn đoán in vitro tại Ấn Độ được quản lý theo Quy tắc Thiết bị Y tế 2017. IVD được phân loại thành Nhóm A đến D dựa trên mức độ rủi ro. Thiết bị chẩn đoán thú y thường thuộc Nhóm A hoặc B, yêu cầu đăng ký với CDSCO thông qua đại lý Ấn Độ được ủy quyền.

**DAHD (Department of Animal Husbandry and Dairying):**
Các xét nghiệm chẩn đoán chuyên ngành thú y được sử dụng trong chương trình giám sát của chính phủ có thể cần phê duyệt từ DAHD. Bộ phối hợp với các sở chăn nuôi cấp bang để triển khai giám sát dịch bệnh và chiến dịch tiêm phòng.

**Chứng nhận BIS:**
Một số thiết bị điện tử có thể cần chứng nhận của Bureau of Indian Standards (BIS) để nhập khẩu và bán. Thông số kỹ thuật của thiết bị CarryOn tương thích với yêu cầu của BIS.

**Yêu cầu nhập khẩu:**
- Thiết bị y tế cần giấy phép nhập khẩu từ CDSCO
- Thiết bị có dấu CE được hưởng quy trình xét duyệt nhanh
- Thuế hải quan cơ bản từ 5-10% đối với thiết bị chẩn đoán
- GST 12-18% áp dụng cho thiết bị y tế

Yinrui Bio hợp tác với các nhà tư vấn pháp lý Ấn Độ có kinh nghiệm để xử lý đăng ký CDSCO và tạo thuận lợi cho việc gia nhập thị trường.`,
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
      vi: `### Vận chuyển từ Ningbo đến Ấn Độ

**Cảng chính:** Mumbai (JNPT/Nhava Sheva) và Chennai

**Vận tải đường biển:**
- Ningbo đến Mumbai: thời gian vận chuyển 12-16 ngày
- Ningbo đến Chennai: thời gian vận chuyển 10-14 ngày
- Có nhiều tuyến trực tiếp thường xuyên

**Quy trình hải quan:**
- Cần giấy phép nhập khẩu CDSCO trước khi giao hàng
- Chứng nhận BIS có thể áp dụng cho linh kiện điện tử
- Thuế hải quan cơ bản 5-10% + GST 12-18%
- Bảo quản ở nhiệt độ phòng giúp đơn giản hóa logistics nội địa trên các vùng khí hậu đa dạng của Ấn Độ

**Cân nhắc phân phối:**
- Mumbai và Delhi là các trung tâm phân phối chính
- Hạ tầng chuỗi lạnh của bên thứ ba còn hạn chế tại nông thôn Ấn Độ — bảo quản ở nhiệt độ phòng là lợi thế quan trọng
- Các mô hình phân phối thương mại điện tử và trực tiếp đến phòng khám đang nổi lên

Yinrui Bio cung cấp điều kiện FOB Ningbo hoặc CIF cảng Ấn Độ kèm bộ chứng từ đầy đủ để thông quan hàng hóa tại Ấn Độ.`,
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
      vi: `### Ứng dụng chính tại Ấn Độ

**Giám sát dịch bệnh vật nuôi:**
Chương trình Kiểm soát Dịch bệnh Động vật Quốc gia của Ấn Độ tạo ra nhu cầu rất lớn đối với chẩn đoán tại thực địa. Việc giám sát bệnh lở mồm long móng, brucellosis, cúm gia cầm và dịch tả lợn châu Phi (ASF) trên hơn 300 triệu con bò và các cơ sở chăn nuôi gia cầm quy mô lớn của Ấn Độ đòi hỏi các giải pháp xét nghiệm cầm tay có thể hoạt động mà không cần hạ tầng phòng xét nghiệm.

**Kiểm soát chất lượng ngành sữa:**
Ấn Độ là quốc gia sản xuất sữa lớn nhất thế giới. Xét nghiệm bệnh lao ở bò, brucellosis và các tác nhân gây viêm vú giúp đảm bảo chất lượng sữa và tuân thủ yêu cầu xuất khẩu. Tính di động của CarryOn cho phép xét nghiệm tại các hợp tác xã sữa và trung tâm thu gom trên khắp vùng nông thôn Ấn Độ.

**Chẩn đoán thú cưng:**
Ngành chăm sóc thú cưng của Ấn Độ đang tăng trưởng hơn 20% mỗi năm. Parvovirus ở chó, bệnh care và các bệnh do ve truyền (ehrlichiosis, babesiosis) là những nhu cầu chẩn đoán phổ biến nhất. CarryOn giúp các phòng khám thú cưng ngày càng tăng tại các thành phố cấp 2 và cấp 3 tiếp cận chẩn đoán ở cấp độ PCR.

**Gia cầm và nuôi trồng thủy sản:**
Ngành chăn nuôi gia cầm trị giá hơn 30 tỷ USD và lĩnh vực nuôi trồng thủy sản đang phát triển nhanh của Ấn Độ đòi hỏi giám sát tác nhân gây bệnh như cúm gia cầm, bệnh Newcastle và các mầm bệnh ở cá. Xét nghiệm tại trang trại giúp giảm thời gian phản hồi và hỗ trợ tuân thủ yêu cầu xuất khẩu.

**Chương trình của chính phủ và tổ chức phi chính phủ:**
Các tổ chức quốc tế (FAO, OIE, World Bank) tài trợ cho các chương trình giám sát dịch bệnh động vật tại Ấn Độ. Các nền tảng PCR cầm tay ngày càng được chỉ định trong hồ sơ mời thầu cho các chương trình này.`,
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
      vi: `### Phân phối & Hợp tác tại Ấn Độ

Yinrui Bio tìm kiếm đối tác phân phối trên khắp Ấn Độ, đặc biệt tập trung vào các công ty chẩn đoán thú y, nhà phân phối vật tư nông nghiệp và chuyên gia đấu thầu chính phủ.

**Đối tác lý tưởng:**
- Nhà phân phối chẩn đoán thú y có mạng lưới toàn Ấn Độ hoặc theo khu vực
- Công ty vật tư nông nghiệp phục vụ nông dân chăn nuôi
- Công ty có kinh nghiệm trong quy trình đấu thầu chính phủ (DAHD, sở chăn nuôi cấp bang)
- Nhà phân phối dược phẩm thú y đang tìm cách mở rộng mảng chẩn đoán

**Hỗ trợ:** Đào tạo kỹ thuật, tài liệu tiếp thị bằng tiếng Hindi và ngôn ngữ địa phương, chương trình thiết bị dùng thử, hỗ trợ đấu thầu chính phủ và giá cạnh tranh cho thị trường Ấn Độ.

Liên hệ với chúng tôi để thảo luận cơ hội phân phối trên khắp Ấn Độ.`,
    },
    faqs: [
      { q: { en: "Is the CarryOn suitable for use in rural India without reliable electricity?", zh: "CarryOn适合在没有可靠电力的印度农村使用吗？", ja: "CarryOnは安定した電力のないインドの農村部で使用できますか？", vi: "Máy CarryOn có phù hợp để sử dụng ở vùng nông thôn Ấn Độ nơi nguồn điện không ổn định không?" }, a: { en: "Yes. The CarryOn operates on a rechargeable lithium battery with approximately 3.5 hours of runtime — enough for multiple tests on a single charge. Combined with room-temperature reagent storage, it is specifically designed for field deployment where electricity and cold chain infrastructure are unreliable or unavailable.", zh: "是的。CarryOn使用可充电锂电池运行，续航约3.5小时——单次充电可完成多次测试。结合室温试剂存储，专为电力和冷链不可靠的现场部署设计。", ja: "はい。CarryOnは充電式リチウムバッテリーで約3.5時間稼働し、1回の充電で複数のテストが可能です。室温試薬保存と組み合わせて、電力やコールドチェーンが不安定な現場での使用に設計されています。", vi: "Có. CarryOn hoạt động bằng pin lithium sạc lại với thời gian chạy khoảng 3,5 giờ — đủ cho nhiều lần xét nghiệm chỉ với một lần sạc. Kết hợp với khả năng bảo quản thuốc thử ở nhiệt độ phòng, thiết bị được thiết kế chuyên biệt cho triển khai thực địa tại những nơi cơ sở hạ tầng điện lực và chuỗi lạnh không ổn định hoặc không có." } },
      { q: { en: "What is the CDSCO registration process for the CarryOn in India?", zh: "CarryOn在印度的CDSCO注册流程是什么？", ja: "インドでのCarryOnのCDSCO登録プロセスは？", vi: "Quy trình đăng ký CDSCO cho CarryOn tại Ấn Độ diễn ra như thế nào?" }, a: { en: "CDSCO registration for IVD devices involves filing through an authorized Indian agent, submitting technical documentation, quality system certificates (ISO 13485, CE), and analytical performance data. Class A/B devices typically take 3-6 months for registration. Yinrui Bio partners with experienced Indian regulatory consultants to manage this process.", zh: "CDSCO的IVD设备注册需要通过授权的印度代理提交技术文件和质量体系证书。A/B类设备通常需要3-6个月注册。胤瑞生物与印度监管顾问合作管理此过程。", ja: "CDSCOへのIVD機器登録は認定インドエージェントを通じて申請します。クラスA/B機器は通常3〜6ヶ月で登録完了します。胤瑞バイオはインドの規制コンサルタントと提携しています。", vi: "Đăng ký CDSCO cho thiết bị IVD bao gồm việc nộp hồ sơ thông qua đại lý được ủy quyền tại Ấn Độ, nộp tài liệu kỹ thuật, chứng chỉ hệ thống chất lượng (ISO 13485, CE) và dữ liệu hiệu năng phân tích. Thiết bị loại A/B thường mất 3-6 tháng để đăng ký. Yinrui Bio hợp tác với các chuyên gia tư vấn pháp lý giàu kinh nghiệm tại Ấn Độ để quản lý quy trình này." } },
      { q: { en: "How affordable is the CarryOn for the Indian market?", zh: "CarryOn对印度市场来说价格如何？", ja: "CarryOnはインド市場にとって手頃な価格ですか？", vi: "CarryOn có mức giá phải chăng như thế nào đối với thị trường Ấn Độ?" }, a: { en: "The CarryOn is positioned as one of the most affordable true PCR platforms globally, at $3,000-5,000 for the device. This is a fraction of the cost of traditional PCR systems ($50,000+). Per-test chip costs are also competitive, making molecular diagnostics accessible to clinics and livestock operations across India's diverse economic landscape.", zh: "CarryOn定位为全球最经济的真正PCR平台之一，设备价格3,000-5,000美元，远低于传统PCR系统（5万美元以上）。每次检测芯片成本也有竞争力。", ja: "CarryOnは最も手頃な真のPCRプラットフォームの一つで、デバイス価格は3,000〜5,000ドルです。従来のPCRシステム（5万ドル以上）のごく一部のコストです。", vi: "CarryOn được định vị là một trong những nền tảng PCR đích thực có giá phải chăng nhất trên toàn cầu, với chi phí thiết bị từ 3.000-5.000 USD. Con số này chỉ bằng một phần nhỏ so với chi phí của các hệ thống PCR truyền thống (trên 50.000 USD). Chi phí chip cho mỗi lần xét nghiệm cũng có tính cạnh tranh, giúp chẩn đoán phân tử trở nên dễ tiếp cận với các phòng khám và cơ sở chăn nuôi trên khắp bối cảnh kinh tế đa dạng của Ấn Độ." } },
      { q: { en: "Can the CarryOn be used in India's National Animal Disease Control Programme?", zh: "CarryOn能用于印度国家动物疾病控制计划吗？", ja: "CarryOnはインドの国家動物疾病管理プログラムで使用できますか？", vi: "CarryOn có thể được sử dụng trong Chương trình Kiểm soát Bệnh động vật Quốc gia của Ấn Độ không?" }, a: { en: "Yes, the CarryOn's capabilities align well with NADCP's field diagnostic requirements. Its portability, battery operation, room-temperature reagents, and relevant test panels (brucellosis, ASF, avian flu) make it suitable for government surveillance programs. We can support partners with technical documentation for government tender submissions.", zh: "是的，CarryOn的功能与NADCP的现场诊断需求高度契合。其便携性、电池运行和相关检测面板使其适合政府监测计划。", ja: "はい、CarryOnの機能はNADCPのフィールド診断要件に合致しています。携帯性、バッテリー稼働、関連テストパネルは政府監視プログラムに適しています。", vi: "Có, các năng lực của CarryOn phù hợp với yêu cầu chẩn đoán thực địa của NADCP. Tính di động, khả năng hoạt động bằng pin, thuốc thử ở nhiệt độ phòng và các bộ xét nghiệm phù hợp (brucellosis, ASF, cúm gia cầm) giúp thiết bị phù hợp với các chương trình giám sát của chính phủ. Chúng tôi có thể hỗ trợ đối tác về tài liệu kỹ thuật để nộp hồ sơ dự thầu của chính phủ." } },
      { q: { en: "What diseases are most commonly tested in Indian veterinary practice?", zh: "印度兽医实践中最常检测的疾病有哪些？", ja: "インドの獣医診療で最も一般的に検査される疾病は？", vi: "Những bệnh nào thường được xét nghiệm nhất trong thực hành thú y tại Ấn Độ?" }, a: { en: "For livestock: foot-and-mouth disease, brucellosis, bovine tuberculosis, and avian influenza are priorities under NADCP. For companion animals: canine parvovirus, distemper, ehrlichiosis, babesiosis, and leptospirosis are the most common diagnostic needs, particularly in tropical and monsoon-affected regions.", zh: "畜牧：口蹄疫、布鲁氏菌病、牛结核和禽流感是NADCP下的优先事项。伴侣动物：犬细小病毒、犬瘟热、埃利希体病是最常见需求。", ja: "家畜：口蹄疫、ブルセラ症、牛結核、鳥インフルエンザがNADCPの優先事項。コンパニオンアニマル：犬パルボウイルス、ジステンパー、エールリヒア症が最も一般的です。", vi: "Đối với chăn nuôi gia súc: bệnh lở mồm long móng, brucellosis, bệnh lao bò và cúm gia cầm là những ưu tiên theo NADCP. Đối với động vật nuôi làm cảnh: parvovirus ở chó, distemper, ehrlichiosis, babesiosis và leptospirosis là những nhu cầu chẩn đoán phổ biến nhất, đặc biệt tại các vùng nhiệt đới và chịu ảnh hưởng của gió mùa." } },
      { q: { en: "Does Yinrui Bio support government tenders in India?", zh: "胤瑞生物支持印度政府招标吗？", ja: "胤瑞バイオはインドの政府入札をサポートしますか？", vi: "Yinrui Bio có hỗ trợ các gói thầu chính phủ tại Ấn Độ không?" }, a: { en: "Yes. We provide comprehensive tender support including technical specifications documentation, compliance certificates, test performance data, and competitive pricing for government procurement. Our partners in India have successfully participated in state-level and national animal health program tenders.", zh: "是的。我们提供全面的招标支持，包括技术规格文件、合规证书、检测性能数据和政府采购竞争性定价。", ja: "はい。技術仕様書、コンプライアンス証明書、テスト性能データ、政府調達向け競争力のある価格設定など、包括的な入札サポートを提供します。", vi: "Có. Chúng tôi cung cấp hỗ trợ đấu thầu toàn diện bao gồm tài liệu thông số kỹ thuật, chứng nhận tuân thủ, dữ liệu hiệu năng xét nghiệm và giá cạnh tranh cho mua sắm công. Các đối tác của chúng tôi tại Ấn Độ đã tham gia thành công các gói thầu chương trình sức khỏe động vật cấp bang và cấp quốc gia." } },
    ],
  },

  // 4. Germany
  {
    slug: "germany",
    countryCode: "DE",
    name: { en: "Germany", zh: "德国", ja: "ドイツ", vi: "Đức" },
    heroTitle: { en: "Portable PCR Diagnostics for the German & European Veterinary Market", zh: "面向德国及欧洲兽医市场的便携式PCR诊断", ja: "ドイツ・欧州獣医市場向けポータブルPCR診断", vi: "Chẩn đoán PCR cầm tay cho thị trường thú y Đức & châu Âu" },
    heroSubtitle: { en: "CE-certified portable molecular diagnostics for Europe's leading veterinary and livestock market, shipped directly from Ningbo to Hamburg.", zh: "CE认证的便携式分子诊断设备，直达欧洲领先的兽医和畜牧市场，从宁波直运至汉堡。", ja: "CE認証取得のポータブル分子診断、寧波からハンブルクへ直送、欧州をリードする獣医・畜産市場向け。", vi: "Chẩn đoán phân tử cầm tay đạt chứng nhận CE cho thị trường thú y và chăn nuôi hàng đầu châu Âu, giao hàng trực tiếp từ Ningbo đến Hamburg." },
    port: "Hamburg",
    flagEmoji: "DE",
    marketOverview: { en: `Germany is Europe's largest veterinary diagnostics market and serves as the gateway for EU market access. The German veterinary sector is highly developed, with approximately 12,000 veterinary practices, 4,000 livestock veterinarians, and a strong tradition of evidence-based veterinary medicine that prioritizes molecular diagnostics.\n\nThe German pet population includes over 15 million cats, 10 million dogs, and millions of small mammals, birds, and reptiles. German pet owners are among the highest spenders on veterinary care in Europe, with strong demand for advanced diagnostic services including PCR testing.\n\nGermany's livestock sector is significant, particularly in pig and poultry production. The country experienced its first African Swine Fever outbreaks in 2020, dramatically increasing demand for field-deployable ASF diagnostics. Porcine diseases, avian influenza surveillance, and bovine respiratory disease testing are ongoing priorities.\n\nThe CarryOn's existing CE certification is a major advantage for German market entry, as it demonstrates compliance with EU safety and performance requirements. The EU In Vitro Diagnostic Regulation (IVDR) came into full effect in May 2022, and the CarryOn platform is well-positioned to meet its requirements through Yinrui Bio's ISO 13485-certified manufacturing.`, zh: `德国是欧洲最大的兽医诊断市场，也是进入欧盟市场的门户。德国兽医行业高度发达，约有12,000家兽医诊所和4,000名畜牧兽医。\n\n德国宠物数量包括1500万只猫和1000万只狗。德国宠物主人在欧洲兽医护理支出中位居前列。\n\n德国畜牧业尤其在猪和家禽生产方面非常重要。2020年首次爆发非洲猪瘟，大幅增加了对现场可部署ASF诊断的需求。\n\nCarryOn现有的CE认证是进入德国市场的主要优势。`, ja: `ドイツは欧州最大の獣医診断市場であり、EU市場アクセスのゲートウェイです。約12,000の動物病院と4,000人の畜産獣医を有する高度に発達した獣医セクターです。\n\nドイツのペット数は猫1,500万頭以上、犬1,000万頭以上を含みます。\n\nCarryOnの既存のCE認証はドイツ市場参入の大きな利点です。`, vi: `Đức là thị trường chẩn đoán thú y lớn nhất châu Âu và là cửa ngõ tiếp cận thị trường EU. Ngành thú y Đức rất phát triển, với khoảng 12.000 phòng khám thú y, 4.000 bác sĩ thú y chăn nuôi và truyền thống mạnh mẽ về y học thú y dựa trên bằng chứng, ưu tiên chẩn đoán phân tử.

Dân số vật nuôi làm cảnh của Đức bao gồm hơn 15 triệu mèo, 10 triệu chó cùng hàng triệu động vật có vú nhỏ, chim và bò sát. Chủ vật nuôi Đức nằm trong số những người chi tiêu cao nhất cho chăm sóc thú y ở châu Âu, với nhu cầu mạnh mẽ đối với các dịch vụ chẩn đoán tiên tiến bao gồm xét nghiệm PCR.

Ngành chăn nuôi của Đức có quy mô đáng kể, đặc biệt là sản xuất lợn và gia cầm. Quốc gia này đã ghi nhận những đợt bùng phát dịch tả lợn châu Phi (ASF) đầu tiên vào năm 2020, làm gia tăng mạnh mẽ nhu cầu về chẩn đoán ASF triển khai tại thực địa. Các bệnh trên lợn, giám sát cúm gia cầm và xét nghiệm bệnh hô hấp trên bò là những ưu tiên thường xuyên.

Chứng nhận CE hiện có của CarryOn là một lợi thế lớn cho việc thâm nhập thị trường Đức, vì nó chứng minh sự tuân thủ các yêu cầu về an toàn và hiệu năng của EU. Quy định về Thiết bị Chẩn đoán In vitro của EU (IVDR) đã có hiệu lực đầy đủ vào tháng 5 năm 2022, và nền tảng CarryOn có vị thế tốt để đáp ứng các yêu cầu của quy định này nhờ hoạt động sản xuất đạt chứng nhận ISO 13485 của Yinrui Bio.` },
    regulatoryPathway: { en: `### Regulatory Framework for Germany & the EU\n\n**CE Marking (Already Obtained):**\nThe CarryOn platform holds CE certification, demonstrating compliance with EU safety, health, and environmental protection standards. This is the primary market access requirement for medical devices in Germany and all EU member states.\n\n**EU IVDR (In Vitro Diagnostic Regulation 2017/746):**\nThe IVDR replaced the IVD Directive in May 2022. Under IVDR, veterinary IVDs are generally classified as Class A (low risk), requiring self-certification and technical documentation. The CarryOn's existing CE marking provides the foundation for IVDR compliance.\n\n**TierGesG (Animal Health Act):**\nGermany's Tiergesundheitsgesetz governs animal disease control. Diagnostic tests used for official disease surveillance (e.g., ASF, avian influenza) must meet specific performance standards approved by the Friedrich-Loeffler-Institut (FLI), Germany's federal research institute for animal health.\n\n**Import & Market Access:**\n- CE marking enables free circulation throughout the EU/EEA\n- No additional German-specific device registration required\n- Medical device import subject to standard EU customs duties (0-6.5%)\n- VAT at 19% applies`, zh: `### 德国及欧盟监管框架\n\n**CE标志（已获得）：** CarryOn平台持有CE认证，满足欧盟安全和健康标准。\n\n**EU IVDR：** 兽医IVD通常分为A类（低风险），需要自我认证。CarryOn现有的CE标志为IVDR合规提供基础。\n\n**TierGesG（动物健康法）：** 用于官方疾病监测的诊断测试需满足FLI批准的性能标准。\n\n**进口：** CE标志允许在整个EU/EEA自由流通。`, ja: `### ドイツおよびEUの規制枠組み\n\n**CEマーキング（取得済み）：** CarryOnプラットフォームはCE認証を取得しています。\n\n**EU IVDR：** 獣医IVDは一般的にクラスA（低リスク）に分類され、自己認証が必要です。\n\n**TierGesG（動物衛生法）：** 公式疾病監視に使用される診断テストはFLI承認の性能基準を満たす必要があります。`, vi: `### Khung pháp lý cho Đức & EU

**Dấu CE (Đã đạt được):**
Nền tảng CarryOn sở hữu chứng nhận CE, chứng minh sự tuân thủ các tiêu chuẩn an toàn, sức khỏe và bảo vệ môi trường của EU. Đây là yêu cầu tiếp cận thị trường chính đối với thiết bị y tế tại Đức và tất cả các quốc gia thành viên EU.

**EU IVDR (Quy định về Thiết bị Chẩn đoán In vitro 2017/746):**
IVDR đã thay thế Chỉ thị IVD vào tháng 5 năm 2022. Theo IVDR, các thiết bị IVD thú y thường được phân loại là Loại A (rủi ro thấp), yêu cầu tự chứng nhận và tài liệu kỹ thuật. Dấu CE hiện có của CarryOn tạo nền tảng cho việc tuân thủ IVDR.

**TierGesG (Luật Sức khỏe Động vật):**
Tiergesundheitsgesetz của Đức quy định việc kiểm soát dịch bệnh động vật. Các xét nghiệm chẩn đoán được sử dụng cho giám sát dịch bệnh chính thức (ví dụ: ASF, cúm gia cầm) phải đáp ứng các tiêu chuẩn hiệu năng cụ thể được Viện Friedrich-Loeffler (FLI) — viện nghiên cứu liên bang về sức khỏe động vật của Đức — phê duyệt.

**Nhập khẩu & Tiếp cận thị trường:**
- Dấu CE cho phép lưu thông tự do trên toàn EU/EEA
- Không cần đăng ký thiết bị riêng bổ sung tại Đức
- Nhập khẩu thiết bị y tế chịu thuế hải quan EU tiêu chuẩn (0-6,5%)
- Áp dụng thuế VAT 19%` },
    shippingLogistics: { en: `### Shipping from Ningbo to Germany\n\n**Primary Port:** Hamburg — Europe's third-largest container port\n\n**Ocean Freight:**\n- Ningbo to Hamburg: 25-30 days transit time\n- Multiple direct services weekly\n- FCL and LCL options available\n\n**Customs & Import:**\n- CE-marked devices enter the EU with minimal customs friction\n- EU customs duties 0-6.5% for diagnostic instruments\n- VAT at 19% (reclaimable for commercial importers)\n- EORI number required for all EU importers\n\n**Distribution Hub:**\n- Hamburg serves as an ideal distribution hub for all of Northern and Central Europe\n- Well-connected by road, rail, and inland waterways to all EU member states\n- Room-temperature storage eliminates costly GDP-compliant cold chain logistics\n\nYinrui Bio offers FOB Ningbo, CIF Hamburg, and DDP (Delivered Duty Paid) terms for German distributors.`, zh: `### 从宁波发货至德国\n\n**主要港口：** 汉堡\n**海运：** 宁波至汉堡25-30天\n**关税：** EU关税0-6.5%，增值税19%（商业进口商可抵扣）\n\nCE标记设备进入EU海关摩擦最小。提供FOB宁波、CIF汉堡和DDP条款。`, ja: `### 寧波からドイツへの出荷\n\n**主要港：** ハンブルク\n**海上輸送：** 寧波からハンブルク25〜30日\n**関税：** EU関税0〜6.5%、VAT 19%\n\nCEマーク付き機器はEUへの通関が円滑です。FOB寧波、CIFハンブルク、DDPの取引条件を提供。`, vi: `### Vận chuyển từ Ningbo đến Đức

**Cảng chính:** Hamburg — cảng container lớn thứ ba châu Âu

**Vận tải đường biển:**
- Ningbo đến Hamburg: thời gian vận chuyển 25-30 ngày
- Nhiều chuyến trực tiếp mỗi tuần
- Có sẵn cả phương án FCL và LCL

**Hải quan & Nhập khẩu:**
- Thiết bị có dấu CE vào EU với ít trở ngại thủ tục hải quan
- Thuế hải quan EU 0-6,5% đối với dụng cụ chẩn đoán
- Thuế VAT 19% (có thể hoàn lại đối với nhà nhập khẩu thương mại)
- Yêu cầu số EORI đối với tất cả nhà nhập khẩu EU

**Trung tâm phân phối:**
- Hamburg là trung tâm phân phối lý tưởng cho toàn bộ Bắc và Trung Âu
- Kết nối tốt bằng đường bộ, đường sắt và đường thủy nội địa đến tất cả các quốc gia thành viên EU
- Bảo quản ở nhiệt độ phòng giúp loại bỏ chi phí logistics chuỗi lạnh tuân thủ GDP

Yinrui Bio cung cấp các điều kiện FOB Ningbo, CIF Hamburg và DDP (Giao hàng đã nộp thuế) cho các nhà phân phối tại Đức.` },
    keyApplications: { en: `### Key Applications in Germany\n\n**Companion Animal Diagnostics:**\nGermany's 25+ million pets drive strong demand for molecular diagnostics. Canine parvovirus, distemper, tick-borne diseases (particularly Borrelia, Babesia, and Anaplasma — prevalent across Central Europe), and feline respiratory infections represent key testing needs.\n\n**Livestock Disease Control:**\nAfrican Swine Fever surveillance is a national priority following wild boar outbreaks. The CarryOn ASF test chip supports farm-level screening and border zone surveillance. Avian influenza, PRRSV, and bovine respiratory disease panels address additional livestock diagnostic needs.\n\n**Food Safety & Meat Authentication:**\nGermany has strict food safety regulations. The CarryOn meat species identification chips support enforcement of EU labeling laws and detection of meat adulteration — a topic of heightened scrutiny since the 2013 European horsemeat scandal.\n\n**Wildlife and Conservation:**\nGermany's wildlife monitoring programs, particularly for ASF in wild boar populations, benefit from field-deployable PCR testing that enables rapid on-site confirmation during hunting and surveillance operations.`, zh: `### 德国市场主要应用\n\n**伴侣动物诊断：** 德国2500万+宠物驱动对分子诊断的强劲需求。\n**畜牧疾病控制：** 非洲猪瘟监测是国家优先事项。\n**食品安全与肉类鉴定：** 德国有严格的食品安全法规，肉源鉴定芯片支持EU标签法执行。\n**野生动物与保护：** 野猪ASF监测受益于现场PCR检测。`, ja: `### ドイツ市場における主要アプリケーション\n\n**コンパニオンアニマル診断：** ドイツの2,500万頭以上のペットが分子診断の強い需要を牽引します。\n**家畜疾病管理：** アフリカ豚熱監視は国家的優先事項です。\n**食品安全・肉種鑑定：** 厳格な食品安全規制下で肉種鑑定チップがEU表示法の執行を支援します。`, vi: `### Các ứng dụng chính tại Đức

**Chẩn đoán động vật nuôi làm cảnh:**
Hơn 25 triệu vật nuôi làm cảnh của Đức thúc đẩy nhu cầu mạnh mẽ đối với chẩn đoán phân tử. Parvovirus ở chó, distemper, các bệnh do ve truyền (đặc biệt là Borrelia, Babesia và Anaplasma — phổ biến khắp Trung Âu) và nhiễm trùng đường hô hấp ở mèo là những nhu cầu xét nghiệm chính.

**Kiểm soát dịch bệnh chăn nuôi:**
Giám sát dịch tả lợn châu Phi (ASF) là ưu tiên quốc gia sau các đợt bùng phát trên lợn rừng. Chip xét nghiệm ASF của CarryOn hỗ trợ sàng lọc cấp trại và giám sát vùng biên giới. Các bộ xét nghiệm cúm gia cầm, PRRSV và bệnh hô hấp trên bò đáp ứng thêm các nhu cầu chẩn đoán chăn nuôi.

**An toàn thực phẩm & Xác thực thịt:**
Đức có các quy định an toàn thực phẩm nghiêm ngặt. Chip nhận dạng loài thịt của CarryOn hỗ trợ thực thi luật ghi nhãn của EU và phát hiện gian lận thịt — một chủ đề được giám sát chặt chẽ kể từ vụ bê bối thịt ngựa châu Âu năm 2013.

**Động vật hoang dã và Bảo tồn:**
Các chương trình giám sát động vật hoang dã của Đức, đặc biệt đối với ASF trong quần thể lợn rừng, hưởng lợi từ xét nghiệm PCR triển khai tại thực địa, cho phép xác nhận nhanh chóng tại chỗ trong các hoạt động săn bắn và giám sát.` },
    distributionModel: { en: `### Distribution & Partnership in Germany\n\nGermany is a strategic priority market for Yinrui Bio, serving as the EU gateway.\n\n**Ideal Partners:**\n- Established veterinary diagnostics distributors with pan-European reach\n- Medical device distributors serving veterinary laboratories\n- Agricultural supply companies with livestock farmer networks\n\n**EU Market Advantage:**\nA German distribution partner can serve the entire EU/EEA through CE marking — 27 EU member states plus Norway, Iceland, and Liechtenstein — from a single regulatory framework.\n\n**Support:** German-language marketing materials, CE/IVDR technical documentation, demo programs, and training support.\n\nContact us to discuss exclusive distribution partnerships for Germany and the EU.`, zh: `### 德国分销与合作\n\n德国是胤瑞生物的战略优先市场，作为EU门户。德国分销合作伙伴可通过CE标志服务整个EU/EEA的27个成员国。\n\n提供德语营销材料、CE/IVDR技术文件和培训支持。`, ja: `### ドイツにおける販売・パートナーシップ\n\nドイツは胤瑞バイオの戦略的優先市場であり、EUゲートウェイです。ドイツのディストリビューションパートナーはCEマーキングを通じてEU/EEA全体にサービスを提供できます。\n\nドイツ語マーケティング資料、CE/IVDR技術文書、トレーニングサポートを提供します。`, vi: `### Phân phối & Hợp tác tại Đức

Đức là thị trường ưu tiên chiến lược của Yinrui Bio, đóng vai trò cửa ngõ vào EU.

**Đối tác lý tưởng:**
- Các nhà phân phối chẩn đoán thú y có uy tín với phạm vi hoạt động toàn châu Âu
- Các nhà phân phối thiết bị y tế phục vụ phòng xét nghiệm thú y
- Các công ty cung ứng nông nghiệp có mạng lưới nông dân chăn nuôi

**Lợi thế thị trường EU:**
Một đối tác phân phối tại Đức có thể phục vụ toàn bộ EU/EEA thông qua dấu CE — 27 quốc gia thành viên EU cùng Na Uy, Iceland và Liechtenstein — chỉ với một khung pháp lý duy nhất.

**Hỗ trợ:** Tài liệu marketing tiếng Đức, tài liệu kỹ thuật CE/IVDR, chương trình dùng thử và hỗ trợ đào tạo.

Hãy liên hệ với chúng tôi để thảo luận về quan hệ đối tác phân phối độc quyền cho Đức và EU.` },
    faqs: [
      { q: { en: "Does the CarryOn have CE certification for the EU market?", zh: "CarryOn是否持有EU市场的CE认证？", ja: "CarryOnはEU市場のCE認証を取得していますか？", vi: "CarryOn có chứng nhận CE cho thị trường EU không?" }, a: { en: "Yes. The CarryOn Portable PCR Analyzer and its test chip reagent kits hold CE certification. The device is manufactured under ISO 13485 quality management system. This enables market access across all EU/EEA member states without additional country-specific registrations.", zh: "是的。CarryOn便携式PCR分析仪及其检测芯片试剂盒持有CE认证，设备在ISO 13485体系下生产。", ja: "はい。CarryOnポータブルPCRアナライザーとテストチップ試薬キットはCE認証を取得しています。ISO 13485品質管理システムの下で製造されています。", vi: "Có. Máy PCR cầm tay CarryOn và các bộ kit thuốc thử chip xét nghiệm của máy đều có chứng nhận CE. Thiết bị được sản xuất theo hệ thống quản lý chất lượng ISO 13485. Điều này cho phép tiếp cận thị trường tại tất cả các quốc gia thành viên EU/EEA mà không cần đăng ký bổ sung riêng theo từng quốc gia." } },
      { q: { en: "How does the CarryOn comply with EU IVDR?", zh: "CarryOn如何符合EU IVDR？", ja: "CarryOnはEU IVDRにどのように準拠していますか？", vi: "CarryOn tuân thủ IVDR của EU như thế nào?" }, a: { en: "Under EU IVDR 2017/746, veterinary IVDs are generally classified as Class A devices, requiring manufacturer self-certification and comprehensive technical documentation. The CarryOn's existing CE certification and ISO 13485 quality system provide the foundation for IVDR compliance. Yinrui Bio maintains current technical files and declarations of conformity.", zh: "根据EU IVDR，兽医IVD通常分为A类设备。CarryOn现有的CE认证和ISO 13485体系为IVDR合规提供基础。", ja: "EU IVDR 2017/746の下で、獣医IVDは一般的にクラスA機器に分類されます。CarryOnの既存のCE認証とISO 13485品質システムがIVDR準拠の基盤を提供します。", vi: "Theo IVDR 2017/746 của EU, IVD thú y thường được phân loại là thiết bị Class A, yêu cầu nhà sản xuất tự chứng nhận và có tài liệu kỹ thuật đầy đủ. Chứng nhận CE hiện có của CarryOn và hệ thống chất lượng ISO 13485 tạo nền tảng cho việc tuân thủ IVDR. Yinrui Bio duy trì hồ sơ kỹ thuật và tuyên bố hợp quy hiện hành." } },
      { q: { en: "What is the shipping time from Ningbo to Hamburg?", zh: "从宁波到汉堡的运输时间是多少？", ja: "寧波からハンブルクへの輸送時間は？", vi: "Thời gian vận chuyển từ Ningbo đến Hamburg là bao lâu?" }, a: { en: "Ocean freight from Ningbo to Hamburg takes 25-30 days with multiple direct services available weekly. Air freight takes 3-5 days. Express courier (DHL) from China to Germany typically delivers within 3-4 business days for sample units.", zh: "宁波到汉堡的海运需25-30天，每周有多条直达航线。空运3-5天。", ja: "寧波からハンブルクへの海上輸送は25〜30日で、毎週複数の直行便があります。航空輸送は3〜5日です。", vi: "Vận tải biển từ Ningbo đến Hamburg mất 25-30 ngày, với nhiều tuyến trực tiếp hàng tuần. Vận tải hàng không mất 3-5 ngày. Chuyển phát nhanh (DHL) từ Trung Quốc đến Đức thường giao trong 3-4 ngày làm việc đối với các lô mẫu." } },
      { q: { en: "Can the CarryOn be used for ASF surveillance in Germany?", zh: "CarryOn能用于德国的非洲猪瘟监测吗？", ja: "CarryOnはドイツのASF監視に使用できますか？", vi: "CarryOn có thể được sử dụng để giám sát ASF tại Đức không?" }, a: { en: "Yes. The CarryOn's African Swine Fever test chip provides field-deployable PCR detection that supports farm-level screening and wild boar surveillance programs. For official regulatory testing, results may need confirmation by FLI-approved reference laboratories, but the CarryOn provides critical rapid screening capability for immediate quarantine decisions.", zh: "是的。CarryOn的非洲猪瘟检测芯片提供现场可部署的PCR检测，支持农场级筛查和野猪监测计划。", ja: "はい。CarryOnのアフリカ豚熱テストチップは農場レベルのスクリーニングと野生イノシシ監視プログラムを支援するフィールド展開可能なPCR検出を提供します。", vi: "Có. Chip xét nghiệm dịch tả lợn châu Phi (ASF) của CarryOn cung cấp khả năng phát hiện PCR triển khai tại hiện trường, hỗ trợ sàng lọc cấp trại và các chương trình giám sát lợn rừng. Đối với xét nghiệm chính thức theo quy định, kết quả có thể cần được xác nhận bởi các phòng thí nghiệm tham chiếu được FLI phê duyệt, nhưng CarryOn mang lại năng lực sàng lọc nhanh quan trọng cho các quyết định cách ly tức thời." } },
      { q: { en: "Does Yinrui Bio seek exclusive EU distribution partners?", zh: "胤瑞生物是否寻求独家EU分销合作伙伴？", ja: "胤瑞バイオはEU独占販売パートナーを募集していますか？", vi: "Yinrui Bio có tìm kiếm đối tác phân phối độc quyền tại EU không?" }, a: { en: "Yes, we offer exclusive and semi-exclusive territory agreements for qualified EU distribution partners. A German-based partner can leverage CE marking to distribute across all 27 EU member states plus EEA countries. We provide comprehensive support including regulatory documentation, marketing materials in German and other EU languages, and technical training.", zh: "是的，我们为合格的EU分销合作伙伴提供独家和半独家区域协议。德国合作伙伴可利用CE标志在27个EU成员国分销。", ja: "はい、適格なEUディストリビューションパートナーに独占・準独占テリトリー契約を提供しています。ドイツを拠点とするパートナーはCEマーキングを活用してEU全27加盟国に販売できます。", vi: "Có, chúng tôi cung cấp các thỏa thuận lãnh thổ độc quyền và bán độc quyền cho các nhà phân phối EU đủ điều kiện. Đối tác có trụ sở tại Đức có thể tận dụng dấu CE để phân phối trên toàn bộ 27 quốc gia thành viên EU cùng các nước EEA. Chúng tôi cung cấp hỗ trợ toàn diện bao gồm tài liệu pháp lý, tài liệu tiếp thị bằng tiếng Đức và các ngôn ngữ EU khác, cùng đào tạo kỹ thuật." } },
      { q: { en: "What languages does the CarryOn interface support?", zh: "CarryOn界面支持哪些语言？", ja: "CarryOnのインターフェースはどの言語をサポートしていますか？", vi: "Giao diện CarryOn hỗ trợ những ngôn ngữ nào?" }, a: { en: "The CarryOn device features a touchscreen interface with support for English and Chinese. Additional language options including German are available through firmware updates. All test results are displayed with universal symbols and numerical values that do not require language-specific interpretation.", zh: "CarryOn设备的触摸屏界面支持英文和中文。通过固件更新可提供包括德语在内的其他语言选项。", ja: "CarryOnのタッチスクリーンインターフェースは英語と中国語をサポートしています。ファームウェアアップデートによりドイツ語を含む追加言語オプションが利用可能です。", vi: "Thiết bị CarryOn có giao diện màn hình cảm ứng hỗ trợ tiếng Anh và tiếng Trung. Các tùy chọn ngôn ngữ bổ sung, bao gồm tiếng Đức, có sẵn thông qua cập nhật firmware. Tất cả kết quả xét nghiệm được hiển thị bằng ký hiệu phổ quát và giá trị số, không yêu cầu diễn giải theo ngôn ngữ cụ thể." } },
    ],
  },

  // 5. Japan
  {
    slug: "japan",
    countryCode: "JP",
    name: { en: "Japan", zh: "日本", ja: "日本", vi: "Nhật Bản" },
    heroTitle: { en: "Portable PCR Diagnostics for Japan's Veterinary Market", zh: "面向日本兽医市场的便携式PCR诊断", ja: "日本の獣医市場向けポータブルPCR診断", vi: "Chẩn đoán PCR cầm tay cho thị trường thú y Nhật Bản" },
    heroSubtitle: { en: "Advanced molecular diagnostics for Japan's premium companion animal care and livestock disease surveillance.", zh: "为日本高端伴侣动物护理和畜牧疾病监测提供先进分子诊断。", ja: "日本のプレミアムコンパニオンアニマルケアと畜産疾病監視のための先進分子診断。", vi: "Chẩn đoán phân tử tiên tiến cho chăm sóc động vật đồng hành cao cấp và giám sát dịch bệnh vật nuôi tại Nhật Bản." },
    port: "Yokohama",
    flagEmoji: "JP",
    marketOverview: { en: `Japan is Asia's most advanced veterinary diagnostics market, characterized by high per-pet spending, a strong culture of companion animal care, and rigorous regulatory standards. Japan's 15,000+ veterinary clinics serve over 18 million pets (approximately 9 million dogs and 9 million cats), with annual veterinary spending exceeding $4 billion.\n\nJapanese pet owners are among the world's highest spenders on veterinary care, with strong demand for advanced diagnostics and a willingness to pay premium prices for gold-standard testing. The companion animal diagnostics market in Japan is growing at 8-10% annually, driven by an aging pet population that requires more frequent and comprehensive health screening.\n\nJapan's livestock industry, while smaller than its companion animal market, includes significant swine, poultry, and cattle operations concentrated in Hokkaido, Kyushu, and the Tohoku region. Japan has experienced devastating outbreaks of Classical Swine Fever (CSF) and avian influenza, driving investment in rapid on-farm diagnostic capabilities.\n\nThe CarryOn platform appeals to Japan's quality-conscious veterinary market through its PCR-level accuracy, compact design, and fully automated operation — qualities that align with Japanese expectations for precision medical technology.`, zh: `日本是亚洲最先进的兽医诊断市场，拥有15,000+家兽医诊所、超过1800万只宠物。日本宠物主人在全球兽医护理支出中位居前列，伴侣动物诊断市场年增长8-10%。\n\n日本畜牧业曾经历猪瘟和禽流感的毁灭性爆发，推动了对现场快速诊断能力的投资。\n\nCarryOn平台以其PCR级精度、紧凑设计和全自动操作吸引日本注重品质的兽医市场。`, ja: `日本はアジアで最も先進的な獣医診断市場であり、ペット1頭あたりの支出が高く、コンパニオンアニマルケアの文化が根付いています。15,000以上の動物病院が1,800万頭以上のペットにサービスを提供し、年間獣医支出は40億ドルを超えています。\n\n日本のペットオーナーは世界で最も獣医ケアに支出する層の一つで、先進診断への需要が強く、ゴールドスタンダードの検査にプレミアム価格を支払う意欲があります。コンパニオンアニマル診断市場は年率8〜10%で成長しています。\n\n日本の畜産業は豚コレラ(CSF)や鳥インフルエンザの壊滅的な発生を経験し、迅速な農場での診断能力への投資を推進しています。\n\nCarryOnプラットフォームは、PCRレベルの精度、コンパクトな設計、全自動操作により、日本の品質重視の獣医市場にアピールします。`, vi: `Nhật Bản là thị trường chẩn đoán thú y tiên tiến nhất châu Á, đặc trưng bởi chi tiêu cao trên mỗi thú cưng, văn hóa chăm sóc động vật đồng hành mạnh mẽ và các tiêu chuẩn pháp lý nghiêm ngặt. Hơn 15.000 phòng khám thú y tại Nhật Bản phục vụ hơn 18 triệu thú cưng (khoảng 9 triệu chó và 9 triệu mèo), với chi tiêu thú y hàng năm vượt 4 tỷ USD.\\n\\nChủ nuôi thú cưng Nhật Bản nằm trong số những người chi tiêu cao nhất thế giới cho chăm sóc thú y, với nhu cầu mạnh mẽ đối với chẩn đoán tiên tiến và sẵn sàng trả giá cao cho xét nghiệm chuẩn vàng. Thị trường chẩn đoán động vật đồng hành tại Nhật Bản đang tăng trưởng 8-10% mỗi năm, nhờ dân số thú cưng già hóa đòi hỏi sàng lọc sức khỏe thường xuyên và toàn diện hơn.\\n\\nNgành chăn nuôi Nhật Bản, dù nhỏ hơn thị trường động vật đồng hành, bao gồm các hoạt động chăn nuôi lợn, gia cầm và gia súc đáng kể tập trung tại Hokkaido, Kyushu và vùng Tohoku. Nhật Bản đã trải qua các đợt bùng phát tàn khốc của bệnh dịch tả lợn cổ điển (CSF) và cúm gia cầm, thúc đẩy đầu tư vào năng lực chẩn đoán nhanh tại trang trại.\\n\\nNền tảng CarryOn thu hút thị trường thú y Nhật Bản vốn coi trọng chất lượng nhờ độ chính xác cấp PCR, thiết kế nhỏ gọn và vận hành hoàn toàn tự động — những phẩm chất phù hợp với kỳ vọng của Nhật Bản về công nghệ y tế chính xác.` },
    regulatoryPathway: { en: `### Regulatory Framework in Japan\n\n**PMDA (Pharmaceuticals and Medical Devices Agency):**\nMedical devices in Japan are regulated by PMDA under the Pharmaceutical and Medical Devices Act (PMD Act). IVD devices are classified into Classes I-IV. Veterinary diagnostic devices may fall under Class I or II, depending on intended use.\n\n**MAFF (Ministry of Agriculture, Forestry and Fisheries):**\nVeterinary-specific diagnostics used in official animal disease control are overseen by MAFF. Test kits used for notifiable disease surveillance must meet standards set by the National Institute of Animal Health (NIAH).\n\n**Import Registration:**\n- Foreign Manufacturer Registration (FMR) required\n- Marketing Authorization Holder (MAH) in Japan required\n- CE and ISO 13485 recognized but Japanese clinical data may be required\n- Japanese-language labeling mandatory\n\nYinrui Bio is exploring partnerships with established Japanese regulatory agents to facilitate PMDA registration and market entry.`, zh: `### 日本监管框架\n\n**PMDA：** 医疗器械受PMDA监管。IVD设备分为I-IV类。\n**MAFF：** 用于官方动物疾病控制的兽医诊断由MAFF监管。\n**进口注册：** 需要外国制造商注册(FMR)和日本营销授权持有人(MAH)。\n\n胤瑞生物正在探索与日本监管代理的合作以推进PMDA注册。`, ja: `### 日本における規制枠組み\n\n**PMDA（医薬品医療機器総合機構）：**\n日本の医療機器はPMDAの下、医薬品医療機器等法（薬機法）により規制されています。IVD機器はクラスI〜IVに分類されます。\n\n**農林水産省（MAFF）：**\n公式動物疾病管理に使用される獣医専用診断はMAFFの監督下にあります。届出疾病の監視に使用されるテストキットは農研機構動物衛生研究部門が設定する基準を満たす必要があります。\n\n**輸入登録：**\n- 外国製造業者登録（FMR）が必要\n- 日本の製造販売業者（MAH）が必要\n- CEとISO 13485は認められるが、日本の臨床データが必要な場合がある\n- 日本語ラベリングが義務\n\n胤瑞バイオはPMDA登録と市場参入を促進するため、日本の経験豊富な規制エージェントとのパートナーシップを模索しています。`, vi: `### Khung pháp lý tại Nhật Bản\\n\\n**PMDA (Cơ quan Dược phẩm và Thiết bị Y tế):**\\nThiết bị y tế tại Nhật Bản được PMDA quản lý theo Luật Dược phẩm và Thiết bị Y tế (PMD Act). Thiết bị IVD được phân loại thành Class I-IV. Thiết bị chẩn đoán thú y có thể thuộc Class I hoặc II, tùy thuộc mục đích sử dụng.\\n\\n**MAFF (Bộ Nông nghiệp, Lâm nghiệp và Thủy sản):**\\nChẩn đoán chuyên biệt cho thú y được sử dụng trong kiểm soát dịch bệnh động vật chính thức do MAFF giám sát. Các bộ kit xét nghiệm dùng cho giám sát bệnh phải báo cáo phải đáp ứng tiêu chuẩn do Viện Sức khỏe Động vật Quốc gia (NIAH) đặt ra.\\n\\n**Đăng ký nhập khẩu:**\\n- Yêu cầu Đăng ký Nhà sản xuất Nước ngoài (FMR)\\n- Yêu cầu có Chủ thể Ủy quyền Tiếp thị (MAH) tại Nhật Bản\\n- CE và ISO 13485 được công nhận nhưng có thể cần dữ liệu lâm sàng Nhật Bản\\n- Bắt buộc ghi nhãn bằng tiếng Nhật\\n\\nYinrui Bio đang tìm hiểu hợp tác với các đại lý pháp lý Nhật Bản có uy tín để hỗ trợ đăng ký PMDA và gia nhập thị trường.` },
    shippingLogistics: { en: `### Shipping from Ningbo to Japan\n\n**Primary Port:** Yokohama (Tokyo Bay)\n\n**Ocean Freight:**\n- Ningbo to Yokohama: 3-5 days transit time\n- Multiple daily services — one of the fastest shipping routes from China\n- FCL and LCL options\n\n**Air Freight:**\n- Ningbo to Narita/Haneda: 1-2 days\n- Express courier widely available\n\n**Customs:**\n- Japan customs process is efficient and predictable\n- Medical device import requires PMDA registration\n- Import duty 0-5% for diagnostic instruments\n- Consumption tax (10%) applies\n\nThe extremely short shipping distance from Ningbo to Japan is a significant advantage, enabling rapid order fulfillment and low inventory holding costs for Japanese distributors.`, zh: `### 从宁波发货至日本\n\n**主要港口：** 横滨\n**海运：** 宁波至横滨仅3-5天——中国最快的航线之一\n**空运：** 1-2天\n**关税：** 0-5%，消费税10%\n\n极短的运输距离是重大优势，支持快速订单履行。`, ja: `### 寧波から日本への出荷\n\n**主要港：** 横浜（東京湾）\n\n**海上輸送：**\n- 寧波から横浜：3〜5日——中国からの最速ルートの一つ\n- 毎日複数の便が運航\n\n**航空輸送：**\n- 寧波から成田/羽田：1〜2日\n\n**通関：**\n- 日本の通関プロセスは効率的\n- 医療機器輸入にはPMDA登録が必要\n- 関税0〜5%、消費税10%\n\n寧波から日本への極めて短い輸送距離は大きな利点であり、迅速な注文履行と日本のディストリビューターの低い在庫保有コストを可能にします。`, vi: `### Vận chuyển từ Ningbo đến Nhật Bản\\n\\n**Cảng chính:** Yokohama (Vịnh Tokyo)\\n\\n**Vận tải biển:**\\n- Ningbo đến Yokohama: thời gian vận chuyển 3-5 ngày\\n- Nhiều chuyến hàng ngày — một trong những tuyến vận chuyển nhanh nhất từ Trung Quốc\\n- Tùy chọn FCL và LCL\\n\\n**Vận tải hàng không:**\\n- Ningbo đến Narita/Haneda: 1-2 ngày\\n- Chuyển phát nhanh phổ biến rộng rãi\\n\\n**Hải quan:**\\n- Quy trình hải quan Nhật Bản hiệu quả và có thể dự đoán được\\n- Nhập khẩu thiết bị y tế yêu cầu đăng ký PMDA\\n- Thuế nhập khẩu 0-5% đối với thiết bị chẩn đoán\\n- Áp dụng thuế tiêu thụ (10%)\\n\\nKhoảng cách vận chuyển cực ngắn từ Ningbo đến Nhật Bản là một lợi thế đáng kể, cho phép đáp ứng đơn hàng nhanh chóng và chi phí lưu kho thấp cho các nhà phân phối Nhật Bản.` },
    keyApplications: { en: `### Key Applications in Japan\n\n**Premium Companion Animal Diagnostics:**\nJapan's culture of premium pet care creates strong demand for gold-standard molecular diagnostics. Canine parvovirus, distemper, tick-borne diseases, and feline respiratory infections are common testing needs. The aging pet population in Japan drives demand for regular health screening panels.\n\n**Shelter and Rescue:**\nAnimal welfare organizations in Japan perform intake screening for infectious diseases. The CarryOn's feline FeLV-FIV-FPV and canine CDV-CPV-CCoV panels are well-suited for shelter medicine applications.\n\n**Livestock Disease Control:**\nJapan's experience with CSF and avian influenza outbreaks has led to investment in rapid on-farm diagnostics. The CarryOn's ASF and PRRSV test chips support livestock surveillance programs. Wagyu beef production health monitoring is a premium application.\n\n**Veterinary Hospitals and Teaching Hospitals:**\nJapan's 16 veterinary university teaching hospitals and major referral centers are early adopters of innovative diagnostic technologies and serve as opinion leaders for the broader market.`, zh: `### 日本市场主要应用\n\n**高端伴侣动物诊断：** 日本的优质宠物护理文化创造了对金标准分子诊断的强劲需求。\n**收容所和救助：** 动物福利组织进行传染病入所筛查。\n**畜牧疾病控制：** CSF和禽流感经验推动了现场快速诊断投资。和牛生产健康监测是高端应用。\n**教学医院：** 日本16所兽医大学教学医院是创新诊断技术的早期采用者。`, ja: `### 日本市場における主要アプリケーション\n\n**プレミアムコンパニオンアニマル診断：**\n日本のプレミアムペットケア文化は、ゴールドスタンダードの分子診断への強い需要を生み出します。犬パルボウイルス、ジステンパー、ダニ媒介疾患、猫呼吸器感染症が一般的な検査ニーズです。高齢化するペット集団は定期健康スクリーニングの需要を牽引します。\n\n**シェルター・レスキュー：**\n動物福祉団体は感染症の入所スクリーニングを実施しています。\n\n**家畜疾病管理：**\nCSFや鳥インフルエンザの発生経験から、農場での迅速な診断への投資が進んでいます。和牛生産の健康モニタリングはプレミアムアプリケーションです。\n\n**獣医大学病院：**\n日本の16の獣医大学教育病院は革新的な診断技術の早期採用者であり、市場全体のオピニオンリーダーです。`, vi: `### Ứng dụng chính tại Nhật Bản\\n\\n**Chẩn đoán động vật đồng hành cao cấp:**\\nVăn hóa chăm sóc thú cưng cao cấp của Nhật Bản tạo ra nhu cầu mạnh mẽ đối với chẩn đoán phân tử chuẩn vàng. Parvovirus ở chó, bệnh care (distemper), các bệnh do ve truyền và nhiễm trùng hô hấp ở mèo là những nhu cầu xét nghiệm phổ biến. Dân số thú cưng già hóa tại Nhật Bản thúc đẩy nhu cầu về các bảng sàng lọc sức khỏe định kỳ.\\n\\n**Trung tâm cứu hộ và bảo trợ:**\\nCác tổ chức phúc lợi động vật tại Nhật Bản thực hiện sàng lọc đầu vào đối với các bệnh truyền nhiễm. Các bảng xét nghiệm FeLV-FIV-FPV ở mèo và CDV-CPV-CCoV ở chó của CarryOn rất phù hợp cho các ứng dụng y học tại trung tâm cứu hộ.\\n\\n**Kiểm soát dịch bệnh vật nuôi:**\\nKinh nghiệm của Nhật Bản với các đợt bùng phát CSF và cúm gia cầm đã dẫn đến đầu tư vào chẩn đoán nhanh tại trang trại. Các chip xét nghiệm ASF và PRRSV của CarryOn hỗ trợ các chương trình giám sát vật nuôi. Giám sát sức khỏe trong sản xuất thịt bò Wagyu là một ứng dụng cao cấp.\\n\\n**Bệnh viện thú y và bệnh viện giảng dạy:**\\n16 bệnh viện giảng dạy thú y thuộc trường đại học của Nhật Bản và các trung tâm chuyển tuyến lớn là những đơn vị tiên phong áp dụng công nghệ chẩn đoán đổi mới và đóng vai trò định hướng chuyên môn cho thị trường rộng lớn hơn.` },
    distributionModel: { en: `### Distribution & Partnership in Japan\n\nYinrui Bio seeks a premium distribution partner for the Japanese market, ideally with experience in veterinary diagnostic device distribution and PMDA regulatory processes.\n\n**Ideal Partners:**\n- Established veterinary medical device distributors with national coverage\n- Companies with PMDA MAH (Marketing Authorization Holder) capabilities\n- Laboratory equipment distributors serving veterinary teaching hospitals\n\n**Support:** Japanese-language interface and materials, PMDA registration support, technical training, demo programs, and Japan-specific marketing materials.\n\nContact us to discuss exclusive distribution partnerships for Japan.`, zh: `### 日本分销与合作\n\n胤瑞生物寻求日本市场的高端分销合作伙伴，理想情况下具有兽医诊断设备分销和PMDA监管经验。\n\n提供日语界面和材料、PMDA注册支持、技术培训。`, ja: `### 日本における販売・パートナーシップ\n\n胤瑞バイオは日本市場のプレミアムディストリビューションパートナーを募集しています。獣医診断機器販売とPMDA規制プロセスの経験を持つパートナーが理想的です。\n\n**理想的なパートナー：**\n- 全国カバレッジを持つ確立された獣医医療機器ディストリビューター\n- PMDA製造販売業者（MAH）能力を持つ企業\n- 獣医大学教育病院にサービスを提供する検査機器ディストリビューター\n\n**サポート：** 日本語インターフェースと資料、PMDA登録支援、技術トレーニング、デモプログラム。\n\n日本での独占販売パートナーシップについてお問い合わせください。`, vi: `### Phân phối & Hợp tác tại Nhật Bản\\n\\nYinrui Bio tìm kiếm đối tác phân phối cao cấp cho thị trường Nhật Bản, lý tưởng nhất là có kinh nghiệm phân phối thiết bị chẩn đoán thú y và quy trình pháp lý PMDA.\\n\\n**Đối tác lý tưởng:**\\n- Các nhà phân phối thiết bị y tế thú y đã có uy tín với phạm vi toàn quốc\\n- Các công ty có năng lực PMDA MAH (Chủ thể Ủy quyền Tiếp thị)\\n- Các nhà phân phối thiết bị phòng thí nghiệm phục vụ bệnh viện giảng dạy thú y\\n\\n**Hỗ trợ:** Giao diện và tài liệu bằng tiếng Nhật, hỗ trợ đăng ký PMDA, đào tạo kỹ thuật, chương trình demo và tài liệu tiếp thị dành riêng cho Nhật Bản.\\n\\nLiên hệ với chúng tôi để thảo luận về quan hệ đối tác phân phối độc quyền cho Nhật Bản.` },
    faqs: [
      { q: { en: "Is the CarryOn registered with PMDA in Japan?", zh: "CarryOn是否在日本PMDA注册？", ja: "CarryOnはPMDAに登録されていますか？", vi: "CarryOn đã được đăng ký với PMDA tại Nhật Bản chưa?" }, a: { en: "Yinrui Bio is actively pursuing the Japanese market and exploring partnerships with PMDA-experienced regulatory agents. Our CE certification and ISO 13485 quality system provide a strong foundation for PMDA registration. The process typically requires a Japanese Marketing Authorization Holder (MAH) and may include Japanese clinical data requirements.", zh: "胤瑞生物正在积极开拓日本市场，探索与PMDA经验丰富的监管代理合作。CE认证和ISO 13485为PMDA注册提供坚实基础。", ja: "胤瑞バイオは日本市場を積極的に開拓しており、PMDAに経験豊富な規制エージェントとのパートナーシップを模索しています。CE認証とISO 13485品質システムがPMDA登録の強力な基盤を提供します。", vi: "Yinrui Bio đang tích cực theo đuổi thị trường Nhật Bản và tìm kiếm hợp tác với các đại lý pháp lý có kinh nghiệm về PMDA. Chứng nhận CE và hệ thống chất lượng ISO 13485 của chúng tôi tạo nền tảng vững chắc cho việc đăng ký PMDA. Quy trình thường yêu cầu một Marketing Authorization Holder (MAH) tại Nhật Bản và có thể bao gồm các yêu cầu về dữ liệu lâm sàng Nhật Bản." } },
      { q: { en: "How quickly can orders be delivered from China to Japan?", zh: "从中国到日本的订单交付速度如何？", ja: "中国から日本への注文はどのくらい早く届きますか？", vi: "Đơn hàng từ Trung Quốc đến Nhật Bản có thể được giao nhanh đến mức nào?" }, a: { en: "Japan is one of the fastest destinations from our Ningbo manufacturing facility. Ocean freight takes just 3-5 days, and air freight 1-2 days. This proximity enables rapid order fulfillment, minimal inventory holding requirements, and just-in-time replenishment models for Japanese distributors.", zh: "日本是从我们宁波工厂最快到达的目的地之一。海运仅需3-5天，空运1-2天。", ja: "日本は寧波の製造施設からの最速の目的地の一つです。海上輸送はわずか3〜5日、航空輸送は1〜2日です。この近さにより、迅速な注文履行、最小限の在庫保有要件、日本のディストリビューター向けのジャストインタイム補充モデルが可能です。", vi: "Nhật Bản là một trong những điểm đến nhanh nhất từ cơ sở sản xuất Ningbo của chúng tôi. Vận tải đường biển chỉ mất 3-5 ngày, còn đường hàng không là 1-2 ngày. Khoảng cách gần này cho phép đáp ứng đơn hàng nhanh chóng, giảm thiểu yêu cầu tồn kho và hỗ trợ mô hình bổ sung hàng đúng lúc cho các nhà phân phối Nhật Bản." } },
      { q: { en: "Does the CarryOn support Japanese language?", zh: "CarryOn是否支持日语？", ja: "CarryOnは日本語をサポートしていますか？", vi: "CarryOn có hỗ trợ tiếng Nhật không?" }, a: { en: "The CarryOn device currently supports English and Chinese interfaces. Japanese language support is in development and can be prioritized through firmware updates for the Japanese market. All test results use universal numerical and visual indicators that are language-independent.", zh: "CarryOn目前支持英文和中文界面。日语支持正在开发中，可通过固件更新优先为日本市场提供。", ja: "CarryOnデバイスは現在英語と中国語のインターフェースをサポートしています。日本語サポートは開発中で、日本市場向けにファームウェアアップデートを通じて優先的に提供できます。すべてのテスト結果は言語に依存しない普遍的な数値・視覚インジケーターを使用しています。", vi: "Thiết bị CarryOn hiện hỗ trợ giao diện tiếng Anh và tiếng Trung. Hỗ trợ tiếng Nhật đang được phát triển và có thể được ưu tiên thông qua các bản cập nhật firmware cho thị trường Nhật Bản. Tất cả kết quả xét nghiệm sử dụng các chỉ báo số và hình ảnh phổ quát, không phụ thuộc ngôn ngữ." } },
      { q: { en: "What companion animal tests are most relevant for Japan?", zh: "哪些伴侣动物检测最适合日本？", ja: "日本に最も関連するコンパニオンアニマル検査は？", vi: "Những xét nghiệm động vật đồng hành nào phù hợp nhất với Nhật Bản?" }, a: { en: "For dogs: CDV-CPV-CCoV triple screening, tick-borne disease panel (Babesia, Ehrlichia, Leptospira), and respiratory panel. For cats: FeLV-FIV-FPV screening and respiratory triple panel (FHV-FCV-Mycoplasma). Japan's aging pet population also drives demand for regular health screening, where PCR provides superior sensitivity to detect subclinical infections.", zh: "犬类：CDV-CPV-CCoV三联筛查、蜱传疾病和呼吸道面板。猫类：FeLV-FIV-FPV筛查和呼吸道三联面板。日本高龄宠物群体推动定期健康筛查需求。", ja: "犬：CDV-CPV-CCoV 3連スクリーニング、ダニ媒介疾患パネル、呼吸器パネル。猫：FeLV-FIV-FPVスクリーニング、呼吸器3連パネル。日本の高齢化するペット集団は定期健康スクリーニングの需要を牽引し、PCRは無症候性感染の検出に優れた感度を提供します。", vi: "Đối với chó: sàng lọc ba tác nhân CDV-CPV-CCoV, bộ xét nghiệm bệnh do ve truyền (Babesia, Ehrlichia, Leptospira) và bộ xét nghiệm hô hấp. Đối với mèo: sàng lọc FeLV-FIV-FPV và bộ ba xét nghiệm hô hấp (FHV-FCV-Mycoplasma). Dân số thú cưng đang già hóa tại Nhật Bản cũng thúc đẩy nhu cầu sàng lọc sức khỏe định kỳ, trong đó PCR mang lại độ nhạy vượt trội để phát hiện các bệnh nhiễm trùng dưới lâm sàng." } },
      { q: { en: "How does the CarryOn compare to existing Japanese veterinary PCR systems?", zh: "CarryOn与日本现有的兽医PCR系统相比如何？", ja: "CarryOnは既存の日本の獣医PCRシステムとどう比較されますか？", vi: "CarryOn so sánh như thế nào với các hệ thống PCR thú y hiện có tại Nhật Bản?" }, a: { en: "The CarryOn differentiates through true handheld portability (2.0 kg with battery), fully automated closed-system operation (zero training required), and room-temperature reagent storage. Most existing PCR systems in Japan are benchtop units requiring AC power, manual sample preparation, and cold chain reagent storage. The CarryOn brings PCR-level accuracy to any location without laboratory infrastructure.", zh: "CarryOn通过真正的手持便携性（2.0kg含电池）、全自动封闭系统操作和室温试剂存储实现差异化。日本现有的大多数PCR系统是需要交流电源和手动样品准备的台式设备。", ja: "CarryOnは真のハンドヘルド携帯性（2.0kg、バッテリー搭載）、全自動クローズドシステム操作（トレーニング不要）、室温試薬保存で差別化されます。日本の既存PCRシステムの多くはAC電源、手動サンプル準備、コールドチェーン試薬保存を必要とするベンチトップユニットです。", vi: "CarryOn tạo sự khác biệt nhờ tính di động cầm tay thực sự (2.0 kg bao gồm pin), vận hành hệ thống kín hoàn toàn tự động (không cần đào tạo) và bảo quản thuốc thử ở nhiệt độ phòng. Hầu hết các hệ thống PCR hiện có tại Nhật Bản là thiết bị để bàn cần nguồn điện AC, chuẩn bị mẫu thủ công và bảo quản thuốc thử theo chuỗi lạnh. CarryOn mang lại độ chính xác cấp PCR đến mọi địa điểm mà không cần cơ sở hạ tầng phòng xét nghiệm." } },
      { q: { en: "Does Yinrui Bio attend veterinary trade shows in Japan?", zh: "胤瑞生物是否参加日本的兽医展会？", ja: "胤瑞バイオは日本の獣医見本市に出展していますか？", vi: "Yinrui Bio có tham gia các hội chợ triển lãm thú y tại Nhật Bản không?" }, a: { en: "Yinrui Bio participates in major international veterinary exhibitions and is planning attendance at Japanese veterinary events. We welcome meeting potential partners at events such as the Japan Veterinary Medical Association annual conference and Interzoo Asia. Contact us to arrange a meeting or product demonstration.", zh: "胤瑞生物参加主要国际兽医展览，并计划参加日本兽医活动。欢迎在展会上与我们会面或安排产品演示。", ja: "胤瑞バイオは主要な国際獣医展示会に参加しており、日本の獣医イベントへの出展を計画しています。日本獣医学会年次大会やインターズーアジアなどのイベントでの面談を歓迎します。ミーティングや製品デモンストレーションのアレンジはお問い合わせください。", vi: "Yinrui Bio tham gia các triển lãm thú y quốc tế lớn và đang lên kế hoạch tham dự các sự kiện thú y tại Nhật Bản. Chúng tôi hoan nghênh gặp gỡ các đối tác tiềm năng tại các sự kiện như hội nghị thường niên của Hiệp hội Y học Thú y Nhật Bản và Interzoo Asia. Hãy liên hệ với chúng tôi để sắp xếp cuộc họp hoặc buổi trình diễn sản phẩm." } },
    ],
  },

  // 6. Australia
  {
    slug: "australia",
    countryCode: "AU",
    name: { en: "Australia", zh: "澳大利亚", ja: "オーストラリア", vi: "Úc" },
    heroTitle: { en: "Portable PCR Diagnostics for Australia's Veterinary & Biosecurity Market", zh: "面向澳大利亚兽医与生物安全市场的便携式PCR诊断", ja: "オーストラリアの獣医・バイオセキュリティ市場向けポータブルPCR診断", vi: "Chẩn đoán PCR di động cho thị trường thú y & an toàn sinh học tại Úc" },
    heroSubtitle: { en: "Supporting Australia's strict biosecurity standards and diverse animal health needs with field-deployable PCR technology.", zh: "以现场可部署的PCR技术支持澳大利亚严格的生物安全标准和多样化的动物健康需求。", ja: "フィールド展開可能なPCR技術でオーストラリアの厳格なバイオセキュリティ基準と多様な動物健康ニーズを支援。", vi: "Hỗ trợ các tiêu chuẩn an toàn sinh học nghiêm ngặt và nhu cầu sức khỏe động vật đa dạng của Úc bằng công nghệ PCR có thể triển khai tại hiện trường." },
    port: "Sydney",
    flagEmoji: "AU",
    marketOverview: { en: `Australia's veterinary diagnostics market combines a strong companion animal sector with a critically important livestock and biosecurity segment. The country's geographic isolation has kept it free from many global animal diseases, making biosecurity surveillance the highest priority for diagnostic testing.\n\nAustralia has over 6,000 veterinary practices, 29 million pets, and one of the world's highest pet ownership rates at 69% of households. Australian pet owners spend an average of AUD $1,500+ annually on veterinary care per pet, creating strong demand for advanced diagnostics.\n\nThe livestock sector is a cornerstone of Australia's economy, with 23+ million cattle, 70+ million sheep, and significant poultry operations. Australia's live animal export industry — one of the world's largest — requires extensive health testing before export, creating unique demand for portable diagnostic capabilities at export yards and quarantine facilities.\n\nAustralia's unique wildlife — including koalas, wombats, and Tasmanian devils — faces disease threats that require molecular diagnostics for conservation efforts. Chlamydia in koalas, Devil Facial Tumour Disease, and wildlife disease surveillance represent niche but critical applications.\n\nThe CarryOn's battery-powered portability is particularly valuable in Australia, where vast distances and remote locations characterize much of the agricultural landscape.`, zh: `澳大利亚兽医诊断市场结合了强大的伴侣动物行业和至关重要的畜牧及生物安全领域。该国的地理隔离使其免受许多全球动物疾病的影响。\n\n澳大利亚有6,000+家兽医诊所、2900万只宠物，宠物拥有率高达69%。畜牧业是经济基石，拥有2300万+头牛和7000万+只羊。\n\n澳大利亚独特的野生动物面临需要分子诊断的疾病威胁。CarryOn的电池便携性在澳大利亚广阔的地理环境中特别有价值。`, ja: `オーストラリアの獣医診断市場は、強力なコンパニオンアニマルセクターと重要な畜産・バイオセキュリティ分野を組み合わせています。\n\nオーストラリアには6,000以上の動物病院、2,900万頭のペットがあり、世帯の69%というペット飼育率は世界最高水準の一つです。\n\nCarryOnのバッテリー駆動の携帯性は、広大な距離と遠隔地が特徴のオーストラリアで特に価値があります。`, vi: `Thị trường chẩn đoán thú y của Úc kết hợp một lĩnh vực động vật đồng hành mạnh mẽ với một phân khúc chăn nuôi và an toàn sinh học có tầm quan trọng đặc biệt. Vị trí địa lý biệt lập của quốc gia này đã giúp nước này thoát khỏi nhiều bệnh động vật toàn cầu, khiến giám sát an toàn sinh học trở thành ưu tiên cao nhất đối với xét nghiệm chẩn đoán.

Úc có hơn 6.000 phòng khám thú y, 29 triệu thú cưng và một trong những tỷ lệ sở hữu thú cưng cao nhất thế giới với 69% hộ gia đình. Chủ thú cưng Úc chi trung bình AUD $1,500+ mỗi năm cho chăm sóc thú y trên mỗi thú cưng, tạo nhu cầu mạnh mẽ đối với chẩn đoán tiên tiến.

Ngành chăn nuôi là nền tảng của nền kinh tế Úc, với hơn 23 triệu gia súc, hơn 70 triệu cừu và các hoạt động chăn nuôi gia cầm đáng kể. Ngành xuất khẩu động vật sống của Úc — một trong những ngành lớn nhất thế giới — đòi hỏi xét nghiệm sức khỏe rộng rãi trước khi xuất khẩu, tạo ra nhu cầu đặc biệt đối với năng lực chẩn đoán di động tại các bãi xuất khẩu và cơ sở kiểm dịch.

Động vật hoang dã độc đáo của Úc — bao gồm gấu koala, wombat và quỷ Tasmania — đối mặt với các mối đe dọa bệnh tật cần chẩn đoán phân tử cho các nỗ lực bảo tồn. Bệnh Chlamydia ở gấu koala, Devil Facial Tumour Disease và giám sát bệnh động vật hoang dã là những ứng dụng ngách nhưng quan trọng.

Tính di động chạy bằng pin của CarryOn đặc biệt có giá trị tại Úc, nơi khoảng cách xa xôi và các địa điểm hẻo lánh đặc trưng cho phần lớn cảnh quan nông nghiệp.` },
    regulatoryPathway: { en: `### Regulatory Framework in Australia\n\n**TGA (Therapeutic Goods Administration):**\nIVD devices in Australia are regulated by the TGA under the Therapeutic Goods Act 1989. IVDs are classified into Classes 1-4. Veterinary IVDs are generally exempt from TGA regulation but may require inclusion on the Australian Register of Therapeutic Goods (ARTG) depending on claims.\n\n**APVMA (Australian Pesticides and Veterinary Medicines Authority):**\nVeterinary diagnostic test kits may require registration with APVMA if they contain biological agents. The regulatory pathway depends on the specific product composition.\n\n**Biosecurity Requirements:**\nAustralia's Department of Agriculture enforces strict biosecurity import conditions. All diagnostic devices and reagents must comply with BICON (Biosecurity Import Conditions) requirements.\n\n**Import Requirements:**\n- TGA notification or ARTG inclusion may be required\n- Biosecurity import permits for biological components\n- GST at 10% applies\n- Customs duty varies by classification`, zh: `### 澳大利亚监管框架\n\n**TGA：** IVD设备受TGA监管。兽医IVD通常豁免TGA监管。\n**APVMA：** 含生物试剂的兽医诊断试剂盒可能需要APVMA注册。\n**生物安全要求：** 所有诊断设备和试剂必须符合BICON要求。\n**进口：** GST 10%。`, ja: `### オーストラリアにおける規制枠組み\n\n**TGA（医療品管理局）：** IVD機器はTGAにより規制されます。獣医IVDは一般的にTGA規制から免除されます。\n**APVMA：** 生物学的試薬を含む獣医診断キットはAPVMA登録が必要な場合があります。\n**バイオセキュリティ要件：** 全ての診断機器と試薬はBICON要件に準拠する必要があります。`, vi: `### Khung pháp lý tại Úc

**TGA (Therapeutic Goods Administration):**
Thiết bị IVD tại Úc được quản lý bởi TGA theo Therapeutic Goods Act 1989. IVD được phân loại thành các Lớp 1-4. IVD thú y thường được miễn quy định của TGA nhưng có thể cần được đưa vào Australian Register of Therapeutic Goods (ARTG) tùy theo các tuyên bố.

**APVMA (Australian Pesticides and Veterinary Medicines Authority):**
Bộ xét nghiệm chẩn đoán thú y có thể cần đăng ký với APVMA nếu chứa tác nhân sinh học. Lộ trình pháp lý phụ thuộc vào thành phần cụ thể của sản phẩm.

**Yêu cầu an toàn sinh học:**
Bộ Nông nghiệp Úc thực thi các điều kiện nhập khẩu an toàn sinh học nghiêm ngặt. Tất cả thiết bị chẩn đoán và thuốc thử phải tuân thủ các yêu cầu BICON (Biosecurity Import Conditions).

**Yêu cầu nhập khẩu:**
- Có thể cần thông báo TGA hoặc đưa vào ARTG
- Giấy phép nhập khẩu an toàn sinh học đối với thành phần sinh học
- Áp dụng GST 10%
- Thuế hải quan thay đổi theo phân loại` },
    shippingLogistics: { en: `### Shipping from Ningbo to Australia\n\n**Primary Port:** Sydney (Port Botany)\n\n**Ocean Freight:**\n- Ningbo to Sydney: 12-16 days transit time\n- Direct services available\n- FCL and LCL options\n\n**Biosecurity Clearance:**\n- All goods entering Australia undergo biosecurity screening\n- Clean packaging and documentation essential\n- Wooden packaging requires ISPM 15 treatment certification\n- Room-temperature storage simplifies biosecurity compliance\n\n**Distribution:**\n- Sydney and Melbourne serve as primary distribution hubs\n- Australia Post and national freight networks provide nationwide coverage\n\nYinrui Bio provides complete export documentation and works with Australian import agents experienced in medical device and biosecurity clearance.`, zh: `### 从宁波发货至澳大利亚\n\n**主要港口：** 悉尼\n**海运：** 宁波至悉尼12-16天\n**生物安全通关：** 所有进入澳大利亚的货物需经生物安全检查。室温存储简化合规。`, ja: `### 寧波からオーストラリアへの出荷\n\n**主要港：** シドニー\n**海上輸送：** 寧波からシドニー12〜16日\n**バイオセキュリティ通関：** オーストラリアに入る全ての貨物はバイオセキュリティ検査を受けます。室温保存がコンプライアンスを簡素化します。`, vi: `### Vận chuyển từ Ningbo đến Úc

**Cảng chính:** Sydney (Port Botany)

**Vận tải đường biển:**
- Ningbo đến Sydney: thời gian vận chuyển 12-16 ngày
- Có dịch vụ trực tiếp
- Tùy chọn FCL và LCL

**Thông quan an toàn sinh học:**
- Tất cả hàng hóa nhập vào Úc đều trải qua sàng lọc an toàn sinh học
- Bao bì sạch và hồ sơ đầy đủ là yếu tố thiết yếu
- Bao bì gỗ yêu cầu chứng nhận xử lý ISPM 15
- Bảo quản ở nhiệt độ phòng giúp đơn giản hóa việc tuân thủ an toàn sinh học

**Phân phối:**
- Sydney và Melbourne là các trung tâm phân phối chính
- Australia Post và các mạng lưới vận tải quốc gia cung cấp phạm vi toàn quốc

Yinrui Bio cung cấp hồ sơ xuất khẩu đầy đủ và làm việc với các đại lý nhập khẩu Úc có kinh nghiệm về thông quan thiết bị y tế và an toàn sinh học.` },
    keyApplications: { en: `### Key Applications in Australia\n\n**Livestock Export Testing:**\nAustralia's live animal export industry requires extensive pre-export health testing. Portable PCR at export yards and quarantine facilities enables rapid testing without sending samples to distant laboratories — critical for time-sensitive export schedules.\n\n**Companion Animal Diagnostics:**\nWith 29 million pets, Australia's companion animal market demands advanced diagnostics. Canine parvovirus, tick-borne diseases (particularly Ehrlichia canis, newly established in northern Australia), and feline FIV/FeLV are key testing needs.\n\n**Biosecurity Surveillance:**\nAustralia's freedom from diseases like ASF, FMD, and rabies depends on active surveillance. Portable PCR capabilities at border checkpoints, quarantine stations, and remote pastoral properties support Australia's biosecurity posture.\n\n**Wildlife Disease:**\nChlamydial disease in koalas, Devil Facial Tumour Disease in Tasmanian devils, and bat lyssavirus surveillance are conservation-critical applications where field-deployable PCR offers significant advantages.`, zh: `### 澳大利亚市场主要应用\n\n**活畜出口检测：** 澳大利亚活畜出口业需要广泛的出口前健康检测。\n**伴侣动物诊断：** 2900万宠物市场需要先进诊断。\n**生物安全监测：** 维持ASF、FMD、狂犬病的无疫状态依赖主动监测。\n**野生动物疾病：** 考拉衣原体病、袋獾面部肿瘤病的保护性应用。`, ja: `### オーストラリア市場における主要アプリケーション\n\n**家畜輸出検査：** オーストラリアの生体動物輸出業は広範な輸出前健康検査を必要としています。\n**コンパニオンアニマル診断：** 2,900万頭のペットを持つ市場は先進診断を求めています。\n**バイオセキュリティ監視：** ASF、FMD、狂犬病からの自由は積極的な監視に依存しています。\n**野生動物疾病：** コアラのクラミジア病、タスマニアデビルの顔面腫瘍病は保全に重要なアプリケーションです。`, vi: `### Ứng dụng chính tại Úc

**Xét nghiệm xuất khẩu vật nuôi:**
Ngành xuất khẩu động vật sống của Úc đòi hỏi xét nghiệm sức khỏe rộng rãi trước khi xuất khẩu. PCR di động tại các bãi xuất khẩu và cơ sở kiểm dịch cho phép xét nghiệm nhanh mà không cần gửi mẫu đến các phòng xét nghiệm xa xôi — yếu tố quan trọng đối với lịch xuất khẩu gấp về thời gian.

**Chẩn đoán động vật đồng hành:**
Với 29 triệu thú cưng, thị trường động vật đồng hành của Úc đòi hỏi chẩn đoán tiên tiến. Canine parvovirus, các bệnh do ve truyền (đặc biệt là Ehrlichia canis, mới xuất hiện ở miền bắc Úc) và FIV/FeLV ở mèo là những nhu cầu xét nghiệm chính.

**Giám sát an toàn sinh học:**
Việc Úc không có các bệnh như ASF, FMD và bệnh dại phụ thuộc vào giám sát chủ động. Năng lực PCR di động tại các trạm kiểm soát biên giới, trạm kiểm dịch và các cơ sở chăn thả xa xôi hỗ trợ thế trận an toàn sinh học của Úc.

**Bệnh động vật hoang dã:**
Bệnh Chlamydia ở gấu koala, Devil Facial Tumour Disease ở quỷ Tasmania và giám sát lyssavirus ở dơi là những ứng dụng quan trọng đối với bảo tồn, nơi PCR có thể triển khai tại hiện trường mang lại lợi thế đáng kể.` },
    distributionModel: { en: `### Distribution & Partnership in Australia\n\nYinrui Bio seeks an established Australian veterinary diagnostics distributor with experience in regulatory compliance and national distribution.\n\n**Ideal Partners:**\n- Veterinary diagnostic equipment distributors with national coverage\n- Agricultural supply companies serving livestock industries\n- Companies with TGA/APVMA regulatory experience\n\n**Support:** Regulatory guidance, marketing materials, technical training, demo units, and competitive pricing for the Australian market.\n\nContact us to discuss distribution opportunities across Australia and New Zealand.`, zh: `### 澳大利亚分销与合作\n\n胤瑞生物寻求具有监管合规和全国分销经验的澳大利亚兽医诊断经销商。提供监管指导、营销材料和技术培训。`, ja: `### オーストラリアにおける販売・パートナーシップ\n\n胤瑞バイオは規制コンプライアンスと全国販売の経験を持つオーストラリアの獣医診断ディストリビューターを募集しています。規制ガイダンス、マーケティング資料、技術トレーニングを提供します。`, vi: `### Phân phối & Hợp tác tại Úc

Yinrui Bio tìm kiếm một nhà phân phối chẩn đoán thú y có uy tín tại Úc với kinh nghiệm tuân thủ pháp lý và phân phối toàn quốc.

**Đối tác lý tưởng:**
- Nhà phân phối thiết bị chẩn đoán thú y có phạm vi toàn quốc
- Công ty cung cấp vật tư nông nghiệp phục vụ ngành chăn nuôi
- Công ty có kinh nghiệm pháp lý về TGA/APVMA

**Hỗ trợ:** Hướng dẫn pháp lý, tài liệu tiếp thị, đào tạo kỹ thuật, thiết bị trình diễn và giá cạnh tranh cho thị trường Úc.

Hãy liên hệ với chúng tôi để thảo luận cơ hội phân phối trên khắp Úc và New Zealand.` },
    faqs: [
      { q: { en: "Does the CarryOn meet Australian biosecurity import requirements?", zh: "CarryOn是否满足澳大利亚生物安全进口要求？", ja: "CarryOnはオーストラリアのバイオセキュリティ輸入要件を満たしていますか？", vi: "CarryOn có đáp ứng yêu cầu nhập khẩu về kiểm dịch sinh học của Úc không?" }, a: { en: "The CarryOn device itself is an electronic instrument that meets standard import requirements. Test chips containing reagents require biosecurity assessment under BICON conditions. Room-temperature stable reagents simplify the biosecurity import process. Yinrui Bio works with Australian import specialists to ensure all biosecurity documentation is complete.", zh: "CarryOn设备本身是符合标准进口要求的电子仪器。含试剂的芯片需要BICON条件下的生物安全评估。室温稳定试剂简化进口流程。", ja: "CarryOnデバイス自体は標準的な輸入要件を満たす電子機器です。試薬を含むテストチップはBICON条件下のバイオセキュリティ評価が必要です。室温安定試薬がバイオセキュリティ輸入プロセスを簡素化します。", vi: "Bản thân thiết bị CarryOn là một dụng cụ điện tử đáp ứng các yêu cầu nhập khẩu tiêu chuẩn. Chip xét nghiệm chứa thuốc thử cần được đánh giá kiểm dịch sinh học theo điều kiện BICON. Thuốc thử ổn định ở nhiệt độ phòng giúp đơn giản hóa quy trình nhập khẩu kiểm dịch sinh học. Yinrui Bio phối hợp với các chuyên gia nhập khẩu Úc để đảm bảo hoàn tất mọi hồ sơ kiểm dịch sinh học." } },
      { q: { en: "Can the CarryOn be used in remote Australian pastoral stations?", zh: "CarryOn能在澳大利亚偏远牧场使用吗？", ja: "CarryOnはオーストラリアの遠隔牧場で使用できますか？", vi: "CarryOn có thể được sử dụng tại các trạm chăn thả vùng sâu vùng xa của Úc không?" }, a: { en: "Absolutely. The CarryOn is designed for exactly these environments — battery-powered (3.5 hours runtime), room-temperature reagent storage, fully automated operation, and rugged portable design. It operates without laboratory infrastructure, electricity grid, or cold chain — all common challenges in remote Australian pastoral settings.", zh: "完全可以。CarryOn正是为这类环境设计的——电池供电（3.5小时续航）、室温试剂存储、全自动操作。", ja: "もちろんです。CarryOnはまさにこのような環境向けに設計されています——バッテリー駆動（3.5時間稼働）、室温試薬保存、全自動操作、頑丈なポータブル設計。", vi: "Hoàn toàn có thể. CarryOn được thiết kế dành riêng cho những môi trường như vậy — dùng pin (thời gian hoạt động 3,5 giờ), bảo quản thuốc thử ở nhiệt độ phòng, vận hành hoàn toàn tự động và thiết kế cầm tay chắc chắn. Thiết bị hoạt động mà không cần cơ sở hạ tầng phòng xét nghiệm, lưới điện hoặc chuỗi lạnh — những thách thức phổ biến tại các địa bàn chăn thả vùng sâu vùng xa của Úc." } },
      { q: { en: "Is Ehrlichia testing available for the Australian market?", zh: "澳大利亚市场有埃利希体检测吗？", ja: "オーストラリア市場でエールリヒア検査は利用可能ですか？", vi: "Xét nghiệm Ehrlichia có sẵn cho thị trường Úc không?" }, a: { en: "Yes. The Canine Babesia-Ehrlichia-Leptospira Triple Test Chip detects Ehrlichia canis, which was first confirmed in Australian dogs in 2020 and has since become an emerging disease concern, particularly in northern Australia. This panel is highly relevant for Australian veterinary practices.", zh: "是的。犬巴贝斯虫-艾利希体-钩端螺旋体三联检芯片可检测犬艾利希体，该病于2020年在澳大利亚犬只中首次确认。", ja: "はい。犬バベシア・エールリヒア・レプトスピラ3連検査チップはエールリヒア・カニスを検出します。2020年にオーストラリアの犬で初めて確認され、新興疾病として懸念されています。", vi: "Có. Chip xét nghiệm ba tác nhân Babesia-Ehrlichia-Leptospira ở chó phát hiện Ehrlichia canis, tác nhân lần đầu được xác nhận ở chó tại Úc vào năm 2020 và từ đó trở thành mối lo ngại về bệnh mới nổi, đặc biệt ở miền bắc Úc. Bộ xét nghiệm này rất phù hợp với các phòng khám thú y tại Úc." } },
      { q: { en: "What are the import duties for diagnostic devices in Australia?", zh: "澳大利亚诊断设备的进口关税是多少？", ja: "オーストラリアにおける診断機器の輸入関税は？", vi: "Thuế nhập khẩu đối với thiết bị chẩn đoán tại Úc là bao nhiêu?" }, a: { en: "Import duties for diagnostic instruments in Australia typically range from 0-5% depending on the tariff classification. GST at 10% applies to the landed value. Medical and scientific instruments may qualify for concessional duty rates. Free Trade Agreement benefits between China and Australia (ChAFTA) may apply to reduce duty costs.", zh: "澳大利亚诊断仪器的进口关税通常为0-5%。GST 10%。中澳自贸协定(ChAFTA)可能适用以降低关税成本。", ja: "オーストラリアにおける診断機器の輸入関税は通常0〜5%です。GST 10%が適用されます。中豪FTA(ChAFTA)により関税コストが削減される可能性があります。", vi: "Thuế nhập khẩu đối với thiết bị chẩn đoán tại Úc thường dao động từ 0-5% tùy theo mã phân loại thuế quan. Thuế GST 10% áp dụng trên trị giá đến cảng. Thiết bị y tế và khoa học có thể đủ điều kiện hưởng mức thuế ưu đãi. Ưu đãi từ Hiệp định Thương mại tự do giữa Trung Quốc và Úc (ChAFTA) có thể được áp dụng để giảm chi phí thuế." } },
      { q: { en: "Can the CarryOn support wildlife disease research in Australia?", zh: "CarryOn能支持澳大利亚的野生动物疾病研究吗？", ja: "CarryOnはオーストラリアの野生動物疾病研究を支援できますか？", vi: "CarryOn có thể hỗ trợ nghiên cứu bệnh động vật hoang dã tại Úc không?" }, a: { en: "Yes. The CarryOn's field portability makes it valuable for wildlife research and conservation programs. Its use in detecting chlamydial disease in koalas, monitoring bat lyssavirus, and supporting Tasmanian devil conservation would require custom test chip development. Yinrui Bio's R&D team can work with Australian research institutions to develop wildlife-specific panels.", zh: "是的。CarryOn的现场便携性使其对野生动物研究和保护项目很有价值。胤瑞生物研发团队可与澳大利亚研究机构合作开发野生动物专用面板。", ja: "はい。CarryOnのフィールド携帯性は野生動物研究と保全プログラムに価値があります。胤瑞バイオのR&Dチームはオーストラリアの研究機関と協力して野生動物専用パネルを開発できます。", vi: "Có. Khả năng di động thực địa của CarryOn khiến thiết bị có giá trị cho các chương trình nghiên cứu và bảo tồn động vật hoang dã. Việc sử dụng thiết bị để phát hiện bệnh do Chlamydia ở gấu koala, giám sát lyssavirus ở dơi và hỗ trợ bảo tồn quỷ Tasmania sẽ cần phát triển chip xét nghiệm riêng. Đội ngũ R&D của Yinrui Bio có thể phối hợp với các tổ chức nghiên cứu Úc để phát triển bộ xét nghiệm dành riêng cho động vật hoang dã." } },
      { q: { en: "Does Yinrui Bio support distribution across both Australia and New Zealand?", zh: "胤瑞生物是否支持澳大利亚和新西兰的分销？", ja: "胤瑞バイオはオーストラリアとニュージーランド両方の販売をサポートしますか？", vi: "Yinrui Bio có hỗ trợ phân phối trên cả Úc và New Zealand không?" }, a: { en: "Yes. We welcome distribution partnerships covering both Australia and New Zealand (Oceania region). Both countries share similar biosecurity priorities and regulatory frameworks, making a combined distribution strategy efficient. New Zealand's MPI (Ministry for Primary Industries) regulatory requirements are compatible with our CE-certified product documentation.", zh: "是的。我们欢迎覆盖澳大利亚和新西兰的分销合作。两国具有相似的生物安全优先事项和监管框架。", ja: "はい。オーストラリアとニュージーランド（オセアニア地域）をカバーするディストリビューションパートナーシップを歓迎します。両国は類似のバイオセキュリティ優先事項と規制枠組みを共有しています。", vi: "Có. Chúng tôi hoan nghênh các quan hệ đối tác phân phối bao gồm cả Úc và New Zealand (khu vực Châu Đại Dương). Hai quốc gia có các ưu tiên kiểm dịch sinh học và khuôn khổ pháp lý tương tự nhau, giúp chiến lược phân phối kết hợp trở nên hiệu quả. Các yêu cầu pháp lý của MPI (Bộ Công nghiệp Sơ cấp New Zealand) tương thích với hồ sơ sản phẩm đạt chứng nhận CE của chúng tôi." } },
    ],
  },

  // 7. United Kingdom
  {
    slug: "united-kingdom",
    countryCode: "GB",
    name: { en: "United Kingdom", zh: "英国", ja: "イギリス", vi: "Vương quốc Anh" },
    heroTitle: { en: "Portable PCR Diagnostics for the UK Veterinary Market", zh: "面向英国兽医市场的便携式PCR诊断", ja: "英国獣医市場向けポータブルPCR診断", vi: "Chẩn đoán PCR cầm tay cho thị trường thú y Vương quốc Anh" },
    heroSubtitle: { en: "UKCA-ready portable molecular diagnostics for the UK's companion animal, livestock, and disease surveillance sectors.", zh: "UKCA就绪的便携式分子诊断，服务英国伴侣动物、畜牧和疾病监测领域。", ja: "英国のコンパニオンアニマル、畜産、疾病監視セクター向けUKCA対応ポータブル分子診断。", vi: "Chẩn đoán phân tử cầm tay sẵn sàng cho UKCA, phục vụ các lĩnh vực thú cưng, chăn nuôi và giám sát dịch bệnh tại Vương quốc Anh." },
    port: "Felixstowe",
    flagEmoji: "GB",
    marketOverview: { en: `The United Kingdom has a highly developed veterinary diagnostics market with a strong tradition of evidence-based veterinary medicine and rigorous regulatory standards. The UK has approximately 5,500 veterinary practices, over 12 million dogs, 12 million cats, and significant livestock operations across England, Scotland, Wales, and Northern Ireland.\n\nPost-Brexit, the UK has established its own regulatory framework separate from the EU, creating the UKCA (UK Conformity Assessed) marking system. While CE marking remains accepted through transitional provisions, the move toward UKCA certification creates opportunities for manufacturers who proactively adapt to UK-specific requirements.\n\nThe UK's Animal and Plant Health Agency (APHA) coordinates national disease surveillance and controls the reporting of notifiable diseases including avian influenza, African Swine Fever, and bovine tuberculosis. The UK invested significantly in diagnostic infrastructure following COVID-19, and this investment extends to veterinary molecular diagnostics.\n\nThe UK's veterinary profession is internationally influential, with the Royal College of Veterinary Surgeons (RCVS) setting standards that are recognized globally. UK-based evidence and endorsements carry significant weight in international markets.`, zh: `英国拥有高度发达的兽医诊断市场。约5,500家兽医诊所、超过1200万只狗和1200万只猫。\n\n脱欧后，英国建立了自己的UKCA标志系统。虽然CE标志通过过渡条款仍被接受，但向UKCA认证的转变为主动适应的制造商创造了机会。\n\nAPHA协调国家疾病监测。英国兽医专业在国际上具有影响力。`, ja: `英国は高度に発達した獣医診断市場を有しています。約5,500の動物病院、1,200万頭以上の犬と猫がいます。\n\nBrexit後、英国はUKCA（英国適合性評価）マーキングシステムを確立しました。CEマーキングは移行措置として引き続き受け入れられています。\n\n英国の動物植物衛生庁（APHA）が国家疾病監視を調整しています。`, vi: `Vương quốc Anh có thị trường chẩn đoán thú y phát triển cao với truyền thống mạnh về y học thú y dựa trên bằng chứng và các tiêu chuẩn pháp lý nghiêm ngặt. Vương quốc Anh có khoảng 5.500 phòng khám thú y, hơn 12 triệu con chó, 12 triệu con mèo và các hoạt động chăn nuôi quy mô đáng kể trên khắp England, Scotland, Wales và Bắc Ireland.\\n\\nSau Brexit, Vương quốc Anh đã thiết lập khuôn khổ pháp lý riêng tách biệt khỏi EU, tạo ra hệ thống đánh dấu UKCA (UK Conformity Assessed). Mặc dù dấu CE vẫn được chấp nhận thông qua các quy định chuyển tiếp, việc chuyển hướng sang chứng nhận UKCA tạo cơ hội cho các nhà sản xuất chủ động thích ứng với các yêu cầu riêng của Vương quốc Anh.\\n\\nCơ quan Sức khỏe Động vật và Thực vật (APHA) của Vương quốc Anh điều phối giám sát dịch bệnh quốc gia và kiểm soát việc báo cáo các bệnh phải khai báo bao gồm cúm gia cầm, dịch tả lợn châu Phi (ASF) và bệnh lao bò. Vương quốc Anh đã đầu tư đáng kể vào cơ sở hạ tầng chẩn đoán sau COVID-19, và khoản đầu tư này mở rộng sang chẩn đoán phân tử thú y.\\n\\nNgành thú y Vương quốc Anh có ảnh hưởng quốc tế, với Hội đồng Hoàng gia các Bác sĩ Phẫu thuật Thú y (RCVS) thiết lập các tiêu chuẩn được công nhận trên toàn cầu. Bằng chứng và sự chứng thực từ Vương quốc Anh có trọng lượng đáng kể trên thị trường quốc tế.` },
    regulatoryPathway: { en: `### Regulatory Framework in the United Kingdom\n\n**MHRA (Medicines and Healthcare products Regulatory Agency):**\nPost-Brexit, the MHRA regulates medical devices in the UK under the Medical Devices Regulations 2002 (as amended). The UKCA marking is being phased in to replace CE marking, with transitional deadlines.\n\n**UKCA Marking:**\nCE marked devices are currently accepted under transitional provisions. Manufacturers should prepare for UKCA certification, which requires a UK Responsible Person and UK-based conformity assessment. Yinrui Bio is preparing UKCA documentation to ensure uninterrupted UK market access.\n\n**APHA (Animal and Plant Health Agency):**\nDiagnostic tests used for notifiable disease reporting must meet APHA-approved standards. Official disease testing for bovine TB, avian influenza, and ASF may require confirmation by APHA-approved laboratories.\n\n**Import Requirements:**\n- UKCA or CE marking (transitional) required\n- UK Responsible Person designation required\n- UK customs duty varies by classification\n- VAT at 20% applies`, zh: `### 英国监管框架\n\n**MHRA：** 脱欧后，MHRA监管英国医疗器械。UKCA标志正在分阶段替代CE标志。\n**APHA：** 用于可报告疾病报告的诊断测试需满足APHA标准。\n**进口：** 需要英国负责人指定。VAT 20%。`, ja: `### 英国における規制枠組み\n\n**MHRA（医薬品・医療製品規制庁）：** Brexit後、MHRAが英国の医療機器を規制します。UKCAマーキングがCEマーキングに代わり段階的に導入されています。\n**APHA：** 届出疾病の報告に使用される診断テストはAPHA基準を満たす必要があります。\n**輸入：** 英国責任者の指定が必要。VAT 20%。`, vi: `### Khuôn khổ pháp lý tại Vương quốc Anh\\n\\n**MHRA (Cơ quan Quản lý Sản phẩm Y tế và Chăm sóc Sức khỏe):**\\nSau Brexit, MHRA quản lý thiết bị y tế tại Vương quốc Anh theo Quy định Thiết bị Y tế 2002 (đã sửa đổi). Dấu UKCA đang được triển khai theo lộ trình để thay thế dấu CE, với các thời hạn chuyển tiếp.\\n\\n**Dấu UKCA:**\\nCác thiết bị có dấu CE hiện được chấp nhận theo quy định chuyển tiếp. Các nhà sản xuất nên chuẩn bị cho chứng nhận UKCA, yêu cầu một Người đại diện có trách nhiệm tại Vương quốc Anh và đánh giá sự phù hợp tại Vương quốc Anh. Yinrui Bio đang chuẩn bị hồ sơ UKCA để đảm bảo tiếp cận thị trường Vương quốc Anh không bị gián đoạn.\\n\\n**APHA (Cơ quan Sức khỏe Động vật và Thực vật):**\\nCác xét nghiệm chẩn đoán dùng để báo cáo bệnh phải khai báo phải đáp ứng tiêu chuẩn được APHA phê duyệt. Việc xét nghiệm chính thức bệnh lao bò, cúm gia cầm và ASF có thể cần xác nhận bởi các phòng xét nghiệm được APHA phê duyệt.\\n\\n**Yêu cầu nhập khẩu:**\\n- Yêu cầu có dấu UKCA hoặc CE (chuyển tiếp)\\n- Yêu cầu chỉ định Người đại diện có trách nhiệm tại Vương quốc Anh\\n- Thuế hải quan Vương quốc Anh thay đổi theo phân loại\\n- Áp dụng VAT 20%` },
    shippingLogistics: { en: `### Shipping from Ningbo to the United Kingdom\n\n**Primary Port:** Felixstowe — UK's largest container port\n\n**Ocean Freight:**\n- Ningbo to Felixstowe: 28-33 days transit time\n- Direct services and transshipment via Mediterranean hubs available\n- FCL and LCL options\n\n**Post-Brexit Customs:**\n- UK customs procedures are separate from EU\n- UK Responsible Person required for medical device imports\n- Customs duty varies; medical devices may qualify for reduced rates\n- VAT at 20%\n\n**Distribution:**\n- Felixstowe provides excellent road and rail connections across England\n- Room-temperature storage eliminates GDP cold chain requirements\n\nYinrui Bio provides complete documentation for UK customs clearance and works with experienced UK customs brokers.`, zh: `### 从宁波发货至英国\n\n**主要港口：** 费利克斯托\n**海运：** 宁波至费利克斯托28-33天\n**脱欧后海关：** 英国海关程序独立于EU。VAT 20%。`, ja: `### 寧波から英国への出荷\n\n**主要港：** フェリクストウ\n**海上輸送：** 寧波からフェリクストウ28〜33日\n**Brexit後の通関：** 英国の通関手続きはEUとは別。VAT 20%。`, vi: `### Vận chuyển từ Ningbo đến Vương quốc Anh\\n\\n**Cảng chính:** Felixstowe — cảng container lớn nhất Vương quốc Anh\\n\\n**Vận tải biển:**\\n- Ningbo đến Felixstowe: thời gian vận chuyển 28-33 ngày\\n- Có các dịch vụ trực tiếp và chuyển tải qua các trung tâm trung chuyển Địa Trung Hải\\n- Tùy chọn FCL và LCL\\n\\n**Hải quan sau Brexit:**\\n- Thủ tục hải quan Vương quốc Anh tách biệt với EU\\n- Yêu cầu Người đại diện có trách nhiệm tại Vương quốc Anh đối với nhập khẩu thiết bị y tế\\n- Thuế hải quan thay đổi; thiết bị y tế có thể đủ điều kiện hưởng mức thuế giảm\\n- VAT 20%\\n\\n**Phân phối:**\\n- Felixstowe cung cấp kết nối đường bộ và đường sắt tuyệt vời trên khắp England\\n- Bảo quản ở nhiệt độ phòng loại bỏ yêu cầu chuỗi lạnh GDP\\n\\nYinrui Bio cung cấp hồ sơ đầy đủ cho thông quan tại Vương quốc Anh và làm việc với các đại lý hải quan giàu kinh nghiệm tại Vương quốc Anh.` },
    keyApplications: { en: `### Key Applications in the United Kingdom\n\n**Companion Animal Diagnostics:**\nThe UK's 24+ million dogs and cats drive strong demand for molecular diagnostics. Canine parvovirus, tick-borne diseases (Babesia canis recently confirmed in the UK), Leishmania (in imported dogs), and feline respiratory infections are key testing needs. The UK's large rescue and rehoming sector performs extensive intake screening.\n\n**Livestock Disease Surveillance:**\nBovine tuberculosis remains the UK's most challenging livestock disease. Avian influenza surveillance is a national priority following multiple outbreaks. ASF preparedness and PRRSV monitoring support the UK's pig industry.\n\n**Post-Brexit Border Controls:**\nNew border controls on animal products entering the UK create demand for rapid diagnostic testing at ports of entry. Meat species identification for food fraud detection is increasingly important.\n\n**Equine Health:**\nThe UK's significant equine industry (approximately 800,000 horses) requires disease testing for strangles, equine influenza, and other respiratory pathogens.`, zh: `### 英国市场主要应用\n\n**伴侣动物诊断：** 英国2400万+猫狗驱动分子诊断需求。\n**畜牧疾病监测：** 牛结核仍是最大挑战。禽流感监测是国家优先事项。\n**脱欧后边境管控：** 新的边境管控创造了入境点快速诊断需求。\n**马匹健康：** 英国约80万匹马需要疾病检测。`, ja: `### 英国市場における主要アプリケーション\n\n**コンパニオンアニマル診断：** 英国の2,400万頭以上の犬猫が分子診断の需要を牽引。\n**家畜疾病監視：** 牛結核は英国最大の家畜疾病課題。鳥インフルエンザ監視は国家的優先事項。\n**Brexit後の国境管理：** 新たな国境管理が入港地での迅速診断需要を創出。`, vi: `### Các ứng dụng chính tại Vương quốc Anh\\n\\n**Chẩn đoán thú cưng:**\\nHơn 24 triệu con chó và mèo tại Vương quốc Anh thúc đẩy nhu cầu mạnh mẽ đối với chẩn đoán phân tử. Parvovirus ở chó, các bệnh do ve truyền (Babesia canis gần đây đã được xác nhận tại Vương quốc Anh), Leishmania (ở chó nhập khẩu) và nhiễm trùng đường hô hấp ở mèo là những nhu cầu xét nghiệm chính. Lĩnh vực cứu hộ và tìm nhà mới cho động vật quy mô lớn của Vương quốc Anh thực hiện sàng lọc đầu vào rộng rãi.\\n\\n**Giám sát bệnh ở vật nuôi:**\\nBệnh lao bò vẫn là bệnh vật nuôi khó kiểm soát nhất tại Vương quốc Anh. Giám sát cúm gia cầm là ưu tiên quốc gia sau nhiều đợt bùng phát. Việc chuẩn bị cho ASF và giám sát PRRSV hỗ trợ ngành chăn nuôi lợn của Vương quốc Anh.\\n\\n**Kiểm soát biên giới sau Brexit:**\\nCác biện pháp kiểm soát biên giới mới đối với sản phẩm động vật nhập vào Vương quốc Anh tạo nhu cầu xét nghiệm chẩn đoán nhanh tại các cửa khẩu. Nhận dạng loài thịt để phát hiện gian lận thực phẩm ngày càng quan trọng.\\n\\n**Sức khỏe ngựa:**\\nNgành công nghiệp ngựa đáng kể của Vương quốc Anh (khoảng 800.000 con ngựa) yêu cầu xét nghiệm bệnh cho strangles, cúm ngựa và các mầm bệnh hô hấp khác.` },
    distributionModel: { en: `### Distribution & Partnership in the United Kingdom\n\nYinrui Bio seeks a UK-based distribution partner with veterinary diagnostics expertise and MHRA/UKCA regulatory knowledge.\n\n**Ideal Partners:**\n- Veterinary diagnostic equipment distributors with UK-wide coverage\n- Companies with MHRA Responsible Person capabilities\n- Agricultural diagnostics companies serving the livestock sector\n\n**Support:** UKCA documentation preparation, UK-market marketing materials, technical training, demo programs, and competitive pricing.\n\nContact us to discuss distribution opportunities in the United Kingdom and Ireland.`, zh: `### 英国分销与合作\n\n胤瑞生物寻求具有兽医诊断专业知识和MHRA/UKCA监管知识的英国分销合作伙伴。提供UKCA文件准备、营销材料和技术培训。`, ja: `### 英国における販売・パートナーシップ\n\n胤瑞バイオは獣医診断の専門知識とMHRA/UKCA規制の知識を持つ英国のディストリビューションパートナーを募集しています。UKCA文書準備、マーケティング資料、技術トレーニングを提供します。`, vi: `### Phân phối & Hợp tác tại Vương quốc Anh\\n\\nYinrui Bio tìm kiếm đối tác phân phối tại Vương quốc Anh có chuyên môn về chẩn đoán thú y và hiểu biết về quy định MHRA/UKCA.\\n\\n**Đối tác lý tưởng:**\\n- Các nhà phân phối thiết bị chẩn đoán thú y có phạm vi phủ khắp Vương quốc Anh\\n- Các công ty có năng lực Người đại diện có trách nhiệm theo MHRA\\n- Các công ty chẩn đoán nông nghiệp phục vụ lĩnh vực chăn nuôi\\n\\n**Hỗ trợ:** Chuẩn bị hồ sơ UKCA, tài liệu tiếp thị cho thị trường Vương quốc Anh, đào tạo kỹ thuật, chương trình demo và giá cạnh tranh.\\n\\nHãy liên hệ với chúng tôi để thảo luận về cơ hội phân phối tại Vương quốc Anh và Ireland.` },
    faqs: [
      { q: { en: "Does the CarryOn have UKCA certification?", zh: "CarryOn是否有UKCA认证？", ja: "CarryOnはUKCA認証を取得していますか？", vi: "CarryOn có chứng nhận UKCA không?" }, a: { en: "The CarryOn currently holds CE certification, which is accepted in the UK under transitional provisions. Yinrui Bio is actively preparing UKCA certification documentation to ensure uninterrupted UK market access as the transition to UKCA marking progresses. Our ISO 13485 quality system supports both CE and UKCA compliance.", zh: "CarryOn目前持有CE认证，在过渡条款下被英国接受。胤瑞生物正在积极准备UKCA认证文件。", ja: "CarryOnは現在CE認証を保持しており、移行措置の下で英国で受け入れられています。胤瑞バイオはUKCA認証文書を積極的に準備しています。", vi: "CarryOn hiện có chứng nhận CE, được chấp nhận tại Vương quốc Anh theo các quy định chuyển tiếp. Yinrui Bio đang tích cực chuẩn bị hồ sơ chứng nhận UKCA để đảm bảo tiếp cận thị trường Vương quốc Anh liên tục khi quá trình chuyển đổi sang dấu UKCA diễn ra. Hệ thống chất lượng ISO 13485 của chúng tôi hỗ trợ tuân thủ cả CE và UKCA." } },
      { q: { en: "What is the shipping time from Ningbo to the UK?", zh: "从宁波到英国的运输时间是多少？", ja: "寧波から英国への配送時間は？", vi: "Thời gian vận chuyển từ Ningbo đến Vương quốc Anh là bao lâu?" }, a: { en: "Ocean freight from Ningbo to Felixstowe takes 28-33 days. Air freight takes 3-5 days. Express courier services (DHL/FedEx) deliver sample units within 3-5 business days.", zh: "从宁波到费利克斯托的海运需28-33天。空运3-5天。", ja: "寧波からフェリクストウへの海上輸送は28〜33日です。航空輸送は3〜5日です。", vi: "Vận tải đường biển từ Ningbo đến Felixstowe mất 28-33 ngày. Vận tải hàng không mất 3-5 ngày. Dịch vụ chuyển phát nhanh (DHL/FedEx) giao thiết bị mẫu trong vòng 3-5 ngày làm việc." } },
      { q: { en: "How is the CarryOn relevant for bovine TB testing in the UK?", zh: "CarryOn与英国牛结核检测有什么关联？", ja: "CarryOnは英国の牛結核検査にどう関連しますか？", vi: "CarryOn có liên quan như thế nào đến xét nghiệm bệnh lao bò (bovine TB) tại Vương quốc Anh?" }, a: { en: "While the CarryOn platform's current test chip menu does not include a specific bovine TB panel, our R&D pipeline includes livestock disease panels relevant to the UK market. For existing livestock panels (ASF, PRRSV), the CarryOn provides immediate value. Bovine TB detection capability is under active development.", zh: "虽然CarryOn目前的芯片菜单不包括专门的牛结核面板，但我们的研发管线包括与英国市场相关的畜牧疾病面板。牛结核检测能力正在积极开发中。", ja: "CarryOnの現在のテストチップメニューには牛結核専用パネルは含まれていませんが、R&Dパイプラインには英国市場に関連する畜産疾病パネルが含まれています。牛結核検出能力は積極的に開発中です。", vi: "Mặc dù danh mục chip xét nghiệm hiện tại của nền tảng CarryOn chưa bao gồm bộ xét nghiệm bệnh lao bò chuyên biệt, danh mục R&D của chúng tôi có các bộ xét nghiệm bệnh trên vật nuôi phù hợp với thị trường Vương quốc Anh. Với các bộ xét nghiệm vật nuôi hiện có (ASF, PRRSV), CarryOn mang lại giá trị tức thì. Năng lực phát hiện bệnh lao bò đang được tích cực phát triển." } },
      { q: { en: "Can the CarryOn be used for tick-borne disease testing in UK dogs?", zh: "CarryOn能用于英国犬的蜱传疾病检测吗？", ja: "CarryOnは英国の犬のダニ媒介疾患検査に使用できますか？", vi: "Có thể sử dụng CarryOn để xét nghiệm bệnh do ve truyền ở chó tại Vương quốc Anh không?" }, a: { en: "Yes. The Canine Babesia-Ehrlichia-Leptospira Triple Test Chip is highly relevant for the UK, where Babesia canis was recently confirmed for the first time in non-traveled UK dogs. This panel also detects Ehrlichia and Leptospira, both of which are diagnostic priorities in the UK.", zh: "是的。犬巴贝斯虫-艾利希体-钩端螺旋体三联检芯片与英国高度相关，英国最近首次在未出境犬只中确认了犬巴贝斯虫。", ja: "はい。犬バベシア・エールリヒア・レプトスピラ3連検査チップは英国に非常に関連があります。バベシア・カニスは最近初めて渡航歴のない英国の犬で確認されました。", vi: "Có. Chip xét nghiệm ba tác nhân Babesia-Ehrlichia-Leptospira ở chó rất phù hợp với Vương quốc Anh, nơi Babesia canis gần đây lần đầu tiên được xác nhận ở những con chó tại Vương quốc Anh chưa từng đi du lịch. Bộ xét nghiệm này cũng phát hiện Ehrlichia và Leptospira, đều là những ưu tiên chẩn đoán tại Vương quốc Anh." } },
      { q: { en: "Does Yinrui Bio have a UK Responsible Person?", zh: "胤瑞生物在英国有负责人吗？", ja: "胤瑞バイオには英国責任者がいますか？", vi: "Yinrui Bio có Đại diện có trách nhiệm tại Vương quốc Anh (UK Responsible Person) không?" }, a: { en: "Yinrui Bio is in the process of establishing UK Responsible Person arrangements to comply with post-Brexit medical device regulations. We welcome partnerships with UK-based entities that can serve in this capacity while also acting as distribution partners.", zh: "胤瑞生物正在建立英国负责人安排以符合脱欧后的医疗器械法规。我们欢迎与可担任此角色的英国实体合作。", ja: "胤瑞バイオはBrexit後の医療機器規制に準拠するため、英国責任者の手配を進めています。ディストリビューションパートナーとしても機能できる英国の事業体とのパートナーシップを歓迎します。", vi: "Yinrui Bio đang trong quá trình thiết lập các thỏa thuận Đại diện có trách nhiệm tại Vương quốc Anh để tuân thủ quy định thiết bị y tế hậu Brexit. Chúng tôi hoan nghênh hợp tác với các đơn vị có trụ sở tại Vương quốc Anh có thể đảm nhận vai trò này đồng thời là đối tác phân phối." } },
      { q: { en: "What support does Yinrui Bio offer UK distributors?", zh: "胤瑞生物为英国经销商提供什么支持？", ja: "胤瑞バイオは英国のディストリビューターにどのようなサポートを提供しますか？", vi: "Yinrui Bio hỗ trợ gì cho các nhà phân phối tại Vương quốc Anh?" }, a: { en: "We offer comprehensive support including: UKCA certification documentation, competitive distributor pricing, technical training programs, demo unit loan programs, marketing materials, dedicated account management, and participation support for UK veterinary events such as BSAVA Congress and the London Vet Show.", zh: "我们提供全面支持，包括：UKCA认证文件、有竞争力的经销商定价、技术培训、演示设备和英国兽医活动参展支持。", ja: "UKCA認証文書、競争力のあるディストリビューター価格、技術トレーニング、デモユニット、マーケティング資料、BSAVA CongressやLondon Vet Showなどの英国獣医イベントへの参加サポートを提供します。", vi: "Chúng tôi cung cấp hỗ trợ toàn diện bao gồm: hồ sơ chứng nhận UKCA, chính sách giá ưu đãi cho nhà phân phối, chương trình đào tạo kỹ thuật, chương trình cho mượn thiết bị demo, tài liệu tiếp thị, quản lý tài khoản chuyên trách và hỗ trợ tham gia các sự kiện thú y tại Vương quốc Anh như BSAVA Congress và London Vet Show." } },
    ],
  },

  // 8. Southeast Asia (Thailand)
  {
    slug: "thailand",
    countryCode: "TH",
    name: { en: "Thailand & Southeast Asia", zh: "泰国及东南亚", ja: "タイ・東南アジア", vi: "Thái Lan & Đông Nam Á" },
    heroTitle: { en: "Portable PCR Diagnostics for Thailand & Southeast Asia", zh: "面向泰国及东南亚的便携式PCR诊断", ja: "タイ・東南アジア向けポータブルPCR診断", vi: "Chẩn đoán PCR cầm tay cho Thái Lan & Đông Nam Á" },
    heroSubtitle: { en: "Affordable molecular diagnostics for Southeast Asia's fast-growing veterinary, livestock, and aquaculture industries.", zh: "为东南亚快速增长的兽医、畜牧和水产养殖业提供经济实惠的分子诊断。", ja: "東南アジアの急成長する獣医、畜産、水産養殖業向けの手頃な分子診断。", vi: "Chẩn đoán phân tử với chi phí hợp lý cho ngành thú y, chăn nuôi và nuôi trồng thủy sản đang phát triển nhanh tại Đông Nam Á." },
    port: "Laem Chabang",
    flagEmoji: "TH",
    marketOverview: { en: `Southeast Asia represents one of the world's fastest-growing veterinary diagnostics markets, with Thailand serving as the regional hub. The ASEAN veterinary diagnostics market is estimated at $800 million and growing at 15-20% annually, driven by expanding livestock production, rising pet ownership, and increasing food safety enforcement.\n\nThailand specifically is a major center for livestock production (particularly poultry and swine), aquaculture (the world's fourth-largest shrimp producer), and companion animal care. The country has over 4,000 veterinary clinics, a growing pet population, and a livestock sector that exports globally.\n\nSoutheast Asia's unique disease challenges — including African Swine Fever (which has devastated swine herds across the region), highly pathogenic avian influenza, and tropical tick-borne diseases — create urgent demand for rapid, field-deployable molecular diagnostics.\n\nThe CarryOn platform is exceptionally well-suited for Southeast Asia: affordable price point for emerging market clinics, battery-powered operation for areas with unreliable electricity, room-temperature reagent storage essential in tropical climates without cold chain, and zero-training operation for veterinary staff with varying levels of laboratory experience.\n\nFrom Thailand, Yinrui Bio aims to serve the broader ASEAN market including Vietnam, Indonesia, Philippines, Malaysia, Myanmar, and Cambodia.`, zh: `东南亚是全球增长最快的兽医诊断市场之一，泰国是区域中心。ASEAN兽医诊断市场估值8亿美元，年增长15-20%。\n\n泰国是畜牧生产（家禽和生猪）、水产养殖（世界第四大虾生产国）和伴侣动物护理的主要中心。拥有4,000+家兽医诊所。\n\n东南亚独特的疾病挑战——非洲猪瘟、高致病性禽流感和热带蜱传疾病——创造了对现场分子诊断的迫切需求。\n\nCarryOn平台非常适合东南亚市场。从泰国，胤瑞生物旨在服务更广泛的ASEAN市场。`, ja: `東南アジアは世界で最も急成長する獣医診断市場の一つで、タイが地域のハブです。ASEAN獣医診断市場は8億ドルと推定され、年率15〜20%で成長しています。\n\nタイは畜産（家禽・豚）、水産養殖（世界第4位のエビ生産国）、コンパニオンアニマルケアの主要センターです。4,000以上の動物病院を有しています。\n\nCarryOnプラットフォームは東南アジアに非常に適しています。タイから、胤瑞バイオはベトナム、インドネシア、フィリピン、マレーシアなどのASEAN市場にサービスを提供することを目指しています。`, vi: `Đông Nam Á là một trong những thị trường chẩn đoán thú y phát triển nhanh nhất thế giới, với Thái Lan đóng vai trò trung tâm khu vực. Thị trường chẩn đoán thú y ASEAN ước tính đạt 800 triệu USD và tăng trưởng 15-20% mỗi năm, nhờ sản xuất chăn nuôi mở rộng, tỷ lệ nuôi thú cưng gia tăng và việc thực thi an toàn thực phẩm ngày càng chặt chẽ.\\n\\nThái Lan đặc biệt là trung tâm lớn về chăn nuôi (đặc biệt là gia cầm và lợn), nuôi trồng thủy sản (nhà sản xuất tôm lớn thứ tư thế giới) và chăm sóc thú cưng. Cả nước có hơn 4.000 phòng khám thú y, dân số thú cưng ngày càng tăng và ngành chăn nuôi xuất khẩu ra toàn cầu.\\n\\nNhững thách thức bệnh tật đặc thù của Đông Nam Á — bao gồm dịch tả lợn châu Phi (đã tàn phá đàn lợn khắp khu vực), cúm gia cầm độc lực cao và các bệnh do ve truyền ở vùng nhiệt đới — tạo ra nhu cầu cấp thiết về chẩn đoán phân tử nhanh, có thể triển khai tại hiện trường.\\n\\nNền tảng CarryOn đặc biệt phù hợp với Đông Nam Á: mức giá hợp lý cho các phòng khám tại thị trường mới nổi, vận hành bằng pin cho những khu vực có nguồn điện không ổn định, bảo quản thuốc thử ở nhiệt độ phòng thiết yếu ở khí hậu nhiệt đới không cần chuỗi lạnh, và vận hành không cần đào tạo đối với nhân viên thú y có mức kinh nghiệm phòng xét nghiệm khác nhau.\\n\\nTừ Thái Lan, Yinrui Bio hướng tới phục vụ thị trường ASEAN rộng lớn hơn bao gồm Việt Nam, Indonesia, Philippines, Malaysia, Myanmar và Campuchia.` },
    regulatoryPathway: { en: `### Regulatory Framework in Thailand & ASEAN\n\n**Thai FDA (Food and Drug Administration):**\nMedical devices in Thailand are regulated by the Thai FDA under the Medical Device Act B.E. 2551. IVD devices are classified based on risk. CE-marked and ISO 13485-certified devices benefit from expedited review processes.\n\n**ASEAN Medical Device Directive (AMDD):**\nASEAN has adopted a harmonized framework for medical device regulation (ASEAN Medical Device Directive). Countries implementing AMDD include Thailand, Singapore, Malaysia, and Indonesia. Registration in one AMDD-compliant country can facilitate registration across other ASEAN members.\n\n**DLD (Department of Livestock Development):**\nThailand's DLD oversees animal disease control and may require specific approvals for veterinary diagnostic products used in official surveillance programs.\n\n**Import Requirements:**\n- Thai FDA registration/notification required\n- CE marking recognized and facilitates approval\n- Import duty 0-10% depending on classification\n- VAT at 7%\n\nYinrui Bio works with Thai regulatory agents to manage registration and supports ASEAN-wide market access strategies.`, zh: `### 泰国及ASEAN监管框架\n\n**泰国FDA：** 医疗器械受泰国FDA监管。CE标记和ISO 13485认证设备享受加速审查。\n**ASEAN AMDD：** ASEAN采用了统一的医疗器械监管框架。一个国家的注册可促进其他成员国注册。\n**DLD：** 泰国畜牧发展部监管动物疾病控制。\n**进口：** 关税0-10%，VAT 7%。`, ja: `### タイおよびASEANにおける規制枠組み\n\n**タイFDA：** 医療機器はタイFDAにより規制されます。CEマーク・ISO 13485認証機器は迅速審査の恩恵があります。\n**ASEAN AMDD：** ASEANは統一された医療機器規制枠組みを採用しています。\n**DLD：** タイ畜産開発局が動物疾病管理を監督します。\n**輸入：** 関税0〜10%、VAT 7%。`, vi: `### Khung pháp lý tại Thái Lan & ASEAN\\n\\n**Thai FDA (Cục Quản lý Thực phẩm và Dược phẩm):**\\nThiết bị y tế tại Thái Lan được Thai FDA quản lý theo Đạo luật Thiết bị Y tế B.E. 2551. Thiết bị IVD được phân loại theo mức độ rủi ro. Các thiết bị có dấu CE và chứng nhận ISO 13485 được hưởng quy trình xem xét nhanh.\\n\\n**Chỉ thị Thiết bị Y tế ASEAN (AMDD):**\\nASEAN đã áp dụng khung hài hòa về quản lý thiết bị y tế (Chỉ thị Thiết bị Y tế ASEAN). Các quốc gia triển khai AMDD bao gồm Thái Lan, Singapore, Malaysia và Indonesia. Đăng ký tại một quốc gia tuân thủ AMDD có thể tạo thuận lợi cho việc đăng ký tại các thành viên ASEAN khác.\\n\\n**DLD (Cục Phát triển Chăn nuôi):**\\nDLD của Thái Lan giám sát kiểm soát bệnh động vật và có thể yêu cầu phê duyệt cụ thể đối với sản phẩm chẩn đoán thú y dùng trong các chương trình giám sát chính thức.\\n\\n**Yêu cầu nhập khẩu:**\\n- Cần đăng ký/thông báo với Thai FDA\\n- Dấu CE được công nhận và tạo thuận lợi cho phê duyệt\\n- Thuế nhập khẩu 0-10% tùy theo phân loại\\n- VAT 7%\\n\\nYinrui Bio làm việc với các đại lý đăng ký tại Thái Lan để quản lý đăng ký và hỗ trợ chiến lược tiếp cận thị trường toàn ASEAN.` },
    shippingLogistics: { en: `### Shipping from Ningbo to Thailand\n\n**Primary Port:** Laem Chabang (near Bangkok)\n\n**Ocean Freight:**\n- Ningbo to Laem Chabang: 5-8 days transit time\n- Frequent direct services\n- Very competitive freight rates on this route\n\n**Air Freight:**\n- Ningbo to Bangkok (BKK/Suvarnabhumi): 1-2 days\n- Express courier widely available\n\n**ASEAN Distribution:**\n- Thailand/Bangkok serves as the ASEAN distribution hub\n- Short shipping times to Vietnam (2-3 days), Malaysia (3-4 days), Indonesia (4-5 days), and Philippines (3-4 days)\n- Room-temperature storage is critical in tropical climates — eliminates costly cold chain requirements\n\nThe proximity of Ningbo to Southeast Asia provides a significant logistics advantage, with transit times of under one week to most ASEAN destinations.`, zh: `### 从宁波发货至泰国\n\n**主要港口：** 林查班（曼谷附近）\n**海运：** 宁波至林查班仅5-8天\n**空运：** 1-2天\n**ASEAN分销：** 泰国/曼谷作为ASEAN分销中心。室温存储在热带气候中至关重要。\n\n宁波到东南亚的邻近性提供了显著的物流优势。`, ja: `### 寧波からタイへの出荷\n\n**主要港：** レムチャバン（バンコク近郊）\n**海上輸送：** 寧波からレムチャバンわずか5〜8日\n**航空輸送：** 1〜2日\n**ASEAN配送：** タイ/バンコクがASEAN配送ハブ。室温保存は熱帯気候で重要です。`, vi: `### Vận chuyển từ Ningbo đến Thái Lan\\n\\n**Cảng chính:** Laem Chabang (gần Bangkok)\\n\\n**Vận tải đường biển:**\\n- Ningbo đến Laem Chabang: thời gian vận chuyển 5-8 ngày\\n- Dịch vụ trực tiếp thường xuyên\\n- Cước vận tải rất cạnh tranh trên tuyến này\\n\\n**Vận tải hàng không:**\\n- Ningbo đến Bangkok (BKK/Suvarnabhumi): 1-2 ngày\\n- Dịch vụ chuyển phát nhanh phổ biến rộng rãi\\n\\n**Phân phối ASEAN:**\\n- Thái Lan/Bangkok đóng vai trò trung tâm phân phối ASEAN\\n- Thời gian vận chuyển ngắn đến Việt Nam (2-3 ngày), Malaysia (3-4 ngày), Indonesia (4-5 ngày) và Philippines (3-4 ngày)\\n- Bảo quản ở nhiệt độ phòng là yếu tố then chốt ở khí hậu nhiệt đới — loại bỏ yêu cầu chuỗi lạnh tốn kém\\n\\nVị trí gần Đông Nam Á của Ningbo mang lại lợi thế logistics đáng kể, với thời gian vận chuyển dưới một tuần đến hầu hết các điểm đến ASEAN.` },
    keyApplications: { en: `### Key Applications in Thailand & Southeast Asia\n\n**Aquaculture Disease Monitoring:**\nThailand is a global leader in shrimp and fish farming. White Spot Syndrome Virus (WSSV), Early Mortality Syndrome (EMS), and Tilapia Lake Virus (TiLV) cause billions of dollars in losses across the region annually. Portable PCR enables pond-side testing that can detect outbreaks before they devastate entire farms.\n\n**African Swine Fever Response:**\nASF has caused catastrophic losses across Southeast Asia since 2018. Thailand, Vietnam, Philippines, and Indonesia have all been affected. The CarryOn ASF test chip enables rapid on-farm screening at pig operations, supporting containment efforts and restocking decisions.\n\n**Poultry Disease Surveillance:**\nSoutheast Asia is a global hotspot for avian influenza. Thailand's large poultry export industry requires continuous surveillance. Farm-level molecular testing capabilities help producers maintain disease-free status critical for export access.\n\n**Companion Animal Diagnostics:**\nSoutheast Asia's pet population is growing rapidly. Canine parvovirus, ehrlichiosis (highly endemic in tropical climates), and feline infectious diseases are common diagnostic needs. The CarryOn's affordable price point makes PCR diagnostics accessible to clinics across the economic spectrum.\n\n**Meat Species Identification:**\nHalal food compliance in Muslim-majority countries (Malaysia, Indonesia, Brunei) and growing food safety enforcement create demand for portable meat authentication testing. Our meat species quad chips are directly relevant for this market.`, zh: `### 泰国及东南亚主要应用\n\n**水产养殖疾病监测：** 泰国是虾和鱼养殖的全球领导者。白斑综合症病毒、早期死亡综合症等每年造成数十亿美元损失。便携式PCR能实现池塘边检测。\n\n**非洲猪瘟应对：** 自2018年以来ASF在东南亚造成灾难性损失。\n\n**家禽疾病监测：** 东南亚是禽流感全球热点地区。\n\n**伴侣动物诊断：** 东南亚宠物数量快速增长，CarryOn的经济价格使PCR诊断可及。\n\n**肉类物种鉴定：** 穆斯林国家的清真食品合规需求。`, ja: `### タイ・東南アジアにおける主要アプリケーション\n\n**水産養殖疾病モニタリング：** タイはエビ・魚養殖の世界的リーダーです。ポータブルPCRで池側検査が可能です。\n\n**アフリカ豚熱対応：** 2018年以降、ASFは東南アジア全域で壊滅的な被害をもたらしました。\n\n**家禽疾病監視：** 東南アジアは鳥インフルエンザのグローバルホットスポットです。\n\n**コンパニオンアニマル診断：** 東南アジアのペット数は急速に増加しています。\n\n**肉種鑑定：** ムスリム多数派国でのハラール食品コンプライアンス需要。`, vi: `### Ứng dụng chính tại Thái Lan & Đông Nam Á\\n\\n**Giám sát bệnh thủy sản:**\\nThái Lan là quốc gia dẫn đầu toàn cầu về nuôi tôm và cá. Virus gây bệnh đốm trắng (WSSV), Hội chứng chết sớm (EMS) và Virus hồ cá rô phi (TiLV) gây thiệt hại hàng tỷ USD trên khắp khu vực mỗi năm. PCR cầm tay cho phép xét nghiệm tại ao, có thể phát hiện ổ dịch trước khi chúng tàn phá toàn bộ trang trại.\\n\\n**Ứng phó dịch tả lợn châu Phi:**\\nASF đã gây thiệt hại thảm khốc trên khắp Đông Nam Á kể từ năm 2018. Thái Lan, Việt Nam, Philippines và Indonesia đều đã bị ảnh hưởng. Chip xét nghiệm ASF của CarryOn cho phép sàng lọc nhanh tại trang trại ở các cơ sở chăn nuôi lợn, hỗ trợ nỗ lực kiểm soát và quyết định tái đàn.\\n\\n**Giám sát bệnh gia cầm:**\\nĐông Nam Á là điểm nóng toàn cầu về cúm gia cầm. Ngành xuất khẩu gia cầm lớn của Thái Lan đòi hỏi giám sát liên tục. Năng lực xét nghiệm phân tử tại trang trại giúp người sản xuất duy trì trạng thái không bệnh — yếu tố then chốt để tiếp cận thị trường xuất khẩu.\\n\\n**Chẩn đoán thú cưng:**\\nDân số thú cưng Đông Nam Á đang tăng nhanh. Parvovirus ở chó, ehrlichiosis (rất lưu hành ở khí hậu nhiệt đới) và các bệnh truyền nhiễm ở mèo là những nhu cầu chẩn đoán phổ biến. Mức giá hợp lý của CarryOn giúp chẩn đoán PCR trở nên dễ tiếp cận với các phòng khám ở mọi phân khúc kinh tế.\\n\\n**Nhận diện loài thịt:**\\nViệc tuân thủ thực phẩm halal ở các quốc gia đa số theo Hồi giáo (Malaysia, Indonesia, Brunei) và việc thực thi an toàn thực phẩm ngày càng tăng tạo ra nhu cầu xét nghiệm xác thực thịt bằng thiết bị cầm tay. Các chip xét nghiệm bốn loài thịt của chúng tôi có liên quan trực tiếp đến thị trường này.` },
    distributionModel: { en: `### Distribution & Partnership in Thailand & ASEAN\n\nYinrui Bio seeks regional distribution partners for Thailand and the broader ASEAN market.\n\n**Ideal Partners:**\n- Veterinary or aquaculture diagnostics distributors with regional coverage\n- Agricultural input companies serving livestock and aquaculture producers\n- Companies with Thai FDA and ASEAN AMDD registration experience\n\n**Regional Strategy:**\nThailand-based partners can leverage ASEAN AMDD harmonization to serve multiple countries from a single registration hub. Key secondary markets include Vietnam, Indonesia, Philippines, and Malaysia.\n\n**Support:** Thai-language materials, regulatory guidance, technical training, demo programs, and pricing optimized for Southeast Asian markets.\n\nContact us to explore distribution opportunities across ASEAN.`, zh: `### 泰国及ASEAN分销与合作\n\n胤瑞生物寻求泰国和ASEAN市场的区域分销合作伙伴。泰国合作伙伴可利用ASEAN AMDD统一框架从单一注册中心服务多个国家。\n\n提供泰语材料、监管指导和针对东南亚市场优化的定价。`, ja: `### タイおよびASEANにおける販売・パートナーシップ\n\n胤瑞バイオはタイおよびASEAN市場のリージョナルディストリビューションパートナーを募集しています。ASEAN AMDD統一化を活用して複数国にサービスを提供できます。\n\nタイ語資料、規制ガイダンス、東南アジア市場向けに最適化された価格設定を提供します。`, vi: `### Phân phối & Hợp tác tại Thái Lan & ASEAN\\n\\nYinrui Bio tìm kiếm đối tác phân phối khu vực cho Thái Lan và thị trường ASEAN rộng lớn hơn.\\n\\n**Đối tác lý tưởng:**\\n- Nhà phân phối chẩn đoán thú y hoặc thủy sản có phạm vi khu vực\\n- Công ty cung ứng đầu vào nông nghiệp phục vụ nhà sản xuất chăn nuôi và thủy sản\\n- Công ty có kinh nghiệm đăng ký với Thai FDA và AMDD ASEAN\\n\\n**Chiến lược khu vực:**\\nCác đối tác tại Thái Lan có thể tận dụng việc hài hòa AMDD ASEAN để phục vụ nhiều quốc gia từ một trung tâm đăng ký duy nhất. Các thị trường thứ cấp chính bao gồm Việt Nam, Indonesia, Philippines và Malaysia.\\n\\n**Hỗ trợ:** Tài liệu tiếng Thái, hướng dẫn pháp lý, đào tạo kỹ thuật, chương trình demo và chính sách giá được tối ưu hóa cho thị trường Đông Nam Á.\\n\\nLiên hệ với chúng tôi để khám phá cơ hội phân phối trên khắp ASEAN.` },
    faqs: [
      { q: { en: "Is the CarryOn registered with Thai FDA?", zh: "CarryOn是否在泰国FDA注册？", ja: "CarryOnはタイFDAに登録されていますか？", vi: "CarryOn đã được đăng ký với FDA Thái Lan chưa?" }, a: { en: "Yinrui Bio is pursuing Thai FDA registration for the CarryOn platform. Our CE certification and ISO 13485 quality system are recognized by Thai FDA, facilitating the registration process. We work with experienced Thai regulatory agents to manage the registration timeline.", zh: "胤瑞生物正在推进CarryOn平台的泰国FDA注册。CE认证和ISO 13485获得泰国FDA认可。", ja: "胤瑞バイオはCarryOnプラットフォームのタイFDA登録を推進しています。CE認証とISO 13485はタイFDAに認められています。", vi: "Yinrui Bio đang tiến hành đăng ký với FDA Thái Lan cho nền tảng CarryOn. Chứng nhận CE và hệ thống chất lượng ISO 13485 của chúng tôi được FDA Thái Lan công nhận, tạo thuận lợi cho quá trình đăng ký. Chúng tôi làm việc với các đại lý pháp lý Thái Lan có kinh nghiệm để quản lý tiến độ đăng ký." } },
      { q: { en: "Can the CarryOn test for aquaculture diseases?", zh: "CarryOn能检测水产养殖疾病吗？", ja: "CarryOnは水産養殖疾病を検査できますか？", vi: "CarryOn có thể xét nghiệm bệnh thủy sản không?" }, a: { en: "Our R&D pipeline includes aquaculture-specific test panels for White Spot Syndrome Virus (WSSV), Early Mortality Syndrome (EMS), and other critical aquaculture pathogens. These panels are being developed with input from Southeast Asian aquaculture partners. The CarryOn platform's microfluidic chip technology is adaptable to aquaculture sample types.", zh: "我们的研发管线包括水产养殖专用检测面板，包括白斑综合症病毒(WSSV)、早期死亡综合症(EMS)等。这些面板正在与东南亚水产合作伙伴合作开发。", ja: "R&Dパイプラインには白斑症候群ウイルス(WSSV)、早期死亡症候群(EMS)などの水産養殖専用テストパネルが含まれています。東南アジアの水産養殖パートナーの意見を取り入れて開発中です。", vi: "Danh mục R&D của chúng tôi bao gồm các bộ xét nghiệm dành riêng cho thủy sản đối với virus hội chứng đốm trắng (WSSV), hội chứng tử vong sớm (EMS) và các mầm bệnh thủy sản quan trọng khác. Các bộ xét nghiệm này đang được phát triển với ý kiến đóng góp từ các đối tác nuôi trồng thủy sản Đông Nam Á. Công nghệ chip vi lưu của nền tảng CarryOn có thể thích ứng với các loại mẫu thủy sản." } },
      { q: { en: "How short is the shipping time from China to Thailand?", zh: "从中国到泰国的运输时间有多短？", ja: "中国からタイへの配送時間はどのくらいですか？", vi: "Thời gian vận chuyển từ Trung Quốc đến Thái Lan ngắn đến mức nào?" }, a: { en: "Ocean freight from Ningbo to Laem Chabang (Thailand) takes just 5-8 days, making it one of the fastest international shipping routes from our factory. Air freight takes 1-2 days. This proximity enables rapid order fulfillment and minimal inventory holding requirements for Thai and ASEAN distributors.", zh: "从宁波到林查班（泰国）的海运仅需5-8天，是我们工厂最快的国际航线之一。空运1-2天。", ja: "寧波からレムチャバン（タイ）への海上輸送はわずか5〜8日で、工場からの最速の国際輸送ルートの一つです。航空輸送は1〜2日です。", vi: "Vận tải đường biển từ Ningbo đến Laem Chabang (Thái Lan) chỉ mất 5-8 ngày, khiến tuyến này trở thành một trong những tuyến vận chuyển quốc tế nhanh nhất từ nhà máy của chúng tôi. Vận tải hàng không mất 1-2 ngày. Khoảng cách gần này cho phép đáp ứng đơn hàng nhanh chóng và giảm thiểu yêu cầu tồn kho đối với các nhà phân phối Thái Lan và ASEAN." } },
      { q: { en: "Can the CarryOn handle tropical heat and humidity?", zh: "CarryOn能应对热带高温和湿度吗？", ja: "CarryOnは熱帯の高温多湿に対応できますか？", vi: "CarryOn có thể chịu được nhiệt độ và độ ẩm nhiệt đới không?" }, a: { en: "Yes. The CarryOn is designed for field deployment in diverse environments, including tropical conditions. The device operates at ambient temperatures up to 35 degrees C. Test chips are stable at room temperature (15-30 degrees C) for 12 months. The closed-system design protects internal reagents from environmental humidity. Avoid direct sunlight exposure and store chips in climate-controlled spaces when possible.", zh: "是的。CarryOn专为多样环境设计，包括热带条件。设备在最高35°C环境温度下工作。芯片在室温下稳定12个月。封闭系统设计保护试剂免受环境湿度影响。", ja: "はい。CarryOnは熱帯条件を含む多様な環境でのフィールド展開用に設計されています。デバイスは最高35°Cの環境温度で動作します。チップは室温で12ヶ月安定しています。", vi: "Có. CarryOn được thiết kế để triển khai ngoài hiện trường trong nhiều môi trường khác nhau, bao gồm điều kiện nhiệt đới. Thiết bị hoạt động ở nhiệt độ môi trường lên đến 35 °C. Chip xét nghiệm ổn định ở nhiệt độ phòng (15-30 °C) trong 12 tháng. Thiết kế hệ kín bảo vệ thuốc thử bên trong khỏi độ ẩm môi trường. Tránh tiếp xúc trực tiếp với ánh nắng mặt trời và bảo quản chip trong không gian có kiểm soát nhiệt độ khi có thể." } },
      { q: { en: "Does Yinrui Bio offer ASEAN-wide distribution agreements?", zh: "胤瑞生物是否提供ASEAN范围的分销协议？", ja: "胤瑞バイオはASEAN全域の販売契約を提供していますか？", vi: "Yinrui Bio có cung cấp thỏa thuận phân phối trên toàn ASEAN không?" }, a: { en: "Yes. We offer regional distribution agreements covering Thailand and the broader ASEAN market. ASEAN AMDD harmonization allows registration in one member country to facilitate market access across the region. We support partners with multi-country regulatory strategies and pricing optimized for each market.", zh: "是的。我们提供覆盖泰国和ASEAN市场的区域分销协议。ASEAN AMDD统一化允许在一个成员国注册后促进整个区域的市场准入。", ja: "はい。タイおよびASEAN市場をカバーするリージョナルディストリビューション契約を提供しています。ASEAN AMDD統一化により、1つの加盟国での登録が地域全体の市場アクセスを促進します。", vi: "Có. Chúng tôi cung cấp các thỏa thuận phân phối khu vực bao gồm Thái Lan và thị trường ASEAN rộng lớn hơn. Việc hài hòa hóa AMDD của ASEAN cho phép đăng ký tại một quốc gia thành viên để tạo thuận lợi cho việc tiếp cận thị trường trên toàn khu vực. Chúng tôi hỗ trợ đối tác bằng các chiến lược pháp lý đa quốc gia và mức giá tối ưu cho từng thị trường." } },
      { q: { en: "What is the ASF testing situation in Southeast Asia?", zh: "东南亚的非洲猪瘟检测情况如何？", ja: "東南アジアにおけるASF検査の状況は？", vi: "Tình hình xét nghiệm ASF ở Đông Nam Á hiện nay như thế nào?" }, a: { en: "African Swine Fever has caused unprecedented losses across Southeast Asia since 2018, with major outbreaks in Vietnam, Philippines, Indonesia, Myanmar, and confirmed cases in Thailand. The disease has killed hundreds of millions of pigs regionally. Rapid on-farm ASF detection is now a critical priority for all ASEAN countries. The CarryOn's ASF test chip enables PCR-level detection at farm sites without laboratory infrastructure, supporting containment and restocking decisions.", zh: "自2018年以来，非洲猪瘟在东南亚造成了前所未有的损失。在农场快速ASF检测现在是所有ASEAN国家的关键优先事项。CarryOn的ASF检测芯片支持现场PCR级检测。", ja: "アフリカ豚熱は2018年以降、東南アジア全域で前例のない被害をもたらしました。農場での迅速なASF検出は全ASEAN諸国の重要な優先事項です。CarryOnのASFテストチップは検査室インフラなしに農場でのPCRレベル検出を可能にします。", vi: "Dịch tả lợn châu Phi (ASF) đã gây ra những tổn thất chưa từng có trên khắp Đông Nam Á kể từ năm 2018, với các đợt bùng phát lớn ở Việt Nam, Philippines, Indonesia, Myanmar và các ca bệnh được xác nhận tại Thái Lan. Căn bệnh này đã giết chết hàng trăm triệu con lợn trong khu vực. Phát hiện ASF nhanh tại trại hiện là ưu tiên cấp thiết đối với tất cả các quốc gia ASEAN. Chip xét nghiệm ASF của CarryOn cho phép phát hiện ở cấp độ PCR tại các cơ sở chăn nuôi mà không cần hạ tầng phòng xét nghiệm, hỗ trợ các quyết định kiểm soát dịch bệnh và tái đàn." } },
    ],
  },
  // 9. Vietnam
  {
    slug: "vietnam",
    countryCode: "VN",
    name: { en: "Vietnam", zh: "越南", ja: "ベトナム", vi: "Việt Nam" },
    heroTitle: { en: "Portable PCR for Swine Farms & Veterinary Distributors in Vietnam", zh: "面向越南猪场与兽药经销商的便携式PCR", ja: "ベトナムの養豚場・動物用医薬品代理店向けポータブルPCR", vi: "Máy PCR cầm tay cho trại lợn — xét nghiệm ASF & tai xanh" },
    heroSubtitle: { en: "On-site African swine fever (ASF) and PRRS testing in under 60 minutes — 2 kg device, battery powered, room-temperature chips. Ships from Ningbo to Hai Phong in about a week.", zh: "现场检测非洲猪瘟（ASF）和蓝耳病（PRRS），60 分钟内出结果——2 公斤设备、电池供电、芯片常温保存。宁波到海防约一周到货。", ja: "アフリカ豚熱（ASF）と PRRS を現場で60分以内に検査。2kg・バッテリー駆動・室温保存チップ。寧波からハイフォンまで約1週間。", vi: "Xét nghiệm tại chỗ dịch tả lợn châu Phi (ASF) và bệnh tai xanh (PRRS) trong dưới 60 phút — thiết bị nặng 2 kg, chạy bằng pin, chip bảo quản ở nhiệt độ phòng. Vận chuyển từ Ningbo đến Hải Phòng trong khoảng một tuần." },
    port: "Hai Phong / Cat Lai (Ho Chi Minh City)",
    flagEmoji: "VN",
    marketOverview: {
      en: `### Vietnam: One of the World's Largest Pig Herds, and the Front Line of ASF

Vietnam keeps roughly 25–26 million pigs and produces around 3.5 million tonnes of pork a year, placing it among the top six pork producers globally. Pork accounts for about two-thirds of meat consumption in the country, and the sector is shifting rapidly from backyard holdings to commercial farms of 1,000–10,000 head in Dong Nai, Binh Duong, Thai Nguyen, Bac Giang, Hung Yen, and the Red River and Mekong deltas.

Since African swine fever was first confirmed in Hung Yen province in February 2019, Vietnam has lost well over six million pigs to culling, and the virus remains endemic in most provinces. Vietnam was also the first country to approve commercial ASF vaccines (2023), which makes disease surveillance — knowing which herds are infected before and after vaccination — even more important for farms, integrators, and the veterinary pharma companies that serve them.

Molecular testing in Vietnam is still concentrated in regional animal health laboratories and a handful of private labs in Hanoi and Ho Chi Minh City. Samples travel for days; results arrive after movement or treatment decisions have already been taken. This gap between the farm and the laboratory is exactly where a 2 kg, battery-powered real-time PCR analyzer fits.`,
      zh: `### 越南：全球最大生猪存栏国之一，非洲猪瘟前线

越南生猪存栏约 2500–2600 万头，年产猪肉约 350 万吨，是全球前六的猪肉生产国；猪肉占越南肉类消费的三分之二左右。养殖结构正快速从散养转向同奈、平阳、太原、北江、兴安以及红河、湄公河三角洲地区 1000–10000 头规模的商品猪场。

2019 年 2 月兴安省首次确认非洲猪瘟以来，越南扑杀生猪已超过 600 万头，病毒在多数省份呈地方性流行。越南也是全球第一个批准商业化非洲猪瘟疫苗（2023 年）的国家，这让疫情监测——免疫前后哪些猪群带毒——对猪场、一条龙企业和服务它们的兽药公司更加重要。

越南的分子检测仍集中在区域动物卫生实验室和河内、胡志明市的少数私人实验室。样本要运送数天，结果出来时调运或治疗决定早已做出。猪场与实验室之间的这段空白，正是 2 公斤、电池供电的实时荧光 PCR 分析仪的位置。`,
      ja: `### ベトナム：世界最大級の豚飼養頭数とASFの最前線

ベトナムの豚飼養頭数は約2,500〜2,600万頭、豚肉生産量は年間約350万トンで、世界トップ6の豚肉生産国です。豚肉は国内食肉消費の約3分の2を占め、産業は裏庭飼育からドンナイ、ビンズオン、タイグエン、バクザン、フンイエン、紅河・メコンデルタ地域の1,000〜10,000頭規模の商業農場へ急速に移行しています。

2019年2月にフンイエン省で初めてアフリカ豚熱が確認されて以来、ベトナムでは600万頭以上が殺処分され、ウイルスは多くの省で常在化しています。ベトナムは2023年に世界で初めて商用ASFワクチンを承認した国でもあり、ワクチン接種前後の感染状況を把握する疾病サーベイランスの重要性がさらに高まっています。

分子検査はいまだ地域の動物衛生検査所とハノイ・ホーチミンの少数の民間ラボに集中しています。検体の輸送に数日かかり、結果が出る頃には移動や治療の判断はすでに下されています。この農場とラボの間の空白こそ、2kg・バッテリー駆動のリアルタイムPCR分析装置の居場所です。`,
      vi: `### Việt Nam: Một trong những đàn lợn lớn nhất thế giới và tuyến đầu của ASF

Việt Nam duy trì khoảng 25–26 triệu con lợn và sản xuất khoảng 3,5 triệu tấn thịt lợn mỗi năm, nằm trong nhóm sáu nhà sản xuất thịt lợn hàng đầu toàn cầu. Thịt lợn chiếm khoảng hai phần ba mức tiêu thụ thịt của cả nước, và ngành này đang chuyển dịch nhanh chóng từ chăn nuôi nông hộ sang các trại thương mại quy mô 1.000–10.000 con tại Đồng Nai, Bình Dương, Thái Nguyên, Bắc Giang, Hưng Yên cùng các đồng bằng sông Hồng và sông Cửu Long.

Kể từ khi dịch tả lợn châu Phi được xác nhận lần đầu tại tỉnh Hưng Yên vào tháng 2 năm 2019, Việt Nam đã mất hơn sáu triệu con lợn do tiêu hủy, và virus vẫn lưu hành đặc hữu tại hầu hết các tỉnh. Việt Nam cũng là quốc gia đầu tiên phê duyệt vắc-xin ASF thương mại (2023), khiến công tác giám sát dịch bệnh — biết được đàn nào bị nhiễm trước và sau tiêm phòng — trở nên càng quan trọng hơn đối với các trại, đơn vị tích hợp và các công ty dược thú y phục vụ họ.

Xét nghiệm phân tử tại Việt Nam vẫn tập trung ở các phòng xét nghiệm thú y khu vực và một số ít phòng xét nghiệm tư nhân tại Hà Nội và Thành phố Hồ Chí Minh. Mẫu phải vận chuyển mất nhiều ngày; kết quả đến sau khi các quyết định về di chuyển hoặc điều trị đã được đưa ra. Khoảng cách giữa trại và phòng xét nghiệm chính là nơi một máy PCR huỳnh quang thời gian thực (real-time PCR) cầm tay, nặng 2 kg, chạy bằng pin, phù hợp nhất.`,
    },
    regulatoryPathway: {
      en: `### Regulatory Pathway in Vietnam

**Competent authority:** Veterinary diagnostics are overseen by the Department of Animal Health (Cục Thú y) under the Ministry of Agriculture and Environment (formerly the Ministry of Agriculture and Rural Development, MARD), under the Law on Veterinary Medicine (2015) and its implementing decrees.

**Diagnostic reagents:** Veterinary diagnostic kits and reagents intended for sale in Vietnam are generally required to be registered and granted a circulation permit before commercial distribution. The registration file typically includes manufacturer quality certificates (ISO 13485), product specifications, validation data (sensitivity, specificity, limit of detection), stability data, and Vietnamese labeling. Local testing or evaluation by a designated national laboratory may be requested.

**Instruments:** The CarryOn analyzer is an in-vitro diagnostic instrument; import requirements are lighter than for reagents, but the device and its chips are normally registered together as a system by the Vietnamese importer of record.

**How Yinrui Bio supports partners:** We provide the complete technical dossier in English (CE declaration, ISO 13485 certificate, IFUs, validation reports) and can supply samples for local evaluation. Registration is filed by the Vietnamese distribution partner, who becomes the license holder. Typical timelines run several months; we recommend starting with the ASF and PRRSV chips, which address the most urgent demand.`,
      zh: `### 越南注册路径

**主管部门：** 兽用诊断产品由农业与环境部（原农业与农村发展部 MARD）下属的动物卫生局（Cục Thú y）依据 2015 年《兽医法》及其实施细则监管。

**诊断试剂：** 在越南销售的兽用诊断试剂盒一般需要先注册并取得流通许可。注册文件通常包括生产商质量体系证书（ISO 13485）、产品技术规格、验证数据（灵敏度、特异性、检出限）、稳定性数据及越南语标签；可能需要指定的国家实验室做本地评价。

**仪器：** CarryOn 属于体外诊断仪器，进口要求比试剂宽松，但通常由越南进口方把仪器和芯片作为一个系统一起注册。

**银瑞如何支持合作伙伴：** 我们提供完整英文技术文件（CE 符合性声明、ISO 13485 证书、说明书、验证报告），并可提供样品供本地评价。注册由越南分销伙伴以许可持有人身份提交，周期通常为数月；建议先从需求最急迫的 ASF 和 PRRSV 芯片开始。`,
      ja: `### ベトナムの規制対応

**所管官庁：** 動物用診断製品は、農業環境省（旧農業農村開発省 MARD）傘下の動物衛生局（Cục Thú y）が2015年獣医法および施行令に基づき監督します。

**診断試薬：** ベトナムで販売する動物用診断キット・試薬は、一般に登録と流通許可の取得が必要です。申請書類には製造者の品質証明（ISO 13485）、製品仕様、バリデーションデータ（感度・特異度・検出限界）、安定性データ、ベトナム語ラベルが含まれ、指定国立検査機関での評価を求められる場合があります。

**機器：** CarryOn は体外診断用機器で、試薬より輸入要件は軽いものの、通常はベトナムの輸入者が機器とチップをシステムとして一括登録します。

**Yinrui Bio のサポート：** 英文の技術文書一式（CE 適合宣言、ISO 13485 証明書、取扱説明書、バリデーション報告書）を提供し、現地評価用サンプルも供給します。登録はベトナムの販売パートナーが許可保持者として申請し、通常は数か月を要します。需要の高い ASF と PRRSV チップから着手することを推奨します。`,
      vi: `### Lộ trình pháp lý tại Việt Nam

**Cơ quan có thẩm quyền:** Chẩn đoán thú y do Cục Thú y thuộc Bộ Nông nghiệp và Môi trường (trước đây là Bộ Nông nghiệp và Phát triển Nông thôn, MARD) giám sát, theo Luật Thú y (2015) và các nghị định hướng dẫn thi hành.

**Thuốc thử chẩn đoán:** Các bộ kit và thuốc thử chẩn đoán thú y dành cho bán tại Việt Nam thường phải được đăng ký và cấp phép lưu hành trước khi phân phối thương mại. Hồ sơ đăng ký thường bao gồm chứng nhận chất lượng của nhà sản xuất (ISO 13485), thông số kỹ thuật sản phẩm, dữ liệu xác nhận giá trị sử dụng (độ nhạy, độ đặc hiệu, giới hạn phát hiện), dữ liệu độ ổn định và nhãn tiếng Việt. Có thể được yêu cầu xét nghiệm hoặc đánh giá cục bộ bởi phòng xét nghiệm quốc gia được chỉ định.

**Thiết bị:** Máy phân tích CarryOn là thiết bị chẩn đoán in vitro; yêu cầu nhập khẩu nhẹ hơn so với thuốc thử, nhưng thiết bị và chip thường được đăng ký cùng nhau như một hệ thống bởi nhà nhập khẩu chịu trách nhiệm tại Việt Nam.

**Yinrui Bio hỗ trợ đối tác như thế nào:** Chúng tôi cung cấp bộ hồ sơ kỹ thuật đầy đủ bằng tiếng Anh (tuyên bố CE, chứng nhận ISO 13485, IFU, báo cáo xác nhận giá trị sử dụng) và có thể cung cấp mẫu để đánh giá tại địa phương. Hồ sơ đăng ký do đối tác phân phối tại Việt Nam nộp và đối tác này trở thành chủ giấy phép. Thời gian điển hình kéo dài vài tháng; chúng tôi khuyến nghị bắt đầu với chip ASF và PRRSV, những chip đáp ứng nhu cầu cấp bách nhất.`,
    },
    shippingLogistics: {
      en: `### Shipping from Ningbo to Vietnam

**Northern Vietnam (Hanoi, Thai Nguyen, Bac Giang, Hung Yen):** Port of Hai Phong. Ocean freight from Ningbo takes about 4–7 days with multiple weekly direct services. Road freight via the Guangxi–Lang Son border is also possible for urgent consolidated shipments.

**Southern Vietnam (Ho Chi Minh City, Dong Nai, Binh Duong):** Cat Lai / Cai Mep ports. Ocean freight from Ningbo takes about 7–10 days.

**Express courier (DHL / FedEx / SF):** 3–5 business days door-to-door for sample units and starter chip kits.

**No cold chain required.** The CarryOn device and all test chips store and ship at 15–30 °C, which removes the single biggest logistics cost and failure point for molecular diagnostics in Vietnam's tropical climate. Chips arrive ready to use and can be stocked at provincial depots without refrigeration.

**Trade terms:** FOB Ningbo standard; CIF Hai Phong or Ho Chi Minh City available on request. Payment by T/T; samples can be shipped on 100% prepayment with the cost credited against the first order.`,
      zh: `### 宁波到越南的物流

**越南北部（河内、太原、北江、兴安）：** 海防港。宁波海运约 4–7 天，每周多班直航；紧急拼箱也可走广西—谅山陆路口岸。

**越南南部（胡志明市、同奈、平阳）：** 吉莱港 / 盖梅港。宁波海运约 7–10 天。

**快递（DHL / FedEx / 顺丰）：** 样机和首批芯片 3–5 个工作日门到门。

**无需冷链。** CarryOn 设备和全部芯片在 15–30 °C 下储存运输，这消除了越南热带气候下分子诊断最大的一项物流成本和风险点。芯片到货即用，可在省级仓库常温备货。

**贸易条款：** 标准 FOB 宁波，可按需报 CIF 海防或胡志明市。T/T 付款；样品可 100% 预付发货，费用在首单中抵扣。`,
      ja: `### 寧波からベトナムへの輸送

**ベトナム北部（ハノイ、タイグエン、バクザン、フンイエン）：** ハイフォン港。寧波から海上輸送で約4〜7日、週複数便の直行サービスがあります。急ぎの混載貨物は広西〜ランソン国境経由の陸送も可能です。

**ベトナム南部（ホーチミン、ドンナイ、ビンズオン）：** カットライ港／カイメップ港。寧波から約7〜10日。

**国際宅配便（DHL / FedEx / SF）：** サンプル機や初回チップキットはドア・ツー・ドアで3〜5営業日。

**コールドチェーン不要。** CarryOn 本体と全チップは15〜30 °Cで保管・輸送でき、ベトナムの熱帯気候における分子診断最大の物流コストとリスクを解消します。チップは到着後すぐ使用でき、省レベルの倉庫で常温備蓄が可能です。

**取引条件：** 標準は FOB 寧波、要望により CIF ハイフォンまたはホーチミンも対応。支払いは T/T。サンプルは100%前払いで出荷し、初回注文で相殺できます。`,
      vi: `### Vận chuyển từ Ningbo đến Việt Nam

**Miền Bắc Việt Nam (Hà Nội, Thái Nguyên, Bắc Giang, Hưng Yên):** Cảng Hải Phòng. Vận tải đường biển từ Ningbo mất khoảng 4–7 ngày với nhiều chuyến trực tiếp hàng tuần. Vận tải đường bộ qua biên giới Quảng Tây–Lạng Sơn cũng khả thi cho các lô hàng gom khẩn cấp.

**Miền Nam Việt Nam (Thành phố Hồ Chí Minh, Đồng Nai, Bình Dương):** Cảng Cát Lái / Cái Mép. Vận tải đường biển từ Ningbo mất khoảng 7–10 ngày.

**Chuyển phát nhanh (DHL / FedEx / SF):** 3–5 ngày làm việc tận cửa đối với thiết bị mẫu và bộ chip khởi đầu.

**Không yêu cầu chuỗi lạnh.** Thiết bị CarryOn và tất cả chip xét nghiệm được bảo quản và vận chuyển ở 15–30 °C, loại bỏ chi phí logistics lớn nhất và điểm rủi ro lớn nhất đối với xét nghiệm phân tử trong khí hậu nhiệt đới của Việt Nam. Chip đến nơi sẵn sàng sử dụng và có thể được dự trữ tại kho cấp tỉnh mà không cần làm lạnh.

**Điều kiện thương mại:** FOB Ningbo tiêu chuẩn; CIF Hải Phòng hoặc Thành phố Hồ Chí Minh theo yêu cầu. Thanh toán bằng T/T; mẫu có thể được gửi với thanh toán trước 100%, chi phí được trừ vào đơn hàng đầu tiên.`,
    },
    keyApplications: {
      en: `### Key Applications in Vietnam

**African swine fever surveillance (primary demand):** Pre-movement screening of pigs, sentinel testing after vaccination, checking incoming breeding stock, and confirming suspected cases at the farm before the official laboratory result arrives. The CarryOn ASF chip runs on whole blood or tissue in under 60 minutes.

**PRRS (blue ear) herd monitoring:** Serum or whole blood testing of sows and weaners to track circulation and time vaccination. The PRRSV chip uses the same device.

**Expanding swine panels:** Classical swine fever (CSF), porcine circovirus 2 (PCV2), and porcine epidemic diarrhea virus (PEDV) are the next most requested targets from Vietnamese partners; custom panels are available for distribution agreements.

**Poultry:** Avian influenza (H5N1/H5N6) surveillance on commercial layer and broiler farms in the Red River and Mekong deltas.

**Aquaculture:** Vietnam is the world's third-largest shrimp exporter. White spot syndrome virus (WSSV) and EHP screening at hatcheries and grow-out ponds is a growing use case for portable PCR.

**Companion animals:** The pet market in Hanoi and Ho Chi Minh City is growing more than 10% a year; canine parvovirus/distemper and feline panels serve urban veterinary clinics with the same device.`,
      zh: `### 越南的主要应用

**非洲猪瘟监测（首要需求）：** 生猪调运前筛查、免疫后哨兵监测、引种检疫、官方实验室结果出来前在猪场确认疑似病例。CarryOn ASF 芯片用全血或组织，60 分钟内出结果。

**蓝耳病（PRRS）猪群监测：** 对母猪和保育猪做血清或全血检测，追踪病毒流行并安排免疫时机。PRRSV 芯片使用同一台设备。

**猪病 panel 扩展：** 猪瘟（CSF）、猪圆环病毒 2 型（PCV2）、猪流行性腹泻（PEDV）是越南合作伙伴接下来最常提出的靶标，可为分销协议定制 panel。

**家禽：** 红河、湄公河三角洲规模化蛋鸡、肉鸡场的禽流感（H5N1/H5N6）监测。

**水产：** 越南是全球第三大虾类出口国，育苗场和养成池的白斑病毒（WSSV）与 EHP 筛查是便携 PCR 增长中的用途。

**宠物：** 河内、胡志明市宠物市场年增超过 10%，犬细小/犬瘟和猫病 panel 可用同一台设备服务城市宠物医院。`,
      ja: `### ベトナムにおける主な用途

**アフリカ豚熱サーベイランス（主要需要）：** 豚の移動前スクリーニング、ワクチン接種後のセンチネル検査、導入種豚の検疫、公式ラボの結果を待たずに農場で疑い例を確認。CarryOn の ASF チップは全血または組織で60分以内に結果を出します。

**PRRS（青耳病）群監視：** 母豚・離乳豚の血清または全血を検査し、ウイルスの流行を追跡してワクチン時期を決定。PRRSV チップは同じ装置で使用します。

**豚用パネルの拡張：** 豚コレラ（CSF）、豚サーコウイルス2型（PCV2）、豚流行性下痢（PEDV）はベトナムのパートナーから次に多く要望される標的で、販売契約向けにカスタムパネルを用意できます。

**家禽：** 紅河・メコンデルタの商業採卵鶏・ブロイラー農場での鳥インフルエンザ（H5N1/H5N6）監視。

**水産養殖：** ベトナムは世界第3位のエビ輸出国。孵化場や養成池での白斑病ウイルス（WSSV）と EHP のスクリーニングは、ポータブルPCRの成長分野です。

**伴侶動物：** ハノイ・ホーチミンのペット市場は年10%以上成長。犬パルボ／ジステンパーや猫用パネルで都市部の動物病院にも同じ装置で対応できます。`,
      vi: `### Ứng dụng chính tại Việt Nam

**Giám sát dịch tả lợn châu Phi (nhu cầu chính):** Sàng lọc lợn trước khi di chuyển, xét nghiệm chỉ điểm sau tiêm phòng, kiểm tra lợn giống nhập vào và xác nhận các ca nghi ngờ tại trại trước khi có kết quả chính thức từ phòng xét nghiệm. Chip ASF của CarryOn chạy trên máu toàn phần hoặc mô trong dưới 60 phút.

**Giám sát đàn lợn bệnh tai xanh (PRRS):** Xét nghiệm huyết thanh hoặc máu toàn phần của lợn nái và lợn cai sữa để theo dõi lưu hành và thời điểm tiêm phòng. Chip PRRSV sử dụng cùng thiết bị.

**Mở rộng các bộ xét nghiệm cho lợn:** Dịch tả lợn cổ điển (CSF), circovirus lợn tuýp 2 (PCV2) và virus gây bệnh tiêu chảy dịch lợn (PEDV) là những mục tiêu được yêu cầu nhiều tiếp theo từ các đối tác Việt Nam; các bộ xét nghiệm tùy chỉnh có sẵn cho các thỏa thuận phân phối.

**Gia cầm:** Giám sát cúm gia cầm (H5N1/H5N6) tại các trại gà đẻ trứng và gà thịt thương mại ở đồng bằng sông Hồng và đồng bằng sông Cửu Long.

**Thủy sản:** Việt Nam là nước xuất khẩu tôm lớn thứ ba thế giới. Sàng lọc virus hội chứng đốm trắng (WSSV) và EHP tại trại giống và ao nuôi thương phẩm là một trường hợp sử dụng ngày càng tăng của PCR cầm tay.

**Động vật đồng hành:** Thị trường thú cưng tại Hà Nội và Thành phố Hồ Chí Minh đang tăng hơn 10% mỗi năm; các bộ xét nghiệm parvovirus/care ở chó và bộ xét nghiệm cho mèo phục vụ các phòng khám thú y đô thị với cùng thiết bị.`,
    },
    distributionModel: {
      en: `### Distribution & Partnership in Vietnam

Yinrui Bio is appointing distribution partners for Vietnam, with separate territories possible for the north (Hanoi / Hai Phong) and south (Ho Chi Minh City / Dong Nai).

**Ideal partners:**
- Veterinary pharmaceutical and vaccine companies that already serve commercial pig farms and want to add a diagnostics line
- Animal health distributors and feed companies with provincial sales teams
- Private veterinary laboratories expanding into on-site testing services
- Integrators and large farm groups equipping their own field veterinary teams

**What we provide:** technical training (device operation in about 30 minutes; sales training on PCR vs rapid antigen tests), full English documentation for registration, marketing materials, demonstration units, and a replacement-chip supply program with room-temperature stock held at the partner's depot.

**Commercial model:** Device plus recurring chip sales. The CarryOn is typically placed with each field veterinary team or regional office; chips are the ongoing revenue. Exclusive territory agreements are available with an agreed annual minimum order quantity.

**Typical starting order:** 2–5 CarryOn units with ASF and PRRSV starter chip kits for evaluation, followed by a registration-stage order of 10–20 units.`,
      zh: `### 越南的分销与合作

银瑞生物正在越南招募分销伙伴，北部（河内 / 海防）和南部（胡志明市 / 同奈）可分区域授权。

**理想合作伙伴：**
- 已服务规模化猪场、希望新增诊断产品线的兽药与疫苗公司
- 拥有省级销售团队的动保经销商和饲料企业
- 向现场检测服务扩展的私营兽医实验室
- 为自有兽医团队配备设备的一条龙企业和大型养殖集团

**我们提供：** 技术培训（设备操作约 30 分钟；PCR 与快速抗原检测的销售话术培训）、用于注册的完整英文资料、营销素材、演示样机，以及在合作伙伴仓库常温备货的芯片补货计划。

**商业模式：** 设备 + 持续的芯片销售。CarryOn 通常配给每个现场兽医团队或区域办公室，芯片是持续收入。可签订带年度最低采购量的独家区域协议。

**典型首单：** 2–5 台 CarryOn 配 ASF、PRRSV 首批芯片用于评估，随后注册阶段下单 10–20 台。`,
      ja: `### ベトナムにおける販売・パートナーシップ

Yinrui Bio はベトナムの販売パートナーを募集しており、北部（ハノイ／ハイフォン）と南部（ホーチミン／ドンナイ）で地域を分けた契約も可能です。

**理想的なパートナー：**
- 商業養豚場にすでに販売しており、診断製品ラインを追加したい動物用医薬品・ワクチン企業
- 省単位の営業チームを持つ動物衛生製品代理店・飼料会社
- 現場検査サービスへ拡大する民間獣医検査機関
- 自社の現場獣医チームに機器を配備するインテグレーター・大規模農場グループ

**提供内容：** 技術研修（装置操作は約30分、PCR と迅速抗原検査の違いを説明する営業研修）、登録用の英文書類一式、販促資料、デモ機、パートナー倉庫に常温在庫を置くチップ補充プログラム。

**商業モデル：** 装置の販売に加え、チップの継続販売。CarryOn は現場獣医チームや地域事務所ごとに配備され、チップが継続収益になります。年間最低発注量を定めた独占地域契約も可能です。

**典型的な初回注文：** 評価用に CarryOn 2〜5台と ASF・PRRSV スターターチップ、その後登録段階で10〜20台。`,
      vi: `### Phân phối & Hợp tác tại Việt Nam

Yinrui Bio đang chỉ định các đối tác phân phối cho Việt Nam, có thể có các lãnh thổ riêng cho miền Bắc (Hà Nội / Hải Phòng) và miền Nam (Thành phố Hồ Chí Minh / Đồng Nai).

**Đối tác lý tưởng:**
- Các công ty dược phẩm thú y và vắc-xin đã phục vụ các trại lợn thương mại và muốn bổ sung dòng sản phẩm chẩn đoán
- Các nhà phân phối sức khỏe động vật và công ty thức ăn chăn nuôi có đội ngũ bán hàng cấp tỉnh
- Các phòng xét nghiệm thú y tư nhân đang mở rộng sang dịch vụ xét nghiệm tại chỗ
- Các đơn vị tích hợp và tập đoàn chăn nuôi lớn trang bị cho đội ngũ thú y hiện trường của riêng họ

**Chúng tôi cung cấp:** đào tạo kỹ thuật (vận hành thiết bị trong khoảng 30 phút; đào tạo bán hàng về PCR so với xét nghiệm kháng nguyên nhanh), tài liệu tiếng Anh đầy đủ để đăng ký, tài liệu tiếp thị, thiết bị demo và chương trình cung cấp chip thay thế với hàng tồn ở nhiệt độ phòng được giữ tại kho của đối tác.

**Mô hình thương mại:** Thiết bị cộng với doanh thu bán chip định kỳ. CarryOn thường được đặt tại từng đội thú y hiện trường hoặc văn phòng khu vực; chip là nguồn doanh thu thường xuyên. Các thỏa thuận độc quyền lãnh thổ có sẵn với số lượng đặt hàng tối thiểu hàng năm đã thỏa thuận.

**Đơn hàng khởi đầu điển hình:** 2–5 thiết bị CarryOn cùng bộ chip khởi đầu ASF và PRRSV để đánh giá, tiếp theo là đơn hàng giai đoạn đăng ký từ 10–20 thiết bị.`,
    },
    faqs: [
      { q: { en: "Can the CarryOn detect African swine fever on a Vietnamese pig farm without a laboratory?", zh: "CarryOn 能在越南猪场无实验室条件下检测非洲猪瘟吗？", ja: "ラボのないベトナムの養豚場で CarryOn はアフリカ豚熱を検出できますか？", vi: "CarryOn có thể phát hiện dịch tả lợn châu Phi (ASF) tại một trại lợn ở Việt Nam mà không cần phòng thí nghiệm không?" }, a: { en: "Yes. The ASF test chip runs real-time fluorescence PCR on whole blood or tissue homogenate inside a sealed microfluidic chip. Extraction, amplification, and detection are automatic, and the result appears on the touchscreen in under 60 minutes. The 2 kg device runs on battery for about 3.5 hours, so a technician can test at the farm gate or in a vehicle.", zh: "可以。ASF 芯片在密封微流控芯片内对全血或组织匀浆做实时荧光 PCR，提取、扩增、检测全自动，60 分钟内在触摸屏显示结果。2 公斤设备电池可用约 3.5 小时，技术员可在猪场门口或车上检测。", ja: "はい。ASF チップは密閉マイクロ流体チップ内で全血または組織ホモジネートのリアルタイム蛍光PCRを行います。抽出・増幅・検出は自動で、60分以内にタッチスクリーンに結果が表示されます。2kg の装置はバッテリーで約3.5時間稼働し、農場の入口や車内でも検査できます。", vi: "Có. Chip xét nghiệm ASF chạy PCR huỳnh quang thời gian thực (real-time PCR) trên máu toàn phần hoặc dịch đồng nhất mô bên trong một chip vi lưu kín. Tách chiết, khuếch đại và phát hiện đều tự động, kết quả hiển thị trên màn hình cảm ứng trong chưa đầy 60 phút. Thiết bị 2 kg chạy bằng pin khoảng 3,5 giờ, nên kỹ thuật viên có thể xét nghiệm tại cổng trại hoặc trên xe." } },
      { q: { en: "Is the CarryOn registered with Vietnam's Department of Animal Health?", zh: "CarryOn 在越南动物卫生局注册了吗？", ja: "CarryOn はベトナム動物衛生局に登録されていますか？", vi: "CarryOn đã được đăng ký với Cục Thú y Việt Nam chưa?" }, a: { en: "Registration in Vietnam is filed by the local distribution partner as license holder. Yinrui Bio supplies the complete dossier — CE declaration, ISO 13485 certificate, validation data, and IFUs — and samples for any required local evaluation. We recommend starting with the ASF and PRRSV chips.", zh: "越南注册由本地分销伙伴作为许可持有人提交。银瑞提供完整资料——CE 符合性声明、ISO 13485 证书、验证数据、说明书——以及本地评价所需样品。建议先从 ASF 和 PRRSV 芯片开始。", ja: "ベトナムでの登録は現地販売パートナーが許可保持者として申請します。Yinrui Bio は CE 適合宣言、ISO 13485 証明書、バリデーションデータ、取扱説明書など書類一式と、現地評価に必要なサンプルを提供します。ASF と PRRSV チップからの着手を推奨します。", vi: "Việc đăng ký tại Việt Nam do đối tác phân phối tại địa phương nộp với tư cách chủ giấy phép. Yinrui Bio cung cấp trọn bộ hồ sơ — tuyên bố CE, chứng nhận ISO 13485, dữ liệu xác nhận giá trị sử dụng và IFUs — cùng mẫu cho mọi đánh giá tại địa phương theo yêu cầu. Chúng tôi khuyến nghị bắt đầu với chip ASF và PRRSV." } },
      { q: { en: "How is the CarryOn different from a benchtop real-time PCR machine?", zh: "CarryOn 和台式荧光定量 PCR 仪有什么区别？", ja: "CarryOn はベンチトップ型リアルタイムPCR装置と何が違いますか？", vi: "CarryOn khác gì so với máy PCR thời gian thực để bàn?" }, a: { en: "A benchtop qPCR system (10–20 kg, 4–7 channels, mains power, 96-well plates) belongs in a laboratory and needs a separate extraction step, trained staff, and frozen reagents. The CarryOn is 2 kg, battery powered, 5-color, with extraction built into a room-temperature chip. It trades plate capacity for the ability to test at the farm. Many distributors sell both: benchtop units for the central lab, CarryOn units for field teams.", zh: "台式 qPCR（10–20 公斤、4–7 通道、市电、96 孔板）属于实验室，需要单独提取步骤、专业人员和冷冻试剂。CarryOn 2 公斤、电池供电、5 色通道，提取集成在常温芯片内，以通量换取在猪场检测的能力。很多经销商两种都卖：台式机放中心实验室，CarryOn 配给现场团队。", ja: "ベンチトップ型 qPCR（10〜20kg、4〜7チャンネル、商用電源、96ウェルプレート）はラボ向けで、別途抽出工程、専門スタッフ、冷凍試薬が必要です。CarryOn は2kg・バッテリー駆動・5色で、抽出は室温チップに内蔵。処理量と引き換えに農場で検査できる能力を得ます。多くの代理店は両方を扱い、ベンチトップは中央ラボ、CarryOn は現場チームに配備します。", vi: "Hệ thống qPCR để bàn (10–20 kg, 4–7 kênh, điện lưới, đĩa 96 giếng) thuộc về phòng thí nghiệm và cần bước tách chiết riêng, nhân viên được đào tạo và thuốc thử đông lạnh. CarryOn nặng 2 kg, chạy bằng pin, 5 màu, với bước tách chiết tích hợp trong chip ở nhiệt độ phòng. Thiết bị đánh đổi năng lực xử lý đĩa để có khả năng xét nghiệm tại trại. Nhiều nhà phân phối bán cả hai: thiết bị để bàn cho phòng thí nghiệm trung tâm, thiết bị CarryOn cho đội hiện trường." } },
      { q: { en: "Which other swine diseases can be tested?", zh: "还能检测哪些猪病？", ja: "他にどの豚の疾病を検査できますか？", vi: "Có thể xét nghiệm những bệnh lợn nào khác?" }, a: { en: "ASF and PRRSV chips are available now. Classical swine fever (CSF), PCV2, PEDV, and pseudorabies panels are on the development roadmap and can be prioritized for distribution partners with committed volumes. One device runs all chips.", zh: "ASF 和 PRRSV 芯片现货供应。猪瘟（CSF）、PCV2、PEDV、伪狂犬 panel 在开发路线图中，可为有承诺采购量的分销伙伴优先开发。一台设备可运行全部芯片。", ja: "ASF と PRRSV チップは現在供給可能です。豚コレラ（CSF）、PCV2、PEDV、オーエスキー病のパネルは開発ロードマップにあり、数量をコミットした販売パートナー向けに優先開発できます。1台の装置ですべてのチップを実行できます。", vi: "Chip ASF và PRRSV hiện đã có. Các bộ xét nghiệm dịch tả lợn cổ điển (CSF), PCV2, PEDV và pseudorabies nằm trong lộ trình phát triển và có thể được ưu tiên cho các nhà phân phối có sản lượng cam kết. Một thiết bị chạy tất cả các chip." } },
      { q: { en: "How long does shipping from China to Vietnam take?", zh: "从中国到越南运输要多久？", ja: "中国からベトナムへの輸送期間は？", vi: "Vận chuyển từ Trung Quốc đến Việt Nam mất bao lâu?" }, a: { en: "Ocean freight from Ningbo to Hai Phong takes about 4–7 days, to Ho Chi Minh City about 7–10 days. Express courier delivers sample units in 3–5 business days. Nothing needs refrigeration in transit.", zh: "宁波到海防海运约 4–7 天，到胡志明市约 7–10 天。快递 3–5 个工作日送达样机。全程无需冷藏。", ja: "寧波からハイフォンまで海上輸送で約4〜7日、ホーチミンまで約7〜10日。国際宅配便ならサンプル機は3〜5営業日で届きます。輸送中の冷蔵は不要です。", vi: "Vận tải biển từ Ningbo đến Hải Phòng mất khoảng 4–7 ngày, đến Thành phố Hồ Chí Minh khoảng 7–10 ngày. Chuyển phát nhanh giao thiết bị mẫu trong 3–5 ngày làm việc. Không cần bảo quản lạnh trong quá trình vận chuyển." } },
      { q: { en: "Is a Vietnamese-language interface available?", zh: "有越南语操作界面吗？", ja: "ベトナム語のインターフェースはありますか？", vi: "Có giao diện tiếng Việt không?" }, a: { en: "The device ships with English and Chinese interfaces. Localized language packs, Vietnamese labeling, and Vietnamese training materials are prepared for distribution partners as part of the registration process. Operation requires only four steps, and most staff are trained in about 30 minutes.", zh: "设备标配英文和中文界面。越南语语言包、越南语标签和培训材料可在注册阶段为分销伙伴准备。操作只有四步，多数员工约 30 分钟即可上手。", ja: "装置は英語と中国語のインターフェースを標準搭載しています。ベトナム語の言語パック、ラベル、研修資料は登録手続きの一環として販売パートナー向けに用意します。操作は4ステップのみで、ほとんどのスタッフは約30分で習得できます。", vi: "Thiết bị xuất xưởng với giao diện tiếng Anh và tiếng Trung. Các gói ngôn ngữ bản địa hóa, nhãn tiếng Việt và tài liệu đào tạo tiếng Việt được chuẩn bị cho các nhà phân phối như một phần của quá trình đăng ký. Vận hành chỉ cần bốn bước và hầu hết nhân viên được đào tạo trong khoảng 30 phút." } },
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
