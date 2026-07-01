import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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

  return (
    <main>
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
    </main>
  );
}
