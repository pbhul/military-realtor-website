import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, CheckCircleIcon, HomeIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "MRP Realtor Northern Virginia | Military Relocation Professional Certified",
  description: "🎖️ MRP realtor Northern Virginia - Military Relocation Professional certified agent specializing in PCS moves, VA loans, and military family relocations. Call (703) 477-2606.",
  keywords: "mrp realtor, mrp realtor northern virginia, military relocation professional, MRP certified realtor, military relocation specialist, veterans realtor northern virginia",
  openGraph: {
    title: "MRP Realtor Northern Virginia | Military Relocation Professional",
    description: "Military Relocation Professional (MRP) certified realtor specializing in military family relocations, PCS moves, and VA loans in Northern Virginia.",
    url: "https://pbrealtynova.com/mrp-realtor",
  },
  alternates: {
    canonical: "https://pbrealtynova.com/mrp-realtor",
  },
};

export default function MRPRealtorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-base font-medium text-white backdrop-blur-sm">
                🎖️ MRP Certified • Military Relocation Professional • Call (703) 477-2606
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              MRP Realtor Northern Virginia
            </h1>
            <h2 className="text-2xl font-semibold mt-4 text-blue-100">
              Military Relocation Professional Certified Agent
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              As an MRP realtor in Northern Virginia, I provide specialized Military Relocation Professional services for PCS moves, emergency relocations, and VA loan assistance. Fellow veteran serving Fort Belvoir, Pentagon, and Quantico military families.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-lg hover:bg-blue-50 transition-colors"
              >
                🏠 Schedule MRP Consultation
              </Link>
              <a
                href="tel:+1-703-477-2606"
                className="flex items-center gap-2 text-base font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                <PhoneIcon className="h-6 w-6" />
                Call MRP Realtor: (703) 477-2606
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MRP Certification Section */}
      <section className="py-24 sm:py-32 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Makes an MRP Realtor Different?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Military Relocation Professional (MRP) certification provides specialized training that standard real estate agents don't receive. As your MRP realtor, I understand the unique challenges military families face.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  🎖️ MRP Specialized Training
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Military pay structures and allowances (BAH, BAS, Family Separation Pay)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>PCS timelines and deployment cycles affecting real estate decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>VA loan expertise including eligibility, limits, and specialized programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Military spouse employment considerations and dual-career challenges</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  🎯 Military-Specific Expertise
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <span>Remote transactions during deployments or TDY assignments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <span>Compressed timelines and emergency PCS relocations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <span>Security clearance impacts on housing choices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <span>Military family life and community integration needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              MRP Realtor Serving Northern Virginia Military Bases
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Specializing in tri-base coverage with expert knowledge of commute patterns, military communities, and base-specific housing needs.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Link href="/bases/fort-belvoir" className="group relative flex flex-col items-center p-8 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors shadow-lg">
              <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Fort Belvoir</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">Army base specialists with deep knowledge of surrounding communities</p>
            </Link>
            <Link href="/bases/pentagon" className="group relative flex flex-col items-center p-8 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors shadow-lg">
              <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Pentagon</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">DC area expertise with Metro access and urban living insights</p>
            </Link>
            <Link href="/bases/quantico" className="group relative flex flex-col items-center p-8 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors shadow-lg">
              <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Quantico</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">Marine Corps specialists understanding unique Corps culture and needs</p>
            </Link>
          </div>
        </div>
      </section>

      {/* MRP Services */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Military Relocation Professional Services
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex flex-col p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🚀 Emergency PCS Services</h3>
              <p className="text-gray-600 mb-4">Rapid response for emergency PCS orders with compressed timelines. I understand the urgency and can coordinate fast closings.</p>
              <Link href="/emergency-pcs" className="text-blue-600 hover:text-blue-500 font-medium">Learn more →</Link>
            </div>
            <div className="flex flex-col p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">🏠 VA Loan Expertise</h3>
              <p className="text-gray-600 mb-4">Complete VA loan guidance from pre-approval to closing. I work with military-friendly lenders who understand your benefits.</p>
              <Link href="/va-loan-guidance" className="text-blue-600 hover:text-blue-500 font-medium">Learn more →</Link>
            </div>
            <div className="flex flex-col p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">✈️ Deployment Management</h3>
              <p className="text-gray-600 mb-4">Property management and real estate coordination during deployments. Keep your home sale/purchase on track while deployed.</p>
              <Link href="/deployment-property-management" className="text-blue-600 hover:text-blue-500 font-medium">Learn more →</Link>
            </div>
            <div className="flex flex-col p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📅 PCS Timeline Coordination</h3>
              <p className="text-gray-600 mb-4">Strategic planning to align your real estate timeline with military orders. No surprises, just smooth transitions.</p>
              <Link href="/pcs-timeline" className="text-blue-600 hover:text-blue-500 font-medium">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Work with an MRP Realtor?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get the specialized military relocation expertise you deserve. Call your Northern Virginia MRP realtor today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-lg hover:bg-blue-50 transition-colors"
              >
                🎖️ Schedule Consultation
              </Link>
              <a
                href="tel:+1-703-477-2606"
                className="flex items-center gap-2 text-base font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                <PhoneIcon className="h-6 w-6" />
                Call (703) 477-2606
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}