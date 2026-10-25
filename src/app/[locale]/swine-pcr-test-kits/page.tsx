import { activeLocales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { products, getSwineProducts } from "@/data/products";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return activeLocales.map((locale) => ({ locale }));
}

const META = {
  title: {
    en: "Swine PCR Test Kits — 13 Porcine Disease Chips for On-Farm Testing",
    zh: "猪病 PCR 检测试剂盒 — 13 种猪病现场核酸检测芯片",
    ja: "豚疾病 PCR 検査キット — 現場検査用13種の豚用チップ",
    pt: "Kits de Teste PCR para Suínos — 13 chips de doenças suínas para testes na granja",
    vi: "Bộ kit PCR cho lợn — 13 chip xét nghiệm bệnh lợn tại trại",
  },
  description: {
    en: "13 real-time PCR test chips for swine: ASF, PRRS, CSF, pseudorabies, PCV2, G. parasuis, APP, TGE, rotavirus, PED, PPV, FMD and JEV. Results in under 60 minutes on the 2 kg CarryOn analyzer, room-temperature chips, no laboratory. Distributor inquiries welcome.",
    zh: "13 种猪病实时荧光 PCR 检测芯片：非洲猪瘟、蓝耳、猪瘟、伪狂犬、圆环、副猪嗜血杆菌、胸膜肺炎、传染性胃肠炎、轮状、流行性腹泻、细小、口蹄疫、乙脑。2 公斤 CarryOn 分析仪 60 分钟出结果，芯片常温保存，无需实验室。欢迎经销商咨询。",
    ja: "豚用リアルタイム PCR 検査チップ13種：ASF、PRRS、豚コレラ、オーエスキー病、PCV2、G. parasuis、APP、TGE、ロタ、PED、PPV、口蹄疫、日本脳炎。2kg の CarryOn で60分以内に結果、チップは室温保存、ラボ不要。販売代理店のお問い合わせ歓迎。",
    pt: "13 chips de teste de PCR em tempo real para suínos: ASF, PRRS, CSF, pseudorraiva, PCV2, G. parasuis, APP, TGE, rotavírus, PED, PPV, FMD e JEV. Resultados em menos de 60 minutos no termociclador CarryOn de 2 kg, chips à temperatura ambiente, sem laboratório. Consultas de distribuidores são bem-vindas.",
    vi: "13 chip xét nghiệm PCR huỳnh quang thời gian thực (real-time PCR) cho lợn: ASF, PRRS, CSF, bệnh Aujeszky, PCV2, G. parasuis, APP, TGE, rotavirus, PED, PPV, FMD và JEV. Kết quả trong dưới 60 phút trên máy PCR CarryOn 2 kg, chip ở nhiệt độ phòng, không cần phòng xét nghiệm. Rất mong nhận được liên hệ từ các nhà phân phối.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const lang = locale as Locale;
  const pick = (r: { en: string } & Partial<Record<Locale, string>>) => r[lang] ?? r.en;
  return {
    title: pick(META.title),
    description: pick(META.description),
    alternates: { canonical: `/${locale}/swine-pcr-test-kits/` },
  };
}

export default async function SwinePcrTestKitsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const lang = locale as Locale;
  const dict = await getDictionary(lang);
  const L = (r: { en: string } & Partial<Record<Locale, string>>) => r[lang] ?? r.en;
  const swine = getSwineProducts();
  const device = products.find((p) => p.id === "carryon-device")!;

  const groups = [
    {
      title: L({ en: "Respiratory & systemic infections", zh: "呼吸道及全身感染", ja: "呼吸器・全身感染", pt: "Infecções respiratórias e sistêmicas", vi: "Nhiễm trùng hô hấp & toàn thân" }),
      desc: L({ en: "The panel most farms start with: the two notifiable hemorrhagic diseases plus the pathogens behind nursery and finisher respiratory complex.", zh: "大多数猪场的起步 panel：两种法定报告的出血性疫病，加上保育和育肥阶段呼吸道综合征背后的病原。", ja: "多くの農場が最初に導入するパネル：届出対象の出血性疾病2種と、離乳・肥育期の呼吸器複合病の原因病原体。", pt: "O painel com que a maioria das granjas começa: as duas doenças hemorrágicas de notificação obrigatória, além dos patógenos por trás do complexo respiratório de creche e terminação.", vi: "Bộ xét nghiệm mà hầu hết các trại bắt đầu sử dụng: hai bệnh xuất huyết phải báo cáo cùng các tác nhân gây phức hợp hô hấp ở lợn con sau cai sữa và lợn vỗ béo." }),
      ids: ["pathogen-asf", "pathogen-prrsv", "swine-prv", "swine-pcv2", "swine-gps", "swine-app"],
    },
    {
      title: L({ en: "Enteric & reproductive diseases", zh: "肠道及繁殖障碍", ja: "消化器・繁殖障害", pt: "Doenças entéricas e reprodutivas", vi: "Bệnh đường tiêu hóa & sinh sản" }),
      desc: L({ en: "Piglet diarrhea differentials that look identical in the farrowing room, plus the classic causes of stillbirths and mummified fetuses.", zh: "产房里临床表现一模一样的仔猪腹泻鉴别，以及死胎、木乃伊胎的经典病因。", ja: "分娩舎で臨床的に区別できない子豚下痢の鑑別と、死産・ミイラ胎子の典型的な原因。", pt: "Diferenciais de diarreia em leitões que parecem idênticos na maternidade, além das causas clássicas de natimortos e fetos mumificados.", vi: "Các chẩn đoán phân biệt tiêu chảy ở lợn con có biểu hiện giống hệt nhau trong chuồng đẻ, cùng với các nguyên nhân kinh điển gây thai chết lưu và thai khô." }),
      ids: ["swine-tgev", "swine-porv", "swine-pedv", "swine-ppv", "swine-csfv"],
    },
    {
      title: L({ en: "Zoonotic & notifiable diseases", zh: "人畜共患及法定报告疫病", ja: "人獣共通・届出伝染病", pt: "Doenças zoonóticas e de notificação obrigatória", vi: "Bệnh lây sang người & bệnh phải báo cáo" }),
      desc: L({ en: "Trade-sensitive and public-health pathogens where a one-hour field result changes what the veterinary authority can do.", zh: "涉及贸易和公共卫生的病原，一小时的现场结果直接改变兽医主管部门能采取的行动。", ja: "貿易と公衆衛生に関わる病原体。1時間で出る現場結果が獣医当局の対応を変えます。", pt: "Patógenos com impacto comercial e de saúde pública, para os quais um resultado de campo em uma hora altera a atuação da autoridade veterinária.", vi: "Các tác nhân gây bệnh nhạy cảm về thương mại và sức khỏe cộng đồng, nơi kết quả tại hiện trường trong một giờ có thể thay đổi phạm vi xử lý của cơ quan thú y." }),
      ids: ["swine-fmdv", "swine-jev"],
    },
  ].map((g) => ({ ...g, chips: g.ids.map((id) => swine.find((p) => p.id === id)!).filter(Boolean) }));

  const spec = (p: (typeof swine)[number], key: string) => p.fullSpecs.find((s) => s.label.en === key)?.value ?? "";

  const faqs = [
    { q: L({ en: "Which swine diseases can be tested with the CarryOn?", zh: "CarryOn 能检测哪些猪病？", ja: "CarryOn で検査できる豚の疾病は？", pt: "Quais doenças suínas podem ser testadas com o CarryOn?", vi: "Có thể xét nghiệm những bệnh nào ở lợn bằng CarryOn?" }), a: L({ en: "Thirteen chips are available: African swine fever (ASFV), PRRSV, classical swine fever (CSFV), pseudorabies (PRV), porcine circovirus 2 (PCV2), Glaesserella parasuis, Actinobacillus pleuropneumoniae (APP), transmissible gastroenteritis (TGEV), porcine rotavirus, porcine epidemic diarrhea (PEDV), porcine parvovirus (PPV), foot-and-mouth disease (FMDV) and Japanese encephalitis (JEV). All run on the same 2 kg device.", zh: "现有 13 张芯片：非洲猪瘟（ASFV）、蓝耳（PRRSV）、猪瘟（CSFV）、伪狂犬（PRV）、圆环 2 型（PCV2）、副猪嗜血杆菌、传染性胸膜肺炎放线杆菌（APP）、传染性胃肠炎（TGEV）、轮状病毒、流行性腹泻（PEDV）、细小病毒（PPV）、口蹄疫（FMDV）、乙型脑炎（JEV）。全部在同一台 2 公斤设备上运行。", ja: "13種のチップがあります：アフリカ豚熱（ASFV）、PRRSV、豚コレラ（CSFV）、オーエスキー病（PRV）、PCV2、グレセレラ・パラスイス、豚胸膜肺炎菌（APP）、TGEV、豚ロタウイルス、PEDV、豚パルボ（PPV）、口蹄疫（FMDV）、日本脳炎（JEV）。すべて同じ2kgの装置で実行できます。", pt: "Treze chips estão disponíveis: peste suína africana (PSA/ASFV), PRRSV, peste suína clássica (CSFV), pseudorraiva (PRV), circovírus suíno 2 (PCV2), Glaesserella parasuis, Actinobacillus pleuropneumoniae (APP), gastroenterite transmissível (TGEV), rotavírus suíno, diarreia epidêmica suína (PEDV), parvovírus suíno (PPV), febre aftosa (FMDV) e encefalite japonesa (JEV). Todos são processados no mesmo dispositivo de 2 kg.", vi: "Có mười ba chip: dịch tả lợn châu Phi (ASFV), PRRSV, dịch tả lợn cổ điển (CSFV), bệnh Aujeszky (PRV), circovirus type 2 ở lợn (PCV2), Glaesserella parasuis, Actinobacillus pleuropneumoniae (APP), viêm dạ dày ruột truyền nhiễm (TGEV), rotavirus lợn, tiêu chảy dịch ở lợn (PEDV), parvovirus lợn (PPV), lở mồm long móng (FMDV) và viêm não Nhật Bản (JEV). Tất cả đều chạy trên cùng một thiết bị 2 kg." }) },
    { q: L({ en: "Can ASF and classical swine fever be distinguished on the farm?", zh: "能在猪场区分非洲猪瘟和猪瘟吗？", ja: "農場でアフリカ豚熱と豚コレラを区別できますか？", pt: "É possível diferenciar a ASF da peste suína clássica na granja?", vi: "Có thể phân biệt ASF và dịch tả lợn cổ điển ngay tại trại không?" }), a: L({ en: "Yes. The two diseases are clinically identical. Run the ASFV chip and the CSFV chip on the same whole-blood sample; both results are available within the hour, which supports quarantine and movement decisions before the reference laboratory reports.", zh: "可以。两种病临床上完全一样。同一份全血样本同时跑 ASFV 芯片和 CSFV 芯片，一小时内两个结果都出来，可在参考实验室出报告前支持隔离和调运决策。", ja: "はい。両疾病は臨床的に同一です。同じ全血検体で ASFV チップと CSFV チップを実行すれば、1時間以内に両方の結果が得られ、参照検査機関の報告前に隔離や移動の判断ができます。", pt: "Sim. As duas doenças são clinicamente idênticas. Execute o chip ASFV e o chip CSFV na mesma amostra de sangue total; ambos os resultados ficam disponíveis em até uma hora, o que apoia decisões de quarentena e movimentação antes do laudo do laboratório de referência.", vi: "Có. Hai bệnh này giống hệt nhau về mặt lâm sàng. Chạy chip ASFV và chip CSFV trên cùng một mẫu máu toàn phần; cả hai kết quả đều có trong vòng một giờ, giúp hỗ trợ quyết định cách ly và di chuyển trước khi phòng xét nghiệm tham chiếu báo cáo." }) },
    { q: L({ en: "What sample types do the swine chips use?", zh: "猪病芯片用什么样本？", ja: "豚用チップに使う検体は？", pt: "Quais tipos de amostra os chips para suínos utilizam?", vi: "Các chip xét nghiệm cho lợn sử dụng những loại mẫu nào?" }), a: L({ en: "Whole blood or serum for ASF, PRRS, CSF, PCV2, PPV and JEV; feces or rectal swabs for TGE, rotavirus and PED; nasal, tonsil or joint swabs and tissue for PRV, G. parasuis and APP; vesicular fluid or epithelium for FMD. Nucleic acid extraction happens inside the chip, so no separate extraction kit is needed.", zh: "ASF、蓝耳、猪瘟、圆环、细小、乙脑用全血或血清；传染性胃肠炎、轮状、流行性腹泻用粪便或直肠拭子；伪狂犬、副猪嗜血杆菌、胸膜肺炎用鼻拭子、扁桃体拭子、关节液或组织；口蹄疫用水疱液或水疱皮。核酸提取在芯片内完成，不需要另外的提取试剂盒。", ja: "ASF・PRRS・豚コレラ・PCV2・PPV・JEV は全血または血清、TGE・ロタ・PED は糞便または直腸スワブ、PRV・G. parasuis・APP は鼻腔・扁桃・関節スワブや組織、口蹄疫は水疱液または水疱上皮。核酸抽出はチップ内で行われるため、別途抽出キットは不要です。", pt: "Sangue total ou soro para ASF, PRRS, CSF, PCV2, PPV e JEV; fezes ou swabs retais para TGE, rotavírus e PED; swabs nasais, de amígdala ou articulares e tecido para PRV, G. parasuis e APP; líquido vesicular ou epitélio para FMD. A extração de ácido nucleico ocorre dentro do chip, portanto não é necessário um kit de extração separado.", vi: "Máu toàn phần hoặc huyết thanh cho ASF, PRRS, CSF, PCV2, PPV và JEV; phân hoặc tăm bông trực tràng cho TGE, rotavirus và PED; tăm bông mũi, amidan hoặc khớp và mô cho PRV, G. parasuis và APP; dịch mụn nước hoặc biểu mô cho FMD. Quá trình tách chiết axit nucleic diễn ra bên trong chip, nên không cần bộ kit tách chiết riêng." }) },
    { q: L({ en: "How is on-farm PCR different from rapid antigen strips or ELISA?", zh: "现场 PCR 和快速抗原试纸、ELISA 有什么区别？", ja: "現場 PCR は迅速抗原検査や ELISA と何が違いますか？", pt: "Qual é a diferença entre a PCR na granja e os testes rápidos de antígeno ou ELISA?", vi: "PCR tại trại khác gì que thử kháng nguyên nhanh hoặc ELISA?" }), a: L({ en: "Antigen strips detect viral protein and miss early or low-level infections; ELISA detects antibodies, which appear 1–3 weeks after infection and cannot separate vaccinated from infected animals. Real-time PCR detects the pathogen's nucleic acid directly from the first days of infection with a limit of detection of about 50 copies per test, and reports quantitative Ct values.", zh: "抗原试纸检测病毒蛋白，会漏掉早期或低载量感染；ELISA 检测抗体，感染后 1–3 周才出现，且无法区分免疫动物和感染动物。实时 PCR 直接检测病原核酸，感染头几天就能检出，检出限约 50 拷贝/测试，并给出定量 Ct 值。", ja: "抗原検査はウイルスタンパク質を検出するため初期や低ウイルス量の感染を見逃し、ELISA は感染後1〜3週間で出現する抗体を検出するためワクチン接種と感染を区別できません。リアルタイム PCR は病原体の核酸を感染初期から直接検出し、検出限界は約50コピー/テスト、定量的な Ct 値も報告します。", pt: "Os testes rápidos de antígeno detectam proteína viral e não detectam infecções precoces ou de baixo nível; o ELISA detecta anticorpos, que surgem de 1 a 3 semanas após a infecção e não permitem distinguir animais vacinados de infectados. A PCR em tempo real detecta o ácido nucleico do patógeno diretamente desde os primeiros dias de infecção, com limite de detecção de cerca de 50 cópias por teste, e fornece valores de Ct quantitativos.", vi: "Que thử kháng nguyên phát hiện protein của virus và bỏ sót các ca nhiễm sớm hoặc nồng độ thấp; ELISA phát hiện kháng thể, xuất hiện 1–3 tuần sau khi nhiễm và không thể phân biệt động vật đã tiêm vaccine với động vật bị nhiễm. Real-time PCR phát hiện trực tiếp axit nucleic của tác nhân gây bệnh ngay từ những ngày đầu nhiễm, với giới hạn phát hiện khoảng 50 bản sao mỗi xét nghiệm, và báo cáo giá trị Ct định lượng." }) },
    { q: L({ en: "What is the minimum order and can distributors register the kits locally?", zh: "起订量是多少？经销商可以在当地注册吗？", ja: "最小注文数量は？販売代理店は現地登録できますか？", pt: "Qual é o pedido mínimo e os distribuidores podem registrar os kits localmente?", vi: "Đơn hàng tối thiểu là bao nhiêu và nhà phân phối có thể đăng ký các bộ kit tại địa phương không?" }), a: L({ en: "Evaluation orders start at one CarryOn device with starter chip kits of 50 pieces per target. Yinrui Bio supplies the full technical dossier — ISO 13485 certificate, validation data and IFUs — so a distribution partner can register the device and chips as a system with the local veterinary authority. Exclusive territories are available with an annual minimum.", zh: "评估订单从一台 CarryOn 起，配套芯片每个靶标 50 片起。胤瑞提供完整技术资料——ISO 13485 证书、验证数据、说明书——分销伙伴可将设备和芯片作为一个系统向当地兽医主管部门注册。可签订带年度最低采购量的独家区域协议。", ja: "評価注文は CarryOn 1台と標的ごとに50枚のスターターチップから。Yinrui Bio は ISO 13485 証明書、バリデーションデータ、取扱説明書など技術文書一式を提供し、販売パートナーが装置とチップをシステムとして現地の獣医当局に登録できます。年間最低数量付きの独占地域契約も可能です。", pt: "Pedidos de avaliação começam com um dispositivo CarryOn e kits iniciais de chips de 50 unidades por alvo. A Yinrui Bio fornece o dossiê técnico completo — certificado ISO 13485, dados de validação e IFUs — para que um parceiro de distribuição possa registrar o dispositivo e os chips como um sistema junto à autoridade veterinária local. Territórios exclusivos estão disponíveis com um mínimo anual.", vi: "Đơn hàng đánh giá bắt đầu từ một thiết bị CarryOn cùng bộ chip khởi đầu 50 chiếc cho mỗi mục tiêu. Yinrui Bio cung cấp đầy đủ hồ sơ kỹ thuật — chứng nhận ISO 13485, dữ liệu xác nhận hiệu năng và IFU — để đối tác phân phối có thể đăng ký thiết bị và chip như một hệ thống với cơ quan thú y địa phương. Có thể cung cấp lãnh thổ độc quyền với mức tối thiểu hàng năm." }) },
  ];

  const breadcrumbs = [
    { name: dict.nav.home, url: `/${locale}/` },
    { name: dict.nav.products, url: `/${locale}/products/` },
    { name: L({ en: "Swine PCR Test Kits", zh: "猪病 PCR 检测试剂盒", ja: "豚疾病 PCR 検査キット", pt: "Kits de Teste PCR para Suínos", vi: "Bộ kit xét nghiệm PCR cho lợn" }), url: `/${locale}/swine-pcr-test-kits/` },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />

      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm uppercase tracking-wider text-white/70">{L({ en: "Livestock diagnostics", zh: "畜牧诊断", ja: "家畜診断", pt: "Diagnóstico de animais de produção", vi: "Chẩn đoán vật nuôi" })}</p>
          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            {L({ en: "Swine PCR Test Kits: 13 Porcine Disease Chips for On-Farm Testing", zh: "猪病 PCR 检测试剂盒：13 种猪病现场核酸检测芯片", ja: "豚疾病 PCR 検査キット：現場検査用13種の豚用チップ", pt: "Kits de Teste PCR para Suínos: 13 Chips de Doenças Suínas para Testes na Propriedade", vi: "Bộ kit xét nghiệm PCR cho lợn: 13 chip xét nghiệm bệnh ở lợn dùng tại trại" })}
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-3xl">
            {L({
              en: "Every chip below is a closed, single-use microfluidic cartridge for the CarryOn portable analyzer: load the sample, insert the chip, read a real-time PCR result in under 60 minutes — at the farm gate, the veterinary station or the quarantine checkpoint. No laboratory, no cold chain, no extraction kit.",
              zh: "以下每张芯片都是 CarryOn 便携式分析仪专用的封闭式一次性微流控芯片：加样、插芯片、60 分钟内读到实时荧光 PCR 结果——在猪场门口、兽医站或检疫点就能完成。无需实验室、无需冷链、无需提取试剂盒。",
              ja: "以下のチップはすべて CarryOn ポータブル分析装置専用の密閉型使い捨てマイクロ流体カートリッジです。検体を入れ、チップを挿入し、60分以内にリアルタイム PCR の結果を農場の入口・獣医ステーション・検疫所で確認できます。ラボもコールドチェーンも抽出キットも不要です。",
              pt: "Cada chip abaixo é um cartucho microfluídico fechado e de uso único para o analisador portátil CarryOn: carregue a amostra, insira o chip e leia um resultado de PCR em tempo real em menos de 60 minutos — na entrada da propriedade, no posto veterinário ou no posto de quarentena. Sem laboratório, sem cadeia fria, sem kit de extração.",
              vi: "Mỗi chip dưới đây là cartridge vi lưu kín, dùng một lần dành cho máy PCR cầm tay CarryOn: nạp mẫu, cắm chip, đọc kết quả PCR thời gian thực trong dưới 60 phút — tại cổng trại, trạm thú y hoặc chốt kiểm dịch. Không cần phòng xét nghiệm, không cần chuỗi lạnh, không cần bộ kit tách chiết.",
            })}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={`/${locale}/contact/?product=carryon-swine`} className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[var(--color-primary)] hover:bg-white/90">
              {L({ en: "Request a Swine Panel Quote", zh: "获取猪病检测方案报价", ja: "豚用パネルの見積もりを依頼", pt: "Solicite uma cotação do painel suíno", vi: "Yêu cầu báo giá bộ xét nghiệm bệnh lợn" })}
            </Link>
            <Link href={`/${locale}/products/carryon-device/`} className="inline-flex items-center rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              {L({ en: "See the CarryOn analyzer", zh: "查看 CarryOn 分析仪", ja: "CarryOn 分析装置を見る", pt: "Conheça o analisador CarryOn", vi: "Xem máy PCR cầm tay CarryOn" })}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 grid gap-6 sm:grid-cols-4 text-center">
          {[
            { v: "13", k: L({ en: "swine targets", zh: "猪病靶标", ja: "豚用標的", pt: "Alvos suínos", vi: "mục tiêu xét nghiệm ở lợn" }) },
            { v: "< 60 min", k: L({ en: "sample to result", zh: "从样本到结果", ja: "検体から結果まで", pt: "da amostra ao resultado", vi: "từ mẫu đến kết quả" }) },
            { v: "2.0 kg", k: L({ en: "battery-powered analyzer", zh: "电池供电分析仪", ja: "バッテリー駆動の分析装置", pt: "termociclador alimentado por bateria", vi: "máy PCR chạy pin" }) },
            { v: "15–30 °C", k: L({ en: "chip storage, no cold chain", zh: "芯片常温保存，无冷链", ja: "チップ保存、コールドチェーン不要", pt: "armazenamento de chips, sem cadeia fria", vi: "bảo quản chip, không cần chuỗi lạnh" }) },
          ].map((s) => (
            <div key={s.v} className="rounded-xl border border-[var(--color-border)] bg-white p-6">
              <div className="text-2xl font-bold text-[var(--color-primary)]">{s.v}</div>
              <div className="mt-1 text-sm text-[var(--color-text-light)]">{s.k}</div>
            </div>
          ))}
        </div>
      </section>

      {groups.map((g, gi) => (
        <section key={g.title} className={gi % 2 === 0 ? "py-16 bg-[var(--color-bg)]" : "py-16"}>
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">{g.title}</h2>
            <p className="mt-3 text-[var(--color-text-light)] max-w-3xl">{g.desc}</p>
            <div className="mt-8 overflow-x-auto rounded-xl border border-[var(--color-border)] bg-white">
              <table className="w-full text-sm">
                <thead className="bg-[var(--color-primary)] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">{L({ en: "Test chip", zh: "检测芯片", ja: "検査チップ", pt: "Chip de teste", vi: "Chip xét nghiệm" })}</th>
                    <th className="px-4 py-3 text-left font-semibold">{L({ en: "Target pathogen", zh: "检测靶标", ja: "対象病原体", pt: "Patógeno-alvo", vi: "Tác nhân gây bệnh mục tiêu" })}</th>
                    <th className="px-4 py-3 text-left font-semibold">{L({ en: "Sample type", zh: "样本类型", ja: "検体", pt: "Tipo de amostra", vi: "Loại mẫu" })}</th>
                    <th className="px-4 py-3 text-left font-semibold">{L({ en: "Time", zh: "时间", ja: "時間", pt: "Tempo", vi: "Thời gian" })}</th>
                  </tr>
                </thead>
                <tbody>
                  {g.chips.map((p, i) => (
                    <tr key={p.id} className={i % 2 === 0 ? "bg-white" : "bg-[var(--color-bg)]"}>
                      <td className="px-4 py-3 align-top">
                        <Link href={`/${locale}/products/test-chips/${p.slug}/`} className="font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] hover:underline">{p.name[lang]}</Link>
                        <div className="mt-1 text-xs text-[var(--color-text-light)]">{p.tagline[lang]}</div>
                      </td>
                      <td className="px-4 py-3 align-top text-[var(--color-text)]">{p.detectedTargets?.[0]?.[lang] ?? spec(p, "Target")}</td>
                      <td className="px-4 py-3 align-top text-[var(--color-text-light)]">{spec(p, "Sample Type")}</td>
                      <td className="px-4 py-3 align-top text-[var(--color-text-light)] whitespace-nowrap">{spec(p, "Time to Result")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      ))}

      <section className="py-16 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-5xl px-6 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">{L({ en: "One device, every chip", zh: "一台设备，全部芯片", ja: "1台の装置ですべてのチップを", pt: "Um dispositivo, todos os chips", vi: "Một thiết bị, mọi loại chip" })}</h2>
            <p className="mt-4 text-[var(--color-text-light)]">
              {L({
                en: "The CarryOn weighs 2.0 kg, runs about 3.5 hours on battery and automates extraction, amplification and 5-color fluorescence detection inside the sealed chip. Field teams carry one device and a box of room-temperature chips; the central laboratory keeps its benchtop qPCR for batch work.",
                zh: "CarryOn 重 2.0 公斤，电池续航约 3.5 小时，在密封芯片内自动完成提取、扩增和 5 色荧光检测。现场团队带一台设备和一盒常温芯片下场；中心实验室保留台式 qPCR 做批量检测。",
                ja: "CarryOn は重量2.0kg、バッテリーで約3.5時間稼働し、密閉チップ内で抽出・増幅・5色蛍光検出を自動化します。現場チームは装置1台と室温保存チップを携行し、中央ラボはバッチ処理用にベンチトップ qPCR を使い続けられます。",
                pt: "O CarryOn pesa 2,0 kg, funciona cerca de 3,5 horas com bateria e automatiza extração, amplificação e detecção por fluorescência em 5 cores dentro do chip lacrado. Equipes de campo levam um dispositivo e uma caixa de chips em temperatura ambiente; o laboratório central mantém seu qPCR de bancada para processamento em lote.",
                vi: "CarryOn nặng 2,0 kg, chạy khoảng 3,5 giờ bằng pin và tự động tách chiết, khuếch đại và phát hiện huỳnh quang 5 màu bên trong chip kín. Đội thực địa mang theo một thiết bị và một hộp chip ở nhiệt độ phòng; phòng xét nghiệm trung tâm vẫn dùng qPCR để bàn cho công việc xử lý hàng loạt.",
              })}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={`/${locale}/products/carryon-device/`} className="inline-flex items-center rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-accent-light)]">{device.name[lang]}</Link>
              <Link href={`/${locale}/markets/vietnam/`} className="inline-flex items-center rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:border-[var(--color-accent)]">{L({ en: "Vietnam swine market page", zh: "越南猪病市场页", ja: "ベトナム養豚市場ページ", pt: "Página do mercado de suínos do Vietnã", vi: "Trang thị trường lợn Việt Nam" })}</Link>
              <Link href={`/${locale}/products/test-chips/`} className="inline-flex items-center rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-primary)] hover:border-[var(--color-accent)]">{L({ en: "All test chips", zh: "全部检测芯片", ja: "すべての検査チップ", pt: "Todos os chips de teste", vi: "Tất cả chip xét nghiệm" })}</Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white border border-[var(--color-border)] p-6">
            <h3 className="text-lg font-semibold text-[var(--color-primary)]">{L({ en: "Typical deployment", zh: "典型部署方式", ja: "典型的な導入パターン", pt: "Implantação típica", vi: "Triển khai điển hình" })}</h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-text-light)]">
              <li>• {L({ en: "Integrator field vet team: 1 device per team, ASF + CSF + PRRS chips for pre-movement screening", zh: "一条龙企业现场兽医团队：每队 1 台，配 ASF + 猪瘟 + 蓝耳芯片做调运前筛查", ja: "インテグレーターの現場獣医チーム：1チーム1台、移動前スクリーニング用に ASF＋CSF＋PRRS チップ", pt: "Equipe de veterinários de campo do integrador: 1 dispositivo por equipe, chips de ASF + CSF + PRRS para triagem pré-movimentação", vi: "Đội thú y thực địa của nhà tích hợp: 1 thiết bị/đội, chip ASF + CSF + PRRS để sàng lọc trước khi di chuyển" })}</li>
              <li>• {L({ en: "Veterinary pharma distributor: demo units for key accounts, enteric panel for farrowing-room diarrhea calls", zh: "兽药经销商：重点客户配演示机，产房腹泻出诊带肠道 panel", ja: "動物用医薬品代理店：主要顧客向けデモ機、分娩舎の下痢対応に消化器パネル", pt: "Distribuidor de produtos farmacêuticos veterinários: unidades de demonstração para principais clientes, painel entérico para atendimentos de diarreia em salas de maternidade", vi: "Nhà phân phối dược phẩm thú y: thiết bị demo cho khách hàng trọng điểm, panel xét nghiệm đường tiêu hóa cho các ca tiêu chảy tại chuồng đẻ" })}</li>
              <li>• {L({ en: "Quarantine checkpoint or slaughterhouse: ASF, CSF and FMD chips on incoming animals", zh: "检疫点或屠宰场：对入场动物做 ASF、猪瘟、口蹄疫检测", ja: "検疫所・と畜場：搬入動物に ASF・CSF・FMD チップ", pt: "Posto de quarentena ou abatedouro: chips de ASF, CSF e FMD em animais na entrada", vi: "Chốt kiểm dịch hoặc cơ sở giết mổ: chip ASF, CSF và FMD cho động vật nhập vào" })}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">{L({ en: "Frequently Asked Questions", zh: "常见问题", ja: "よくある質問", pt: "Perguntas frequentes", vi: "Câu hỏi thường gặp" })}</h2>
          <div className="mt-10 space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-[var(--color-border)] bg-white p-6">
                <h3 className="font-semibold text-[var(--color-primary)]">{f.q}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-light)]">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-bold">{dict.cta.title}</h2>
          <p className="mt-4 text-white/85">{dict.cta.subtitle}</p>
          <Link href={`/${locale}/contact/?product=carryon-swine`} className="mt-8 inline-flex items-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[var(--color-accent)] hover:bg-white/90">{dict.cta.button}</Link>
        </div>
      </section>
    </main>
  );
}
