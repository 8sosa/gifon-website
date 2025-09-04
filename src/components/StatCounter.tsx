"use client";
import { useState, useEffect } from "react";

export default function StatCounter({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const stepTime = Math.abs(Math.floor(duration / Math.max(value, 1)));

    const timer = setInterval(() => {
      start += Math.ceil(value / 30);
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime || 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div>
      <div className="text-3xl font-extrabold">{count.toLocaleString()}</div>
      <div className="text-sm text-slate-600 mt-1">{label}</div>
    </div>
  );
}
