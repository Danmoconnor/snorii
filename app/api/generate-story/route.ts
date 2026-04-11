import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY is missing." },
        { status: 500 }
      );
    }

    const { prompt, ageRange, childName, tone } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required." },
        { status: 400 }
      );
    }

    const toneInstruction =
      tone === "adventurous"
        ? "Make it slightly more adventurous and magical, while still gentle, safe, and suitable for bedtime."
        : "Make it extra calming, soothing, sleepy, and peaceful.";

    const childNameInstruction = childName?.trim()
      ? `The main child character should be called ${childName.trim()}.`
      : "Use a suitable child-friendly main character name.";

    const response = await openai.responses.create({
      model: "gpt-4o-mini",
      text: {
        format: {
          type: "json_schema",
          name: "bedtime_story",
          schema: {
            type: "object",
            properties: {
              title: { type: "string" },
              story: { type: "string" },
            },
            required: ["title", "story"],
            additionalProperties: false,
          },
        },
      },
      input: `Write a calming bedtime story for a child aged ${ageRange}.

Story idea: ${prompt}

${childNameInstruction}
${toneInstruction}

Requirements:
- gentle
- magical
- safe
- not scary
- perfect for bedtime
- around 400 to 600 words
- use short paragraphs
- end peacefully

Return:
- a beautiful story title
- the full story body`,
    });

    const parsed = JSON.parse(response.output_text);

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Generate story error:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to generate story.",
      },
      { status: 500 }
    );
  }
}