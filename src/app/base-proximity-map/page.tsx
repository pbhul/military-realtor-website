'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPinIcon, ClockIcon, HomeIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

// Base coordinates and information
const militaryBases = {
  'fort-belvoir': {
    name: 'Fort Belvoir',
    coordinates: { lat: 38.7051, lng: -77.1424 },
    description: 'Major Army installation in Northern Virginia',
    personnel: '25,000+',
    branches: ['Army', 'Joint Services'],
    icon: '🏰'
  },
  'pentagon': {
    name: 'Pentagon',
    coordinates: { lat: 38.8719, lng: -77.0563 },
    description: 'Department of Defense headquarters',
    personnel: '23,000+',
    branches: ['All Branches', 'DoD Civilians'],
    icon: '🏢'
  },
  'quantico': {
    name: 'Quantico Marine Base',
    coordinates: { lat: 38.5206, lng: -77.3097 },
    description: 'Marine Corps Base and FBI Academy',
    personnel: '12,000+',
    branches: ['Marines', 'FBI', 'DEA'],
    icon: '🛡️'
  }
};

// Neighborhood data with proximity to bases
const neighborhoods = [
  {
    id: 'alexandria',
    name: 'Alexandria',
    coordinates: { lat: 38.8048, lng: -77.0469 },
    avgHomePrice: 761000,
    schoolRating: 8.5,
    militaryFriendly: 9,
    proximity: {
      'fort-belvoir': { distance: 18, driveTime: 25, rating: 'excellent' },
      'pentagon': { distance: 12, driveTime: 20, rating: 'excellent' },
      'quantico': { distance: 35, driveTime: 45, rating: 'good' }
    },
    amenities: ['Metro Access', 'Historic District', 'Waterfront', 'Shopping'],
    description: 'Historic city with excellent Metro access and military community'
  },
  {
    id: 'arlington',
    name: 'Arlington',
    coordinates: { lat: 38.8816, lng: -77.0910 },
    avgHomePrice: 797000,
    schoolRating: 9.2,
    militaryFriendly: 10,
    proximity: {
      'fort-belvoir': { distance: 25, driveTime: 35, rating: 'good' },
      'pentagon': { distance: 8, driveTime: 15, rating: 'excellent' },
      'quantico': { distance: 40, driveTime: 50, rating: 'fair' }
    },
    amenities: ['Metro Access', 'Pentagon City', 'Rosslyn', 'Crystal City'],
    description: 'Prime location near Pentagon with extensive Metro network'
  },
  {
    id: 'fairfax',
    name: 'Fairfax',
    coordinates: { lat: 38.8462, lng: -77.3064 },
    avgHomePrice: 787000,
    schoolRating: 8.8,
    militaryFriendly: 8,
    proximity: {
      'fort-belvoir': { distance: 22, driveTime: 30, rating: 'good' },
      'pentagon': { distance: 25, driveTime: 35, rating: 'good' },
      'quantico': { distance: 38, driveTime: 50, rating: 'fair' }
    },
    amenities: ['Family Friendly', 'Great Schools', 'Shopping Centers', 'Parks'],
    description: 'Family-oriented community with excellent schools and amenities'
  },
  {
    id: 'woodbridge',
    name: 'Woodbridge',
    coordinates: { lat: 38.6581, lng: -77.2497 },
    avgHomePrice: 520000,
    schoolRating: 7.5,
    militaryFriendly: 9,
    proximity: {
      'fort-belvoir': { distance: 28, driveTime: 35, rating: 'good' },
      'pentagon': { distance: 35, driveTime: 45, rating: 'fair' },
      'quantico': { distance: 20, driveTime: 25, rating: 'excellent' }
    },
    amenities: ['Affordable Housing', 'Military Community', 'Shopping', 'Recreation'],
    description: 'More affordable option with strong military community presence'
  },
  {
    id: 'stafford',
    name: 'Stafford',
    coordinates: { lat: 38.4221, lng: -77.4086 },
    avgHomePrice: 465000,
    schoolRating: 7.8,
    militaryFriendly: 10,
    proximity: {
      'fort-belvoir': { distance: 35, driveTime: 45, rating: 'fair' },
      'pentagon': { distance: 42, driveTime: 55, rating: 'challenging' },
      'quantico': { distance: 12, driveTime: 15, rating: 'excellent' }
    },
    amenities: ['Affordable', 'Large Lots', 'New Construction', 'Military Community'],
    description: 'Excellent choice for Quantico personnel with newer housing'
  },
  {
    id: 'springfield',
    name: 'Springfield',
    coordinates: { lat: 38.7893, lng: -77.1872 },
    avgHomePrice: 580000,
    schoolRating: 8.2,
    militaryFriendly: 8,
    proximity: {
      'fort-belvoir': { distance: 15, driveTime: 20, rating: 'excellent' },
      'pentagon': { distance: 22, driveTime: 30, rating: 'good' },
      'quantico': { distance: 35, driveTime: 45, rating: 'good' }
    },
    amenities: ['Metro Access', 'Shopping', 'Restaurants', 'Recreation'],
    description: 'Convenient location with good access to multiple bases'
  }
];

