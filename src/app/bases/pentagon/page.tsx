import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPinIcon, ClockIcon, HomeIcon, CalculatorIcon, PhoneIcon, TruckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pentagon Area Military Realtor | Veterans Realtor Northern Virginia",
  description: "Pentagon area military realtor specializing in veterans and active duty families. MRP certified pentagon area military realtor with Metro expertise, VA loans, and PCS coordination.",
  keywords: "pentagon area military realtor, veterans realtor northern virginia, pentagon military housing realtor, pentagon area VA loan specialist, military realtor pentagon, pentagon PCS realtor, MRP certified pentagon realtor",
  openGraph: {
    title: "Pentagon Area Military Realtor | Veterans Realtor NoVA",
    description: "Pentagon area military realtor serving veterans and active duty personnel. MRP certified with Metro expertise for Pentagon commuters.",
    url: "https://pbrealtynova.com/bases/pentagon",
  },
};

export default function PentagonPage() {
  const nearbyAreas = [
    "Arlington",
    "Alexandria",
    "Falls Church",
    "McLean",
    "Fairfax",
    "Springfield",
    "Crystal City",
    "Rosslyn"
  ];

  const commuteData = [
    { area: "Arlington", time: "10 min", distance: "5 miles", transport: "Metro" },
    { area: "Alexandria", time: "15 min", distance: "8 miles", transport: "Metro/Car" },
    { area: "Falls Church", time: "20 min", distance: "12 miles", transport: "Metro" },
    { area: "Crystal City", time: "5 min", distance: "2 miles", transport: "Metro" },
    { area: "McLean", time: "25 min", distance: "15 miles", transport: "Car" },
    { area: "Springfield", time: "30 min", distance: "18 miles", transport: "Car" }
  ];

  const services = [
    {
      icon: TruckIcon,
      title: "Metro-Accessible Housing",
      description: "Expert guidance on homes with convenient Metro access to Pentagon station, perfect for daily commuters and reducing transportation costs."
    },
    {
      icon: HomeIcon,
      title: "High-Value Market Navigation",
      description: "Navigate the competitive Pentagon area real estate market with expert pricing strategies and military-friendly loan options."
    },
    {
      icon: CalculatorIcon,
      title: "VA Loan Optimization",
      description: "Maximize your VA loan benefits in the high-cost Pentagon area with no down payment for qualified borrowers with full entitlement, regardless of home price."
    },
    {
      icon: ClockIcon,
      title: "Executive PCS Services",
      description: "White-glove service for Pentagon executives and senior military personnel with tight timelines and specific housing requirements."
    }
  ];


  const metroStations = [
    { name: "Pentagon", line: "Blue/Yellow", time: "0 min" },
    { name: "Pentagon City", line: "Blue/Yellow", time: "2 min" },
    { name: "Crystal City", line: "Blue/Yellow", time: "5 min" },
    { name: "National Airport", line: "Blue/Yellow", time: "8 min" },
    { name: "King St-Old Town", line: "Blue/Yellow", time: "15 min" },
    { name: "Rosslyn", line: "Blue/Orange", time: "10 min" }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Pentagon Area Military Realtor
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Pentagon area military realtor serving veterans and active duty personnel. MRP certified with specialized Pentagon commute expertise,
              VA loan guidance, and military-friendly housing solutions near Metro stations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Free Pentagon Area Guide
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

      {/* Pentagon Area Overview */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pentagon Area Military Realtor Expertise
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Pentagon serves over 26,000 military and civilian personnel daily. As your Pentagon area military realtor, I provide
              expert guidance on premium housing with Metro connectivity, military-friendly communities, and VA loan optimization.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {service.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Metro Access Information */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Metro Access to Pentagon
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Strategic location planning for Metro accessibility. Reduce commute stress and transportation costs.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {metroStations.map((station) => (
                <div key={station.name} className="bg-white p-6 shadow-lg rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{station.name}</h3>
                    <TruckIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${station.line.includes('Blue') ? 'bg-blue-500' : station.line.includes('Yellow') ? 'bg-yellow-500' : 'bg-orange-500'}`}></div>
                      <span className="text-sm text-gray-600">{station.line} Line</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{station.time} to Pentagon</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commute Information */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pentagon Area Commute Guide
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive commute information for Pentagon personnel living in Northern Virginia and DC area communities.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {commuteData.map((area) => (
                <div key={area.area} className="bg-white p-6 shadow-lg rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{area.area}</h3>
                    <MapPinIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{area.time} to Pentagon</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{area.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TruckIcon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{area.transport}</span>
                    </div>
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
              Free Pentagon Area Housing Guide
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get your comprehensive guide to Pentagon area housing. Includes Metro access maps, neighborhood comparisons, 
              school ratings, and strategies for competing in the competitive DC market.
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
                <option value="" className="text-gray-900">Select Branch</option>
                <option value="army" className="text-gray-900">Army</option>
                <option value="navy" className="text-gray-900">Navy</option>
                <option value="air-force" className="text-gray-900">Air Force</option>
                <option value="marines" className="text-gray-900">Marines</option>
                <option value="space-force" className="text-gray-900">Space Force</option>
                <option value="civilian" className="text-gray-900">DoD Civilian</option>
              </select>
              <button
                type="submit"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Get Free Pentagon Guide
              </button>
            </form>
          </div>
        </div>
      </section>


      {/* Nearby Areas */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Popular Areas Near Pentagon
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore premium neighborhoods within commuting distance of the Pentagon.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {nearbyAreas.map((area) => (
              <div key={area} className="flex items-center justify-center rounded-lg bg-blue-50 px-6 py-4">
                <span className="text-sm font-semibold text-blue-900">{area}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/locations"
              className="text-sm font-semibold text-blue-700 hover:text-blue-600"
            >
              Explore all Washington DC area locations <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}