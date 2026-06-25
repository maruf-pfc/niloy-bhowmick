import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));

  try {
    if (
      !process.env.Analytics_API_ENDPOINT ||
      !process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
    ) {
      console.error("❌ Missing env vars");
      return NextResponse.json(
        { error: "Server config missing" },
        { status: 500 },
      );
    }

    const response = await fetch(process.env.Analytics_API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        payload: {
          website: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
          hostname: "itsniloy.vercel.app",
          language: req.headers.get("accept-language")?.split(",")[0] || "en",
          screen: "1920x1080",
          url: body.p || "/",
          referrer: body.r || "",
          title: body.t || "",
        },
        type: "pageview",
      }),
    });

    const resText = await response.text();

    return NextResponse.json({ ok: true, status: response.status });
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : String(e);
    console.error("❌ Forward failed:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
