import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PhoneIcon, MapPinIcon, ShieldCheckIcon, HomeIcon, DocumentTextIcon, CalculatorIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Home() {
  const testimonials = [
    {
      content: "Made our PCS move from Fort Hood to Fort Belvoir seamless. Understanding military life made all the difference.",
      author: "SSG Johnson",
      location: "Fort Belvoir",
      branch: "Army"
    },
    {
      content: "Helped us use our VA loan benefits properly and found the perfect home near Quantico within our BAH.",
      author: "Capt. Rodriguez",
      location: "Quantico",
      branch: "Marines"
    },
    {
      content: "Professional, knowledgeable, and truly understands military families. Made selling our Alexandria home easy.",
      author: "Lt. Thompson",
      location: "Alexandria",
      branch: "Navy"
    }
  ];

  const features = [
    {
      icon: ShieldCheckIcon,
      title: "Military Expertise",
      description: "Veteran-owned with deep understanding of PCS moves, deployment challenges, and military life."
    },
    {
      icon: HomeIcon,
      title: "VA Loan Specialist",
      description: "Expert in VA loan benefits, zero down payment options, and military housing allowances."
    },
    {
      icon: MapPinIcon,
      title: "Local Knowledge",
      description: "Intimate knowledge of Fort Belvoir, Pentagon, and Quantico areas with base proximity insights."
    },
    {
      icon: DocumentTextIcon,
      title: "PCS Timeline Expert",
      description: "Coordinating real estate transactions with military orders and deployment schedules."
    }
  ];

  const locations = [
    "Fort Belvoir Area",
    "Pentagon Region",
    "Quantico Marine Base",
    "Fairfax County",
    "Alexandria",
    "Arlington",
    "Loudoun County",
    "Prince William County",
    "Stafford County",
    "Fredericksburg"
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Northern Virginia Military Realtor
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Expert real estate services for military families at Fort Belvoir, Pentagon, and Quantico. 
              Specializing in PCS relocations, VA loans, and military housing solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Free PCS Guide
              </Link>
              <a
                href="tel:+1-555-MILITARY"
                className="flex items-center gap-2 text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                <PhoneIcon className="h-5 w-5" />
                Call (555) MILITARY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose a Military Real Estate Specialist?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Understanding military life, PCS timelines, and VA loan benefits makes all the difference in your real estate experience.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-blue-900" aria-hidden="true" />
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

      {/* Service Areas */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Serving Military Families Throughout Northern Virginia
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert knowledge of military communities near major installations and commuter-friendly neighborhoods.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {locations.map((location) => (
              <div key={location} className="flex items-center justify-center rounded-lg bg-blue-50 px-6 py-4">
                <span className="text-sm font-semibold text-blue-900">{location}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/locations"
              className="text-sm font-semibold text-blue-900 hover:text-blue-700"
            >
              View all service areas <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Free Military PCS Real Estate Guide
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get your comprehensive guide to buying or selling during a PCS move. Includes VA loan tips, 
              timeline checklists, and Northern Virginia area insights.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-md lg:mx-0">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-white"
              />
              <select className="flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white">
                <option value="" className="text-gray-900">Select Your Base</option>
                <option value="fort-belvoir" className="text-gray-900">Fort Belvoir</option>
                <option value="pentagon" className="text-gray-900">Pentagon</option>
                <option value="quantico" className="text-gray-900">Quantico Marine Base</option>
                <option value="other" className="text-gray-900">Other/Not Military</option>
              </select>
              <button
                type="submit"
                className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get Free Guide
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Military Families Say
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
                <p className="text-gray-600 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.branch} • {testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Resources */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Military Real Estate Resources
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Link href="/va-loan-calculator" className="group relative flex flex-col items-center p-8 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <CalculatorIcon className="h-8 w-8 text-blue-900 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">VA Loan Calculator</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">Calculate your buying power with VA loan benefits</p>
            </Link>
            <Link href="/pcs-timeline" className="group relative flex flex-col items-center p-8 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <DocumentTextIcon className="h-8 w-8 text-blue-900 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">PCS Timeline Guide</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">Step-by-step real estate timeline for military moves</p>
            </Link>
            <Link href="/bah-housing" className="group relative flex flex-col items-center p-8 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <HomeIcon className="h-8 w-8 text-blue-900 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">BAH Housing Guide</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">Find homes within your housing allowance</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}