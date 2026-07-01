import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { faqSchema } from "@/lib/schema";

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
    title: dict.faq.title,
    description: `${dict.faq.title} — ${dict.meta.siteName}`,
    alternates: { canonical: `/${locale}/faq/` },
  };
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(dict.faq.items)) }}
      />

      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">{dict.faq.title}</h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-6">
            {dict.faq.items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-sm"
              >
                <h2 className="text-lg font-semibold text-[var(--color-primary)]">
                  {item.q}
                </h2>
                <p className="mt-3 text-[var(--color-text-light)] leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-bg)]">
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
