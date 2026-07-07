"use client";

import { useState } from "react";
import { trackEvent, getUtmParams, buildWhatsAppUrl } from "@/lib/analytics";

interface InquiryFormCompactProps {
  productName: string;
  sourcePage: string;
  locale: string;
}

export default function InquiryFormCompact({
  productName,
  sourcePage,
  locale,
}: InquiryFormCompactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const t = {
    en: {
      title: "Quick Inquiry",
      email: "Email *",
      country: "Country / Region",
      quantity: "Quantity / Application",
      message: "Message (optional)",
      submit: "Send Inquiry",
      success: "Thank you! We'll reply within 24 hours.",
      emailRequired: "Email is required.",
      orWhatsApp: "or WhatsApp us",
      reply24: "Reply within 24 hours",
      emailPlaceholder: "you@company.com",
      countryPlaceholder: "e.g. United States",
      quantityPlaceholder: "e.g. 10 units for clinic use",
      messagePlaceholder: "Any specific requirements...",
    },
    zh: {
      title: "快速询价",
      email: "邮箱 *",
      country: "国家/地区",
      quantity: "数量/用途",
      message: "留言（可选）",
      submit: "发送询价",
      success: "感谢！我们将在24小时内回复。",
      emailRequired: "请填写邮箱。",
      orWhatsApp: "或 WhatsApp 联系",
      reply24: "24小时内回复",
      emailPlaceholder: "you@company.com",
      countryPlaceholder: "例如：中国",
      quantityPlaceholder: "例如：10台，诊所使用",
      messagePlaceholder: "其他需求说明...",
    },
    ja: {
      title: "お問い合わせ",
      email: "メール *",
      country: "国 / 地域",
      quantity: "数量 / 用途",
      message: "メッセージ（任意）",
      submit: "送信",
      success: "ありがとうございます。24時間以内にご返信いたします。",
      emailRequired: "メールアドレスを入力してください。",
      orWhatsApp: "またはWhatsApp",
      reply24: "24時間以内に返信",
      emailPlaceholder: "you@company.com",
      countryPlaceholder: "例：日本",
      quantityPlaceholder: "例：10台、クリニック使用",
      messagePlaceholder: "その他のご要望...",
    },
  };

  const lang = (locale === "zh" || locale === "ja" ? locale : "en") as keyof typeof t;
  const labels = t[lang];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = (formData.get("email") as string)?.trim();

    if (!email) {
      setError(labels.emailRequired);
      return;
    }

    setLoading(true);

    // Collect UTM data
    const utm = getUtmParams();

    const data = {
      email,
      country: formData.get("country") as string,
      quantity: formData.get("quantity") as string,
      message: formData.get("message") as string,
      productName,
      sourcePage,
      locale,
      ...(utm || {}),
    };

    // TODO: Replace with actual API endpoint
    console.log("Inquiry submission:", data);

    // GA4 event
    trackEvent("generate_lead", {
      method: "inquiry_form",
      product_name: productName,
      source_page: sourcePage,
    });

    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  const waUrl = buildWhatsAppUrl(
    `Hi, I'm interested in ${productName}. Could you provide pricing and availability?`
  );

  const inputClass =
    "w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]";

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-sm text-center">
        <div className="text-4xl mb-3 text-[var(--color-green)]">&#10003;</div>
        <p className="text-lg font-semibold text-[var(--color-green)]">{labels.success}</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8 shadow-sm">
      <h3 className="text-xl font-bold text-[var(--color-primary)] mb-1">{labels.title}</h3>
      <p className="text-sm text-[var(--color-text-light)] mb-6">
        {productName}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="productName" value={productName} />
        <input type="hidden" name="sourcePage" value={sourcePage} />

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-primary)] mb-1">
            {labels.email}
          </label>
          <input
            type="email"
            name="email"
            placeholder={labels.emailPlaceholder}
            className={inputClass}
            required
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-primary)] mb-1">
            {labels.country}
          </label>
          <input
            type="text"
            name="country"
            placeholder={labels.countryPlaceholder}
            className={inputClass}
          />
        </div>

        {/* Quantity / Application */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-primary)] mb-1">
            {labels.quantity}
          </label>
          <input
            type="text"
            name="quantity"
            placeholder={labels.quantityPlaceholder}
            className={inputClass}
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-[var(--color-primary)] mb-1">
            {labels.message}
          </label>
          <textarea
            name="message"
            rows={2}
            placeholder={labels.messagePlaceholder}
            className={inputClass}
          />
        </div>

        {error && (
          <p className="text-sm text-red-500 font-medium">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[var(--color-accent)] px-6 py-3 text-base font-semibold text-white hover:bg-[var(--color-accent-light)] transition-colors disabled:opacity-50"
        >
          {loading ? "..." : labels.submit}
        </button>
      </form>

      {/* WhatsApp alternative */}
      <div className="mt-4 text-center">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("click_whatsapp", { source: "inquiry_form", product: productName })}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#25D366] hover:underline"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          {labels.orWhatsApp}
        </a>
      </div>

      {/* Trust badges */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-[var(--color-border)]">
        <span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-light)]">
          <svg className="h-4 w-4 text-[var(--color-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {labels.reply24}
        </span>
        <span className="rounded-full bg-[var(--color-green)]/10 px-2.5 py-0.5 text-xs font-semibold text-[var(--color-green)]">
          CE
        </span>
        <span className="rounded-full bg-[var(--color-green)]/10 px-2.5 py-0.5 text-xs font-semibold text-[var(--color-green)]">
          ISO13485
        </span>
      </div>
    </div>
  );
}
