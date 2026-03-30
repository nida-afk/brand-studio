import React from "react";
import { 
  Play, 
  Star, 
  Megaphone, 
  Target, 
  PenTool, 
  Search, 
  Code,
  BarChart3,
  Users,
  Clock,
  TrendingUp,
  Video,
  Layout
} from "lucide-react";
import { 
  Client, 
  Service, 
  Stat, 
  Testimonial, 
  CaseStudy, 
  BlogPost, 
  ProcessStep, 
  WhyUsItem, 
  Creator, 
  FeaturedCreator, 
  PricingPlan, 
  FAQ 
} from "./types";

// ─── COLORS ───
export const B = "#1A56DB"; // Brand Blue
export const G9 = "#1A1A2E"; // Dark Navy
export const G7 = "#3D3D5C"; // Muted Navy
export const G5 = "#6B6B8A"; // Grayish Navy
export const G3 = "#C2C2D6"; // Light Gray
export const G1 = "#F4F4FA"; // Background Gray

// ─── PROMPTS ───
export const HERO_PROMPTS = [
  "Model: 8k, photorealistic fashion photography. A stunning platinum blonde model with striking icy blue eyes and porcelain, pale skin. She is holding a minimal glass perfume bottle (brand: \"AURA\"). She is wearing a structured white blazer in a sun-lit minimalist loft. Soft, cinematic studio lighting, shot on 35mm lens, sharp focus on eyes, blurred bokeh background. Esthetic: Luxury, minimal.",
  "Model: Cinematic 8k fashion portrait. A beautiful model with raven black, sleek hair, fair skin, and luminous green eyes. She is posing for a premium jewelry brand, wearing layered gold necklaces. Dramatic chiaroscuro lighting (soft shadow/light contrast), matte red lipstick. Shot on Canon EOS R5. Esthetic: Edgy, sophisticated.",
  "Model: High-end editorial photography. A breathtaking model with vibrant auburn-red hair, pale freckled skin, and blue eyes. She is wrapped in a luxurious, plush emerald green silk scarf (brand: \"VERIDIAN\"). Outdoor setting: soft, golden hour sunlight in a manicured garden. Ethereal, gentle aesthetic, medium shot. Esthetic: Natural, high-fashion boho.",
  "Model: Ultra-realistic portrait. A gorgeous model with chestnut brown, wavy hair, very fair skin, and large, deep blue eyes. She is holding a sleek smartphone advertising a mobile app, smiling genuinely. Studio setting with softbox lighting, natural makeup, glossy skin, detailed texture. Esthetic: Relatable, modern, tech-beauty."
];

export const GALLERY_PROMPTS = [
  "UGC Style: 4k candid shot, smartphone camera look. A popular blonde influencer with pale skin and blue eyes, smiling brightly. She is unboxing a subscription box filled with luxury sneakers (brand: \"STEP\"). The box is open on a fuzzy rug; packing paper and tissue paper are visible. Natural room lighting, shallow depth of field, sharp focus on the box contents. Esthetic: Raw, authentic unboxing.",
  "UGC Style: Candid, raw video still style. A close-up shot of a stunning pale-skinned girl with jet black hair and green eyes applying a facial serum. She is holding a dropper bottle (brand: \"GLOW DROP\"). Water droplets on her clean, luminous skin. Shot in a bright, modern white bathroom, natural morning light, genuine expression of joy. Esthetic: Clean beauty, ASMR skincare.",
  "UGC Style: 4k beauty shot, ring light lighting. A beautiful influencer with fiery red hair, fair skin, and blue eyes. She is looking into a small mirror, applying a vibrant eyeshadow shade from a colorful makeup palette (brand: \"PALETTE X\"). Perfect makeup application, detailed skin texture visible (not overly smoothed), blurred cosmetic vanity in the background. Esthetic: Beauty guru, colorful."
];

