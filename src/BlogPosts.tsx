import React from "react";
import { ArrowRight } from "lucide-react";

export interface BlogPost {
  title: string;
  path: string;
  date: string;
  cat: string;
  img: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "How UGC is Outperforming Studio Content in 2025",
    path: "/blogs/ugc-vs-studio-content-2025",
    date: "Mar 15, 2026",
    cat: "UGC Strategy",
    img: "https://picsum.photos/seed/blog1/800/450",
  },
  {
    title: "The Rise of AI Influencers: Why Brands are Switching",
    path: "/blogs/rise-of-ai-influencers",
    date: "Mar 10, 2026",
    cat: "Influencer Marketing",
    img: "https://picsum.photos/seed/blog2/800/450",
  },
  {
    title: "5 Performance Marketing Hacks for D2C Brands",
    path: "/blogs/d2c-performance-hacks-d2c",
    date: "Mar 05, 2026",
    cat: "Performance",
    img: "https://picsum.photos/seed/blog3/800/450",
  },
  {
    title: "Scaling to 10Cr/mo: A Case Study in Performance Marketing",
    path: "/blogs/scaling-10cr-case-study",
    date: "Feb 28, 2026",
    cat: "Case Study",
    img: "https://picsum.photos/seed/blog4/800/450",
    
  },
  {
    title: "Why Problem-Solution Ads are Your Highest Converting Format",
    path: "/blogs/problem-solution-ads-conversion",
    date: "Feb 20, 2026",
    cat: "Ad Strategy",
    img: "https://picsum.photos/seed/blog5/800/450",
  },
];