import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Updated Prompt for Better Formatting
    const query = `
      As a dental expert, provide a structured and concise answer in a chat-friendly format. 
      - Use **bold** for key terms.
      - Use bullet points (•) for lists.
      - Keep paragraphs short for readability.
      
      Question: ${message}
    `;

    const result = await model.generateContent(query);
    let responseText = result?.response?.text() || "Unable to fetch a response. Try rephrasing.";

    // Formatting for Better Chat Display
    responseText = responseText
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Convert **bold** to <b> tags
      .replace(/\n- /g, "<br>• ") // Convert list items properly
      .replace(/\n/g, "<br>"); // Add line breaks for readability

    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Failed to get response" }, { status: 500 });
  }
}
