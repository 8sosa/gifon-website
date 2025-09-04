// components/SubscribeForm.tsx
"use client";
import { useState } from "react";

export default function SubscribeForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // wire your API here
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <form onSubmit={submit} className={`flex ${compact ? 'gap-2' : 'flex-col gap-3'}`}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="px-4 py-3 rounded-lg border border-white/10 bg-white/90 text-slate-800 w-full"
      />
      <button className="px-4 py-3 rounded-lg bg-indigo-600 text-white font-semibold" type="submit">
        {sent ? "Subscribed ✓" : "Subscribe"}
      </button>
    </form>
  );
}
