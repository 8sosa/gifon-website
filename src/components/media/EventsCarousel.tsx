"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FlatEvent } from "@/types/types";

export default function EventsCarousel({ events = [] }: { events: FlatEvent[] }) {
  return (
    <div className="space-y-3">
      <div className="flex gap-3 overflow-x-auto pb-2">
        {events.slice(0, 6).map((ev) => (
          <motion.article
            key={ev.id}
            whileHover={{ scale: 1.03 }}
            className="min-w-[220px] p-3 rounded-xl bg-white/90 border border-white/10 shadow"
          >
            <div className="h-28 rounded-md overflow-hidden mb-2 bg-slate-100">
              <Image
                src={ev.image || "/ph.svg"}
                alt={ev.title}
                width={300}
                height={180}
                className="w-full h-full object-cover"
              />
            </div>
            <h5 className="font-semibold text-sm">{ev.title}</h5>
            <p className="text-xs text-slate-500">
              {new Date(ev.startDate).toLocaleDateString()}
            </p>
            <div className="mt-3">
              <Link href={`/events/${ev.id}`} className="text-indigo-600 text-sm font-medium">
                Details →
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
