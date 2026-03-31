import { useState } from "react";

const hacks = [
  {
    number: "01",
    icon: "🎯",
    title: "Kill Broad Targeting — Let Creative Do the Targeting",
    tag: "Creative Strategy",
    tagColor: "bg-orange-100 text-orange-700",
    borderColor: "border-t-orange-500",
    accentColor: "text-orange-600",
    numberBg: "bg-gradient-to-br from-orange-500 to-red-500",
    body: "The biggest mistake D2C brands make in 2025 is over-relying on Meta's audience targeting controls. With broad and advantage+ audiences now outperforming hyper-segmented stacks, your creative is the actual targeting lever. A UGC hook showing a 30-something mum solving a specific problem will self-select its audience far better than a saved audience ever could. Invest your testing budget into creative variants — not targeting layers.",
    tip: "Run 3–5 unique hooks per ad set. Let the algorithm find who resonates. Scale the winners fast.",
  },
  {
    number: "02",
    icon: "⚡",
    title: "Compress Your Funnel With a Post-Click Experience",
    tag: "Conversion Rate",
    tagColor: "bg-violet-100 text-violet-700",
    borderColor: "border-t-violet-500",
    accentColor: "text-violet-600",
    numberBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    body: "Most D2C brands optimise the ad but ignore what happens after the click. Your landing page isn't a product page — it's a conversion engine. The best-performing D2C brands in 2025 use dedicated post-click pages built around the specific hook, offer, and audience of each ad. Matching the message from ad to landing page reduces friction, improves quality score, and lifts conversion rates by up to 40%.",
    tip: "Build one landing page per campaign angle. Mirror the hook. Remove all navigation. Drive one action.",
  },
  {
    number: "03",
    icon: "🔁",
    title: "Build a Retention Loop Before You Scale Acquisition",
    tag: "LTV Optimisation",
    tagColor: "bg-teal-100 text-teal-700",
    borderColor: "border-t-teal-500",
    accentColor: "text-teal-600",
    numberBg: "bg-gradient-to-br from-teal-500 to-emerald-500",
    body: "Scaling paid acquisition without a retention loop is like filling a leaking bucket. D2C brands that achieve profitable growth in 2025 nail lifetime value before they pour fuel on top-of-funnel spend. That means post-purchase email sequences, SMS win-back flows, loyalty incentives, and subscribe-and-save mechanics that turn one-time buyers into repeat customers. When your LTV climbs, your breakeven CPA rises — giving you headroom to outbid competitors.",
    tip: "Set up a 5-email post-purchase flow before launching your next acquisition campaign. It pays for itself within 30 days.",
  },
  {
    number: "04",
    icon: "📊",
    title: "Use Incrementality Testing — Not Just ROAS",
    tag: "Measurement",
    tagColor: "bg-blue-100 text-blue-700",
    borderColor: "border-t-blue-500",
    accentColor: "text-blue-600",
    numberBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    body: "Reported ROAS is one of the most misleading metrics in D2C marketing. It counts conversions that would have happened anyway — organic, branded search, repeat buyers — and attributes them to paid channels. Smart D2C brands run geo-based holdout tests or Meta's Conversion Lift studies to measure true incrementality: the actual revenue driven by ads, not the revenue that happened near ads. This alone transforms budget allocation decisions.",
    tip: "Run a 2-week geo holdout test on your top campaign. The difference in revenue between exposed and control regions is your real ROAS.",
  },
  {
    number: "05",
    icon: "🚀",
    title: "Create a Creative Velocity System",
    tag: "Scaling Framework",
    tagColor: "bg-rose-100 text-rose-700",
    borderColor: "border-t-rose-500",
    accentColor: "text-rose-600",
    numberBg: "bg-gradient-to-br from-rose-500 to-pink-600",
    body: "The #1 bottleneck killing D2C ad performance in 2025 is creative fatigue. Winning creatives decay fast — sometimes within 10–14 days. Brands that scale profitably maintain a creative velocity system: a repeatable process for producing, testing, and replacing creatives before fatigue hits. This means a standing UGC creator roster, modular editing templates, and a weekly creative review cadence built into your marketing ops.",
    tip: "Aim for a minimum of 8–12 new creative variants per month. Treat creative production like a performance channel, not a project.",
  },
];

