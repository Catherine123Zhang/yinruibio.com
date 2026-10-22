import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { products } from "@/data/products";
import { breadcrumbSchema } from "@/lib/schema";
import InquiryFormCompact from "@/components/InquiryFormCompact";

// Shared product page for instruments other than the CarryOn P1000Q (which has its own richer page).
export default async function DevicePage({ locale, productId }: { locale: Locale; productId: string }) {
  const lang = locale;
  const dict = await getDictionary(lang);
  const L = (r: { en: string } & Partial<Record<Locale, string>>) => r[lang] ?? r.en;
  const device = products.find((p) => p.id === productId)!;
  const related = device.relatedProducts.map((id) => products.find((p) => p.id === id)).filter(Boolean) as typeof products;
  const hrefFor = (p: (typeof products)[number]) =>
    p.category === "device" ? `/${locale}/products/${p.slug}/` : `/${locale}/products/test-chips/${p.slug}/`;
  const breadcrumbs = [
    { name: dict.nav.home, url: `/${locale}/` },
    { name: dict.nav.products, url: `/${locale}/products/` },
    { name: device.name[lang], url: `/${locale}/products/${device.slug}/` },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(breadcrumbs)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalDevice",
            name: device.name.en,
            description: device.description.en,
            brand: { "@type": "Brand", name: "Inarray" },
            manufacturer: { "@type": "Organization", name: "Ningbo Inarray Biomedical Systems Co., Ltd" },
            additionalProperty: device.fullSpecs.map((s) => ({ "@type": "PropertyValue", name: s.label.en, value: s.value })),
          }),
        }}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative bg-[var(--color-bg)] rounded-2xl p-8 md:p-12">
              <Image src={device.images[0]} alt={device.name[lang]} width={800} height={600} className="object-contain w-full max-h-[480px]" priority />
              {device.certifications.length > 0 && (
                <div className="absolute top-4 left-4 flex gap-2">
                  {device.certifications.map((c) => (
                    <span key={c} className="rounded-full bg-[var(--color-green)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-green)]">{c}</span>
                  ))}
                </div>
              )}
            </div>
            <div>
              <nav className="flex items-center gap-2 text-sm text-[var(--color-text-light)] mb-6">
                <Link href={`/${locale}/products/`} className="hover:text-[var(--color-accent)]">{dict.nav.products}</Link>
                <span>/</span>
                <span className="text-[var(--color-primary)]">{L({ en: "Instruments", zh: "检测仪器", ja: "分析装置", pt: "Instrumentos", vi: "Thiết bị" })}</span>
              </nav>
              <h1 className="text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">{device.name[lang]}</h1>
              <p className="mt-3 text-lg text-[var(--color-accent)] font-medium">{device.tagline[lang]}</p>
              <p className="mt-4 text-[var(--color-text-light)] leading-relaxed">{device.description[lang]}</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {device.keySpecs.map((spec) => (
                  <div key={spec.label.en} className="rounded-xl border border-[var(--color-border)] p-4">
                    <div className="text-2xl font-bold text-[var(--color-primary)]">{spec.value}</div>
                    <div className="text-sm text-[var(--color-text-light)] mt-1">{spec.label[lang]}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`/${locale}/contact/?product=${device.slug}`} className="inline-flex items-center rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-accent-light)]">
                  {L({ en: "Request a Quote", zh: "获取报价", ja: "見積もりを依頼", pt: "Solicitar cotação", vi: "Yêu cầu báo giá" })}
                </Link>
                <a href="/downloads/inarray-product-brochure-2026.pdf" target="_blank" rel="noopener" className="inline-flex items-center rounded-lg border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-primary)] hover:border-[var(--color-accent)]">
                  {L({ en: "Product brochure (PDF)", zh: "产品手册 (PDF)", ja: "製品カタログ (PDF)", pt: "Folheto do produto (PDF)", vi: "Tài liệu giới thiệu sản phẩm (PDF)" })}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {device.highlights && device.highlights.length > 0 && (
        <section className="py-16 bg-[var(--color-bg)]">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">{L({ en: "Why it matters", zh: "核心特点", ja: "主な特長", pt: "Por que isso importa", vi: "Vì sao điều này quan trọng" })}</h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {device.highlights.map((h) => (
                <li key={h.en} className="rounded-xl bg-white border border-[var(--color-border)] p-5 text-sm text-[var(--color-text)]">{h[lang] ?? h.en}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-primary)]">{dict.products.specs.title}</h2>
          <div className="mt-10 divide-y divide-[var(--color-border)] border border-[var(--color-border)] rounded-xl overflow-hidden">
            {device.fullSpecs.map((spec, i) => (
              <div key={spec.label.en} className={`flex flex-col sm:flex-row sm:justify-between gap-2 px-6 py-4 ${i % 2 === 0 ? "bg-[var(--color-bg)]" : "bg-white"}`}>
                <span className="font-medium text-[var(--color-primary)] sm:w-1/3">{spec.label[lang]}</span>
                <span className="text-[var(--color-text-light)] sm:w-2/3">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-8">{L({ en: "Related Products", zh: "相关产品", ja: "関連製品", pt: "Produtos relacionados", vi: "Sản phẩm liên quan" })}</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((p) => (
              <Link key={p.id} href={hrefFor(p)} className="group block rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md hover:border-[var(--color-accent)]/30 transition-all">
                <h3 className="text-base font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-accent)]">{p.name[lang]}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-light)]">{p.tagline[lang]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <InquiryFormCompact locale={locale} productName={device.name.en} sourcePage={`/${locale}/products/${device.slug}/`} />
        </div>
      </section>
    </main>
  );
}
