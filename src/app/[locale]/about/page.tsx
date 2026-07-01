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
    title: dict.about.title,
    description: dict.about.subtitle,
    alternates: { canonical: `/${locale}/about/` },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  const companyStats = Object.entries(dict.about.company);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">{dict.about.title}</h1>
          <p className="mt-4 text-lg text-white/80">{dict.about.subtitle}</p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="bg-[var(--color-bg)] rounded-2xl aspect-[4/3] flex items-center justify-center text-6xl">
              👨‍🔬
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)]">
                {dict.about.founder.title}
              </h2>
              <p className="mt-4 text-lg text-[var(--color-text-light)] leading-relaxed">
                {dict.about.founder.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyStats.map(([key, value]) => (
              <div
                key={key}
                className="rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] text-center"
              >
                <div className="text-lg font-bold text-[var(--color-primary)]">{value}</div>
              </div>
            ))}
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
