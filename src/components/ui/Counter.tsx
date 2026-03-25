import React, { useState, useEffect } from "react";
import { useInView } from "../../lib/hooks";

export function Counter({ target }: { target: string }) {
  const num = parseFloat(target.replace(/[^\d.]/g, ""));
  const [val, setVal] = useState(0);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = num / steps;
    const interval = setInterval(() => {
      start += increment;
      if (start >= num) {
        setVal(num);
        clearInterval(interval);
      } else {
        setVal(Math.floor(start));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, num]);

  const prefix = target.includes("₹") ? "₹" : target.includes("Rs") ? "Rs " : "";
  const suffix = target.includes("Cr") ? "Cr+" : target.includes("B+") ? "B+" : target.includes("x") ? "x" : target.includes("+") ? "+" : "";

  return <span ref={ref as any}>{prefix}{val}{suffix}</span>;
}
