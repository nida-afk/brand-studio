import React, { useState } from "react";
import { motion } from "motion/react";
import { Label } from "../ui/Label";
import { Check, X, ArrowRight } from "lucide-react";

export function Comparison() {
  return (
    <section className="py-24 px-[5%] bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Label>The UGC Advantage</Label>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tighter">
            Stop Making Ads. <span className="text-brand">Start Making Content.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            Traditional studio ads are being ignored. UGC (User Generated Content) feels like a recommendation from a friend, driving 4x higher CTR and 50% lower CPA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Traditional Studio Ads */}
          <div className="p-8 md:p-12 rounded-[40px] bg-white border border-slate-200 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6">
              <div className="px-4 py-2 rounded-full bg-slate-100 text-slate-400 text-xs font-bold uppercase tracking-widest">
                The Old Way
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Studio-Produced Ads</h3>
            <div className="space-y-6 mb-12">
              {[
                "High production costs (₹2L+ per shoot)",
                "Long turnaround times (3-4 weeks)",
                "Feels like a 'Sales Pitch'",
                "Low engagement & high skip rates",
                "Hard to scale creative testing"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                    <X className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-slate-500 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="aspect-video rounded-3xl bg-slate-100 overflow-hidden grayscale opacity-50">
              <img src="https://picsum.photos/seed/studio/800/450" alt="Studio Ad" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

          {/* Brand Propel UGC */}
          <div className="p-8 md:p-12 rounded-[40px] bg-slate-900 border border-white/10 shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-6">
              <div className="px-4 py-2 rounded-full bg-brand text-white text-xs font-bold uppercase tracking-widest animate-pulse">
                The Growth Way
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-8">Performance-First UGC</h3>
            <div className="space-y-6 mb-12">
              {[
                "Low cost, high volume production",
                "Fast turnaround (48-72 hours)",
                "Feels like 'Native Content'",
                "High scroll-stop & engagement",
                "Infinite creative testing & iteration"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-4 h-4 text-brand" />
                  </div>
                  <span className="text-white/70 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="aspect-video rounded-3xl bg-brand/20 overflow-hidden border border-brand/30 relative">
              <img src="https://picsum.photos/seed/ugc-adv/800/450" alt="UGC Ad" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center shadow-2xl">
                   <div className="text-white font-black text-xl">4X</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 rounded-xl bg-brand text-white font-bold text-lg hover:bg-brand-dark shadow-xl shadow-brand/20 transition-all flex items-center gap-3 mx-auto">
            Switch to UGC Performance <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
