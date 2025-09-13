import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheckIcon, HomeIcon, PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Veterans Realtor Northern Virginia | Veteran Real Estate Agent | Military Specialist",
  description: "🎖️ Veterans realtor serving Northern Virginia military families. Fellow veteran and MRP certified real estate agent specializing in PCS moves, VA loans, military relocations.",
  keywords: "veterans realtor, veteran real estate agent, military real estate agent, northern virginia veterans realtor, realtors near me, military realtor",
  openGraph: {
    title: "Veterans Realtor Northern Virginia | Veteran Real Estate Agent",
    description: "Veterans realtor and fellow service member specializing in military real estate in Northern Virginia.",
    url: "https://www.pbrealtynova.com/veterans-realtor",
  },
};

export default function VeteransRealtor() {
  const veteranBenefits = [
    {
      icon: ShieldCheckIcon,
      title: "Fellow Veteran Understanding",
      description: "Having served our country, I understand military life, deployment challenges, and the unique needs of veteran families."
    },
    {
      icon: HomeIcon,
      title: "VA Loan Expertise", 
      description: "Deep knowledge of VA loan benefits, eligibility, and process - helping fellow veterans maximize their earned benefits."
    },
    {
      icon: CheckCircleIcon,
      title: "Military Relocation Professional",
      description: "MRP certified with specialized training in military relocations, PCS moves, and veteran real estate needs."
    }
  ];

  const services = [
    "PCS Relocation Assistance",
    "VA Loan Guidance & Pre-Approval", 
    "First-Time Homebuyer Education",
    "Investment Property Analysis",
    "Deployment Real Estate Management",
    "Military Community Insights",
    "BAH Optimization Strategies",
    "Remote Transaction Capabilities"
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8">
              <Image
                className="h-32 w-32 rounded-full object-cover border-4 border-white mx-auto"
                src="/photos/Headshot.png"
                alt="Veterans Realtor - Northern Virginia Military Real Estate Specialist"
                width={128}
                height={128}
                priority
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Veterans Realtor Northern Virginia
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Fellow veteran and MRP certified real estate agent serving military families in Northern Virginia. 
              From one service member to another - I've got your six in real estate.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-lg hover:bg-blue-50"
              >
                🎖️ Work with Fellow Veteran
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

      {/* Veteran Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-red-50 to-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
                From Service Member to Veterans Realtor
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p className="text-lg leading-8 mb-6">
                  As a Military Relocation Professional (MRP) and fellow veteran, I bring more than just real estate expertise—I bring firsthand understanding of the military lifestyle. Having served on active duty myself, I know the demands of PCS moves, the complexities of VA loans, and the unique challenges military families face when relocating.
                </p>
                <p className="text-lg leading-8 mb-6">
                  Now, as a veterans realtor, my mission is simple: to serve as a true asset and trusted guide throughout your transition. I'm not here to focus on a single transaction—I'm here to build lasting relationships, provide clarity, and ensure you feel supported every step of the way. You can count on me to listen, understand, and get the job done with the same dedication and integrity that defined my military service.
                </p>
                <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
                  <p className="font-semibold text-gray-900 mb-2">🎖️ My Commitment to Fellow Veterans:</p>
                  <p>"Your service deserves the best service. As your veterans realtor, I'll provide the same level of dedication you showed our country - focused, reliable, and always mission-first."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose a Veterans Realtor */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose a Veterans Realtor?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The difference between working with any realtor and working with a fellow veteran who truly understands your journey.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {veteranBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="rounded-full bg-blue-100 p-3 mb-6 w-fit">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veteran Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Veteran-Focused Real Estate Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Specialized services designed for veterans, active military, and their families.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircleIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Military Areas Served */}
      <section className="py-24 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Serving Veterans Throughout Northern Virginia
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert knowledge of military communities and veteran-friendly neighborhoods near major installations.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/bases/fort-belvoir" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🏰 Fort Belvoir Area</h3>
              <p className="text-gray-600 mb-4">Alexandria, Springfield, Burke, Woodbridge communities</p>
              <span className="text-blue-600 font-medium">View Fort Belvoir Info →</span>
            </Link>

            <Link href="/bases/pentagon" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🏛️ Pentagon Area</h3>
              <p className="text-gray-600 mb-4">Arlington, Crystal City, Alexandria, Metro access</p>
              <span className="text-blue-600 font-medium">View Pentagon Info →</span>
            </Link>

            <Link href="/bases/quantico" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🦅 Quantico Area</h3>
              <p className="text-gray-600 mb-4">Woodbridge, Stafford, Triangle, Dale City</p>
              <span className="text-blue-600 font-medium">View Quantico Info →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Veteran Resources */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Veterans Real Estate Resources
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            <Link href="/va-loan-guidance" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <HomeIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">VA Loan Guidance</h3>
              <p className="text-gray-600 mb-4">Complete guide to VA loan benefits and process</p>
              <span className="text-blue-600 font-medium">Learn More →</span>
            </Link>

            <Link href="/va-loan-calculator" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircleIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">VA Loan Calculator</h3>
              <p className="text-gray-600 mb-4">Calculate your monthly payments with VA benefits</p>
              <span className="text-blue-600 font-medium">Use Calculator →</span>
            </Link>

            <Link href="/military-resources" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <ShieldCheckIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Military Resources</h3>
              <p className="text-gray-600 mb-4">Comprehensive resources for military families</p>
              <span className="text-blue-600 font-medium">View Resources →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Work with a Fellow Veteran?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Experience the difference of working with a veterans realtor who truly understands your military journey.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Connect with Veterans Realtor
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