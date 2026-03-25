import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { CASE_STUDIES } from "../constants";

export function CaseStudiesPage() {
  const navigate = useNavigate();
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      {/* HEADER */}
      <section className="py-20 px-[5%] bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-brand font-black text-sm uppercase tracking-[0.3em] mb-4">Brand Propel Studio</div>
          <div className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-8">India's Leading UGC & Performance Marketing Agency</div>
          <h1 className="text-5xl md:text-8xl font-display font-black text-slate-900 tracking-tighter mb-6 leading-none">CLIENT SUCCESS <br /><span className="text-brand">CASE STUDIES</span></h1>
          <p className="text-2xl font-bold text-slate-600 mb-12 italic font-serif">Real Results. Proven Strategy. Measurable Growth.</p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>D2C Beauty</span>
            <span className="text-brand">•</span>
            <span>Fitness & Wellness</span>
            <span className="text-brand">•</span>
            <span>EdTech</span>
            <span className="text-brand">•</span>
            <span>Home & Lifestyle</span>
            <span className="text-brand">•</span>
          </div>
        </div>
      </section>

      {/* CASE STUDIES LIST */}
      <div className="max-w-6xl mx-auto px-[5%] py-20 space-y-32">
        {CASE_STUDIES.map((cs, i) => (
          <motion.div 
            key={cs.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* CASE STUDY HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b-2 border-slate-900 pb-6">
              <div>
                <div className="text-brand font-black text-sm uppercase tracking-widest mb-2">CASE STUDY {cs.id}</div>
                <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-none mb-4">{cs.title}</h2>
                <p className="text-xl font-bold text-slate-500 max-w-2xl">{cs.subtitle}</p>
              </div>
            </div>

            {/* METADATA GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Industry</div>
                <div className="font-bold text-slate-900">{cs.industry}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Duration</div>
                <div className="font-bold text-slate-900">{cs.duration}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Services</div>
                <div className="font-bold text-slate-900">{cs.services}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Market</div>
                <div className="font-bold text-slate-900">{cs.market}</div>
              </div>
            </div>

            {/* CONTENT GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* LEFT COLUMN: CHALLENGE & STRATEGY */}
              <div className="lg:col-span-8 space-y-16">
                {/* CHALLENGE */}
                <div>
                  <h3 className="inline-block px-4 py-1 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-6">The Challenge</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">{cs.challenge.text}</p>
                  <ul className="space-y-4">
                    {cs.challenge.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-4 items-start text-slate-700 font-medium">
                        <span className="text-brand mt-1">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* STRATEGY */}
                <div>
                  <h3 className="inline-block px-4 py-1 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-8">Our Strategy</h3>
                  <div className="space-y-12">
                    {cs.strategy.map((s, idx) => (
                      <div key={idx}>
                        <h4 className="text-xl font-black text-slate-900 mb-4">{s.phase}</h4>
                        <ul className="space-y-3">
                          {s.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex gap-4 items-start text-slate-600">
                              <span className="text-brand mt-1">▸</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: RESULTS & TESTIMONIAL */}
              <div className="lg:col-span-4 space-y-12">
                {/* RESULTS */}
                <div className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-3xl rounded-full -mr-16 -mt-16" />
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand mb-10">The Results</h3>
                  <div className="space-y-10">
                    {cs.results.map((r, idx) => (
                      <div key={idx} className="border-b border-white/10 pb-6 last:border-0">
                        <div className="text-4xl font-black mb-1">{r.value}</div>
                        <div className="text-xs font-bold text-brand uppercase tracking-widest mb-1">{r.label}</div>
                        <div className="text-[10px] text-white/50 font-medium">{r.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TESTIMONIAL */}
                <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl relative">
                  <div className="text-4xl text-brand font-serif absolute top-6 left-6 opacity-20">"</div>
                  <p className="text-lg text-slate-700 italic serif leading-relaxed mb-8 relative z-10">
                    {cs.testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-1 w-1 bg-brand" />
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-widest leading-tight">
                      {cs.testimonial.author}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* FOOTER CTA */}
      <section className="py-32 px-[5%] bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-8 leading-none">READY TO WRITE YOUR <br /><span className="text-brand">SUCCESS STORY?</span></h2>
          <p className="text-xl text-slate-500 mb-12 leading-relaxed">
            Every brand you've read about in these pages started exactly where you are today. At Brand Propel Studio, we combine the power of authentic UGC content with precision performance marketing to deliver results that move the needle.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
            {[
              { ic: "🎬", t: "UGC Production", d: "Creator-led authentic content at scale" },
              { ic: "📈", t: "Performance Ads", d: "Meta, Google & YouTube campaigns" },
              { ic: "🎯", t: "Full-Funnel Strategy", d: "From awareness to retention" }
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-3xl mb-4">{f.ic}</div>
                <h4 className="font-bold text-slate-900 mb-2">{f.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => navigate("/contact")}
            className="px-12 py-6 rounded-full bg-brand text-white font-black text-xl hover:bg-brand-dark shadow-2xl shadow-brand/30 transition-all hover:scale-105 active:scale-95 mb-8"
          >
            Get a Free Strategy Consultation
          </button>
          
          <div className="flex flex-col items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
            <div>brandpropelstudio.com  |  hello@brandpropelstudio.com</div>
            <div className="text-brand">India's Leading UGC & Performance Marketing Agency</div>
          </div>
        </div>
      </section>
    </div>
  );
}
