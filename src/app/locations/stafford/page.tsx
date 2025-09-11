import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPinIcon, ClockIcon, HomeIcon, CalculatorIcon, PhoneIcon, AcademicCapIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Stafford County Military Realtor | Quantico Marine Base Real Estate Specialist",
  description: "Expert Stafford County military realtor serving Quantico Marine Base personnel. Specializing in military families, PCS relocations, VA loans, and affordable Stafford County homes.",
  keywords: "Stafford County military realtor, Stafford military housing, Quantico to Stafford commute, Stafford County VA loan specialist, military families Stafford County Virginia",
  openGraph: {
    title: "Stafford County Military Realtor | Quantico Marine Base Real Estate Specialist",
    description: "Expert Stafford County military realtor serving Quantico Marine Base personnel. Specializing in military families, PCS relocations, and VA loans.",
    url: "https://pbrealtynova.com/locations/stafford",
  },
};

export default function StaffordPage() {
  const communities = [
    "Stafford",
    "Fredericksburg",
    "Aquia Harbour",
    "Embrey Mill",
    "Celebrate Virginia",
    "Austin Ridge",
    "Courthouse Village",
    "Garrisonville"
  ];

  const baseCommutes = [
    { base: "Quantico Marine Base", time: "15-25 min", distance: "10-15 miles" },
    { base: "Fort Belvoir", time: "45-55 min", distance: "35-40 miles" },
    { base: "Pentagon", time: "60-75 min", distance: "45-50 miles" }
  ];

  const features = [
    {
      icon: CurrencyDollarIcon,
      title: "Affordable Living",
      description: "More affordable housing options compared to Northern Virginia while maintaining quality communities and amenities."
    },
    {
      icon: AcademicCapIcon,
      title: "Growing School System",
      description: "Stafford County Public Schools with newer facilities and growing programs to serve military families."
    },
    {
      icon: HomeIcon,
      title: "New Construction",
      description: "Many new housing developments and communities designed for modern military families."
    },
    {
      icon: MapPinIcon,
      title: "Strategic Location",
      description: "Perfect for Quantico Marines with reasonable access to other military installations and DC area."
    }
  ];

  const housingOptions = [
    {
      type: "Embrey Mill",
      price: "$450K-650K",
      commute: "Quantico 20 min",
      highlight: "New master-planned community"
    },
    {
      type: "Celebrate Virginia",
      price: "$400K-600K",
      commute: "Quantico 25 min",
      highlight: "Family-focused, great amenities"
    },
    {
      type: "Aquia Harbour",
      price: "$350K-550K",
      commute: "Quantico 15 min",
      highlight: "Waterfront community, established"
    },
    {
      type: "Austin Ridge",
      price: "$500K-700K",
      commute: "Quantico 20 min",
      highlight: "Luxury community, golf course"
    },
    {
      type: "Fredericksburg",
      price: "$300K-500K",
      commute: "Quantico 25 min",
      highlight: "Historic city, affordable options"
    },
    {
      type: "Garrisonville",
      price: "$350K-500K",
      commute: "Quantico 18 min",
      highlight: "Established area, convenient shopping"
    }
  ];


  const advantages = [
    {
      title: "Cost of Living",
      description: "30-40% lower housing costs compared to Fairfax County and Northern Virginia"
    },
    {
      title: "New Communities",
      description: "Many master-planned communities with modern amenities and military-friendly features"
    },
    {
      title: "Growing Area",
      description: "Rapid growth with new shopping, dining, and recreational opportunities"
    },
    {
      title: "Quantico Proximity",
      description: "Close to Marine Corps Base Quantico with easy commute access"
    },
    {
      title: "Family-Friendly",
      description: "Strong focus on families with parks, sports leagues, and community events"
    },
    {
      title: "Future Growth",
      description: "Excellent long-term investment potential with continued development"
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
              Stafford County Military Realtor
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Your trusted real estate specialist for military families in Stafford County, Virginia. Expert in 
              affordable housing options, new communities, and serving Quantico Marine Base personnel.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Free Stafford County Guide
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

      {/* Stafford County Overview */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Military Families Choose Stafford County
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stafford County offers the perfect balance of affordability, quality communities, and convenience for 
              military families. With over 156,000 residents and growing, it&apos;s become a top choice for Quantico Marines.
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

      {/* Stafford Advantages */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stafford County Advantages for Military Families
            </h2>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map((advantage) => (
                <div key={advantage.title} className="bg-white p-6 shadow-lg rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
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
              Military Base Commutes from Stafford County
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
              Stafford County Housing Options for Military Families
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Affordable communities with modern amenities and military-friendly features.
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
              Free Stafford County Marine Family Guide
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get your comprehensive guide to Stafford County living for military families. Includes community comparisons, 
              school information, cost comparisons, and new construction insights.
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
                <option value="" className="text-gray-900">Timeline</option>
                <option value="immediate" className="text-gray-900">Ready to buy now</option>
                <option value="3-months" className="text-gray-900">Next 3 months</option>
                <option value="6-months" className="text-gray-900">Next 6 months</option>
                <option value="pcs" className="text-gray-900">Upcoming PCS</option>
              </select>
              <button
                type="submit"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Get Free Stafford Guide
              </button>
            </form>
          </div>
        </div>
      </section>


      {/* Communities List */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stafford County Communities We Serve
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {communities.map((community) => (
              <div key={community} className="flex items-center justify-center rounded-lg bg-blue-50 px-4 py-3">
                <span className="text-sm font-semibold text-blue-900">{community}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/bases/quantico"
              className="text-sm font-semibold text-blue-700 hover:text-blue-600"
            >
              Quantico Marine Base Guide <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}