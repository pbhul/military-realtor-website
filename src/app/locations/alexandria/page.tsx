import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPinIcon, ClockIcon, HomeIcon, CalculatorIcon, PhoneIcon, TruckIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Alexandria Military Realtor | Pentagon & Fort Belvoir Real Estate Specialist",
  description: "Expert Alexandria military realtor serving Pentagon and Fort Belvoir personnel. Specializing in military families, PCS relocations, VA loans, and historic Alexandria neighborhoods.",
  keywords: "Alexandria military realtor, Alexandria military housing, Alexandria VA loan specialist, Pentagon to Alexandria, Fort Belvoir to Alexandria, military families Alexandria VA",
  openGraph: {
    title: "Alexandria Military Realtor | Pentagon & Fort Belvoir Real Estate Specialist",
    description: "Expert Alexandria military realtor serving Pentagon and Fort Belvoir personnel. Specializing in military families, PCS relocations, and VA loans.",
    url: "https://www.militaryrealestatenova.com/locations/alexandria",
  },
};

export default function AlexandriaPage() {
  const neighborhoods = [
    "Old Town Alexandria",
    "Del Ray",
    "Rosemont",
    "Beverly Hills",
    "Potomac West",
    "Cameron Station",
    "Eisenhower Valley",
    "Kingstowne"
  ];

  const baseCommutes = [
    { base: "Pentagon", time: "15-25 min", distance: "8-12 miles", transport: "Metro/Car" },
    { base: "Fort Belvoir", time: "25-35 min", distance: "18-22 miles", transport: "Car" },
    { base: "Quantico", time: "45-55 min", distance: "35-40 miles", transport: "Car" }
  ];

  const features = [
    {
      icon: BuildingOfficeIcon,
      title: "Historic Charm",
      description: "Living in one of America's oldest cities with cobblestone streets, historic homes, and waterfront views."
    },
    {
      icon: TruckIcon,
      title: "Metro Access",
      description: "Multiple Metro stations including King Street, Eisenhower Avenue, and Van Dorn for easy Pentagon commuting."
    },
    {
      icon: HomeIcon,
      title: "Diverse Housing",
      description: "From historic townhomes to modern condos and single-family homes in established neighborhoods."
    },
    {
      icon: MapPinIcon,
      title: "Prime Location",
      description: "Minutes from DC, National Airport, and major military installations with rich cultural amenities."
    }
  ];

  const housingOptions = [
    {
      type: "Old Town Condos",
      price: "$400K-800K",
      commute: "Pentagon 20 min Metro",
      highlight: "Historic charm, walkable"
    },
    {
      type: "Del Ray Townhomes",
      price: "$600K-900K",
      commute: "Pentagon 25 min",
      highlight: "Family-friendly, trendy area"
    },
    {
      type: "Cameron Station",
      price: "$500K-750K",
      commute: "Pentagon 30 min",
      highlight: "Planned community, amenities"
    },
    {
      type: "Kingstowne",
      price: "$450K-700K",
      commute: "Fort Belvoir 20 min",
      highlight: "Newer community, good schools"
    },
    {
      type: "Rosemont",
      price: "$600K-1M",
      commute: "Pentagon 20 min",
      highlight: "Established, tree-lined streets"
    },
    {
      type: "Eisenhower Valley",
      price: "$350K-600K",
      commute: "Pentagon 15 min Metro",
      highlight: "High-rise living, Metro access"
    }
  ];

  const testimonials = [
    {
      content: "Love living in Old Town Alexandria! The Metro makes my Pentagon commute easy, and the historic charm is unmatched. Perfect for our military lifestyle.",
      author: "Commander Smith",
      branch: "Navy",
      area: "Old Town"
    },
    {
      content: "Del Ray has been perfect for our family. Great community feel, excellent restaurants, and reasonable commute to both Pentagon and Fort Belvoir.",
      author: "Major Johnson",
      branch: "Army",
      area: "Del Ray"
    }
  ];

  const metroStations = [
    { name: "King Street-Old Town", line: "Blue/Yellow", pentagon: "15 min" },
    { name: "Eisenhower Avenue", line: "Yellow", pentagon: "12 min" },
    { name: "Van Dorn Street", line: "Blue", pentagon: "18 min" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Alexandria Military Realtor
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Your trusted real estate specialist for military families in Alexandria, Virginia. Expert in historic 
              neighborhoods, Metro accessibility, and serving Pentagon and Fort Belvoir personnel.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Free Alexandria Guide
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

      {/* Alexandria Overview */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Military Families Love Alexandria
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Founded in 1749, Alexandria combines historic charm with modern convenience. Home to 160,000+ residents 
              and a favorite choice for military families stationed at nearby installations.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Metro Access */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Metro Access to Pentagon from Alexandria
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Three Metro stations serve Alexandria, providing convenient access to Pentagon and Washington DC.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {metroStations.map((station) => (
                <div key={station.name} className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 text-center">
                  <TruckIcon className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{station.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${station.line.includes('Blue') ? 'bg-blue-500' : 'bg-yellow-500'}`}></div>
                      <span className="text-sm text-gray-600">{station.line} Line</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <ClockIcon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{station.pentagon} to Pentagon</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Base Commutes */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Military Base Commutes from Alexandria
            </h2>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {baseCommutes.map((base) => (
                <div key={base.base} className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{base.base}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <ClockIcon className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">{base.time}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">{base.distance}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <TruckIcon className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">{base.transport}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Housing Options */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Alexandria Housing Options for Military Families
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Diverse housing options from historic Old Town to modern planned communities.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {housingOptions.map((option) => (
                <div key={option.type} className="bg-white p-6 shadow-lg rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{option.type}</h3>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {option.price}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{option.commute}</span>
                    </div>
                    <p className="text-sm text-gray-600">{option.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Free Alexandria Military Family Guide
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get your comprehensive guide to Alexandria living for military families. Includes neighborhood comparisons, 
              Metro maps, school information, and historic district insights.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-md lg:mx-0">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-white"
              />
              <select className="rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white">
                <option value="" className="text-gray-900">Housing Interest</option>
                <option value="historic" className="text-gray-900">Historic Properties</option>
                <option value="modern" className="text-gray-900">Modern Condos</option>
                <option value="townhomes" className="text-gray-900">Townhomes</option>
                <option value="waterfront" className="text-gray-900">Waterfront</option>
              </select>
              <button
                type="submit"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Get Free Alexandria Guide
              </button>
            </form>
          </div>
        </div>
      </section>


      {/* Neighborhoods List */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Alexandria Neighborhoods We Serve
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {neighborhoods.map((neighborhood) => (
              <div key={neighborhood} className="flex items-center justify-center rounded-lg bg-blue-50 px-4 py-3">
                <span className="text-sm font-semibold text-blue-900">{neighborhood}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/bases/pentagon"
              className="text-sm font-semibold text-blue-700 hover:text-blue-600 mr-8"
            >
              Pentagon Area Guide <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/bases/fort-belvoir"
              className="text-sm font-semibold text-blue-700 hover:text-blue-600"
            >
              Fort Belvoir Area Guide <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}