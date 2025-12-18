
import { GoogleGenAI } from "@google/genai";
import { MOHAMED_CONTEXT } from "./constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export async function chatWithMohamed(message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) {
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
        maxOutputTokens: 200,
      }
    });

    return response.text || "Désolé, je n'ai pas pu générer de réponse.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Une erreur est survenue lors de la communication avec l'assistant IA.";
  }
}
