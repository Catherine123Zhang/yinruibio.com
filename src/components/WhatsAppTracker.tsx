"use client";

import { useEffect } from "react";
import { getUtmSummary, trackEvent } from "@/lib/analytics";

const DEFAULT_MESSAGE = "Hi, I found you on yinruibio.com.";

/** Append the current page (and UTM) to a wa.me link's prefilled message. */
function withSource(baseHref: string): string {
  const url = new URL(baseHref);
  const text = url.searchParams.get("text") || DEFAULT_MESSAGE;
  const utm = getUtmSummary();
  const encoded = encodeURIComponent(text);
  const utmPart = utm ? `%0AUTM%3A%20${encodeURIComponent(utm)}` : "";
  return `${url.origin}${url.pathname}?text=${encoded}%0A%0ASource%3A%20${encodeURIComponent(window.location.href)}${utmPart}`;
}

/**
 * One delegated listener covers every wa.me link on the site, so a link added
 * later cannot miss tracking. Runs in the capture phase, before navigation, and
 * rebuilds from the original href because layout links survive client routing.
 * form-handler's lead-tracker.js logs the same click to D1 separately.
 */
export default function WhatsAppTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest<HTMLAnchorElement>('a[href*="wa.me"]');
      if (!link) return;

      link.dataset.waBase ??= link.href;
      link.href = withSource(link.dataset.waBase);

      trackEvent("whatsapp_click", {
        source_page: window.location.pathname,
        full_url: window.location.href,
        placement: link.dataset.waPlacement || "unknown",
        product: link.dataset.waProduct || "none",
      });
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
