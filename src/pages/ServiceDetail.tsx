import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Label } from "../components/ui/Label";
import { SVCS } from "../constants";
import { useInView } from "../lib/hooks";
import { CTABand } from "../components/sections/FAQ"; // Assuming CTABand is in FAQ or similar

// Custom descriptions for specific features
const featureDetails: Record<string, string> = {
  "Product Demo Ads": "Show your product in action to educate and convert simultaneously.",
  "Problem-Solution Ads": "Hook with a problem, sell with your solution — the highest-converting format.",
  "Unboxing Videos (Makeup & Skincare)": "First-impression content that builds desire before the purchase.",
  "Testimonial Videos": "Real customers sharing authentic experiences with your product."
};

export function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const svc = SVCS.find(s => s.id === id) || SVCS[0];
  const [ref, inView] = useInView(0.05);

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-12 px-[5%] relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${svc.bg} 0%, #fff 60%)` }}>
        <div className="max-w-6xl mx-auto">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand mb-8 transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
          </button>
          <Label>Our Services</Label>
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white shadow-xl" style={{ backgroundColor: svc.color }}>
            {svc.icon}
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">{svc.title}</h1>
          <p className="text-xl font-bold mb-6" style={{ color: svc.color }}>{svc.tagline}</p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-10">{svc.short}</p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-xl bg-brand text-white font-bold text-lg hover:bg-brand-dark shadow-xl shadow-brand/20 transition-all" onClick={() => navigate("/influencer-join")}>Join as Influencer</button>
            <button className="px-8 py-4 rounded-xl border-2 border-brand text-brand font-bold text-lg hover:bg-brand-light transition-all" onClick={() => navigate("/contact")}>Free Consultation</button>
          </div>
        </div>
      </section>

      <section className="py-20 px-[5%]" style={{ backgroundColor: svc.color }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {svc.results.map((r, i) => (
            <div key={i} className="text-center py-8 border-b md:border-b-0 md:border-r border-white/20 last:border-0">
              <div className="text-4xl md:text-6xl font-display font-extrabold text-white mb-2">{r.n}</div>
              <div className="text-sm font-bold text-white/70 uppercase tracking-widest">{r.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section ref={ref as any} className="py-24 px-[5%] bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <Label>What is Included</Label>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-8">Everything You Need to <span style={{ color: svc.color }}>Succeed</span></h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">We provide a full-service experience, handling everything from strategy and creator sourcing to production and performance optimization.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {svc.features.map((ft, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-slate-100 bg-slate-50 flex flex-col gap-3 items-start"
              >
                <div className="flex gap-3 items-center">
                  <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: svc.color }} />
                  <span className="text-sm font-bold text-slate-700 leading-tight">{ft}</span>
                </div>
                {featureDetails[ft] && (
                  <p className="text-xs text-slate-500 leading-relaxed pl-8">{featureDetails[ft]}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {id === "social-ads" && (
        <section className="py-24 px-[5%] bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Label>Ad Creative Showcase</Label>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tighter">Product Demo <span className="text-brand">Ads in Action</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { t: "Dynamic Demo", d: "Educate and convert simultaneously.", img: "https://picsum.photos/seed/demo1/600/800" },
                { t: "Feature Highlight", d: "Showcase unique selling points.", img: "https://picsum.photos/seed/demo2/600/800" },
                { t: "Lifestyle Integration", d: "Product in real-world use.", img: "https://picsum.photos/seed/demo3/600/800" }
              ].map((ad, i) => (
                <div key={i} className="group rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-100">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={ad.img} alt={ad.t} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{ad.t}</h3>
                    <p className="text-sm text-slate-500">{ad.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {id === "content" && (
        <section className="py-24 px-[5%] bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 blur-[120px] -z-10" />
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <Label>Highest-Converting Format</Label>
                <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tighter mb-8 leading-[0.9]">Problem-Solution <span className="text-brand">Ads</span></h2>
                <p className="text-2xl font-bold text-white/80 mb-8 italic font-serif">"Hook with a problem, sell with your solution — the highest-converting format."</p>
                <p className="text-lg text-slate-400 leading-relaxed mb-10">We engineer content that identifies your customer's deepest pain points and positions your product as the only logical answer. This psychological framework consistently outperforms standard brand awareness content.</p>
                <div className="space-y-4">
                  {["Pain Point Identification", "Solution Positioning", "Strong Call-to-Action"].map((step, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-xs font-bold">{i + 1}</div>
                      <span className="font-bold text-white/90">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[40px] bg-white/5 border border-white/10 p-4 relative overflow-hidden">
                   <img src="https://picsum.photos/seed/problem1/800/800" alt="Problem Solution Ad" className="w-full h-full object-cover rounded-[32px] opacity-80" referrerPolicy="no-referrer" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="px-8 py-4 bg-brand text-white font-black text-2xl uppercase tracking-tighter shadow-2xl rotate-[-5deg]">The Solution</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      <CTABand />
    </div>
  );
}