const metrics = [
  { label: "Avg. CPA Reduction", value: "38%", sub: "with creative-led targeting", color: "from-orange-500 to-red-500" },
  { label: "Conversion Lift", value: "40%", sub: "with matched post-click pages", color: "from-violet-500 to-purple-600" },
  { label: "LTV Increase", value: "2.4×", sub: "with retention loop in place", color: "from-teal-500 to-emerald-500" },
  { label: "ROAS Clarity", value: "3×", sub: "better with incrementality testing", color: "from-blue-500 to-indigo-600" },
];

const faqs = [
  {
    q: "What is performance marketing for D2C brands?",
    a: "Performance marketing is paid digital advertising where you pay for measurable outcomes — clicks, leads, purchases — rather than impressions. For D2C brands, it primarily means Meta Ads, Google Ads, and TikTok Ads optimised toward purchase conversions, with success measured by metrics like CPA, ROAS, and LTV.",
    color: "border-l-orange-500",
    badge: "bg-orange-100 text-orange-700",
  },
  {
    q: "How much should a D2C brand spend on paid ads to scale?",
    a: "There's no universal number — but the principle is: don't scale spend before your unit economics are proven. A healthy D2C brand should see a payback period of 60–90 days on customer acquisition cost before increasing budgets. Start with ₹50K–₹2L/month to test and validate, then scale 20–30% weekly once a winning creative and funnel is confirmed.",
    color: "border-l-violet-500",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    q: "Why is creative velocity important for D2C scaling?",
    a: "Paid social algorithms optimise quickly and audiences see the same ads fast — causing creative fatigue. When an ad fatigues, CPMs rise, CTRs fall, and ROAS collapses. Brands with a steady pipeline of fresh creatives maintain performance by constantly replacing fatigued ads with new variants before decay sets in. Creative velocity is the single biggest lever for sustainable scaling.",
    color: "border-l-teal-500",
    badge: "bg-teal-100 text-teal-700",
  },
  {
    q: "What is incrementality testing and why does it matter?",
    a: "Incrementality testing measures the true causal impact of your ads — the revenue you would have lost if your campaigns hadn't run. Unlike reported ROAS, which over-counts by attributing organic and branded conversions to paid channels, incrementality testing uses holdout groups or conversion lift studies to isolate genuine ad-driven sales. It's essential for accurate budget allocation.",
    color: "border-l-blue-500",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    q: "How can Brand Propel Studio help D2C brands scale performance marketing?",
    a: "Brand Propel Studio specialises in full-funnel performance marketing for D2C brands — from creative production and UGC sourcing to media buying, landing page optimisation, and retention flows. We build systems, not one-off campaigns, so your brand compounds growth month over month rather than depending on the next big spend increase.",
    color: "border-l-rose-500",
    badge: "bg-rose-100 text-rose-700",
  },
];

