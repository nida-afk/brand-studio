import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/sections/Hero";
import { Ticker } from "../components/ui/Ticker";
import { ClientLogos } from "../components/sections/ClientLogos";
import { Services } from "../components/sections/Services";
import { CaseStudies } from "../components/sections/CaseStudies";
import { Process } from "../components/sections/Process";
import { Testimonials } from "../components/sections/Testimonials";
import { FAQ, CTABand } from "../components/sections/FAQ";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).target) {
      const target = (location.state as any).target;
      const element = document.getElementById(target);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Ticker />
      <ClientLogos />
      <Services />
      <CaseStudies />
      <Process />
      <Testimonials />
      <FAQ />
      <CTABand />
    </>
  );
}
