import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useInView } from "../../lib/hooks";
import { Label } from "../ui/Label";
import { SVCS } from "../../constants";

export function Services() {
  const [svcRef, svcInView] = useInView(0.05);

  return (
    <section id="services" ref={svcRef as any} className="py-24 px-[5%] bg-white">
      <div className="text-center mb-16">
        <Label>What We Do</Label>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={svcInView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-slate-900 mb-4"
        >
          One Studio. Every Growth Channel.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={svcInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-500 max-w-xl mx-auto"
        >
          From UGC to full-funnel ad campaigns, we cover every touchpoint of your customer journey.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SVCS.map((s, i) => (
          <motion.div 
            key={s.id}
            initial={{ opacity: 0, y: 20 }}
            animate={svcInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
          >
            <Link 
              to={`/service/${s.id}`}
              className="group block p-8 rounded-2xl border border-slate-100 bg-white hover:border-brand hover:shadow-2xl hover:shadow-brand/5 hover:-translate-y-2 transition-all cursor-pointer h-full"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" style={{ backgroundColor: s.bg, color: s.color }}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">{s.short}</p>
              <div className="flex items-center gap-2 text-sm font-bold text-brand">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
