import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPinIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Northern Virginia Locations | Military Real Estate Coverage Areas",
  description: "Complete coverage of Northern Virginia military communities. Expert real estate services for Fort Belvoir, Pentagon, Quantico areas including Fairfax County, Alexandria, Arlington, Stafford County.",
  keywords: "Northern Virginia military real estate locations, military communities Northern Virginia, Fort Belvoir Pentagon Quantico coverage areas, military realtor service areas",
  openGraph: {
    title: "Northern Virginia Locations | Military Real Estate Coverage Areas",
    description: "Complete coverage of Northern Virginia military communities. Expert real estate services for all major military areas.",
    url: "https://www.militaryrealestatenova.com/locations",
  },
};

export default function LocationsPage() {
  const baseAreas = [
    {
      name: "Fort Belvoir Area",
      description: "Serving Fort Belvoir personnel with expert knowledge of nearby communities, commute times, and military-friendly neighborhoods.",
      communities: ["Fairfax Station", "Springfield", "Burke", "Lorton", "Woodbridge", "Alexandria"],
      link: "/bases/fort-belvoir"
    },
    {
      name: "Pentagon Area", 
      description: "Premium locations with Metro access for Pentagon personnel, including high-value markets and executive housing options.",
      communities: ["Arlington", "Alexandria", "Falls Church", "McLean", "Crystal City", "Rosslyn"],
      link: "/bases/pentagon"
    },
    {
      name: "Quantico Marine Base Area",
      description: "Affordable communities perfect for Marine families, with easy access to Quantico and growing suburban amenities.",
      communities: ["Stafford County", "Woodbridge", "Dumfries", "Triangle", "Fredericksburg"],
      link: "/bases/quantico"
    }
  ];

  const counties = [
    {
      name: "Fairfax County",
      highlights: "Top-rated schools, diverse housing options, central location",
      cities: ["Fairfax", "Springfield", "Burke", "McLean", "Vienna", "Herndon", "Reston"],
      link: "/locations/fairfax-county"
    },
    {
      name: "Prince William County", 
      highlights: "Growing communities, new construction, family-friendly",
      cities: ["Woodbridge", "Dumfries", "Manassas", "Dale City"],
      link: "/locations/prince-william-county"
    },
    {
      name: "Loudoun County",
      highlights: "Technology corridor, modern amenities, excellent schools",
      cities: ["Ashburn", "Sterling", "Leesburg", "Herndon"],
      link: "/locations/loudoun-county"
    },
    {
      name: "Stafford County",
      highlights: "Affordable housing, new developments, Quantico proximity", 
      cities: ["Stafford", "Fredericksburg", "Aquia Harbour"],
      link: "/locations/stafford"
    }
  ];

  const cities = [
    {
      name: "Alexandria",
      description: "Historic charm with Metro access, perfect for Pentagon personnel",
      highlights: ["Old Town", "Del Ray", "Metro stations", "Waterfront living"],
      link: "/locations/alexandria"
    },
    {
      name: "Arlington", 
      description: "Premium location with excellent Metro connectivity",
      highlights: ["Close to Pentagon", "Urban amenities", "High-rise living"],
      link: "/locations/arlington"
    },
    {
      name: "Falls Church",
      description: "Family-friendly community with top schools",
      highlights: ["Great schools", "Metro access", "Suburban feel"],
      link: "/locations/falls-church"
    },
    {
      name: "Springfield",
      description: "Established community near Fort Belvoir",
      highlights: ["Military families", "Affordable options", "Shopping"],
      link: "/locations/springfield"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Northern Virginia Military Communities
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Comprehensive coverage of all military communities in Northern Virginia. Expert knowledge of 
              every area, from base proximity to school districts to commute times.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:+1-703-477-2606"
                className="flex items-center gap-2 text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                <PhoneIcon className="h-5 w-5" />
                Call (703) 477-2606
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Military Base Areas */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Military Base Coverage Areas
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Specialized expertise for each major military installation in Northern Virginia.
            </p>
            <div className="mt-8">
              <Link
                href="/military-housing-information-northern-virginia.html"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
              >
                📋 Complete Military Housing Guide 2025 <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {baseAreas.map((area) => (
                <div key={area.name} className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.name}</h3>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Key Communities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.communities.map((community) => (
                        <span key={community} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                          {community}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Link
                      href={area.link}
                      className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium block"
                    >
                      Explore Area <span className="ml-1">→</span>
                    </Link>
                    {area.name === "Fort Belvoir Area" && (
                      <Link
                        href="/fort-belvoir-realtor.html"
                        className="inline-flex items-center text-green-600 hover:text-green-500 font-medium text-sm block"
                      >
                        Detailed Fort Belvoir Information <span className="ml-1">→</span>
                      </Link>
                    )}
                    {area.name === "Pentagon Area" && (
                      <Link
                        href="/pentagon-area-realtor.html"
                        className="inline-flex items-center text-green-600 hover:text-green-500 font-medium text-sm block"
                      >
                        Detailed Pentagon Information <span className="ml-1">→</span>
                      </Link>
                    )}
                    {area.name === "Quantico Marine Base Area" && (
                      <Link
                        href="/quantico-marine-realtor.html"
                        className="inline-flex items-center text-green-600 hover:text-green-500 font-medium text-sm block"
                      >
                        Detailed Quantico Information <span className="ml-1">→</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Counties */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Northern Virginia Counties
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              County-by-county expertise for military families choosing their ideal community.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {counties.map((county) => (
                <div key={county.name} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{county.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{county.highlights}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Cities & Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {county.cities.map((city) => (
                        <span key={city} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={county.link}
                    className="text-blue-600 hover:text-blue-500 font-medium text-sm"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Military Communities
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Popular cities and towns for military families in Northern Virginia.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {cities.map((city) => (
                <div key={city.name} className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{city.name}</h3>
                  <p className="text-gray-600 mb-4">{city.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {city.highlights.map((highlight) => (
                        <span key={highlight} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={city.link}
                    className="text-blue-600 hover:text-blue-500 font-medium text-sm"
                  >
                    Explore {city.name} →
                  </Link>
                </div>
              ))}
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
              Ready to explore Northern Virginia? Let&apos;s discuss which communities best fit 
              your military lifestyle, family needs, and budget.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:+1-703-477-2606"
                className="flex items-center gap-2 text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                <PhoneIcon className="h-5 w-5" />
                Call Now: (703) 477-2606
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}