"use client";

import { useEffect } from "react";
import { captureUtmParams } from "@/lib/analytics";

/**
 * Invisible client component that captures UTM params on mount.
 * Include once in the layout.
 */
export default function UtmCapture() {
  useEffect(() => {
    captureUtmParams();
  }, []);

  return null;
}
