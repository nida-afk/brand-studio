import React from "react";

export function Logo({ onClick, variant = 'light' }: { onClick?: () => void, variant?: 'light' | 'dark' }) {
  const isDark = variant === 'dark';
  return (
    <div className="flex items-center gap-3 cursor-pointer group" onClick={onClick}>
      <div className="relative w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center shrink-0 bg-white border border-brand/10 shadow-sm group-hover:scale-105 transition-transform">
        <div className="absolute inset-0 bg-brand flex items-center justify-center text-white font-black text-xl">B</div>
        <img 
          src="https://scontent.fpnq6-1.fna.fbcdn.net/v/t39.30808-6/590807351_122098733535148525_6374173426190407819_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=YWd0pszrpOIQ7kNvwFvw5g5&_nc_oc=Adl6cy4OOqlK60YqoFVzNr7Ib5z62m_4OV-ohCZjo-EeACyz7b6KjY3u4AFadLTkrbe_puQ5YviyDMBYx1jPw5hR&_nc_zt=23&_nc_ht=scontent.fpnq6-1.fna&_nc_gid=Y4Lk2C39or5wJ64llBK4oQ&_nc_ss=8&oh=00_AfyJVvlO-YNMyODvVzylTW41Hmsem4op57x0j5y_dQQVog&oe=69C050D3" 
          alt="Brand Propel Studio" 
          className="relative z-10 w-full h-full object-cover"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-black tracking-tighter ${isDark ? "text-white" : "text-slate-900"} group-hover:text-brand transition-colors`} style={{ textDecorationLine: 'none' }}>Brand Propel Studio</span>
        <span className={`text-[10px] font-bold ${isDark ? "text-slate-400" : "text-slate-500"} uppercase tracking-[0.2em]`}>UGC & Performance Marketing</span>
      </div>
    </div>
  );
}
