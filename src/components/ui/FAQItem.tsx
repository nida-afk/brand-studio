import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "../../types";

export function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-bold text-slate-900">{faq.q}</span>
        <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center transition-transform ${open ? "rotate-180" : ""}`}>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