export const LIFESTYLE_PROMPTS = [
  "Lifestyle: 8k street style photography. A trendy platinum blonde model with very pale skin and icy blue eyes walking down a cobblestone street. She is wearing an oversized beige trench coat, chunky white sneakers, and a designer handbag. Candid, motion blur in the background, bright overcast daylight, cinematic depth of field. Esthetic: Street style, cool-girl aesthetic.",
  "Lifestyle: Photorealistic 4k shot. A close-up of a girl with chocolate brown hair, fair skin, and blue eyes, holding a coffee cup and wearing a minimalist watch (brand: \"TIMELESS\"). She is looking slightly off-camera. Sitting in a chic cafe with marble tables and soft, ambient indoor lighting. Sharp focus on the watch and her expression. Esthetic: Aesthetic lifestyle, soft.",
  "UGC Style: High-quality smartphone 'selfie' style shot. Three beautiful models smiling together in a mirror. On the left: a blonde with pale skin and blue eyes. Center: a black-haired girl with fair skin and green eyes. Right: a red-haired girl with fair skin. They are wearing casual, coordinated fashion outfits. Mirror reflection, background is a stylish dressing room, warm, authentic lighting. Esthetic: Trendy, relatable, influencer squad."
];

// ─── DATA ───
export const CLIENTS: Client[] = [
  {
    name: "99 Degrees",
    logo: "https://90degrees.in/cdn/shop/files/100_x_100_png.png?v=1687415301&width=100",
    url: "https://90degrees.in/"
  },
  {
    name: "Qehhwa Cafe",
    logo: "https://scontent.fpnq6-1.fna.fbcdn.net/v/t39.30808-6/457448327_122105839754489987_154075907298600601_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=lvbk84Zbxr4Q7kNvwFFgVnc&_nc_oc=Adr8w9ANwLXYMKmI1RY9GuWrswOmutjvt5Q31aytpzImn4G8oc1TP5vSJ8_p2PJN_xIBHkdp4q9ZtBZIl5PtyXw_&_nc_zt=23&_nc_ht=scontent.fpnq6-1.fna&_nc_gid=q8uU2_taZsS-W89N2TD2Ww&_nc_ss=7a389&oh=00_AfxL_bkht8sSNIsQE0ca-aS3JQSQPaQZyTmfNQiTsCAu5A&oe=69D071CE",
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
    name: "ReadySetBoom", 
    logo: "https://readysetsecure.com/common/resources/images/logo/ReadySet4_Logo_280x50.png",
    url: "https://readysetsecure.com/"
  }
];

