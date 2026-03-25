import React from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useInView } from "../../lib/hooks";
import { Label } from "../ui/Label";
import { PROCESS } from "../../constants";

export function Process() {
  const [processRef, processInView] = useInView(0.05);

  return (
    <section id="process" ref={processRef as any} className="py-24 px-[5%] bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute left-[-10%] bottom-[-10%] w-[40%] aspect-square rounded-full bg-brand/10 blur-[120px]" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <Label>How We Work</Label>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-6"
          >
            Our Proven <span className="text-brand">5-Step</span> System
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 leading-relaxed mb-10"
          >
            We've streamlined our process to ensure maximum efficiency and results for your brand.
          </motion.p>
          
          <div className="space-y-4">
            {PROCESS.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{p.t}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white/5 shadow-2xl relative group">
            <img 
              src="https://picsum.photos/seed/process/800/800" 
              alt="Our Process" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">Strategy First</div>
                  <div className="text-sm text-slate-300">Data-driven content planning</div>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">We don't just create content; we build conversion machines based on deep consumer insights.</p>
            </div>
          </div>
          {/* Decorative floating elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand/10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
