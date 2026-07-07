import { locales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, getBlogPost, getAllBlogSlugs } from "@/data/blog";
import InquiryFormCompact from "@/components/InquiryFormCompact";
import CatalogButton from "@/components/CatalogButton";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/${locale}/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `https://yinruibio.com/${locale}/blog/${slug}/`,
      images: [
        {
          url: `https://yinruibio.com${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

/* Simple markdown-to-JSX renderer for blog content */
function renderMarkdown(content: string, locale: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableHeaders: string[] = [];
  let tableRows: string[][] = [];
  let inList = false;
  let listItems: React.ReactNode[] = [];
  let listType: "ul" | "ol" = "ul";

  function flushList() {
    if (inList && listItems.length > 0) {
      if (listType === "ol") {
        elements.push(
          <ol key={`ol-${elements.length}`} className="list-decimal list-inside space-y-2 my-4 text-[var(--color-text-light)]">
            {listItems}
          </ol>
        );
      } else {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-2 my-4 text-[var(--color-text-light)]">
            {listItems}
          </ul>
        );
      }
      listItems = [];
      inList = false;
    }
  }

  function flushTable() {
    if (inTable && tableHeaders.length > 0) {
      elements.push(
        <div key={`table-${elements.length}`} className="my-8 overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm text-sm">
            <thead>
              <tr className="bg-[var(--color-primary)] text-white">
                {tableHeaders.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                    {renderInline(h.trim())}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, ri) => (
                <tr key={ri} className="border-t border-[var(--color-border)] even:bg-[var(--color-bg)]">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-3 ${ci === 0 ? "font-medium text-[var(--color-primary)]" : "text-[var(--color-text-light)]"}`}
                    >
                      {renderInline(cell.trim())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableHeaders = [];
      tableRows = [];
      inTable = false;
    }
  }

  function renderInline(text: string): React.ReactNode {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);

      type InlineMatch = { index: number; length: number; element: React.ReactNode };
      const candidates: InlineMatch[] = [];

      if (boldMatch && boldMatch.index !== undefined) {
        candidates.push({
          index: boldMatch.index,
          length: boldMatch[0].length,
          element: <strong key={`b-${key++}`} className="font-semibold text-[var(--color-primary)]">{boldMatch[1]}</strong>,
        });
      }

      if (linkMatch && linkMatch.index !== undefined) {
        const href = linkMatch[2].startsWith("/") ? `/${locale}${linkMatch[2].replace(/^\/en/, "")}` : linkMatch[2];
        candidates.push({
          index: linkMatch.index,
          length: linkMatch[0].length,
          element: (
            <Link key={`l-${key++}`} href={href} className="text-[var(--color-accent)] hover:underline font-medium">
              {linkMatch[1]}
            </Link>
          ),
        });
      }

      if (candidates.length === 0) {
        parts.push(remaining);
        break;
      }

      candidates.sort((a, b) => a.index - b.index);
      const best = candidates[0];

      if (best.index > 0) {
        parts.push(remaining.slice(0, best.index));
      }
      parts.push(best.element);
      remaining = remaining.slice(best.index + best.length);
    }

    return parts.length === 1 ? parts[0] : <>{parts}</>;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table detection
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      flushList();
      const cells = line.split("|").filter((c) => c.trim() !== "");

      // Check if next line is separator
      if (!inTable) {
        const nextLine = lines[i + 1];
        if (nextLine && /^\|[\s\-:|]+\|$/.test(nextLine.trim())) {
          inTable = true;
          tableHeaders = cells.map((c) => c.replace(/\*\*/g, "").trim());
          i++; // skip separator line
          continue;
        }
      }

      if (inTable) {
        tableRows.push(cells.map((c) => c.trim()));
        continue;
      }
    } else if (inTable) {
      flushTable();
    }

    // Horizontal rule
    if (/^---+$/.test(line.trim())) {
      flushList();
      elements.push(<hr key={`hr-${i}`} className="my-8 border-[var(--color-border)]" />);
      continue;
    }

    // Headings
    if (line.startsWith("## ")) {
      flushList();
      const text = line.replace("## ", "");
      elements.push(
        <h2 key={`h2-${i}`} className="text-2xl font-bold text-[var(--color-primary)] mt-12 mb-4" id={text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
          {renderInline(text)}
        </h2>
      );
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      const text = line.replace("### ", "");
      elements.push(
        <h3 key={`h3-${i}`} className="text-xl font-semibold text-[var(--color-primary)] mt-8 mb-3">
          {renderInline(text)}
        </h3>
      );
      continue;
    }

    if (line.startsWith("#### ")) {
      flushList();
      const text = line.replace("#### ", "");
      elements.push(
        <h4 key={`h4-${i}`} className="text-lg font-semibold text-[var(--color-primary)] mt-6 mb-2">
          {renderInline(text)}
        </h4>
      );
      continue;
    }

    // Ordered list items
    if (/^\d+\.\s/.test(line.trim())) {
      if (!inList || listType !== "ol") {
        flushList();
        inList = true;
        listType = "ol";
      }
      const text = line.trim().replace(/^\d+\.\s/, "");
      listItems.push(<li key={`li-${i}`}>{renderInline(text)}</li>);
      continue;
    }

    // Unordered list items
    if (line.trim().startsWith("- ")) {
      if (!inList || listType !== "ul") {
        flushList();
        inList = true;
        listType = "ul";
      }
      const text = line.trim().replace(/^- /, "");
      listItems.push(<li key={`li-${i}`}>{renderInline(text)}</li>);
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      flushList();
      continue;
    }

    // Regular paragraph
    flushList();
    elements.push(
      <p key={`p-${i}`} className="text-[var(--color-text-light)] leading-relaxed my-4">
        {renderInline(line)}
      </p>
    );
  }

  flushList();
  flushTable();

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const post = getBlogPost(slug);
  if (!post) notFound();
  const dict = await getDictionary(locale as Locale);

  const breadcrumbs = [
    { name: dict.nav.home, url: `/${locale}/` },
    { name: dict.nav.blog, url: `/${locale}/blog/` },
    { name: post.title, url: `/${locale}/blog/${slug}/` },
  ];

  // Article structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Yinrui Bio",
      url: "https://yinruibio.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Ningbo Yinrui Biomedical Instruments Co., Ltd",
      logo: {
        "@type": "ImageObject",
        url: "https://yinruibio.com/images/logo.png",
      },
    },
    image: `https://yinruibio.com${post.coverImage}`,
    mainEntityOfPage: `https://yinruibio.com/${locale}/blog/${slug}/`,
  };

  // Other blog posts for "Related Articles"
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(post.faqs)),
        }}
      />

      {/* Article Header */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href={`/${locale}/blog/`} className="hover:text-white">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white/80">{post.category}</span>
          </nav>

          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-white/80">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/60">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>|</span>
            <span>{post.readTime}</span>
            <span>|</span>
            <span className="rounded-full bg-white/10 px-3 py-0.5 text-xs font-medium border border-white/20">
              {post.category}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-6">
          {/* Catalog CTA inline */}
          <div className="mb-8 rounded-xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <p className="font-semibold text-[var(--color-primary)]">
                Want the full product specifications?
              </p>
              <p className="text-sm text-[var(--color-text-light)] mt-1">
                Download our complete catalog with detailed specs, test panels,
                and pricing guidelines.
              </p>
            </div>
            <CatalogButton
              label="Download Catalog"
              className="shrink-0 rounded-lg bg-[var(--color-accent)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[var(--color-accent-light)] transition-colors"
            />
          </div>

          {/* Rendered markdown content */}
          <div className="prose-custom">
            {renderMarkdown(post.content, locale)}
          </div>

          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {post.faqs.map((faq, i) => (
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
          </section>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                Related Articles
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/${locale}/blog/${related.slug}/`}
                    className="group block rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all"
                  >
                    <span className="text-xs font-medium text-[var(--color-accent)]">
                      {related.category}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-text-light)] line-clamp-2">
                      {related.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      {/* Inquiry Form */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-lg px-6">
          <InquiryFormCompact
            productName="CarryOn Portable PCR Platform"
            sourcePage={`blog/${slug}`}
            locale={locale}
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[var(--color-accent)]">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-bold">{dict.cta.title}</h2>
          <p className="mt-4 text-lg text-white/80">{dict.cta.subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/contact/`}
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-[var(--color-accent)] hover:bg-white/90 transition-colors"
            >
              {dict.cta.button}
            </Link>
            <Link
              href={`/${locale}/products/carryon-device/`}
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              View CarryOn Device
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
