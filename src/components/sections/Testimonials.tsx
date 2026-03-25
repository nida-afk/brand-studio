import React from "react";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useInView } from "../../lib/hooks";
import { Label } from "../ui/Label";
import { TESTIMONIALS } from "../../constants";

export function Testimonials() {
  const [ref, inView] = useInView(0.05);
  return (
    <section ref={ref as any} className="py-10 px-[5%] bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Label>Client Success Stories</Label>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-4">Verified Client Reviews</h2>
          <div className="flex items-center justify-center gap-2 text-brand font-bold">
            <Star className="w-5 h-5 fill-current" />
            <span>4.9/5.0 Average Rating</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(255, 99, 33, 0.15)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: i * 0.1 
              }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group cursor-default"
            >
              <div className="absolute top-0 right-0 p-6">
                <Quote className="w-12 h-12 text-slate-50 group-hover:text-brand/10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {t.role.includes('Facebook') ? 'Facebook Review' : 'Clutch Review'}
                  </span>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed italic mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg" style={{ backgroundColor: t.col }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
