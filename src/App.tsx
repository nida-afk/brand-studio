import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GoogleGenAI } from "@google/genai";
import { 
  Rocket, 
  Play, 
  Star, 
  Megaphone, 
  Target, 
  PenTool, 
  Search, 
  Palette, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Twitter,
  Facebook,
  ChevronDown,
  Quote,
  Clock,
  Users,
  BarChart3,
  Globe,
  Code,
  Layout,
  Sparkles,
  Cpu,
  Zap,
  PlayCircle,
  Image as ImageIcon,
  Package,
  MessageSquare
} from "lucide-react";

// ─── CONSTANTS ───
const B = "#1A56DB"; // Brand Blue
const G9 = "#1A1A2E"; // Dark Navy
const G7 = "#3D3D5C"; // Muted Navy
const G5 = "#6B6B8A"; // Grayish Navy
const G3 = "#C2C2D6"; // Light Gray
const G1 = "#F4F4FA"; // Background Gray

const HERO_PROMPTS = [
  "Model: 8k, photorealistic fashion photography. A stunning platinum blonde model with striking icy blue eyes and porcelain, pale skin. She is holding a minimal glass perfume bottle (brand: \"AURA\"). She is wearing a structured white blazer in a sun-lit minimalist loft. Soft, cinematic studio lighting, shot on 35mm lens, sharp focus on eyes, blurred bokeh background. Esthetic: Luxury, minimal.",
  "Model: Cinematic 8k fashion portrait. A beautiful model with raven black, sleek hair, fair skin, and luminous green eyes. She is posing for a premium jewelry brand, wearing layered gold necklaces. Dramatic chiaroscuro lighting (soft shadow/light contrast), matte red lipstick. Shot on Canon EOS R5. Esthetic: Edgy, sophisticated.",
  "Model: High-end editorial photography. A breathtaking model with vibrant auburn-red hair, pale freckled skin, and blue eyes. She is wrapped in a luxurious, plush emerald green silk scarf (brand: \"VERIDIAN\"). Outdoor setting: soft, golden hour sunlight in a manicured garden. Ethereal, gentle aesthetic, medium shot. Esthetic: Natural, high-fashion boho.",
  "Model: Ultra-realistic portrait. A gorgeous model with chestnut brown, wavy hair, very fair skin, and large, deep blue eyes. She is holding a sleek smartphone advertising a mobile app, smiling genuinely. Studio setting with softbox lighting, natural makeup, glossy skin, detailed texture. Esthetic: Relatable, modern, tech-beauty."
];

const GALLERY_PROMPTS = [
  "UGC Style: 4k candid shot, smartphone camera look. A popular blonde influencer with pale skin and blue eyes, smiling brightly. She is unboxing a subscription box filled with luxury sneakers (brand: \"STEP\"). The box is open on a fuzzy rug; packing paper and tissue paper are visible. Natural room lighting, shallow depth of field, sharp focus on the box contents. Esthetic: Raw, authentic unboxing.",
  "UGC Style: Candid, raw video still style. A close-up shot of a stunning pale-skinned girl with jet black hair and green eyes applying a facial serum. She is holding a dropper bottle (brand: \"GLOW DROP\"). Water droplets on her clean, luminous skin. Shot in a bright, modern white bathroom, natural morning light, genuine expression of joy. Esthetic: Clean beauty, ASMR skincare.",
  "UGC Style: 4k beauty shot, ring light lighting. A beautiful influencer with fiery red hair, fair skin, and blue eyes. She is looking into a small mirror, applying a vibrant eyeshadow shade from a colorful makeup palette (brand: \"PALETTE X\"). Perfect makeup application, detailed skin texture visible (not overly smoothed), blurred cosmetic vanity in the background. Esthetic: Beauty guru, colorful."
];

const LIFESTYLE_PROMPTS = [
  "Lifestyle: 8k street style photography. A trendy platinum blonde model with very pale skin and icy blue eyes walking down a cobblestone street. She is wearing an oversized beige trench coat, chunky white sneakers, and a designer handbag. Candid, motion blur in the background, bright overcast daylight, cinematic depth of field. Esthetic: Street style, cool-girl aesthetic.",
  "Lifestyle: Photorealistic 4k shot. A close-up of a girl with chocolate brown hair, fair skin, and blue eyes, holding a coffee cup and wearing a minimalist watch (brand: \"TIMELESS\"). She is looking slightly off-camera. Sitting in a chic cafe with marble tables and soft, ambient indoor lighting. Sharp focus on the watch and her expression. Esthetic: Aesthetic lifestyle, soft.",
  "UGC Style: High-quality smartphone 'selfie' style shot. Three beautiful models smiling together in a mirror. On the left: a blonde with pale skin and blue eyes. Center: a black-haired girl with fair skin and green eyes. Right: a red-haired girl with fair skin. They are wearing casual, coordinated fashion outfits. Mirror reflection, background is a stylish dressing room, warm, authentic lighting. Esthetic: Trendy, relatable, influencer squad."
];

const CLIENTS = [
  {
    name: "99 Degrees",
    logo: "https://90degrees.in/cdn/shop/files/100_x_100_png.png?v=1687415301&width=100",
    url: "https://90degrees.in/"
  },
  {
    name: "Qehhwa Cafe",
    logo: "https://picsum.photos/seed/qehhwa/200/200",
    url: "https://www.facebook.com/photo/?fbid=122094877352512302&set=a.122094872780512302"
  },
  { 
    name: "Tech Mahindra", 
    logo: "https://careers.techmahindra.com/images/TM_Logo_Header.png",
    url: "https://www.techmahindra.com/"
  },
  { 
    name: "Sovereign Solutions", 
    logo: "https://tse1.mm.bing.net/th/id/OIP.nC1InpfgZ-wCyHRpyz2YgAHaFQ?rs=1&pid=ImgDetMain&o=7&rm=3",
    url: "https://sovereignsolutions.com/"
  },
  { 
    name: "Stone DesignWorks", 
    logo: "https://tse1.mm.bing.net/th/id/OIP.5HDEoeT5vAqVrWLIw78pRAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
    url: "https://stonedesignworks.com/"
  },
  { 
    name: "Accessibility Ventures", 
    logo: "https://scontent.fpnq27-1.fna.fbcdn.net/v/t39.30808-1/300755632_414974067402290_491912404035515718_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=oOxOPb0DsUYQ7kNvwGzuDZz&_nc_oc=AdowixKh96bKmuamGTuqeHiW_4OWOI8Bs5b0uM7IyrrhebIIIef0JW_8TeU3sarvCPEwCXKDcE5tLR2krzoREXwS&_nc_zt=24&_nc_ht=scontent.fpnq27-1.fna&_nc_gid=VXA9eqTMXex9y12HeutP_w&_nc_ss=8&oh=00_AfzfHOVefAbGasRMYK60sQjlR8nccdalPhGNMHrqMXubEQ&oe=69C1EA12",
    url: "https://accessibilityventures.com/"
  },
  { 
    name: "Crosspoint Designs", 
    logo: "https://crosspointdesigns.com/wp-content/uploads/2024/07/logo.png",
    url: "https://crosspointdesigns.com/"
  },
  { 
    name: "SKJ Juris", 
    logo: "https://www.skjjuris.com/wp-content/uploads/2022/12/skj-juris-logo-r-1.jpg",
    url: "https://skjjuris.com/"
  },
  { 
    name: "Zeta Technologies", 
    logo: "https://th.bing.com/th/id/OIP._v9PLmTQe3i-YHH-01NRewHaCV?w=350&h=110&c=7&r=0&o=7&dpr=1.7&pid=1.7&rm=3",
    url: "https://zetatech.in/"
  },
  { 
    name: "Sunstone BBQ Outlets", 
    logo: "https://members.dlat.org/wp-content/uploads/2020/03/Sunstone-Logo-Color.png",
    url: "https://sunstonegrills.com/"
  },
  { 
    name: "Ameritech Solutions", 
    logo: "https://ameritechds.com/wp-content/uploads/2019/03/logo-ameritech-data-solutions.png",
    url: "https://ameritechds.com/"
  },
  { 
    name: "Oodlebit", 
    logo: "https://www.airdropsmob.com/wp-content/uploads/2018/08/oodlebit-logo.jpg",
    url: "https://oodlebit.com/"
  }
];

const SVCS = [
  { id: "ugc", icon: <Play className="w-6 h-6" />, title: "UGC Content", short: "Authentic creator videos that convert at every funnel stage.", color: B, bg: "#EBF2FF", tagline: "Real People. Real Content. Real Conversions.", features: ["Unboxing & Review Videos", "Testimonials & Social Proof", "Tutorial & Demo Reels", "Lifestyle Content", "UGC for Meta, Google & YouTube", "Hook Testing & Multi-Variant"], results: [{ n: "3-5x", l: "Higher CTR" }, { n: "67%", l: "Lower CPA" }, { n: "48hr", l: "Avg delivery" }] },
  { id: "influencer", icon: <Star className="w-6 h-6" />, title: "Influencer Marketing", short: "End-to-end influencer campaigns from nano to celebrity.", color: "#7C3AED", bg: "#F3E8FF", tagline: "The Right Voice. The Right Audience.", features: ["Nano, Micro & Macro Campaigns", "Celebrity Tie-ups", "Instagram Reels & Stories", "YouTube Integrations", "Brand Safety Vetting", "Full Campaign Management", "Unboxing Videos (Makeup & Skincare)", "Testimonial Videos"], results: [{ n: "500+", l: "Vetted influencers" }, { n: "1B+", l: "Combined reach" }, { n: "4.2%", l: "Avg engagement" }] },
  { id: "social-ads", icon: <Megaphone className="w-6 h-6" />, title: "Social Media Ads", short: "Paid social on Meta, Instagram & YouTube built on data.", color: "#1A56DB", bg: "#EBF2FF", tagline: "Scroll-Stopping Ads. Measurable ROI.", features: ["Meta & Instagram Ads", "YouTube & Google Display", "Retargeting Campaigns", "Creative A/B Testing", "Audience Segmentation", "Daily Budget Optimisation", "Product Demo Ads"], results: [{ n: "4.8x", l: "Average ROAS" }, { n: "40%", l: "Lower CPM" }, { n: "2x", l: "Conversion uplift" }] },
  { id: "performance", icon: <Target className="w-6 h-6" />, title: "Performance Marketing", short: "Full-funnel strategies engineered around ROAS and CPA.", color: "#059669", bg: "#ECFDF5", tagline: "Every Rupee Accountable.", features: ["Google Search & Shopping", "Meta Performance Campaigns", "YouTube Video Funnels", "Landing Page CRO", "ROAS & CPA Optimisation", "Weekly Performance Reviews"], results: [{ n: "120+", l: "Brands scaled" }, { n: "₹50Cr+", l: "Ad spend managed" }, { n: "3.8x", l: "Avg ROAS" }] },
  { id: "content", icon: <PenTool className="w-6 h-6" />, title: "Content Marketing", short: "Blogs, copy and brand storytelling that build authority.", color: "#0EA5E9", bg: "#E0F2FE", tagline: "Content That Ranks and Converts.", features: ["SEO Blog Writing", "Social Media Copywriting", "Email Campaigns", "Case Studies & Whitepapers", "Brand Storytelling", "Content Calendar Strategy", "Problem-Solution Ads"], results: [{ n: "3x", l: "Organic traffic growth" }, { n: "60%", l: "More time-on-site" }, { n: "45%", l: "Higher email opens" }] },
  { id: "seo", icon: <Search className="w-6 h-6" />, title: "SEO", short: "Technical SEO and link building that improves rankings.", color: "#DC2626", bg: "#FEF2F2", tagline: "Rank Higher. Grow Organically.", features: ["Full Technical Audit", "Keyword Research", "On-Page Optimisation", "Off-Page & Link Building", "Local SEO", "Monthly Ranking Reports"], results: [{ n: "2.5x", l: "Organic traffic" }, { n: "Top 5", l: "Keyword rankings" }, { n: "35%", l: "More organic leads" }] },
  { id: "aeo", icon: <Search className="w-6 h-6" />, title: "AEO", short: "Optimising your brand for AI search engines like Perplexity & ChatGPT.", color: "#0D9488", bg: "#F0FDFA", tagline: "Be the Answer AI Gives.", features: ["AI Visibility Audit", "Answer Engine Optimisation", "Structured Data Markup", "Conversational Keyword Research", "Brand Authority Building", "AI Search Tracking"], results: [{ n: "85%", l: "AI Citation Rate" }, { n: "2x", l: "Brand Mentions" }, { n: "Top 3", l: "AI Recommendations" }] },
  { id: "design", icon: <Code className="w-6 h-6" />, title: "Design & Development", short: "High-converting landing pages and D2C storefronts.", color: "#4F46E5", bg: "#EEF2FF", tagline: "Built for Speed. Designed for Sales.", features: ["Custom Shopify Stores", "High-CVR Landing Pages", "UI/UX Design", "Web Performance Tuning", "Mobile-First Development", "Conversion Rate Optimisation"], results: [{ n: "45%", l: "CVR Improvement" }, { n: "90+", l: "PageSpeed Score" }, { n: "3x", l: "Faster Load Time" }] },
];

