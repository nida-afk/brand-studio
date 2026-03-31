import { useState } from "react";

const stats = [
  { value: "4.5×", label: "Higher engagement on TikTok vs polished studio ads", color: "from-violet-600 to-purple-700" },
  { value: "68%", label: "Of consumers say UGC makes brands feel more credible", color: "from-rose-500 to-pink-600" },
  { value: "3–5×", label: "Lower cost-per-creative vs traditional studio shoots", color: "from-amber-500 to-orange-600" },
  { value: "82%", label: "Of buyers trust peer reviews over brand-produced ads", color: "from-teal-500 to-emerald-600" },
];

const pillars = [
  {
    icon: "🎯",
    title: "Performance-First Briefing",
    desc: "Every UGC brief is built around proven hook frameworks, audience insight, and conversion goals — not just brand aesthetics.",
    accent: "bg-violet-50 border-violet-200",
    iconBg: "bg-violet-100",
    titleColor: "text-violet-800",
  },
  {
    icon: "🤝",
    title: "Creator–Brand Matching",
    desc: "We match creators whose audience demographics and communication style align with your ideal customer profile, not just follower count.",
    accent: "bg-rose-50 border-rose-200",
    iconBg: "bg-rose-100",
    titleColor: "text-rose-800",
  },
  {
    icon: "🔬",
    title: "Iterative Testing & Optimisation",
    desc: "We deploy creative in structured A/B tests, identify winning hooks and formats, and rapidly iterate to compound performance over time.",
    accent: "bg-amber-50 border-amber-200",
    iconBg: "bg-amber-100",
    titleColor: "text-amber-800",
  },
];

const faqs = [
  {
    q: "What is UGC and how does it differ from studio content?",
    a: "User-Generated Content (UGC) is raw, authentic video or imagery created by real consumers, creators, or brand advocates — shot on phones in everyday environments. Studio content is professionally produced with controlled lighting, sets, and scripted messaging. While studio content looks polished, UGC feels real, and in 2025 that authenticity is what drives conversions.",
    color: "border-violet-400",
    badgeColor: "bg-violet-100 text-violet-700",
  },
  {
    q: "Why is UGC outperforming studio content in paid ads?",
    a: "Platforms like Meta and TikTok now reward creative diversity and authentic engagement signals. UGC generates unique visual fingerprints (Entity IDs on Meta) that open fresh learning phases. It also resists ad fatigue faster because every creator brings a different environment, tone, and hook.",
    color: "border-rose-400",
    badgeColor: "bg-rose-100 text-rose-700",
  },
  {
    q: "Is UGC only effective for e-commerce brands?",
    a: "Not at all. While e-commerce was the first vertical to scale UGC, industries like SaaS, healthcare, fintech, and even B2B services are seeing strong ROI from authentic creator content — especially for top-of-funnel awareness and retargeting campaigns.",
    color: "border-amber-400",
    badgeColor: "bg-amber-100 text-amber-700",
  },
  {
    q: "How can Brand Propel Studio help with UGC strategy?",
    a: "At Brand Propel Studio, we blend performance creative strategy with UGC sourcing, scripting, and production. We match your brand with the right creators, craft data-backed hooks, and deliver scroll-stopping content optimised for Meta, TikTok, and YouTube Shorts.",
    color: "border-teal-400",
    badgeColor: "bg-teal-100 text-teal-700",
  },
  {
    q: "How much does UGC content cost compared to studio production?",
    a: "UGC is typically 3–5× more cost-effective than traditional studio shoots. A single studio day can cost $5,000–$20,000+, while a UGC campaign can deliver 10–20 unique creatives at a fraction of that cost — with higher authenticity and often better performance metrics.",
    color: "border-indigo-400",
    badgeColor: "bg-indigo-100 text-indigo-700",
  },
];

