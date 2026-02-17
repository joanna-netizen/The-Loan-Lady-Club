import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

const REDIRECT_URL = 'https://loanladyclub.com/contact?sent=1';

export const POST: APIRoute = async ({ request }) => {
  const email = process.env.CONTACT_EMAIL || 'joanna@loanlady.club';
  const appPassword = process.env.GOOGLE_APP_PASSWORD;

  if (!appPassword) {
    return new Response(
      JSON.stringify({ error: 'Server not configured for contact form' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const formData = await request.formData();
    const name = (formData.get('name') as string) || '';
    const fromEmail = (formData.get('email') as string) || '';
    const phone = (formData.get('phone') as string) || '';
    const message = (formData.get('message') as string) || '';

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: email,
        pass: appPassword,
      },
    });

    await transporter.sendMail({
      from: `"Loan Lady Club Contact" <${email}>`,
      to: email,
      replyTo: fromEmail || undefined,
      subject: 'New message from Loan Lady Club contact form',
      text: [
        `Name: ${name}`,
        `Email: ${fromEmail}`,
        `Phone: ${phone}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    });

    return new Response(null, {
      status: 302,
      headers: { Location: REDIRECT_URL },
    });
  } catch (err) {
    console.error('Contact form error:', err);
    return new Response(
      JSON.stringify({ error: 'Failed to send message' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
