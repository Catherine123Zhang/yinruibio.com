"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

interface ProductViewTrackerProps {
  productName: string;
  productCategory: string;
}

export default function ProductViewTracker({
  productName,
  productCategory,
}: ProductViewTrackerProps) {
  useEffect(() => {
    trackEvent("view_product", {
      product_name: productName,
      product_category: productCategory,
    });
  }, [productName, productCategory]);

  return null;
}
