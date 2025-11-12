import { NextRequest, NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || process.env.NEXT_PUBLIC_GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!process.env.GROQ_API_KEY && !process.env.NEXT_PUBLIC_GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'Groq API key is not configured.' },
        { status: 500 }
      );
    }

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required.' },
        { status: 400 }
      );
    }

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful AI assistant for Hamilton Events, a premier event planning company. Provide helpful information about event planning, venues, catering, and related services. Be professional and friendly."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 1024,
    });

    return NextResponse.json({
      choices: [{
        message: {
          content: chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't process that request."
        }
      }]
    });

  } catch (error) {
    console.error("Groq API Error:", error);
    
    // Handle specific Groq API errors
    if (error instanceof Error) {
      if (error.message.includes('404')) {
        return NextResponse.json(
          { error: 'Model not found. Please check if the model "llama3-8b-8192" is available.' },
          { status: 404 }
        );
      }
      if (error.message.includes('401')) {
        return NextResponse.json(
          { error: 'Invalid API key. Please check your Groq API key.' },
          { status: 401 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}