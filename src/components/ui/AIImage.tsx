import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";

export function AIImage({ prompt, initialImg, className }: { prompt: string, initialImg: string, className?: string }) {
  const [img, setImg] = useState(initialImg);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const hasKey = await (window as any).aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await (window as any).aistudio.openSelectKey();
      }
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: { parts: [{ text: prompt }] },
        config: {
          imageConfig: {
            aspectRatio: "3:4",
            imageSize: "1K"
          }
        }
      });
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setImg(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (e) {
      console.error("AI Generation failed", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative group overflow-hidden ${className}`}>
      <img 
        src={img} 
        alt="AI Generated" 
        className={`w-full h-full object-cover transition-all duration-700 ${loading ? "scale-110 blur-md grayscale" : "scale-100 blur-0 grayscale-0"}`}
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button 
          onClick={generate}
          disabled={loading}
          className="px-4 py-2 bg-white text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
        >
          {loading ? "Generating..." : "Regenerate with AI"}
        </button>
      </div>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-sm">
          <div className="w-8 h-8 border-4 border-brand border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