export const SVCS: Service[] = [
  { 
    id: "performance-marketing", 
    icon: <TrendingUp className="w-6 h-6" />, 
    title: "Performance Marketing", 
    short: "India's top-rated full-funnel strategies engineered for maximum ROAS and lowest CPA.", 
    color: "#1A56DB", 
    bg: "#EBF2FF", 
    tagline: "We scale brands with data-driven Meta, Google, and Amazon Ads", 
    features: [
      "Paid Acquisition (Meta, Google, Amazon, LinkedIn Ads)",
      "360° Digital Marketing Strategy & Execution",
      "SEO + AEO (AI Search Optimization) for Organic Growth",
      "Conversion Rate Optimization (CRO) & Funnel Engineering",
      "Advanced Tracking & Analytics (GA4, GTM, Server-side Tagging)",
      "Retention Marketing (Email, WhatsApp, CRM Automation)"
    ], 
    results: [{ n: "3.5x+", l: "Average ROAS" }, { n: "150+", l: "Brands Scaled" }, { n: "₹100Cr+", l: "Ad Spend Managed" }] 
  },
  { 
    id: "influencer-creator", 
    icon: <Users className="w-6 h-6" />, 
    title: "Influencer & Creator Marketing", 
    short: "End-to-end influencer campaigns from nano to celebrity.", 
    color: "#7C3AED", 
    bg: "#F3E8FF", 
    tagline: "We turn creators into scalable acquisition channels", 
    features: [
      "Creator Strategy & Persona Mapping",
      "Influencer Sourcing & Outreach",
      "Long-term Creator Partnerships",
      "UGC via Creators & Product Seeding",
      "Paid Amplification (Creator Whitelisting)"
    ], 
    results: [{ n: "500+", l: "Vetted influencers" }, { n: "1B+", l: "Combined reach" }, { n: "4.2%", l: "Avg engagement" }] 
  },
  { 
    id: "creative-studio", 
    icon: <Video className="w-6 h-6" />, 
    title: "Creative Studio", 
    short: "Content that converts, not just looks good.", 
    color: "#059669", 
    bg: "#ECFDF5", 
    tagline: "We create content that converts: not just looks good", 
    features: [
      "Ad Creative Production (Static & Video)",
      "UGC Production (In-House & Controlled)",
      "Content Creation (Reels, Shorts, Copywriting)",
      "Brand & Visual Identity Systems"
    ], 
    results: [{ n: "3-5x", l: "Higher CTR" }, { n: "67%", l: "Lower CPA" }, { n: "48hr", l: "Avg delivery" }] 
  },
  { 
    id: "web-funnel", 
    icon: <Layout className="w-6 h-6" />, 
    title: "Web & App Development", 
    short: "Scalable, high-performance digital assets and custom web solutions engineered for speed and maximum sales conversion.", 
    color: "#4F46E5", 
    bg: "#EEF2FF", 
    tagline: "High converting digital assets and custom apps built for speed and sales.", 
    features: [
      "CMS Development (Shopify, WordPress, Webflow)",
      "Custom Web & App Development (React, Next.js)",
      "High-CVR Landing Page Design (UI/UX)",
      "Funnel Building & Speed Optimization",
      "Conversion-focused UX Audit & Design",
      "Scalable & Secure IT Management"
    ], 
    results: [{ n: "60%", l: "Speed Improvement" }, { n: "95+", l: "PageSpeed Score" }, { n: "4x", l: "Faster Load Time" }] 
  },
];

export const STATS: Stat[] = [{ n: "500+", l: "Verified Creators" }, { n: "1B+", l: "Campaign Views" }, { n: "4.8x", l: "Avg ROAS" }, { n: "120+", l: "Brands Scaled" }];

