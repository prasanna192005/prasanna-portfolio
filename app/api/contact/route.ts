import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, contact, message } = await req.json();

    if (!name || !message || !contact) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json({ error: 'Resend API key not configured' }, { status: 500 });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: 'prasannapandharikar19@gmail.com',
        subject: `${name} sent you a message from your portfolio`,
        html: `
          <div style="font-family: sans-serif; color: #121212;">
            <h2 style="color: #2563EB;">New Dispatch Received</h2>
            <p><strong>Message:</strong></p>
            <blockquote style="border-left: 4px solid #2563EB; padding-left: 16px; margin-left: 0; font-style: italic;">
              ${message.replace(/\n/g, '<br>')}
            </blockquote>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 24px 0;" />
            <p><strong>Sender Signature:</strong></p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Contact (Email/Phone):</strong> ${contact}</p>
          </div>
        `,
      }),
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await res.json();
      return NextResponse.json({ error: errorData }, { status: res.status });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
