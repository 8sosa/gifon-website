// components/media/DownloadsGrid.tsx
"use client";
export default function DownloadsGrid() {
  const items = [
    { title: "Policy Brief - GEOINT & Infrastructure", size: "PDF • 1.2MB", href: "#" },
    { title: "Conference Proceedings 2024", size: "PDF • 4.5MB", href: "#" },
    { title: "Training Manual - Remote Sensing", size: "PDF • 2.6MB", href: "#" },
  ];

  return (
    <div className="grid gap-4">
      {items.map((it, i) => (
        <div key={i} className="p-4 rounded-xl bg-white/60 border border-white/10 shadow flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-500">{it.size}</div>
            <div className="font-semibold">{it.title}</div>
          </div>
          <a href={it.href} className="inline-block px-4 py-2 rounded-full bg-indigo-600 text-white">Download</a>
        </div>
      ))}
    </div>
  );
}
