import { NextRequest, NextResponse } from 'next/server';
//import nodemailer from 'nodemailer';
import { sendEmail } from "../../../lib/email";
export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
  
await sendEmail({
  from: `"KOA Contact Form" <${process.env.SMTP_USER}>`,
  to: 'drharishmurthysgkoa@gmail.com',
  subject: `New message from ${name}`,
  html: `
    <h3>Contact Form Submission</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong><br/>${message}</p>
  `,
});

return NextResponse.json({ success: true }, { status: 200 });
    
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
