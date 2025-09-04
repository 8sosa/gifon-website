"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'


export default function InfrastructureHero({ title, description, backgroundImages = [] }: { title: string; description: string; backgroundImages?: string[] }) {
return (
<section className="relative h-[56vh] w-full overflow-hidden">
<div className="absolute inset-0">
<Image src={backgroundImages[0] || '/bg/a.JPG'} alt={title} fill className="object-cover brightness-60" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
</div>


<motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="absolute inset-0 flex items-center justify-center">
<div className="text-center px-6">
<h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{title}</h1>
<p className="mt-3 text-lg text-slate-200 max-w-2xl mx-auto">{description}</p>
</div>
</motion.div>


<div className="absolute left-4 top-8 flex gap-2">
{/* small decorative tech lines */}
<div className="w-24 h-px bg-gradient-to-r from-cyan-300/80 to-transparent opacity-70 animate-pulse" />
</div>
</section>
)
}