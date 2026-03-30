import React from "react";
import { Instagram, Youtube, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "../components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 px-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <Link to="/">
            <Logo variant="dark" />
          </Link>
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
          { t: "Services", ls: [{ l: "Performance Marketing", p: "/service/performance-marketing" }, { l: "Influencer & Creator Marketing", p: "/service/influencer-creator" }, { l: "Creative Studio", p: "/service/creative-studio" }, { l: "Web & App Development", p: "/service/web-funnel" }] },
          { t: "Company", ls: [{ l: "About Us", p: "/about" }, { l: "Case Studies", p: "/case-studies" }, { l: "Blogs", p: "/blogs" }, { l: "Contact", p: "/contact" }] },
          { t: "Contact", ls: [{ l: "hello@brandpropelstudio.in", p: "" }, { l: "+91 98765 43210", p: "" }, { l: "Pune, India", p: "" }] },
        ].map((col, i) => (
          <div key={i}>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-6">{col.t}</div>
            <div className="flex flex-col gap-3">
              {col.ls.map(l => (
                l.p ? (
                  <Link 
                    key={l.l} 
                    to={l.p}
                    className="text-sm text-slate-400 text-left transition-colors hover:text-white"
                  >
                    {l.l}
                  </Link>
                ) : (
                  <span key={l.l} className="text-sm text-slate-400 text-left cursor-default">
                    {l.l}
                  </span>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs text-slate-600">© 2025 Brand Propel Studio. All rights reserved. Made with love in India</span>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="text-xs text-slate-600 hover:text-slate-400">Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-xs text-slate-600 hover:text-slate-400">Terms of Service</Link>
          <Link to="/refund-policy" className="text-xs text-slate-600 hover:text-slate-400">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}
