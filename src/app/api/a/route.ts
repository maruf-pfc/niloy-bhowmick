import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const { p, r, t } = await req.json();

    if (!p || !process.env.Analytics_API_ENDPOINT) {
      return NextResponse.json({ error: "Config error" }, { status: 400 });
    }

    await fetch(process.env.Analytics_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": req.headers.get("user-agent") || "",
      },
      body: JSON.stringify({
        payload: {
          website: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
          hostname: "itsniloy.vercel.app",
          language: req.headers.get("accept-language")?.split(",")[0] || "en",
          screen: "1920x1080",
          url: p,
          referrer: r || "",
          title: t || "",
        },
        type: "pageview",
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Analytics error:", e);
    return NextResponse.json({ ok: true });
  }
}
