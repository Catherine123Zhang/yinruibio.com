import { activeLocales, isValidLocale  } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { organizationSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

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
  const dict = await getDictionary(locale);
  return {
    title: dict.about.title,
    description: dict.about.subtitle,
    alternates: { canonical: `/${locale}/about/` },
  };
}

// Localized content
const content = {
  en: {
    companyIntro: "Ningbo Inarray Biomedical Systems Co., Ltd was founded in June 2018. As a high-precision instrument manufacturer, the company's core technical team is composed of experts and scholars from the Chinese Academy of Sciences, dedicated to the R&D and manufacturing of advanced molecular detection technologies and equipment in life sciences and precision medicine.",
    companyProducts: "The company specializes in digital PCR and fully automated closed nucleic acid qPCR analysis systems, along with related reagents and consumables. We focus on providing efficient nucleic acid detection solutions for professional scientific research and application fields.",
    companyTeam: "The company currently has 69 employees, including 6 PhDs and 12 Masters among its technical and R&D management personnel.",
    founderSection: "Founder",
    founderName: "Dr. Yu Jun — Chairman",
    founderTitle: "Biomedical PhD · Professor, University of Chinese Academy of Sciences",
    founderSpecialty: "Specialty: Genomic Science, Informatics, Scientific Instrument Manufacturing",
    founderBio: [
      "NYU School of Medicine, Biomedical PhD (1984–1990)",
      "Co-founder of BGI (Beijing Genomics Institute) (1999–2008)",
      "Distinguished Researcher & Founding Vice Director, Beijing Institute of Genomics, CAS (2003–2013)",
      "Chairman, Ningbo Inarray Biomedical Systems Co., Ltd (2018–present)",
      "Director, Cixi Life Science Innovation Research Institute (2021–present)",
    ],
    founderAwards: [
      "CAS Hundred Talents Program (2002)",
      "Scientific American — Inaugural Global Science Leader of the Year (2002)",
      "Qiushi Outstanding Science & Technology Achievement Award (2002)",
      "CAS Outstanding Science & Technology Achievement Award (2003)",
      "TWAS Prize for Agricultural Sciences (2012)",
      "Chief Scientist, National 973 Program (2006–2016)",
    ],
    statsTitle: "Company at a Glance",
    certsTitle: "Certifications & Qualifications",
    certsDesc: "Our manufacturing facility holds ISO 13485 quality management system certification.",
    certLabels: ["Specialized & Innovative SME"],
    facilityTitle: "R&D & Manufacturing Facility",
    facilityDesc: "Our facility at Cixi Industrial Application Technology Research Institute features nearly 3,000m² of laboratory space, GMP workshops, and comprehensive production equipment.",
    teamTitle: "Management Team",
    milestoneTitle: "Company Milestones",
    milestones: [
      { year: "2018.06", text: "Yinrui Biomedical founded in Cixi, Zhejiang" },
      { year: "2018.12", text: "Digital PCR project selected for Ningbo 'S&T Innovation 2025' biomedical program" },
      { year: "2019.07", text: "Undertook National Key R&D Program 'S&T Winter Olympics' — handheld qPCR project" },
      { year: "2020.01", text: "COVID-19 border control emergency technology research; selected for MOST 'S&T Boosting Economy 2020'" },
      { year: "2019.09", text: "Digital PCR project selected for Ningbo \"3315 Plan\" entrepreneurial team" },
      { year: "2020.09", text: "CarryOn P1000Q handheld qPCR system and SARS-CoV-2 chip passed General Administration of Customs project acceptance" },
      { year: "2021.05", text: "Co-founded Cixi Life Science Innovation Research Institute with Cixi government" },
      { year: "2021.07", text: "Named \"Biomedical Star\" among Ningbo's most investment-worthy enterprises" },
      { year: "2022.04", text: "ISO13485 certification obtained" },
      { year: "2023.03", text: "Strategic partnership with Zhejiang Orient Gene Biotech" },
      { year: "2024.12", text: "Recognized as National High-Tech Enterprise" },
      { year: "2025.06", text: "Recognized as Ningbo 'Specialized & Innovative' SME" },
    ],
    ipTitle: "Intellectual Property",
    ipDesc: "25 invention patents, 3 utility-model patents and 1 design patent granted, plus software copyrights, covering the analyzer, the microfluidic chip and test applications. ISO 13485 quality system. National High-Tech Enterprise (2024); Ningbo Specialized & Innovative SME (2025); undertook the National Key R&D Program \"S&T Winter Olympics\" handheld qPCR project and the MOST \"Technology-Driven Economic Growth 2020\" special project.",
  },
  zh: {
    companyIntro: "宁波胤瑞生物医学仪器有限责任公司创建于2018年6月，是一家高精密仪器制造公司，公司由来自中科院的专家学者组成核心技术团队，致力于生命科学与精准医学领域先进分子检测技术与装备的研发制造。",
    companyProducts: "公司主营数字PCR和全自动封闭式核酸QPCR分析系统及相关配套试剂耗材产品的开发与生产，专注于为相关专业科学研究及应用领域提供高效的核酸检测解决方案。",
    companyTeam: "公司现有员工69人，其中技术和研发管理人员包括博士6名，硕士12名。",
    founderSection: "创始人",
    founderName: "于军 董事长",
    founderTitle: "生物医学博士 · 中国科学院大学教授",
    founderSpecialty: "专业：基因组科学、信息学、科学仪器制造",
    founderBio: [
      "美国纽约大学医学院生物医学博士（1984–1990）",
      "「华大基因」联合创始人（1999–2008）",
      "中国科学院北京基因组研究所特聘研究员、学术委员会主任、建所副所长（2003–2013）",
      "宁波胤瑞生物医学仪器有限责任公司董事长（2018–至今）",
      "慈溪生命科学创新研究院理事长（2021–至今）",
    ],
    founderAwards: [
      "中国科学院「百人计划」（2002）",
      "《科学美国人》杂志首届年度全球科学领袖（2002）",
      "求是杰出科技成就奖（2002）",
      "中国科学院杰出科技成就奖（2003）",
      "发展中国家科学院农业科学奖（2012）",
      "「973」计划首席科学家（2006–2016）",
    ],
    statsTitle: "公司概览",
    certsTitle: "资质认证",
    certsDesc: "生产场地通过 ISO 13485 质量管理体系认证。",
    certLabels: ["专精特新中小企业"],
    facilityTitle: "研发与生产基地",
    facilityDesc: "胤瑞在慈溪产业应用技术研究院拥有近3000平米的产品实验室、GMP车间和完善的生产设备。",
    teamTitle: "管理团队",
    milestoneTitle: "发展历程",
    milestones: [
      { year: "2018.06", text: "宁波胤瑞生物医学仪器公司在慈溪注册成立" },
      { year: "2018.12", text: "数字PCR项目入选宁波「科技创新2025」首批生物医药重大专项" },
      { year: "2019.07", text: "承担国家重点研发计划「科技冬奥」— 手持qPCR项目研发任务" },
      { year: "2020.01", text: "承担「新型冠状病毒口岸防控应急技术研究」，入选科技部「科技助力经济2020」重点专项" },
      { year: "2019.09", text: "数字PCR项目入选宁波市「3315计划」创业团队" },
      { year: "2020.09", text: "CarryOn P1000Q 手持QPCR分析系统及新冠检测试剂盒通过海关总署项目验收" },
      { year: "2021.05", text: "于军团队与慈溪市政府共同创办「慈溪生命科学创新研究院」" },
      { year: "2021.07", text: "获评「宁波最具投资价值企业·生物医药之星」" },
      { year: "2022.04", text: "生产场地通过ISO13485认证" },
      { year: "2023.03", text: "与浙江东方基因生物制品股份有限公司签订战略合作协议" },
      { year: "2024.12", text: "获得高新技术企业认定" },
      { year: "2025.06", text: "获得宁波市「专精特新」企业认定" },
    ],
    ipTitle: "知识产权体系",
    ipDesc: "已获授权发明专利 25 项、实用新型 3 项、外观专利 1 项及多项软件著作权，覆盖仪器、微流控芯片与检测应用。通过 ISO 13485 质量体系认证；国家高新技术企业（2024）、宁波市专精特新企业（2025）；承担国家重点研发计划\"科技冬奥\"手持 qPCR 项目，入选科技部\"科技助力经济 2020\"重点专项。",
  },
  ja: {
    companyIntro: "宁波胤瑞生物医学仪器有限責任公司は2018年6月に設立された高精度機器メーカーです。中国科学院の専門家・学者で構成されるコア技術チームが、ライフサイエンスと精密医学分野における先進的な分子検出技術と装置の研究開発・製造に取り組んでいます。",
    companyProducts: "デジタルPCRおよび全自動クローズド核酸qPCR分析システムとそれに関連する試薬・消耗品の開発・生産を主要事業とし、専門的な科学研究および応用分野に効率的な核酸検出ソリューションを提供することに注力しています。",
    companyTeam: "現在の従業員数は69名で、うち技術・研究開発管理者には博士6名、修士12名が含まれます。",
    founderSection: "創業者",
    founderName: "于軍 会長",
    founderTitle: "生物医学博士 · 中国科学院大学教授",
    founderSpecialty: "専門：ゲノム科学、情報学、科学機器製造",
    founderBio: [
      "ニューヨーク大学医学部 生物医学博士（1984–1990）",
      "BGI（北京ゲノム研究所）共同創設者（1999–2008）",
      "中国科学院北京ゲノム研究所 特任研究員・設立副所長（2003–2013）",
      "宁波胤瑞生物医学仪器有限責任公司 会長（2018–現在）",
      "慈渓ライフサイエンスイノベーション研究院 理事長（2021–現在）",
    ],
    founderAwards: [
      "中国科学院「百人計画」（2002）",
      "Scientific American 初代グローバル科学リーダー・オブ・ザ・イヤー（2002）",
      "求是傑出科学技術成就賞（2002）",
      "中国科学院傑出科学技術成就賞（2003）",
      "発展途上国科学院農業科学賞（2012）",
      "「973」計画主任科学者（2006–2016）",
    ],
    statsTitle: "会社概要",
    certsTitle: "認証・資格",
    certsDesc: "製造施設は ISO 13485 品質管理システム認証を取得しています。",
    certLabels: ["専精特新中小企業"],
    facilityTitle: "研究開発・製造拠点",
    facilityDesc: "慈渓産業応用技術研究院に約3,000m²の製品実験室、GMP工場、充実した生産設備を保有しています。",
    teamTitle: "経営チーム",
    milestoneTitle: "沿革",
    milestones: [
      { year: "2018.06", text: "宁波胤瑞生物医学仪器公司、慈渓に設立" },
      { year: "2018.12", text: "デジタルPCRプロジェクトが寧波「科技創新2025」に選定" },
      { year: "2019.07", text: "国家重点研究開発計画「科技冬季五輪」ハンドヘルドqPCR研究任務を担当" },
      { year: "2020.01", text: "新型コロナウイルス国境管理緊急技術研究を担当" },
      { year: "2019.09", text: "デジタルPCRプロジェクトが寧波市「3315計画」起業チームに選定" },
      { year: "2020.09", text: "CarryOn P1000Q ハンドヘルドqPCRシステムと SARS-CoV-2 チップが税関総署の事業検収に合格" },
      { year: "2021.05", text: "慈渓市政府と共同で慈渓ライフサイエンスイノベーション研究院を設立" },
      { year: "2021.07", text: "寧波市最有望投資企業「バイオ医薬の星」を受賞" },
      { year: "2022.04", text: "ISO13485認証取得" },
      { year: "2023.03", text: "浙江東方遺伝子生物製品と戦略的提携契約を締結" },
      { year: "2024.12", text: "国家ハイテク企業認定を取得" },
      { year: "2025.06", text: "寧波市「専精特新」企業認定を取得" },
    ],
    ipTitle: "知的財産",
    ipDesc: "発明特許25件、実用新案3件、意匠1件およびソフトウェア著作権を取得し、分析装置・マイクロ流体チップ・検査アプリケーションをカバー。ISO 13485 認証を取得。国家ハイテク企業（2024）、寧波市「専精特新」企業（2025）、国家重点研究開発計画「科技冬奥」ハンドヘルド qPCR プロジェクトおよび科学技術部「科技助力経済2020」重点専項を担当。",
  },
  vi: {
    "companyIntro": "Ningbo Inarray Biomedical Systems Co., Ltd được thành lập vào tháng 6 năm 2018. Là nhà sản xuất thiết bị có độ chính xác cao, đội ngũ kỹ thuật nòng cốt của công ty gồm các chuyên gia và học giả đến từ Viện Hàn lâm Khoa học Trung Quốc, chuyên tâm vào nghiên cứu phát triển và sản xuất các công nghệ và thiết bị phát hiện phân tử tiên tiến trong lĩnh vực khoa học sự sống và y học chính xác.",
    "companyProducts": "Công ty chuyên về PCR kỹ thuật số và các hệ thống phân tích qPCR axit nucleic khép kín hoàn toàn tự động, cùng với các thuốc thử và vật tư tiêu hao liên quan. Chúng tôi tập trung cung cấp các giải pháp phát hiện axit nucleic hiệu quả cho các lĩnh vực nghiên cứu khoa học chuyên nghiệp và ứng dụng.",
    "companyTeam": "Hiện nay công ty có 69 nhân viên, trong đó có 6 tiến sĩ và 12 thạc sĩ trong đội ngũ nhân sự kỹ thuật và quản lý R&D.",
    "founderSection": "Nhà sáng lập",
    "founderName": "TS. Yu Jun — Chủ tịch",
    "founderTitle": "Tiến sĩ Y sinh · Giáo sư, Đại học Viện Hàn lâm Khoa học Trung Quốc",
    "founderSpecialty": "Chuyên môn: Khoa học Hệ gen, Tin học, Sản xuất Thiết bị Khoa học",
    "founderBio": [
      "Trường Y NYU, Tiến sĩ Y sinh (1984–1990)",
      "Đồng sáng lập BGI (Viện Genomics Bắc Kinh) (1999–2008)",
      "Nhà nghiên cứu Xuất sắc & Phó Viện trưởng Sáng lập, Viện Genomics Bắc Kinh, CAS (2003–2013)",
      "Chủ tịch, Ningbo Inarray Biomedical Systems Co., Ltd (2018–nay)",
      "Giám đốc, Viện Nghiên cứu Đổi mới Khoa học Sự sống Cixi (2021–nay)"
    ],
    "founderAwards": [
      "Chương trình Trăm Nhân tài CAS (2002)",
      "Scientific American — Nhà lãnh đạo Khoa học Toàn cầu của Năm, lần đầu tiên (2002)",
      "Giải thưởng Thành tựu Khoa học & Công nghệ Xuất sắc Qiushi (2002)",
      "Giải thưởng Thành tựu Khoa học & Công nghệ Xuất sắc CAS (2003)",
      "Giải thưởng TWAS về Khoa học Nông nghiệp (2012)",
      "Nhà khoa học trưởng, Chương trình 973 Quốc gia (2006–2016)"
    ],
    "statsTitle": "Tổng quan về công ty",
    "certsTitle": "Chứng nhận & Trình độ chuyên môn",
    "certsDesc": "Cơ sở sản xuất duy trì chứng nhận hệ thống quản lý chất lượng ISO 13485.",
    "certLabels": [
      "Doanh nghiệp nhỏ và vừa chuyên ngành & đổi mới sáng tạo"
    ],
    "facilityTitle": "Cơ sở R&D & sản xuất",
    "facilityDesc": "Cơ sở của chúng tôi tại Viện Nghiên cứu Công nghệ Ứng dụng Công nghiệp Từ Khê có gần 3,000m² không gian phòng thí nghiệm, xưởng GMP và trang thiết bị sản xuất toàn diện.",
    "teamTitle": "Đội ngũ quản lý",
    "milestoneTitle": "Cột mốc phát triển của công ty",
    "milestones": [
      {
        "year": "2018.06",
        "text": "Yinrui Biomedical được thành lập tại Từ Khê, Chiết Giang"
      },
      {
        "year": "2018.12",
        "text": "Dự án PCR kỹ thuật số được chọn vào chương trình y sinh 'S&T Innovation 2025' của Ninh Ba"
      },
      {
        "year": "2019.07",
        "text": "Đảm nhận Chương trình R&D trọng điểm quốc gia 'S&T Winter Olympics' — dự án qPCR cầm tay"
      },
      {
        "year": "2020.01",
        "text": "Nghiên cứu công nghệ khẩn cấp phục vụ kiểm soát biên giới COVID-19; được chọn vào chương trình 'S&T Boosting Economy 2020' của MOST"
      },
      {
        "year": "2019.09",
        "text": "Dự án PCR kỹ thuật số được chọn vào nhóm khởi nghiệp \"Kế hoạch 3315\" của Ninh Ba"
      },
      {
        "year": "2020.09",
        "text": "Hệ thống qPCR cầm tay CarryOn P1000Q và chip SARS-CoV-2 vượt qua nghiệm thu dự án của Tổng cục Hải quan Trung Quốc"
      },
      {
        "year": "2021.05",
        "text": "Đồng sáng lập Viện Nghiên cứu Đổi mới Khoa học Sự sống Từ Khê với chính quyền Từ Khê"
      },
      {
        "year": "2021.07",
        "text": "Được vinh danh \"Ngôi sao Y sinh\" trong các doanh nghiệp đáng đầu tư nhất Ninh Ba"
      },
      {
        "year": "2022.04",
        "text": "Đạt chứng nhận ISO13485"
      },
      {
        "year": "2023.03",
        "text": "Hợp tác chiến lược với Zhejiang Orient Gene Biotech"
      },
      {
        "year": "2024.12",
        "text": "Được công nhận là Doanh nghiệp Công nghệ cao Quốc gia"
      },
      {
        "year": "2025.06",
        "text": "Được công nhận là Doanh nghiệp vừa và nhỏ 'Chuyên biệt & Đổi mới sáng tạo' của Ninh Ba"
      }
    ],
    "ipTitle": "Sở hữu trí tuệ",
    "ipDesc": "Đã được cấp 25 bằng sáng chế, 3 giải pháp hữu ích, 1 kiểu dáng công nghiệp cùng nhiều bản quyền phần mềm, bao phủ máy phân tích, chip vi lưu và các ứng dụng xét nghiệm. Hệ thống chất lượng ISO 13485. Doanh nghiệp công nghệ cao quốc gia (2024); doanh nghiệp \"chuyên, tinh, đặc, mới\" Ninh Ba (2025); thực hiện dự án qPCR cầm tay thuộc Chương trình R&D trọng điểm quốc gia \"S&T Winter Olympics\" và chuyên đề \"Công nghệ thúc đẩy kinh tế 2020\" của Bộ KH&CN."
  },
  pt: {
    "companyIntro": "A Ningbo Inarray Biomedical Systems Co., Ltd foi fundada em junho de 2018. Como fabricante de instrumentos de alta precisão, a equipe técnica central da empresa é composta por especialistas e acadêmicos da Academia Chinesa de Ciências, dedicada à P&D e à fabricação de tecnologias e equipamentos avançados de detecção molecular nas áreas de ciências da vida e medicina de precisão.",
    "companyProducts": "A empresa é especializada em PCR digital e em sistemas fechados e totalmente automatizados de análise de qPCR de ácidos nucleicos, além de reagentes e consumíveis relacionados. Nosso foco é oferecer soluções eficientes de detecção de ácidos nucleicos para áreas profissionais de pesquisa científica e aplicação.",
    "companyTeam": "A empresa conta atualmente com 69 colaboradores, incluindo 6 doutores e 12 mestres em sua equipe técnica e de gestão de P&D.",
    "founderSection": "Fundador",
    "founderName": "Dr. Yu Jun — Presidente",
    "founderTitle": "Doutor em Biomedicina · Professor da Universidade da Academia Chinesa de Ciências",
    "founderSpecialty": "Especialidade: Ciência Genômica, Informática e Fabricação de Instrumentos Científicos",
    "founderBio": [
      "NYU School of Medicine, Doutorado em Biomedicina (1984–1990)",
      "Cofundador do BGI (Beijing Genomics Institute) (1999–2008)",
      "Pesquisador de Destaque e Vice-Diretor Fundador do Instituto de Genômica de Pequim, CAS (2003–2013)",
      "Presidente, Ningbo Inarray Biomedical Systems Co., Ltd (2018–atual)",
      "Diretor do Instituto de Pesquisa e Inovação em Ciências da Vida de Cixi (2021–atual)"
    ],
    "founderAwards": [
      "Programa dos Cem Talentos da CAS (2002)",
      "Scientific American — Líder Global em Ciência do Ano, edição inaugural (2002)",
      "Prêmio Qiushi de Excelência em Ciência e Tecnologia (2002)",
      "Prêmio de Excelência em Ciência e Tecnologia da CAS (2003)",
      "Prêmio TWAS de Ciências Agrícolas (2012)",
      "Cientista-Chefe, Programa Nacional 973 (2006–2016)"
    ],
    "statsTitle": "Visão geral da empresa",
    "certsTitle": "Certificações e Qualificações",
    "certsDesc": "A unidade de fabricação mantém a certificação do sistema de gestão da qualidade ISO 13485.",
    "certLabels": [
      "PME Especializada e Inovadora"
    ],
    "facilityTitle": "Unidade de P&D e Fabricação",
    "facilityDesc": "Nossa unidade no Cixi Industrial Application Technology Research Institute conta com quase 3.000 m² de espaço laboratorial, oficinas GMP e equipamentos de produção completos.",
    "teamTitle": "Equipe de Gestão",
    "milestoneTitle": "Marcos da Empresa",
    "milestones": [
      {
        "year": "2018.06",
        "text": "Fundação da Yinrui Biomedical em Cixi, Zhejiang"
      },
      {
        "year": "2018.12",
        "text": "Projeto de PCR digital selecionado para o programa biomédico 'S&T Innovation 2025' de Ningbo"
      },
      {
        "year": "2019.07",
        "text": "Executou o Programa Nacional-Chave de P&D 'S&T Winter Olympics' — projeto de qPCR portátil"
      },
      {
        "year": "2020.01",
        "text": "Pesquisa de tecnologia emergencial para controle de fronteiras da COVID-19; selecionada para o 'S&T Boosting Economy 2020' do MOST"
      },
      {
        "year": "2019.09",
        "text": "Projeto de PCR digital selecionado para a equipe empreendedora do \"Plano 3315\" de Ningbo"
      },
      {
        "year": "2020.09",
        "text": "Sistema qPCR portátil CarryOn P1000Q e chip SARS-CoV-2 aprovados na aceitação de projeto da Administração Geral de Alfândegas"
      },
      {
        "year": "2021.05",
        "text": "Co-fundou o Cixi Life Science Innovation Research Institute com o governo de Cixi"
      },
      {
        "year": "2021.07",
        "text": "Eleita \"Estrela Biomédica\" entre as empresas de Ningbo com maior valor de investimento"
      },
      {
        "year": "2022.04",
        "text": "Certificação ISO13485"
      },
      {
        "year": "2023.03",
        "text": "Parceria estratégica com a Zhejiang Orient Gene Biotech"
      },
      {
        "year": "2024.12",
        "text": "Reconhecida como Empresa Nacional de Alta Tecnologia"
      },
      {
        "year": "2025.06",
        "text": "Reconhecida como PME 'Especializada e Inovadora' de Ningbo"
      }
    ],
    "ipTitle": "Propriedade Intelectual",
    "ipDesc": "25 patentes de invenção, 3 modelos de utilidade e 1 desenho industrial concedidos, além de direitos autorais de software, cobrindo o analisador, o chip microfluídico e as aplicações de teste. Sistema de qualidade ISO 13485. Empresa Nacional de Alta Tecnologia (2024); PME Especializada e Inovadora de Ningbo (2025); responsável pelo projeto de qPCR portátil do Programa Nacional de P&D \"S&T Winter Olympics\" e pelo projeto especial \"Technology-Driven Economic Growth 2020\" do MOST."
  },
};

