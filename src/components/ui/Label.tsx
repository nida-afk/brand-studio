import React from "react";

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-brand-light rounded-full px-4 py-1.5 mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-brand" />
      <span className="text-[11px] font-bold text-brand tracking-widest uppercase">{children}</span>
    </div>
  );
}
