import { ReactNode } from "react";

export interface Client {
  name: string;
  logo: string;
  url: string;
}

export interface ServiceResult {
  n: string;
  l: string;
}

export interface Service {
  id: string;
  icon: ReactNode;
  title: string;
  short: string;
  color: string;
  bg: string;
  tagline: string;
  features: string[];
  results: ServiceResult[];
}

export interface Stat {
  n: string;
  l: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  col: string;
}

export interface CaseStudyResult {
  label: string;
  value: string;
  sub: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  duration: string;
  services: string;
  market: string;
  challenge: {
    text: string;
    bullets: string[];
  };
  strategy: {
    phase: string;
    bullets: string[];
  }[];
  results: CaseStudyResult[];
  testimonial: {
    quote: string;
    author: string;
  };
  col: string;
  bg: string;
}

export interface BlogPost {
  title: string;
  date: string;
  cat: string;
  img: string;
}

export interface ProcessStep {
  n: string;
  t: string;
  d: string;
}

export interface WhyUsItem {
  title: string;
  desc: string;
  icon: ReactNode;
}

export interface Creator {
  name: string;
  niche: string;
  img: string;
}

export interface FeaturedCreator {
  name: string;
  niche: string;
  handle: string;
  flw: string;
  bg: string;
  tc: string;
}

export interface PricingPlan {
  plan: string;
  price: string;
  period: string;
  desc: string;
  hot: boolean;
  cta: string;
  features: string[];
}

export interface FAQ {
  q: string;
  a: string;
}
