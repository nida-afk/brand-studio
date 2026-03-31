import { useState } from "react";

const stats = [
  { value: "$6.9B", label: "Projected AI influencer market size by 2027", color: "from-cyan-500 to-blue-600" },
  { value: "3×", label: "Higher content output vs human influencers at same cost", color: "from-fuchsia-500 to-purple-600" },
  { value: "60%", label: "Of Gen Z comfortable engaging with AI brand personas", color: "from-emerald-500 to-teal-600" },
  { value: "24/7", label: "Always-on availability with zero burnout or cancellation risk", color: "from-rose-500 to-orange-500" },
];

const reasons = [
  {
    icon: "💰",
    title: "Cost Efficiency at Scale",
    desc: "AI influencers eliminate talent fees, travel costs, and renegotiations. A single virtual persona can produce hundreds of assets per month at a predictable flat cost.",
    border: "border-t-cyan-500",
    badge: "bg-cyan-50 text-cyan-700",
  },
  {
    icon: "🛡️",
    title: "Zero Reputational Risk",
    desc: "Human influencers get cancelled. AI influencers don't. Brands retain full narrative control — no off-brand posts, no personal scandals, no contract renegotiation.",
    border: "border-t-fuchsia-500",
    badge: "bg-fuchsia-50 text-fuchsia-700",
  },
  {
    icon: "🌍",
    title: "Infinite Localisation",
    desc: "One AI persona can speak fluent Hindi, Spanish, Arabic, and Mandarin — simultaneously. Multi-market campaigns that once required dozens of creators now need one.",
    border: "border-t-emerald-500",
    badge: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: "⚡",
    title: "Speed to Market",
    desc: "Traditional influencer campaigns take weeks to coordinate. AI-generated content can go from brief to published asset in hours, not weeks.",
    border: "border-t-rose-500",
    badge: "bg-rose-50 text-rose-700",
  },
];

const comparison = [
  { label: "Content Volume", ai: "Unlimited", human: "Limited by time", aiWins: true },
  { label: "Brand Control", ai: "100% controlled", human: "Partial", aiWins: true },
  { label: "Authenticity", ai: "Engineered", human: "Organic", aiWins: false },
  { label: "Scandal Risk", ai: "None", human: "Always present", aiWins: true },
  { label: "Cost Predictability", ai: "Fixed", human: "Variable", aiWins: true },
  { label: "Audience Trust", ai: "Growing", human: "Established", aiWins: false },
];

const faqs = [
  {
    q: "What is an AI influencer?",
    a: "An AI influencer is a computer-generated virtual persona — often hyper-realistic or stylised — designed to promote brands, create content, and engage audiences on social platforms. They are built using generative AI, 3D rendering, and large language models, and can be fully customised to reflect a brand's values and aesthetic.",
    color: "border-l-cyan-500",
    badge: "bg-cyan-100 text-cyan-700",
  },
  {
    q: "Are AI influencers replacing human creators?",
    a: "Not entirely. AI influencers excel at volume, consistency, and cost control — but human creators still win on raw authenticity and emotional depth. The most effective brands in 2025 use a hybrid strategy: AI personas for always-on content and UGC creators for trust-building campaigns.",
    color: "border-l-fuchsia-500",
    badge: "bg-fuchsia-100 text-fuchsia-700",
  },
  {
    q: "Do audiences trust AI influencers?",
    a: "Trust is growing, especially among younger demographics. A 2025 study found that 60% of Gen Z consumers were comfortable engaging with AI brand personas, provided the brand is transparent about their virtual nature. Disclosure is key — hidden AI influencers erode the trust brands are trying to build.",
    color: "border-l-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    q: "What platforms work best for AI influencers?",
    a: "TikTok, Instagram, and YouTube Shorts are the top-performing platforms for AI influencer content in 2025. Short-form video formats mask the 'uncanny valley' effect better than long-form content, and the algorithmic distribution means production quality matters less than hook strength and posting consistency.",
    color: "border-l-rose-500",
    badge: "bg-rose-100 text-rose-700",
  },
  {
    q: "How can Brand Propel Studio help us launch an AI influencer strategy?",
    a: "We design, deploy, and manage AI influencer strategies end-to-end — from persona concept and visual development to content scripting, production, and platform optimisation. Whether you want a fully virtual spokesperson or a hybrid approach blending AI and UGC, we build frameworks that convert.",
    color: "border-l-purple-500",
    badge: "bg-purple-100 text-purple-700",
  },
];

