// app/api/a/route.ts
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        payload: {
          website: process.env.NEXT_PUBLIC_Analytics_WEBSITE_ID,
          url: p,
          referrer: r || "",
          hostname: "itsniloy.vercel.app",
          screen: "1920x1080",
          language: "en",
          title: t || "",
        },
        type: "pageview",
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: true });
  }
}
