import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PhoneIcon, CheckCircleIcon, AcademicCapIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Military Relocation Professional Northern Virginia | MRP Certified Agent",
  description: "🎖️ Military Relocation Professional (MRP) certified agent in Northern Virginia. Expert PCS relocations, VA loans, and military family real estate services. Call (703) 477-2606.",
  keywords: "military relocation professional, military relocation professional northern virginia, MRP certified, military relocation specialist, military relocation real estate agent, PCS relocation services",
  openGraph: {
    title: "Military Relocation Professional Northern Virginia | MRP Certified",
    description: "Certified Military Relocation Professional (MRP) providing expert real estate services for military families in Northern Virginia. PCS moves, VA loans, deployment assistance.",
    url: "https://pbrealtynova.com/military-relocation-professional",
  },
  alternates: {
    canonical: "https://pbrealtynova.com/military-relocation-professional",
  },
};

export default function MilitaryRelocationProfessionalPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-base font-medium text-white backdrop-blur-sm">
                🎖️ MRP Certified • Veteran Owned • Military Relocation Expert
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Military Relocation Professional Northern Virginia
            </h1>
            <h2 className="text-2xl font-semibold mt-4 text-blue-100">
              MRP Certified Agent | Veterans Real Estate Specialist
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              As a certified Military Relocation Professional (MRP) in Northern Virginia, I provide specialized real estate services designed specifically for military families. From emergency PCS moves to deployment coordination, I understand your unique challenges because I've lived them.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-lg hover:bg-blue-50 transition-colors"
              >
                🏠 Get MRP Consultation
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

      {/* MRP Certification Details */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What is a Military Relocation Professional (MRP)?
            </h2>
            <div className="mt-8 flex justify-center">
              <Image
                className="h-32 w-auto rounded-lg shadow-lg"
                src="/photos/mrp.png"
                alt="Military Relocation Professional (MRP) Certification - NAR Certified Military Relocation Professional"
                width={200}
                height={128}
                loading="lazy"
              />
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Military Relocation Professional (MRP) certification is awarded by the National Association of REALTORS® to agents who complete specialized training in military relocations and demonstrate expertise in serving military families.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="bg-blue-50 rounded-lg p-8 shadow-lg">
                <AcademicCapIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  MRP Certification Requirements
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Complete NAR Military Relocation Professional course</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Pass comprehensive examination on military real estate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Demonstrate active service to military clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Maintain continuing education in military real estate</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-8 shadow-lg">
                <ShieldCheckIcon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Specialized Military Knowledge
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>VA loan processes and benefit optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>PCS timeline coordination and emergency moves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Military pay structures (BAH, BAS, Family Sep Pay)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>Deployment and TDY real estate coordination</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Military Branches Served */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Serving All Military Branches in Northern Virginia
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              As a Military Relocation Professional, I understand the unique needs of each service branch and provide tailored support.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <span className="text-2xl">🪖</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Army</h3>
              <p className="mt-2 text-sm text-gray-600">Fort Belvoir specialists with deep base knowledge</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <span className="text-2xl">⚓</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Navy</h3>
              <p className="mt-2 text-sm text-gray-600">Pentagon and DC area Navy personnel support</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <span className="text-2xl">🦅</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Marines</h3>
              <p className="mt-2 text-sm text-gray-600">Quantico Marine Corps Base expertise</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <span className="text-2xl">✈️</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Air Force</h3>
              <p className="mt-2 text-sm text-gray-600">Pentagon Air Force personnel relocations</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Space Force</h3>
              <p className="mt-2 text-sm text-gray-600">Newest branch, full support and understanding</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <span className="text-2xl">⛵</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Coast Guard</h3>
              <p className="mt-2 text-sm text-gray-600">DC area Coast Guard family support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Veteran Background */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Veteran-to-Veteran Service
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                As a fellow veteran, I don't just understand military relocations professionally—I've lived them personally. From my own PCS moves to understanding the stress of deployment, I bring authentic military experience to every client relationship.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Personal military service experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Understanding of military culture and values</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Proven track record serving military families</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Commitment to military community support</span>
                </div>
              </div>
            </div>
            <div className="lg:pl-8">
              <Image
                className="w-full rounded-lg shadow-xl"
                src="/photos/house-key-door.jpg"
                alt="Military family homeownership success - Military Relocation Professional Northern Virginia"
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
              Ready for Expert Military Relocation Support?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Contact your certified Military Relocation Professional in Northern Virginia today. Get the specialized service your military service deserves.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-lg hover:bg-blue-50 transition-colors"
              >
                🎖️ Schedule MRP Consultation
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