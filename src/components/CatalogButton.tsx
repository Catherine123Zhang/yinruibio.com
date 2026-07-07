"use client";

import { useState } from "react";
import { trackEvent, getUtmParams } from "@/lib/analytics";

interface CatalogButtonProps {
  label: string;
  className?: string;
}

export default function CatalogButton({ label, className }: CatalogButtonProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const utm = getUtmParams();

    const data = {
      email: formData.get("email") as string,
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      action: "catalog_download",
      ...(utm || {}),
    };

    // TODO: Replace with actual API endpoint
    console.log("Catalog request:", data);

    trackEvent("generate_lead", {
      method: "catalog_download",
    });

    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  const inputClass =
    "w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] text-[var(--color-text)]";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={className}
      >
        {label}
      </button>

      {/* Modal Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-1 rounded hover:bg-[var(--color-bg)] transition-colors"
              aria-label="Close"
            >
              <svg className="h-5 w-5 text-[var(--color-text-light)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-3 text-[var(--color-green)]">&#10003;</div>
                <p className="text-lg font-semibold text-[var(--color-primary)]">
                  Thank you!
                </p>
                <p className="mt-2 text-sm text-[var(--color-text-light)]">
                  We&apos;ll send the catalog to your email shortly.
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-4 rounded-lg bg-[var(--color-accent)] px-6 py-2 text-sm font-semibold text-white hover:bg-[var(--color-accent-light)] transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-1">
                  Download Product Catalog
                </h3>
                <p className="text-sm text-[var(--color-text-light)] mb-6">
                  Enter your details and we&apos;ll send you the full product catalog.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-primary)] mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Your company"
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-[var(--color-accent)] px-6 py-3 text-base font-semibold text-white hover:bg-[var(--color-accent-light)] transition-colors disabled:opacity-50"
                  >
                    {loading ? "..." : "Send Me the Catalog"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
