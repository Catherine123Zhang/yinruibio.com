// UTM Tracking & GA4 Event Utilities for Yinrui Bio

const UTM_STORAGE_KEY = "_yinrui_utm";
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export interface UtmData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing_page?: string;
  captured_at?: string;
}

/**
 * Capture UTM parameters from the current URL and store in sessionStorage.
 * Only overwrites if new UTM params are present.
 */
export function captureUtmParams(): void {
  if (typeof window === "undefined") return;

  const url = new URL(window.location.href);
  const hasUtm = UTM_PARAMS.some((p) => url.searchParams.has(p));

  if (!hasUtm) return;

  const data: UtmData = {};
  for (const param of UTM_PARAMS) {
    const value = url.searchParams.get(param);
    if (value) data[param] = value;
  }
  data.landing_page = window.location.pathname;
  data.captured_at = new Date().toISOString();

  try {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage not available (private browsing, etc.)
  }
}

/**
 * Retrieve stored UTM data from sessionStorage.
 */
export function getUtmParams(): UtmData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmData) : null;
  } catch {
    return null;
  }
}

/**
 * Get a one-line summary of UTM data for embedding in messages.
 * Example: "src=google | med=cpc | camp=spring2026"
 */
export function getUtmSummary(): string {
  const utm = getUtmParams();
  if (!utm) return "";
  const parts: string[] = [];
  if (utm.utm_source) parts.push(`src=${utm.utm_source}`);
  if (utm.utm_medium) parts.push(`med=${utm.utm_medium}`);
  if (utm.utm_campaign) parts.push(`camp=${utm.utm_campaign}`);
  if (utm.utm_term) parts.push(`term=${utm.utm_term}`);
  if (utm.utm_content) parts.push(`content=${utm.utm_content}`);
  return parts.join(" | ");
}

/**
 * Send a GA4 event via gtag.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window === "undefined") return;
  const w = window as typeof window & {
    gtag?: (...args: unknown[]) => void;
  };
  if (typeof w.gtag === "function") {
    w.gtag("event", eventName, params);
  }
}

/**
 * Build a WhatsApp URL with UTM + page context appended to the message.
 */
export function buildWhatsAppUrl(
  message: string,
  phone: string = "8618268661068"
): string {
  const utm = getUtmSummary();
  const page = typeof window !== "undefined" ? window.location.href : "";
  let fullMessage = message;
  if (page) fullMessage += `\n\nPage: ${page}`;
  if (utm) fullMessage += `\nUTM: ${utm}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(fullMessage)}`;
}