export default function UGCBlogPost() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-rose-500" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative px-6 pt-16 pb-14 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
            Content Strategy · May 2025
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            How UGC Is{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Outperforming</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-amber-400/50 -rotate-1 rounded" />
            </span>{" "}
            Studio Content in 2025
          </h1>

          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Authentic beats polished. Here's the data — and what it means for your next campaign.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["UGC Marketing", "Meta Ads", "TikTok", "Creative Strategy", "Brand Content"].map((t) => (
              <span key={t} className="bg-white/15 border border-white/25 text-white text-xs px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-amber-400 to-rose-400 flex items-center justify-center text-white text-xs font-bold">
              BP
            </div>
            <span className="text-white/90 text-sm font-medium">Brand Propel Studio</span>
            <span className="text-white/50 text-xs">· 6 min read</span>
          </div>
        </div>
      </header>

      {/* STATS BAND */}
      <div className="bg-gray-950 px-6 py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label, color }) => (
            <div key={value} className="text-center">
              <div className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}>
                {value}
              </div>
              <p className="text-gray-400 text-xs leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ARTICLE */}
      <article className="max-w-3xl mx-auto px-6 py-16 space-y-16">

        {/* INTRO */}
        <section>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you've been running paid social campaigns in 2025, you've likely noticed something uncomfortable: your expensive studio shoots aren't converting the way they used to. Meanwhile, a shaky phone video from a real customer is eating your best creative's lunch.
          </p>
          <p className="mt-5 text-lg text-gray-700 leading-relaxed">
            This isn't an accident — it's a structural shift in how platforms reward content, and how audiences decide to trust brands. At{" "}
            <span className="font-semibold text-violet-700">Brand Propel Studio</span>, we've tracked this transition across dozens of client accounts. The verdict is clear:{" "}
            <em className="text-gray-900 font-medium">UGC is no longer a scrappy supplement to studio production — it is the primary performance creative format of 2025.</em>
          </p>
        </section>

        {/* SECTION 1 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-violet-500 to-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Why Authenticity Is Winning the Algorithm</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Meta's Andromeda algorithm update fundamentally changed how ads compete for delivery. The platform now assigns a unique creative fingerprint —{" "}
            <span className="font-semibold text-purple-700">called an Entity ID</span> — to every ad. When multiple ads look visually similar, they get grouped under one ID and compete against each other, strangling reach before a campaign even gets momentum.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            UGC solves this by default. Every creator brings a genuinely different environment, lighting condition, speaking style, and energy. Each video generates a distinct Entity ID, triggering a fresh learning phase and giving the algorithm new audience segments to explore. For advertisers, this means more delivery, faster optimisation, and lower cost-per-result — without increasing budget.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: "🎯", text: "More unique Entity IDs → fresh learning phases", bg: "bg-violet-50 border-violet-200" },
              { icon: "🔄", text: "Diverse creators reduce creative fatigue fast", bg: "bg-rose-50 border-rose-200" },
              { icon: "📡", text: "Algorithm builds audiences around creative feel", bg: "bg-amber-50 border-amber-200" },
              { icon: "📈", text: "Steady fresh content = better long-term delivery", bg: "bg-teal-50 border-teal-200" },
            ].map(({ icon, text, bg }) => (
              <div key={text} className={`flex items-start gap-3 border rounded-xl p-4 ${bg}`}>
                <span className="text-xl mt-0.5">{icon}</span>
                <span className="text-sm text-gray-700 font-medium leading-snug">{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PULL QUOTE */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-700 p-8 text-white">
          <div className="absolute top-4 right-6 text-white/10 text-9xl font-serif leading-none select-none">"</div>
          <p className="text-xl md:text-2xl font-medium leading-snug relative z-10 max-w-lg">
            Brands scaling UGC in 2025 are reporting 3–4× higher click-through rates compared to equivalent studio creative — at a fraction of the production cost.
          </p>
          <p className="mt-4 text-violet-200 text-sm relative z-10">
            — Brand Propel Studio Performance Data, Q1 2025
          </p>
        </div>

        {/* SECTION 2 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-rose-500 to-pink-600" />
            <h2 className="text-2xl font-bold text-gray-900">The Trust Gap: Real People vs. Polished Brands</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Today's consumers — particularly Gen Z and Millennials — have developed a finely tuned detector for inauthenticity. A perfectly lit studio ad signals "this brand is trying to sell me something." A creator talking candidly into their phone signals "this person actually uses this." That psychological distinction directly influences purchase intent.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Studies consistently show that consumers are significantly more likely to trust product recommendations from everyday people over brand-produced messaging. This trust translates into tangible metrics: higher add-to-cart rates, lower cost-per-acquisition, and stronger return-on-ad-spend across both Meta and TikTok campaigns.
          </p>
          <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-5">Average CTR — UGC vs Studio</p>
            {[
              { label: "UGC Creative", pct: 82, color: "bg-gradient-to-r from-violet-500 to-purple-600", text: "text-violet-700" },
              { label: "Studio Creative", pct: 22, color: "bg-gradient-to-r from-gray-300 to-gray-400", text: "text-gray-500" },
            ].map(({ label, pct, color, text }) => (
              <div key={label} className="mb-4">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium text-gray-700">{label}</span>
                  <span className={`font-bold text-sm ${text}`}>{pct}%</span>
                </div>
                <div className="h-3 rounded-full bg-gray-200">
                  <div className={`h-3 rounded-full ${color}`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
            <p className="text-xs text-gray-400 mt-2">Illustrative index based on industry benchmarks.</p>
          </div>
        </section>

        {/* SECTION 3 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-amber-400 to-orange-500" />
            <h2 className="text-2xl font-bold text-gray-900">TikTok's Creative Culture Is Reshaping Expectations</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            TikTok didn't just create a new ad format — it rewired what "good content" looks like. The platform's native aesthetic is raw, fast-moving, and personality-driven. Brands that imported their broadcast-style creative onto TikTok saw immediate disengagement. Brands that leaned into creator-native formats saw explosive growth.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            This TikTok effect has bled into Instagram Reels, YouTube Shorts, and even Meta Feed placements. Audiences now expect content to feel organic, even in a paid context. The technical term for this is{" "}
            <em className="text-amber-700 font-medium">native creative congruence</em> — and UGC achieves it naturally because it was born in that environment.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { label: "TikTok", bg: "bg-black text-white" },
              { label: "Instagram Reels", bg: "bg-gradient-to-r from-pink-500 to-violet-500 text-white" },
              { label: "YouTube Shorts", bg: "bg-red-600 text-white" },
              { label: "Meta Feed", bg: "bg-blue-600 text-white" },
            ].map(({ label, bg }) => (
              <span key={label} className={`px-4 py-1.5 rounded-full text-sm font-semibold ${bg}`}>
                {label}
              </span>
            ))}
          </div>
        </section>

        {/* SECTION 4 */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-teal-500 to-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">How Brand Propel Studio Approaches UGC at Scale</h2>
          </div>
          <p className="text-gray-600 mb-7 mt-3 leading-relaxed">
            Scaling UGC isn't just about finding creators and pressing record. Without a strategic framework, brands end up with a pile of inconsistent content. Our approach combines three pillars:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pillars.map(({ icon, title, desc, accent, iconBg, titleColor }) => (
              <div key={title} className={`border rounded-2xl p-6 ${accent}`}>
                <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center text-xl mb-4`}>
                  {icon}
                </div>
                <h3 className={`font-bold text-sm mb-2 ${titleColor}`}>{title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MID CTA */}
        <div className="rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500 p-px rounded-2xl">
            <div className="bg-white rounded-[calc(1rem-1px)] px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-1">Ready to Scale?</p>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Build Your UGC Creative Engine</h3>
                <p className="text-sm text-gray-500">Performance-driven UGC — sourced, produced, and optimised for conversions.</p>
              </div>
              <a
                href="https://brandpropelstudio.com"
                className="flex-shrink-0 bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Get a Free Audit →
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 5 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-indigo-500 to-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">The Bottom Line: Rethink Your Creative Mix</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Studio content will always have a role in brand building — for brand films, product launches, and high-production moments that demand craft. But if you're allocating 80% of your creative budget to studio production and 20% to UGC, your performance numbers are telling you to flip that ratio.
          </p>
          <div className="mt-6 rounded-2xl bg-gray-50 border border-gray-100 p-6">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Recommended Creative Budget Split</p>
            <div className="h-8 rounded-full overflow-hidden flex text-xs font-bold">
              <div className="h-full bg-gradient-to-r from-violet-500 to-purple-600 flex items-center justify-center text-white" style={{ width: "70%" }}>
                70% UGC
              </div>
              <div className="h-full bg-gray-200 flex items-center justify-center text-gray-500" style={{ width: "30%" }}>
                30% Studio
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">Brand Propel Studio recommendation based on 2025 performance data.</p>
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed">
            The brands winning in paid social right now are those who've accepted a simple truth:{" "}
            <em className="text-gray-900 font-medium">consumers trust people, not production values.</em> The faster you build a systematic UGC pipeline — with the right creators, briefs, and testing infrastructure — the faster you compound your competitive advantage.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            At <span className="font-semibold text-violet-700">Brand Propel Studio</span>, that's exactly what we build. Whether you're a DTC brand looking to slash your cost-per-purchase or a SaaS company trying to humanise your funnel, we'll help you make UGC your most reliable performance channel in 2025 and beyond.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center mb-8">
            <span className="text-xs font-semibold text-violet-600 uppercase tracking-widest">Got Questions?</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`border-l-4 ${faq.color} rounded-r-2xl bg-gray-50 overflow-hidden`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${faq.badgeColor}`}>Q{i + 1}</span>
                    <span className="font-semibold text-gray-800 text-sm">{faq.q}</span>
                  </div>
                  <span className={`text-gray-400 text-xl flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
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

        {/* FOOTER CARD */}
        <footer className="rounded-2xl bg-gradient-to-br from-gray-950 to-gray-900 p-8 text-center">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-rose-500 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
            BP
          </div>
          <h3 className="text-white font-bold text-lg mb-1">Brand Propel Studio</h3>
          <p className="text-gray-400 text-sm mb-5">Performance Creative · UGC Strategy · Paid Social</p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {["Meta Ads", "TikTok UGC", "Creator Sourcing", "A/B Testing"].map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10">{t}</span>
            ))}
          </div>
          <a
            href="https://brandpropelstudio.com"
            className="inline-block bg-gradient-to-r from-violet-500 to-rose-500 text-white font-semibold text-sm px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Visit brandpropelstudio.com →
          </a>
        </footer>
      </article>
    </div>
  );
}