const STATS = [{ n: "500+", l: "Verified Creators" }, { n: "1B+", l: "Campaign Views" }, { n: "4.8x", l: "Avg ROAS" }, { n: "120+", l: "Brands Scaled" }];

const TESTIMONIALS = [
  { 
    name: "Project Manager", 
    role: "Tech Mahindra", 
    text: "Codism's technical expertise and commitment to quality were evident throughout our digital transformation journey. They delivered a robust solution that exceeded our expectations and helped us scale our operations significantly. Their team is highly professional and responsive, making them a top-tier partner for any enterprise project.", 
    avatar: "M", 
    col: "#E31837"
  },
  { 
    name: "CEO", 
    role: "Sovereign Solutions Corp", 
    text: "The team at Codism is highly professional and responsive. Their ability to translate complex requirements into functional software is impressive. They've been a key partner in our growth for over 3 years, handling everything from backend architecture to mobile app development with exceptional skill and transparency.", 
    avatar: "S", 
    col: "#1A56DB"
  },
  { 
    name: "Founder", 
    role: "Stone DesignWorks", 
    text: "We've worked with many agencies, but Codism stands out for their attention to detail and proactive communication. They handled our UI/UX and frontend development with extreme precision and creativity, resulting in a 40% increase in user engagement and a significantly more modern brand presence.", 
    avatar: "SD", 
    col: "#7C3AED"
  },
  { 
    name: "Operations Director", 
    role: "Onsite Storage Solutions", 
    text: "Codism built a custom inventory and rental management system that transformed our business. Their technical depth and ability to solve complex logistics challenges are unmatched in the industry. The project was delivered on time and within budget, and their post-launch support has been outstanding.", 
    avatar: "OSS", 
    col: "#1A56DB"
  },
  { 
    name: "Marketing Head", 
    role: "ReadySetBoom", 
    text: "Their performance marketing strategies helped us achieve a 4x ROAS within the first three months. The level of data analysis and creative testing they perform is truly world-class. They don't just run ads; they understand the entire customer journey and optimize every touchpoint for maximum conversion.", 
    avatar: "RS", 
    col: "#0EA5E9"
  },
  { 
    name: "E-commerce Manager", 
    role: "Sunset BBQ Grill", 
    text: "The migration from Magento to Shopify was seamless. Our site speed improved by 60%, and we saw an immediate 40% boost in organic sales thanks to their SEO efforts. Their team's knowledge of e-commerce best practices and technical SEO is second to none.", 
    avatar: "SB", 
    col: "#DC2626"
  }
];

const CASE_STUDIES = [
  {
    id: "01",
    title: "From Invisible to Irresistible",
    subtitle: "How a D2C Skincare Brand 4x'd Its ROAS in 90 Days with UGC-Led Performance Ads",
    industry: "D2C Skincare & Beauty",
    duration: "90 Days",
    services: "UGC Production + Meta Ads",
    market: "India (Pan-India)",
    challenge: {
      text: "Our client, a homegrown D2C skincare brand with a promising product line, was struggling to break through the noise in one of India's most competitive categories. Despite having an excellent product, they were burning budget on generic creative assets that looked polished but failed to convert.",
      bullets: [
        "ROAS stagnating at 0.9x — below break-even",
        "High-production studio ads generating poor engagement",
        "No authentic social proof to build trust with new audiences",
        "Rising CPMs due to creative fatigue across all ad sets",
        "Conversion rate on landing pages below 1.2%"
      ]
    },
    strategy: [
      {
        phase: "Phase 1 — UGC Creative Production (Weeks 1–3)",
        bullets: [
          "Sourced and briefed 12 micro-creators across skin types, age groups, and geographies",
          "Produced 40+ UGC video assets in native formats: unboxings, before/after routines, 'Get Ready With Me' hooks, and honest reviews",
          "Developed 3 distinct hook strategies: problem-agitate-solution, social proof stacking, and curiosity-gap openers"
        ]
      },
      {
        phase: "Phase 2 — Performance Campaign Architecture (Weeks 3–5)",
        bullets: [
          "Built a structured Meta Ads testing framework: 6 ad sets, 3 audiences, 5–7 creatives per set",
          "Deployed Cost Cap and Minimum ROAS bidding strategies simultaneously",
          "Integrated Advantage+ Shopping Campaigns alongside manual targeting for A/B comparison"
        ]
      },
      {
        phase: "Phase 3 — Optimisation & Scaling (Weeks 6–13)",
        bullets: [
          "Weekly creative audits: killed underperformers within 72 hours, doubled budgets on winning UGCs",
          "Iterated winning hooks into carousel, static, and Reels variations",
          "Retargeting sequences built around warm audiences with deeper social proof content"
        ]
      }
    ],
    results: [
      { label: "ROAS", value: "4.2x", sub: "Up from 0.9x" },
      { label: "Lower CPA", value: "68%", sub: "vs. Month 1" },
      { label: "CTR", value: "3.1%", sub: "Up from 0.6%" },
      { label: "Revenue Driven", value: "₹82L", sub: "In 90 Days" }
    ],
    testimonial: {
      quote: "We had tried three agencies before Brand Propel Studio. None of them understood UGC the way they do. Within the first month, we could see the difference — people were actually watching our ads till the end. The results speak for themselves.",
      author: "Founder, D2C Skincare Brand (Name Withheld Confidentially)"
    },
    col: "#1A56DB",
    bg: "#EBF2FF"
  },
  {
    id: "02",
    title: "Scaling a Fitness Brand to ₹1 Crore Monthly Revenue",
    subtitle: "Performance Marketing + UGC Strategy That Turned Scroll-Stoppers into Buyers",
    industry: "Fitness & Wellness (Supplements)",
    duration: "6 Months",
    services: "UGC + Meta + Google Ads",
    market: "India (Tier 1 & Tier 2 Cities)",
    challenge: {
      text: "A rising fitness supplements brand came to us with an ambitious goal: reach ₹1 crore in monthly revenue within 6 months. At the time of onboarding, they were doing approximately ₹18 lakhs per month with inconsistent ad performance and no structured content strategy.",
      bullets: [
        "Monthly revenue plateaued at ₹18–22 lakhs with no growth trajectory",
        "Zero UGC library — all ads were brand-produced, studio-quality but low on trust",
        "Google Ads account was unstructured with no Shopping feed optimisation",
        "No retargeting infrastructure — losing warm traffic daily",
        "Customer acquisition cost exceeding ₹950 per order"
      ]
    },
    strategy: [
      {
        phase: "UGC Content Engine",
        bullets: [
          "Onboarded 20 fitness creators — athletes, gym-goers, home workout enthusiasts — spanning men and women across age groups",
          "Produced 60+ UGC assets monthly: transformation testimonials, 'What I Eat in a Day' integrations, workout routine embeds, and myth-busting educational content",
          "Created a UGC content calendar aligned with fitness seasonality: New Year, summer shred, festive gifting"
        ]
      },
      {
        phase: "Meta Ads Restructure",
        bullets: [
          "Rebuilt campaign structure: TOFU (Awareness via UGC hooks) → MOFU (Engagement + social proof) → BOFU (Offer-driven retargeting)",
          "Launched Collaborative Ads with creator handles to leverage authentic reach",
          "Dynamic Creative Testing with 100+ creative combinations in the first 60 days"
        ]
      },
      {
        phase: "Google Ads & Shopping",
        bullets: [
          "Overhauled Product Feed with optimised titles, descriptions, and GTIN data",
          "Launched Performance Max campaigns anchored with UGC assets",
          "Search campaigns targeting high-intent keywords with tightly themed ad groups"
        ]
      }
    ],
    results: [
      { label: "Monthly Revenue", value: "₹1.08Cr", sub: "By Month 6" },
      { label: "Revenue Growth", value: "5.6x", sub: "In 6 Months" },
      { label: "CAC", value: "₹310", sub: "Down from ₹950" },
      { label: "Blended ROAS", value: "6.8x", sub: "Across Channels" }
    ],
    testimonial: {
      quote: "The team at Brand Propel Studio didn't just run ads — they built us a machine. The UGC content they created became our best-performing assets across every single channel. We hit our 6-month target in month 5.",
      author: "Co-Founder, Fitness Supplements Brand (Name Withheld Confidentially)"
    },
    col: "#1A56DB",
    bg: "#EBF2FF"
  },
  {
    id: "03",
    title: "265% More Lead Volume for an EdTech Brand",
    subtitle: "How Strategic UGC & Lead-Gen Campaigns Slashed CPL by 57%",
    industry: "EdTech / Online Education",
    duration: "4 Months",
    services: "UGC + Meta Lead Gen + YouTube",
    market: "India (English + Regional)",
    challenge: {
      text: "An EdTech platform offering professional upskilling courses approached Brand Propel Studio with a critical problem: their cost per lead (CPL) had risen to ₹420 per lead — nearly double the industry benchmark — and lead quality had deteriorated significantly, with low show-up rates on demo calls.",
      bullets: [
        "CPL at ₹420 against a target of ₹180",
        "Demo call show-up rates below 22%",
        "Low ad relevance scores (2–4 out of 10) across Meta campaigns",
        "No student testimonial or social proof content in the ad mix",
        "YouTube pre-roll campaigns generating views but zero conversions"
      ]
    },
    strategy: [
      {
        phase: "Student UGC Programme",
        bullets: [
          "Identified and briefed 15 past students to create authentic transformation stories — 'Where I was vs. where I am now' style content",
          "Produced 8 long-form video testimonials (60–90 sec) and 25 short-form clips (15–30 sec) optimised for Reels and YouTube Shorts",
          "Created 'Day in the Life' UGC showing how students balanced the course with jobs and family — addressing the #1 objection"
        ]
      },
      {
        phase: "Meta Lead Generation Campaigns",
        bullets: [
          "Launched Instant Form campaigns using UGC hooks paired with specific outcome promises",
          "A/B tested 4 lead form lengths — identified the optimal 3-field form that increased completion rates by 44%",
          "Built lookalike audiences from existing enrolled students to find high-quality prospects"
        ]
      },
      {
        phase: "YouTube Strategy",
        bullets: [
          "Repurposed long-form UGC testimonials as YouTube pre-roll with the first 5 seconds engineered as a powerful scroll-stopper",
          "Targeted intent-based audiences: career change seekers, professional certification researchers",
          "Created remarketing sequences: awareness UGC → testimonial → offer"
        ]
      }
    ],
    results: [
      { label: "More Leads", value: "265%", sub: "Month 1 vs Month 4" },
      { label: "CPL Achieved", value: "₹182", sub: "Down from ₹420" },
      { label: "Show-Up Rate", value: "51%", sub: "Up from 22%" },
      { label: "CPL Reduction", value: "57%", sub: "In 4 Months" }
    ],
    testimonial: {
      quote: "The quality of leads completely transformed. Our sales team went from struggling to fill demo slots to having a waiting list. The student stories Brand Propel Studio captured were so powerful — we use them everywhere now, not just in ads.",
      author: "Marketing Head, EdTech Platform (Name Withheld Confidentially)"
    },
    col: "#7C3AED",
    bg: "#F3E8FF"
  },
  {
    id: "04",
    title: "Building a ₹50L/Month D2C Home Brand from Scratch",
    subtitle: "Zero to Scale: UGC-First Launch Strategy for a Home & Lifestyle Brand",
    industry: "Home Décor & Lifestyle",
    duration: "5 Months",
    services: "UGC Strategy + Meta + Influencer",
    market: "India (Urban, Tier 1)",
    challenge: {
      text: "This case study is about a brand launch, not a turnaround. A home décor and lifestyle D2C brand approached us at pre-launch stage — no existing customer base, no brand awareness, no content library, and a modest initial marketing budget of ₹4 lakhs per month.",
      bullets: [
        "Zero brand awareness — launching into a competitive, aesthetic-driven category",
        "Limited budget requiring extremely high creative efficiency",
        "No existing customers to generate organic social proof",
        "Long consideration cycle — home purchases require inspiration before transaction",
        "Need to establish brand aesthetic while maintaining UGC authenticity"
      ]
    },
    strategy: [
      {
        phase: "Pre-Launch: Building the UGC Asset Bank (Month 1)",
        bullets: [
          "Seeded products with 25 home décor creators, interior styling enthusiasts, and lifestyle micro-influencers",
          "Briefed creators to produce content in 5 formats: room tours, styling tutorials, product unboxings, 'Before & After' transformations, and gifting moments",
          "Produced 80+ UGC assets before running a single paid rupee — establishing a robust creative library"
        ]
      },
      {
        phase: "Launch Campaign — Month 2–3",
        bullets: [
          "Meta Awareness + Traffic campaigns using room transformation and styling UGC as hero creatives",
          "Launched a Catalogue Sales campaign with lifestyle UGC as ad creative — a key differentiator vs. competitor product images",
          "Collaborated with 5 larger home décor influencers (100K–500K) for brand credibility content — amplified via paid dark posts"
        ]
      },
      {
        phase: "Scale & Retention — Month 4–5",
        bullets: [
          "Activated first-buyer retargeting with user-submitted photos (collected via post-purchase email flow)",
          "Launched a customer UGC incentive programme: discount in exchange for styled photos — generating 40+ organic assets monthly",
          "Built Google Shopping presence with UGC-enhanced product listings"
        ]
      }
    ],
    results: [
      { label: "Month 5 Revenue", value: "₹51L", sub: "From ₹0 at Launch" },
      { label: "ROAS", value: "11.4x", sub: "On Best Performing UGC" },
      { label: "Conversion Rate", value: "4.2%", sub: "Category Avg: 1.8%" },
      { label: "Repeat Purchase", value: "38%", sub: "Within 90 Days" }
    ],
    testimonial: {
      quote: "We came to Brand Propel Studio with a dream and a tight budget. They made every rupee work. The UGC content they created made our brand look like it had been around for years. We went from zero to a brand people actually talk about — in five months.",
      author: "Founder & CEO, Home & Lifestyle Brand (Name Withheld Confidentially)"
    },
    col: "#059669",
    bg: "#ECFDF5"
  }
];

