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
    title: dict.technology.title,
    description: dict.technology.subtitle,
    alternates: { canonical: `/${locale}/technology/` },
  };
}

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  const breadcrumbs = [
    { name: dict.nav.home, url: `/${locale}/` },
    { name: dict.nav.technology, url: `/${locale}/technology/` },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">{dict.technology.title}</h1>
          <p className="mt-4 text-lg text-white/80">{dict.technology.subtitle}</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">
            {dict.technology.howItWorks.title}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {dict.technology.howItWorks.steps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  {step.description}
                </p>
                {i < 3 && (
                  <div className="hidden md:block mt-4 text-[var(--color-accent)] text-2xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-12">
            {dict.technology.comparison.title}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  {dict.technology.comparison.headers.map((h) => (
                    <th key={h} className="px-6 py-4 text-left text-sm font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dict.technology.comparison.rows.map((row, i) => (
                  <tr key={i} className="border-t border-[var(--color-border)] even:bg-[var(--color-bg)]">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-6 py-4 text-sm ${
                          j === 0
                            ? "font-medium text-[var(--color-primary)]"
                            : j === 1
                            ? "font-semibold text-[var(--color-green)]"
                            : "text-[var(--color-text-light)]"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {(() => {
        const techFaqs = [
          {
            q: "What is microfluidic PCR technology?",
            a: "Microfluidic PCR technology miniaturizes the entire PCR (Polymerase Chain Reaction) workflow onto a small chip with micro-scale channels. The chip integrates nucleic acid extraction, purification, and real-time fluorescence PCR amplification into a single sealed device. Fluid movement is precisely controlled through microchannels, enabling rapid thermal cycling and efficient reagent use in a fraction of the space required by traditional PCR systems.",
          },
          {
            q: "How sensitive is the CarryOn microfluidic PCR system?",
            a: "The CarryOn system achieves a detection sensitivity of 50 copies per test with a reproducibility of CV ≤ 3%. This means it can reliably detect as few as 50 copies of target DNA or RNA in a sample, making it comparable in sensitivity to laboratory-grade PCR instruments that typically detect 10-100 copies.",
          },
          {
            q: "Has the CarryOn PCR technology been clinically validated?",
            a: "Yes. The CarryOn platform and its test chips have undergone clinical validation studies demonstrating sensitivity and specificity comparable to laboratory-grade PCR systems. The technology was originally developed through National Key R&D Programs including the 'S&T Winter Olympics' handheld qPCR project, and the system holds CE certification for both the device and reagent kits.",
          },
          {
            q: "How does microfluidic PCR compare to traditional lab PCR?",
            a: "Microfluidic PCR offers comparable accuracy (PCR-level sensitivity and specificity) with significant advantages: results in under 60 minutes vs. 24-72 hours for lab PCR, room temperature reagent storage vs. cold chain requirements, fully automated operation vs. trained technician requirement, and handheld portability vs. benchtop laboratory equipment. The tradeoff is that microfluidic systems typically process one sample per chip, while lab systems can batch multiple samples.",
          },
          {
            q: "Why does the CarryOn system use a closed chip design?",
            a: "The closed-system microfluidic chip design serves three critical purposes: (1) It eliminates cross-contamination between samples since all reagents and reactions are sealed inside the chip; (2) It removes the need for manual sample preparation steps, reducing human error; (3) It makes the system safe to operate without a dedicated laboratory environment or biosafety cabinet, as potentially infectious materials remain sealed throughout the process.",
          },
          {
            q: "What fluorescence detection channels does the CarryOn use?",
            a: "The CarryOn features a 5-color fluorescence detection system, enabling multiplex PCR testing — the ability to detect multiple target pathogens simultaneously in a single test. This is how triple and quadruple test panels (e.g., CDV-CPV-CCoV or beef-pork-chicken-duck) can produce results from a single sample and chip.",
          },
        ];
        return (
          <section className="py-20 bg-[var(--color-bg)]">
            <div className="mx-auto max-w-3xl px-6">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(techFaqs)) }}
              />
              <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] mb-8">
                {locale === "zh" ? "常见问题" : locale === "ja" ? "よくある質問" : "Frequently Asked Questions"}
              </h2>
              <div className="space-y-4">
                {techFaqs.map((faq, i) => (
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
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
            {locale === "zh" ? "相关页面" : locale === "ja" ? "関連ページ" : "See Also"}
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <Link
              href={`/${locale}/products/carryon-device/`}
              className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              {locale === "zh" ? "CarryOn 检测设备" : locale === "ja" ? "CarryOn デバイス" : "CarryOn Device"}
            </Link>
            <Link
              href={`/${locale}/products/test-chips/`}
              className="rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              {locale === "zh" ? "检测芯片" : locale === "ja" ? "検査チップ" : "Test Chips"}
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
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)]">{dict.cta.title}</h2>
          <a
            href={`/${locale}/contact/`}
            className="mt-8 inline-flex rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-base font-semibold text-white hover:bg-[var(--color-accent-light)] transition-colors"
          >
            {dict.cta.button}
          </a>
        </div>
      </section>
    </main>
  );
}
