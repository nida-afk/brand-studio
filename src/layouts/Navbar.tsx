import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../components/ui/Logo";
import { SVCS } from "../constants";

export function Navbar({ scrolled }: { scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const location = useLocation();
  const page = location.pathname === "/" ? "home" : location.pathname.substring(1);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[500] h-16 px-[5%] flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm" : "bg-transparent"}`}>
      <Link to="/">
        <Logo variant="light" />
      </Link>
      
      <div className="hidden md:flex gap-8 items-center">
        <Link to="/" className={`text-sm font-semibold transition-colors ${page === "home" ? "text-brand" : "text-slate-600 hover:text-brand"}`}>Home</Link>
        <div className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
          <button className={`text-sm font-semibold flex items-center gap-1 transition-colors ${page.startsWith("svc") ? "text-brand" : "text-slate-600 hover:text-brand"}`}>
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
                              <Link 
                                key={s.id} 
                                to={`/service/${s.id}`}
                                onClick={() => setDrop(false)}
                                className="w-full text-left px-3 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-brand flex items-center gap-3 rounded-lg transition-colors group"
                              >
                                <span className="text-brand opacity-80 group-hover:scale-110 transition-transform">{s.icon}</span>
                                {s.title}
                              </Link>
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
        <Link to="/case-studies" className={`text-sm font-semibold transition-colors ${page === "case-studies" ? "text-brand" : "text-slate-600 hover:text-brand"}`}>Case Studies</Link>
        <Link to="/contact" className={`text-sm font-semibold transition-colors ${page === "contact" ? "text-brand" : "text-slate-600 hover:text-brand"}`}>Contact</Link>
        <Link to="/blogs" className={`text-sm font-semibold transition-colors ${page === "blogs" ? "text-brand" : "text-slate-600 hover:text-brand"}`}>Blogs</Link>
      </div>

      <div className="flex gap-3 items-center">
        <Link 
          to="/contact"
          className="hidden lg:flex px-5 py-2 rounded-lg bg-brand text-white text-xs font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand/10"
        >
          Book Free Audit
        </Link>
        <Link 
          to="/influencer-join"
          className="hidden sm:flex px-5 py-2 rounded-lg border-2 border-brand text-brand text-xs font-bold hover:bg-brand-light transition-all"
        >
          Join as an Influencer
        </Link>
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
              <Link to="/" onClick={() => setIsOpen(false)}>
                <Logo />
              </Link>
              <button onClick={() => setIsOpen(false)}><X className="text-slate-900" /></button>
            </div>
            <div className="flex flex-col gap-4 mt-8 overflow-y-auto">
              {["Home", "Case Studies", "Blogs", "Contact"].map(item => (
                <Link 
                  key={item} 
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-2xl font-bold text-slate-900 text-left"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Link 
                  to="/contact"
                  className="w-full py-4 rounded-xl bg-brand text-white font-bold text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book Free Audit
                </Link>
                <Link 
                  to="/influencer-join"
                  className="w-full py-4 rounded-xl border-2 border-brand text-brand font-bold text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Join as an Influencer
                </Link>
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
                        <Link 
                          key={s.id} 
                          to={`/service/${s.id}`}
                          className="text-lg font-bold text-slate-600 text-left flex items-center gap-3"
                          onClick={() => setIsOpen(false)}
                        >
                          <span className="text-brand scale-90">{s.icon}</span>
                          {s.title}
                        </Link>
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