const BLOG_POSTS = [
  { title: "How UGC is Outperforming Studio Content in 2025", date: "Mar 15, 2026", cat: "UGC Strategy", img: "https://picsum.photos/seed/blog1/800/450" },
  { title: "The Rise of AI Influencers: Why Brands are Switching", date: "Mar 10, 2026", cat: "Influencer Marketing", img: "https://picsum.photos/seed/blog2/800/450" },
  { title: "5 Performance Marketing Hacks for D2C Brands", date: "Mar 05, 2026", cat: "Performance", img: "https://picsum.photos/seed/blog3/800/450" },
  { title: "Scaling to 10Cr/mo: A Case Study in Performance Marketing", date: "Feb 28, 2026", cat: "Case Study", img: "https://picsum.photos/seed/blog4/800/450" },
  { title: "Why Problem-Solution Ads are Your Highest Converting Format", date: "Feb 20, 2026", cat: "Ad Strategy", img: "https://picsum.photos/seed/blog5/800/450" },
];

const PROCESS = [
  { n: "01", t: "Brand Audit", d: "We deep-dive into your current performance, creative assets, and competitor landscape." },
  { n: "02", t: "Creator Matching", d: "We hand-pick creators from our vetted network that perfectly align with your brand persona." },
  { n: "03", t: "Creative Strategy", d: "Developing high-converting hooks and scripts based on proven performance data." },
  { n: "04", t: "Production & QA", d: "End-to-end production management ensuring premium quality and brand safety." },
  { n: "05", t: "Optimisation", d: "Continuous A/B testing of hooks and formats to maximise your ad spend ROI." }
];

const WHY_US = [
  { 
    title: "Performance-First DNA", 
    desc: "We don't just make content; we engineer conversions. Every creative is backed by data from ₹50Cr+ in managed ad spend.",
    icon: <BarChart3 className="w-6 h-6" />
  },
  { 
    title: "Vetted Creator Network", 
    desc: "Access to 500+ hand-picked Indian creators across niches, ensuring authentic storytelling for your brand.",
    icon: <Users className="w-6 h-6" />
  },
  { 
    title: "48-Hour Delivery", 
    desc: "Speed is our superpower. From brief to final delivery, we move at the speed of social media trends.",
    icon: <Clock className="w-6 h-6" />
  },
  { 
    title: "Full-Funnel Expertise", 
    desc: "From top-of-funnel awareness to bottom-of-funnel retargeting, we know what works at every stage.",
    icon: <Target className="w-6 h-6" />
  }
];

const CREATORS_LIST = [
  { name: "Ananya S.", niche: "Beauty & Skincare", img: "https://picsum.photos/seed/creator1/400/500" },
  { name: "Rahul M.", niche: "Tech & Gadgets", img: "https://picsum.photos/seed/creator2/400/500" },
  { name: "Priya K.", niche: "Lifestyle & Fashion", img: "https://picsum.photos/seed/creator3/400/500" },
  { name: "Vikram R.", niche: "Fitness & Health", img: "https://picsum.photos/seed/creator4/400/500" }
];

const PRICING = [
  { plan: "Starter", price: "Rs 49,999", period: "/mo", desc: "For early-stage D2C brands", hot: false, cta: "Join as Influencer", features: ["8 UGC Videos/month", "2 Creator Profiles", "Meta Ad Setup", "Monthly Report", "Account Manager"] },
  { plan: "Growth", price: "Rs 1,19,999", period: "/mo", desc: "The full engine for scaling", hot: true, cta: "Most Popular", features: ["20 UGC Videos/month", "6 Creator Profiles", "Meta + Google Campaigns", "1 Influencer Campaign/mo", "Creative Testing Lab", "Weekly Dashboard", "Performance Optimisation"] },
  { plan: "Scale", price: "Custom", period: "", desc: "Enterprise & agency partnerships", hot: false, cta: "Talk to Us", features: ["Unlimited UGC Volume", "Dedicated Creator Pod", "Full-Funnel Strategy", "Celebrity Influencers", "White-label Option", "24/7 Priority Support"] },
];

const CREATORS = [
  { name: "Sneha R.", niche: "Beauty", handle: "@snehacreates", flw: "240K", bg: "#FFE4EC", tc: "#C42D5A" },
  { name: "Arjun M.", niche: "Fitness", handle: "@fitwitharjun", flw: "180K", bg: "#E4F5FF", tc: "#0A72B8" },
  { name: "Kavya S.", niche: "Food", handle: "@kavyaeats", flw: "310K", bg: "#F3F7FF", tc: "#1E429F" },
  { name: "Rohit D.", niche: "Tech", handle: "@techwithrohit", flw: "420K", bg: "#E8F5E9", tc: "#1B7A3A" },
  { name: "Priya K.", niche: "Fashion", handle: "@priyastyle", flw: "155K", bg: "#F3E8FF", tc: "#7C3AED" },
  { name: "Dev P.", niche: "Home", handle: "@devdecors", flw: "92K", bg: "#E0F7FA", tc: "#00838F" },
];

const FAQS = [
  { q: "How quickly can you start producing UGC?", a: "We begin creator casting within 48 hours of onboarding. First deliverables are ready within 7-10 business days." },
  { q: "Do you only work with D2C brands?", a: "D2C and e-commerce are our sweet spot but we work with any consumer brand selling online — apps, FMCG, and service businesses too." },
  { q: "How do you vet your creator network?", a: "Every creator is manually reviewed across 30+ parameters including audience quality, engagement rate and brand safety record." },
  { q: "Can UGC be used for paid ads?", a: "Yes. All UGC includes usage rights for paid advertising on Meta, Google and YouTube. Ad-usage rights are in every creator agreement." },
  { q: "What is the minimum ad spend budget?", a: "We recommend minimum Rs 50,000/month for Meta campaigns to generate enough data for meaningful optimisation." },
  { q: "Do you offer white-label services?", a: "Yes. Our Scale plan includes white-label partnership options for other Indian digital agencies." },
];

// ─── COMPONENTS ───

