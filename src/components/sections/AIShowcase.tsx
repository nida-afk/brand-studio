import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, Zap, Image as ImageIcon } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { Label } from "../ui/Label";
import { HERO_PROMPTS, GALLERY_PROMPTS, LIFESTYLE_PROMPTS } from "../../constants";

export function AIImage({ prompt, initialImg, className = "" }: { prompt: string, initialImg: string, className?: string }) {
  const [img, setImg] = useState(initialImg);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ 
        apiKey: process.env.GEMINI_API_KEY
      });
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-image-preview",
        contents: [{ text: prompt }],
        config: {
          imageConfig: {
            aspectRatio: "1:1",
            imageSize: "1K"
          }
        }
      });
      
      let found = false;
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setImg(`data:image/png;base64,${part.inlineData.data}`);
          found = true;
          break;
        }
      }
      if (!found) {
        setImg(`https://picsum.photos/seed/${Math.random()}/800/800`);
      }
    } catch (err) {
      console.error(err);
      setImg(`https://picsum.photos/seed/${Math.random()}/800/800`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative group overflow-hidden ${className}`}>
      <img 
        src={img} 
        alt="AI Content" 
        className={`w-full h-full object-cover transition-all duration-700 ${loading ? 'scale-110 blur-sm grayscale' : 'scale-100 blur-0 grayscale-0'}`}
        referrerPolicy="no-referrer"
      />
      <button 
        onClick={generate}
        disabled={loading}
        className="absolute bottom-4 right-4 p-3 rounded-full bg-brand text-white shadow-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 active:scale-95 disabled:opacity-50"
      >
        {loading ? <Zap className="w-5 h-5 animate-pulse" /> : <Sparkles className="w-5 h-5" />}
      </button>
      {loading && (
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
          <div className="text-white font-bold text-xs uppercase tracking-widest animate-pulse">AI is Crafting...</div>
        </div>
      )}
    </div>
  );
}

export function AIAdvertisingShowcase() {
  const ads = [
    { title: "AURA Perfume", cat: "Luxury", prompt: HERO_PROMPTS[0], tag: "High Fashion", size: "tall", initial: "https://picsum.photos/seed/aura/800/1000" },
    { title: "Premium Jewelry", cat: "Accessories", prompt: HERO_PROMPTS[1], tag: "High Fashion", size: "square", initial: "https://picsum.photos/seed/jewelry/800/800" },
    { title: "VERIDIAN Scarf", cat: "Fashion", prompt: HERO_PROMPTS[2], tag: "High Fashion", size: "tall", initial: "https://picsum.photos/seed/veridian/800/1000" },
    { title: "Tech-Beauty App", cat: "Tech", prompt: HERO_PROMPTS[3], tag: "Modern", size: "square", initial: "https://picsum.photos/seed/techbeauty/800/800" },
    { title: "STEP Sneakers", cat: "Footwear", prompt: GALLERY_PROMPTS[0], tag: "UGC Unboxing", size: "tall", initial: "https://picsum.photos/seed/step/800/1000" },
    { title: "GLOW DROP Serum", cat: "Skincare", prompt: GALLERY_PROMPTS[1], tag: "Clean Beauty", size: "square", initial: "https://picsum.photos/seed/glowdrop/800/800" },
    { title: "PALETTE X", cat: "Makeup", prompt: GALLERY_PROMPTS[2], tag: "Beauty Guru", size: "tall", initial: "https://picsum.photos/seed/palettex/800/1000" },
    { title: "Street Style", cat: "Fashion", prompt: LIFESTYLE_PROMPTS[0], tag: "Lifestyle", size: "square", initial: "https://picsum.photos/seed/street/800/800" },
    { title: "TIMELESS Watch", cat: "Accessories", prompt: LIFESTYLE_PROMPTS[1], tag: "Lifestyle", size: "tall", initial: "https://picsum.photos/seed/timeless/800/1000" },
    { title: "Influencer Squad", cat: "Social", prompt: LIFESTYLE_PROMPTS[2], tag: "UGC Selfie", size: "square", initial: "https://picsum.photos/seed/squad/800/800" },
  ];

  return (
    <section id="gallery" className="py-24 px-[5%] bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Label>Campaign Gallery</Label>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tighter mb-6">AI-Generated <span className="text-brand">Advertising Gallery</span></h2>
            <p className="text-slate-500 text-lg">Hyper-realistic AI creators delivering high-impact advertising for global makeup and clothing brands.</p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-900 font-bold text-sm shadow-sm">600+ AI Models</div>
            <div className="px-6 py-3 rounded-full bg-brand text-white font-bold text-sm shadow-lg shadow-brand/20">98% Realism Score</div>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {ads.map((ad, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid group relative rounded-[32px] overflow-hidden shadow-2xl bg-slate-200"
            >
              <AIImage prompt={ad.prompt} initialImg={ad.initial} className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 pointer-events-none" />
              
              <div className="absolute top-6 left-6 flex gap-2">
                <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
                  {ad.tag}
                </div>
                <div className="px-3 py-1 rounded-full bg-brand text-white text-[10px] font-bold uppercase tracking-widest">
                  Gemini 3.1
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">{ad.cat}</div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{ad.title}</h3>
                <div className="flex items-center gap-2 text-brand font-bold text-sm">
                  View Campaign Details <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AIInfluencerGallery() {
  const influencers = [
    { name: "Sasha V.", niche: "Fashion", img: "https://picsum.photos/seed/fashionai1/600/800" },
    { name: "Elena R.", niche: "Makeup", img: "https://picsum.photos/seed/makeupai1/600/800" },
    { name: "Marcus K.", niche: "Lifestyle", img: "https://picsum.photos/seed/lifestyleai1/600/800" },
    { name: "Chloe M.", niche: "Skincare", img: "https://picsum.photos/seed/skincareai1/600/800" },
  ];

  return (
    <section className="py-24 px-[5%] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Label>AI Influencer Studio</Label>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tighter mb-6">AI-Generated <span className="text-brand">Influencer Avatars</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Scale your influencer marketing with hyper-realistic AI avatars tailored to your brand's aesthetic.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {influencers.map((inf, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden group shadow-xl"
            >
              <img src={inf.img} alt={inf.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <div className="text-white font-bold text-lg">{inf.name}</div>
                <div className="text-brand font-bold text-xs uppercase tracking-widest">{inf.niche}</div>
              </div>
              <div className="absolute top-4 right-4 bg-brand text-white text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">AI Generated</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AIContentDemo() {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const generateAI = async () => {
    if (!prompt) return;
    setGenerating(true);
    try {
      const ai = new GoogleGenAI({ 
        apiKey: process.env.GEMINI_API_KEY
      });
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-image-preview",
        contents: [{ text: `A high-quality, professional portrait of a virtual AI influencer creator. Style: ${prompt}. Cinematic lighting, hyper-realistic.` }],
        config: {
          imageConfig: {
            aspectRatio: "3:4",
            imageSize: "1K"
          }
        }
      });
      
      let found = false;
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setResult(`data:image/png;base64,${part.inlineData.data}`);
          found = true;
          break;
        }
      }
      if (!found) {
        setResult(`https://picsum.photos/seed/${Math.random()}/600/800`);
      }
    } catch (err) {
      console.error(err);
      setResult(`https://picsum.photos/seed/${Math.random()}/600/800`);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-4">
        <input 
          className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm outline-none focus:border-brand transition-all"
          placeholder="e.g. Cyberpunk fashion model, Minimalist yoga guru..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />
        <button 
          onClick={generateAI}
          disabled={generating}
          className="px-8 py-4 rounded-2xl bg-brand text-white font-bold hover:bg-brand-dark transition-all disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {generating ? <Zap className="w-5 h-5 animate-pulse" /> : <Sparkles className="w-5 h-5" />}
          {generating ? "Generating..." : "Generate Persona"}
        </button>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 aspect-[3/4] max-w-sm mx-auto rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative group"
          >
            <img src={result} alt="AI Generated Creator" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div className="text-white">
                <div className="text-xs font-bold uppercase tracking-widest text-brand mb-1">AI Generated</div>
                <div className="text-lg font-bold">Your Custom Creator</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
