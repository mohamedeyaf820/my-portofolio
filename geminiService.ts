
import { GoogleGenAI } from "@google/genai";
import { MOHAMED_CONTEXT } from "./constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export interface ChatResponse {
  text: string;
  sources?: { uri: string; title: string }[];
}

export async function chatWithMohamed(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []): Promise<ChatResponse> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { role: 'user', parts: [{ text: MOHAMED_CONTEXT }] },
        { role: 'model', parts: [{ text: "Bonjour ! Je suis l'assistant de Mohamed Faye. Comment puis-je vous aider ?" }] },
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 800,
        tools: [{ googleSearch: {} }]
      }
    });

    const text = response.text || "Désolé, je n'ai pas pu générer de réponse.";
    
    // Extract grounding chunks if available
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
    const sources = groundingChunks?.map((chunk: any) => {
      if (chunk.web) {
        return { uri: chunk.web.uri, title: chunk.web.title };
      }
      return null;
    }).filter(Boolean) as { uri: string; title: string }[] | undefined;

    return { text, sources };
  } catch (error: any) {
    console.error("Gemini Error:", error);
    if (error.message?.includes("Requested entity was not found")) {
      // Handle potential API key issues gracefully if needed
    }
    return { text: "Une erreur est survenue lors de la communication avec l'assistant IA." };
  }
}
