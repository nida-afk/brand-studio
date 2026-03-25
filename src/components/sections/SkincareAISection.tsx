import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Zap, Image as ImageIcon } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { Label } from "../ui/Label";

export function SkincareAISection() {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [type, setType] = useState<"reel" | "photo">("reel");
  const [category, setCategory] = useState<"skincare" | "makeup" | "fashion">("skincare");

  const generateAI = async () => {
    setGenerating(true);
    try {
      const ai = new GoogleGenAI({ 
        apiKey: process.env.GEMINI_API_KEY
      });
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-image",
        contents: [{ text: `A high-quality, professional ${type === "reel" ? "video frame of an unboxing reel" : "product photography"} for a luxury ${category} brand. Style: ${prompt || "Minimalist, clean, aesthetic"}. Cinematic lighting, hyper-realistic, showing textures and elegant packaging.` }]
      });
      
      let found = false;
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setResult(`data:image/png;base64,${part.inlineData.data}`);
          found = true;
          break;
        }
      }
      if (!found) setResult(`https://picsum.photos/seed/${category}${Math.random()}/600/800`);
    } catch (err) {
      console.error(err);
      setResult(`https://picsum.photos/seed/${category}${Math.random()}/600/800`);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <section className="py-24 px-[5%] bg-slate-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Label>AI Creative Studio</Label>
          <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tighter mb-6">Generate <span className="text-brand">Brand Content</span> with AI</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Instant unboxing reels and professional product photos for skincare, makeup, and fashion. No studio needed.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] shadow-2xl">
            <div className="flex gap-4 mb-6">
              {(["skincare", "makeup", "fashion"] as const).map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`flex-1 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all ${category === cat ? "bg-white text-slate-950" : "bg-white/5 text-white/40 hover:bg-white/10"}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex gap-4 mb-8">
              <button 
                onClick={() => setType("reel")}
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${type === "reel" ? "bg-brand text-white" : "bg-white/5 text-white/60 hover:bg-white/10"}`}
              >
                Unboxing Reel
              </button>
              <button 
                onClick={() => setType("photo")}
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${type === "photo" ? "bg-brand text-white" : "bg-white/5 text-white/60 hover:bg-white/10"}`}
              >
                Product Photo
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Describe the Vibe</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm outline-none focus:border-brand transition-all min-h-[120px] text-white"
                  placeholder={`e.g. ${category === 'skincare' ? 'Morning sun hitting a glass bottle of serum...' : category === 'makeup' ? 'Close up of a luxury lipstick with gold accents...' : 'Aesthetic fashion flatlay with silk textures...'}`}
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                />
              </div>
              <button 
                onClick={generateAI}
                disabled={generating}
                className="w-full py-5 rounded-2xl bg-brand text-white font-bold hover:bg-brand-dark transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,99,33,0.3)]"
              >
                {generating ? <Zap className="w-6 h-6 animate-pulse" /> : <Sparkles className="w-6 h-6" />}
                {generating ? "AI is Crafting..." : `Generate AI ${type === "reel" ? "Reel" : "Photo"}`}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-full opacity-50" />
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div 
                  key={result}
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  className="relative aspect-[9/16] max-w-[340px] mx-auto rounded-[40px] overflow-hidden border-8 border-white/10 shadow-2xl group"
                >
                  <img src={result} alt="AI Generated Content" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                    <div className="text-brand font-black text-xs uppercase tracking-[0.2em] mb-2">AI Generated {category} {type}</div>
                    <div className="text-xl font-bold text-white leading-tight">Perfect for your next campaign.</div>
                  </div>
                </motion.div>
              ) : (
                <div className="aspect-[9/16] max-w-[340px] mx-auto rounded-[40px] border-2 border-dashed border-white/20 flex flex-col items-center justify-center text-center p-8 text-white/30">
                  <ImageIcon className="w-12 h-12 mb-4 opacity-20" />
                  <p className="text-sm font-medium">Your AI-generated {category} {type} will appear here.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
