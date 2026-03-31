import { useState } from "react";

const conversionData = [
  { format: "Problem-Solution", rate: 91, color: "from-fuchsia-500 to-pink-600", light: "bg-fuchsia-50 text-fuchsia-700" },
  { format: "Testimonial", rate: 72, color: "from-violet-500 to-purple-600", light: "bg-violet-50 text-violet-700" },
  { format: "Product Demo", rate: 58, color: "from-blue-500 to-indigo-600", light: "bg-blue-50 text-blue-700" },
  { format: "Lifestyle / Brand", rate: 39, color: "from-gray-400 to-gray-500", light: "bg-gray-100 text-gray-600" },
  { format: "Discount / Offer", rate: 44, color: "from-amber-400 to-orange-500", light: "bg-amber-50 text-amber-700" },
];

const anatomy = [
  {
    step: "1",
    label: "Hook (0–3 sec)",
    title: "Name the pain out loud",
    desc: "Open with the exact words your customer uses in their head. Not 'improve your sleep' — 'Why are you still waking up exhausted even after 8 hours?' Specificity is the hook.",
    icon: "🎣",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    tag: "bg-rose-100 text-rose-700",
  },
  {
    step: "2",
    label: "Problem Amplify (3–8 sec)",
    title: "Twist the knife — gently",
    desc: "Deepen the emotional cost of the problem. Don't lecture — empathise. Show you understand what they've already tried and why it failed. This is where viewers stop scrolling.",
    icon: "🔥",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
    tag: "bg-orange-100 text-orange-700",
  },
  {
    step: "3",
    label: "Solution Reveal (8–18 sec)",
    title: "Position your product as the unlock",
    desc: "Introduce your product not as a thing — but as the specific reason the problem goes away. Link the mechanism of your product directly to the pain you named in the hook.",
    icon: "💡",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-200",
    tag: "bg-violet-100 text-violet-700",
  },
  {
    step: "4",
    label: "Proof (18–25 sec)",
    title: "Show, don't claim",
    desc: "Social proof, before/after, a result stat, or a direct quote from a customer who had the same problem. One specific, credible proof point is worth ten generic claims.",
    icon: "✅",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    tag: "bg-emerald-100 text-emerald-700",
  },
  {
    step: "5",
    label: "CTA (25–30 sec)",
    title: "Make the next step frictionless",
    desc: "End with a single, low-commitment action tied to the solution — not 'buy now' but 'see how it works' or 'try it for 30 days'. Reduce the perceived risk at the moment of decision.",
    icon: "🚀",
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    tag: "bg-cyan-100 text-cyan-700",
  },
];

const mistakes = [
  {
    wrong: "Leading with product features",
    right: "Lead with the customer's problem first",
    icon: "📦",
    color: "text-fuchsia-600",
  },
  {
    wrong: "Generic pain points ('feel tired?')",
    right: "Hyper-specific pains ('still tired after 8 hrs sleep?')",
    icon: "🎯",
    color: "text-violet-600",
  },
  {
    wrong: "Solving the wrong problem",
    right: "Mine reviews to find the real emotional trigger",
    icon: "🔍",
    color: "text-emerald-600",
  },
  {
    wrong: "Skipping proof entirely",
    right: "One specific result beats three vague claims",
    icon: "📊",
    color: "text-cyan-600",
  },
];

