import type { Dictionary } from "./en";

const zh: Dictionary = {
  meta: {
    siteName: "胤瑞生物 — 便携式PCR检测平台",
    siteDescription:
      "掌心实验室，PCR级精准检测。40分钟出结果，随时随地，无需培训。宠物诊断、病原体检测、肉源溯源鉴定。",
  },
  nav: {
    home: "首页",
    products: "产品中心",
    technology: "核心技术",
    applications: "应用场景",
    about: "关于我们",
    blog: "知识中心",
    faq: "常见问题",
    contact: "联系我们",
    requestDemo: "申请演示",
  },
  hero: {
    title: "掌心实验室，PCR级精准诊断",
    subtitle: "40分钟出结果 · 无需实验室 · 无需培训 · 随时随地",
    cta: "申请演示",
    ctaSecondary: "了解工作原理",
    badge: "掌心实验室",
  },
  painPoints: {
    title: "传统诊断的痛点",
    items: [
      {
        problem: "等待48-72小时",
        description: "外送实验室检测，等待数天才能拿到结果，紧急情况下无法接受。",
      },
      {
        problem: "设备成本$50,000+",
        description: "实验室级PCR设备价格昂贵，小型诊所无法负担。",
      },
      {
        problem: "需要专业人员操作",
        description: "传统PCR需要专业技术人员，大多数诊所没有这类人才。",
      },
    ],
  },
  advantages: {
    title: "为什么选择CarryOn",
    items: [
      {
        title: "真正便携",
        description: "手持设计，电池驱动。诊所、收容所、野外均可使用。",
        stat: "掌心大小",
      },
      {
        title: "PCR级精度",
        description: "实时荧光PCR — 分子诊断的金标准。",
        stat: "99.2%",
      },
      {
        title: "零门槛操作",
        description: "样本进、结果出。无需培训，无需实验室环境。",
        stat: "40分钟",
      },
    ],
  },
  scenarios: {
    title: "三大应用场景",
    items: [
      {
        title: "伴侣动物诊断",
        description:
          "快速PCR检测犬瘟热、细小病毒、猫传腹(FIP)等。40分钟即时出结果。",
        icon: "pet",
      },
      {
        title: "病原体检测",
        description:
          "现场部署检测流感、非洲猪瘟、结核杆菌等病原体。适合疾控、口岸、防疫站。",
        icon: "pathogen",
      },
      {
        title: "肉源溯源鉴定",
        description:
          "现场DNA检测鉴定牛、猪、羊、马等肉源。40分钟检测掺假，取代传统实验室3-5天。",
        icon: "meat",
      },
    ],
  },
  stats: {
    patents: "62项专利",
    certifications: "CE & ISO13485",
    resultTime: "40分钟出结果",
    labSpace: "3,000平方米实验室",
  },
  cta: {
    title: "将PCR检测带到您的诊所",
    subtitle: "全球30+国家的兽医诊所正在使用CarryOn进行快速、精准的分子诊断。",
    button: "申请免费演示",
    downloadCatalog: "下载产品手册",
  },
  footer: {
    company: "宁波胤瑞生物医学仪器有限责任公司",
    tagline: "掌心实验室 — 随时、随地、随手检测",
    products: "产品中心",
    support: "技术支持",
    legal: "法律条款",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    allRightsReserved: "版权所有",
  },
  contact: {
    title: "联系我们",
    subtitle: "产品咨询、申请演示或经销商合作，欢迎联系我们。",
    form: {
      name: "姓名",
      email: "电子邮箱",
      company: "公司/机构名称",
      country: "国家/地区",
      organizationType: "机构类型",
      orgTypes: {
        clinic: "兽医诊所",
        shelter: "动物收容所",
        breeding: "繁殖机构",
        laboratory: "实验室",
        distributor: "经销商",
        government: "政府机构",
        other: "其他",
      },
      interests: "感兴趣的检测项目",
      interestOptions: {
        parvo: "犬细小病毒",
        distemper: "犬瘟热(CDV)",
        fip: "猫传染性腹膜炎(FIP)",
        felv: "猫白血病(FeLV/FIV)",
        brucella: "布鲁氏菌",
        asf: "非洲猪瘟",
        meatId: "肉源鉴定",
        other: "其他",
      },
      message: "留言（选填）",
      submit: "提交询盘",
      success: "感谢您的咨询！我们将在24小时内回复。",
    },
  },
  products: {
    title: "CarryOn便携式PCR检测平台",
    subtitle: "一站式即时分子诊断解决方案",
    device: {
      title: "CarryOn检测设备",
      description:
        "手持式、电池驱动的实时荧光PCR分析仪，搭载微流控芯片技术。",
    },
    chips: {
      title: "检测芯片",
      description:
        "一次性微流控芯片，全自动样本到结果检测。室温存储，无需冷链。",
      canine: "犬类检测",
      feline: "猫类检测",
    },
    specs: {
      title: "技术参数",
      items: {
        technology: "实时荧光PCR",
        time: "40-60分钟",
        automation: "全自动（样本进→结果出）",
        storage: "室温存储（无需冷链）",
        chip: "一次性微流控芯片",
        contamination: "封闭系统 — 零交叉污染",
        power: "电池供电",
        portability: "手持式，< 1 kg",
      },
    },
  },
  technology: {
    title: "微流控PCR技术",
    subtitle: "掌心分子诊断背后的科学",
    howItWorks: {
      title: "工作原理",
      steps: [
        { title: "加载样本", description: "将样本添加到微流控芯片中。" },
        { title: "插入芯片", description: "将芯片放入CarryOn设备。" },
        { title: "自动处理", description: "自动完成提取、纯化和PCR扩增。" },
        { title: "读取结果", description: "40分钟获得PCR级精准结果。" },
      ],
    },
    comparison: {
      title: "CarryOn vs 传统检测方法",
      headers: ["特性", "CarryOn", "实验室PCR", "快速抗原检测"],
      rows: [
        ["出结果时间", "40分钟", "24-72小时", "10-15分钟"],
        ["准确度", "PCR级", "PCR级", "较低"],
        ["设备成本", "$$", "$$$$", "$"],
        ["培训要求", "无需培训", "需要专业培训", "少量培训"],
        ["实验室环境", "不需要", "必须", "不需要"],
        ["试剂存储", "室温", "冷链", "室温"],
      ],
    },
  },
  about: {
    title: "关于胤瑞生物",
    subtitle: "自2018年起，引领便携式分子诊断创新",
    founder: {
      title: "行业先驱创立",
      description:
        "创始人于军博士，华大基因联合创始人、纽约大学生物医学博士，将数十年分子诊断经验带入胤瑞。",
    },
    company: {
      employees: "69名员工",
      phds: "6名博士、12名硕士",
      patents: "62项专利",
      designPatents: "12项外观设计专利",
      softwareCopyrights: "6项软件著作权",
      labSpace: "3,000平方米实验室+GMP车间",
      location: "浙江省慈溪市",
      certifications: "ISO13485、CE认证、国家高新技术企业、专精特新企业",
    },
  },
  faq: {
    title: "常见问题",
    items: [
      {
        q: "CarryOn PCR系统的准确率如何？",
        a: "CarryOn采用实时荧光PCR技术，这是分子诊断的金标准。临床验证显示其灵敏度和特异性与实验室级PCR系统相当（>99%）。",
      },
      {
        q: "需要专业培训才能使用吗？",
        a: "不需要。CarryOn设计为人人可用——只需将样本装入芯片，插入设备，等待40分钟即可获得结果。无需任何实验室培训。",
      },
      {
        q: "检测芯片如何存储？",
        a: "所有CarryOn检测芯片均可室温存储，无需冷藏或冷链运输，非常适合现场使用和偏远地区诊所。",
      },
      {
        q: "CarryOn可以检测哪些疾病？",
        a: "目前包括犬类（细小病毒、犬瘟热、布鲁氏菌）和猫类（FIP、FeLV/FIV）疾病检测，以及病原体检测和肉源鉴定。",
      },
      {
        q: "CarryOn有CE认证吗？",
        a: "有。CarryOn设备和检测芯片均持有CE认证。公司同时维护ISO13485质量管理体系认证。",
      },
      {
        q: "可以成为经销商吗？",
        a: "可以，我们正在全球范围内积极寻找经销合作伙伴。请通过询盘表单或WhatsApp联系我们，讨论合作机会。",
      },
    ],
  },
};

export default zh;
