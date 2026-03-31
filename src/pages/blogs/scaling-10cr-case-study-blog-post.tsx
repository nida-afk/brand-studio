import { useState } from "react";

const phases = [
  {
    phase: "Phase 1",
    title: "Diagnose Before Spending",
    duration: "Weeks 1–2",
    icon: "🔍",
    color: "from-sky-500 to-blue-600",
    border: "border-sky-500",
    bg: "bg-sky-50",
    tag: "bg-sky-100 text-sky-700",
    actions: [
      "Full attribution audit — identified ₹18L/mo in misattributed spend",
      "Creative performance analysis across all active ad sets",
      "Customer LTV segmentation by acquisition channel",
      "Post-purchase flow audit revealed zero SMS retention",
    ],
    result: "Reallocated ₹18L from dead campaigns to proven creative formats in Week 3.",
  },
  {
    phase: "Phase 2",
    title: "Build the Creative Engine",
    duration: "Weeks 3–6",
    icon: "⚙️",
    color: "from-violet-500 to-purple-600",
    border: "border-violet-500",
    bg: "bg-violet-50",
    tag: "bg-violet-100 text-violet-700",
    actions: [
      "Onboarded 12 UGC creators across 3 audience personas",
      "Produced 40+ creative variants in the first month",
      "Built modular editing templates for 48-hour turnaround",
      "Launched weekly creative review cadence with media team",
    ],
    result: "Average CTR lifted from 0.9% to 2.4% within 3 weeks of new creative deployment.",
  },
  {
    phase: "Phase 3",
    title: "Fix the Funnel Leaks",
    duration: "Weeks 5–8",
    icon: "🔧",
    color: "from-emerald-500 to-teal-600",
    border: "border-emerald-500",
    bg: "bg-emerald-50",
    tag: "bg-emerald-100 text-emerald-700",
    actions: [
      "Built 5 dedicated post-click landing pages matched to top ad angles",
      "Implemented 7-email post-purchase sequence with product education",
      "Launched SMS win-back flow for 90-day lapsed customers",
      "Added subscribe-and-save option to top 3 SKUs",
    ],
    result: "Conversion rate improved 34%. Repeat purchase rate increased from 18% to 31%.",
  },
  {
    phase: "Phase 4",
    title: "Scale With Confidence",
    duration: "Weeks 9–16",
    icon: "🚀",
    color: "from-orange-500 to-rose-500",
    border: "border-orange-500",
    bg: "bg-orange-50",
    tag: "bg-orange-100 text-orange-700",
    actions: [
      "Ran geo holdout incrementality test to validate true ROAS",
      "Increased Meta budget 25% week-over-week on confirmed winners",
      "Expanded to Google Performance Max with UGC creative assets",
      "Launched influencer whitelisting to extend organic reach",
    ],
    result: "Monthly revenue crossed ₹10Cr in Week 16. Blended ROAS held at 3.8× throughout.",
  },
];

const metrics = [
  { label: "Starting Revenue", value: "₹2.1Cr", sub: "Month 1 baseline", color: "from-gray-400 to-gray-600", light: true },
  { label: "Peak Revenue", value: "₹10Cr", sub: "Month 4 achieved", color: "from-emerald-500 to-teal-600" },
  { label: "Blended ROAS", value: "3.8×", sub: "Sustained at scale", color: "from-violet-500 to-purple-600" },
  { label: "CPA Reduction", value: "41%", sub: "vs. pre-engagement baseline", color: "from-orange-500 to-rose-500" },
];

const timeline = [
  { month: "Month 1", rev: "₹2.1Cr", roas: "1.9×", note: "Audit & creative rebuild", pct: 21 },
  { month: "Month 2", rev: "₹4.3Cr", roas: "2.6×", note: "Funnel fixes deployed", pct: 43 },
  { month: "Month 3", rev: "₹7.2Cr", roas: "3.4×", note: "Scaling phase begins", pct: 72 },
  { month: "Month 4", rev: "₹10Cr", roas: "3.8×", note: "Target achieved", pct: 100 },
];

