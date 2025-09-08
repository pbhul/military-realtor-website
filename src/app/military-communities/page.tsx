import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPinIcon, ClockIcon, HomeIcon, AcademicCapIcon, ShieldCheckIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function MilitaryCommunities() {
  const communities = [
    {
      name: "Burke/Fairfax Station",
      base: "Fort Belvoir",
      commute: "15-25 minutes",
      highlights: ["Excellent schools", "Family-friendly", "Established neighborhoods"],
      priceRange: "$600K - $900K",
      description: "Popular with Fort Belvoir families for excellent schools and established community feel."
    },
    {
      name: "Woodbridge/Lake Ridge",
      base: "Quantico/Fort Belvoir", 
      commute: "20-30 minutes",
      highlights: ["Potomac River access", "Newer construction", "Military-friendly amenities"],
      priceRange: "$450K - $700K",
      description: "Great value with water access and strong military community presence."
    },
    {
      name: "Arlington/Crystal City",
      base: "Pentagon",
      commute: "5-15 minutes",
      highlights: ["Metro accessible", "Urban lifestyle", "Walking/biking friendly"],
      priceRange: "$700K - $1.2M",
      description: "Premium location for Pentagon assignments with urban conveniences."
    },
    {
      name: "Alexandria (West End)",
      base: "Fort Belvoir/Pentagon",
      commute: "15-25 minutes",
      highlights: ["Historic charm", "Metro access", "Diverse housing options"],
      priceRange: "$650K - $1M",
      description: "Historic neighborhoods with character and convenient base access."
    },
    {
      name: "Dumfries/Triangle",
      base: "Quantico",
      commute: "10-20 minutes",
      highlights: ["Quantico-adjacent", "Affordable options", "Growing community"],
      priceRange: "$400K - $600K",
      description: "Closest civilian communities to Quantico with military family focus."
    },
    {
      name: "Stafford County",
      base: "Quantico/Fort Belvoir",
      commute: "25-40 minutes",
      highlights: ["More space", "Better value", "Growing schools"],
      priceRange: "$350K - $600K",
      description: "Rural feel with great value, popular with families wanting space."
    }
  ];

  const factors = [
    {
      icon: ClockIcon,
      title: "Commute Considerations",
      description: "Factor in DC traffic patterns and consider reverse commutes to military bases for shorter travel times."
    },
    {
      icon: AcademicCapIcon,
      title: "School Quality",
      description: "Northern Virginia has excellent schools. Research specific districts for your children's grade levels."
    },
    {
      icon: BuildingOfficeIcon,
      title: "Spouse Employment",
      description: "Consider proximity to DC job market and Metro accessibility for spouse career opportunities."
    },
    {
      icon: HomeIcon,
      title: "Housing Allowance Optimization",
      description: "Match BAH rates to get maximum value while staying within budget for your family's needs."
    },
    {
      icon: ShieldCheckIcon,
      title: "Military Community",
      description: "Look for areas with established military families for built-in support networks and understanding."
    },
    {
      icon: MapPinIcon,
      title: "Resale Value",
      description: "Consider future PCS moves - choose areas that attract both military and civilian buyers."
    }
  ];

  const schoolDistricts = [
    {
      district: "Fairfax County",
      rating: "A+",
      highlights: ["Top-ranked nationally", "Advanced academic programs", "Excellent special needs support"],
      militaryFriendly: "Very High"
    },
    {
      district: "Loudoun County", 
      rating: "A+",
      highlights: ["Fastest growing", "New facilities", "Strong STEM programs"],
      militaryFriendly: "High"
    },
    {
      district: "Prince William County",
      rating: "A",
      highlights: ["Improving rapidly", "Military liaison programs", "Good value"],
      militaryFriendly: "Very High"
    },
    {
      district: "Stafford County",
      rating: "B+", 
      highlights: ["Growing investment", "Lower student-teacher ratios", "Military support programs"],
      militaryFriendly: "Very High"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Best Military Communities in Northern Virginia
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Discover the top neighborhoods for military families near Fort Belvoir, Pentagon, and Quantico. 
              Find your perfect community with insider knowledge from an MRP Certified veteran real estate expert.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Get Personalized Area Recommendations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Top Military-Friendly Communities
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These neighborhoods consistently rank highest among military families for location, amenities, and community support.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {communities.map((community) => (
              <div key={community.name} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{community.name}</h3>
                  <span className="text-sm font-medium text-blue-600">{community.priceRange}</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <MapPinIcon className="h-4 w-4" />
                    <span>Closest to {community.base}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <ClockIcon className="h-4 w-4" />
                    <span>{community.commute} commute</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{community.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {community.highlights.map((highlight, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <Link 
                    href="/contact" 
                    className="text-blue-600 hover:text-blue-500 font-semibold text-sm"
                  >
                    Learn More About {community.name} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Factors */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Key Factors for Military Families
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Consider these important factors when choosing your Northern Virginia community.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {factors.map((factor) => (
              <div key={factor.title} className="bg-white rounded-lg p-6 shadow-lg">
                <factor.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{factor.title}</h3>
                <p className="text-gray-600 text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Districts */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              School District Comparison
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Northern Virginia offers some of the nation&apos;s top school districts. Here&apos;s how they compare for military families.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      School District
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Military Friendly
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Key Highlights
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {schoolDistricts.map((district) => (
                    <tr key={district.district}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{district.district}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          district.rating.startsWith('A') 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {district.rating}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          district.militaryFriendly === 'Very High'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {district.militaryFriendly}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <ul className="text-sm text-gray-600 space-y-1">
                          {district.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Military Base Commute Map */}
      <section className="py-24 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Commute Times from Major Communities
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Fort Belvoir</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Burke/Fairfax Station</span>
                      <span className="font-medium">15-25 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Alexandria</span>
                      <span className="font-medium">20-30 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Woodbridge</span>
                      <span className="font-medium">25-35 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Stafford</span>
                      <span className="font-medium">35-45 min</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Pentagon</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Arlington</span>
                      <span className="font-medium">5-15 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Alexandria</span>
                      <span className="font-medium">15-25 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fairfax County</span>
                      <span className="font-medium">25-35 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Loudoun County</span>
                      <span className="font-medium">30-45 min</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Quantico</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Dumfries/Triangle</span>
                      <span className="font-medium">10-20 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Woodbridge</span>
                      <span className="font-medium">20-30 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Stafford</span>
                      <span className="font-medium">25-35 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fredericksburg</span>
                      <span className="font-medium">30-40 min</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Commute times vary significantly based on time of day and traffic conditions. 
                  Consider peak hours and reverse commute advantages when choosing your community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Find Your Perfect Military Community
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get personalized recommendations based on your duty station, family needs, and lifestyle preferences 
              from a local MRP Certified military real estate expert.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Get Community Recommendations
              </Link>
              <Link
                href="/locations"
                className="text-base font-semibold leading-6 text-white hover:text-blue-100"
              >
                View All Service Areas →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}