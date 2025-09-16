import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PhoneIcon, ClockIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Emergency PCS Realtor | Veterans Realtor Northern Virginia | 24-Hour Response",
  description: "🚨 Emergency PCS realtor providing 24-hour response for urgent military orders. Veterans realtor Northern Virginia specializing in last-minute PCS moves and emergency relocations.",
  keywords: "emergency PCS realtor, veterans realtor northern virginia, emergency military relocation realtor, urgent home sale military orders, last minute military move, 24 hour realtor response, emergency military realtor",
  openGraph: {
    title: "🚨 Emergency PCS Realtor | Veterans Realtor Northern Virginia",
    description: "Emergency PCS realtor providing 24-hour response for urgent military orders. Veterans realtor Northern Virginia specializing in emergency relocations.",
    url: "https://pbrealtynova.com/emergency-pcs",
  },
};

export default function EmergencyPCSPage() {
  const emergencyServices = [
    {
      icon: ClockIcon,
      title: "24-48 Hour Response",
      description: "Emergency consultation within 24 hours, action plan within 48 hours for urgent military orders."
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Expedited Home Sales",
      description: "Fast-track your home sale with emergency marketing, priority showings, and rapid negotiation."
    },
    {
      icon: CheckCircleIcon,
      title: "Last-Minute Relocations",
      description: "Complete relocation support for sudden PCS orders, deployments, or emergency transfers."
    }
  ];

  const urgentSituations = [
    "Received PCS orders with less than 60 days notice",
    "Emergency deployment affecting home sale timeline",
    "Last-minute base assignment changes",
    "Family emergency requiring immediate relocation",
    "Sudden change in housing allowance (BAH)",
    "Medical emergency requiring immediate move"
  ];

  return (
    <>
      <Header />
      
      {/* Emergency Hero Section */}
      <section className="relative bg-red-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-6">
              <ExclamationTriangleIcon className="h-16 w-16 text-yellow-300 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              🚨 Emergency PCS Real Estate Services
            </h1>
            <p className="mt-6 text-xl leading-8 text-red-100">
              <strong>Got urgent military orders?</strong> Don't panic. We specialize in emergency real estate 
              situations for military families. 24-48 hour response guaranteed.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+1-703-477-2606"
                className="flex items-center gap-3 rounded-md bg-yellow-400 px-6 py-4 text-lg font-bold text-red-900 shadow-sm hover:bg-yellow-300 transform hover:scale-105 transition-all duration-200"
              >
                <PhoneIcon className="h-6 w-6" />
                CALL NOW: (703) 477-2606
              </a>
              <p className="text-red-100 text-sm">
                📱 Text "URGENT" for priority response<br/>
                ⚡ Fast response for emergency situations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Timeline */}
      <section className="py-16 bg-yellow-50 border-t-4 border-yellow-400">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ⏰ Emergency Response Timeline
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              When every day counts, we move at military speed to protect your interests.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center p-6 bg-white rounded-lg border-2 border-red-200 shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">HOUR 1-4</h3>
                <p className="text-gray-600">Emergency consultation call, situation assessment, immediate action plan development</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg border-2 border-yellow-400 shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">DAY 1-2</h3>
                <p className="text-gray-600">Property evaluation, emergency marketing launch, priority listing activation</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg border-2 border-green-400 shadow-sm">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">DAY 3-7</h3>
                <p className="text-gray-600">Expedited showings, fast-track negotiations, rapid closing coordination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Emergency Military Real Estate Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Specialized services designed for urgent military situations when standard timelines don't work.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {emergencyServices.map((service) => (
                <div key={service.title} className="flex flex-col items-center text-center">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-8 w-8 flex-none text-red-600" aria-hidden="true" />
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

      {/* Urgent Situations */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              🚨 When You Need Emergency Real Estate Help
            </h2>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              If any of these situations apply to you, don't wait - call immediately for emergency assistance:
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {urgentSituations.map((situation, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-red-500 shadow-sm">
                  <ExclamationTriangleIcon className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{situation}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="bg-red-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Don't Face This Emergency Alone
            </h2>
            <p className="mt-6 text-lg leading-8 text-red-100">
              Military families deserve specialized support during urgent situations. 
              We understand the pressure of military timelines and provide priority support for urgent situations.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+1-703-477-2606"
                className="flex items-center gap-3 rounded-md bg-white px-8 py-4 text-xl font-bold text-red-900 shadow-sm hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                <PhoneIcon className="h-8 w-8" />
                (703) 477-2606
              </a>
              <div className="text-center text-red-100">
                <p className="font-semibold">Emergency Response Line</p>
                <p className="text-sm">Priority response for urgent military real estate needs</p>
                <p className="text-sm mt-1">📱 Text "URGENT" for priority callback</p>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-red-800 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">✅ What Happens When You Call:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-red-100">
                <div>• Immediate situation assessment</div>
                <div>• Emergency action plan within 24 hours</div>
                <div>• Priority scheduling for all services</div>
                <div>• Direct line to military specialist</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Other Military Real Estate Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Link href="/bases/quantico" className="p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">Quantico Marine Specialist</h3>
              <p className="text-gray-600 text-sm">Specialized real estate services for Marines and families</p>
            </Link>
            
            <Link href="/va-loan-guidance" className="p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">VA Loan Guidance</h3>
              <p className="text-gray-600 text-sm">Expert help with VA loan process and benefits</p>
            </Link>
            
            <Link href="/services" className="p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">All Military Services</h3>
              <p className="text-gray-600 text-sm">Complete real estate services for military families</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}