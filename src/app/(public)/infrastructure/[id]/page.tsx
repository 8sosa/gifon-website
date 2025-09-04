

import { notFound } from 'next/navigation'
import sections from '../infrastructure'
import InfrastructureHero from '@/components/InfrastructureHero'
import SectionDetail from '@/components/SectionDetail'


interface Props {
params: Promise<{ id: string }>
}


export default async function SectionPage({ params }: Props) {
const { id } = await params
const section = sections[id as keyof typeof sections]


if (!section) return notFound()


return (
<main className="w-full antialiased bg-gradient-to-b from-slate-900/5 to-white text-slate-900">
<InfrastructureHero title={section.title} description={section.summary} backgroundImages={[section.image]} />
<SectionDetail section={section} />
</main>
)
}