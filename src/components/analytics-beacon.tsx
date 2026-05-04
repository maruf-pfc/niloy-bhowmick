"use client";

import { useEffect } from "react";

export default function AnalyticsBeacon() {
  useEffect(() => {
    if (typeof navigator === "undefined") return;

    const payload = {
      p: window.location.pathname + window.location.search,
      r: document.referrer,
      t: document.title,
    };

    navigator.sendBeacon("/api/a", JSON.stringify(payload));
  }, []);

  return null;
}
