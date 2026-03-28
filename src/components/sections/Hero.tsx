import React from "react";
import { motion } from "motion/react";
import { Facebook } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useInView } from "../../lib/hooks";
import { Counter } from "../ui/Counter";
import { AIImage } from "../ui/AIImage";
import { STATS, HERO_PROMPTS, CLIENTS } from "../../constants";

export function Hero() {
  const [heroRef, heroInView] = useInView(0);
  const navigate = useNavigate();

  return (
    <section id="home" ref={heroRef as any} className="min-h-screen flex items-center bg-gradient-to-br from-brand-light via-white to-[#F2F5FF] px-[5%] pt-32 pb-20 relative overflow-hidden">
      <div className="absolute right-[-200px] top-[5%] w-[700px] h-[700px] rounded-full bg-radial-gradient from-brand/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-white border border-brand-muted rounded-full px-4 py-2 text-xs font-bold text-brand shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              Brand Propel Studio: India's Leading UGC & Performance Marketing Agency
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(38px,5.5vw,72px)] font-display font-extrabold leading-[1.05] tracking-tight text-slate-900 mb-6"
          >
            Content That <span className="text-brand">Connects.</span><br />
            Ads That <span className="text-brand">Convert.</span><br />
            <span className="text-slate-500">Brands That Scale.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed max-w-xl mb-6"
          >
            At <strong>Brand Propel Studio</strong>, we help Indian D2C brands grow through <strong>UGC video production</strong>, <strong>influencer marketing</strong>, and <strong>high-performance social ads</strong>, all under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center gap-2 mb-10"
          >
            <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
              <Facebook className="w-4 h-4 text-[#1877F2] fill-[#1877F2]" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Meta Business Partner</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button className="px-8 py-4 rounded-xl bg-brand text-white font-bold text-lg hover:bg-brand-dark shadow-xl shadow-brand/20 transition-all" onClick={() => navigate("/contact")}>Start Scaling Today</button>
            <button className="px-8 py-4 rounded-xl border-2 border-brand text-brand font-bold text-lg hover:bg-brand-light transition-all" onClick={() => navigate("/case-studies")}>View Case Studies</button>
            <button className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 shadow-xl shadow-slate-900/20 transition-all" onClick={() => navigate("/service/influencer")}>Join as Influencer</button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-10"
          >
            {STATS.map((s, i) => (
              <div key={i} className="border-l-4 border-brand pl-4">
                <div className="text-2xl font-extrabold text-brand leading-none mb-1"><Counter target={s.n} /></div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={heroInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <AIImage 
                prompt={HERO_PROMPTS[0]} 
                initialImg="https://picsum.photos/seed/fashion1/400/600" 
                className="rounded-3xl shadow-xl border-4 border-white aspect-[3/4]" 
              />
              <AIImage 
                prompt={HERO_PROMPTS[1]} 
                initialImg="https://picsum.photos/seed/fashion2/400/400" 
                className="rounded-3xl shadow-xl border-4 border-white aspect-square" 
              />
            </div>
            <div className="space-y-4 pt-12">
              <AIImage 
                prompt={HERO_PROMPTS[2]} 
                initialImg="https://picsum.photos/seed/fashion3/400/400" 
                className="rounded-3xl shadow-xl border-4 border-white aspect-square" 
              />
              <AIImage 
                prompt={HERO_PROMPTS[3]} 
                initialImg="https://picsum.photos/seed/fashion4/400/600" 
                className="rounded-3xl shadow-xl border-4 border-white aspect-[3/4]" 
              />
            </div>
          </div>
          
          <div className="mt-8 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 text-center">Trusted by Industry Leaders</div>
            <div className="flex flex-wrap justify-center gap-6 grayscale opacity-60">
              {CLIENTS.slice(0, 5).map((c, i) => (
                <img 
                  key={i} 
                  src={c.logo} 
                  alt={c.name} 
                  className="h-6 object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ))}
            </div>
          </div>

          <div className="absolute -right-8 top-1/4 flex flex-col gap-4">
            {[
              { v: "5.8x", l: "Avg ROAS", c: "text-emerald-600" },
              { v: "234%", l: "CTR Boost", c: "text-brand" },
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ x: 20, opacity: 0 }}
                animate={heroInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.2 }}
                className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 min-w-[120px]"
              >
                <div className={`text-xl font-black ${s.c}`}>{s.v}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
