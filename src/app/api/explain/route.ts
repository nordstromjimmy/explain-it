// app/api/explain/route.ts
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { input, level } = await req.json();

  const prompt = `Explain this like I'm ${level} years old:\n\n${input}`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
    });

    const result = completion.choices[0].message?.content || "No response.";

    return NextResponse.json({ result });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json(
      { result: "There was an error generating the explanation." },
      { status: 500 }
    );
  }
}
