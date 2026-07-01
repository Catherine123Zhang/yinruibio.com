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

  return (
    <main>
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