export default function D2CPerformanceBlog() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeHack, setActiveHack] = useState<number>(0);

  return (
    <div className="min-h-screen bg-[#fafaf8] text-gray-900 font-sans">

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,_rgba(249,115,22,0.25),_transparent)]" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-rose-600/15 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-56 h-56 bg-orange-500/10 rounded-full blur-2xl" />

        <div className="relative max-w-4xl mx-auto px-6 pt-14 pb-12 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-orange-500/40 bg-orange-500/10 text-orange-300 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            D2C Growth · 2025
          </div>

          {/* Eyebrow number */}
          <div className="flex justify-center mb-3">
            <span className="text-8xl font-black text-white/5 leading-none select-none tracking-tighter">5</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight -mt-10 mb-5">
            5 Performance Marketing<br />
            <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
              Hacks for D2C Brands
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Stop burning budget. Start compounding growth. These five frameworks separate profitable D2C brands from the ones chasing scale they can't sustain.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Performance Marketing", "D2C Strategy", "Meta Ads", "ROAS", "Creative Velocity", "LTV"].map((t) => (
              <span key={t} className="bg-white/5 border border-white/10 text-gray-400 text-xs px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>

          {/* Author */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center text-white text-xs font-bold">BP</div>
            <span className="text-gray-300 text-sm font-medium">Brand Propel Studio</span>
            <span className="text-gray-600 text-xs">· 7 min read</span>
          </div>
        </div>
      </header>

      {/* ── METRICS BAND ── */}
      <div className="bg-white border-b border-gray-100 px-6 py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map(({ label, value, sub, color }) => (
            <div key={label} className="text-center p-4 rounded-2xl bg-gray-50 border border-gray-100">
              <p className={`text-3xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent mb-1`}>{value}</p>
              <p className="text-xs font-semibold text-gray-700">{label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── ARTICLE ── */}
      <article className="max-w-3xl mx-auto px-6 py-16 space-y-16">

        {/* INTRO */}
        <section>
          <p className="text-lg text-gray-700 leading-relaxed">
            D2C brands are operating in the most competitive paid media environment in history. CPMs are up. iOS privacy changes have blurred attribution. Creative fatigue is accelerating. And every competitor has access to the same platforms, the same audiences, and the same tools as you.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            So what separates the D2C brands scaling profitably from those burning budget and spinning their wheels? It isn't budget size. It isn't the platform. It's <em className="text-gray-900 font-semibold">how they run the system.</em>
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            At <span className="font-bold text-orange-600">Brand Propel Studio</span>, we've studied performance across dozens of D2C accounts across India, the UK, and the US. Here are the five hacks that consistently move the needle — and how to apply each one today.
          </p>
        </section>

        {/* ── HACK NAVIGATOR ── */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-orange-400 to-rose-500" />
            <h2 className="text-2xl font-black text-gray-900">The 5 Hacks</h2>
          </div>

          {/* Tab selector */}
          <div className="flex gap-2 flex-wrap mb-6">
            {hacks.map((h, i) => (
              <button
                key={i}
                onClick={() => setActiveHack(i)}
                className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${
                  activeHack === i
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-400"
                }`}
              >
                {h.number}
              </button>
            ))}
          </div>

          {/* Active hack card */}
          {hacks.map((hack, i) => (
            <div
              key={i}
              className={`transition-all duration-300 ${activeHack === i ? "block" : "hidden"}`}
            >
              <div className={`border border-gray-100 border-t-4 ${hack.borderColor} rounded-2xl bg-white shadow-sm overflow-hidden`}>
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-5 mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${hack.numberBg} flex items-center justify-center text-white font-black text-lg flex-shrink-0`}>
                      {hack.number}
                    </div>
                    <div>
                      <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${hack.tagColor} mb-2`}>{hack.tag}</span>
                      <h3 className="text-xl font-black text-gray-900 leading-snug">{hack.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-5">{hack.body}</p>
                  <div className="flex gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <span className="text-lg mt-0.5">💡</span>
                    <div>
                      <p className="text-xs font-bold text-gray-900 mb-1 uppercase tracking-wide">Quick Win</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{hack.tip}</p>
                    </div>
                  </div>
                </div>
                {/* Navigation */}
                <div className="border-t border-gray-100 px-6 py-3 flex justify-between items-center bg-gray-50">
                  <button
                    onClick={() => setActiveHack(Math.max(0, i - 1))}
                    disabled={i === 0}
                    className="text-xs font-semibold text-gray-400 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    ← Previous
                  </button>
                  <div className="flex gap-1.5">
                    {hacks.map((_, dot) => (
                      <button
                        key={dot}
                        onClick={() => setActiveHack(dot)}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${dot === i ? "bg-gray-900 w-4" : "bg-gray-300"}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveHack(Math.min(hacks.length - 1, i + 1))}
                    disabled={i === hacks.length - 1}
                    className="text-xs font-semibold text-gray-400 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ALL 5 COMPACT LIST */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-violet-500 to-blue-600" />
            <h2 className="text-2xl font-black text-gray-900">The System Behind the Hacks</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            These five hacks aren't isolated tactics — they form a compounding system. Creative velocity feeds the algorithm. The algorithm drives qualified traffic. A matched post-click page converts it. A retention loop monetises it repeatedly. And incrementality testing tells you exactly which part of the system to invest more in.
          </p>

          {/* Compact list */}
          <div className="space-y-3">
            {hacks.map((h, i) => (
              <div
                key={i}
                onClick={() => setActiveHack(i)}
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 cursor-pointer hover:border-gray-300 hover:shadow-sm transition-all group"
              >
                <div className={`w-9 h-9 rounded-xl ${h.numberBg} flex-shrink-0 flex items-center justify-center text-white text-xs font-black`}>
                  {h.number}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm text-gray-800 truncate">{h.title}</p>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${h.tagColor}`}>{h.tag}</span>
                </div>
                <span className="text-gray-300 group-hover:text-gray-600 transition-colors text-lg">→</span>
              </div>
            ))}
          </div>
        </section>

        {/* PULL QUOTE */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-950 to-gray-900 p-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,_rgba(249,115,22,0.2),_transparent)]" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-rose-500/10 rounded-full blur-2xl" />
          <div className="relative">
            <div className="text-6xl text-white/10 font-serif leading-none mb-3 select-none">"</div>
            <p className="text-white text-xl md:text-2xl font-bold leading-snug max-w-lg">
              D2C brands that build a creative velocity system scale 3× faster than those that don't — with lower CPAs and stronger retention.
            </p>
            <p className="text-orange-400 text-sm mt-4">— Brand Propel Studio Growth Research, 2025</p>
          </div>
        </div>

        {/* BPS APPROACH */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-rose-500 to-pink-600" />
            <h2 className="text-2xl font-black text-gray-900">How Brand Propel Studio Applies These Hacks</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We don't manage campaigns. We build performance systems. When a D2C brand comes to Brand Propel Studio, we audit their full funnel — from creative production capacity to post-purchase retention sequences — before recommending a single budget increase.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The result is a compounding growth engine rather than a spend-dependent spike. Our D2C clients typically see CPA reductions within the first 30 days — not from spending more, but from fixing the leaks in the existing system: weak hooks, unmatched landing pages, absent retention flows, and misread attribution data.
          </p>

          {/* Steps */}
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { num: "1", title: "Audit", desc: "Full-funnel review — creative, landing pages, retention, measurement", color: "bg-orange-500" },
              { num: "2", title: "Build", desc: "Creative systems, post-click pages, retention flows, and measurement frameworks", color: "bg-violet-600" },
              { num: "3", title: "Scale", desc: "Compound with data — weekly creative refreshes, budget allocation by true ROAS", color: "bg-teal-600" },
            ].map(({ num, title, desc, color }) => (
              <div key={num} className="bg-white border border-gray-100 rounded-2xl p-5 text-center">
                <div className={`w-10 h-10 rounded-full ${color} text-white font-black text-lg flex items-center justify-center mx-auto mb-3`}>{num}</div>
                <p className="font-bold text-gray-800 text-sm mb-1">{title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MID CTA */}
        <div className="rounded-2xl bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 p-px">
          <div className="bg-white rounded-[calc(1rem-1px)] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">Scale Without Burning Budget</p>
              <h3 className="text-xl font-black text-gray-900 mb-1">Get Your D2C Performance Audit</h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-sm">We'll identify exactly where your funnel is leaking — and show you how to fix it.</p>
            </div>
            <a
              href="https://brandpropelstudio.com"
              className="flex-shrink-0 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Book a Free Audit →
            </a>
          </div>
        </div>

        {/* CLOSING */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-indigo-500 to-blue-500" />
            <h2 className="text-2xl font-black text-gray-900">The Bottom Line for D2C Marketers</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Scaling a D2C brand in 2025 isn't about having the biggest budget — it's about building the tightest system. The brands winning in paid social right now have one thing in common: they treat every element of the funnel as a performance variable, not a fixed cost.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Start with hack number one. Run creative experiments before touching your targeting. Then build the post-click experience, lock in your retention loop, validate with incrementality testing, and systematise your creative production. Each step builds on the last — and each makes the next one more profitable.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            At <span className="font-bold text-orange-600">Brand Propel Studio</span>, this is exactly the playbook we implement for D2C brands across fashion, beauty, health, and lifestyle. If you're ready to stop guessing and start compounding, we're ready to build the system with you.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Got Questions?</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2">Performance Marketing FAQs</h2>
            <p className="text-gray-500 text-sm mt-2">Everything D2C founders ask before they scale</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`border-l-4 ${faq.color} bg-white rounded-r-2xl overflow-hidden shadow-sm`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className={`text-xs font-black px-2.5 py-0.5 rounded-full flex-shrink-0 ${faq.badge}`}>Q{i + 1}</span>
                    <span className="font-bold text-gray-800 text-sm">{faq.q}</span>
                  </div>
                  <span className={`text-gray-300 text-2xl flex-shrink-0 font-light transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
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
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,_rgba(249,115,22,0.15),_transparent)]" />
          <div className="relative p-8 text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-600 flex items-center justify-center text-white font-black text-lg mx-auto mb-4">BP</div>
            <h3 className="text-white font-black text-lg mb-1">Brand Propel Studio</h3>
            <p className="text-gray-500 text-sm mb-5">D2C Performance Marketing · UGC Creative · Retention Strategy · Media Buying</p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["Meta Ads", "Creative Velocity", "LTV Optimisation", "Incrementality", "D2C Growth"].map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">{t}</span>
              ))}
            </div>
            <a
              href="https://brandpropelstudio.com"
              className="inline-block bg-gradient-to-r from-orange-500 to-rose-500 text-white font-bold text-sm px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Visit brandpropelstudio.com →
            </a>
          </div>
        </footer>

      </article>
    </div>
  );
}
