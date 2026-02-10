import HeroSection from '@/components/HeroSection';
import { ShieldCheck, Rocket, TrendingUp, Lock, HardHat } from 'lucide-react';

export default function IPSFPage() {
  return (
    <main className="bg-white">
      <HeroSection 
        title="Industry and Private Sector Forum"
        description="Driving innovation and investment through strategic geospatial partnerships."
        backgroundMedia={["/media/industry-bg.jpg"]}
      />

      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Platform Objectives</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              GIFON recognizes the critical role of industry in driving innovation and sustainable applications of GEOINT for national security.
            </p>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-xl h-fit"><ShieldCheck className="text-blue-600" /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Facilitate Collaboration</h4>
                  <p className="text-sm text-gray-600">Strengthening partnerships between technology providers and service companies to co-create solutions.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-xl h-fit"><Rocket className="text-blue-600" /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Promote Innovation</h4>
                  <p className="text-sm text-gray-600">Adopting emerging technologies like AI, satellite systems, and drones to compete globally.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-blue-100 p-3 rounded-xl h-fit"><TrendingUp className="text-blue-600" /></div>
                <div>
                  <h4 className="font-bold text-gray-900">National Economic Growth</h4>
                  <p className="text-sm text-gray-600">Driving productivity across 13 critical infrastructure sectors including energy, transport, and finance.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Policy Commitment</h3>
            <p className="text-gray-700 italic mb-6">
              "GIFON commits to institutionalizing the Industry and Private Sector Forum as a dynamic mechanism where the private sector is a key driver of Nigeria’s geospatial future."
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Lock size={18} className="text-green-600" />
                <span>Ethical and Responsible Data Practice</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <HardHat size={18} className="text-green-600" />
                <span>Support for Security Architecture & Resilience</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}