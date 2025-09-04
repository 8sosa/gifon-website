// components/media/FloatingSectionNav.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { label: "News", anchor: "news" },
  { label: "Press", anchor: "press" },
  { label: "Archive", anchor: "archive" },
  { label: "Resources", anchor: "resources" },
  { label: "Events", anchor: "events" },
  { label: "Podcasts", anchor: "podcasts" },
  { label: "Gallery", anchor: "gallery" },
  { label: "Downloads", anchor: "downloads" },
];

export default function FloatingSectionNav() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 1200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed right-6 top-24 z-40 transition-opacity ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-white/60 backdrop-blur rounded-xl p-2 shadow-lg border border-white/10">
        {nav.map((n) => (
          <Link key={n.anchor} href={`#${n.anchor}`} className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded">
            {n.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
