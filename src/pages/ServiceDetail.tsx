import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Play, BarChart3, Users2, Sparkles, Zap, Smartphone, Globe } from "lucide-react";
import { Label } from "../components/ui/Label";
import { SVCS } from "../constants";
import { useInView } from "../lib/hooks";
import { CTABand } from "../components/sections/FAQ";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const chartData = [
  { name: 'Week 1', revenue: 4000, roas: 2.4 },
  { name: 'Week 2', revenue: 7500, roas: 3.1 },
  { name: 'Week 3', revenue: 12000, roas: 4.2 },
  { name: 'Week 4', revenue: 18500, roas: 4.8 },
  { name: 'Week 5', revenue: 24000, roas: 5.1 },
  { name: 'Week 6', revenue: 32000, roas: 5.4 },
];

// Custom descriptions for specific features
const featureDetails: Record<string, string> = {
  "Paid Acquisition (Meta, Google, LinkedIn Ads)": "Full-funnel ad strategies across the world's most powerful platforms.",
  "SEO + AEO (AI Search Optimization)": "Rank on Google and be the answer AI engines like ChatGPT and Perplexity give.",
  "Funnel & Conversion (Landing pages, Sales funnels, CRO)": "We don't just drive traffic; we build the infrastructure to convert it into revenue.",
  "UGC Production (In-House & Controlled)": "Scalable, scripted, and high-performance UGC that we control from start to finish.",
  "Creator Strategy & Persona Mapping": "Finding the exact voices that resonate with your target audience's psychology.",
  "Conversion-focused UX Design": "Digital assets designed with one goal in mind: making the sale."
};

