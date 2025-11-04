import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, organization, program, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this to other services like 'outlook', 'yahoo', etc.
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'learn@learniumlabs.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #1e4a3a 0%, #2d6b4f 100%); color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="margin: 0; font-size: 24px;">New Contact Form Submission</h2>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Learnium Labs Website</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #1e4a3a; margin: 0 0 15px 0;">Contact Information</h3>
            <div style="display: grid; gap: 10px;">
              <div><strong style="color: #1e4a3a;">Name:</strong> ${name}</div>
              <div><strong style="color: #1e4a3a;">Email:</strong> <a href="mailto:${email}" style="color: #2d6b4f;">${email}</a></div>
              ${phone ? `<div><strong style="color: #1e4a3a;">Phone:</strong> ${phone}</div>` : ''}
              ${organization ? `<div><strong style="color: #1e4a3a;">Organization:</strong> ${organization}</div>` : ''}
              ${program ? `<div><strong style="color: #1e4a3a;">Program Interest:</strong> ${program}</div>` : ''}
            </div>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h3 style="color: #1e4a3a; margin: 0 0 15px 0;">Message</h3>
            <div style="line-height: 1.6; color: #333;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e8f5e8; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #1e4a3a; font-size: 14px;">
              This email was sent from the Learnium Labs contact form on ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
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