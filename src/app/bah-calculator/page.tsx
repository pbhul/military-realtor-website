'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalculatorIcon, HomeIcon, MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';

// BAH Rates for 2025 (Northern Virginia area)
const bahRates2025 = {
  'Fort Belvoir': {
    'E-1': { withDep: 2310, withoutDep: 1956 },
    'E-2': { withDep: 2310, withoutDep: 1956 },
    'E-3': { withDep: 2310, withoutDep: 1956 },
    'E-4': { withDep: 2310, withoutDep: 1956 },
    'E-5': { withDep: 2643, withoutDep: 2226 },
    'E-6': { withDep: 2805, withoutDep: 2373 },
    'E-7': { withDep: 3216, withoutDep: 2721 },
    'E-8': { withDep: 3486, withoutDep: 2955 },
    'E-9': { withDep: 3840, withoutDep: 3255 },
    'W-1': { withDep: 2805, withoutDep: 2373 },
    'W-2': { withDep: 3216, withoutDep: 2721 },
    'W-3': { withDep: 3486, withoutDep: 2955 },
    'W-4': { withDep: 3840, withoutDep: 3255 },
    'W-5': { withDep: 4281, withoutDep: 3624 },
    'O-1': { withDep: 2805, withoutDep: 2373 },
    'O-2': { withDep: 3216, withoutDep: 2721 },
    'O-3': { withDep: 3840, withoutDep: 3255 },
    'O-4': { withDep: 4281, withoutDep: 3624 },
    'O-5': { withDep: 4719, withoutDep: 3996 },
    'O-6': { withDep: 5145, withoutDep: 4356 }
  },
  'Pentagon': {
    'E-1': { withDep: 2457, withoutDep: 2085 },
    'E-2': { withDep: 2457, withoutDep: 2085 },
    'E-3': { withDep: 2457, withoutDep: 2085 },
    'E-4': { withDep: 2457, withoutDep: 2085 },
    'E-5': { withDep: 2814, withoutDep: 2373 },
    'E-6': { withDep: 2988, withoutDep: 2526 },
    'E-7': { withDep: 3426, withoutDep: 2898 },
    'E-8': { withDep: 3714, withoutDep: 3147 },
    'E-9': { withDep: 4089, withoutDep: 3465 },
    'W-1': { withDep: 2988, withoutDep: 2526 },
    'W-2': { withDep: 3426, withoutDep: 2898 },
    'W-3': { withDep: 3714, withoutDep: 3147 },
    'W-4': { withDep: 4089, withoutDep: 3465 },
    'W-5': { withDep: 4560, withoutDep: 3864 },
    'O-1': { withDep: 2988, withoutDep: 2526 },
    'O-2': { withDep: 3426, withoutDep: 2898 },
    'O-3': { withDep: 4089, withoutDep: 3465 },
    'O-4': { withDep: 4560, withoutDep: 3864 },
    'O-5': { withDep: 5028, withoutDep: 4257 },
    'O-6': { withDep: 5478, withoutDep: 4638 }
  },
  'Quantico': {
    'E-1': { withDep: 2310, withoutDep: 1956 },
    'E-2': { withDep: 2310, withoutDep: 1956 },
    'E-3': { withDep: 2310, withoutDep: 1956 },
    'E-4': { withDep: 2310, withoutDep: 1956 },
    'E-5': { withDep: 2643, withoutDep: 2226 },
    'E-6': { withDep: 2805, withoutDep: 2373 },
    'E-7': { withDep: 3216, withoutDep: 2721 },
    'E-8': { withDep: 3486, withoutDep: 2955 },
    'E-9': { withDep: 3840, withoutDep: 3255 },
    'W-1': { withDep: 2805, withoutDep: 2373 },
    'W-2': { withDep: 3216, withoutDep: 2721 },
    'W-3': { withDep: 3486, withoutDep: 2955 },
    'W-4': { withDep: 3840, withoutDep: 3255 },
    'W-5': { withDep: 4281, withoutDep: 3624 },
    'O-1': { withDep: 2805, withoutDep: 2373 },
    'O-2': { withDep: 3216, withoutDep: 2721 },
    'O-3': { withDep: 3840, withoutDep: 3255 },
    'O-4': { withDep: 4281, withoutDep: 3624 },
    'O-5': { withDep: 4719, withoutDep: 3996 },
    'O-6': { withDep: 5145, withoutDep: 4356 }
  }
};

