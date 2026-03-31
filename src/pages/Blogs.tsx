import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useInView } from "../lib/hooks";
import { Label } from "../components/ui/Label";
// import { BLOG_POSTS, CASE_STUDIES } from "../constants";
import { CASE_STUDIES } from "../constants";
import { useNavigate } from "react-router-dom";
import { BLOG_POSTS } from "../BlogPosts";

export function BlogsPage() {
  const [ref, inView] = useInView(0.05);
  const navigate = useNavigate();

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
                  onClick={() => navigate(post.path)}
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
                    onClick={() => navigate("/case-studies")}
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
