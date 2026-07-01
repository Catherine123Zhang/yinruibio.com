"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

import en from "@/dictionaries/en";
import zh from "@/dictionaries/zh";
import ja from "@/dictionaries/ja";

const dicts = { en, zh, ja } as const;

export default function ContactPage() {
  const params = useParams();
  const locale = (params.locale as string) || "en";
  const lang = (isValidLocale(locale) ? locale : "en") as Locale;
  const dict = dicts[lang];

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contactError, setContactError] = useState("");

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

    // TODO: Replace with Cloudflare Worker endpoint
    const data = Object.fromEntries(formData.entries());
    // Collect checkbox values
    const interests = formData.getAll("interests");
    console.log("Form submission:", { ...data, interests });

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
              <div className="text-5xl mb-4">✓</div>
              <p className="text-xl font-semibold text-[var(--color-green)]">
                {dict.contact.form.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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
    </main>
  );
}
