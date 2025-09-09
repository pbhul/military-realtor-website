import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPinIcon, ClockIcon, HomeIcon, CalculatorIcon, PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fort Belvoir Realtor | Military Real Estate Specialist Northern Virginia",
  description: "Expert Fort Belvoir realtor specializing in military families, PCS moves, and VA loans. Serving Fort Belvoir, Fairfax Station, Springfield, and surrounding Northern Virginia areas.",
  keywords: "Fort Belvoir realtor, Fort Belvoir military housing, Fort Belvoir VA loan specialist, Fort Belvoir PCS relocation, military realtor near Fort Belvoir, Fort Belvoir area homes",
  openGraph: {
    title: "Fort Belvoir Realtor | Military Real Estate Specialist",
    description: "Expert Fort Belvoir realtor specializing in military families, PCS moves, and VA loans. Serving Fort Belvoir and surrounding Northern Virginia areas.",
    url: "https://www.militaryrealestatenova.com/bases/fort-belvoir",
  },
};

export default function FortBelvoirPage() {
  const nearbyAreas = [
    "Fairfax Station",
    "Springfield",
    "Burke",
    "Lorton",
    "Woodbridge",
    "Alexandria",
    "Mount Vernon",
    "Newington"
  ];

  const commuteData = [
    { area: "Fairfax Station", time: "10 min", distance: "8 miles" },
    { area: "Springfield", time: "15 min", distance: "12 miles" },
    { area: "Burke", time: "20 min", distance: "15 miles" },
    { area: "Lorton", time: "8 min", distance: "6 miles" },
    { area: "Woodbridge", time: "25 min", distance: "18 miles" },
    { area: "Alexandria", time: "30 min", distance: "22 miles" }
  ];

  const services = [
    {
      icon: HomeIcon,
      title: "Home Buying for Fort Belvoir Personnel",
      description: "Expert guidance through the home buying process with deep knowledge of Fort Belvoir area neighborhoods and military-friendly communities."
    },
    {
      icon: CalculatorIcon,
      title: "VA Loan Expertise",
      description: "Maximize your VA loan benefits with zero down payment options and competitive rates specifically for Fort Belvoir military families."
    },
    {
      icon: ClockIcon,
      title: "PCS Timeline Coordination",
      description: "Seamless coordination of your real estate transaction with PCS orders, report dates, and military timelines."
    },
    {
      icon: MapPinIcon,
      title: "Local Area Expertise",
      description: "Intimate knowledge of Fort Belvoir area schools, amenities, and military-friendly neighborhoods within your BAH range."
    }
  ];

  const testimonials = [
    {
      content: "Made our PCS from Fort Hood to Fort Belvoir seamless. Found us the perfect home in Fairfax Station within our BAH and close to base.",
      author: "Major Williams",
      rank: "Army",
      area: "Fairfax Station"
    },
    {
      content: "Outstanding service during our first home purchase near Fort Belvoir. Walked us through every step of the VA loan process.",
      author: "SSG Martinez",
      rank: "Army",
      area: "Springfield"
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
              Fort Belvoir Realtor
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Your trusted real estate specialist for Fort Belvoir military families. Expert in PCS relocations, VA loans, 
              and finding the perfect home near base with easy commute access.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Free Fort Belvoir Home Guide
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

      {/* Fort Belvoir Overview */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fort Belvoir Area Real Estate Expertise
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Fort Belvoir is home to over 50,000 military personnel, civilians, and family members. 
              As a premier military installation in Northern Virginia, finding the right home near base requires local expertise.
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

      {/* Commute Information */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fort Belvoir Commute Times
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Strategic location planning for your daily commute to Fort Belvoir. Find homes with convenient access to base.
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
                      <span className="text-sm text-gray-600">{area.time} to Fort Belvoir</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{area.distance}</span>
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
              Free Fort Belvoir Area Home Buyer Guide
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get your comprehensive guide to buying a home near Fort Belvoir. Includes neighborhood insights, 
              school ratings, commute information, and VA loan tips specific to Fort Belvoir personnel.
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
                <option value="" className="text-gray-900">Select Your Rank</option>
                <option value="enlisted" className="text-gray-900">Enlisted</option>
                <option value="nco" className="text-gray-900">NCO</option>
                <option value="officer" className="text-gray-900">Officer</option>
                <option value="civilian" className="text-gray-900">Civilian Employee</option>
              </select>
              <button
                type="submit"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Get Free Fort Belvoir Guide
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
              Popular Areas Near Fort Belvoir
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore military-friendly neighborhoods within commuting distance of Fort Belvoir.
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
              Explore all Northern Virginia locations <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}