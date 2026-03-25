import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { CLIENTS } from "../../constants";
import { Label } from "../ui/Label";

function ClientLogoItem({ client }: any) {
  const [imgSrc, setImgSrc] = useState(client.logo);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isError, setIsError] = useState(false);

  const generateFallback = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ 
        apiKey: process.env.GEMINI_API_KEY
      });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: `A professional, minimalist, high-quality corporate logo for a company named "${client.name}". The logo should be clean, modern, and suitable for a business website. Use a professional color palette. White background.`,
            },
          ],
        },
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          setImgSrc(`data:image/png;base64,${base64EncodeString}`);
          setIsGenerating(false);
          return;
        }
      }
      throw new Error("No image generated");
    } catch (error) {
      console.error("Error generating logo:", error);
      setIsError(true);
      setIsGenerating(false);
    }
  };

  return (
    <a 
      href={client.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center p-4 rounded-2xl bg-white border border-slate-100 grayscale hover:grayscale-0 transition-all hover:shadow-lg group h-28 relative overflow-hidden"
    >
      <div className="text-center w-full h-full flex items-center justify-center">
        {isGenerating ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-5 h-5 border-2 border-brand border-t-transparent rounded-full animate-spin" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Generating Logo...</span>
          </div>
        ) : isError ? (
          <div className="text-lg font-black text-slate-400 group-hover:text-brand transition-colors tracking-tighter leading-tight uppercase italic">{client.name}</div>
        ) : (
          <img 
            src={imgSrc} 
            alt={client.name} 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
            onError={() => {
              generateFallback();
            }}
          />
        )}
      </div>
    </a>
  );
}

export function ClientLogos() {
  return (
    <section className="py-10 px-[5%] bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Label>Trusted by Growing Brands</Label>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">Trusted by Growing Brands</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {CLIENTS.map((c, i) => (
            <ClientLogoItem key={i} client={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
