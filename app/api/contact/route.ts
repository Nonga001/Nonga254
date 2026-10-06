import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Form validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Please enter your email address." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || !subject.trim()) {
      return NextResponse.json(
        { error: "Please enter a subject." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please enter a message." },
        { status: 400 }
      );
    }

    // EmailJS credentials from environment variables (supports server-side or NEXT_PUBLIC_ prefixes)
    const serviceId =
      process.env.EMAILJS_SERVICE_ID || process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId =
      process.env.EMAILJS_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey =
      process.env.EMAILJS_PUBLIC_KEY || process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials are missing in environment variables.");
      return NextResponse.json(
        {
          error:
            "Email service is not configured yet. Please configure EmailJS environment variables.",
        },
        { status: 500 }
      );
    }

    // Format current date and time for {{time}} placeholder
    const formattedTime = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Call EmailJS REST API
    const emailPayload: Record<string, unknown> = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        name: name.trim(),
        from_name: name.trim(),
        email: email.trim(),
        from_email: email.trim(),
        reply_to: email.trim(),
        time: formattedTime,
        subject: subject.trim(),
        message: message.trim(),
      },
    };

    if (privateKey) {
      emailPayload.accessToken = privateKey;
    }

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
          "Origin": "http://localhost:3000",
          "Referer": "http://localhost:3000/",
        },
        body: JSON.stringify(emailPayload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS API response error:", errorText);
      return NextResponse.json(
        { error: errorText || "Failed to send email through EmailJS." },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email sent successfully." },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("Unexpected error handling contact form:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while sending your message." },
      { status: 500 }
    );
  }
}
