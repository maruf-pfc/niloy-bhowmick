// components/analytics-beacon.tsx
"use client";

import { useEffect } from "react";

export default function AnalyticsBeacon() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const payload = {
      p: window.location.pathname + window.location.search,
      r: document.referrer,
      t: document.title,
    };

    console.log("📡 Sending analytics payload:", payload);

    // Use fetch temporarily so we can see errors in console
    fetch("/api/a", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => console.log("✅ Server response:", res.status))
      .catch((err) => console.error("❌ Fetch failed:", err));
  }, []);

  return null;
}
