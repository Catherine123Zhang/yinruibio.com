export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ningbo Yinrui Biomedical Instruments Co., Ltd",
    alternateName: ["Yinrui Bio", "胤瑞生物"],
    url: "https://yinruibio.com",
    logo: "https://yinruibio.com/images/logo.png",
    description:
      "Manufacturer of portable PCR diagnostic devices using microfluidic chip technology. Specializing in veterinary diagnostics, pathogen detection, and meat species identification.",
    foundingDate: "2018",
    founders: [
      {
        "@type": "Person",
        name: "Dr. Yu Jun",
        jobTitle: "Founder & CEO",
        description: "Co-founder of BGI (Beijing Genomics Institute), NYU Biomedical PhD",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cixi",
      addressRegion: "Zhejiang",
      addressCountry: "CN",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 69,
    },
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", credentialCategory: "ISO13485" },
      { "@type": "EducationalOccupationalCredential", credentialCategory: "CE Certification" },
    ],
    sameAs: [],
    knowsAbout: [
      'portable PCR analyzer',
      'microfluidic chip technology',
      'veterinary diagnostics',
      'nucleic acid amplification',
      'pathogen detection',
      'meat species identification',
      'point-of-care molecular diagnostics',
      'real-time fluorescence PCR',
    ],
    makesOffer: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'CarryOn Portable PCR Analyzer', url: 'https://yinruibio.com/en/products/carryon-device/' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Canine Diagnostic Test Chips', url: 'https://yinruibio.com/en/products/test-chips/' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Feline Diagnostic Test Chips', url: 'https://yinruibio.com/en/products/test-chips/' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Pathogen Detection Test Chips', url: 'https://yinruibio.com/en/products/test-chips/' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Meat Species Identification Chips', url: 'https://yinruibio.com/en/products/test-chips/' } },
    ],
  };
}

export function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Product", "MedicalDevice"],
    name: "CarryOn Portable PCR Platform",
    description:
      "Handheld, battery-powered real-time fluorescence PCR analyzer with microfluidic chip technology. PCR-accurate results in 40 minutes with no lab required.",
    brand: {
      "@type": "Brand",
      name: "CarryOn",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Ningbo Yinrui Biomedical Instruments Co., Ltd",
    },
    category: "Veterinary Diagnostic Equipment",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Technology", value: "Real-time Fluorescence PCR" },
      { "@type": "PropertyValue", name: "Time to Result", value: "40-60 minutes" },
      { "@type": "PropertyValue", name: "Automation", value: "Fully Automated" },
      { "@type": "PropertyValue", name: "Reagent Storage", value: "Room Temperature" },
      { "@type": "PropertyValue", name: "Weight", value: "< 1 kg" },
      { "@type": "PropertyValue", name: "Power", value: "Battery Powered" },
    ],
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://yinruibio.com${item.url}`,
    })),
  };
}