const faqs = [
  {
    q: "How long does it realistically take to scale a D2C brand to ₹10Cr/month?",
    a: "Based on our experience, a brand with a proven product and existing ad spend of ₹30–60L/month can reach ₹10Cr in monthly revenue within 3–5 months with the right performance system in place. Brands starting from ₹10–15L/month typically need 6–9 months. The timeline depends on product-market fit, margin structure, and how quickly the creative engine can be built.",
    color: "border-l-sky-500",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    q: "What ad spend is required to scale to ₹10Cr/month?",
    a: "At a blended ROAS of 3.5–4×, reaching ₹10Cr in monthly revenue requires roughly ₹2.5–3Cr in monthly ad spend. However, spend without a functioning funnel — matched landing pages, retention flows, and creative velocity — simply burns faster. Getting the system right before scaling spend is non-negotiable.",
    color: "border-l-violet-500",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    q: "What channels drive the most revenue at scale for D2C brands?",
    a: "At ₹10Cr/month scale, Meta Ads typically drive 55–65% of paid revenue, with Google Performance Max contributing 20–30% and influencer/affiliate channels adding 10–15%. Critically, retention channels — email and SMS — often account for 25–40% of total revenue, making them the highest-ROI investment before scaling acquisition spend.",
    color: "border-l-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    q: "Is UGC really necessary at this scale?",
    a: "Absolutely. At ₹10Cr/month scale, you need 8–15 new creative variants weekly to prevent fatigue and keep Meta's algorithm in an active learning phase. No studio production model can sustain that volume at cost. UGC — with a well-briefed creator roster and modular editing pipeline — is the only format that enables both the volume and the authenticity that converts at scale.",
    color: "border-l-orange-500",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    q: "How does Brand Propel Studio structure its engagement for scaling brands?",
    a: "We begin every engagement with a 2-week diagnostic phase — auditing attribution, creative performance, funnel conversion, and retention mechanics. From there, we build a 90-day scaling roadmap and execute across creative production, media buying, landing page optimisation, and retention strategy simultaneously. We don't manage one channel in isolation — we manage the system.",
    color: "border-l-rose-500",
    badge: "bg-rose-100 text-rose-700",
  },
];

