import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useInView } from "../../lib/hooks";
import { Label } from "../ui/Label";
import { FAQItem } from "../ui/FAQItem";
import { FAQS } from "../../constants";

export function FAQ() {
  const [ref, inView] = useInView(0.05);
  return (
    <section ref={ref as any} className="py-24 px-[5%] bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Label>Common Questions</Label>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-slate-900 mb-4"
          >
            Everything You Need to Know
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500"
          >
            Can't find what you're looking for? Reach out to our team.
          </motion.p>
        </div>
        <div className="space-y-4">
          {FAQS.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05 }}
            >
              <FAQItem faq={f} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTABand() {
  const navigate = useNavigate();
  return (
    <section className="py-24 px-[5%] bg-gradient-to-br from-brand to-brand-dark text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      
      <div className="relative z-10">
        <div className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4">Free Consultation — No Commitments</div>
        <h2 className="text-3xl md:text-6xl font-display font-extrabold text-white tracking-tight mb-6">Ready to Propel Your Brand?</h2>
        <p className="text-lg text-white/70 max-w-lg mx-auto mb-10">Book a free 30-min strategy call. We will show you exactly where you are leaving money on the table.</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-10 py-5 rounded-xl bg-white text-brand font-bold text-lg hover:bg-brand-muted shadow-2xl transition-all" onClick={() => navigate("/contact")}>Book Free Strategy Call</button>
          <button className="px-10 py-5 rounded-xl bg-white/10 text-white font-bold text-lg border border-white/20 hover:bg-white/20 transition-all" onClick={() => navigate("/service/influencer")}>Join as an Influencer</button>
        </div>
      </div>
    </section>
  );
}
