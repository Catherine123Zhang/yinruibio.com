import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";

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
    title: dict.scenarios.title,
    description: dict.meta.siteDescription,
    alternates: { canonical: `/${locale}/applications/` },
  };
}

export default async function ApplicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  const scenarios = dict.scenarios.items.map((item) => ({
    ...item,
    emoji: item.icon === "pet" ? "🐾" : item.icon === "pathogen" ? "🦠" : "🥩",
    details:
      item.icon === "pet"
        ? ["Veterinary Clinics", "Animal Shelters", "Breeding Facilities", "Pet Insurance"]
        : item.icon === "pathogen"
        ? ["Disease Control Centers", "Border Quarantine", "Public Health", "Livestock Stations"]
        : ["Food Regulators", "Customs", "Halal Certification", "Quality Control Labs"],
  }));

  const breadcrumbs = [
    { name: "Home", url: `/${locale}/` },
    { name: dict.scenarios.title, url: `/${locale}/applications/` },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">{dict.scenarios.title}</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 space-y-16">
          {scenarios.map((scenario, i) => (
            <div
              key={i}
              className={`grid gap-12 md:grid-cols-2 items-center ${
                i % 2 === 1 ? "md:[direction:rtl] md:[&>*]:[direction:ltr]" : ""
              }`}
            >
              <div className="bg-[var(--color-bg)] rounded-2xl aspect-video flex items-center justify-center text-7xl">
                {scenario.emoji}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[var(--color-primary)]">
                  {scenario.title}
                </h2>
                <p className="mt-4 text-lg text-[var(--color-text-light)] leading-relaxed">
                  {scenario.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {scenario.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-[var(--color-text)]">
                      <span className="text-[var(--color-green)]">✓</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/${locale}/contact/`}
                  className="mt-6 inline-flex rounded-lg bg-[var(--color-accent)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-accent-light)] transition-colors"
                >
                  {dict.nav.requestDemo}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      {(() => {
        const appFaqs = [
          {
            q: "Which CarryOn test chips should I use for dogs?",
            a: "For canine diagnostics, CarryOn offers three triple-test panels: (1) CDV-CPV-CCoV for routine screening of distemper, parvovirus, and coronavirus; (2) CPIV-CAV-CIV for respiratory symptom differential diagnosis; (3) Babesia-Ehrlichia-Leptospira for tick-borne disease screening. Choose based on the presenting symptoms — gastrointestinal signs suggest panel 1, respiratory signs suggest panel 2, and tick exposure or anemia suggest panel 3.",
          },
          {
            q: "Which test panels are available for cats?",
            a: "CarryOn offers two feline triple-test panels: (1) FHV-FCV-Mycoplasma for upper respiratory infections (sneezing, nasal discharge, conjunctivitis); (2) FeLV-FIV-FPV for shelter intake screening and routine health checks (leukemia, immunodeficiency, panleukopenia). Both panels use a single sample and deliver results in under 60 minutes.",
          },
          {
            q: "How fast are CarryOn PCR test results?",
            a: "All CarryOn test chips deliver PCR-accurate results in under 60 minutes from sample loading. This includes the fully automated nucleic acid extraction, purification, and real-time PCR amplification process. Compare this to 24-72 hours when sending samples to a reference laboratory.",
          },
          {
            q: "Can CarryOn be used for livestock disease testing?",
            a: "Yes. CarryOn offers pathogen detection panels for livestock diseases including African Swine Fever (ASF) and Porcine Reproductive and Respiratory Syndrome (PRRSV/Blue Ear). The portable, battery-powered design makes it ideal for on-farm surveillance and field deployment at checkpoints and slaughterhouses.",
          },
          {
            q: "Is CarryOn suitable for food safety testing?",
            a: "Yes. CarryOn offers meat species identification panels that can detect DNA from beef, pork, chicken, duck, lamb, donkey, and horse in raw or processed meat products. These panels are designed for food safety enforcement, Halal/Kosher compliance verification, customs inspection, and anti-adulteration testing.",
          },
          {
            q: "Can CarryOn be used in animal shelters for intake screening?",
            a: "CarryOn is ideal for shelter intake screening. The canine CDV-CPV-CCoV triple test and feline FeLV-FIV-FPV screening triple test are specifically designed for this use case. The battery-powered, portable design means testing can happen at the intake area, and room-temperature chip storage eliminates cold chain requirements that burden shelter operations.",
          },
        ];
        return (
          <section className="py-20">
            <div className="mx-auto max-w-3xl px-6">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(appFaqs)) }}
              />
              <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-8">
                {locale === "zh" ? "常见问题" : locale === "ja" ? "よくある質問" : "Frequently Asked Questions"}
              </h2>
              <div className="space-y-4">
                {appFaqs.map((faq, i) => (
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
      <section className="py-12 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
            {locale === "zh" ? "相关页面" : locale === "ja" ? "関連ページ" : "See Also"}
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <Link
              href={`/${locale}/products/carryon-device/`}
              className="rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              {locale === "zh" ? "CarryOn 检测设备" : locale === "ja" ? "CarryOn デバイス" : "CarryOn Device"}
            </Link>
            <Link
              href={`/${locale}/products/test-chips/`}
              className="rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              {locale === "zh" ? "检测芯片" : locale === "ja" ? "検査チップ" : "Test Chips"}
            </Link>
            <Link
              href={`/${locale}/technology/`}
              className="rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              {dict.nav.technology}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
