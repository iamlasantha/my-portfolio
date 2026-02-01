import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json() as ContactRequestBody

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services (SendGrid, Outlook, etc.)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email Options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address (your authenticated email)
      to: 'social.iamlasantha@gmail.com', // Receiver address (notifications go here)
      replyTo: email, // Reply to the user who filled the form
      subject: `New Contact Form Submission from ${name}`,
      text: `
            Name: ${name}
            Email: ${email}
            
            Message:
            ${message}
        `,
      html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <br/>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error: unknown) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    )
  }
} 