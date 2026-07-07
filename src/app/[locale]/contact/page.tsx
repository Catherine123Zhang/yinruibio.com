"use client";

import { Suspense, useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { trackEvent, getUtmParams } from "@/lib/analytics";

import en from "@/dictionaries/en";
import zh from "@/dictionaries/zh";
import ja from "@/dictionaries/ja";

const dicts = { en, zh, ja } as const;

export default function ContactPage() {
  return (
    <Suspense>
      <ContactPageInner />
    </Suspense>
  );
}

function ContactPageInner() {
  const params = useParams();
  const searchParams = useSearchParams();
  const locale = (params.locale as string) || "en";
  const lang = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = dicts[lang];

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contactError, setContactError] = useState("");

  // Read product context from URL
  const productParam = searchParams.get("product") || "";
  const [productContext, setProductContext] = useState("");

  useEffect(() => {
    if (productParam) {
      setProductContext(productParam);
    }
  }, [productParam]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setContactError("");

    const formData = new FormData(e.currentTarget);
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const whatsapp = (formData.get("whatsapp") as string)?.trim();
    const wechat = (formData.get("wechat") as string)?.trim();
    const message = (formData.get("message") as string)?.trim();

    // Validate: at least one contact method
    if (!email && !phone && !whatsapp && !wechat) {
      setContactError(
        lang === "zh"
          ? "请至少填写邮箱、电话或 WhatsApp 中的一项。"
          : lang === "ja"
            ? "メール、電話、WhatsApp のいずれかを入力してください。"
            : "Please provide at least one: Email, Phone, or WhatsApp."
      );
      return;
    }

    // Validate: message required
    if (!message) {
      setContactError(
        lang === "zh"
          ? "请填写您的信息或需求。"
          : lang === "ja"
            ? "メッセージを入力してください。"
            : "Please enter your message."
      );
      return;
    }

    setLoading(true);

    // Collect UTM data
    const utm = getUtmParams();

    // TODO: Replace with Cloudflare Worker endpoint
    const data = Object.fromEntries(formData.entries());
    // Collect checkbox values
    const interests = formData.getAll("interests");
    console.log("Form submission:", { ...data, interests, ...(utm || {}) });

    // GA4 event
    trackEvent("generate_lead", {
      method: "contact_form",
      product_context: productContext || "none",
    });

    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
    setLoading(false);
  }

  const inputClass =
    "w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]";

  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">{dict.contact.title}</h1>
          <p className="mt-4 text-lg text-white/80">{dict.contact.subtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6">
          {submitted ? (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">&#10003;</div>
              <p className="text-xl font-semibold text-[var(--color-green)]">
                {dict.contact.form.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Context Banner */}
              {productContext && (
                <div className="rounded-xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 p-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm shrink-0">
                    &#9733;
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-primary)]">
                      {lang === "zh" ? "咨询产品：" : lang === "ja" ? "お問い合わせ製品：" : "Inquiring about:"}
                    </p>
                    <p className="text-sm text-[var(--color-accent)] font-semibold">{productContext}</p>
                  </div>
                  <input type="hidden" name="product_context" value={productContext} />
                </div>
              )}

              {/* Contact Methods - at least one required */}
              <div className="rounded-xl border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5 p-6 space-y-4">
                <p className="text-sm font-medium text-[var(--color-primary)]">
                  {lang === "zh"
                    ? "联系方式（以下至少填一项）*"
                    : lang === "ja"
                      ? "連絡先（以下のいずれかを入力）*"
                      : "Contact Info (at least one required) *"}
                </p>

                {/* Email */}
                <div>
                  <label className="block text-sm text-[var(--color-text-light)] mb-1">
                    {dict.contact.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm text-[var(--color-text-light)] mb-1">
                    {lang === "zh" ? "电话" : lang === "ja" ? "電話番号" : "Phone"}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className={inputClass}
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-sm text-[var(--color-text-light)] mb-1">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="+1 (555) 000-0000"
                    className={inputClass}
                  />
                </div>

                {/* WeChat */}
                <div>
                  <label className="block text-sm text-[var(--color-text-light)] mb-1">
                    {lang === "zh" ? "微信号" : lang === "ja" ? "WeChat ID" : "WeChat ID"}
                  </label>
                  <input
                    type="text"
                    name="wechat"
                    placeholder={lang === "zh" ? "请输入微信号" : "Your WeChat ID"}
                    className={inputClass}
                  />
                </div>

                {contactError && (
                  <p className="text-sm text-red-500 font-medium">{contactError}</p>
                )}
              </div>

              {/* Name (optional) */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-primary)] mb-1">
                  {dict.contact.form.name}
                </label>
                <input type="text" name="name" className={inputClass} />
              </div>

              {/* Company (optional) */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-primary)] mb-1">
                  {dict.contact.form.company}
                </label>
                <input type="text" name="company" className={inputClass} />
              </div>

              {/* Country (optional) */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-primary)] mb-1">
                  {dict.contact.form.country}
                </label>
                <input type="text" name="country" className={inputClass} />
              </div>

              {/* Organization Type (optional) */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-primary)] mb-1">
                  {dict.contact.form.organizationType}
                </label>
                <select name="organizationType" className={inputClass}>
                  <option value="">--</option>
                  {Object.entries(dict.contact.form.orgTypes).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Interests (optional) */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-primary)] mb-2">
                  {dict.contact.form.interests}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {Object.entries(dict.contact.form.interestOptions).map(([key, label]) => (
                    <label
                      key={key}
                      className="flex items-center gap-2 text-sm text-[var(--color-text)] cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="interests"
                        value={key}
                        className="rounded border-[var(--color-border)]"
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              {/* Message (required) */}
              <div>
                <label className="block text-sm font-medium text-[var(--color-primary)] mb-1">
                  {lang === "zh"
                    ? "您的需求 *"
                    : lang === "ja"
                      ? "お問い合わせ内容 *"
                      : "Your Message *"}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  defaultValue={
                    productContext
                      ? (lang === "zh"
                          ? `我对 ${productContext} 感兴趣，请提供更多信息。`
                          : lang === "ja"
                            ? `${productContext} に興味があります。詳細を教えてください。`
                            : `I'm interested in ${productContext}. Please provide more information.`)
                      : ""
                  }
                  placeholder={
                    lang === "zh"
                      ? "请描述您的需求、感兴趣的产品或合作意向..."
                      : lang === "ja"
                        ? "ご要望、ご興味のある製品、または提携のご意向をご記入ください..."
                        : "Describe your needs, products of interest, or partnership intent..."
                  }
                  className={inputClass}
                />
              </div>

              {/* Hidden fields */}
              <input type="hidden" name="locale" value={locale} />
              <input type="hidden" name="source_page" value="contact" />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-[var(--color-accent)] px-8 py-3.5 text-base font-semibold text-white hover:bg-[var(--color-accent-light)] transition-colors disabled:opacity-50"
              >
                {loading ? "..." : dict.contact.form.submit}
              </button>

              <p className="text-xs text-center text-[var(--color-text-light)]">
                {lang === "zh"
                  ? "提交后我们会在 24 小时内回复您。"
                  : lang === "ja"
                    ? "送信後、24時間以内にご返信いたします。"
                    : "We'll get back to you within 24 hours."}
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-center text-[var(--color-primary)] mb-8">
            {lang === "zh" ? "其他联系方式" : lang === "ja" ? "その他の連絡方法" : "Other Ways to Reach Us"}
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {/* WeChat */}
            <div className="rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] text-center">
              <div className="rounded-lg bg-[var(--color-bg)] p-3 inline-block mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/wechat-qr.png"
                  alt="WeChat QR Code"
                  width={160}
                  height={160}
                  className="rounded"
                />
              </div>
              <h3 className="font-semibold text-[var(--color-primary)]">WeChat</h3>
              <p className="mt-1 text-sm text-[var(--color-text-light)]">
                {lang === "zh" ? "扫码添加微信咨询" : lang === "ja" ? "WeChatでお問い合わせ" : "Scan to connect on WeChat"}
              </p>
            </div>

            {/* WhatsApp */}
            <div className="rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] text-center flex flex-col items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--color-primary)]">WhatsApp</h3>
              <p className="mt-1 text-sm text-[var(--color-text-light)]">
                {lang === "zh" ? "点击直接对话" : lang === "ja" ? "クリックしてチャット" : "Click to chat directly"}
              </p>
              <a
                href="https://wa.me/8618268661068"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center rounded-lg bg-[#25D366] px-4 py-2 text-sm font-medium text-white hover:bg-[#20bd5a] transition-colors"
              >
                {lang === "zh" ? "发送消息" : lang === "ja" ? "メッセージ送信" : "Send Message"}
              </a>
            </div>

            {/* Email */}
            <div className="rounded-xl bg-white p-6 shadow-sm border border-[var(--color-border)] text-center flex flex-col items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="font-semibold text-[var(--color-primary)]">Email</h3>
              <p className="mt-1 text-sm text-[var(--color-text-light)]">
                info@yinruibio.com
              </p>
              <a
                href="mailto:info@yinruibio.com"
                className="mt-3 inline-flex items-center rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-accent-light)] transition-colors"
              >
                {lang === "zh" ? "发送邮件" : lang === "ja" ? "メール送信" : "Send Email"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
