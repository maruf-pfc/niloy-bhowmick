// components/analytics-beacon.tsx
"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function AnalyticsBeaconComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Use a small timeout to let the browser update the document title
    const timeoutId = setTimeout(() => {
      const params = searchParams.toString();
      const url = pathname + (params ? `?${params}` : "");
      
      const payload = {
        p: url,
        r: document.referrer,
        t: document.title,
      };

      fetch("/api/a", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch((err) => console.error("❌ Analytics tracking failed:", err));
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams]);

  return null;
}

export default function AnalyticsBeacon() {
  return (
    <Suspense fallback={null}>
      <AnalyticsBeaconComponent />
    </Suspense>
  );
}
