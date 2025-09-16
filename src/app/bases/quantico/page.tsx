import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPinIcon, ClockIcon, HomeIcon, CalculatorIcon, PhoneIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Quantico Military Realtor | Veterans Realtor Northern Virginia Serving Marines",
  description: "🇺🇸 Veterans realtor Northern Virginia specializing in Marine Corps families at Quantico. Military veteran providing expert PCS moves, VA loans, emergency relocations for Marines.",
  keywords: "quantico marine realtor, veterans realtor northern virginia, quantico marine real estate agent, marine realtor virginia, quantico military housing realtor, marine corps quantico realtor, quantico marine base realtor",
  openGraph: {
    title: "Quantico Marine Realtor | Veterans Realtor Northern Virginia",
    description: "Quantico Marine realtor specializing in Marine Corps families. Veterans realtor Northern Virginia serving Marines with PCS moves, VA loans.",
    url: "https://pbrealtynova.com/bases/quantico",
  },
};

export default function QuanticoPage() {
  const nearbyAreas = [
    "Stafford County",
    "Woodbridge",
    "Dumfries",
    "Triangle",
    "Fredericksburg",
    "Prince William County",
    "Dale City",
    "Occoquan"
  ];

  const commuteData = [
    { area: "Stafford County", time: "15 min", distance: "10 miles" },
    { area: "Woodbridge", time: "20 min", distance: "15 miles" },
    { area: "Dumfries", time: "12 min", distance: "8 miles" },
    { area: "Triangle", time: "8 min", distance: "5 miles" },
    { area: "Fredericksburg", time: "25 min", distance: "18 miles" },
    { area: "Dale City", time: "25 min", distance: "20 miles" }
  ];

  const services = [
    {
      icon: ShieldCheckIcon,
      title: "Marine Corps Expertise",
      description: "Deep understanding of Marine Corps culture, deployment cycles, and the unique needs of Marine families during PCS moves."
    },
    {
      icon: HomeIcon,
      title: "Quantico Area Specialist",
      description: "Expert knowledge of Quantico area neighborhoods, schools, and communities that support Marine families and military lifestyle."
    },
    {
      icon: CalculatorIcon,
      title: "VA Loan Mastery",
      description: "Specialized expertise in VA loan benefits for Marines, including competitive rates and zero down payment options."
    },
    {
      icon: ClockIcon,
      title: "Deployment-Friendly Service",
      description: "Flexible scheduling and remote transaction capabilities to accommodate deployment schedules and training exercises."
    }
  ];


  const quanticoFeatures = [
    {
      title: "Historic Marine Base",
      description: "Home to Marine Corps University, FBI Academy, and DEA Training Academy"
    },
    {
      title: "Growing Community",
      description: "Rapidly expanding area with new housing developments and family amenities"
    },
    {
      title: "Commuter Access",
      description: "Strategic location between Washington DC and Richmond with good highway access"
    },
    {
      title: "Military Family Focus",
      description: "Strong military community with excellent schools and family support services"
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
              🇺🇸 Quantico Military Realtor Serving Marines
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              <strong>Honoring All Who Serve!</strong> Veterans realtor Northern Virginia proudly serving Marine families at Quantico.
              Expert Marine PCS relocations, emergency orders, VA loans, and military housing solutions for Marine families.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Free Quantico Home Guide
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

      {/* Marine Corps Specialist Section */}
      <section className="py-16 bg-blue-50 border-y-4 border-blue-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-6">
              <div className="text-6xl">🇺🇸</div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Why Choose a Veteran Who Serves Marine Families?
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-8 border-blue-600">
              <p className="text-lg text-gray-700 mb-4">
                <strong>"Honoring All Military Service."</strong> As a military veteran and your dedicated Quantico Marine Base realtor, 
                I understand Marine Corps values, deployment cycles, and the unique challenges Marine families face as your dedicated Quantico Marine realtor.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl mb-2">⚡</div>
                  <h3 className="font-bold text-gray-900">Emergency Response</h3>
                  <p className="text-sm text-gray-600">24-48 hour response for urgent Marine orders</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🏠</div>
                  <h3 className="font-bold text-gray-900">Marine Family Homes</h3>
                  <p className="text-sm text-gray-600">Houses that fit Marine Corps lifestyle & budget</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🎖️</div>
                  <h3 className="font-bold text-gray-900">Honor & Integrity</h3>
                  <p className="text-sm text-gray-600">Service with Marine Corps values</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantico Overview */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Quantico Marine Realtor Expertise
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Marine Corps Base Quantico is home to over 12,000 Marines, sailors, and civilian personnel. 
              Known as the &ldquo;Crossroads of the Marine Corps,&rdquo; finding the right home near base requires specialized local knowledge.
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

      {/* Quantico Area Features */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose the Quantico Area?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Quantico offers a unique combination of military heritage, growing communities, and strategic location.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {quanticoFeatures.map((feature) => (
                <div key={feature.title} className="bg-white p-6 shadow-lg rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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
              Quantico Area Commute Times
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Strategic housing location planning for your daily commute to Marine Corps Base Quantico.
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
                      <span className="text-sm text-gray-600">{area.time} to Quantico</span>
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
              Free Quantico Area Marine Home Guide
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get your comprehensive guide to buying a home near Quantico Marine Base. Includes area insights, 
              school ratings, commute information, and VA loan tips specifically for Marine families.
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
                <option value="" className="text-gray-900">Select Your Status</option>
                <option value="active-duty" className="text-gray-900">Active Duty Marine</option>
                <option value="reserve" className="text-gray-900">Marine Reserve</option>
                <option value="veteran" className="text-gray-900">Marine Veteran</option>
                <option value="civilian" className="text-gray-900">DoD Civilian</option>
                <option value="family" className="text-gray-900">Military Family</option>
              </select>
              <button
                type="submit"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                🇺🇸 Get Free Marine Home Guide
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
              Popular Areas Near Quantico
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore Marine-friendly communities within commuting distance of Quantico Marine Base.
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
              Explore all Virginia locations <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Marine Emergency Contact */}
      <section className="bg-red-800 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center mb-6">
              <div className="text-4xl">🇺🇸</div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Serve Your Real Estate Mission?
            </h2>
            <p className="mt-6 text-lg leading-8 text-red-100">
              Whether you're PCSing to Quantico, receiving emergency orders, or ready to buy your first home as a Marine, 
              your dedicated military veteran realtor is standing by to serve your family.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+1-703-477-2606"
                className="flex items-center gap-3 rounded-md bg-white px-6 py-4 text-lg font-bold text-red-800 shadow-sm hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                <PhoneIcon className="h-6 w-6" />
                Call Your Veteran Realtor: (703) 477-2606
              </a>
            </div>
            
            <div className="mt-8 p-6 bg-red-700 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">⚡ Emergency Marine Orders?</h3>
              <p className="text-red-100 mb-4">Got last-minute orders? Don't stress - we handle emergency real estate situations for Marines daily.</p>
              <Link 
                href="/emergency-pcs"
                className="inline-flex items-center rounded-md bg-yellow-400 px-4 py-2 text-sm font-bold text-red-800 hover:bg-yellow-300"
              >
                🚨 Emergency PCS Help
              </Link>
            </div>
            
            <div className="mt-8 text-center text-red-100">
              <p className="font-semibold">🎖️ "Your Service Deserves Our Best Service" 🎖️</p>
              <p className="text-sm mt-2">Military veteran proudly serving Marine Corps families at Quantico</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}