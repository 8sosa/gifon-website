"use client";
import StatCounter from "./StatCounter";

export default function StatGrid() {
  const stats = [
    { label: "Alumni", value: 1240 },
    { label: "Projects", value: 312 },
    { label: "Scholarships", value: 64 },
    { label: "Partners", value: 48 },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <div key={i} className="p-6 rounded-2xl bg-white/60 border border-white/10 shadow-lg text-center">
          <StatCounter value={s.value} label={s.label} />
        </div>
      ))}
    </div>
  );
}