export default function BaseProximityMapPage() {
  const [selectedBase, setSelectedBase] = useState<keyof typeof militaryBases>('fort-belvoir');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null);
  const [mapCenter, setMapCenter] = useState(militaryBases['fort-belvoir'].coordinates);

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'fair': return 'text-yellow-600 bg-yellow-100';
      case 'challenging': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRatingIcon = (rating: string) => {
    switch (rating) {
      case 'excellent': return '🟢';
      case 'good': return '🔵';
      case 'fair': return '🟡';
      case 'challenging': return '🔴';
      default: return '⚪';
    }
  };

  const filteredNeighborhoods = neighborhoods.map(neighborhood => {
    const currentProximity = neighborhood.proximity[selectedBase];
    return {
      ...neighborhood,
      currentProximity
    };
  }).filter(neighborhood => neighborhood.currentProximity).sort((a, b) => a.currentProximity.driveTime - b.currentProximity.driveTime);

  return (
    <>
      <Header />
      
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 mb-8">
            <MapPinIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            🗺️ Military Base Proximity Map
          </h1>
          <p className="text-xl leading-8 text-blue-100">
            Find the best neighborhoods based on proximity to Fort Belvoir, Pentagon, and Quantico
          </p>
        </div>
      </div>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Base Selection */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Select Your Military Base</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(militaryBases).map(([key, base]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedBase(key as keyof typeof militaryBases);
                    setMapCenter(base.coordinates);
                    setSelectedNeighborhood(null);
                  }}
                  className={`flex items-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all ${
                    selectedBase === key
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:border-blue-300'
                  }`}
                >
                  <span className="text-2xl">{base.icon}</span>
                  <div className="text-left">
                    <div className="text-lg">{base.name}</div>
                    <div className="text-sm opacity-75">{base.personnel} personnel</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Map Visualization (Simplified visual representation) */}
          <div className="mb-12 bg-blue-50 rounded-lg p-8 border border-blue-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                📍 Neighborhoods Near {militaryBases[selectedBase].name}
              </h3>
              <p className="text-blue-700">
                {militaryBases[selectedBase].description}
              </p>
            </div>
            
            {/* Visual Map Representation */}
            <div className="relative bg-white rounded-lg p-12 min-h-96 border-2 border-dashed border-blue-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg opacity-30"></div>
              
              {/* Base Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-red-600 text-white rounded-full p-6 shadow-lg">
                  <span className="text-3xl">{militaryBases[selectedBase].icon}</span>
                </div>
                <div className="text-center mt-2 font-semibold text-red-800">
                  {militaryBases[selectedBase].name}
                </div>
              </div>

              {/* Neighborhood Indicators */}
              {filteredNeighborhoods.slice(0, 6).map((neighborhood, index) => {
                const angle = (index * 60) * Math.PI / 180; // 60 degrees apart
                const radius = 120 + (neighborhood.currentProximity.driveTime * 2); // Distance based on drive time
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={neighborhood.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`
                    }}
                    onClick={() => setSelectedNeighborhood(neighborhood.id)}
                  >
                    <div className={`rounded-full p-3 shadow-md ${
                      selectedNeighborhood === neighborhood.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'
                    }`}>
                      <HomeIcon className="h-6 w-6" />
                    </div>
                    <div className="text-center mt-1 text-xs font-medium max-w-20">
                      {neighborhood.name}
                    </div>
                    <div className="text-center text-xs text-gray-600">
                      {neighborhood.currentProximity.driveTime} min
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Neighborhoods List */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                🏘️ Neighborhoods Ranked by Commute Time
              </h3>
              <div className="space-y-4">
                {filteredNeighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood.id}
                    className={`p-6 rounded-lg border cursor-pointer transition-all ${
                      selectedNeighborhood === neighborhood.id
                        ? 'border-blue-300 bg-blue-50 shadow-lg'
                        : 'border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-25'
                    }`}
                    onClick={() => setSelectedNeighborhood(neighborhood.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">{neighborhood.name}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRatingColor(neighborhood.currentProximity.rating)}`}>
                            {getRatingIcon(neighborhood.currentProximity.rating)} {neighborhood.currentProximity.rating}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-2">
                            <ClockIcon className="h-4 w-4" />
                            {neighborhood.currentProximity.driveTime} min drive
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPinIcon className="h-4 w-4" />
                            {neighborhood.currentProximity.distance} miles
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{neighborhood.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Neighborhood Details */}
            <div>
              {selectedNeighborhood ? (
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 sticky top-8">
                  {(() => {
                    const selected = neighborhoods.find(n => n.id === selectedNeighborhood);
                    if (!selected) return null;
                    
                    return (
                      <>
                        <div className="flex items-center gap-3 mb-6">
                          <HomeIcon className="h-8 w-8 text-blue-600" />
                          <h3 className="text-2xl font-bold text-gray-900">{selected.name}</h3>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">📊 Key Statistics</h4>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="text-2xl font-bold text-gray-900">
                                  ${(selected.avgHomePrice / 1000).toFixed(0)}K
                                </div>
                                <div className="text-sm text-gray-600">Avg Home Price</div>
                              </div>
                              <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="text-2xl font-bold text-gray-900">{selected.schoolRating}/10</div>
                                <div className="text-sm text-gray-600">School Rating</div>
                              </div>
                              <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="text-2xl font-bold text-gray-900">{selected.militaryFriendly}/10</div>
                                <div className="text-sm text-gray-600">Military Friendly</div>
                              </div>
                              <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="text-2xl font-bold text-gray-900">
                                  {selected.proximity[selectedBase].driveTime}m
                                </div>
                                <div className="text-sm text-gray-600">Commute Time</div>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">🏛️ Proximity to All Bases</h4>
                            <div className="space-y-3">
                              {Object.entries(selected.proximity).map(([baseKey, proximity]) => (
                                <div key={baseKey} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                  <div className="flex items-center gap-3">
                                    <span className="text-lg">{militaryBases[baseKey as keyof typeof militaryBases].icon}</span>
                                    <span className="font-medium">{militaryBases[baseKey as keyof typeof militaryBases].name}</span>
                                  </div>
                                  <div className="text-right">
                                    <div className="font-semibold">{proximity.driveTime} min</div>
                                    <div className="text-sm text-gray-600">{proximity.distance} miles</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">🏠 Amenities & Features</h4>
                            <div className="flex flex-wrap gap-2">
                              {selected.amenities.map((amenity) => (
                                <span key={amenity} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                  {amenity}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <div className="flex flex-col sm:flex-row gap-4">
                            <a
                              href="/contact"
                              className="flex-1 bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                              View Homes in {selected.name}
                            </a>
                            <a
                              href="tel:+1-703-477-2606"
                              className="flex-1 border border-blue-600 text-blue-600 text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                            >
                              Call Realtor
                            </a>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
                  <MapPinIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Select a Neighborhood</h3>
                  <p className="text-gray-500">Click on any neighborhood to see detailed information, pricing, and amenities.</p>
                </div>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-blue-900 text-white rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">🎖️ Ready to Find Your Perfect Military Community?</h3>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
                Our MRP Certified military real estate specialist knows these neighborhoods inside and out. 
                Get personalized recommendations based on your base assignment, family needs, and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Neighborhood Recommendations
                </a>
                <a
                  href="/bah-calculator"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Calculate Your BAH
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}