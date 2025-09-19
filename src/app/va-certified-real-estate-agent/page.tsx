import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, CheckCircleIcon, HomeIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "VA Certified Real Estate Agent Northern Virginia | VA Real Estate Agent Lookup",
  description: "🎖️ VA certified real estate agent in Northern Virginia. VA real estate agent lookup specialist for veterans and military families. Expert VA loan guidance and veterans real estate services.",
  keywords: "va certified real estate agent, va real estate agent lookup, veterans real estate, real estate for veterans, va loan specialist, veterans real estate agent, military real estate agent, va certified realtor",
  openGraph: {
    title: "VA Certified Real Estate Agent Northern Virginia | Veterans Specialist",
    description: "Certified VA real estate agent providing expert veterans real estate services and VA loan guidance in Northern Virginia.",
    url: "https://pbrealtynova.com/va-certified-real-estate-agent",
  },
  alternates: {
    canonical: "https://pbrealtynova.com/va-certified-real-estate-agent",
  },
};

export default function VACertifiedRealEstateAgentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-base font-medium text-white backdrop-blur-sm">
                🎖️ VA Certified • Veterans Real Estate • VA Loan Specialist
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              VA Certified Real Estate Agent Northern Virginia
            </h1>
            <h2 className="text-2xl font-semibold mt-4 text-blue-100">
              VA Real Estate Agent Lookup | Veterans Real Estate Specialist
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              VA certified real estate agent specializing in veterans real estate and real estate for veterans in Northern Virginia. VA loan guidance, military relocations, and veterans real estate services from a fellow veteran and licensed professional.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-lg hover:bg-blue-50 transition-colors"
              >
                🏠 Get VA Agent Consultation
              </Link>
              <a
                href="tel:+1-703-477-2606"
                className="flex items-center gap-2 text-base font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                <PhoneIcon className="h-6 w-6" />
                Call VA Agent: (703) 477-2606
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VA Certification Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Does VA Certified Real Estate Agent Mean?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              As a VA certified real estate agent, I have specialized training and certification to work with veterans and military families on VA loan transactions and veterans real estate needs.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="bg-blue-50 rounded-lg p-8 shadow-lg">
                <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  VA Certification Benefits
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Specialized VA loan process training and expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Understanding of veterans real estate benefits and programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Network of VA-approved lenders and professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Military and veteran community connections</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-8 shadow-lg">
                <HomeIcon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Veterans Real Estate Services
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>VA loan pre-approval and qualification assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Real estate for veterans purchasing guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>VA loan benefit optimization strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Post-service transition real estate planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VA Loan Expertise */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              VA Loan Specialist Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              As your VA certified real estate agent, I provide comprehensive VA loan guidance and veterans real estate support throughout your home buying journey.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📋</span>
                <h3 className="text-xl font-semibold text-gray-900">VA Loan Pre-Approval</h3>
              </div>
              <p className="text-gray-600 mb-4">Complete VA loan pre-approval assistance including eligibility verification, benefit calculations, and lender connections.</p>
              <Link href="/va-loan-guidance" className="text-blue-600 hover:text-blue-500 font-medium">Learn more →</Link>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💰</span>
                <h3 className="text-xl font-semibold text-gray-900">VA Loan Benefits</h3>
              </div>
              <p className="text-gray-600 mb-4">Expert guidance on VA loan benefits including no down payment, no PMI, competitive rates, and reusability options.</p>
              <Link href="/va-loan-calculator" className="text-blue-600 hover:text-blue-500 font-medium">Learn more →</Link>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏠</span>
                <h3 className="text-xl font-semibold text-gray-900">Veterans Real Estate</h3>
              </div>
              <p className="text-gray-600 mb-4">Specialized real estate for veterans including military-friendly communities, schools, and veteran-owned business areas.</p>
              <Link href="/military-communities" className="text-blue-600 hover:text-blue-500 font-medium">Learn more →</Link>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📍</span>
                <h3 className="text-xl font-semibold text-gray-900">VA Real Estate Agent Lookup</h3>
              </div>
              <p className="text-gray-600 mb-4">Contact your VA certified real estate agent for veterans real estate services and VA loan support in Northern Virginia.</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-500 font-medium">Contact →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Veterans Community */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Veteran-to-Veteran Real Estate Service
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                As a fellow veteran and VA certified real estate agent, I understand your unique needs and challenges. From VA loan benefits to military community preferences, I provide veterans real estate services with authentic military understanding.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Personal military service and veteran experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">VA certified real estate agent with ongoing education</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Network of veteran-friendly professionals and services</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Commitment to serving our veteran community</span>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <Image
                className="w-full rounded-lg shadow-xl"
                src="/photos/house-key-door.jpg"
                alt="Veterans real estate success - VA certified real estate agent Northern Virginia"
                width={600}
                height={400}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready for Expert VA Real Estate Support?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Contact your VA certified real estate agent in Northern Virginia today. Get the specialized veterans real estate services and VA loan expertise you deserve.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-lg hover:bg-blue-50 transition-colors"
              >
                🎖️ Schedule VA Agent Consultation
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