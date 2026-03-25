import React from "react";
import { CLIENTS } from "../../constants";

export function Ticker() {
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