export default function CaseStudyBlog() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">


      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-gray-950">
        {/* BG effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,_rgba(16,185,129,0.2),_transparent)]" />
        <div className="absolute top-10 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 pt-14 pb-12 text-center">

          {/* Case study badge */}
          <div className="inline-flex items-center gap-2 border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Case Study · 2025
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5">
            Scaling to{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                ₹10Cr/Month
              </span>
            </span>
            <br />
            <span className="text-gray-300 text-3xl md:text-4xl font-semibold">
              A Case Study in Performance Marketing
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            How a D2C lifestyle brand went from ₹2.1Cr to ₹10Cr in monthly revenue in 16 weeks — without tripling their ad spend.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Performance Marketing", "D2C Scaling", "Meta Ads", "UGC", "ROAS", "LTV", "Retention"].map((t) => (
              <span key={t} className="bg-white/5 border border-white/10 text-gray-400 text-xs px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>

          {/* Author + read time */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-xs font-bold">BP</div>
            <span className="text-gray-300 text-sm font-medium">Brand Propel Studio</span>
            <span className="text-gray-600 text-xs">· 7 min read</span>
          </div>
        </div>
      </header>

      {/* ── KEY METRICS ── */}
      <div className="bg-gray-950 border-b border-gray-800/60 px-6 py-10">
        <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Campaign Results at a Glance</p>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map(({ label, value, sub, color, light }) => (
            <div key={label} className="bg-white/5 border border-white/5 rounded-2xl p-5 text-center">
              <p className={`text-3xl md:text-4xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-1`}>{value}</p>
              <p className={`text-xs font-bold mb-0.5 ${light ? "text-gray-500" : "text-gray-300"}`}>{label}</p>
              <p className="text-xs text-gray-600">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── ARTICLE ── */}
      <article className="max-w-3xl mx-auto px-6 py-16 space-y-16">

        {/* CONTEXT */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-slate-400 to-gray-500" />
            <h2 className="text-2xl font-black text-gray-900">The Starting Point</h2>
          </div>

          {/* Brand profile card */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-6">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Brand Profile</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { label: "Category", value: "D2C Lifestyle / Wellness" },
                { label: "Founded", value: "2021" },
                { label: "Starting MRR", value: "₹2.1 Crore" },
                { label: "Channels", value: "Meta + Google" },
                { label: "Team Size", value: "11 in-house" },
                { label: "Core Problem", value: "Stalled growth at 2Cr" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                  <p className="text-sm font-bold text-gray-800">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            The brand came to Brand Propel Studio stuck. They'd been running Meta Ads for 18 months, had a capable in-house team, and genuinely loved their product — but monthly revenue had plateaued between ₹1.8–2.3Cr for six consecutive months. Every time they increased ad spend, CPAs spiked and ROAS collapsed. They'd tried three creative agencies. Nothing moved the needle.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            The problem wasn't budget. It wasn't the product. It was the system — or more precisely, the complete absence of one. What followed was a 16-week rebuild that took them from ₹2.1Cr to <span className="font-bold text-emerald-700">₹10Cr in monthly revenue</span>, with a blended ROAS of 3.8× sustained throughout.
          </p>
        </section>

        {/* REVENUE CHART */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-emerald-500 to-teal-600" />
            <h2 className="text-2xl font-black text-gray-900">The Growth Curve</h2>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
            <div className="space-y-4">
              {timeline.map(({ month, rev, roas, note, pct }) => (
                <div key={month}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-black text-gray-800 w-20">{month}</span>
                      <span className="text-sm font-bold text-emerald-700">{rev}</span>
                      <span className="text-xs text-gray-400 hidden sm:block">{note}</span>
                    </div>
                    <span className="text-xs font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">
                      ROAS {roas}
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-5 text-center">Monthly revenue growth across 4-month engagement</p>
          </div>
        </section>

        {/* ── PHASES ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-violet-500 to-purple-600" />
            <h2 className="text-2xl font-black text-gray-900">The 4-Phase Playbook</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-7">
            We don't have a generic playbook — we have a diagnostic-first framework. But the four phases of this engagement reveal the sequence that makes scaling work: understand, build, fix, then fuel.
          </p>

          {/* Phase tabs */}
          <div className="grid grid-cols-4 gap-2 mb-6">
            {phases.map((p, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                className={`rounded-xl py-2.5 px-2 text-center transition-all border ${
                  activePhase === i
                    ? `bg-gradient-to-br ${p.color} text-white border-transparent shadow-md`
                    : "bg-gray-50 text-gray-500 border-gray-100 hover:border-gray-300"
                }`}
              >
                <div className="text-lg mb-0.5">{p.icon}</div>
                <div className="text-[10px] font-black leading-tight">{p.phase}</div>
              </button>
            ))}
          </div>

          {/* Phase detail card */}
          {phases.map((p, i) => (
            <div key={i} className={`${activePhase === i ? "block" : "hidden"}`}>
              <div className={`border border-gray-100 border-l-4 ${p.border} rounded-2xl bg-white shadow-sm overflow-hidden`}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.tag} inline-block mb-2`}>{p.duration}</span>
                      <h3 className="text-xl font-black text-gray-900">{p.title}</h3>
                    </div>
                    <span className="text-3xl">{p.icon}</span>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {p.actions.map((action, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${p.color} flex-shrink-0 flex items-center justify-center mt-0.5`}>
                          <span className="text-white text-[9px] font-black">{j + 1}</span>
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed">{action}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={`${p.bg} border ${p.border.replace("border-", "border-")} rounded-xl p-4 flex gap-3`}>
                    <span className="text-lg mt-0.5">📈</span>
                    <div>
                      <p className="text-xs font-black text-gray-700 uppercase tracking-wide mb-1">Result</p>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed">{p.result}</p>
                    </div>
                  </div>
                </div>

                {/* Phase nav */}
                <div className="border-t border-gray-100 bg-gray-50 px-6 py-3 flex justify-between items-center">
                  <button
                    onClick={() => setActivePhase(Math.max(0, i - 1))}
                    disabled={i === 0}
                    className="text-xs font-bold text-gray-400 hover:text-gray-700 disabled:opacity-30 transition-colors"
                  >← Previous Phase</button>
                  <span className="text-xs text-gray-400">{i + 1} of {phases.length}</span>
                  <button
                    onClick={() => setActivePhase(Math.min(phases.length - 1, i + 1))}
                    disabled={i === phases.length - 1}
                    className="text-xs font-bold text-gray-400 hover:text-gray-700 disabled:opacity-30 transition-colors"
                  >Next Phase →</button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* PULL QUOTE */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-950 to-gray-900 p-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,_rgba(16,185,129,0.15),_transparent)]" />
          <div className="absolute right-6 top-4 text-white/5 text-[96px] font-serif leading-none select-none">"</div>
          <div className="relative">
            <p className="text-white text-xl md:text-2xl font-bold leading-snug max-w-lg mb-4">
              The brand didn't need more spend. It needed a system. Once the system was in place, the spend scaled itself.
            </p>
            <p className="text-emerald-400 text-sm">— Brand Propel Studio Strategy Lead, 2025</p>
          </div>
        </div>

        {/* KEY LEARNINGS */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-orange-500 to-rose-500" />
            <h2 className="text-2xl font-black text-gray-900">3 Lessons Every Scaling D2C Brand Needs to Hear</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "Attribution lies — and it's costing you more than you think",
                body: "This brand was spending ₹18L/month on campaigns that reported strong ROAS but contributed zero incremental revenue. Without a holdout test, they never would have known. Fix your measurement before you scale your spend.",
                color: "bg-gradient-to-br from-sky-500 to-blue-600",
                bg: "bg-sky-50 border-sky-100",
              },
              {
                num: "02",
                title: "Retention is the most underspent acquisition channel",
                body: "Adding a 7-email post-purchase sequence and SMS win-back flow increased repeat purchase rate from 18% to 31%. That improvement alone reduced the effective CAC by ₹340 per customer — without touching ad spend.",
                color: "bg-gradient-to-br from-emerald-500 to-teal-600",
                bg: "bg-emerald-50 border-emerald-100",
              },
              {
                num: "03",
                title: "Creative velocity is the actual scaling mechanism",
                body: "At ₹10Cr/month, this brand was deploying 12+ new creative variants weekly. Not because they had a big budget — because they had a system. When creative stops refreshing, CPMs rise and ROAS collapses, no matter how much you spend.",
                color: "bg-gradient-to-br from-violet-500 to-purple-600",
                bg: "bg-violet-50 border-violet-100",
              },
            ].map(({ num, title, body, color, bg }) => (
              <div key={num} className={`flex gap-4 border rounded-2xl p-5 ${bg}`}>
                <div className={`w-10 h-10 rounded-xl ${color} flex-shrink-0 flex items-center justify-center text-white text-xs font-black`}>{num}</div>
                <div>
                  <p className="font-black text-sm text-gray-900 mb-1.5">{title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CAN THIS WORK FOR YOU */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-rose-500 to-pink-500" />
            <h2 className="text-2xl font-black text-gray-900">Can This Work for Your Brand?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            This isn't an outlier result — it's a repeatable system. The four phases — diagnostic, creative engine, funnel repair, and scaled acquisition — apply to any D2C brand with a proven product and existing paid media presence.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The prerequisite isn't budget size. It's product-market fit. If customers love your product and your word-of-mouth retention is strong, a performance system will compound that signal into scalable, profitable growth. If the product has fundamental issues, no amount of creative or budget fixes that — but that's not who this case study is for.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            At <span className="font-bold text-emerald-700">Brand Propel Studio</span>, we work with D2C brands that are ready to move from ₹1–3Cr/month to ₹5–10Cr and beyond. If that's where you are, the first step is always the same: understand the system before you spend more on the symptom.
          </p>

          {/* Eligibility checklist */}
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-2xl p-6">
            <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4">Is Your Brand Ready to Scale?</p>
            <div className="space-y-2.5">
              {[
                "You have a proven product with repeat customers",
                "Current monthly revenue is ₹1Cr–₹4Cr",
                "You're running Meta or Google Ads with ₹20L+/month",
                "Growth has stalled despite increasing spend",
                "You're ready to invest in the system, not just the channel",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MID CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 p-8 text-center">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_white,_transparent)]" />
          <div className="relative">
            <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest mb-2">Ready for Your Case Study?</p>
            <h3 className="text-2xl font-black text-white mb-3">Let's Build Your Scaling System</h3>
            <p className="text-emerald-100 text-sm max-w-md mx-auto mb-6 leading-relaxed">
              Start with a free diagnostic audit. We'll map exactly where your growth is stalling — and what it will take to fix it.
            </p>
            <a
              href="https://brandpropelstudio.com"
              className="inline-block bg-white text-emerald-700 font-black text-sm px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors"
            >
              Book a Free Diagnostic →
            </a>
          </div>
        </div>

        {/* ── FAQ ── */}
        <section>
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Questions?</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2">Scaling FAQs</h2>
            <p className="text-gray-500 text-sm mt-2">What founders ask before they commit to scaling</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`border-l-4 ${faq.color} bg-gray-50 rounded-r-2xl overflow-hidden shadow-sm`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className={`text-xs font-black px-2.5 py-0.5 rounded-full flex-shrink-0 ${faq.badge}`}>Q{i + 1}</span>
                    <span className="font-bold text-gray-800 text-sm">{faq.q}</span>
                  </div>
                  <span className={`text-gray-300 text-2xl font-light flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="rounded-2xl overflow-hidden bg-gray-950 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,_rgba(16,185,129,0.12),_transparent)]" />
          <div className="relative p-8 text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-black text-lg mx-auto mb-4">
              BP
            </div>
            <h3 className="text-white font-black text-lg mb-1">Brand Propel Studio</h3>
            <p className="text-gray-500 text-sm mb-5">Performance Marketing · D2C Scaling · UGC Creative · Retention Systems</p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["₹10Cr Scale", "Meta Ads", "Creative Velocity", "LTV Optimisation", "Incrementality"].map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">{t}</span>
              ))}
            </div>
            <a
              href="https://brandpropelstudio.com"
              className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Visit brandpropelstudio.com →
            </a>
          </div>
        </footer>

      </article>
    </div>
  );
}
