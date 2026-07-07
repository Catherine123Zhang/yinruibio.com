import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { breadcrumbSchema } from "@/lib/schema";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";

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
  return {
    title: "Blog — Veterinary PCR Diagnostics Insights",
    description:
      "Expert articles on portable PCR technology, veterinary diagnostics comparisons, clinical guides, and point-of-care testing best practices for veterinary clinics.",
    alternates: { canonical: `/${locale}/blog/` },
  };
}

export default async function BlogListingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = await getDictionary(locale as Locale);

  const breadcrumbs = [
    { name: dict.nav.home, url: `/${locale}/` },
    { name: dict.nav.blog, url: `/${locale}/blog/` },
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Veterinary Diagnostics Blog
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Expert insights on portable PCR technology, veterinary diagnostics,
            and point-of-care testing for modern veterinary practices.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}/`}
                className="group block rounded-xl bg-white shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all overflow-hidden"
              >
                {/* Cover Image */}
                <div className="relative h-48 bg-[var(--color-bg)] overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-[var(--color-accent)]/90 px-3 py-1 text-xs font-semibold text-white">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[var(--color-text-light)] mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>|</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-3">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-[var(--color-text-light)] line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-[var(--color-accent)]">
                    Read Article
                    <svg
                      className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
            Explore Our Products
          </h2>
          <div className="grid gap-3 sm:grid-cols-4">
            <Link
              href={`/${locale}/products/carryon-device/`}
              className="rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              CarryOn Device
            </Link>
            <Link
              href={`/${locale}/products/test-chips/`}
              className="rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              Test Chips
            </Link>
            <Link
              href={`/${locale}/technology/`}
              className="rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              {dict.nav.technology}
            </Link>
            <Link
              href={`/${locale}/faq/`}
              className="rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              {dict.nav.faq}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)]">
            {dict.cta.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-light)]">
            {dict.cta.subtitle}
          </p>
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
