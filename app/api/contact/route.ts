import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
                border-radius: 10px;
              }
              .header {
                background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: white;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background-color: #f3f4f6;
                border-radius: 8px;
                border-left: 4px solid #dc2626;
              }
              .field-label {
                font-weight: bold;
                color: #991b1b;
                margin-bottom: 5px;
              }
              .field-value {
                color: #333;
              }
              .message-box {
                background-color: #fef2f2;
                border: 1px solid #fecaca;
                padding: 20px;
                border-radius: 8px;
                margin-top: 20px;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">New Contact Form Submission</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Digital Insights UAE</p>
              </div>

              <div class="content">
                <div class="field">
                  <div class="field-label">Name:</div>
                  <div class="field-value">${name}</div>
                </div>

                <div class="field">
                  <div class="field-label">Email:</div>
                  <div class="field-value"><a href="mailto:${email}" style="color: #dc2626; text-decoration: none;">${email}</a></div>
                </div>

                ${phone ? `
                <div class="field">
                  <div class="field-label">Phone:</div>
                  <div class="field-value"><a href="tel:${phone}" style="color: #dc2626; text-decoration: none;">${phone}</a></div>
                </div>
                ` : ''}

                <div class="field">
                  <div class="field-label">Subject:</div>
                  <div class="field-value">${subject}</div>
                </div>

                <div class="message-box">
                  <div class="field-label">Message:</div>
                  <div class="field-value" style="white-space: pre-wrap;">${message}</div>
                </div>

                <div class="footer">
                  <p><strong>This email was sent from the Digital Insights contact form</strong></p>
                  <p>Reply directly to this email to respond to ${name}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission from Digital Insights UAE

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}
Subject: ${subject}

Message:
${message}

---
This email was sent from the Digital Insights contact form.
Reply directly to this email to respond to ${name}.
      `.trim(),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
