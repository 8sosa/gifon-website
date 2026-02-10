import HeroSection from '@/components/HeroSection';
import { Scale, Fingerprint, Gavel, ShieldAlert } from 'lucide-react';

export default function PGEPage() {
  const mandates = [
    { title: "Policy Development", desc: "Drafting national policies for responsible geospatial intelligence use[cite: 27].", icon: Gavel },
    { title: "Ethics Oversight", desc: "Preventing misuse and ensuring compliance with human rights and anti-corruption standards[cite: 29].", icon: Scale },
    { title: "Data Privacy", desc: "Ensuring data handling respects confidentiality and national interests[cite: 34].", icon: Fingerprint },
    { title: "Regulatory Advisory", desc: "Advising stakeholders on laws and international conventions[cite: 30].", icon: ShieldAlert }
  ];

  return (
    <main className="bg-gray-50">
      <HeroSection 
        title="Policy, Governance & Ethics"
        description="The institutional mechanism for accountability, integrity, and transparency within GIFON[cite: 23, 24]."
        backgroundMedia={["/media/governance-bg.jpg"]}
      />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Mandate</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Establishing the governance structures necessary to align innovation with national security and global standards[cite: 25, 28].
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mandates.map((m, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                <m.icon className="text-emerald-600" size={24} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{m.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-emerald-900 rounded-3xl text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Focus & Membership</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h5 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4">Why It Matters</h5>
              <p className="text-emerald-50 leading-relaxed">
                Strong governance is essential for sustainability. Through the PGE-WG, innovation is balanced with responsibility[cite: 46, 47].
              </p>
            </div>
            <div>
              <h5 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4">Expert Composition</h5>
              <p className="text-sm text-emerald-50">Members are drawn from government policy institutions, security agencies, academia, and industry leaders[cite: 39, 40, 41, 42, 43].</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}