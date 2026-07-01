import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { organizationSchema, breadcrumbSchema } from "@/lib/schema";
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
    companyIntro: "Ningbo Yinrui Biomedical Instruments Co., Ltd was founded in June 2018. As a high-precision instrument manufacturer, the company's core technical team is composed of experts and scholars from the Chinese Academy of Sciences, dedicated to the R&D and manufacturing of advanced molecular detection technologies and equipment in life sciences and precision medicine.",
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
      "Chairman, Ningbo Yinrui Biomedical Instruments Co., Ltd (2018–present)",
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
    certsDesc: "Our products and manufacturing processes meet international standards, ensuring quality and compliance for global markets.",
    certLabels: ["CE — PCR Device", "CE — Test Reagent Kits", "Specialized & Innovative SME"],
    facilityTitle: "R&D & Manufacturing Facility",
    facilityDesc: "Our facility at Cixi Industrial Application Technology Research Institute features nearly 3,000m² of laboratory space, GMP workshops, and comprehensive production equipment.",
    teamTitle: "Management Team",
    milestoneTitle: "Company Milestones",
    milestones: [
      { year: "2018.06", text: "Yinrui Biomedical founded in Cixi, Zhejiang" },
      { year: "2018.12", text: "Digital PCR project selected for Ningbo 'S&T Innovation 2025' biomedical program" },
      { year: "2019.07", text: "Undertook National Key R&D Program 'S&T Winter Olympics' — handheld qPCR project" },
      { year: "2020.01", text: "COVID-19 border control emergency technology research; selected for MOST 'S&T Boosting Economy 2020'" },
      { year: "2021.05", text: "Co-founded Cixi Life Science Innovation Research Institute with Cixi government" },
      { year: "2022.04", text: "ISO13485 certified; CarryOn device & reagents received EU CE certification" },
      { year: "2023.03", text: "Strategic partnership with Zhejiang Orient Gene Biotech" },
      { year: "2024.12", text: "Recognized as National High-Tech Enterprise" },
      { year: "2025.06", text: "Recognized as Ningbo 'Specialized & Innovative' SME" },
    ],
    ipTitle: "Intellectual Property",
    ipDesc: "The company has built a comprehensive IP portfolio through independent R&D and external licensing, covering design, equipment, testing applications, and software copyrights.",
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
    certsDesc: "产品和生产流程符合国际标准，确保全球市场的质量与合规性。",
    certLabels: ["CE 认证 — PCR 设备", "CE 认证 — 检测试剂盒", "专精特新中小企业"],
    facilityTitle: "研发与生产基地",
    facilityDesc: "胤瑞在慈溪产业应用技术研究院拥有近3000平米的产品实验室、GMP车间和完善的生产设备。",
    teamTitle: "管理团队",
    milestoneTitle: "发展历程",
    milestones: [
      { year: "2018.06", text: "宁波胤瑞生物医学仪器公司在慈溪注册成立" },
      { year: "2018.12", text: "数字PCR项目入选宁波「科技创新2025」首批生物医药重大专项" },
      { year: "2019.07", text: "承担国家重点研发计划「科技冬奥」— 手持qPCR项目研发任务" },
      { year: "2020.01", text: "承担「新型冠状病毒口岸防控应急技术研究」，入选科技部「科技助力经济2020」重点专项" },
      { year: "2021.05", text: "于军团队与慈溪市政府共同创办「慈溪生命科学创新研究院」" },
      { year: "2022.04", text: "生产场地通过ISO13485认证；CarryOn仪器、新冠和TB检测试剂盒获欧盟CE认证" },
      { year: "2023.03", text: "与浙江东方基因生物制品股份有限公司签订战略合作协议" },
      { year: "2024.12", text: "获得高新技术企业认定" },
      { year: "2025.06", text: "获得宁波市「专精特新」企业认定" },
    ],
    ipTitle: "知识产权体系",
    ipDesc: "公司基于产品，通过自主研发和对外合作授权，从外观、仪器设备、检测应用及软件著作权等建立完整知识产权池。",
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
    certsDesc: "製品と製造プロセスは国際基準に適合し、グローバル市場の品質とコンプライアンスを保証します。",
    certLabels: ["CE認証 — PCRデバイス", "CE認証 — 検査試薬キット", "専精特新中小企業"],
    facilityTitle: "研究開発・製造拠点",
    facilityDesc: "慈渓産業応用技術研究院に約3,000m²の製品実験室、GMP工場、充実した生産設備を保有しています。",
    teamTitle: "経営チーム",
    milestoneTitle: "沿革",
    milestones: [
      { year: "2018.06", text: "宁波胤瑞生物医学仪器公司、慈渓に設立" },
      { year: "2018.12", text: "デジタルPCRプロジェクトが寧波「科技創新2025」に選定" },
      { year: "2019.07", text: "国家重点研究開発計画「科技冬季五輪」ハンドヘルドqPCR研究任務を担当" },
      { year: "2020.01", text: "新型コロナウイルス国境管理緊急技術研究を担当" },
      { year: "2021.05", text: "慈渓市政府と共同で慈渓ライフサイエンスイノベーション研究院を設立" },
      { year: "2022.04", text: "ISO13485認証取得；CarryOn機器・試薬キットがEU CE認証取得" },
      { year: "2023.03", text: "浙江東方遺伝子生物製品と戦略的提携契約を締結" },
      { year: "2024.12", text: "国家ハイテク企業認定を取得" },
      { year: "2025.06", text: "寧波市「専精特新」企業認定を取得" },
    ],
    ipTitle: "知的財産",
    ipDesc: "自主研究開発と外部ライセンスを通じて、外観、機器設備、検査応用、ソフトウェア著作権にわたる完全なIP体系を構築しています。",
  },
};