function FAQItem({ faq }: any) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
      <button 
        onClick={() => setOpen(!open)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-bold text-slate-900">{faq.q}</span>
        <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center transition-transform ${open ? "rotate-180" : ""}`}>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-slate-600 leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Counter({ target }: { target: string }) {
  const num = parseFloat(target.replace(/[^\d.]/g, ""));
  const [val, setVal] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = num / steps;
    const interval = setInterval(() => {
      start += increment;
      if (start >= num) {
        setVal(num);
        clearInterval(interval);
      } else {
        setVal(Math.floor(start));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, num]);

  const prefix = target.includes("₹") ? "₹" : target.includes("Rs") ? "Rs " : "";
  const suffix = target.includes("Cr") ? "Cr+" : target.includes("B+") ? "B+" : target.includes("x") ? "x" : target.includes("+") ? "+" : "";

  return <span ref={ref as any}>{prefix}{val}{suffix}</span>;
}

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView] as const;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-brand-light rounded-full px-4 py-1.5 mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
      <span className="text-[11px] font-bold text-brand tracking-widest uppercase">{children}</span>
    </div>
  );
}

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer group" onClick={onClick}>
      <div className="relative w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center shrink-0 bg-white border border-brand/10 shadow-sm group-hover:scale-105 transition-transform">
        <img 
          src="https://scontent.fpnq6-1.fna.fbcdn.net/v/t39.30808-6/590807351_122098733535148525_6374173426190407819_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=YWd0pszrpOIQ7kNvwFvw5g5&_nc_oc=Adl6cy4OOqlK60YqoFVzNr7Ib5z62m_4OV-ohCZjo-EeACyz7b6KjY3u4AFadLTkrbe_puQ5YviyDMBYx1jPw5hR&_nc_zt=23&_nc_ht=scontent.fpnq6-1.fna&_nc_gid=Y4Lk2C39or5wJ64llBK4oQ&_nc_ss=8&oh=00_AfyJVvlO-YNMyODvVzylTW41Hmsem4op57x0j5y_dQQVog&oe=69C050D3" 
          alt="Brand Propel Studio" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-black tracking-tighter text-slate-900 group-hover:text-brand transition-colors" style={{ textDecorationLine: 'none' }}>Brand Propel Studio</span>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">A CODISM Company</span>
      </div>
    </div>
  );
}

function Ticker() {
  return (
    <div className="bg-slate-900 py-4 overflow-hidden border-t-2 border-brand">
      <div className="animate-tick whitespace-nowrap inline-block">
        {[...CLIENTS, ...CLIENTS].map((c, i) => (
          <span key={i} className="mr-12 text-xs font-bold text-white/40 uppercase tracking-widest">
            {c.name}<span className="text-brand ml-12">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Navbar({ page, handleNav, scrolled }: { page: string, handleNav: (p: string, s?: string) => void, scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[500] h-16 px-[5%] flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm" : "bg-transparent"}`}>
      <Logo onClick={() => handleNav("home", "home")} />
      
      <div className="hidden md:flex gap-8 items-center">
        <button className={`text-sm font-semibold transition-colors ${page === "home" ? "text-brand" : "text-slate-600 hover:text-brand"}`} onClick={() => handleNav("home", "home")}>Home</button>
        <div className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
          <button className={`text-sm font-semibold flex items-center gap-1 transition-colors ${page.startsWith("svc") ? "text-brand" : "text-slate-600 hover:text-brand"}`} onClick={() => handleNav("home", "services")}>
            Services <ChevronDown className="w-3 h-3" />
          </button>
          <AnimatePresence>
            {drop && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[600]"
              >
                <div className="bg-white border border-slate-100 rounded-2xl shadow-2xl min-w-[750px] overflow-hidden">
                  <div className="grid grid-cols-3 divide-x divide-slate-50">
                    {[
                      { group: "Performance & Ads", items: ["performance", "social-ads", "ugc"] },
                      { group: "Influencer & Content", items: ["influencer", "content"] },
                      { group: "Search & Tech", items: ["seo", "aeo", "design"] }
                    ].map((col, idx) => (
                      <div key={idx} className="p-6">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 border-l-2 border-brand pl-3">{col.group}</div>
                        <div className="flex flex-col gap-1">
                          {col.items.map(id => {
                            const s = SVCS.find(x => x.id === id);
                            if (!s) return null;
                            return (
                              <button 
                                key={s.id} 
                                onClick={() => { handleNav("svc-" + s.id); setDrop(false); }}
                                className="w-full text-left px-3 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-brand flex items-center gap-3 rounded-lg transition-colors group"
                              >
                                <span className="text-brand opacity-80 group-hover:scale-110 transition-transform">{s.icon}</span>
                                {s.title}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <button className={`text-sm font-semibold transition-colors ${page === "case-studies" ? "text-brand" : "text-slate-600 hover:text-brand"}`} onClick={() => handleNav("case-studies")}>Case Studies</button>
        <button className={`text-sm font-semibold transition-colors ${page === "contact" ? "text-brand" : "text-slate-600 hover:text-brand"}`} onClick={() => handleNav("contact")}>Contact</button>
        <button className={`text-sm font-semibold transition-colors ${page === "blogs" ? "text-brand" : "text-slate-600 hover:text-brand"}`} onClick={() => handleNav("blogs")}>Blogs</button>
      </div>

      <div className="flex gap-3 items-center">
        <button 
          className="hidden lg:flex px-5 py-2 rounded-lg bg-brand text-white text-xs font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand/10"
          onClick={() => handleNav("contact")}
        >
          Book Free Audit
        </button>
        <button 
          className="hidden sm:flex px-5 py-2 rounded-lg border-2 border-brand text-brand text-xs font-bold hover:bg-brand-light transition-all"
          onClick={() => handleNav("influencer-join")}
        >
          Join as an Influencer
        </button>
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-white z-[600] p-6 flex flex-col gap-6"
          >
            <div className="flex justify-between items-center">
              <Logo onClick={() => { handleNav("home", "home"); setIsOpen(false); }} />
              <button onClick={() => setIsOpen(false)}><X className="text-slate-900" /></button>
            </div>
            <div className="flex flex-col gap-4 mt-8">
              {["Home", "Case Studies", "Blogs", "Contact"].map(item => (
                <button 
                  key={item} 
                  className="text-2xl font-bold text-slate-900 text-left"
                  onClick={() => { 
                    if (item === "Home") {
                      handleNav("home", "home");
                    } else {
                      const p = item.toLowerCase().replace(" ", "-");
                      handleNav(p); 
                    }
                    setIsOpen(false); 
                  }}
                >
                  {item}
                </button>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <button 
                  className="w-full py-4 rounded-xl bg-brand text-white font-bold text-center"
                  onClick={() => { handleNav("contact"); setIsOpen(false); }}
                >
                  Book Free Audit
                </button>
                <button 
                  className="w-full py-4 rounded-xl border-2 border-brand text-brand font-bold text-center"
                  onClick={() => { handleNav("influencer"); setIsOpen(false); }}
                >
                  Join as an Influencer
                </button>
              </div>
              <div className="h-px bg-slate-100 my-2" />
              <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Services</div>
              {[
                { group: "Performance & Ads", items: ["performance", "social-ads", "ugc"] },
                { group: "Influencer & Content", items: ["influencer", "content"] },
                { group: "Search & Tech", items: ["seo", "aeo", "design"] }
              ].map((col, idx) => (
                <div key={idx} className="flex flex-col gap-3 mb-4">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-l-2 border-brand pl-3">{col.group}</div>
                  <div className="flex flex-col gap-4 pl-3">
                    {col.items.map(id => {
                      const s = SVCS.find(x => x.id === id);
                      if (!s) return null;
                      return (
                        <button 
                          key={s.id} 
                          className="text-lg font-bold text-slate-600 text-left flex items-center gap-3"
                          onClick={() => { handleNav("svc-" + s.id); setIsOpen(false); }}
                        >
                          <span className="text-brand scale-90">{s.icon}</span>
                          {s.title}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Foot({ handleNav }: { handleNav: (p: string, s?: string) => void }) {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 px-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <Logo onClick={() => handleNav("home", "home")} />
          <p className="text-sm text-slate-400 leading-relaxed mt-6 max-w-xs">India's leading UGC and performance marketing studio built to scale D2C brands.</p>
          <div className="flex gap-3 mt-8">
            {[
              { Icon: Instagram, url: "https://www.instagram.com/brandpropelstudio/reels/" },
              { Icon: Youtube, url: "https://www.youtube.com/@BrandPropelStudio" },
              { Icon: Linkedin, url: "https://www.linkedin.com/company/propel-studios/" },
              { Icon: Twitter, url: "https://x.com/brand_prop81404" },
              { Icon: Facebook, url: "https://www.facebook.com/profile.php?id=61584455763253#" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:bg-brand hover:text-white transition-all"
              >
                <social.Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        {[
          { t: "Services", ls: [{ l: "UGC Content", p: "svc-ugc" }, { l: "Influencer Marketing", p: "svc-influencer" }, { l: "Social Media Ads", p: "svc-social-ads" }, { l: "Performance Marketing", p: "svc-performance" }, { l: "AEO", p: "svc-aeo" }, { l: "Design & Development", p: "svc-design" }] },
          { t: "Company", ls: [{ l: "About Us", p: "about" }, { l: "Case Studies", p: "case-studies" }, { l: "Blogs", p: "blogs" }, { l: "Contact", p: "contact" }] },
          { t: "Contact", ls: [{ l: "hello@brandpropelstudio.in", p: "" }, { l: "+91 98765 43210", p: "" }, { l: "Pune, India", p: "" }] },
        ].map((col, i) => (
          <div key={i}>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-6">{col.t}</div>
            <div className="flex flex-col gap-3">
              {col.ls.map(l => (
                <button 
                  key={l.l} 
                  onClick={() => l.p && handleNav(l.p)} 
                  className={`text-sm text-slate-400 text-left transition-colors ${l.p ? "hover:text-white" : "cursor-default"}`}
                >
                  {l.l}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs text-slate-600">© 2025 Brand Propel Studio. All rights reserved. Made with love in India</span>
        <div className="flex gap-6">
          {[
            { l: "Privacy Policy", p: "privacy" },
            { l: "Terms", p: "terms" },
            { l: "Refund Policy", p: "refund" }
          ].map(item => (
            <button 
              key={item.l} 
              onClick={() => handleNav(item.p)}
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              {item.l}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── PAGES ───

function ClientLogoItem({ client }: any) {
  const [imgSrc, setImgSrc] = useState(client.logo);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isError, setIsError] = useState(false);

  const generateFallback = async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ 
        apiKey: process.env.GEMINI_API_KEY
      });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: `A professional, minimalist, high-quality corporate logo for a company named "${client.name}". The logo should be clean, modern, and suitable for a business website. Use a professional color palette. White background.`,
            },
          ],
        },
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64EncodeString = part.inlineData.data;
          setImgSrc(`data:image/png;base64,${base64EncodeString}`);
          setIsGenerating(false);
          return;
        }
      }
      throw new Error("No image generated");
    } catch (error) {
      console.error("Error generating logo:", error);
      setIsError(true);
      setIsGenerating(false);
    }
  };

  return (
    <a 
      href={client.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center p-4 rounded-2xl bg-white border border-slate-100 grayscale hover:grayscale-0 transition-all hover:shadow-lg group h-28 relative overflow-hidden"
    >
      <div className="text-center w-full h-full flex items-center justify-center">
        {isGenerating ? (
          <div className="flex flex-col items-center gap-2">
            <div className="w-5 h-5 border-2 border-brand border-t-transparent rounded-full animate-spin" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Generating Logo...</span>
          </div>
        ) : isError ? (
          <div className="text-lg font-black text-slate-400 group-hover:text-brand transition-colors tracking-tighter leading-tight uppercase italic">{client.name}</div>
        ) : (
          <img 
            src={imgSrc} 
            alt={client.name} 
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
            onError={() => {
              generateFallback();
            }}
          />
        )}
      </div>
    </a>
  );
}

function ClientLogos() {
  return (
    <section className="py-10 px-[5%] bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Label>Trusted by Growing Brands</Label>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">Trusted by Growing Brands</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {CLIENTS.map((c, i) => (
            <ClientLogoItem key={i} client={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [ref, inView] = useInView(0.05);
  return (
    <section ref={ref as any} className="py-10 px-[5%] bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <Label>Client Success Stories</Label>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-4">Verified Reviews from Clutch</h2>
          <div className="flex items-center justify-center gap-2 text-brand font-bold">
            <Star className="w-5 h-5 fill-current" />
            <span>4.9/5.0 Average Rating</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(255, 99, 33, 0.15)"
              }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: i * 0.1 
              }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group cursor-default"
            >
              <div className="absolute top-0 right-0 p-6">
                <Quote className="w-12 h-12 text-slate-50 group-hover:text-brand/10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-400 uppercase tracking-widest">Verified Review</span>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed italic mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg" style={{ backgroundColor: t.col }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIImage({ prompt, initialImg, className }: { prompt: string, initialImg: string, className?: string }) {
  const [img, setImg] = useState(initialImg);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const hasKey = await (window as any).aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await (window as any).aistudio.openSelectKey();
      }
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: { parts: [{ text: prompt }] },
        config: {
          imageConfig: {
            aspectRatio: "3:4",
            imageSize: "1K"
          }
        }
      });
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setImg(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative group overflow-hidden ${className}`}>
      <img 
        src={img} 
        alt="AI Generated" 
        className={`w-full h-full object-cover transition-all duration-700 ${loading ? 'blur-lg scale-110' : 'group-hover:scale-110'}`}
        referrerPolicy="no-referrer" 
      />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <Zap className="w-8 h-8 text-white animate-bounce" />
        </div>
      )}
      <button 
        onClick={(e) => { e.stopPropagation(); generate(); }}
        className="absolute top-4 right-4 p-2 rounded-full bg-brand/90 text-white opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg"
        title="Regenerate with Gemini 3.1"
      >
        <Sparkles className="w-4 h-4" />
      </button>
    </div>
  );
}

function Home({ setPage }: { setPage: (p: string) => void }) {
  const [heroRef, heroInView] = useInView(0);
  const [svcRef, svcInView] = useInView(0.05);
  const [workRef, workInView] = useInView(0.05);
  const [processRef, processInView] = useInView(0.05);
  const [creatorRef, creatorInView] = useInView(0.05);
  const [testRef, testInView] = useInView(0.05);
  const [priceRef, priceInView] = useInView(0.05);

  const [tIdx, setTIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTIdx(p => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section id="home" ref={heroRef as any} className="min-h-screen flex items-center bg-gradient-to-br from-brand-light via-white to-[#F2F5FF] px-[5%] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute right-[-200px] top-[5%] w-[700px] h-[700px] rounded-full bg-radial-gradient from-brand/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-white border border-brand-muted rounded-full px-4 py-2 text-xs font-bold text-brand shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                India's Leading UGC and Influencer Marketing Studio
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(38px,5.5vw,72px)] font-display font-extrabold leading-[1.05] tracking-tight text-slate-900 mb-6"
            >
              Content That <span className="text-brand">Connects.</span><br />
              Ads That <span className="text-brand">Convert.</span><br />
              <span className="text-slate-500">Brands That Scale.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-600 leading-relaxed max-w-xl mb-6"
            >
              We help Indian D2C brands grow through <strong>UGC video production</strong>, <strong>influencer marketing</strong>, and <strong>high-performance social ads</strong> — all under one roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex items-center gap-2 mb-10"
            >
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                <Facebook className="w-4 h-4 text-[#1877F2] fill-[#1877F2]" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Meta Business Partner</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <button className="px-8 py-4 rounded-xl bg-brand text-white font-bold text-lg hover:bg-brand-dark shadow-xl shadow-brand/20 transition-all" onClick={() => setPage("contact")}>Start Scaling Today</button>
              <button className="px-8 py-4 rounded-xl border-2 border-brand text-brand font-bold text-lg hover:bg-brand-light transition-all" onClick={() => setPage("case-studies")}>View Case Studies</button>
              <button className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 shadow-xl shadow-slate-900/20 transition-all" onClick={() => setPage("influencer-join")}>Join as Influencer</button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-10"
            >
              {STATS.map((s, i) => (
                <div key={i} className="border-l-4 border-brand pl-4">
                  <div className="text-2xl font-extrabold text-brand leading-none mb-1"><Counter target={s.n} /></div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <AIImage 
                  prompt={HERO_PROMPTS[0]} 
                  initialImg="https://picsum.photos/seed/fashion1/400/600" 
                  className="rounded-3xl shadow-xl border-4 border-white aspect-[3/4]" 
                />
                <AIImage 
                  prompt={HERO_PROMPTS[1]} 
                  initialImg="https://picsum.photos/seed/fashion2/400/400" 
                  className="rounded-3xl shadow-xl border-4 border-white aspect-square" 
                />
              </div>
              <div className="space-y-4 pt-12">
                <AIImage 
                  prompt={HERO_PROMPTS[2]} 
                  initialImg="https://picsum.photos/seed/fashion3/400/400" 
                  className="rounded-3xl shadow-xl border-4 border-white aspect-square" 
                />
                <AIImage 
                  prompt={HERO_PROMPTS[3]} 
                  initialImg="https://picsum.photos/seed/fashion4/400/600" 
                  className="rounded-3xl shadow-xl border-4 border-white aspect-[3/4]" 
                />
              </div>
            </div>
            
            {/* Logos under picture as requested in screenshot */}
            <div className="mt-8 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 text-center">Trusted by Industry Leaders</div>
              <div className="flex flex-wrap justify-center gap-6 grayscale opacity-60">
                {CLIENTS.slice(0, 5).map((c, i) => (
                  <img 
                    key={i} 
                    src={c.logo} 
                    alt={c.name} 
                    className="h-6 object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating stats cards */}
            <div className="absolute -right-8 top-1/4 flex flex-col gap-4">
              {[
                { v: "5.8x", l: "Avg ROAS", c: "text-emerald-600" },
                { v: "234%", l: "CTR Boost", c: "text-brand" },
              ].map((s, i) => (
                <motion.div 
                  key={i}
                  initial={{ x: 20, opacity: 0 }}
                  animate={heroInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.2 }}
                  className="bg-white p-4 rounded-xl shadow-lg border border-slate-100 min-w-[120px]"
                >
                  <div className={`text-xl font-black ${s.c}`}>{s.v}</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Ticker />
      
      <ClientLogos />

      {/* WHY CHOOSE US - UNIQUE PROPOSITION */}
      <section className="py-12 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Label>The Propel Advantage</Label>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-slate-900 mb-4">
              Why Brands Choose Us Over <span className="text-brand">Traditional Agencies</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              We've combined the creativity of a studio with the analytical rigour of a performance agency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_US.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" ref={svcRef as any} className="py-24 px-[5%] bg-white">
        <div className="text-center mb-16">
          <Label>What We Do</Label>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={svcInView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-slate-900 mb-4"
          >
            One Studio. Every Growth Channel.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={svcInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-xl mx-auto"
          >
            From UGC to full-funnel ad campaigns — we cover every touchpoint of your customer journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SVCS.map((s, i) => (
            <motion.div 
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              animate={svcInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              onClick={() => setPage("svc-" + s.id)}
              className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-brand hover:shadow-2xl hover:shadow-brand/5 hover:-translate-y-2 transition-all cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110" style={{ backgroundColor: s.bg, color: s.color }}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">{s.short}</p>
              <div className="flex items-center gap-2 text-sm font-bold text-brand">
                Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="work" ref={workRef as any} className="py-24 px-[5%] bg-slate-50">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <Label>Our Work</Label>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={workInView ? { opacity: 1, y: 0 } : {}}
              className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-slate-900"
            >
              Numbers That Matter.
            </motion.h2>
          </div>
          <button className="px-6 py-3 rounded-xl border-2 border-brand text-brand font-bold hover:bg-brand-light transition-all" onClick={() => setPage("case-studies")}>See All Case Studies</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CASE_STUDIES.map((w, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={workInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl transition-all group"
            >
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4" style={{ backgroundColor: w.bg, color: w.col }}>{w.industry}</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{w.title}</h3>
              <div className="text-3xl font-extrabold mb-2" style={{ color: w.col }}>{w.results[0].value}</div>
              <p className="text-xs text-slate-500 leading-relaxed">{w.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BEFORE VS AFTER */}
      <section className="py-12 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-100">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src="https://picsum.photos/seed/before/400/600" alt="Before" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Before Propel</div>
                  </div>
                  <div className="relative">
                    <img src="https://picsum.photos/seed/after/400/600" alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 right-4 bg-brand text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">After Propel</div>
                  </div>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 min-w-[200px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">ROAS Increase</span>
                    <span className="text-emerald-500 font-bold text-sm">+180%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      className="h-full bg-emerald-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Label>The Impact</Label>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                Stop Guessing. <br /> Start <span className="text-brand">Scaling.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Most agencies focus on vanity metrics. We focus on your bottom line. Our performance-first UGC strategy is designed to lower your CPA and skyrocket your ROAS.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-3xl font-black text-brand mb-1">40%</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Avg. CPA Reduction</div>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-3xl font-black text-emerald-600 mb-1">3.5x</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Avg. CTR Uplift</div>
                </div>
              </div>
              <button className="px-8 py-4 rounded-xl bg-brand text-white font-bold text-lg hover:bg-brand-dark shadow-xl shadow-brand/20 transition-all" onClick={() => setPage("contact")}>Get a Free Audit</button>
            </div>
          </div>
        </div>
      </section>

      {/* CREATORS SECTION */}
      <section ref={creatorRef as any} className="py-12 px-[5%] bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Label>Our Network</Label>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                500+ Vetted Creators <br /> Ready to <span className="text-brand">Tell Your Story</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We don't just find influencers; we build a creator army for your brand. Every creator in our network is vetted for content quality, engagement authenticity, and brand safety.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Niche-specific matching (Beauty, Tech, Lifestyle, etc.)",
                  "Full rights management for ad usage",
                  "End-to-end communication & logistics",
                  "Performance-based creator selection"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="font-semibold text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
              <button className="px-8 py-4 rounded-xl bg-brand text-white font-bold text-lg hover:bg-brand-dark shadow-xl shadow-brand/20 transition-all" onClick={() => setPage("contact")}>Access Our Creator List</button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {CREATORS_LIST.map((c, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative rounded-2xl overflow-hidden shadow-lg ${i % 2 === 1 ? "mt-8" : ""}`}
                  >
                    <img 
                      src={c.img} 
                      alt={c.name} 
                      className="w-full h-64 object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
                      <div className="text-white font-bold">{c.name}</div>
                      <div className="text-white/70 text-sm">{c.niche}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-brand/5 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" ref={processRef as any} className="py-24 px-[5%] bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute left-[-10%] bottom-[-10%] w-[40%] aspect-square rounded-full bg-brand/10 blur-[120px]" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <Label>How We Work</Label>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-6"
            >
              Our Proven <span className="text-brand">5-Step</span> System
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400 leading-relaxed mb-10"
            >
              Strategy before spending — every campaign starts with a full audit of your brand and market.
            </motion.p>
            <button className="px-8 py-4 rounded-xl bg-brand text-white font-bold text-lg hover:bg-brand-dark shadow-xl shadow-brand/20 transition-all" onClick={() => setPage("contact")}>Book a Strategy Call</button>
          </div>

          <div className="flex flex-col gap-8">
            {PROCESS.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={processInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center shrink-0 font-extrabold text-sm group-hover:scale-110 transition-transform">
                  {p.n}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">{p.t}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* FEATURED CREATORS */}
      <section className="py-24 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Label>Featured Talent</Label>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-slate-900 mb-4">
              Creators Who <span className="text-brand">Deliver Results</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Meet some of the top creators in our network who are helping brands scale through authentic content.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {CREATORS.map((c, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl text-center group hover:-translate-y-2 transition-all"
                style={{ backgroundColor: c.bg }}
              >
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white shadow-lg" style={{ backgroundColor: c.tc }}>
                  {c.name[0]}
                </div>
                <div className="font-bold text-slate-900 text-sm mb-1">{c.name}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: c.tc }}>{c.niche}</div>
                <div className="text-[10px] font-medium text-slate-500">{c.flw} Followers</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-24 px-[5%] bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Label>Got Questions?</Label>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-slate-900 mb-4">
              Frequently Asked <span className="text-brand">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <Testimonials />

      <CTABand setPage={setPage} />
    </>
  );
}

function InfluencerJoinPage() {
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

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", brand: "", budget: "", service: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    if (!form.name || !form.email) {
      setError("Name and Email are required fields.");
      return;
    }
    
    // Basic email validation
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
            brand_name: form.brand,
            budget: form.budget,
            message: form.msg,
            to_name: "Brand Propel Studio",
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }
      
      setSent(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="pt-32 pb-24 px-[5%] bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <Label>Get In Touch</Label>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight mb-8">Let's Build Something <span className="text-brand">Powerful.</span></h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-12">Whether you are a D2C startup or an established brand — we will give you a free audit, honest advice and a clear roadmap for growth.</p>
            
            <div className="flex flex-col gap-8">
              {[
                { ic: <Megaphone className="w-5 h-5" />, l: "Email Us", v: "hello@brandpropelstudio.in" },
                { ic: <Users className="w-5 h-5" />, l: "Call Us", v: "+91 98765 43210" },
                { ic: <Globe className="w-5 h-5" />, l: "Mumbai Office", v: "Andheri East, Mumbai 400069" }
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
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500">We'll reach out within 24 hours with your free brand audit.</p>
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

                <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-brand outline-none transition-all" placeholder="Brand / Company Name" value={form.brand} onChange={e => setForm({...form, brand: e.target.value})} />
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-brand outline-none transition-all appearance-none" value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}>
                  <option value="">Monthly Budget Range</option>
                  <option>Under Rs 25,000</option>
                  <option>Rs 25,000 to Rs 75,000</option>
                  <option>Rs 75,000 to Rs 2,00,000</option>
                  <option>Rs 2,00,000 plus</option>
                </select>
                <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-brand outline-none transition-all h-32 resize-none" placeholder="Tell us about your brand and goals..." value={form.msg} onChange={e => setForm({...form, msg: e.target.value})} />

                <button 
                  className="w-full py-4 rounded-xl bg-brand text-white font-bold hover:bg-brand-dark shadow-xl shadow-brand/20 transition-all mt-4 disabled:opacity-50"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send and Get Free Audit"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfluencerPage({ setPage }: { setPage: (p: string) => void }) {
  const [heroRef, heroInView] = useInView(0);
  const [netRef, netInView] = useInView(0.05);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", link: "" });
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    if (!form.name || !form.email || !form.link) {
      setError("All fields are required.");
      return;
    }

    // Basic email validation
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
            influencer_link: form.link,
            message: "New Influencer Application",
            to_name: "Brand Propel Studio",
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setSent(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setError("Failed to send application. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { t: "Beauty & Fashion", d: "150+ Creators", ic: "💄", col: "#C42D5A", bg: "#FFE4EC" },
    { t: "Tech & Gadgets", d: "80+ Creators", ic: "📱", col: "#0A72B8", bg: "#E4F5FF" },
    { t: "Food & Lifestyle", d: "120+ Creators", ic: "🍕", col: "#1E429F", bg: "#F3F7FF" },
    { t: "Fitness & Health", d: "95+ Creators", ic: "💪", col: "#1B7A3A", bg: "#E8F5E9" },
    { t: "Travel & Decor", d: "60+ Creators", ic: "✈️", col: "#00838F", bg: "#E0F7FA" },
    { t: "Gaming & Entertainment", d: "110+ Creators", ic: "🎮", col: "#7C3AED", bg: "#F3E8FF" },
  ];

  return (
    <div id="influencer" className="min-h-screen bg-white">
      {/* HERO */}
      <section ref={heroRef as any} className="pt-32 pb-20 px-[5%] bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#1A56DB_0%,transparent_50%)] opacity-10" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,#1A56DB_0%,transparent_50%)] opacity-10" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                className="mb-8 inline-block"
              >
                <div className="px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                  Next-Gen Creator Economy
                </div>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-8xl font-display font-extrabold tracking-tighter mb-8 leading-[0.9]"
              >
                The Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-400">Influence is AI.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-400 max-w-xl mb-12 leading-relaxed font-medium"
              >
                From human creators to virtual AI influencers, we manage the world's most engaging digital personas for global makeup and beauty brands.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-6"
              >
                <button className="px-10 py-5 rounded-full bg-brand text-white font-bold text-lg hover:bg-brand-dark shadow-[0_0_40px_rgba(255,99,33,0.3)] transition-all hover:scale-105 active:scale-95" onClick={() => setPage("contact")}>Start Campaign</button>
                <button 
                  className="px-10 py-5 rounded-full bg-white/5 text-white font-bold text-lg border border-white/10 hover:bg-white/10 backdrop-blur-md transition-all" 
                  onClick={() => {
                    const el = document.getElementById("gallery");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Gallery
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(255,99,33,0.15)] border border-white/10">
                <img 
                  src="https://picsum.photos/seed/makeup-hero-girl/800/1000" 
                  alt="AI Makeup Influencer" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand">
                      <img src="https://picsum.photos/seed/avatar1/100/100" alt="Avatar" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Aria V.</div>
                      <div className="text-brand text-[10px] font-bold uppercase tracking-widest">AI Beauty Creator</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Engagement</div>
                      <div className="text-white font-bold">8.4%</div>
                    </div>
                    <div>
                      <div className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">Reach</div>
                      <div className="text-white font-bold">1.2M+</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Glow */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand/20 rounded-full blur-[100px] -z-10" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI INFLUENCERS SECTION */}
      <AIInfluencerGallery />
      <AIAdvertisingShowcase />

      <section className="py-16 px-[5%] bg-slate-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-brand mb-4">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Virtual Creators</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tighter leading-none">Meet Our <span className="text-slate-500 italic font-serif">AI Influencers</span></h2>
            </div>
            <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
              Infinite scalability. 24/7 engagement. Zero drama. Our AI creators are built to represent your brand values perfectly across every platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Aria V", niche: "Fashion & Tech", followers: "1.2M", img: "https://picsum.photos/seed/ai1/600/800" },
              { name: "Kai Digital", niche: "Fitness & Wellness", followers: "850K", img: "https://picsum.photos/seed/ai2/600/800" },
              { name: "Luna Star", niche: "Gaming & Lifestyle", followers: "2.5M", img: "https://picsum.photos/seed/ai3/600/800" }
            ].map((ai, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative aspect-[3/4] rounded-[32px] overflow-hidden bg-slate-900 border border-white/10"
              >
                <img src={ai.img} alt={ai.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs font-bold text-brand uppercase tracking-widest mb-1">{ai.niche}</div>
                      <h3 className="text-2xl font-bold text-white mb-1">{ai.name}</h3>
                      <div className="flex items-center gap-2 text-white/50 text-xs">
                        <Users className="w-3 h-3" /> {ai.followers} Reach
                      </div>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-brand hover:border-brand transition-all">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI REELS GALLERY */}
      <section className="py-16 px-[5%] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Label>AI-Generated Content</Label>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tighter">Viral <span className="text-brand">AI Reels</span> & Content</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <motion.div 
                key={n}
                whileHover={{ scale: 0.98 }}
                className="aspect-[9/16] rounded-2xl bg-slate-100 relative overflow-hidden group cursor-pointer"
              >
                <img src={`https://picsum.photos/seed/reel${n}/400/711`} alt="AI Reel" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest">
                    <Zap className="w-3 h-3 text-brand" /> 1.2M Views
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI CONTENT GENERATOR DEMO */}
      <section className="py-16 px-[5%] bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Cpu className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 text-brand mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest">Live AI Demo</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-6">Generate Your <span className="text-brand">AI Creator</span></h2>
              <p className="text-slate-500 mb-10 leading-relaxed">Experience the power of our proprietary AI engine. Describe your ideal influencer and watch our system generate a persona in seconds.</p>
              
              <AIContentDemo />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 bg-brand">
        <div className="max-w-6xl mx-auto px-[5%] grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { n: "50,000+", l: "Influencers" },
            { n: "1B+", l: "Monthly Reach" },
            { n: "500+", l: "Brands Scaled" },
            { n: "10,000+", l: "Campaigns" }
          ].map((s, i) => (
            <div key={i} className="text-center text-white">
              <div className="text-3xl md:text-5xl font-display font-extrabold mb-1">{s.n}</div>
              <div className="text-xs font-bold text-white/60 uppercase tracking-widest">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section ref={netRef as any} className="py-16 px-[5%] bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Label>Our Network</Label>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">Creators for Every Niche</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={netInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform group-hover:scale-110" style={{ backgroundColor: c.bg }}>
                  {c.ic}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{c.t}</h3>
                <p className="text-sm font-bold mb-4" style={{ color: c.col }}>{c.d}</p>
                <button className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 group-hover:text-brand transition-colors">
                  Explore Niche <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOIN AS INFLUENCER */}
      <section className="py-16 px-[5%] bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto bg-brand rounded-[48px] p-10 md:p-16 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold mb-6 tracking-tighter">Are You a Creator? <br /><span className="text-white/80">Join the Elite.</span></h2>
              <p className="text-lg text-white/70 mb-8 max-w-md">Get exclusive access to top brands, transparent payments, and dedicated support to grow your personal brand.</p>
              <div className="flex flex-col gap-4">
                {["Direct Brand Deals", "Timely Payments", "Growth Support"].map((f, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                    <span className="font-bold">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl">
              {sent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Application Sent!</h3>
                  <p className="text-slate-500">We'll review your profile and reach out soon.</p>
                </motion.div>
              ) : (
                <div className="flex flex-col gap-4">
                  <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-sm outline-none focus:border-brand" placeholder="Full Name *" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                  <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-sm outline-none focus:border-brand" placeholder="Email Address *" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />

                  <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-sm outline-none focus:border-brand" placeholder="Instagram/YouTube Link *" value={form.link} onChange={e => setForm({...form, link: e.target.value})} />

                  <button 
                    className="w-full py-5 rounded-xl bg-slate-900 text-white font-bold hover:bg-black transition-all mt-4 disabled:opacity-50 shadow-xl" 
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Apply to Join Network"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* NEW: UNBOXING & TESTIMONIALS SECTION */}
      <section className="py-24 px-[5%] bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <Label>High-Converting Formats</Label>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tighter mb-8 leading-tight">Content That <span className="text-brand">Builds Desire</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                    <Package className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Unboxing Videos (Makeup & Skincare)</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">First-impression content that builds desire before the purchase. Perfect for reels and stories.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Testimonial Videos</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Real customers sharing authentic experiences with your product. The ultimate social proof.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[9/16] rounded-3xl bg-slate-200 overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/seed/unboxing1/400/711" alt="Unboxing" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[9/16] rounded-3xl bg-slate-200 overflow-hidden shadow-2xl mt-12">
                <img src="https://picsum.photos/seed/testimonial1/400/711" alt="Testimonial" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SkincareAISection />

      <CTABand setPage={setPage} />
    </div>
  );
}

function CTABand({ setPage }: { setPage: (p: string) => void }) {
  return (
    <section className="py-24 px-[5%] bg-gradient-to-br from-brand to-brand-dark text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      
      <div className="relative z-10">
        <div className="text-xs font-bold text-white/60 uppercase tracking-widest mb-4">Free Consultation — No Commitments</div>
        <h2 className="text-3xl md:text-6xl font-display font-extrabold text-white tracking-tight mb-6">Ready to Propel Your Brand?</h2>
        <p className="text-lg text-white/70 max-w-lg mx-auto mb-10">Book a free 30-min strategy call. We will show you exactly where you are leaving money on the table.</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-10 py-5 rounded-xl bg-white text-brand font-bold text-lg hover:bg-brand-muted shadow-2xl transition-all" onClick={() => setPage("contact")}>Book Free Strategy Call</button>
          <button className="px-10 py-5 rounded-xl bg-white/10 text-white font-bold text-lg border border-white/20 hover:bg-white/20 transition-all" onClick={() => setPage("influencer")}>Join as an Influencer</button>
        </div>
      </div>
    </section>
  );
}

function SkincareAISection() {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [type, setType] = useState<"reel" | "photo">("reel");
  const [category, setCategory] = useState<"skincare" | "makeup" | "fashion">("skincare");

  const generateAI = async () => {
    setGenerating(true);
    try {
      const ai = new GoogleGenAI({ 
        apiKey: process.env.GEMINI_API_KEY
      });
      
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-image",
        contents: [{ text: `A high-quality, professional ${type === "reel" ? "video frame of an unboxing reel" : "product photography"} for a luxury ${category} brand. Style: ${prompt || "Minimalist, clean, aesthetic"}. Cinematic lighting, hyper-realistic, showing textures and elegant packaging.` }]
      });
      
      let found = false;
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setResult(`data:image/png;base64,${part.inlineData.data}`);
          found = true;
          break;
        }
      }
      if (!found) setResult(`https://picsum.photos/seed/${category}${Math.random()}/600/800`);
    } catch (err) {
      console.error(err);
      setResult(`https://picsum.photos/seed/${category}${Math.random()}/600/800`);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <section className="py-24 px-[5%] bg-slate-950 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Label>AI Creative Studio</Label>
          <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tighter mb-6">Generate <span className="text-brand">Brand Content</span> with AI</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Instant unboxing reels and professional product photos for skincare, makeup, and fashion. No studio needed.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] shadow-2xl">
            <div className="flex gap-4 mb-6">
              {(["skincare", "makeup", "fashion"] as const).map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`flex-1 py-2 rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all ${category === cat ? "bg-white text-slate-950" : "bg-white/5 text-white/40 hover:bg-white/10"}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex gap-4 mb-8">
              <button 
                onClick={() => setType("reel")}
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${type === "reel" ? "bg-brand text-white" : "bg-white/5 text-white/60 hover:bg-white/10"}`}
              >
                Unboxing Reel
              </button>
              <button 
                onClick={() => setType("photo")}
                className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${type === "photo" ? "bg-brand text-white" : "bg-white/5 text-white/60 hover:bg-white/10"}`}
              >
                Product Photo
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">Describe the Vibe</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm outline-none focus:border-brand transition-all min-h-[120px] text-white"
                  placeholder={`e.g. ${category === 'skincare' ? 'Morning sun hitting a glass bottle of serum...' : category === 'makeup' ? 'Close up of a luxury lipstick with gold accents...' : 'Aesthetic fashion flatlay with silk textures...'}`}
                  value={prompt}
                  onChange={e => setPrompt(e.target.value)}
                />
              </div>
              <button 
                onClick={generateAI}
                disabled={generating}
                className="w-full py-5 rounded-2xl bg-brand text-white font-bold hover:bg-brand-dark transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,99,33,0.3)]"
              >
                {generating ? <Zap className="w-6 h-6 animate-pulse" /> : <Sparkles className="w-6 h-6" />}
                {generating ? "AI is Crafting..." : `Generate AI ${type === "reel" ? "Reel" : "Photo"}`}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-full opacity-50" />
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div 
                  key={result}
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  className="relative aspect-[9/16] max-w-[340px] mx-auto rounded-[40px] overflow-hidden border-8 border-white/10 shadow-2xl group"
                >
                  <img src={result} alt="AI Generated Content" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                    <div className="text-brand font-black text-xs uppercase tracking-[0.2em] mb-2">AI Generated {category} {type}</div>
                    <div className="text-xl font-bold text-white leading-tight">Perfect for your next campaign.</div>
                  </div>
                </motion.div>
              ) : (
                <div className="aspect-[9/16] max-w-[340px] mx-auto rounded-[40px] border-2 border-dashed border-white/20 flex flex-col items-center justify-center text-center p-8 text-white/30">
                  <ImageIcon className="w-12 h-12 mb-4 opacity-20" />
                  <p className="text-sm font-medium">Your AI-generated {category} {type} will appear here.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function AIAdvertisingShowcase() {
  const ads = [
    { title: "AURA Perfume", cat: "Luxury", prompt: HERO_PROMPTS[0], tag: "High Fashion", size: "tall", initial: "https://picsum.photos/seed/aura/800/1000" },
    { title: "Premium Jewelry", cat: "Accessories", prompt: HERO_PROMPTS[1], tag: "High Fashion", size: "square", initial: "https://picsum.photos/seed/jewelry/800/800" },
    { title: "VERIDIAN Scarf", cat: "Fashion", prompt: HERO_PROMPTS[2], tag: "High Fashion", size: "tall", initial: "https://picsum.photos/seed/veridian/800/1000" },
    { title: "Tech-Beauty App", cat: "Tech", prompt: HERO_PROMPTS[3], tag: "Modern", size: "square", initial: "https://picsum.photos/seed/techbeauty/800/800" },
    { title: "STEP Sneakers", cat: "Footwear", prompt: GALLERY_PROMPTS[0], tag: "UGC Unboxing", size: "tall", initial: "https://picsum.photos/seed/step/800/1000" },
    { title: "GLOW DROP Serum", cat: "Skincare", prompt: GALLERY_PROMPTS[1], tag: "Clean Beauty", size: "square", initial: "https://picsum.photos/seed/glowdrop/800/800" },
    { title: "PALETTE X", cat: "Makeup", prompt: GALLERY_PROMPTS[2], tag: "Beauty Guru", size: "tall", initial: "https://picsum.photos/seed/palettex/800/1000" },
    { title: "Street Style", cat: "Fashion", prompt: LIFESTYLE_PROMPTS[0], tag: "Lifestyle", size: "square", initial: "https://picsum.photos/seed/street/800/800" },
    { title: "TIMELESS Watch", cat: "Accessories", prompt: LIFESTYLE_PROMPTS[1], tag: "Lifestyle", size: "tall", initial: "https://picsum.photos/seed/timeless/800/1000" },
    { title: "Influencer Squad", cat: "Social", prompt: LIFESTYLE_PROMPTS[2], tag: "UGC Selfie", size: "square", initial: "https://picsum.photos/seed/squad/800/800" },
  ];

  return (
    <section id="gallery" className="py-24 px-[5%] bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Label>Campaign Gallery</Label>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tighter mb-6">AI-Generated <span className="text-brand">Advertising Gallery</span></h2>
            <p className="text-slate-500 text-lg">Hyper-realistic AI creators delivering high-impact advertising for global makeup and clothing brands.</p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-900 font-bold text-sm shadow-sm">600+ AI Models</div>
            <div className="px-6 py-3 rounded-full bg-brand text-white font-bold text-sm shadow-lg shadow-brand/20">98% Realism Score</div>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {ads.map((ad, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid group relative rounded-[32px] overflow-hidden shadow-2xl bg-slate-200"
            >
              <AIImage prompt={ad.prompt} initialImg={ad.initial} className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 pointer-events-none" />
              
              <div className="absolute top-6 left-6 flex gap-2">
                <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
                  {ad.tag}
                </div>
                <div className="px-3 py-1 rounded-full bg-brand text-white text-[10px] font-bold uppercase tracking-widest">
                  Gemini 3.1
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                <div className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">{ad.cat}</div>
                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{ad.title}</h3>
                <div className="flex items-center gap-2 text-brand font-bold text-sm">
                  View Campaign Details <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIInfluencerGallery() {
  const influencers = [
    { name: "Sasha V.", niche: "Fashion", img: "https://picsum.photos/seed/fashionai1/600/800" },
    { name: "Elena R.", niche: "Makeup", img: "https://picsum.photos/seed/makeupai1/600/800" },
    { name: "Marcus K.", niche: "Lifestyle", img: "https://picsum.photos/seed/lifestyleai1/600/800" },
    { name: "Chloe M.", niche: "Skincare", img: "https://picsum.photos/seed/skincareai1/600/800" },
  ];

  return (
    <section className="py-24 px-[5%] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Label>AI Influencer Studio</Label>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tighter mb-6">AI-Generated <span className="text-brand">Influencer Avatars</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Scale your influencer marketing with hyper-realistic AI avatars tailored to your brand's aesthetic.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {influencers.map((inf, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden group shadow-xl"
            >
              <img src={inf.img} alt={inf.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                <div className="text-white font-bold text-lg">{inf.name}</div>
                <div className="text-brand font-bold text-xs uppercase tracking-widest">{inf.niche}</div>
              </div>
              <div className="absolute top-4 right-4 bg-brand text-white text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">AI Generated</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AIContentDemo() {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const generateAI = async () => {
    if (!prompt) return;
    setGenerating(true);
    try {
      const ai = new GoogleGenAI({ 
        apiKey: process.env.GEMINI_API_KEY
      });
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-image-preview",
        contents: [{ text: `A high-quality, professional portrait of a virtual AI influencer creator. Style: ${prompt}. Cinematic lighting, hyper-realistic.` }],
        config: {
          imageConfig: {
            aspectRatio: "3:4",
            imageSize: "1K"
          }
        }
      });
      
      let found = false;
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          setResult(`data:image/png;base64,${part.inlineData.data}`);
          found = true;
          break;
        }
      }
      if (!found) {
        // Fallback if no image part found (though nano banana should return one)
        setResult(`https://picsum.photos/seed/${Math.random()}/600/800`);
      }
    } catch (err) {
      console.error(err);
      setResult(`https://picsum.photos/seed/${Math.random()}/600/800`);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-4">
        <input 
          className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm outline-none focus:border-brand transition-all"
          placeholder="e.g. Cyberpunk fashion model, Minimalist yoga guru..."
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
        />
        <button 
          onClick={generateAI}
          disabled={generating}
          className="px-8 py-4 rounded-2xl bg-brand text-white font-bold hover:bg-brand-dark transition-all disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {generating ? <Zap className="w-5 h-5 animate-pulse" /> : <Sparkles className="w-5 h-5" />}
          {generating ? "Generating..." : "Generate Persona"}
        </button>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 aspect-[3/4] max-w-sm mx-auto rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative group"
          >
            <img src={result} alt="AI Generated Creator" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div className="text-white">
                <div className="text-xs font-bold uppercase tracking-widest text-brand mb-1">AI Generated</div>
                <div className="text-lg font-bold">Your Custom Creator</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CaseStudiesPage({ setPage }: { setPage: (p: string) => void }) {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      {/* HEADER */}
      <section className="py-20 px-[5%] bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-brand font-black text-sm uppercase tracking-[0.3em] mb-4">Brand Propel Studio</div>
          <div className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-8">India's Leading UGC & Performance Marketing Agency</div>
          <h1 className="text-5xl md:text-8xl font-display font-black text-slate-900 tracking-tighter mb-6 leading-none">CLIENT SUCCESS <br /><span className="text-brand">CASE STUDIES</span></h1>
          <p className="text-2xl font-bold text-slate-600 mb-12 italic font-serif">Real Results. Proven Strategy. Measurable Growth.</p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <span>D2C Beauty</span>
            <span className="text-brand">•</span>
            <span>Fitness & Wellness</span>
            <span className="text-brand">•</span>
            <span>EdTech</span>
            <span className="text-brand">•</span>
            <span>Home & Lifestyle</span>
          </div>
        </div>
      </section>

      {/* CASE STUDIES LIST */}
      <div className="max-w-6xl mx-auto px-[5%] py-20 space-y-32">
        {CASE_STUDIES.map((cs, i) => (
          <motion.div 
            key={cs.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* CASE STUDY HEADER */}
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b-2 border-slate-900 pb-6">
              <div>
                <div className="text-brand font-black text-sm uppercase tracking-widest mb-2">CASE STUDY {cs.id}</div>
                <h2 className="text-4xl md:text-6xl font-display font-black text-slate-900 tracking-tighter leading-none mb-4">{cs.title}</h2>
                <p className="text-xl font-bold text-slate-500 max-w-2xl">{cs.subtitle}</p>
              </div>
            </div>

            {/* METADATA GRID */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Industry</div>
                <div className="font-bold text-slate-900">{cs.industry}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Duration</div>
                <div className="font-bold text-slate-900">{cs.duration}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Services</div>
                <div className="font-bold text-slate-900">{cs.services}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Market</div>
                <div className="font-bold text-slate-900">{cs.market}</div>
              </div>
            </div>

            {/* CONTENT GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* LEFT COLUMN: CHALLENGE & STRATEGY */}
              <div className="lg:col-span-8 space-y-16">
                {/* CHALLENGE */}
                <div>
                  <h3 className="inline-block px-4 py-1 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-6">The Challenge</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">{cs.challenge.text}</p>
                  <ul className="space-y-4">
                    {cs.challenge.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-4 items-start text-slate-700 font-medium">
                        <span className="text-brand mt-1">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* STRATEGY */}
                <div>
                  <h3 className="inline-block px-4 py-1 bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-8">Our Strategy</h3>
                  <div className="space-y-12">
                    {cs.strategy.map((s, idx) => (
                      <div key={idx}>
                        <h4 className="text-xl font-black text-slate-900 mb-4">{s.phase}</h4>
                        <ul className="space-y-3">
                          {s.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex gap-4 items-start text-slate-600">
                              <span className="text-brand mt-1">▸</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: RESULTS & TESTIMONIAL */}
              <div className="lg:col-span-4 space-y-12">
                {/* RESULTS */}
                <div className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-3xl rounded-full -mr-16 -mt-16" />
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand mb-10">The Results</h3>
                  <div className="space-y-10">
                    {cs.results.map((r, idx) => (
                      <div key={idx} className="border-b border-white/10 pb-6 last:border-0">
                        <div className="text-4xl font-black mb-1">{r.value}</div>
                        <div className="text-xs font-bold text-brand uppercase tracking-widest mb-1">{r.label}</div>
                        <div className="text-[10px] text-white/50 font-medium">{r.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TESTIMONIAL */}
                <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-xl relative">
                  <div className="text-4xl text-brand font-serif absolute top-6 left-6 opacity-20">"</div>
                  <p className="text-lg text-slate-700 italic serif leading-relaxed mb-8 relative z-10">
                    {cs.testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-1 w-1 bg-brand" />
                    <div className="text-xs font-bold text-slate-900 uppercase tracking-widest leading-tight">
                      {cs.testimonial.author}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER CTA */}
      <section className="py-32 px-[5%] bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-display font-black text-slate-900 tracking-tighter mb-8 leading-none">READY TO WRITE YOUR <br /><span className="text-brand">SUCCESS STORY?</span></h2>
          <p className="text-xl text-slate-500 mb-12 leading-relaxed">
            Every brand you've read about in these pages started exactly where you are today. At Brand Propel Studio, we combine the power of authentic UGC content with precision performance marketing to deliver results that move the needle.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
            {[
              { ic: "🎬", t: "UGC Production", d: "Creator-led authentic content at scale" },
              { ic: "📈", t: "Performance Ads", d: "Meta, Google & YouTube campaigns" },
              { ic: "🎯", t: "Full-Funnel Strategy", d: "From awareness to retention" }
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-3xl mb-4">{f.ic}</div>
                <h4 className="font-bold text-slate-900 mb-2">{f.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setPage("contact")}
            className="px-12 py-6 rounded-full bg-brand text-white font-black text-xl hover:bg-brand-dark shadow-2xl shadow-brand/30 transition-all hover:scale-105 active:scale-95 mb-8"
          >
            Get a Free Strategy Consultation
          </button>
          
          <div className="flex flex-col items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
            <div>brandpropelstudio.com  |  hello@brandpropelstudio.com</div>
            <div className="text-brand">India's Leading UGC & Performance Marketing Agency</div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BlogsPage({ setPage }: { setPage: (p: string) => void }) {
  const [ref, inView] = useInView(0.05);
  return (
    <div className="min-h-screen pt-32 pb-24 px-[5%] bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <Label>Our Blog</Label>
        <h1 className="text-4xl md:text-7xl font-display font-extrabold text-slate-900 tracking-tight mb-12">Insights & <span className="text-brand">Case Studies</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {BLOG_POSTS.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="aspect-video relative overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold text-slate-900 uppercase tracking-widest">{post.cat}</div>
              </div>
              <div className="p-8">
                <div className="text-xs text-slate-400 font-bold mb-3">{post.date}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-brand transition-colors">{post.title}</h3>
                <button 
                  onClick={() => setPage("contact")}
                  className="flex items-center gap-2 text-brand font-bold text-sm group-hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-slate-200 pt-20">
          <Label>Success Stories</Label>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-12">Detailed Case Studies</h2>
          <div ref={ref as any} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CASE_STUDIES.map((cs, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row"
              >
                <div className="w-full md:w-1/3 aspect-square md:aspect-auto relative overflow-hidden">
                  <img src={`https://picsum.photos/seed/cs${i}/400/400`} alt={cs.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{cs.title}</h3>
                    <div className="px-3 py-1 rounded-lg bg-brand-light text-brand text-xs font-bold">{cs.results[0].value}</div>
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{cs.industry}</div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{cs.subtitle}</p>
                  <button 
                    onClick={() => setPage("case-studies")}
                    className="flex items-center gap-2 text-brand font-bold text-sm group-hover:gap-3 transition-all"
                  >
                    View Full Case Study <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutPage({ setPage }: { setPage: (p: string) => void }) {
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
            We bridge the gap between high-end production and performance marketing. Our team of creators, media buyers, and strategists work in sync to deliver content that doesn't just look good—it converts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p>To empower e-commerce brands with the creative assets and strategic media buying they need to dominate their niche and scale profitably.</p>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p>To be the #1 performance creative partner for high-growth brands globally, setting the standard for ROI-driven content.</p>
            </div>
          </div>
          <p>
            Since our inception, we've helped dozens of brands achieve record-breaking ROAS through our unique "Creative-First" approach to paid social. We don't just run ads; we build engines for growth.
          </p>
        </div>
        <div className="mt-16 p-12 bg-brand rounded-[3rem] text-white text-center shadow-2xl shadow-brand/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to write your success story?</h2>
          <button 
            onClick={() => setPage("contact")}
            className="px-10 py-5 bg-white text-brand font-black text-xl rounded-2xl hover:scale-105 transition-transform shadow-xl"
          >
            Work With Us
          </button>
        </div>
      </div>
    </div>
  );
}

function PolicyPage({ type, setPage }: { type: 'privacy' | 'terms' | 'refund', setPage: (p: string) => void }) {
  const content = {
    privacy: {
      title: "Privacy Policy",
      text: "At Brand Propel Studio, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you use our services or visit our website. We collect information such as your name, email, and business details only to provide and improve our services. We never sell your data to third parties."
    },
    terms: {
      title: "Terms of Service",
      text: "By accessing our website or using our services, you agree to comply with these terms. Our services are provided 'as is,' and we make no warranties regarding specific outcomes, although we strive for excellence. All content produced by Brand Propel Studio remains our intellectual property until full payment is received."
    },
    refund: {
      title: "Refund Policy",
      text: "Due to the nature of creative and digital marketing services, we generally do not offer refunds once work has commenced. However, we are committed to your satisfaction and will work closely with you to ensure the final deliverables meet the agreed-upon brief. Specific refund terms may be outlined in individual service contracts."
    }
  }[type];

  return (
    <div className="min-h-screen pt-32 pb-20 px-[5%] bg-white">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => setPage("home")} className="text-brand font-bold mb-8 flex items-center gap-2">
          <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
        </button>
        <h1 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 mb-8 tracking-tight">{content.title}</h1>
        <div className="text-lg text-slate-600 leading-relaxed space-y-6">
          <p>{content.text}</p>
          <p>Last updated: March 20, 2026</p>
          <p>If you have any questions regarding this policy, please contact us at hello@brandpropel.studio</p>
        </div>
      </div>
    </div>
  );
}

function SvcPage({ svcId, setPage }: { svcId: string, setPage: (p: string) => void }) {
  const svc = SVCS.find(s => s.id === svcId) || SVCS[0];
  const [ref, inView] = useInView(0.05);

  // Custom descriptions for specific features
  const featureDetails: Record<string, string> = {
    "Product Demo Ads": "Show your product in action to educate and convert simultaneously.",
    "Problem-Solution Ads": "Hook with a problem, sell with your solution — the highest-converting format.",
    "Unboxing Videos (Makeup & Skincare)": "First-impression content that builds desire before the purchase.",
    "Testimonial Videos": "Real customers sharing authentic experiences with your product."
  };

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-12 px-[5%] relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${svc.bg} 0%, #fff 60%)` }}>
        <div className="max-w-6xl mx-auto">
          <button onClick={() => setPage("home")} className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand mb-8 transition-colors">
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
            <button className="px-8 py-4 rounded-xl bg-brand text-white font-bold text-lg hover:bg-brand-dark shadow-xl shadow-brand/20 transition-all" onClick={() => setPage("influencer-join")}>Join as Influencer</button>
            <button className="px-8 py-4 rounded-xl border-2 border-brand text-brand font-bold text-lg hover:bg-brand-light transition-all" onClick={() => setPage("contact")}>Free Consultation</button>
          </div>
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

      {svcId === "influencer" && (
        <>
          <AIInfluencerGallery />
          <AIAdvertisingShowcase />
        </>
      )}

      {svcId === "social-ads" && (
        <section className="py-24 px-[5%] bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Label>Ad Creative Showcase</Label>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tighter">Product Demo <span className="text-brand">Ads in Action</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { t: "Dynamic Demo", d: "Educate and convert simultaneously.", img: "https://picsum.photos/seed/demo1/600/800" },
                { t: "Feature Highlight", d: "Showcase unique selling points.", img: "https://picsum.photos/seed/demo2/600/800" },
                { t: "Lifestyle Integration", d: "Product in real-world use.", img: "https://picsum.photos/seed/demo3/600/800" }
              ].map((ad, i) => (
                <div key={i} className="group rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-100">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img src={ad.img} alt={ad.t} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{ad.t}</h3>
                    <p className="text-sm text-slate-500">{ad.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {svcId === "content" && (
        <section className="py-24 px-[5%] bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 blur-[120px] -z-10" />
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <Label>Highest-Converting Format</Label>
                <h2 className="text-4xl md:text-7xl font-display font-extrabold tracking-tighter mb-8 leading-[0.9]">Problem-Solution <span className="text-brand">Ads</span></h2>
                <p className="text-2xl font-bold text-white/80 mb-8 italic font-serif">"Hook with a problem, sell with your solution — the highest-converting format."</p>
                <p className="text-lg text-slate-400 leading-relaxed mb-10">We engineer content that identifies your customer's deepest pain points and positions your product as the only logical answer. This psychological framework consistently outperforms standard brand awareness content.</p>
                <div className="space-y-4">
                  {["Pain Point Identification", "Solution Positioning", "Strong Call-to-Action"].map((step, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-xs font-bold">{i + 1}</div>
                      <span className="font-bold text-white/90">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-[40px] bg-white/5 border border-white/10 p-4 relative overflow-hidden">
                   <img src="https://picsum.photos/seed/problem1/800/800" alt="Problem Solution Ad" className="w-full h-full object-cover rounded-[32px] opacity-80" referrerPolicy="no-referrer" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="px-8 py-4 bg-brand text-white font-black text-2xl uppercase tracking-tighter shadow-2xl rotate-[-5deg]">The Solution</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      <CTABand setPage={setPage} />
    </div>
  );
}

// ─── MAIN APP ───

export default function App() {
  const [page, setPage] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [targetSection, setTargetSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (targetSection) {
      const element = document.getElementById(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setTargetSection(null);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page, targetSection]);

  const handleNav = (p: string, section?: string) => {
    if (section && page === "home") {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (section) {
      setTargetSection(section);
      setPage("home");
    } else {
      if (page === p) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setPage(p);
      }
    }
  };

  const renderPage = () => {
    if (page.startsWith("svc-")) return <SvcPage svcId={page.replace("svc-", "")} setPage={setPage} />;
    switch (page) {
      case "home": return <Home setPage={setPage} />;
      case "contact": return <ContactPage />;
      case "influencer": return <InfluencerPage setPage={setPage} />;
      case "influencer-join": return <InfluencerJoinPage />;
      case "blogs": return <BlogsPage setPage={setPage} />;
      case "case-studies": return <CaseStudiesPage setPage={setPage} />;
      case "about": return <AboutPage setPage={setPage} />;
      case "privacy": return <PolicyPage type="privacy" setPage={setPage} />;
      case "terms": return <PolicyPage type="terms" setPage={setPage} />;
      case "refund": return <PolicyPage type="refund" setPage={setPage} />;
      default: return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand selection:text-white">
      <Navbar page={page} handleNav={handleNav} scrolled={scrolled} />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Foot handleNav={handleNav} />
    </div>
  );
}