export default function AIInfluencersBlog() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-gray-950">
        {/* Animated gradient orbs */}
        <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[360px] h-[360px] bg-fuchsia-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-3xl" />

        <div className="relative px-6 pt-16 pb-14 text-center max-w-4xl mx-auto">

          {/* Category badge */}
          <div className="inline-flex items-center gap-2 border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            AI Marketing · June 2025
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            The Rise of{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                AI Influencers
              </span>
            </span>
            <br />
            <span className="text-gray-300 text-3xl md:text-4xl font-semibold">Why Brands Are Switching</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Virtual personas are rewriting the rules of influencer marketing. Here's what every brand needs to know before 2026.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["AI Influencers", "Virtual Creators", "Brand Strategy", "Content Marketing", "Generative AI"].map((t) => (
              <span key={t} className="bg-white/5 border border-white/10 text-gray-400 text-xs px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>

          {/* Author */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 flex items-center justify-center text-white text-xs font-bold">BP</div>
            <span className="text-gray-300 text-sm font-medium">Brand Propel Studio</span>
            <span className="text-gray-600 text-xs">· 6 min read</span>
          </div>
        </div>
      </header>

      {/* ── STAT BAND ── */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-6 py-10 border-y border-gray-700/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label, color }) => (
            <div key={value} className="text-center">
              <p className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}>
                {value}
              </p>
              <p className="text-gray-400 text-xs leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── ARTICLE ── */}
      <article className="max-w-3xl mx-auto px-6 py-16 space-y-16">

        {/* INTRO */}
        <section>
          <p className="text-lg text-gray-700 leading-relaxed">
            A few years ago, the idea of a computer-generated Instagram model racking up millions of followers sounded like science fiction. Today, it's a live business strategy deployed by Fortune 500 brands, DTC startups, and luxury fashion houses alike.
          </p>
          <p className="mt-5 text-lg text-gray-700 leading-relaxed">
            AI influencers — photorealistic or stylised virtual personas powered by generative AI — are no longer a novelty. They are a calculated marketing decision. And an increasing number of brands are discovering that virtual creators offer something human influencers structurally cannot: <em className="text-gray-900 font-medium">total creative control, infinite scalability, and zero reputational liability.</em>
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-cyan-700">Brand Propel Studio</span>, we help brands navigate this shift. Here's what's driving the movement — and how to decide if it's right for you.
          </p>
        </section>

        {/* SECTION 1 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">What Is an AI Influencer — And Why Now?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            An AI influencer is a fully synthetic persona that exists only in digital space — created using a combination of 3D modelling, generative image tools, video synthesis, and large language models for scripting and captions. They can look human, anime-inspired, or completely fantastical. They post, reply to comments, appear in brand campaigns, and collaborate with other creators — all under brand direction.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The timing of this shift is no accident. Three forces converged in 2024–2025 to make AI influencers viable at scale: the maturation of text-to-image and text-to-video generation, the collapse in the cost of compute, and a documented surge in audience fatigue with over-produced celebrity endorsements.
          </p>

          {/* Timeline */}
          <div className="mt-8 space-y-0">
            {[
              { year: "2016", event: "Lil Miquela launches — first AI influencer reaches 1M+ followers", color: "bg-cyan-500" },
              { year: "2022", event: "Generative AI makes custom AI persona creation accessible to any brand", color: "bg-fuchsia-500" },
              { year: "2024", event: "Major fashion & FMCG brands deploy AI influencers for primary campaigns", color: "bg-purple-500" },
              { year: "2025", event: "AI influencer market projected to exceed $5B — mainstream adoption accelerates", color: "bg-rose-500" },
            ].map(({ year, event, color }, i) => (
              <div key={year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-3 h-3 rounded-full ${color} mt-1 flex-shrink-0`} />
                  {i < 3 && <div className="w-0.5 h-10 bg-gray-200 mt-1" />}
                </div>
                <div className="pb-8">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full text-white ${color} inline-block mb-1`}>{year}</span>
                  <p className="text-sm text-gray-700">{event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PULL QUOTE */}
        <blockquote className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-700 to-fuchsia-700" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 right-6 text-white text-[120px] font-serif leading-none select-none">"</div>
          </div>
          <div className="relative p-8">
            <p className="text-white text-xl md:text-2xl font-medium leading-snug max-w-lg">
              By 2026, more than 40% of branded social content is expected to feature AI-generated personas in some capacity.
            </p>
            <p className="text-cyan-200 text-sm mt-4">— Brand Propel Studio Market Intelligence, 2025</p>
          </div>
        </blockquote>

        {/* SECTION 2 */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-fuchsia-500 to-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">4 Reasons Brands Are Making the Switch</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map(({ icon, title, desc, border, badge }) => (
              <div key={title} className={`bg-white border border-gray-100 border-t-4 ${border} rounded-2xl p-6 shadow-sm`}>
                <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-full ${badge} mb-4`}>
                  <span>{icon}</span>
                  <span>{title}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — COMPARISON TABLE */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-emerald-400 to-teal-600" />
            <h2 className="text-2xl font-bold text-gray-900">AI vs Human Influencers: The Honest Breakdown</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            AI influencers aren't a straight upgrade — they're a trade-off. Understanding where each format wins is how smart brands build hybrid strategies that outperform both.
          </p>
          <div className="rounded-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-3 bg-gray-900 text-white text-xs font-semibold uppercase tracking-wider px-4 py-3">
              <span>Factor</span>
              <span className="text-center text-cyan-400">AI Influencer</span>
              <span className="text-center text-gray-400">Human Creator</span>
            </div>
            {comparison.map(({ label, ai, human, aiWins }, i) => (
              <div key={label} className={`grid grid-cols-3 px-4 py-3 text-sm border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <span className="text-gray-600 font-medium">{label}</span>
                <span className={`text-center font-semibold ${aiWins ? "text-emerald-600" : "text-gray-500"}`}>
                  {aiWins && <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 mb-0.5" />}
                  {ai}
                </span>
                <span className={`text-center font-semibold ${!aiWins ? "text-emerald-600" : "text-gray-400"}`}>
                  {!aiWins && <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 mb-0.5" />}
                  {human}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-rose-500 to-orange-500" />
            <h2 className="text-2xl font-bold text-gray-900">The Transparency Imperative</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The brands gaining the most traction with AI influencers aren't hiding what they are — they're making it part of their identity. Audiences, particularly younger consumers, show strong tolerance for AI personas when brands are upfront about their nature. It's stealth deployment that generates backlash.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Regulatory frameworks are catching up fast. The EU AI Act and FTC guidance in the US now require clear disclosure of AI-generated personas in commercial contexts. Brands building AI influencer programmes in 2025 must build transparency into the strategy from day one — not as an afterthought.
          </p>

          {/* Warning/tip card */}
          <div className="mt-6 flex gap-4 bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <span className="text-2xl mt-0.5">⚠️</span>
            <div>
              <p className="font-semibold text-amber-800 text-sm mb-1">Brand Propel Studio Recommendation</p>
              <p className="text-amber-700 text-sm leading-relaxed">
                Always disclose AI persona use in captions and bio. Position it as innovation, not deception — audiences reward brands that lead transparently.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5 */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-purple-500 to-indigo-600" />
            <h2 className="text-2xl font-bold text-gray-900">How Brand Propel Studio Builds AI Influencer Strategies</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Launching an AI influencer isn't a prompt and a photo — it's a full brand architecture project. At Brand Propel Studio, we approach every AI persona with the same rigour we bring to human creator programmes.
          </p>

          <div className="mt-7 space-y-4">
            {[
              { step: "01", title: "Persona Architecture", desc: "We define your AI influencer's visual identity, voice, backstory, values, and content pillars — everything a real influencer brief would cover, plus technical production specs.", color: "bg-cyan-600" },
              { step: "02", title: "Content Production Pipeline", desc: "We build repeatable workflows for generating on-brand images, videos, captions, and Stories — enabling consistent output at a frequency no human team could match.", color: "bg-fuchsia-600" },
              { step: "03", title: "Platform & Compliance Strategy", desc: "We handle disclosure requirements, platform policies, and community management — so your AI influencer grows an audience without triggering regulatory or reputational risk.", color: "bg-emerald-600" },
              { step: "04", title: "Performance Optimisation", desc: "We A/B test hooks, formats, and posting cadences — and fold those insights back into the persona's evolution, so your AI influencer improves continuously rather than plateauing.", color: "bg-rose-600" },
            ].map(({ step, title, desc, color }) => (
              <div key={step} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <div className={`w-9 h-9 rounded-xl ${color} flex-shrink-0 flex items-center justify-center text-white text-xs font-bold`}>{step}</div>
                <div>
                  <p className="font-bold text-gray-800 text-sm mb-1">{title}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MID CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-950 p-8 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-purple-900/30 to-fuchsia-900/40" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-cyan-500/20 blur-2xl rounded-full" />
          <div className="relative">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">Ready to Go Virtual?</p>
            <h3 className="text-2xl font-bold text-white mb-3">Launch Your AI Influencer Strategy</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto leading-relaxed">
              From concept to content pipeline — Brand Propel Studio builds AI influencer programmes that drive measurable results.
            </p>
            <a
              href="https://brandpropelstudio.com"
              className="inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-semibold text-sm px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Book a Free Strategy Call →
            </a>
          </div>
        </div>

        {/* SECTION 6 — CONCLUSION */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-indigo-500 to-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Is AI Influencer Marketing Right for Your Brand?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            AI influencer marketing is not a replacement for authentic connection — it's a powerful complement to it. Brands that treat AI personas as a stand-alone solution will produce hollow content. Brands that use them strategically — as always-on content engines within a broader creator mix — will build a genuine competitive edge.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The right time to build an AI influencer strategy is before your competitors do. The technical barriers are lower than ever. The audience receptivity is higher than it's ever been. And the brands establishing virtual personas now are accumulating the follower bases, algorithm equity, and brand recognition that will be very difficult to catch in 2026.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            At <span className="font-semibold text-cyan-700">Brand Propel Studio</span>, we make that transition strategic, compliant, and built for performance. Whether you're exploring your first AI persona or scaling an existing one, we'll help you build a virtual creator that audiences actually follow.
          </p>
        </section>

        {/* ── FAQ ── */}
        <section>
          <div className="text-center mb-8">
            <span className="text-xs font-semibold text-cyan-600 uppercase tracking-widest">Frequently Asked</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">AI Influencer FAQs</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`border-l-4 ${faq.color} bg-gray-50 rounded-r-2xl overflow-hidden`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${faq.badge}`}>Q{i + 1}</span>
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

        {/* FOOTER */}
        <footer className="rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 p-8 text-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/30 to-transparent" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-fuchsia-600 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">BP</div>
              <h3 className="text-white font-bold text-lg mb-1">Brand Propel Studio</h3>
              <p className="text-gray-500 text-sm mb-5">AI Strategy · UGC · Performance Creative · Paid Social</p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {["AI Influencers", "Virtual Personas", "Creator Strategy", "Content at Scale"].map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">{t}</span>
                ))}
              </div>
              <a
                href="https://brandpropelstudio.com"
                className="inline-block bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white font-semibold text-sm px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Visit brandpropelstudio.com →
              </a>
            </div>
          </div>
        </footer>

      </article>
    </div>
  );
}
