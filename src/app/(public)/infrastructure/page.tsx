// import Image from 'next/image'
// import Link from 'next/link'
import sections from './infrastructure'
import SectionCard from '@/components/SectionCard'
import InfrastructureHero from '@/components/InfrastructureHero'


export default function InfrastructureIndexPage() {
return (
<main className="w-full antialiased bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-800">
<InfrastructureHero
title="Critical Infrastructure Support"
description="How GEOINT strengthens vital sectors — click any card to learn more"
backgroundImages={["/bg/e.jpeg","/bg/a.JPG","/bg/b.JPG","/bg/c.JPG","/bg/d.JPG"]}
/>


<section className="max-w-6xl mx-auto py-12 px-6">
<h2 className="text-3xl font-extrabold mb-6 text-center">Infrastructure Domains</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{Object.values(sections).map((sec) => (
<SectionCard key={sec.id} section={sec} />
))}
</div>
</section>


<section className="max-w-5xl mx-auto py-12 px-6">
<h3 className="text-2xl font-semibold mb-4">Why GEOINT matters</h3>
<p className="text-slate-700 leading-relaxed">A short engaging paragraph linking these domains to resilience, response and policy. This block can include animated counters or small data viz components later.</p>
</section>


</main>
)
}