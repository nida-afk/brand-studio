import React from "react";
import { motion } from "motion/react";
import { Label } from "../components/ui/Label";
import { WHY_US } from "../constants";
import { useNavigate } from "react-router-dom";

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-20 px-[5%] bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <Label>Our Story</Label>
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-slate-900 mb-8 tracking-tight">
          Scaling Brands with <span className="text-brand">Data & Creativity</span>
        </h1>
        <div className="prose prose-lg text-slate-600 max-w-none space-y-6">
          <p className="text-xl font-medium text-slate-800">
            Brand Propel Studio was founded on a simple premise: Most agencies are too slow, too expensive, and too disconnected from what actually sells.
          </p>
          <p>
            We're a team of performance marketers, content creators, and data analysts who are obsessed with one thing: <strong>Growth.</strong>
          </p>
          <p>
            In today's digital landscape, attention is the most valuable currency. But attention alone isn't enough. You need content that resonates with your audience and a performance strategy that turns that attention into revenue.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            {WHY_US.map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand-light text-brand flex items-center justify-center mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">Our Mission</h2>
          <p>
            Our mission is to empower 1,000 D2C brands in India to reach their first 100Cr in revenue. We do this by providing the creative firepower and performance expertise that was previously only available to the biggest players in the market.
          </p>
          
          <div className="bg-slate-900 rounded-[40px] p-12 text-white mt-16">
            <h3 className="text-3xl font-bold mb-6">Ready to scale your brand?</h3>
            <p className="text-slate-400 mb-8">Join the 50+ brands that have already seen massive growth with Brand Propel Studio.</p>
            <button 
              onClick={() => navigate("/contact")}
              className="px-8 py-4 rounded-xl bg-brand text-white font-bold hover:bg-brand-dark transition-all"
            >
              Book a Free Strategy Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
