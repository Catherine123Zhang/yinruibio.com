import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <main>
      {/* Hero Section — Split layout: text left, product right */}
      <section className="relative bg-[var(--color-primary)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-accent)] opacity-90" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Left: Text */}
            <div>
              <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm border border-white/20 mb-6">
                {dict.hero.badge}
              </span>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
                {dict.hero.title}
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
                {dict.hero.subtitle}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={`/${locale}/contact/`}
                  className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-[var(--color-accent-light)] transition-colors"
                >
                  {dict.hero.cta}
                </a>
                <a
                  href={`/${locale}/technology/`}
                  className="inline-flex items-center justify-center rounded-lg bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                >
                  {dict.hero.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Right: Product Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow effect behind device */}
                <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-75" />
                <Image
                  src="/images/products/carryon-device.png"
                  alt="CarryOn Portable PCR Analyzer"
                  width={500}
                  height={500}
                  className="relative object-contain drop-shadow-2xl max-h-[450px] w-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] sm:text-4xl">
            {dict.painPoints.title}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {dict.painPoints.items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-8 shadow-sm border border-[var(--color-border)] hover:shadow-md transition-shadow"
              >
                <div className="text-3xl font-bold text-red-500 mb-3">
                  {item.problem}
                </div>
                <p className="text-[var(--color-text-light)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] sm:text-4xl">
            {dict.advantages.title}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {dict.advantages.items.map((item, i) => (
              <div
                key={i}
                className="text-center rounded-xl bg-white p-8 shadow-sm border border-[var(--color-border)] hover:shadow-md transition-shadow"
              >
                <div className="text-4xl font-bold text-[var(--color-accent)] mb-2">
                  {item.stat}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-light)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)] sm:text-4xl">
            {dict.scenarios.title}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {dict.scenarios.items.map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-8 shadow-sm border border-[var(--color-border)] hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center mb-4 text-2xl">
                  {item.icon === "pet" ? "🐾" : item.icon === "pathogen" ? "🦠" : "🥩"}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-light)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center text-white">
            {Object.values(dict.stats).map((stat, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl font-bold">{stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
            {dict.cta.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-light)]">
            {dict.cta.subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${locale}/contact/`}
              className="inline-flex items-center justify-center rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-[var(--color-accent-light)] transition-colors"
            >
              {dict.cta.button}
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border-2 border-[var(--color-primary)] px-8 py-3.5 text-base font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              {dict.cta.downloadCatalog}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