const faqs = [
  {
    q: "What is a Problem-Solution ad format?",
    a: "A Problem-Solution ad is a creative format that opens by naming or dramatising a specific pain point the target audience experiences, then pivots to position the brand's product as the direct solution. It works because it mirrors the exact emotional journey a customer goes through before making a purchase decision — creating instant relevance and trust.",
    color: "border-l-fuchsia-500",
    badge: "bg-fuchsia-100 text-fuchsia-700",
  },
  {
    q: "Why do Problem-Solution ads convert better than other formats?",
    a: "Because they meet the customer where they are psychologically. When someone sees their exact problem articulated in an ad's first three seconds, they stop scrolling. The cognitive shortcut is powerful: 'This brand understands me' → 'Maybe their solution actually works.' That emotional opening earns the attention needed for conversion — which product-first or lifestyle-first formats never generate.",
    color: "border-l-violet-500",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    q: "How long should a Problem-Solution video ad be?",
    a: "For paid social, 25–45 seconds is the sweet spot. The first 3 seconds are everything — your hook must name the pain immediately. The problem amplification (3–8 seconds) and solution reveal (8–18 seconds) can flex slightly based on product complexity. CTAs should appear before the 30-second mark on platforms like Meta and TikTok where view dropoff accelerates sharply after 20 seconds.",
    color: "border-l-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    q: "How do I find the right problem to lead with?",
    a: "Mine your customer reviews, support tickets, and DMs. Look for the language people use to describe the moment before they found your product — the frustration, the failed alternatives, the emotional cost of the problem. The most converting problem statements are direct quotes from real customers, not marketing copy written in-house. Reddit threads and Amazon reviews in your category are goldmines.",
    color: "border-l-cyan-500",
    badge: "bg-cyan-100 text-cyan-700",
  },
  {
    q: "Can Brand Propel Studio produce Problem-Solution ads for our brand?",
    a: "Yes — it's one of our core UGC and performance creative formats. We handle everything from hook research and script development to creator sourcing, filming, editing, and A/B testing. We typically deliver 5–10 Problem-Solution variants per campaign, tested across multiple hooks to identify which pain point resonates most with your target audience.",
    color: "border-l-rose-500",
    badge: "bg-rose-100 text-rose-700",
  },
];

const examples = [
  {
    brand: "Sleep Brand",
    hook: "\"Why are you still waking up exhausted after 8 hours of sleep?\"",
    problem: "Tossing all night, trying every pillow, melatonin not working",
    solution: "Cooling mattress topper that regulates body temp during REM",
    proof: "23,000 customers report sleeping through the night within 7 days",
    color: "from-indigo-500 to-violet-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
  },
  {
    brand: "Skincare Brand",
    hook: "\"You've tried 12 serums. Your skin still looks the same.\"",
    problem: "Expensive products, no results, don't know what ingredient actually works",
    solution: "Clinically-dosed niacinamide — not 1% like most brands, but 10%",
    proof: "Before/after from 3 creators showing visible results in 21 days",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
  },
];

