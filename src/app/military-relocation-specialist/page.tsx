import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, CheckCircleIcon, TruckIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Military Relocation Specialist Northern Virginia | Relocation Realtor | PCS Expert",
  description: "🎖️ Military relocation specialist and relocation realtor in Northern Virginia. Expert PCS moves, emergency relocations, military relocation real estate agent services. Call (703) 477-2606.",
  keywords: "military relocation specialist, relocation realtor, military relocation real estate agent, military relocation realtor, relocation specialist, relocation real estate agent, realtor military relocation specialist, relocation specialist realtor, military relocation",
  openGraph: {
    title: "Military Relocation Specialist Northern Virginia | Relocation Realtor",
    description: "Expert military relocation specialist providing comprehensive PCS and emergency relocation services in Northern Virginia.",
    url: "https://pbrealtynova.com/military-relocation-specialist",
  },
  alternates: {
    canonical: "https://pbrealtynova.com/military-relocation-specialist",
  },
};

export default function MilitaryRelocationSpecialistPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-base font-medium text-white backdrop-blur-sm">
                🎖️ Military Relocation Specialist • Relocation Realtor • PCS Expert
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Military Relocation Specialist Northern Virginia
            </h1>
            <h2 className="text-2xl font-semibold mt-4 text-blue-100">
              Expert Relocation Realtor | Military Relocation Real Estate Agent
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              As a military relocation specialist in Northern Virginia, I provide relocation real estate services for PCS moves, emergency relocations, and military family transitions. Fellow veteran and licensed military relocation real estate professional.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-lg hover:bg-blue-50 transition-colors"
              >
                🚚 Get Relocation Specialist Help
              </Link>
              <a
                href="tel:+1-703-477-2606"
                className="flex items-center gap-2 text-base font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                <PhoneIcon className="h-6 w-6" />
                Call Relocation Specialist: (703) 477-2606
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Relocation Expertise */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Makes a Military Relocation Specialist Different?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              As a military relocation specialist, I have training in the requirements of military moves. From emergency PCS orders to deployment relocations, I provide specialized relocation real estate services.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="bg-blue-50 rounded-lg p-8 shadow-lg">
                <TruckIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Relocation Specialist Expertise
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Emergency PCS relocations with compressed timelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Cross-country military family relocations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Deployment and TDY relocation coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Military housing and BAH optimization strategies</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-8 shadow-lg">
                <ShieldCheckIcon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Military Relocation Services
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>PCS timeline coordination with military orders</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Remote closing coordination during deployments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Military family housing needs assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>VA loan coordination and benefit optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Military Relocations */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Military Relocation Types We Handle
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              As your military relocation specialist, I handle all types of military moves with expertise and precision.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🚀</span>
                <h3 className="text-xl font-semibold text-gray-900">Emergency PCS Moves</h3>
              </div>
              <p className="text-gray-600 mb-4">Rapid response for urgent military relocations with compressed timelines. Expert coordination for emergency orders and quick closings.</p>
              <Link href="/emergency-pcs" className="text-blue-600 hover:text-blue-500 font-medium">Learn more →</Link>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📅</span>
                <h3 className="text-xl font-semibold text-gray-900">Standard PCS Relocations</h3>
              </div>
              <p className="text-gray-600 mb-4">Comprehensive planning and execution for standard PCS moves with full timeline coordination and military order alignment.</p>
              <Link href="/pcs-timeline" className="text-blue-600 hover:text-blue-500 font-medium">Learn more →</Link>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">✈️</span>
                <h3 className="text-xl font-semibold text-gray-900">Deployment Relocations</h3>
              </div>
              <p className="text-gray-600 mb-4">Property management and real estate coordination during deployments. Keep your relocation on track while serving overseas.</p>
              <Link href="/deployment-property-management" className="text-blue-600 hover:text-blue-500 font-medium">Learn more →</Link>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏠</span>
                <h3 className="text-xl font-semibold text-gray-900">Retirement Relocations</h3>
              </div>
              <p className="text-gray-600 mb-4">Specialized support for military retirement relocations, helping you transition to civilian life with the perfect home.</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-500 font-medium">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Relocation Specialist Service Areas
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Military relocation specialist serving all Northern Virginia military bases and surrounding communities.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Link href="/bases/fort-belvoir" className="group relative flex flex-col items-center p-8 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors shadow-lg">
              <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Fort Belvoir</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">Licensed to provide relocation services in the Fort Belvoir area</p>
            </Link>
            <Link href="/bases/pentagon" className="group relative flex flex-col items-center p-8 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors shadow-lg">
              <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Pentagon</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">Licensed to provide relocation services in DC area and Metro accessible locations</p>
            </Link>
            <Link href="/bases/quantico" className="group relative flex flex-col items-center p-8 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors shadow-lg">
              <ShieldCheckIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Quantico</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">Licensed to provide relocation services in the Quantico Marine Base area</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready for Expert Military Relocation Support?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Contact your military relocation specialist in Northern Virginia today. Get the expert relocation realtor services your military move deserves.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-lg hover:bg-blue-50 transition-colors"
              >
                🎖️ Schedule Relocation Consultation
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