import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
