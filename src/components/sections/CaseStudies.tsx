import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useInView } from "../../lib/hooks";
import { Label } from "../ui/Label";
import { CASE_STUDIES } from "../../constants";

export function CaseStudies() {
  const [workRef, workInView] = useInView(0.05);
  const navigate = useNavigate();

  return (
    <section id="work" ref={workRef as any} className="py-24 px-[5%] bg-slate-50">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div>
          <Label>Our Work</Label>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={workInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-slate-900"
          >
            Numbers That Matter.
          </motion.h2>
        </div>
        <button className="px-6 py-3 rounded-xl border-2 border-brand text-brand font-bold hover:bg-brand-light transition-all" onClick={() => navigate("/case-studies")}>See All Case Studies</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CASE_STUDIES.map((w, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={workInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl transition-all group"
          >
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: w.bg, color: w.col }}>{w.industry}</span>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{w.title}</h3>
            <div className="text-3xl font-extrabold mb-2" style={{ color: w.col }}>{w.results[0].value}</div>
            <p className="text-xs text-slate-500 leading-relaxed">{w.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