export default function ProblemSolutionBlog() {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 font-sans">


      {/* ── HERO ── */}
      <header className="relative overflow-hidden">
        {/* layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-fuchsia-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-600/15 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6 pt-14 pb-14 text-center">
          <div className="inline-flex items-center gap-2 border border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-black px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
            Ad Creative Strategy · 2025
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.05] tracking-tight mb-5">
            Why{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Problem-Solution Ads
            </span>
            <br />
            <span className="text-gray-200">Are Your Highest</span>
            <br />
            <span className="text-gray-200">Converting Format</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            The ad format that mirrors how every customer thinks before they buy — and why most brands are still running the wrong format entirely.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Ad Creative", "Problem-Solution", "High Converting Ads", "D2C Marketing", "Meta Ads", "UGC"].map((t) => (
              <span key={t} className="bg-white/5 border border-white/10 text-gray-400 text-xs px-3 py-1 rounded-full">{t}</span>
            ))}
          </div>

          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-fuchsia-400 to-pink-500 flex items-center justify-center text-white text-xs font-black">BP</div>
            <span className="text-gray-300 text-sm font-medium">Brand Propel Studio</span>
            <span className="text-gray-600 text-xs">· 6 min read</span>
          </div>
        </div>
      </header>

      {/* ── CONVERSION BAR CHART ── */}
      <div className="bg-white border-b border-gray-100 px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest text-center mb-6">
            Avg. Conversion Index by Ad Format (2025 Benchmarks)
          </p>
          <div className="space-y-3">
            {conversionData.map(({ format, rate, color, light }) => (
              <div key={format} className="flex items-center gap-4">
                <span className="text-xs font-bold text-gray-600 w-36 flex-shrink-0 text-right">{format}</span>
                <div className="flex-1 h-8 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${color} flex items-center justify-end pr-3 transition-all duration-700`}
                    style={{ width: `${rate}%` }}
                  >
                    <span className="text-white text-[11px] font-black">{rate}</span>
                  </div>
                </div>
                {format === "Problem-Solution" && (
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full flex-shrink-0 ${light}`}>TOP</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">Illustrative index based on Brand Propel Studio creative performance data.</p>
        </div>
      </div>

      {/* ── ARTICLE ── */}
      <article className="max-w-3xl mx-auto px-6 py-16 space-y-16">

        {/* INTRO */}
        <section>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ask any media buyer what the hardest part of scaling paid social is and they'll tell you the same thing: creative. Specifically — finding ad formats that hold attention long enough to convert a cold audience into a paying customer.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Most brands default to product-first content: beautiful shots of their product, lifestyle imagery, feature highlights. It looks great. It converts terribly with cold audiences. Because it answers a question the customer hasn't asked yet.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            The <span className="font-black text-fuchsia-700">Problem-Solution format</span> flips this entirely — and in doing so, it consistently outperforms every other ad creative type on Meta and TikTok for D2C brands. Here's exactly why it works, how to build it, and how to stop getting it wrong.
          </p>
        </section>

        {/* WHY IT WORKS */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-fuchsia-500 to-pink-600" />
            <h2 className="text-2xl font-black text-gray-900">Why the Human Brain Responds to This Format</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Every purchase decision begins with a problem. Not a product craving — a gap between how life is and how the customer wants it to be. When an ad opens by articulating that gap in the customer's own language, something neurologically significant happens: the brain pattern-matches it as relevant, drops its scroll reflex, and enters an information-seeking state.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            This is the reason Problem-Solution ads have a disproportionately high hook rate — the percentage of viewers who watch past the first three seconds. Once a viewer is hooked, conversion becomes a function of how well the rest of the ad delivers on the implied promise: <em className="text-gray-900 font-semibold">"We understand your problem, and we have something that actually fixes it."</em>
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: "🧠", title: "Pattern Match", desc: "Brain flags problem-specific language as personally relevant — triggering attention", color: "bg-fuchsia-50 border-fuchsia-100" },
              { icon: "💬", title: "Empathy Signal", desc: "Customer feels understood before they've even seen the product — trust is built immediately", color: "bg-violet-50 border-violet-100" },
              { icon: "🔄", title: "Decision Mirror", desc: "Ad mirrors the buyer's actual thought process — friction in the funnel drops dramatically", color: "bg-pink-50 border-pink-100" },
            ].map(({ icon, title, desc, color }) => (
              <div key={title} className={`border rounded-2xl p-5 ${color}`}>
                <span className="text-2xl block mb-3">{icon}</span>
                <p className="font-black text-sm text-gray-800 mb-1">{title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PULL QUOTE */}
        <div className="relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600 via-pink-600 to-rose-600" />
          <div className="absolute right-6 top-3 text-white/10 text-[96px] font-serif leading-none select-none">"</div>
          <div className="relative p-8">
            <p className="text-white text-xl md:text-2xl font-black leading-snug max-w-lg mb-4">
              The first 3 seconds of your ad aren't an introduction. They're an audition — and most brands are failing it by talking about themselves.
            </p>
            <p className="text-pink-200 text-sm">— Brand Propel Studio Creative Strategy Team, 2025</p>
          </div>
        </div>

        {/* ANATOMY — INTERACTIVE STEPPER */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-violet-500 to-purple-600" />
            <h2 className="text-2xl font-black text-gray-900">Anatomy of a High-Converting Problem-Solution Ad</h2>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-7 mt-2">
            A 30-second video ad that converts cold audiences follows a precise 5-part structure. Click each step to explore.
          </p>

          {/* Step pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {anatomy.map((a, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-black border transition-all ${
                  activeStep === i
                    ? `bg-gradient-to-r ${a.color} text-white border-transparent shadow-md`
                    : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
                }`}
              >
                <span>{a.icon}</span>
                <span>{a.label}</span>
              </button>
            ))}
          </div>

          {/* Active step card */}
          {anatomy.map((a, i) => (
            <div key={i} className={activeStep === i ? "block" : "hidden"}>
              <div className={`border ${a.border} ${a.bg} rounded-2xl p-6`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${a.color} flex-shrink-0 flex items-center justify-center text-white font-black text-xl`}>
                    {a.icon}
                  </div>
                  <div>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider ${a.tag} inline-block mb-1.5`}>{a.label}</span>
                    <h3 className="text-lg font-black text-gray-900">{a.title}</h3>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">{a.desc}</p>

                {/* Step nav */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-current border-opacity-10">
                  <button
                    onClick={() => setActiveStep(Math.max(0, i - 1))}
                    disabled={i === 0}
                    className="text-xs font-black text-gray-400 hover:text-gray-700 disabled:opacity-20 transition-colors"
                  >← Prev</button>
                  <div className="flex gap-1.5">
                    {anatomy.map((_, d) => (
                      <button key={d} onClick={() => setActiveStep(d)}
                        className={`h-1.5 rounded-full transition-all ${d === i ? "w-6 bg-gray-800" : "w-1.5 bg-gray-300"}`} />
                    ))}
                  </div>
                  <button
                    onClick={() => setActiveStep(Math.min(anatomy.length - 1, i + 1))}
                    disabled={i === anatomy.length - 1}
                    className="text-xs font-black text-gray-400 hover:text-gray-700 disabled:opacity-20 transition-colors"
                  >Next →</button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* REAL EXAMPLES */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-emerald-500 to-teal-500" />
            <h2 className="text-2xl font-black text-gray-900">What This Looks Like in Practice</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Abstract frameworks are useful. Seeing them applied to real ad scenarios is more useful. Here are two Problem-Solution ad structures across different D2C verticals:
          </p>

          <div className="space-y-4">
            {examples.map((ex, i) => (
              <div key={i} className={`border ${ex.border} rounded-2xl overflow-hidden`}>
                <div className={`bg-gradient-to-r ${ex.color} px-5 py-3 flex items-center justify-between`}>
                  <span className="text-white font-black text-sm">{ex.brand}</span>
                  <span className="text-white/70 text-xs">Example Script Structure</span>
                </div>
                <div className={`${ex.bg} p-5 grid grid-cols-1 sm:grid-cols-2 gap-4`}>
                  {[
                    { label: "🎣 Hook", value: ex.hook },
                    { label: "🔥 Problem", value: ex.problem },
                    { label: "💡 Solution", value: ex.solution },
                    { label: "✅ Proof", value: ex.proof },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-[10px] font-black text-gray-500 uppercase tracking-wider mb-1">{label}</p>
                      <p className="text-sm text-gray-800 leading-relaxed">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MISTAKES */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-orange-500 to-rose-500" />
            <h2 className="text-2xl font-black text-gray-900">4 Ways Brands Get This Format Wrong</h2>
          </div>

          <div className="space-y-3">
            {mistakes.map(({ wrong, right, icon, color }, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-4 flex gap-4 shadow-sm">
                <span className={`text-2xl flex-shrink-0 mt-0.5`}>{icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-xs font-black text-red-500 bg-red-50 px-2 py-0.5 rounded-full flex-shrink-0">✗ Wrong</span>
                    <p className="text-sm text-gray-500 line-through leading-snug">{wrong}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex-shrink-0">✓ Right</span>
                    <p className={`text-sm font-bold leading-snug ${color}`}>{right}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW BPS APPLIES IT */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-cyan-500 to-blue-600" />
            <h2 className="text-2xl font-black text-gray-900">How Brand Propel Studio Produces Problem-Solution Creative</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The biggest risk with Problem-Solution ads is producing them without genuine customer insight — and ending up with a generic "Are you tired of X?" format that every competitor is already running. The format works when the problem is specific enough to feel personal. That specificity comes from data, not copywriting instinct.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Our process at <span className="font-black text-fuchsia-700">Brand Propel Studio</span> begins with a customer voice audit: mining reviews, support tickets, and social comments to extract the exact language your audience uses to describe their pain. From there, we build 5–10 hook variants — each targeting a different pain angle — and test them through UGC creators whose demographic profile matches your ideal customer.
          </p>

          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { step: "01", title: "Customer Voice Audit", desc: "We extract exact pain language from reviews, DMs, and competitor threads", icon: "🔍", color: "bg-fuchsia-600" },
              { step: "02", title: "Hook Variant Development", desc: "5–10 distinct pain angles scripted and stress-tested before production", icon: "✍️", color: "bg-violet-600" },
              { step: "03", title: "Creator Matching", desc: "Paired with UGC creators whose profile mirrors your buyer persona", icon: "🤝", color: "bg-cyan-600" },
              { step: "04", title: "A/B Test & Scale", desc: "Winning hooks identified in Week 1, scaled and refreshed weekly", icon: "📈", color: "bg-emerald-600" },
            ].map(({ step, title, desc, icon, color }) => (
              <div key={step} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex gap-4">
                <div className={`w-10 h-10 rounded-xl ${color} flex-shrink-0 flex items-center justify-center text-white font-black text-sm`}>{step}</div>
                <div>
                  <p className="font-black text-sm text-gray-800 mb-1">{icon} {title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MID CTA */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-600 via-pink-600 to-rose-500 p-px">
          <div className="bg-white rounded-[calc(1rem-1px)] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-black text-fuchsia-600 uppercase tracking-widest mb-1">Ready to Convert More?</p>
              <h3 className="text-xl font-black text-gray-900 mb-1">Get a Problem-Solution Ad Strategy</h3>
              <p className="text-sm text-gray-500 max-w-sm leading-relaxed">We'll audit your current creative, identify your highest-leverage pain angles, and build Problem-Solution ads that actually convert.</p>
            </div>
            <a
              href="https://brandpropelstudio.com"
              className="flex-shrink-0 bg-gradient-to-r from-fuchsia-600 to-rose-500 text-white font-black text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Book a Free Audit →
            </a>
          </div>
        </div>

        {/* CLOSING */}
        <section>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1 h-8 rounded-full bg-gradient-to-b from-rose-500 to-pink-600" />
            <h2 className="text-2xl font-black text-gray-900">The Format That Scales With Your Brand</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Problem-Solution isn't a trend. It's a structural match between how human psychology processes buying decisions and how a well-constructed ad delivers information. That alignment is why it consistently outperforms lifestyle, product-demo, and discount formats on cold audiences — and why it remains effective even as creative fatigue cycles through other formats.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The format scales because the problems don't disappear — they only get more specific as your brand matures and you learn more about your buyer. The brand that runs out of Problem-Solution ad angles is the brand that has stopped listening to its customers. At <span className="font-black text-fuchsia-700">Brand Propel Studio</span>, we make sure that never happens.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <div className="text-center mb-8">
            <span className="text-xs font-black text-fuchsia-600 uppercase tracking-widest">Frequently Asked</span>
            <h2 className="text-3xl font-black text-gray-900 mt-2">Problem-Solution Ad FAQs</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`border-l-4 ${faq.color} bg-white rounded-r-2xl overflow-hidden shadow-sm`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full flex-shrink-0 ${faq.badge}`}>Q{i + 1}</span>
                    <span className="font-black text-gray-800 text-sm leading-snug">{faq.q}</span>
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
        <footer className="rounded-2xl overflow-hidden relative bg-gray-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,_rgba(217,70,239,0.15),_transparent)]" />
          <div className="relative p-8 text-center">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center text-white font-black text-lg mx-auto mb-4">BP</div>
            <h3 className="text-white font-black text-lg mb-1">Brand Propel Studio</h3>
            <p className="text-gray-500 text-sm mb-5">Performance Creative · Problem-Solution Ads · UGC · Paid Social Strategy</p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["Problem-Solution Ads", "Ad Creative Strategy", "Meta UGC", "Hook Writing", "High-Converting Ads"].map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">{t}</span>
              ))}
            </div>
            <a
              href="https://brandpropelstudio.com"
              className="inline-block bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white font-black text-sm px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Visit brandpropelstudio.com →
            </a>
          </div>
        </footer>
      </article>
    </div>
  );
}
