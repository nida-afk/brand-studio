import React, { useState } from "react";
import { motion } from "framer-motion";
import { Megaphone, Users, Globe, CheckCircle2 } from "lucide-react";
import { Label } from "../components/ui/Label";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone_no: "",
    company_name: "",
    budget: "",
    msg: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [capVal, setCapVal] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError("");

    // Required fields (except message)
    if (!form.name || !form.email || !form.phone_no || !form.company_name || !form.budget) {
      setError("Please fill all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Phone validation (only numbers, exactly 10 digits)
    if (!/^[0-9]{10}$/.test(form.phone_no)) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    // CAPTCHA validation
    if (!capVal) {
      setError("Please verify you are not a robot.");
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
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          user_id: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            from_phone_no: form.phone_no,
            from_company_name: form.company_name,
            from_budget: form.budget,
            from_msg: form.msg,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSent(true);
      setForm({
        name: "",
        email: "",
        phone_no: "",
        company_name: "",
        budget: "",
        msg: "",
      });
      setCapVal(null);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="pt-28 px-[5%] bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          <div>
            <Label>Get In Touch</Label>

            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight mb-8">
              Let's Build Something <span className="text-brand">Powerful.</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Whether you are a D2C startup or an established brand we will give you a free audit, honest advice and a clear roadmap for growth.
            </p>


            <div className="flex flex-col gap-8">

              {[
                { ic: <Megaphone className="w-5 h-5" />, l: "Email Us", v: "Contact@brandpropelstudio.com" },
                { ic: <Users className="w-5 h-5" />, l: "Call Us", v: "+91 98765 43210" },
                { ic: <Globe className="w-5 h-5" />, l: "Office", v: "USA, UAE, UK and India" },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand shrink-0">
                    {item.ic}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      {item.l}
                    </div>
                    <div className="text-lg font-bold text-slate-900">{item.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-slate-200/50">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500">
                  We'll reach out within 24 hours with your free brand audit.
                </p>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-4">

                {error && (
                  <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm"
                    placeholder="Phone Number *"
                    type="tel"
                    inputMode="numeric"
                    value={form.phone_no}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "");
                      if (value.length > 10) value = value.slice(0, 10);
                      setForm({ ...form, phone_no: value });
                    }}
                    required
                  />
                  <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm"
                    placeholder="Enter Company Name *"
                    value={form.company_name}
                    onChange={(e) => setForm({ ...form, company_name: e.target.value })}
                    required
                  />
                </div>

                <select
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  required
                >
                  <option value="">Monthly Budget Range *</option>
                  <option>Under Rs 25,000</option>
                  <option>Rs 25,000 to Rs 75,000</option>
                  <option>Rs 75,000 to Rs 2,00,000</option>
                  <option>Rs 2,00,000 to Rs 5,00,000</option>
                  <option>Rs 5,00,000+</option>
                </select>

                <textarea
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm h-32"
                  placeholder="How can we help you scale? (Optional)"
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                />

                <div className="mt-2">
                  <ReCAPTCHA
                    sitekey="6LcDP5ksAAAAACWbOFa6nuOxtjPyvQZg9k6J7IOM"
                    onChange={(val) => setCapVal(val)}
                  />
                </div>

                <button
                  className="w-full py-4 rounded-xl bg-brand text-white font-bold mt-4 disabled:opacity-50"
                  onClick={handleSubmit}
                  disabled={loading || !capVal}
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}