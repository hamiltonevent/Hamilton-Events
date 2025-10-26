import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
});

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this to your preferred email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// AI assistant knowledge base
const companyInfo = `
Hamilton Events is a premier event planning and management company specializing in:
- Corporate events and conferences
- Weddings and celebrations
- Meetings and workshops
- Cultural and community events
- Venue selection and management
- Event coordination and execution

We provide comprehensive event planning services with attention to detail and personalized approach.
Our team has extensive experience in creating memorable experiences for all types of events.

Contact Information:
- Address: Kkare Building Bole Street, Hamilton, AA, Ethiopia
- Email: contact@hamiltonevents.net
- Phone: +251 (093) 548-3093
- Office Hours: Monday-Saturday 8:00 AM - 5:00 PM, Sunday 2:00 PM - 6:00 PM

Services include:
1. Event Planning & Coordination
2. Venue Selection & Management
3. Catering & Menu Planning
4. Audio/Visual Equipment
5. Photography & Videography
6. Decoration & Styling
7. Entertainment Booking
8. Transportation Coordination
9. Guest Management
10. Budget Planning & Management
`;

async function generateAIResponse(message: string): Promise<string> {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `You are a helpful AI assistant for Hamilton Events. Use the following company information to answer questions professionally and helpfully. If asked about something not covered in the company info, politely redirect to contacting the team directly.\n\n${companyInfo}`
        },
        {
          role: "user",
          content: message
        }
      ],
      model: "openai/gpt-oss-20b",
      temperature: 0.7,
      max_tokens: 500,
    });

    return chatCompletion.choices[0]?.message?.content || "Thank you for your message. Our team will get back to you soon!";
  } catch (error) {
    console.error('AI response error:', error);
    return "Thank you for your message. Our team will review it and get back to you within 24 hours.";
  }
}

function shouldUseAIResponse(message: string): boolean {
  const keywords = [
    'information', 'about', 'services', 'what', 'how', 'when', 'where',
    'contact', 'hours', 'location', 'address', 'phone', 'email',
    'events', 'planning', 'venue', 'catering', 'pricing', 'packages',
    'wedding', 'corporate', 'meeting', 'workshop', 'celebration'
  ];
  
  const lowerMessage = message.toLowerCase();
  return keywords.some(keyword => lowerMessage.includes(keyword));
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Generate AI response if appropriate
    let aiResponse = '';
    if (shouldUseAIResponse(message)) {
      aiResponse = await generateAIResponse(message);
    }

    // Email to company
    const companyEmailOptions = {
      from: process.env.EMAIL_USER,
      to: 'contact@hamiltonevents.net',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        ${aiResponse ? `<hr><p><strong>AI Response Sent:</strong></p><p>${aiResponse.replace(/\n/g, '<br>')}</p>` : ''}
      `,
    };

    // Auto-reply email to client
    const clientEmailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Hamilton Events',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for contacting Hamilton Events!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to us. We have received your message and appreciate your interest in our services.</p>
          
          ${aiResponse ? `
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Quick Response:</h3>
              <p>${aiResponse.replace(/\n/g, '<br>')}</p>
            </div>
          ` : ''}
          
          <p>Our team will review your inquiry and get back to you within 24 hours. If you have any urgent questions, please don't hesitate to call us at +251935483093.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p><strong>Hamilton Events</strong><br>
            Addis Ababa, Bole Kkare Building 3rd Floor, Office No. 3029<br>
            Addis Ababa, Ethiopia<br>
            Phone: +251 093-548-3093<br>
            Email: contact@hamiltonevents.net</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This is an automated response. Please do not reply to this email directly.
          </p>
        </div>
      `,
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(companyEmailOptions),
      transporter.sendMail(clientEmailOptions),
    ]);

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
      aiResponse: aiResponse || null,
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}