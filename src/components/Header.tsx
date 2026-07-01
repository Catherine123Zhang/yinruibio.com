"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { locales, localeNames } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries/en";

export default function Header({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: `/${locale}/`, label: dict.nav.home },
    { href: `/${locale}/products/`, label: dict.nav.products },
    { href: `/${locale}/technology/`, label: dict.nav.technology },
    { href: `/${locale}/applications/`, label: dict.nav.applications },
    { href: `/${locale}/about/`, label: dict.nav.about },
    { href: `/${locale}/faq/`, label: dict.nav.faq },
    { href: `/${locale}/contact/`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}/`} className="flex items-center gap-2">
            <Image
              src="/images/products/logo-inarray.png"
              alt="Inarray — Yinrui Bio"
              width={360}
              height={120}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: language switcher + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center gap-1 border border-[var(--color-border)] rounded-md px-1">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={`/${l}/`}
                  className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                    l === locale
                      ? "bg-[var(--color-primary)] text-white"
                      : "text-[var(--color-text-light)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {localeNames[l]}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={`/${locale}/contact/`}
              className="rounded-lg bg-[var(--color-accent)] px-5 py-2 text-sm font-semibold text-white hover:bg-[var(--color-accent-light)] transition-colors"
            >
              {dict.nav.requestDemo}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[var(--color-border)] py-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-bg)] rounded-md"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 px-3 flex items-center gap-2">
              {locales.map((l) => (
                <Link
                  key={l}
                  href={`/${l}/`}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md border ${
                    l === locale
                      ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                      : "text-[var(--color-text-light)] border-[var(--color-border)]"
                  }`}
                >
                  {localeNames[l]}
                </Link>
              ))}
            </div>
            <div className="mt-4 px-3">
              <Link
                href={`/${locale}/contact/`}
                className="block w-full text-center rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-semibold text-white"
              >
                {dict.nav.requestDemo}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