const teamMembers = [
  {
    image: "/images/about/team/founder-0.png",
    name: { en: "Dr. Yu Jun", zh: "于军", ja: "于軍" },
    role: { en: "Chairman & Founder", zh: "董事长 / 创始人", ja: "会長・創業者" },
    bg: { en: "NYU Biomedical PhD · BGI Co-founder", zh: "NYU 生物医学博士 · 华大基因联合创始人", ja: "NYU生物医学博士 · BGI共同創設者" },
  },
  {
    image: "/images/about/team/team-1.png",
    name: { en: "Zhang Lei", zh: "张雷", ja: "張雷" },
    role: { en: "CEO", zh: "CEO", ja: "CEO" },
    bg: { en: "MMD from Denmark · Secretary-General of Nordic Chinese Association", zh: "丹麦MMD学位 · 北欧华人联合会秘书长", ja: "デンマークMMD · 北欧華人連合会事務局長" },
  },
  {
    image: "/images/about/team/team-2.png",
    name: { en: "Sui Shuo", zh: "隋硕", ja: "隋碩" },
    role: { en: "VP — R&D", zh: "副总裁", ja: "副社長" },
    bg: { en: "PhD, Beijing Institute of Genomics, CAS · Postdoc, Institute of Semiconductors, CAS", zh: "中科院北京基因组所博士 · 中科院半导体所博士后", ja: "中国科学院北京ゲノム研究所博士" },
  },
  {
    image: "/images/about/team/team-3.png",
    name: { en: "Liu Yibo", zh: "刘一博", ja: "劉一博" },
    role: { en: "Production Director", zh: "生产总监", ja: "生産ディレクター" },
    bg: { en: "MSc Cell Biology, China Medical University", zh: "中国医科大学细胞生物学硕士", ja: "中国医科大学細胞生物学修士" },
  },
  {
    image: "/images/about/team/team-4.png",
    name: { en: "Zhu Dawei", zh: "朱大维", ja: "朱大維" },
    role: { en: "VP — Operations", zh: "副总裁", ja: "副社長" },
    bg: { en: "Former VP, Shandong Greenlight Cable Group · Dell & GDB veteran", zh: "山东绿灯行电缆集团原副总裁", ja: "山東緑灯行ケーブルグループ元副社長" },
  },
  {
    image: "/images/about/team/team-5.png",
    name: { en: "Guo Haiyan", zh: "郭海燕", ja: "郭海燕" },
    role: { en: "R&D Director — Reagents", zh: "试剂研发总监", ja: "試薬研究開発ディレクター" },
    bg: { en: "PhD, Beijing Institute of Genomics, CAS · Former Assoc. Professor", zh: "中科院北京基因组研究所博士 · 原沈阳药科大学副教授", ja: "中国科学院北京ゲノム研究所博士" },
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
    { value: "69", label: { en: "Employees", zh: "员工", ja: "従業員" } },
    { value: "6", label: { en: "PhDs", zh: "博士", ja: "博士" } },
    { value: "12", label: { en: "Masters", zh: "硕士", ja: "修士" } },
    { value: "62", label: { en: "Patents", zh: "授权专利", ja: "特許" } },
    { value: "12", label: { en: "Design Patents", zh: "外观专利", ja: "意匠特許" } },
    { value: "6", label: { en: "Software Copyrights", zh: "软件著作权", ja: "ソフトウェア著作権" } },
    { value: "3,000m²", label: { en: "Lab + GMP Workshop", zh: "实验室 + GMP 车间", ja: "ラボ + GMP工場" } },
    { value: "2018", label: { en: "Founded", zh: "成立", ja: "設立" } },
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
                  {lang === "zh" ? "履历" : lang === "ja" ? "経歴" : "Career"}
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
                  {lang === "zh" ? "荣誉与奖项" : lang === "ja" ? "受賞歴" : "Honors & Awards"}
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
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { src: "/images/about/certs/cert-1.jpg", label: t.certLabels[0] },
              { src: "/images/about/certs/cert-2.jpg", label: t.certLabels[1] },
              { src: "/images/about/certs/cert-3.png", label: t.certLabels[2] },
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
                  <div className="text-xs text-[var(--color-text-light)]">{lang === "zh" ? "授权专利" : lang === "ja" ? "特許" : "Patents"}</div>
                </div>
                <div className="rounded-xl border border-[var(--color-border)] p-4 text-center">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">12</div>
                  <div className="text-xs text-[var(--color-text-light)]">{lang === "zh" ? "外观专利" : lang === "ja" ? "意匠" : "Design Patents"}</div>
                </div>
                <div className="rounded-xl border border-[var(--color-border)] p-4 text-center">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">6</div>
                  <div className="text-xs text-[var(--color-text-light)]">{lang === "zh" ? "软件著作权" : lang === "ja" ? "著作権" : "Software ©"}</div>
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
              {lang === "zh" ? "查看产品" : lang === "ja" ? "製品を見る" : "View Products"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
