import type { Dictionary } from "./en";

const ja: Dictionary = {
  meta: {
    siteName: "胤瑞バイオ — ポータブルPCRプラットフォーム",
    siteDescription:
      "手のひらサイズのラボ。PCRレベルの精度で40分で結果。いつでも、どこでも、誰でも。獣医診断・病原体検出・食肉種鑑定。",
  },
  nav: {
    home: "ホーム",
    products: "製品",
    technology: "技術",
    applications: "用途",
    about: "会社概要",
    blog: "ブログ",
    faq: "よくある質問",
    contact: "お問い合わせ",
    requestDemo: "デモ申請",
  },
  hero: {
    title: "手のひらサイズのPCR精密診断",
    subtitle: "40分で結果 · ラボ不要 · 研修不要 · いつでもどこでも",
    cta: "デモを申請",
    ctaSecondary: "仕組みを見る",
    badge: "手のひらラボ",
  },
  painPoints: {
    title: "従来の診断の課題",
    items: [
      {
        problem: "48〜72時間の待ち時間",
        description: "外部ラボへの送付により、結果を得るまで数日かかります。",
      },
      {
        problem: "50,000ドル以上の機器費用",
        description: "ラボグレードのPCR機器は小規模クリニックには高すぎます。",
      },
      {
        problem: "専門スタッフが必要",
        description: "従来のPCRには専門技術者が必要で、多くのクリニックでは確保困難です。",
      },
    ],
  },
  advantages: {
    title: "CarryOnが選ばれる理由",
    items: [
      {
        title: "真のポータブル",
        description: "ハンドヘルド・バッテリー駆動。クリニック、シェルター、フィールドで使用可能。",
        stat: "手のひらサイズ",
      },
      {
        title: "PCRレベルの精度",
        description: "リアルタイム蛍光PCR — 分子診断のゴールドスタンダード。",
        stat: "99.2%",
      },
      {
        title: "ゼロ学習コスト",
        description: "サンプルを入れて結果を待つだけ。研修もラボ環境も不要。",
        stat: "40分",
      },
    ],
  },
  scenarios: {
    title: "3つの強力なアプリケーション",
    items: [
      {
        title: "コンパニオンアニマル診断",
        description:
          "パルボ、FIP、ジステンパー、CDVなどの迅速PCR検査。ポイントオブケアで40分で結果。",
        icon: "pet",
      },
      {
        title: "病原体検出",
        description:
          "インフルエンザ、アフリカ豚熱、結核菌などの現場検出。検疫・防疫に最適。",
        icon: "pathogen",
      },
      {
        title: "食肉種鑑定",
        description:
          "牛・豚・羊・馬などの食肉DNA検査。40分で偽装を検出。従来のラボ検査（3〜5日）を置き換え。",
        icon: "meat",
      },
    ],
  },
  stats: {
    patents: "62件の特許",
    certifications: "CE & ISO13485",
    resultTime: "40分で結果",
    labSpace: "3,000m² ラボ＆GMP",
  },
  cta: {
    title: "PCR検査をあなたのクリニックに",
    subtitle: "30カ国以上の動物病院がCarryOnを迅速・正確な分子診断に活用しています。",
    button: "無料デモを申請",
    downloadCatalog: "カタログダウンロード",
  },
  footer: {
    company: "寧波胤瑞生物医学機器有限公司",
    tagline: "手のひらラボ — いつでも、どこでも、誰でも",
    products: "製品",
    support: "サポート",
    legal: "法的情報",
    privacyPolicy: "プライバシーポリシー",
    termsOfService: "利用規約",
    allRightsReserved: "無断転載禁止",
  },
  contact: {
    title: "お問い合わせ",
    subtitle: "製品に関するお問い合わせ、デモ申請、販売代理店の提携をお待ちしております。",
    form: {
      name: "氏名",
      email: "メールアドレス",
      company: "会社名 / 機関名",
      country: "国 / 地域",
      organizationType: "機関タイプ",
      orgTypes: {
        clinic: "動物病院",
        shelter: "動物保護施設",
        breeding: "繁殖施設",
        laboratory: "検査ラボ",
        distributor: "販売代理店",
        government: "政府機関",
        other: "その他",
      },
      interests: "関心のある検査",
      interestOptions: {
        parvo: "犬パルボウイルス",
        distemper: "犬ジステンパー(CDV)",
        fip: "猫伝染性腹膜炎(FIP)",
        felv: "猫白血病(FeLV/FIV)",
        brucella: "ブルセラ症",
        asf: "アフリカ豚熱",
        meatId: "食肉種鑑定",
        other: "その他",
      },
      message: "メッセージ（任意）",
      submit: "お問い合わせを送信",
      success: "ありがとうございます！24時間以内にご返信いたします。",
    },
  },
  products: {
    title: "CarryOnポータブルPCRプラットフォーム",
    subtitle: "ワンストップのポイントオブケア分子診断ソリューション",
    device: {
      title: "CarryOn検出デバイス",
      description:
        "ハンドヘルド・バッテリー駆動のリアルタイム蛍光PCRアナライザー。マイクロ流体チップ技術搭載。",
    },
    chips: {
      title: "検査チップ",
      description:
        "使い捨てマイクロ流体チップ。サンプルから結果まで全自動。室温保存、コールドチェーン不要。",
      canine: "犬用パネル",
      feline: "猫用パネル",
    },
    specs: {
      title: "技術仕様",
      items: {
        technology: "リアルタイム蛍光PCR",
        time: "40〜60分",
        automation: "全自動（サンプルイン→結果アウト）",
        storage: "室温保存（コールドチェーン不要）",
        chip: "使い捨てマイクロ流体チップ",
        contamination: "密閉システム — 交差汚染ゼロ",
        power: "バッテリー駆動",
        portability: "ハンドヘルド、1kg未満",
      },
    },
  },
  technology: {
    title: "マイクロ流体PCR技術",
    subtitle: "手のひらサイズの分子診断を支える科学",
    howItWorks: {
      title: "動作原理",
      steps: [
        { title: "サンプル投入", description: "マイクロ流体チップにサンプルを加えます。" },
        { title: "チップ挿入", description: "チップをCarryOnデバイスに装着します。" },
        { title: "自動処理", description: "抽出・精製・PCR増幅を自動で実行します。" },
        { title: "結果確認", description: "40分でPCRレベルの精度の結果を取得します。" },
      ],
    },
    comparison: {
      title: "CarryOn vs 従来の検査方法",
      headers: ["特徴", "CarryOn", "ラボPCR", "迅速抗原検査"],
      rows: [
        ["結果までの時間", "40分", "24〜72時間", "10〜15分"],
        ["精度", "PCRレベル", "PCRレベル", "やや低い"],
        ["機器コスト", "$$", "$$$$", "$"],
        ["研修の必要性", "不要", "必要", "最小限"],
        ["ラボ環境", "不要", "必須", "不要"],
        ["試薬保存", "室温", "コールドチェーン", "室温"],
      ],
    },
  },
  about: {
    title: "胤瑞バイオメディカルについて",
    subtitle: "2018年創業、ポータブル分子診断のパイオニア",
    founder: {
      title: "業界のパイオニアが設立",
      description:
        "創業者の于軍博士は、BGI（華大基因）共同創業者、ニューヨーク大学生物医学博士。数十年の分子診断の専門知識を胤瑞に注いでいます。",
    },
    company: {
      employees: "従業員69名",
      phds: "博士6名、修士12名",
      patents: "特許62件",
      designPatents: "意匠権12件",
      softwareCopyrights: "ソフトウェア著作権6件",
      labSpace: "3,000m² ラボ＋GMP工場",
      location: "中国浙江省慈溪市",
      certifications: "ISO13485、CE認証、国家ハイテク企業、専精特新企業",
    },
  },
  faq: {
    title: "よくある質問",
    items: [
      {
        q: "CarryOn PCRシステムの精度は？",
        a: "CarryOnはリアルタイム蛍光PCRを使用しており、分子診断のゴールドスタンダードです。臨床検証では、ラボグレードPCRシステムと同等の感度・特異度（99%以上）を示しています。",
      },
      {
        q: "使用に特別な研修は必要ですか？",
        a: "いいえ。CarryOnは誰でも使えるよう設計されています。サンプルをチップに入れ、デバイスに挿入し、40分待つだけ。ラボ研修は不要です。",
      },
      {
        q: "検査チップはどう保存しますか？",
        a: "CarryOnの検査チップはすべて室温保存可能です。冷蔵やコールドチェーンは不要で、現場使用や遠隔地のクリニックに最適です。",
      },
      {
        q: "どんな疾患を検出できますか？",
        a: "現在、犬用（パルボウイルス、ジステンパー、ブルセラ）、猫用（FIP、FeLV/FIV）、病原体検出パネル、食肉種鑑定パネルを提供しています。",
      },
      {
        q: "CE認証を取得していますか？",
        a: "はい。CarryOnデバイスと検査チップの両方がCE認証を取得しています。ISO13485品質管理システム認証も維持しています。",
      },
      {
        q: "販売代理店になれますか？",
        a: "はい、世界中で販売パートナーを積極的に募集しています。お問い合わせフォームまたはWhatsAppからご連絡ください。",
      },
    ],
  },
};

export default ja;
