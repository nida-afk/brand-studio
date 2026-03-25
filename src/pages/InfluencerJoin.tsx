import React, { useState } from "react";
import { motion } from "motion/react";
import { Star, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import { Label } from "../components/ui/Label";

export function InfluencerJoinPage() {
  const [form, setForm] = useState({ name: "", email: "", handle: "", niche: "", followers: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    if (!form.name || !form.email || !form.handle) {
      setError("Name, Email and Social Handle are required fields.");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: (import.meta as any).env.VITE_EMAILJS_SERVICE_ID,
          template_id: (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID,
          user_id: (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            influencer_handle: form.handle,
            niche: form.niche,
            followers: form.followers,
            message: form.msg,
            to_name: "Brand Propel Studio",
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send application");
      }
      
      setSent(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setError("Failed to send application. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-[5%] bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <Label>Join Our Network</Label>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight mb-8">Work with India's <span className="text-brand">Top Brands.</span></h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">We are always looking for authentic creators who can tell powerful stories. Join our network of 500+ influencers and get access to exclusive brand deals.</p>
            
            <div className="flex flex-col gap-8">
              {[
                { ic: <Star className="w-5 h-5" />, l: "Exclusive Deals", v: "Access to top D2C brands" },
                { ic: <Zap className="w-5 h-5" />, l: "Fast Payments", v: "Transparent and timely payouts" },
                { ic: <Sparkles className="w-5 h-5" />, l: "Creative Support", v: "Briefs that help you shine" }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand shrink-0">{item.ic}</div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.l}</div>
                    <div className="text-lg font-bold text-slate-900">{item.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50">
            {sent ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Received!</h3>
                <p className="text-slate-500">Our talent team will review your profile and reach out soon.</p>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-4">
                {error && (
                  <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm font-medium mb-2">
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input className={`w-full bg-slate-50 border ${error && !form.name ? 'border-red-300' : 'border-slate-200'} rounded-xl px-4 py-3 text-sm focus:border-brand outline-none transition-all`} placeholder="Your Name *" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                  <input className={`w-full bg-slate-50 border ${error && !form.email ? 'border-red-300' : 'border-slate-200'} rounded-xl px-4 py-3 text-sm focus:border-brand outline-none transition-all`} placeholder="Email Address *" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                </div>

                <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-brand outline-none transition-all" placeholder="Social Media Handle (Instagram/YouTube) *" value={form.handle} onChange={e => setForm({...form, handle: e.target.value})} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-brand outline-none transition-all appearance-none" value={form.niche} onChange={e => setForm({...form, niche: e.target.value})}>
                    <option value="">Primary Niche</option>
                    <option>Beauty & Fashion</option>
                    <option>Fitness & Health</option>
                    <option>Tech & Gadgets</option>
                    <option>Food & Lifestyle</option>
                    <option>Gaming</option>
                    <option>Other</option>
                  </select>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-brand outline-none transition-all appearance-none" value={form.followers} onChange={e => setForm({...form, followers: e.target.value})}>
                    <option value="">Follower Count</option>
                    <option>Under 10k</option>
                    <option>10k - 50k</option>
                    <option>50k - 100k</option>
                    <option>100k - 500k</option>
                    <option>500k+</option>
                  </select>
                </div>

                <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-brand outline-none transition-all h-32 resize-none" placeholder="Tell us more about yourself and your content style..." value={form.msg} onChange={e => setForm({...form, msg: e.target.value})} />

                <button 
                  className="w-full py-4 rounded-xl bg-brand text-white font-bold hover:bg-brand-dark shadow-xl shadow-brand/20 transition-all mt-4 disabled:opacity-50"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
