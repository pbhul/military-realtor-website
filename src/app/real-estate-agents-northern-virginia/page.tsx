import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StarIcon, CheckCircleIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Real Estate Agents Northern Virginia | Veterans Realtor | Military Specialist",
  description: "🎖️ Top-rated real estate agents in Northern Virginia. Veterans realtor specializing in military families, PCS moves, VA loans. Serving Fort Belvoir, Pentagon, Quantico areas.",
  keywords: "real estate agents northern virginia, veterans realtor, military real estate agent, northern virginia realtor, realtors near me, veteran real estate agent",
  openGraph: {
    title: "Real Estate Agents Northern Virginia | Veterans Realtor | Military Specialist",
    description: "Top-rated real estate agents in Northern Virginia. Veterans realtor specializing in military families and PCS moves.",
    url: "https://www.pbrealtynova.com/real-estate-agents-northern-virginia",
  },
};

export default function RealEstateAgentsNorthernVirginia() {
  const serviceAreas = [
    "Alexandria", "Arlington", "Fairfax County", "Loudoun County", 
    "Prince William County", "Stafford County", "Falls Church", "Vienna",
    "Reston", "Herndon", "Woodbridge", "Springfield", "Burke", "Annandale"
  ];

  const militaryBases = [
    { name: "Fort Belvoir", distance: "Serving surrounding areas", link: "/bases/fort-belvoir" },
    { name: "Pentagon", distance: "Metro accessible areas", link: "/bases/pentagon" },
    { name: "Quantico Marine Base", distance: "Prince William County", link: "/bases/quantico" }
  ];

  const testimonials = [
    {
      name: "SSG Michael R.",
      branch: "Army",
      text: "Outstanding service during our PCS move. Understood military timelines and made the process smooth."
    },
    {
      name: "CPT Sarah M.", 
      branch: "Marine Corps",
      text: "As a fellow veteran, they truly understood our needs. Best realtor experience we've had."
    },
    {
      name: "TSgt David L.",
      branch: "Air Force", 
      text: "Expert knowledge of VA loans and military benefits. Saved us thousands on our home purchase."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Real Estate Agents Northern Virginia
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Veterans realtor and military real estate agent specializing in Northern Virginia. 
              MRP certified with expert knowledge of PCS moves, VA loans, and military family needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-lg hover:bg-blue-50"
              >
                🎖️ Work with Veterans Realtor
              </Link>
              <a
                href="tel:+1-703-477-2606"
                className="flex items-center gap-2 text-base font-semibold leading-6 text-white hover:text-blue-100"
              >
                <PhoneIcon className="h-6 w-6" />
                Call (703) 477-2606
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Real Estate Agents?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              As veterans and military real estate specialists, we understand your unique needs and provide unmatched service.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="rounded-full bg-blue-100 p-3 mb-4">
                <CheckCircleIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Veterans Realtor</h3>
              <p className="text-gray-600">
                Fellow veteran who served our country and understands military life, PCS moves, and deployment challenges firsthand.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="rounded-full bg-green-100 p-3 mb-4">
                <StarIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">MRP Certified</h3>
              <p className="text-gray-600">
                Military Relocation Professional certification with specialized training in military relocations and VA loan expertise.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="rounded-full bg-red-100 p-3 mb-4">
                <MapPinIcon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Local Expert</h3>
              <p className="text-gray-600">
                Deep knowledge of Northern Virginia markets, military communities, schools, and base proximity considerations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Northern Virginia Service Areas
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Serving all major communities and military areas throughout Northern Virginia.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area) => (
              <div key={area} className="bg-blue-50 px-4 py-3 rounded-lg text-center">
                <span className="text-sm font-semibold text-blue-900">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Military Bases We Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {militaryBases.map((base) => (
                <Link key={base.name} href={base.link} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{base.name}</h4>
                  <p className="text-gray-600 text-sm">{base.distance}</p>
                  <span className="text-blue-600 text-sm font-medium">View Area Info →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Military Specializations */}
      <section className="py-24 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Military Real Estate Specializations
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🎖️ For Military Families</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>PCS relocation coordination and timing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>VA loan guidance and pre-approval assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>BAH optimization and housing allowance analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Remote transaction capabilities for deployments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Military school district and community insights</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠 Full-Service Real Estate</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Home buying and selling representation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Investment property guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>First-time homebuyer education</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Market analysis and pricing strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Negotiation expertise and contract management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Military Families Say
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div>{testimonial.branch}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Work with Northern Virginia's Top Military Realtor?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get expert guidance from a veterans realtor who understands your military lifestyle and Northern Virginia market.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Start Your Home Search
              </Link>
              <a
                href="tel:+1-703-477-2606"
                className="text-base font-semibold leading-6 text-white hover:text-blue-100"
              >
                Call (703) 477-2606
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}