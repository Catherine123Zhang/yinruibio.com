const LABELS: Record<string, { lead: string; cta: string }> = {
  en: { lead: "For a faster response,", cta: "chat with us on WhatsApp" },
  zh: { lead: "想更快得到回复？", cta: "通过 WhatsApp 联系我们" },
  ja: { lead: "お急ぎの場合は", cta: "WhatsApp でご連絡ください" },
  vi: { lead: "Để được phản hồi nhanh hơn,", cta: "hãy trò chuyện qua WhatsApp" },
  pt: { lead: "Para uma resposta mais rápida,", cta: "fale conosco pelo WhatsApp" },
};

const MESSAGE = "Hi, I just submitted an inquiry on yinruibio.com";

export default function WhatsAppFollowUp({ locale }: { locale: string }) {
  const label = LABELS[locale] ?? LABELS.en;
  return (
    <p className="mt-3 text-sm text-[var(--color-text-light)]">
      {label.lead}{" "}
      <a
        href={`https://wa.me/8618268661068?text=${encodeURIComponent(MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        data-wa-placement="form_success"
        className="font-bold text-[#16a34a] underline"
      >
        {label.cta}
      </a>
    </p>
  );
}
