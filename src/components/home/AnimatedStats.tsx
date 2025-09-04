// components/home/AnimatedStats.tsx
"use client";
import { useEffect, useState } from "react";

function Counter({ to, label }: { to: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1000;
    const increment = Math.max(1, Math.floor(to / (duration / 20)));
    const t = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(t);
      } else {
        setCount(current);
      }
    }, 20);
    return () => clearInterval(t);
  }, [to]);

  return (
    <div className="p-4 bg-slate-50 rounded-lg text-center w-full">
      <div className="text-2xl font-bold">{count.toLocaleString()}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  );
}

export default function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      <Counter to={20} label="Years combined expertise" />
      <Counter to={100} label="Active projects" />
    </div>
  );
}