const teamMembers = [
  {
    image: "/images/about/team/founder-0.png",
    name: { en: "Dr. Yu Jun", zh: "于军", ja: "于軍", vi: "Tiến sĩ Yu Jun", pt: "Dr. Yu Jun" },
    role: { en: "Chairman & Founder", zh: "董事长 / 创始人", ja: "会長・創業者", vi: "Chủ tịch & Nhà sáng lập", pt: "Presidente do Conselho e Fundador" },
    bg: { en: "NYU Biomedical PhD · BGI Co-founder", zh: "NYU 生物医学博士 · 华大基因联合创始人", ja: "NYU生物医学博士 · BGI共同創設者", vi: "Tiến sĩ Y sinh Đại học NYU · Đồng sáng lập BGI", pt: "PhD em Biomedicina pela NYU · Cofundador da BGI" },
  },
  {
    image: "/images/about/team/team-1.png",
    name: { en: "Zhang Lei", zh: "张雷", ja: "張雷", vi: "Zhang Lei", pt: "Zhang Lei" },
    role: { en: "CEO", zh: "CEO", ja: "CEO", vi: "CEO", pt: "CEO" },
    bg: { en: "MMD from Denmark · Secretary-General of Nordic Chinese Association", zh: "丹麦MMD学位 · 北欧华人联合会秘书长", ja: "デンマークMMD · 北欧華人連合会事務局長", vi: "MMD từ Đan Mạch · Tổng Thư ký Hiệp hội Người Trung Quốc Bắc Âu", pt: "MMD pela Dinamarca · Secretário-Geral da Nordic Chinese Association" },
  },
  {
    image: "/images/about/team/team-2.png",
    name: { en: "Sui Shuo", zh: "隋硕", ja: "隋碩", vi: "Sui Shuo", pt: "Sui Shuo" },
    role: { en: "VP — R&D", zh: "副总裁", ja: "副社長", vi: "Phó Chủ tịch — R&D", pt: "VP — P&D" },
    bg: { en: "PhD, Beijing Institute of Genomics, CAS · Postdoc, Institute of Semiconductors, CAS", zh: "中科院北京基因组所博士 · 中科院半导体所博士后", ja: "中国科学院北京ゲノム研究所博士", vi: "Tiến sĩ, Viện Nghiên cứu Hệ gen Bắc Kinh, CAS · Nghiên cứu sau tiến sĩ, Viện Bán dẫn, CAS", pt: "Doutorado, Instituto de Genômica de Pequim, CAS · Pós-doutorado, Instituto de Semicondutores, CAS" },
  },
  {
    image: "/images/about/team/team-3.png",
    name: { en: "Liu Yibo", zh: "刘一博", ja: "劉一博", vi: "Liu Yibo", pt: "Liu Yibo" },
    role: { en: "Production Director", zh: "生产总监", ja: "生産ディレクター", vi: "Giám đốc Sản xuất", pt: "Diretor de Produção" },
    bg: { en: "MSc Cell Biology, China Medical University", zh: "中国医科大学细胞生物学硕士", ja: "中国医科大学細胞生物学修士", vi: "Thạc sĩ Sinh học Tế bào, Đại học Y Trung Quốc", pt: "Mestrado em Biologia Celular, Universidade Médica da China" },
  },
  {
    image: "/images/about/team/team-4.png",
    name: { en: "Zhu Dawei", zh: "朱大维", ja: "朱大維", vi: "Zhu Dawei", pt: "Zhu Dawei" },
    role: { en: "VP — Operations", zh: "副总裁", ja: "副社長", vi: "Phó Chủ tịch — Vận hành", pt: "Vice-presidente — Operações" },
    bg: { en: "Former VP, Shandong Greenlight Cable Group · Dell & GDB veteran", zh: "山东绿灯行电缆集团原副总裁", ja: "山東緑灯行ケーブルグループ元副社長", vi: "Cựu Phó Chủ tịch, Shandong Greenlight Cable Group · Cựu nhân viên kỳ cựu của Dell & GDB", pt: "Ex-vice-presidente, Shandong Greenlight Cable Group · Veterano da Dell e GDB" },
  },
  {
    image: "/images/about/team/team-5.png",
    name: { en: "Guo Haiyan", zh: "郭海燕", ja: "郭海燕", vi: "Guo Haiyan", pt: "Guo Haiyan" },
    role: { en: "R&D Director — Reagents", zh: "试剂研发总监", ja: "試薬研究開発ディレクター", vi: "Giám đốc Nghiên cứu và Phát triển — Thuốc thử", pt: "Diretor de P&D — Reagentes" },
    bg: { en: "PhD, Beijing Institute of Genomics, CAS · Former Assoc. Professor", zh: "中科院北京基因组研究所博士 · 原沈阳药科大学副教授", ja: "中国科学院北京ゲノム研究所博士", vi: "Tiến sĩ, Viện Nghiên cứu Hệ gen Bắc Kinh, CAS · Nguyên Phó Giáo sư", pt: "Doutorado, Instituto de Genômica de Pequim, CAS · Ex-professor associado" },
  },
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const lang = locale as Locale;
  const dict = await getDictionary(lang);
  const t = content[lang];

  const breadcrumbs = [
    { name: dict.nav.home, url: `/${locale}/` },
    { name: dict.nav.about, url: `/${locale}/about/` },
  ];

  const stats = [
    { value: "69", label: { en: "Employees", zh: "员工", ja: "従業員", vi: "Nhân viên", pt: "Funcionários" } },
    { value: "6", label: { en: "PhDs", zh: "博士", ja: "博士", vi: "Tiến sĩ", pt: "Doutores" } },
    { value: "12", label: { en: "Masters", zh: "硕士", ja: "修士", vi: "Thạc sĩ", pt: "Mestres" } },
    { value: "62", label: { en: "Patents", zh: "授权专利", ja: "特許", vi: "Bằng sáng chế", pt: "Patentes" } },
    { value: "12", label: { en: "Design Patents", zh: "外观专利", ja: "意匠特許", vi: "Bằng sáng chế kiểu dáng", pt: "Patentes de desenho industrial" } },
    { value: "6", label: { en: "Software Copyrights", zh: "软件著作权", ja: "ソフトウェア著作権", vi: "Quyền tác giả phần mềm", pt: "Direitos autorais de software" } },
    { value: "3,000m²", label: { en: "Lab + GMP Workshop", zh: "实验室 + GMP 车间", ja: "ラボ + GMP工場", vi: "Phòng thí nghiệm + Xưởng GMP", pt: "Laboratório + Oficina GMP" } },
    { value: "2018", label: { en: "Founded", zh: "成立", ja: "設立", vi: "Thành lập", pt: "Fundada" } },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero with building photo */}
      <section className="relative text-white py-24 overflow-hidden">
        <Image
          src="/images/about/company-0.png"
          alt="Yinrui Biomedical Headquarters"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/90 to-[var(--color-primary)]/60" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/products/logo-inarray.png"
              alt="Inarray Logo"
              width={60}
              height={60}
              className="rounded-lg bg-white p-1.5"
            />
          </div>
          <h1 className="text-4xl font-bold sm:text-5xl">{dict.about.title}</h1>
          <p className="mt-4 text-lg text-white/80 max-w-3xl">{dict.about.subtitle}</p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <FadeIn>
            <p className="text-lg text-[var(--color-text)] leading-relaxed">{t.companyIntro}</p>
            <p className="mt-4 text-lg text-[var(--color-text)] leading-relaxed">{t.companyProducts}</p>
            <p className="mt-4 text-lg font-medium text-[var(--color-primary)]">{t.companyTeam}</p>
          </FadeIn>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-center text-white mb-12">{t.statsTitle}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <FadeIn key={stat.value + i} delay={i * 60}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-white/70">{stat.label[lang]}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-12">{t.founderSection}</h2>
          <div className="grid gap-12 md:grid-cols-[300px_1fr] items-start">
            <FadeIn>
              <div className="text-center">
                <Image
                  src="/images/about/team/founder-0.png"
                  alt={t.founderName}
                  width={250}
                  height={250}
                  className="rounded-full mx-auto"
                />
                <h3 className="mt-4 text-xl font-bold text-[var(--color-primary)]">{t.founderName}</h3>
                <p className="mt-1 text-sm text-[var(--color-accent)] font-medium">{t.founderTitle}</p>
                <p className="mt-1 text-xs text-[var(--color-text-light)]">{t.founderSpecialty}</p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div>
                <h4 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-3">
                  {lang === "zh" ? "履历" : lang === "ja" ? "経歴" : lang === "vi" ? "Sự nghiệp" : lang === "pt" ? "Carreira" : "Career"}
                </h4>
                <ul className="space-y-2">
                  {t.founderBio.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[var(--color-text-light)]">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--color-accent)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h4 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mt-8 mb-3">
                  {lang === "zh" ? "荣誉与奖项" : lang === "ja" ? "受賞歴" : lang === "vi" ? "Danh hiệu & Giải thưởng" : lang === "pt" ? "Prêmios e Reconhecimentos" : "Honors & Awards"}
                </h4>
                <ul className="space-y-2">
                  {t.founderAwards.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[var(--color-text-light)]">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--color-green)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Certifications & Qualifications */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">{t.certsTitle}</h2>
          <p className="mt-4 text-center text-[var(--color-text-light)] max-w-2xl mx-auto">{t.certsDesc}</p>
          <div className="mt-12 mx-auto max-w-md">
            {[
              { src: "/images/about/certs/cert-3.png", label: t.certLabels[0] },
            ].map((cert, i) => (
              <FadeIn key={cert.label} delay={i * 100}>
                <div className="rounded-xl bg-white p-4 shadow-sm border border-[var(--color-border)] text-center">
                  <div className="relative h-64 overflow-hidden rounded-lg bg-gray-50">
                    <Image
                      src={cert.src}
                      alt={cert.label}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="mt-3 text-sm font-medium text-[var(--color-primary)]">{cert.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* IP Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-[var(--color-primary)]">{t.ipTitle}</h2>
              <p className="mt-4 text-[var(--color-text-light)] leading-relaxed">{t.ipDesc}</p>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-[var(--color-border)] p-4 text-center">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">62</div>
                  <div className="text-xs text-[var(--color-text-light)]">{lang === "zh" ? "授权专利" : lang === "ja" ? "特許" : lang === "vi" ? "Bằng sáng chế" : lang === "pt" ? "Patentes" : "Patents"}</div>
                </div>
                <div className="rounded-xl border border-[var(--color-border)] p-4 text-center">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">12</div>
                  <div className="text-xs text-[var(--color-text-light)]">{lang === "zh" ? "外观专利" : lang === "ja" ? "意匠" : lang === "vi" ? "Bằng sáng chế kiểu dáng" : lang === "pt" ? "Patentes de desenho industrial" : "Design Patents"}</div>
                </div>
                <div className="rounded-xl border border-[var(--color-border)] p-4 text-center">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">6</div>
                  <div className="text-xs text-[var(--color-text-light)]">{lang === "zh" ? "软件著作权" : lang === "ja" ? "著作権" : lang === "vi" ? "Phần mềm ©" : lang === "pt" ? "Software ©" : "Software ©"}</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/about/patents-overview.png"
                  alt="R&D Laboratory"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* R&D & Manufacturing Facility */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">{t.facilityTitle}</h2>
          <p className="mt-4 text-center text-[var(--color-text-light)] max-w-2xl mx-auto">{t.facilityDesc}</p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { src: "/images/about/factory/factory-1.png", alt: "Biosafety Cabinet & Lab Equipment" },
              { src: "/images/about/factory/factory-2.png", alt: "Clean Room Laboratory" },
              { src: "/images/about/factory/factory-3.png", alt: "GMP Workshop — Production" },
              { src: "/images/about/factory/factory-5.png", alt: "Manufacturing Floor" },
              { src: "/images/about/factory/factory-6.png", alt: "Quality Control" },
              { src: "/images/about/company-0.png", alt: "Headquarters Building" },
            ].map((photo, i) => (
              <FadeIn key={photo.src} delay={i * 80}>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">{t.teamTitle}</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, i) => (
              <FadeIn key={member.name.en} delay={i * 80}>
                <div className="text-center">
                  <Image
                    src={member.image}
                    alt={member.name[lang]}
                    width={160}
                    height={160}
                    className="rounded-full mx-auto"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-[var(--color-primary)]">
                    {member.name[lang]}
                  </h3>
                  <p className="text-sm font-medium text-[var(--color-accent)]">
                    {member.role[lang]}
                  </p>
                  <p className="mt-1 text-xs text-[var(--color-text-light)]">
                    {member.bg[lang]}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">{t.milestoneTitle}</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-border)] -translate-x-1/2" />

            {t.milestones.map((ms, i) => (
              <FadeIn key={ms.year} delay={i * 60}>
                <div className={`relative flex items-start gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-[var(--color-accent)] border-4 border-white z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}>
                    <span className="inline-block rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-bold text-[var(--color-accent)] mb-1">
                      {ms.year}
                    </span>
                    <p className="text-sm text-[var(--color-text-light)]">{ms.text}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {(() => {
        const aboutFaqs = [
          {
            q: "Who is Ningbo Inarray Biomedical Systems Co., Ltd?",
            a: "Ningbo Inarray Biomedical Systems Co., Ltd (Yinrui Bio) is a high-precision instrument manufacturer founded in June 2018 in Cixi, Zhejiang, China. The company specializes in portable molecular diagnostics, producing the CarryOn Portable PCR Analyzer and microfluidic test chips. The core technical team comprises experts from the Chinese Academy of Sciences, led by founder Dr. Yu Jun, co-founder of BGI (Beijing Genomics Institute).",
          },
          {
            q: "What certifications does Yinrui Bio hold?",
            a: "Yinrui Bio does not hold CE certification for the CarryOn PCR device or test reagent kits. The manufacturing facility maintains ISO 13485 quality management system certification. The company is also recognized as a National High-Tech Enterprise and a Ningbo 'Specialized & Innovative' SME, with a comprehensive IP portfolio of 25 invention patents, 12 design patents, and 6 software copyrights.",
          },
          {
            q: "Does Yinrui Bio offer distribution partnerships?",
            a: "Yes, Yinrui Bio is actively seeking distribution partners worldwide. The company provides support for distributors including marketing materials, technical training, and competitive pricing structures. Interested distributors can contact the company through the website inquiry form or WhatsApp to discuss partnership opportunities in their region.",
          },
          {
            q: "Where is Yinrui Bio's manufacturing facility located?",
            a: "Yinrui Bio's R&D and manufacturing facility is located at the Cixi Industrial Application Technology Research Institute in Cixi, Zhejiang Province, China. The facility features nearly 3,000 square meters of laboratory space, GMP-certified workshops, and comprehensive production equipment for manufacturing the CarryOn device and microfluidic test chips.",
          },
        ];
        return (
          <section className="py-20 bg-[var(--color-bg)]">
            <div className="mx-auto max-w-3xl px-6">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(aboutFaqs)) }}
              />
              <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-8">
                {lang === "zh" ? "常见问题" : lang === "ja" ? "よくある質問" : lang === "vi" ? "Câu hỏi thường gặp" : lang === "pt" ? "Perguntas frequentes" : "Frequently Asked Questions"}
              </h2>
              <div className="space-y-4">
                {aboutFaqs.map((faq, i) => (
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
        );
      })()}

      {/* See Also */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
            {lang === "zh" ? "了解更多" : lang === "ja" ? "詳しく見る" : lang === "vi" ? "Khám phá thêm" : lang === "pt" ? "Explorar mais" : "Explore More"}
          </h2>
          <div className="grid gap-3 sm:grid-cols-4">
            <Link
              href={`/${locale}/products/carryon-device/`}
              className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              {lang === "zh" ? "CarryOn 检测设备" : lang === "ja" ? "CarryOn デバイス" : lang === "vi" ? "Thiết bị CarryOn" : lang === "pt" ? "Dispositivo CarryOn" : "CarryOn Device"}
            </Link>
            <Link
              href={`/${locale}/products/test-chips/`}
              className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              {lang === "zh" ? "检测芯片" : lang === "ja" ? "検査チップ" : lang === "vi" ? "Chip xét nghiệm" : lang === "pt" ? "Chips de Teste" : "Test Chips"}
            </Link>
            <Link
              href={`/${locale}/technology/`}
              className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              {dict.nav.technology}
            </Link>
            <Link
              href={`/${locale}/applications/`}
              className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              {dict.nav.applications}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            <Link
              href={`/${locale}/products/`}
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              {lang === "zh" ? "查看产品" : lang === "ja" ? "製品を見る" : lang === "vi" ? "Xem sản phẩm" : lang === "pt" ? "Ver produtos" : "View Products"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
