import { EmailTemplate } from "@/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid JSON request body" },
      { status: 400 }
    );
  }

  const { name, email, message, projectType, timeline, honeypot } = body || {};

  // Honeypot check (bots will fill this hidden field)
  if (honeypot) {
    return NextResponse.json(
      { error: "Spam detected" },
      { status: 400 }
    );
  }

  // Validate required fields
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Validate input lengths to prevent resource exhaustion/DoS attacks
  if (
    name.length > 100 ||
    email.length > 250 ||
    message.length > 5000 ||
    (projectType && projectType.length > 100) ||
    (timeline && timeline.length > 100)
  ) {
    return NextResponse.json(
      { error: "Input text exceeds maximum allowed limit" },
      { status: 400 }
    );
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email format" },
      { status: 400 }
    );
  }

  // Validate message length
  if (message.trim().length < 30) {
    return NextResponse.json(
      { error: "Message should be at least 30 characters long" },
      { status: 400 }
    );
  }

  // Block disposable email providers
  const blockList = ["tempmail", "mailinator", "10minutemail", "guerrillamail"];
  const domain = email.split("@")[1];
  if (domain && blockList.some((blocked) => domain.includes(blocked))) {
    return NextResponse.json(
      { error: "Temporary email addresses are not allowed" },
      { status: 403 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing Resend API Key" },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "From Portfolio <contact@itsniloy.me>",
      to: ["contact.niloybhowmick@gmail.com"],
      subject: `New Message from Portfolio - ${projectType || "General Inquiry"}`,
      react: EmailTemplate({ name, email, message, projectType, timeline }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