export const TESTIMONIALS: Testimonial[] = [
  { 
    name: "Project Manager", 
    role: "Tech Mahindra", 
    text: "Brand Propel Studio's technical expertise and commitment to quality were evident throughout our digital transformation journey. They delivered a robust solution that exceeded our expectations and helped us scale our operations significantly. Their team is highly professional and responsive, making them a top-tier partner for any enterprise project.", 
    avatar: "M", 
    col: "#E31837"
  },
  { 
    name: "CEO", 
    role: "Sovereign Solutions Corp", 
    text: "The team at Brand Propel Studio is highly professional and responsive. Their ability to translate complex requirements into functional software is impressive. They've been a key partner in our growth for over 3 years, handling everything from backend architecture to mobile app development with exceptional skill and transparency.", 
    avatar: "S", 
    col: "#1A56DB"
  },
  { 
    name: "Founder", 
    role: "Stone DesignWorks", 
    text: "We've worked with many agencies, but Brand Propel Studio stands out for their attention to detail and proactive communication. They handled our UI/UX and frontend development with extreme precision and creativity, resulting in a 40% increase in user engagement and a significantly more modern brand presence.", 
    avatar: "SD", 
    col: "#7C3AED"
  },
  { 
    name: "Operations Director", 
    role: "Onsite Storage Solutions", 
    text: "Brand Propel Studio built a custom inventory and rental management system that transformed our business. Their technical depth and ability to solve complex logistics challenges are unmatched in the industry. The project was delivered on time and within budget, and their post-launch support has been outstanding.", 
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
  },
  {
    name: "Founder",
    role: "D2C Skincare Brand | Facebook Review",
    text: "We had tried three agencies before Brand Propel Studio. None of them understood UGC the way they do. Within the first month, we could see the difference: people were actually watching our ads till the end. The results speak for themselves.",
    avatar: "DS",
    col: "#1A56DB"
  },
  {
    name: "Co-Founder",
    role: "Fitness Supplements Brand | Facebook Review",
    text: "The team at Brand Propel Studio didn't just run ads; they built us a machine. The UGC content they created became our best-performing assets across every single channel. We hit our 6-month target in month 5.",
    avatar: "FS",
    col: "#059669"
  },
  {
    name: "Marketing Head",
    role: "EdTech Platform | Facebook Review",
    text: "The quality of leads completely transformed. Our sales team went from struggling to fill demo slots to having a waiting list. The student stories Brand Propel Studio captured were so powerful: we use them everywhere now, not just in ads.",
    avatar: "EP",
    col: "#7C3AED"
  },
  {
    name: "Founder & CEO",
    role: "Home & Lifestyle Brand | Facebook Review",
    text: "We came to Brand Propel Studio with a dream and a tight budget. They made every rupee work. The UGC content they created made our brand look like it had been around for years. We went from zero to a brand people actually talk about in five months.",
    avatar: "HL",
    col: "#F59E0B"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
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
        "ROAS stagnating at 0.9x, below break-even",
        "High-production studio ads generating poor engagement",
        "No authentic social proof to build trust with new audiences",
        "Rising CPMs due to creative fatigue across all ad sets",
        "Conversion rate on landing pages below 1.2%"
      ]
    },
    strategy: [
      {
        phase: "Phase 1: UGC Creative Production (Weeks 1–3)",
        bullets: [
          "Sourced and briefed 12 micro-creators across skin types, age groups, and geographies",
          "Produced 40+ UGC video assets in native formats: unboxings, before/after routines, 'Get Ready With Me' hooks, and honest reviews",
          "Developed 3 distinct hook strategies: problem-agitate-solution, social proof stacking, and curiosity-gap openers"
        ]
      },
      {
        phase: "Phase 2: Performance Campaign Architecture (Weeks 3–5)",
        bullets: [
          "Built a structured Meta Ads testing framework: 6 ad sets, 3 audiences, 5–7 creatives per set",
          "Deployed Cost Cap and Minimum ROAS bidding strategies simultaneously",
          "Integrated Advantage+ Shopping Campaigns alongside manual targeting for A/B comparison"
        ]
      },
      {
        phase: "Phase 3: Optimisation & Scaling (Weeks 6–13)",
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
      quote: "We had tried three agencies before Brand Propel Studio. None of them understood UGC the way they do. Within the first month, we could see the difference: people were actually watching our ads till the end. The results speak for themselves.",
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
        "Zero UGC library: all ads were brand-produced, studio-quality but low on trust",
        "Google Ads account was unstructured with no Shopping feed optimisation",
        "No retargeting infrastructure: losing warm traffic daily",
        "Customer acquisition cost exceeding ₹950 per order"
      ]
    },
    strategy: [
      {
        phase: "UGC Content Engine",
        bullets: [
          "Onboarded 20 fitness creators (athletes, gym-goers, home workout enthusiasts) spanning men and women across age groups",
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
      quote: "The team at Brand Propel Studio didn't just run ads; they built us a machine. The UGC content they created became our best-performing assets across every single channel. We hit our 6-month target in month 5.",
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
      text: "An EdTech platform offering professional upskilling courses approached Brand Propel Studio with a critical problem: their cost per lead (CPL) had risen to ₹420 per lead, nearly double the industry benchmark, and lead quality had deteriorated significantly, with low show-up rates on demo calls.",
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
          "Identified and briefed 15 past students to create authentic transformation stories: 'Where I was vs. where I am now' style content",
          "Produced 8 long-form video testimonials (60–90 sec) and 25 short-form clips (15–30 sec) optimised for Reels and YouTube Shorts",
          "Created 'Day in the Life' UGC showing how students balanced the course with jobs and family, addressing the #1 objection"
        ]
      },
      {
        phase: "Meta Lead Generation Campaigns",
        bullets: [
          "Launched Instant Form campaigns using UGC hooks paired with specific outcome promises",
          "A/B tested 4 lead form lengths: identified the optimal 3-field form that increased completion rates by 44%",
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
      quote: "The quality of leads completely transformed. Our sales team went from struggling to fill demo slots to having a waiting list. The student stories Brand Propel Studio captured were so powerful: we use them everywhere now, not just in ads.",
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
      text: "This case study is about a brand launch, not a turnaround. A home décor and lifestyle D2C brand approached us at pre-launch stage: no existing customer base, no brand awareness, no content library, and a modest initial marketing budget of ₹4 lakhs per month.",
      bullets: [
        "Zero brand awareness: launching into a competitive, aesthetic-driven category",
        "Limited budget requiring extremely high creative efficiency",
        "No existing customers to generate organic social proof",
        "Long consideration cycle: home purchases require inspiration before transaction",
        "Need to establish brand aesthetic while maintaining UGC authenticity"
      ]
    },
    strategy: [
      {
        phase: "Pre-Launch: Building the UGC Asset Bank (Month 1)",
        bullets: [
          "Seeded products with 25 home décor creators, interior styling enthusiasts, and lifestyle micro-influencers",
          "Briefed creators to produce content in 5 formats: room tours, styling tutorials, product unboxings, 'Before & After' transformations, and gifting moments",
          "Produced 80+ UGC assets before running a single paid rupee, establishing a robust creative library"
        ]
      },
      {
        phase: "Launch Campaign: Month 2–3",
        bullets: [
          "Meta Awareness + Traffic campaigns using room transformation and styling UGC as hero creatives",
          "Launched a Catalogue Sales campaign with lifestyle UGC as ad creative: a key differentiator vs. competitor product images",
          "Collaborated with 5 larger home décor influencers (100K–500K) for brand credibility content, amplified via paid dark posts"
        ]
      },
      {
        phase: "Scale & Retention: Month 4–5",
        bullets: [
          "Activated first-buyer retargeting with user-submitted photos (collected via post-purchase email flow)",
          "Launched a customer UGC incentive programme: discount in exchange for styled photos, generating 40+ organic assets monthly",
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
      quote: "We came to Brand Propel Studio with a dream and a tight budget. They made every rupee work. The UGC content they created made our brand look like it had been around for years. We went from zero to a brand people actually talk about in five months.",
      author: "Founder & CEO, Home & Lifestyle Brand (Name Withheld Confidentially)"
    },
    col: "#059669",
    bg: "#ECFDF5"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  { title: "How UGC is Outperforming Studio Content in 2025", date: "Mar 15, 2026", cat: "UGC Strategy", img: "https://picsum.photos/seed/blog1/800/450" },
  { title: "The Rise of AI Influencers: Why Brands are Switching", date: "Mar 10, 2026", cat: "Influencer Marketing", img: "https://picsum.photos/seed/blog2/800/450" },
  { title: "5 Performance Marketing Hacks for D2C Brands", date: "Mar 05, 2026", cat: "Performance", img: "https://picsum.photos/seed/blog3/800/450" },
  { title: "Scaling to 10Cr/mo: A Case Study in Performance Marketing", date: "Feb 28, 2026", cat: "Case Study", img: "https://picsum.photos/seed/blog4/800/450" },
  { title: "Why Problem-Solution Ads are Your Highest Converting Format", date: "Feb 20, 2026", cat: "Ad Strategy", img: "https://picsum.photos/seed/blog5/800/450" },
];

export const PROCESS: ProcessStep[] = [
  { n: "01", t: "Brand Audit", d: "We deep-dive into your current performance, creative assets, and competitor landscape." },
  { n: "02", t: "Creator Matching", d: "We hand-pick creators from our vetted network that perfectly align with your brand persona." },
  { n: "03", t: "Creative Strategy", d: "Developing high-converting hooks and scripts based on proven performance data." },
  { n: "04", t: "Production & QA", d: "End-to-end production management ensuring premium quality and brand safety." },
  { n: "05", t: "Optimisation", d: "Continuous A/B testing of hooks and formats to maximise your ad spend ROI." }
];

export const WHY_US: WhyUsItem[] = [
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

export const CREATORS_LIST: Creator[] = [
  { name: "Ananya S.", niche: "Beauty & Skincare", img: "https://picsum.photos/seed/creator1/400/500" },
  { name: "Rahul M.", niche: "Tech & Gadgets", img: "https://picsum.photos/seed/creator2/400/500" },
  { name: "Priya K.", niche: "Lifestyle & Fashion", img: "https://picsum.photos/seed/creator3/400/500" },
  { name: "Vikram R.", niche: "Fitness & Health", img: "https://picsum.photos/seed/creator4/400/500" }
];

export const PRICING: PricingPlan[] = [
  { plan: "Starter", price: "Rs 49,999", period: "/mo", desc: "For early-stage D2C brands", hot: false, cta: "Join as Influencer", features: ["8 UGC Videos/month", "2 Creator Profiles", "Meta Ad Setup", "Monthly Report", "Account Manager"] },
  { plan: "Growth", price: "Rs 1,19,999", period: "/mo", desc: "The full engine for scaling", hot: true, cta: "Most Popular", features: ["20 UGC Videos/month", "6 Creator Profiles", "Meta + Google Campaigns", "1 Influencer Campaign/mo", "Creative Testing Lab", "Weekly Dashboard", "Performance Optimisation"] },
  { plan: "Scale", price: "Custom", period: "", desc: "Enterprise & agency partnerships", hot: false, cta: "Talk to Us", features: ["Unlimited UGC Volume", "Dedicated Creator Pod", "Full-Funnel Strategy", "Celebrity Influencers", "White-label Option", "24/7 Priority Support"] },
];

export const FEATURED_CREATORS: FeaturedCreator[] = [
  { name: "Sneha R.", niche: "Beauty", handle: "@snehacreates", flw: "240K", bg: "#FFE4EC", tc: "#C42D5A" },
  { name: "Arjun M.", niche: "Fitness", handle: "@fitwitharjun", flw: "180K", bg: "#E4F5FF", tc: "#0A72B8" },
  { name: "Kavya S.", niche: "Food", handle: "@kavyaeats", flw: "310K", bg: "#F3F7FF", tc: "#1E429F" },
  { name: "Rohit D.", niche: "Tech", handle: "@techwithrohit", flw: "420K", bg: "#E8F5E9", tc: "#1B7A3A" },
  { name: "Priya K.", niche: "Fashion", handle: "@priyastyle", flw: "155K", bg: "#F3E8FF", tc: "#7C3AED" },
  { name: "Dev P.", niche: "Home", handle: "@devdecors", flw: "92K", bg: "#E0F7FA", tc: "#00838F" },
];

export const FAQS: FAQ[] = [
  { q: "How quickly can you start producing UGC?", a: "We begin creator casting within 48 hours of onboarding. First deliverables are ready within 7-10 business days." },
  { q: "Do you only work with D2C brands?", a: "D2C and e-commerce are our sweet spot but we work with any consumer brand selling online: apps, FMCG, and service businesses too." },
  { q: "How do you vet your creator network?", a: "Every creator is manually reviewed across 30+ parameters including audience quality, engagement rate and brand safety record." },
  { q: "Can UGC be used for paid ads?", a: "Yes. All UGC includes usage rights for paid advertising on Meta, Google and YouTube. Ad-usage rights are in every creator agreement." },
  { q: "What is the minimum ad spend budget?", a: "We recommend minimum Rs 50,000/month for Meta campaigns to generate enough data for meaningful optimisation." },
  { q: "Do you offer white-label services?", a: "Yes. Our Scale plan includes white-label partnership options for other Indian digital agencies." },
];
