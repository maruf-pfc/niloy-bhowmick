import { EmailTemplate } from "@/components/email-template";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  // Check if API key exists
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing Resend API Key" },
      { status: 500 }
    );
  }

  try {
    // Dynamically import to avoid build-time execution
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "From Portfolio <onboarding@resend.dev>", // ✅ Must be verified
      to: ["ojpsmaruf21@gmail.com"],
      subject: subject || "New message from your portfolio",
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
