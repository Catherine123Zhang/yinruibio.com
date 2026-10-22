import { activeLocales, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/data/products";
import DevicePage from "@/components/DevicePage";

const PRODUCT_ID = "arrayon-p1000d";

export async function generateStaticParams() {
  return activeLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const lang = locale as Locale;
  const p = products.find((x) => x.id === PRODUCT_ID)!;
  return {
    title: p.name[lang],
    description: p.tagline[lang] + " " + p.description[lang].slice(0, 120),
    alternates: { canonical: `/${locale}/products/arrayon-p1000d/` },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  return <DevicePage locale={locale as Locale} productId={PRODUCT_ID} />;
}
