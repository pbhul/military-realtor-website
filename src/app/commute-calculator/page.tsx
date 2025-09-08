'use client';

import { useState, useEffect, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ClockIcon, MapPinIcon, TruckIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

// Commute time data for Northern Virginia locations to major military bases
const commuteData = {
  'Fort Belvoir': {
    'Alexandria': { driving: 25, metro: null, distance: 18 },
    'Arlington': { driving: 35, metro: null, distance: 25 },
    'Fairfax': { driving: 30, metro: null, distance: 22 },
    'Springfield': { driving: 20, metro: null, distance: 15 },
    'Woodbridge': { driving: 35, metro: null, distance: 28 },
    'Stafford': { driving: 45, metro: null, distance: 35 },
    'Fredericksburg': { driving: 55, metro: null, distance: 45 },
    'Lorton': { driving: 15, metro: null, distance: 12 },
    'Mount Vernon': { driving: 20, metro: null, distance: 16 },
    'Burke': { driving: 25, metro: null, distance: 20 },
    'Annandale': { driving: 30, metro: null, distance: 23 },
    'Falls Church': { driving: 40, metro: null, distance: 28 }
  },
  'Pentagon': {
    'Alexandria': { driving: 20, metro: 35, distance: 12 },
    'Arlington': { driving: 15, metro: 25, distance: 8 },
    'Fairfax': { driving: 35, metro: 45, distance: 25 },
    'Springfield': { driving: 30, metro: 40, distance: 22 },
    'Woodbridge': { driving: 45, metro: 60, distance: 35 },
    'Stafford': { driving: 55, metro: 75, distance: 42 },
    'Fredericksburg': { driving: 65, metro: 85, distance: 50 },
    'Lorton': { driving: 35, metro: 50, distance: 28 },
    'Mount Vernon': { driving: 25, metro: 40, distance: 18 },
    'Burke': { driving: 30, metro: 45, distance: 23 },
    'Annandale': { driving: 25, metro: 35, distance: 18 },
    'Falls Church': { driving: 20, metro: 30, distance: 15 },
    'McLean': { driving: 15, metro: 25, distance: 10 },
    'Vienna': { driving: 25, metro: 30, distance: 18 }
  },
  'Quantico': {
    'Alexandria': { driving: 45, metro: null, distance: 35 },
    'Arlington': { driving: 50, metro: null, distance: 40 },
    'Fairfax': { driving: 50, metro: null, distance: 38 },
    'Springfield': { driving: 45, metro: null, distance: 35 },
    'Woodbridge': { driving: 25, metro: null, distance: 20 },
    'Stafford': { driving: 15, metro: null, distance: 12 },
    'Fredericksburg': { driving: 25, metro: null, distance: 20 },
    'Lorton': { driving: 40, metro: null, distance: 32 },
    'Mount Vernon': { driving: 50, metro: null, distance: 40 },
    'Burke': { driving: 45, metro: null, distance: 35 },
    'Manassas': { driving: 35, metro: null, distance: 28 },
    'Dumfries': { driving: 20, metro: null, distance: 15 },
    'Dale City': { driving: 20, metro: null, distance: 16 }
  }
};

// const locations = [
//   'Alexandria', 'Arlington', 'Fairfax', 'Springfield', 'Woodbridge', 
//   'Stafford', 'Fredericksburg', 'Lorton', 'Mount Vernon', 'Burke', 
//   'Annandale', 'Falls Church', 'McLean', 'Vienna', 'Manassas', 'Dumfries', 'Dale City'
// ];

export default function CommuteCalculatorPage() {
  const [selectedBase, setSelectedBase] = useState('Fort Belvoir');
  const [selectedLocation, setSelectedLocation] = useState('Alexandria');
  const [transportMode, setTransportMode] = useState<'driving' | 'metro'>('driving');
  const [commuteResults, setCommuteResults] = useState<{
    time: number | null;
    distance: number;
    dailyTime: number | null;
    weeklyTime: number | null;
    monthlyTime: number | null;
    hasMetro: boolean;
  } | null>(null);

  const calculateCommute = useCallback(() => {
    const baseData = commuteData[selectedBase as keyof typeof commuteData];
    const locationData = baseData[selectedLocation as keyof typeof baseData];
    
    if (locationData) {
      const commuteTime = transportMode === 'driving' ? locationData.driving : locationData.metro;
      
      setCommuteResults({
        time: commuteTime,
        distance: locationData.distance,
        dailyTime: commuteTime ? commuteTime * 2 : null, // Round trip
        weeklyTime: commuteTime ? commuteTime * 10 : null, // 5 days round trip
        monthlyTime: commuteTime ? commuteTime * 44 : null, // ~22 work days round trip
        hasMetro: locationData.metro !== null
      });
    }
  }, [selectedBase, selectedLocation, transportMode]);

  useEffect(() => {
    calculateCommute();
  }, [calculateCommute]);

  const getCommuteRating = (time: number | null) => {
    if (!time) return { rating: 'N/A', color: 'gray', description: 'No data available' };
    if (time <= 20) return { rating: 'Excellent', color: 'green', description: 'Very manageable commute' };
    if (time <= 35) return { rating: 'Good', color: 'blue', description: 'Reasonable commute time' };
    if (time <= 50) return { rating: 'Fair', color: 'yellow', description: 'Longer but doable' };
    return { rating: 'Challenging', color: 'red', description: 'Consider base proximity' };
  };

  const availableLocations = Object.keys(commuteData[selectedBase as keyof typeof commuteData]);
  const rating = commuteResults ? getCommuteRating(commuteResults.time) : null;

  return (
    <>
      <Header />
      
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 mb-8">
            <ClockIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            🚗 Military Base Commute Calculator
          </h1>
          <p className="text-xl leading-8 text-blue-100">
            Find the best locations for your daily commute to Fort Belvoir, Pentagon, or Quantico
          </p>
        </div>
      </div>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Calculator Form */}
            <div className="bg-white rounded-lg shadow-xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <MapPinIcon className="h-6 w-6 text-blue-600" />
                Commute Calculator
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    🏛️ Select Your Base
                  </label>
                  <select
                    value={selectedBase}
                    onChange={(e) => {
                      setSelectedBase(e.target.value);
                      setSelectedLocation(Object.keys(commuteData[e.target.value as keyof typeof commuteData])[0]);
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="Fort Belvoir">🏰 Fort Belvoir</option>
                    <option value="Pentagon">🏢 Pentagon</option>
                    <option value="Quantico">🛡️ Quantico Marine Base</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    🏠 Select Residential Area
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {availableLocations.map((location) => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    🚙 Transportation Mode
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setTransportMode('driving')}
                      className={`px-4 py-3 rounded-lg border font-medium transition-colors flex items-center justify-center gap-2 ${
                        transportMode === 'driving'
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                      }`}
                    >
                      <TruckIcon className="h-5 w-5" />
                      Driving
                    </button>
                    <button
                      onClick={() => setTransportMode('metro')}
                      disabled={!commuteResults?.hasMetro}
                      className={`px-4 py-3 rounded-lg border font-medium transition-colors flex items-center justify-center gap-2 ${
                        transportMode === 'metro' && commuteResults?.hasMetro
                          ? 'bg-blue-600 text-white border-blue-600'
                          : commuteResults?.hasMetro
                          ? 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                          : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                      }`}
                    >
                      <BuildingOffice2Icon className="h-5 w-5" />
                      Metro
                    </button>
                  </div>
                  {!commuteResults?.hasMetro && (
                    <p className="text-sm text-gray-500 mt-2">Metro not available for this route</p>
                  )}
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              {commuteResults && commuteResults.time && (
                <>
                  <div className={`rounded-lg p-8 border-2 ${
                    rating?.color === 'green' ? 'bg-green-50 border-green-200' :
                    rating?.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                    rating?.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                    'bg-red-50 border-red-200'
                  }`}>
                    <h3 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${
                      rating?.color === 'green' ? 'text-green-900' :
                      rating?.color === 'blue' ? 'text-blue-900' :
                      rating?.color === 'yellow' ? 'text-yellow-900' :
                      'text-red-900'
                    }`}>
                      <ClockIcon className="h-6 w-6" />
                      Commute Time
                    </h3>
                    <div className="text-center">
                      <div className={`text-5xl font-bold mb-2 ${
                        rating?.color === 'green' ? 'text-green-900' :
                        rating?.color === 'blue' ? 'text-blue-900' :
                        rating?.color === 'yellow' ? 'text-yellow-900' :
                        'text-red-900'
                      }`}>
                        {commuteResults.time} min
                      </div>
                      <div className={`text-lg ${
                        rating?.color === 'green' ? 'text-green-700' :
                        rating?.color === 'blue' ? 'text-blue-700' :
                        rating?.color === 'yellow' ? 'text-yellow-700' :
                        'text-red-700'
                      }`}>
                        {selectedLocation} to {selectedBase}
                      </div>
                      <div className={`text-sm mt-2 font-semibold ${
                        rating?.color === 'green' ? 'text-green-800' :
                        rating?.color === 'blue' ? 'text-blue-800' :
                        rating?.color === 'yellow' ? 'text-yellow-800' :
                        'text-red-800'
                      }`}>
                        Rating: {rating?.rating} - {rating?.description}
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">📊 Commute Statistics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{commuteResults.distance} mi</div>
                        <div className="text-gray-600 text-sm">Distance</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{commuteResults.dailyTime || 0} min</div>
                        <div className="text-gray-600 text-sm">Daily Round Trip</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{Math.round((commuteResults.weeklyTime || 0) / 60)} hrs</div>
                        <div className="text-gray-600 text-sm">Weekly Commute</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{Math.round((commuteResults.monthlyTime || 0) / 60)} hrs</div>
                        <div className="text-gray-600 text-sm">Monthly Commute</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800 mb-3">🚦 Traffic Considerations:</h4>
                    <ul className="space-y-2 text-yellow-700 text-sm">
                      <li>• Times shown are during rush hour (7-9 AM, 4-7 PM)</li>
                      <li>• Off-peak times can be 20-40% faster</li>
                      <li>• Weather and accidents can significantly impact drive times</li>
                      <li>• Consider alternate routes during peak traffic</li>
                      <li>• Metro times include walking and waiting time</li>
                    </ul>
                  </div>
                </>
              )}

              {commuteResults && !commuteResults.time && (
                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 text-center">
                  <p className="text-gray-600">No commute data available for this combination.</p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-16 bg-blue-900 text-white rounded-lg p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">🏠 Find Homes Near Your Base</h3>
                <p className="text-blue-100 mb-6">
                  Our MRP Certified military real estate specialist knows the best neighborhoods 
                  for each base commute, helping you balance location, schools, and travel time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                  >
                    Get Location Recommendations
                  </a>
                  <a
                    href="tel:+1-555-MILITARY"
                    className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                  >
                    Call (555) MILITARY
                  </a>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h4 className="font-semibold mb-4">🎖️ Military Commute Expertise:</h4>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>• Base proximity analysis</li>
                  <li>• Traffic pattern knowledge</li>
                  <li>• Military community locations</li>
                  <li>• School district considerations</li>
                  <li>• Gate access optimization</li>
                  <li>• Backup route planning</li>
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