export default function BAHCalculatorPage() {
  const [selectedBase, setSelectedBase] = useState('Fort Belvoir');
  const [selectedRank, setSelectedRank] = useState('E-5');
  const [hasDependents, setHasDependents] = useState(true);
  const [bahAmount, setBahAmount] = useState(0);
  const [affordableRange, setAffordableRange] = useState({ min: 0, max: 0 });

  useEffect(() => {
    calculateBAH();
  }, [selectedBase, selectedRank, hasDependents]);

  const calculateBAH = () => {
    const rates = bahRates2025[selectedBase as keyof typeof bahRates2025];
    const rankData = rates[selectedRank as keyof typeof rates];
    const amount = hasDependents ? rankData.withDep : rankData.withoutDep;
    
    setBahAmount(amount);
    
    // Calculate affordable housing range (typically 25-30% of BAH for housing costs)
    const minAffordable = Math.round(amount * 0.7); // 70% of BAH
    const maxAffordable = Math.round(amount * 1.1); // 110% of BAH (some go slightly over)
    
    setAffordableRange({ min: minAffordable, max: maxAffordable });
  };

  const ranks = [
    { value: 'E-1', label: 'E-1 - Private/Seaman Recruit' },
    { value: 'E-2', label: 'E-2 - Private/Seaman Apprentice' },
    { value: 'E-3', label: 'E-3 - Private First Class/Seaman' },
    { value: 'E-4', label: 'E-4 - Corporal/Petty Officer 3rd Class' },
    { value: 'E-5', label: 'E-5 - Sergeant/Petty Officer 2nd Class' },
    { value: 'E-6', label: 'E-6 - Staff Sergeant/Petty Officer 1st Class' },
    { value: 'E-7', label: 'E-7 - Sergeant First Class/Chief Petty Officer' },
    { value: 'E-8', label: 'E-8 - Master Sergeant/Senior Chief Petty Officer' },
    { value: 'E-9', label: 'E-9 - Sergeant Major/Master Chief Petty Officer' },
    { value: 'W-1', label: 'W-1 - Warrant Officer 1' },
    { value: 'W-2', label: 'W-2 - Chief Warrant Officer 2' },
    { value: 'W-3', label: 'W-3 - Chief Warrant Officer 3' },
    { value: 'W-4', label: 'W-4 - Chief Warrant Officer 4' },
    { value: 'W-5', label: 'W-5 - Chief Warrant Officer 5' },
    { value: 'O-1', label: 'O-1 - Second Lieutenant/Ensign' },
    { value: 'O-2', label: 'O-2 - First Lieutenant/Lieutenant Junior Grade' },
    { value: 'O-3', label: 'O-3 - Captain/Lieutenant' },
    { value: 'O-4', label: 'O-4 - Major/Lieutenant Commander' },
    { value: 'O-5', label: 'O-5 - Lieutenant Colonel/Commander' },
    { value: 'O-6', label: 'O-6 - Colonel/Captain' }
  ];

  const bases = ['Fort Belvoir', 'Pentagon', 'Quantico'];

  return (
    <>
      <Header />
      
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 mb-8">
            <CalculatorIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            🏠 BAH Calculator 2025
          </h1>
          <p className="text-xl leading-8 text-blue-100">
            Calculate your Basic Allowance for Housing for Northern Virginia military bases
          </p>
        </div>
      </div>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Calculator Form */}
            <div className="bg-white rounded-lg shadow-xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <CalculatorIcon className="h-6 w-6 text-blue-600" />
                BAH Calculator
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    🏛️ Select Your Base
                  </label>
                  <select
                    value={selectedBase}
                    onChange={(e) => setSelectedBase(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {bases.map((base) => (
                      <option key={base} value={base}>{base}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    🎖️ Select Your Rank
                  </label>
                  <select
                    value={selectedRank}
                    onChange={(e) => setSelectedRank(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {ranks.map((rank) => (
                      <option key={rank.value} value={rank.value}>{rank.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    👨‍👩‍👧‍👦 Dependents Status
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setHasDependents(true)}
                      className={`px-4 py-3 rounded-lg border font-medium transition-colors ${
                        hasDependents
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                      }`}
                    >
                      With Dependents
                    </button>
                    <button
                      onClick={() => setHasDependents(false)}
                      className={`px-4 py-3 rounded-lg border font-medium transition-colors ${
                        !hasDependents
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                      }`}
                    >
                      Without Dependents
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                  <HomeIcon className="h-6 w-6" />
                  Your BAH Rate
                </h3>
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-900 mb-2">
                    ${bahAmount.toLocaleString()}
                  </div>
                  <div className="text-blue-700">per month</div>
                  <div className="text-sm text-blue-600 mt-2">
                    {selectedRank} at {selectedBase}
                    <br />
                    {hasDependents ? 'With Dependents' : 'Without Dependents'}
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-8 border border-green-200">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-3">
                  <MapPinIcon className="h-6 w-6" />
                  Affordable Housing Range
                </h3>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-900 mb-2">
                    ${affordableRange.min.toLocaleString()} - ${affordableRange.max.toLocaleString()}
                  </div>
                  <div className="text-green-700 text-sm">
                    Recommended monthly housing budget
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                <h4 className="font-semibold text-yellow-800 mb-3">💡 BAH Optimization Tips:</h4>
                <ul className="space-y-2 text-yellow-700 text-sm">
                  <li>• You can spend less than BAH and pocket the difference</li>
                  <li>• BAH is not taxable income</li>
                  <li>• Rates change annually, usually in January</li>
                  <li>• Geographic location significantly affects rates</li>
                  <li>• Consider commute costs in your housing decision</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-blue-900 text-white rounded-lg p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">🏠 Ready to Find Your Perfect Military Home?</h3>
                <p className="text-blue-100 mb-6">
                  Let our MRP Certified military real estate specialist help you find homes within your BAH budget 
                  in the best locations for your base commute.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="tel:+1-703-477-2606"
                    className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                  >
                    Call (703) 477-2606
                  </a>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="font-semibold mb-4">🎖️ Military Real Estate Expertise:</h4>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>• BAH-optimized home searches</li>
                  <li>• Base proximity analysis</li>
                  <li>• VA loan guidance</li>
                  <li>• PCS timeline coordination</li>
                  <li>• Military community insights</li>
                  <li>• Deployment-friendly services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}