const ROASCalculator = () => {
  const [spend, setSpend] = useState(100000);
  const [currentRoas, setCurrentRoas] = useState(2.5);
  const projectedRoas = currentRoas * 1.4; // 40% improvement
  const currentRevenue = spend * currentRoas;
  const projectedRevenue = spend * projectedRoas;
  const growth = projectedRevenue - currentRevenue;

  return (
    <div className="p-8 md:p-12 rounded-[40px] bg-slate-900 border border-white/10 shadow-2xl">
      <div className="mb-10">
        <Label>Growth Calculator</Label>
        <h3 className="text-3xl font-bold text-white mt-4">Calculate Your <span className="text-brand">UGC Uplift</span></h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="space-y-8">
          <div>
            <div className="flex justify-between mb-4">
              <label className="text-sm font-bold text-white/60 uppercase tracking-widest">Monthly Ad Spend</label>
              <span className="text-brand font-bold">₹{spend.toLocaleString()}</span>
            </div>
            <input 
              type="range" min="10000" max="1000000" step="10000" value={spend} 
              onChange={(e) => setSpend(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand"
            />
          </div>
          <div>
            <div className="flex justify-between mb-4">
              <label className="text-sm font-bold text-white/60 uppercase tracking-widest">Current ROAS</label>
              <span className="text-brand font-bold">{currentRoas}x</span>
            </div>
            <input 
              type="range" min="0.5" max="10" step="0.1" value={currentRoas} 
              onChange={(e) => setCurrentRoas(Number(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="p-6 rounded-2xl bg-brand/10 border border-brand/20">
            <div className="text-xs font-bold text-brand uppercase tracking-widest mb-1">Projected Monthly Revenue</div>
            <div className="text-3xl font-bold text-white">₹{projectedRevenue.toLocaleString()}</div>
            <div className="text-xs text-brand mt-2 font-bold">+₹{growth.toLocaleString()} Growth</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Projected ROAS</div>
            <div className="text-3xl font-bold text-white">{projectedRoas.toFixed(1)}x</div>
            <div className="text-xs text-white/40 mt-2">Based on avg. 40% UGC improvement</div>
          </div>
        </div>
      </div>
      <button className="w-full py-4 rounded-xl bg-brand text-white font-bold text-lg hover:bg-brand-dark transition-all">
        Claim This Growth Strategy
      </button>
    </div>
  );
};

export function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const svc = SVCS.find(s => s.id === id) || SVCS[0];
  const [ref, inView] = useInView(0.05);

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-[5%] relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${svc.bg} 0%, #fff 60%)` }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.03),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand mb-8 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
            </button>
            <Label>Our Services</Label>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-white shadow-xl" style={{ backgroundColor: svc.color }}>
              {svc.icon}
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">{svc.title}</h1>
            <p className="text-xl font-bold mb-6" style={{ color: svc.color }}>{svc.tagline}</p>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-10">{svc.short}</p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl bg-brand text-white font-bold text-lg hover:bg-brand-dark shadow-xl shadow-brand/20 transition-all" onClick={() => navigate("/influencer-join")}>Join as Influencer</button>
              <button className="px-8 py-4 rounded-xl border-2 border-brand text-brand font-bold text-lg hover:bg-brand-light transition-all" onClick={() => navigate("/contact")}>Free Consultation</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {id === "growth-marketing" && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl rotate-[-2deg]">
                    <img src="https://picsum.photos/seed/growth1/600/800" alt="Growth 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-[3deg]">
                    <img src="https://picsum.photos/seed/growth2/600/600" alt="Growth 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-[2deg]">
                    <img src="https://picsum.photos/seed/growth3/600/600" alt="Growth 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl rotate-[-3deg]">
                    <img src="https://picsum.photos/seed/growth4/600/800" alt="Growth 4" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand rounded-full flex items-center justify-center text-white font-black text-xl shadow-2xl animate-bounce">
                  +480%
                </div>
              </div>
            )}

            {id === "creative-studio" && (
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-2 p-2 bg-slate-100">
                  <img src="https://picsum.photos/seed/creative1/400/400" alt="Creative 1" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/creative2/400/400" alt="Creative 2" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/creative3/400/400" alt="Creative 3" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/creative4/400/400" alt="Creative 4" className="w-full h-full object-cover rounded-2xl" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 rounded-full bg-brand flex items-center justify-center shadow-2xl">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
              </div>
            )}

            {id === "influencer-creator" && (
              <div className="relative">
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                  <img src="https://picsum.photos/seed/influencer-hero/800/1000" alt="Influencer Hero" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -bottom-6 -left-6 p-6 rounded-3xl bg-white shadow-2xl border border-slate-100 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                        <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Network Size</div>
                    <div className="text-lg font-black text-slate-900">5,000+ Creators</div>
                  </div>
                </div>
              </div>
            )}

            {id === "web-funnel" && (
              <div className="relative">
                <div className="aspect-video rounded-[32px] overflow-hidden shadow-2xl border-8 border-slate-900 bg-slate-900">
                  <img src="https://picsum.photos/seed/web-hero/1200/800" alt="Web Hero" className="w-full h-full object-cover rounded-xl" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -top-10 -right-10 p-8 rounded-3xl bg-brand text-white shadow-2xl">
                  <div className="text-4xl font-black mb-1">99.9</div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-80">Performance Score</div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-[5%]" style={{ backgroundColor: svc.color }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {svc.results.map((r, i) => (
            <div key={i} className="text-center py-8 border-b md:border-b-0 md:border-r border-white/20 last:border-0">
              <div className="text-4xl md:text-6xl font-display font-extrabold text-white mb-2">{r.n}</div>
              <div className="text-sm font-bold text-white/70 uppercase tracking-widest">{r.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section ref={ref as any} className="py-24 px-[5%] bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <Label>What is Included</Label>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-8">Everything You Need to <span style={{ color: svc.color }}>Succeed</span></h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">We provide a full-service experience, handling everything from strategy and creator sourcing to production and performance optimization.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {svc.features.map((ft, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-slate-100 bg-slate-50 flex flex-col gap-3 items-start"
              >
                <div className="flex gap-3 items-center">
                  <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: svc.color }} />
                  <span className="text-sm font-bold text-slate-700 leading-tight">{ft}</span>
                </div>
                {featureDetails[ft] && (
                  <p className="text-xs text-slate-500 leading-relaxed pl-8">{featureDetails[ft]}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {id === "growth-marketing" && (
        <section className="py-24 px-[5%] bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <Label>The Scaling Framework</Label>
                <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tighter mb-8">
                  From Zero to <span className="text-brand">Scale</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">
                  Our performance marketing strategy isn't just about spending money. It's about building a sustainable engine that acquires customers at a cost that allows for infinite scaling. We focus on the unit economics first, then we pour fuel on the fire.
                </p>
                <div className="space-y-6">
                  {[
                    { t: "Phase 1: Creative Testing", d: "Testing 20+ UGC hooks to find the winners." },
                    { t: "Phase 2: Funnel Optimization", d: "Ensuring the landing page converts the traffic." },
                    { t: "Phase 3: Aggressive Scaling", d: "Scaling spend on winning creative/audience combos." }
                  ].map((phase, i) => (
                    <div key={i} className="flex gap-6 items-start p-6 rounded-2xl border border-slate-100 hover:border-brand transition-all group">
                      <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center font-black shrink-0 group-hover:bg-brand group-hover:text-white transition-all">
                        0{i + 1}
                      </div>
                      <div>
                        <div className="font-bold text-lg text-slate-900 mb-1">{phase.t}</div>
                        <div className="text-sm text-slate-500 leading-relaxed">{phase.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <ROASCalculator />
            </div>
          </div>
        </section>
      )}

      {id === "growth-marketing" && (
        <section className="py-24 px-[5%] bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(26,86,219,0.15),transparent)] pointer-events-none" />
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <Label>The Revenue Engine</Label>
                <h2 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter mb-8 leading-tight">Data-Driven <span className="text-brand">Scaling</span></h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-10">We don't just "run ads." We build an integrated growth ecosystem that tracks every rupee spent and optimizes for maximum ROAS. Our dashboards give you real-time visibility into your scaling journey.</p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { l: "Attribution", v: "100%", i: <Globe className="w-5 h-5" /> },
                    { l: "Scaling Cap", v: "None", i: <Zap className="w-5 h-5" /> },
                    { l: "Daily Reports", v: "Real-time", i: <BarChart3 className="w-5 h-5" /> },
                    { l: "Expert Support", v: "24/7", i: <Users2 className="w-5 h-5" /> }
                  ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-brand mb-2">{stat.i}</div>
                      <div className="text-2xl font-bold mb-1">{stat.v}</div>
                      <div className="text-xs font-bold text-white/40 uppercase tracking-widest">{stat.l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-sm font-bold text-white/60 mb-1 uppercase tracking-widest">Revenue Growth</div>
                    <div className="text-3xl font-bold text-brand">+480% YoY</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                    <div className="text-[10px] font-bold text-brand uppercase">Live Tracking</div>
                  </div>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#1A56DB" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#1A56DB" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                      <XAxis dataKey="name" stroke="#ffffff40" fontSize={10} tickLine={false} axisLine={false} />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff20', borderRadius: '12px' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="#1A56DB" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {id === "growth-marketing" && (
        <section className="py-24 px-[5%] bg-slate-900 text-white overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Label className="bg-brand/20 text-brand border-brand/30">The Strategy</Label>
              <h2 className="text-4xl md:text-6xl font-display font-bold mt-4">The Scaling Roadmap</h2>
              <p className="text-slate-400 mt-4 max-w-2xl mx-auto">How we take your brand from initial testing to global dominance in 90 days.</p>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 hidden lg:block" />
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
                {[
                  { day: "Day 1-15", title: "Foundation & Setup", desc: "Pixel auditing, tracking setup, and initial creative hook research.", icon: <Zap className="w-6 h-6" /> },
                  { day: "Day 16-45", title: "Creative Testing", desc: "Launching 20+ UGC variations to find winning hooks and creators.", icon: <Sparkles className="w-6 h-6" /> },
                  { day: "Day 46-75", title: "Funnel Optimization", desc: "Scaling winners while optimizing landing pages for max conversion.", icon: <BarChart3 className="w-6 h-6" /> },
                  { day: "Day 76-90", title: "Aggressive Scaling", desc: "Increasing budgets on proven winners while maintaining ROAS targets.", icon: <Globe className="w-6 h-6" /> }
                ].map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700 relative z-10 hover:border-brand/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-brand/20 text-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <div className="text-brand font-bold text-sm mb-2">{step.day}</div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {id === "influencer-creator" && (
        <section className="py-24 px-[5%] bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Label>Creator Archetypes</Label>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tighter">The Right <span className="text-brand">Voices</span> for Your Brand</h2>
              <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">We don't just find "influencers." We find creators who fit specific psychological profiles that resonate with your target audience.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { t: "The Trusted Expert", d: "Dermatologists, Tech Reviewers, or Financial Advisors who provide authority.", i: <CheckCircle2 className="w-8 h-8" /> },
                { t: "The Relatable Peer", d: "Everyday users who show how your product fits into a real, busy life.", i: <Users2 className="w-8 h-8" /> },
                { t: "The Aesthetic Curator", d: "High-end creators who elevate your brand's visual identity and desire.", i: <Sparkles className="w-8 h-8" /> }
              ].map((arch, i) => (
                <div key={i} className="p-8 rounded-[32px] bg-white border border-slate-200 hover:border-brand transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-all">
                    {arch.i}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{arch.t}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{arch.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {id === "influencer-creator" && (
        <section className="py-24 px-[5%] bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Label>Our Creator Network</Label>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tighter">Vetted <span className="text-brand">Creators</span> for Every Niche</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { n: "Sarah J.", c: "Lifestyle", f: "250K", img: "https://picsum.photos/seed/sarah/400/500" },
                { n: "Alex Chen", c: "Tech & Gadgets", f: "1.2M", img: "https://picsum.photos/seed/alex/400/500" },
                { n: "Priya K.", c: "Beauty & Skincare", f: "480K", img: "https://picsum.photos/seed/priya/400/500" },
                { n: "Marcus L.", c: "Fitness", f: "890K", img: "https://picsum.photos/seed/marcus/400/500" }
              ].map((creator, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100"
                >
                  <img src={creator.img} alt={creator.n} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                    <div className="text-white font-bold text-lg">{creator.n}</div>
                    <div className="text-white/60 text-xs uppercase tracking-widest mb-2">{creator.c}</div>
                    <div className="flex items-center gap-2 text-brand text-xs font-black">
                      <Users2 className="w-3 h-3" /> {creator.f} Followers
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-24">
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
                <div className="max-w-xl">
                  <Label>Reels & Shorts Showcase</Label>
                  <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">Viral <span className="text-brand">Hooks</span> That Stop the Scroll</h2>
                </div>
                <button className="px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all flex items-center gap-2">
                  View Full Gallery <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { t: "The 3-Second Hook", d: "Identifying the pain point immediately.", img: "https://picsum.photos/seed/reel1/600/1000" },
                  { t: "Authentic Unboxing", d: "Raw, unfiltered first impressions.", img: "https://picsum.photos/seed/reel2/600/1000" },
                  { t: "Problem/Solution", d: "Solving the customer's biggest hurdle.", img: "https://picsum.photos/seed/reel3/600/1000" }
                ].map((reel, i) => (
                  <div key={i} className="relative aspect-[9/16] rounded-[32px] overflow-hidden bg-slate-900 group shadow-2xl">
                    <img src={reel.img} alt={reel.t} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 border border-white/30 group-hover:bg-brand group-hover:border-brand transition-all">
                        <Play className="w-5 h-5 text-white fill-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{reel.t}</h3>
                      <p className="text-sm text-white/60 leading-relaxed">{reel.d}</p>
                    </div>
                    <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest">
                      High Performance
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {id === "influencer-creator" && (
        <section className="py-24 px-[5%] bg-slate-50">
          <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-8 md:p-16 shadow-2xl border border-slate-100">
            <div className="text-center mb-12">
              <Label>Interactive Tool</Label>
              <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">Find Your Creator Match</h2>
              <p className="text-slate-500 mt-4">Tell us about your brand, and we'll suggest the ideal creator archetype.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "High-End Luxury", type: "Aesthetic Curator", icon: "✨" },
                { label: "Everyday Utility", type: "Relatable Peer", icon: "🤝" },
                { label: "Tech/Specialist", type: "Trusted Expert", icon: "🧠" }
              ].map((option, i) => (
                <button 
                  key={i}
                  className="p-8 rounded-3xl border-2 border-slate-100 hover:border-brand hover:bg-brand-light/10 transition-all text-center group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{option.icon}</div>
                  <div className="font-bold text-slate-900 mb-1">{option.label}</div>
                  <div className="text-xs text-brand font-bold uppercase tracking-widest">Matches: {option.type}</div>
                </button>
              ))}
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-lg font-bold">Want a custom creator strategy?</div>
                <div className="text-slate-400 text-sm">Our strategists will hand-pick 5 creators for your brand.</div>
              </div>
              <button className="px-8 py-3 rounded-xl bg-brand text-white font-bold hover:bg-brand-dark transition-colors whitespace-nowrap">
                Get Free Strategy
              </button>
            </div>
          </div>
        </section>
      )}
      {id === "creative-studio" && (
        <section className="py-24 px-[5%] bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Label>UGC & Content Gallery</Label>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tighter">Content Built for <span className="text-brand">Performance</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { t: "Skincare UGC", d: "Authentic routine demonstration.", img: "https://picsum.photos/seed/ugc1/600/800", type: "Video" },
                { t: "Tech Review", d: "Feature-focused performance ad.", img: "https://picsum.photos/seed/ugc2/600/800", type: "Video" },
                { t: "Fashion Lookbook", d: "High-energy lifestyle content.", img: "https://picsum.photos/seed/ugc3/600/800", type: "Reel" },
                { t: "Food & Beverage", d: "Sensory-driven product demo.", img: "https://picsum.photos/seed/ugc4/600/800", type: "Video" },
                { t: "Fitness Journey", d: "Transformation-led storytelling.", img: "https://picsum.photos/seed/ugc5/600/800", type: "Reel" },
                { t: "Home Decor", d: "Aesthetic lifestyle integration.", img: "https://picsum.photos/seed/ugc6/600/800", type: "Static" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-[32px] overflow-hidden bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all"
                >
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img src={item.img} alt={item.t} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest">
                      {item.type}
                    </div>
                    {(item.type === "Video" || item.type === "Reel") && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center shadow-2xl">
                          <Play className="w-6 h-6 text-white fill-white" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.t}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-24 p-12 rounded-[48px] bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/20 blur-[120px]" />
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Label>Our Creative Process</Label>
                  <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-6">From Script to <span className="text-brand">Scale</span></h2>
                  <p className="text-lg text-white/60 mb-8 leading-relaxed">We don't just film and hope for the best. Every piece of content goes through our rigorous performance-first creative process.</p>
                  <div className="space-y-6">
                    {[
                      { t: "Psychological Hook Research", d: "We identify the exact triggers that stop your audience from scrolling." },
                      { t: "Conversion-Led Scripting", d: "Every word is chosen to move the customer closer to a purchase." },
                      { t: "Performance-First Editing", d: "Fast-paced, high-energy edits designed for modern attention spans." }
                    ].map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center text-brand font-black shrink-0">{i + 1}</div>
                        <div>
                          <div className="font-bold text-lg mb-1">{step.t}</div>
                          <div className="text-sm text-white/40 leading-relaxed">{step.d}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-white/5 border border-white/10">
                      <img src="https://picsum.photos/seed/proc1/400/500" alt="Process 1" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                    </div>
                    <div className="aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10">
                      <img src="https://picsum.photos/seed/proc2/400/400" alt="Process 2" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10">
                      <img src="https://picsum.photos/seed/proc3/400/400" alt="Process 3" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                    </div>
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-white/5 border border-white/10">
                      <img src="https://picsum.photos/seed/proc4/400/500" alt="Process 4" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {id === "creative-studio" && (
        <section className="py-24 px-[5%] bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Label>The Economics</Label>
                <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-8">Why UGC Wins on Every Metric</h2>
                <p className="text-lg text-slate-600 mb-12">Traditional studio shoots are slow, expensive, and often feel "too polished" for social feeds. UGC provides the volume and authenticity needed to scale.</p>
                
                <div className="space-y-6">
                  {[
                    { label: "Cost per Asset", studio: "$2,500+", ugc: "$250 - $500", win: "90% Lower Cost" },
                    { label: "Production Time", studio: "4-6 Weeks", ugc: "7-10 Days", win: "4x Faster" },
                    { label: "Ad Recall", studio: "Moderate", ugc: "High (+35%)", win: "Better Engagement" }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100">
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-slate-900">{item.label}</span>
                        <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full">{item.win}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-sm">
                          <div className="text-slate-400 uppercase tracking-widest text-[10px] font-bold">Studio</div>
                          <div className="font-bold text-slate-400 line-through">{item.studio}</div>
                        </div>
                        <div className="text-sm">
                          <div className="text-brand uppercase tracking-widest text-[10px] font-bold">Our UGC</div>
                          <div className="font-bold text-slate-900">{item.ugc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                  <img src="https://picsum.photos/seed/economics/800/800" alt="Economics" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 p-8 rounded-3xl bg-slate-900 text-white shadow-2xl">
                  <div className="text-5xl font-black text-brand mb-2">10x</div>
                  <div className="text-sm font-bold leading-tight">More creative volume for the same budget.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {id === "web-funnel" && (
        <section className="py-24 px-[5%] bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Label>The Infrastructure</Label>
                <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 mb-8">Web & App <span className="text-brand">Development</span></h2>
                <p className="text-lg text-slate-600 mb-10">We don't just build websites; we build conversion machines and custom applications. Every pixel is optimized to guide your customers from curiosity to checkout.</p>
                
                <div className="space-y-4">
                  {[
                    { t: "Mobile App Development", d: "Custom iOS & Android apps built for performance and scale." },
                    { t: "High-CVR Web Design", d: "Sub-2 second load times for zero bounce rate." },
                    { t: "Mobile-First UX", d: "Designed for the thumb, optimized for the scroll." },
                    { t: "One-Click Checkout", d: "Removing every possible friction point in the funnel." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                      <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{item.t}</div>
                        <div className="text-sm text-slate-500">{item.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-white">
                  <img src="https://picsum.photos/seed/funnel-arch/800/1000" alt="Funnel Architecture" className="w-full h-full object-cover rounded-3xl" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -top-10 -left-10 p-8 rounded-3xl bg-slate-900 text-white shadow-2xl">
                  <div className="text-4xl font-black text-brand mb-1">42%</div>
                  <div className="text-xs font-bold uppercase tracking-widest opacity-80">Avg. CVR Increase</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </div>
  );
}
