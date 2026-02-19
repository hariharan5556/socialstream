
import { GoogleGenAI, Type } from "@google/genai";
import { NewsArticle } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const fetchLiveNews = async (): Promise<NewsArticle[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Search for and summarize the top 5 trending global news stories in the last 24 hours. Provide details like title, source, a short summary, and a mock URL.",
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              source: { type: Type.STRING },
              url: { type: Type.STRING },
              time: { type: Type.STRING }
            },
            required: ["title", "description", "source", "url", "time"]
          }
        }
      },
    });

    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const generatePostInspiration = async (topic: string): Promise<string> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Write a catchy social media post about: ${topic}. Keep it engaging and use emojis.`,
  });
  return response.text || "Just another day of being awesome! 🚀";
};
