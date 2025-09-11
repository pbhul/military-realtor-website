import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPinIcon, ClockIcon, HomeIcon, CalculatorIcon, PhoneIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Fairfax County Military Realtor | Northern Virginia Military Real Estate",
  description: "Expert Fairfax County military realtor serving Fort Belvoir and Pentagon personnel. Specializing in military families, PCS relocations, and VA loans in Fairfax County, Virginia.",
  keywords: "Fairfax County military realtor, Fairfax County military housing, Fairfax County VA loan specialist, military families Fairfax County, PCS relocation Fairfax County, Fort Belvoir to Fairfax County",
  openGraph: {
    title: "Fairfax County Military Realtor | Northern Virginia Military Real Estate",
    description: "Expert Fairfax County military realtor serving Fort Belvoir and Pentagon personnel. Specializing in military families, PCS relocations, and VA loans.",
    url: "https://pbrealtynova.com/locations/fairfax-county",
  },
};

export default function FairfaxCountyPage() {
  const communities = [
    "Annandale",
    "Burke",
    "Chantilly",
    "Clifton",
    "Fairfax City",
    "Great Falls",
    "Herndon",
    "Lorton",
    "McLean",
    "Oakton",
    "Reston",
    "Springfield",
    "Tysons",
    "Vienna",
    "West Springfield"
  ];

  const baseCommutes = [
    { base: "Fort Belvoir", time: "20-35 min", distance: "15-25 miles" },
    { base: "Pentagon", time: "25-45 min", distance: "20-30 miles" },
    { base: "Quantico", time: "45-60 min", distance: "35-45 miles" }
  ];

  const features = [
    {
      icon: AcademicCapIcon,
      title: "Top-Rated Schools",
      description: "Fairfax County Public Schools consistently ranks among the best in the nation, perfect for military families."
    },
    {
      icon: HomeIcon,
      title: "Diverse Housing Options",
      description: "From townhomes to luxury estates, find the perfect home within your military housing allowance."
    },
    {
      icon: MapPinIcon,
      title: "Strategic Location",
      description: "Central location with access to multiple military installations and Washington DC metro area."
    },
    {
      icon: CalculatorIcon,
      title: "Strong Property Values",
      description: "Excellent investment potential with strong resale values for military families who PCS."
    }
  ];

  const neighborhoods = [
    {
      name: "Burke/West Springfield",
      price: "$600K-900K",
      commute: "Fort Belvoir 15 min",
      highlight: "Family-friendly, excellent schools"
    },
    {
      name: "Fairfax/Fairfax Station",
      price: "$700K-1.2M",
      commute: "Fort Belvoir 20 min",
      highlight: "Top schools, established community"
    },
    {
      name: "Annandale",
      price: "$550K-800K",
      commute: "Pentagon 25 min",
      highlight: "Diverse community, great restaurants"
    },
    {
      name: "McLean",
      price: "$900K-2M+",
      commute: "Pentagon 20 min",
      highlight: "Luxury living, top schools"
    },
    {
      name: "Herndon/Reston",
      price: "$600K-1M",
      commute: "Pentagon 30 min",
      highlight: "Tech corridor, modern amenities"
    },
    {
      name: "Vienna",
      price: "$800K-1.5M",
      commute: "Pentagon 25 min",
      highlight: "Metro access, family-oriented"
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
              Fairfax County Military Realtor
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Your trusted real estate specialist for military families in Fairfax County. Expert knowledge of 
              top-rated schools, diverse communities, and convenient access to Fort Belvoir and Pentagon.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Free Fairfax County Guide
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

      {/* Fairfax County Overview */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Military Families Choose Fairfax County
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Home to over 1.1 million residents, Fairfax County offers the perfect combination of excellent schools, 
              diverse communities, and strategic location for military personnel.
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

      {/* Base Commute Information */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Military Base Commutes from Fairfax County
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Strategic location provides reasonable commutes to major military installations.
            </p>
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

      {/* Neighborhood Guide */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Popular Fairfax County Neighborhoods for Military Families
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find the perfect community that fits your family&apos;s needs and budget.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {neighborhoods.map((neighborhood) => (
                <div key={neighborhood.name} className="bg-white p-6 shadow-lg rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{neighborhood.name}</h3>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {neighborhood.price}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{neighborhood.commute}</span>
                    </div>
                    <p className="text-sm text-gray-600">{neighborhood.highlight}</p>
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
              Free Fairfax County Military Family Guide
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get your comprehensive guide to Fairfax County living for military families. Includes school ratings, 
              neighborhood comparisons, commute guides, and VA loan insights.
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
                <option value="" className="text-gray-900">Primary Interest</option>
                <option value="buying" className="text-gray-900">Buying a Home</option>
                <option value="selling" className="text-gray-900">Selling a Home</option>
                <option value="pcs" className="text-gray-900">PCS Move</option>
                <option value="investment" className="text-gray-900">Investment Property</option>
              </select>
              <button
                type="submit"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Get Free Fairfax County Guide
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
              Fairfax County Communities We Serve
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert knowledge of every Fairfax County community and their unique advantages for military families.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {communities.map((community) => (
              <div key={community} className="flex items-center justify-center rounded-lg bg-blue-50 px-4 py-3">
                <span className="text-sm font-semibold text-blue-900">{community}</span>
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