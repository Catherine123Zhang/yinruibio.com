import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries/en";

export default function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold">Yinrui Bio</h3>
            <p className="mt-2 text-sm text-white/70">{dict.footer.tagline}</p>
            <p className="mt-4 text-sm text-white/60">{dict.footer.company}</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-3">
              {dict.footer.products}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href={`/${locale}/products/carryon-device/`} className="hover:text-white transition-colors">
                  CarryOn Device
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/test-chips/`} className="hover:text-white transition-colors">
                  {locale === "zh" ? "检测芯片" : locale === "ja" ? "検査チップ" : "Test Chips"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/technology/`} className="hover:text-white transition-colors">
                  {dict.nav.technology}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/applications/`} className="hover:text-white transition-colors">
                  {dict.nav.applications}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog/`} className="hover:text-white transition-colors">
                  {dict.nav.blog}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/markets/`} className="hover:text-white transition-colors">
                  {locale === "zh" ? "全球市场" : locale === "ja" ? "グローバル市場" : "Global Markets"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-3">
              {dict.footer.support}
            </h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href={`/${locale}/faq/`} className="hover:text-white transition-colors">
                  {dict.nav.faq}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact/`} className="hover:text-white transition-colors">
                  {dict.nav.contact}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about/`} className="hover:text-white transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
            </ul>
          </div>

          {/* WeChat QR */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-3">
              WeChat
            </h4>
            <div className="rounded-lg bg-white p-2 inline-block">
              <Image
                src="/images/wechat-qr.png"
                alt="WeChat QR Code"
                width={120}
                height={120}
                className="rounded"
              />
            </div>
            <p className="mt-2 text-xs text-white/50">
              {locale === "zh" ? "扫码添加微信" : locale === "ja" ? "WeChatで追加" : "Scan to connect"}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} {dict.footer.company}. {dict.footer.allRightsReserved}
        </div>
      </div>
    </footer>
  );
}
