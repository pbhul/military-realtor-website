import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircleIcon, DocumentTextIcon, CalculatorIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function VALoanGuidance() {
  const benefits = [
    {
      icon: CheckCircleIcon,
      title: "No Down Payment Required",
      description: "Purchase a home with 0% down payment - no loan limits with full entitlement (eliminated in 2020)"
    },
    {
      icon: CheckCircleIcon,
      title: "No Private Mortgage Insurance",
      description: "Save hundreds monthly by avoiding PMI requirements"
    },
    {
      icon: CheckCircleIcon,
      title: "Competitive Interest Rates",
      description: "Access to some of the best rates available in the market"
    },
    {
      icon: CheckCircleIcon,
      title: "No Prepayment Penalties",
      description: "Pay off your mortgage early without additional fees"
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Get Your Certificate of Eligibility",
      description: "Obtain your COE through VA.gov or we can help you get it quickly"
    },
    {
      step: 2,
      title: "Pre-Approval with VA Lender",
      description: "Connect with our trusted VA-approved lenders for pre-approval"
    },
    {
      step: 3,
      title: "Find Your Home",
      description: "Search military-friendly neighborhoods with your expert agent"
    },
    {
      step: 4,
      title: "VA Appraisal & Inspection",
      description: "Navigate the VA appraisal process and property requirements"
    },
    {
      step: 5,
      title: "Close on Your Home",
      description: "Complete your purchase with VA loan benefits in place"
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              VA Loan Guidance for Military Families
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Expert guidance through your VA loan process from an MRP Certified veteran real estate agent who understands 
              both sides of the transaction. Maximize your military benefits for homeownership.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Get VA Loan Pre-Approval Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VA Loan Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              VA Loan Benefits You&apos;ve Earned
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your military service has earned you access to one of the best home loan programs available.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <benefit.icon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="mt-2 text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VA Loan Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your VA Loan Process, Step by Step
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Navigate the VA loan process with confidence and expert guidance.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {index !== steps.length - 1 && (
                  <div className="absolute left-8 top-16 h-16 w-0.5 bg-gray-200"></div>
                )}
                <div className="flex items-start gap-6 pb-12">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 VA Loan Entitlement */}
      <section className="py-24 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              2025 VA Loan Entitlement - No Limits for First-Time Users
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircleIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">No VA Loan Limits Since 2020!</h3>
                  <p className="text-lg text-gray-600">
                    First-time VA loan users with full entitlement can purchase any home with $0 down payment
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">✅ First-Time VA Loan Users</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>No loan limits</strong> - Purchase any priced home</li>
                      <li>• <strong>$0 down payment</strong> regardless of home price</li>
                      <li>• Full $766,550 entitlement available</li>
                      <li>• No PMI required at any purchase price</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">📋 Conforming Loan Considerations</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 2025 Northern Virginia conforming limit: <strong>$813,635</strong></li>
                      <li>• Loans above conforming limits may require down payment</li>
                      <li>• VA guaranty covers 25% of loan amount</li>
                      <li>• Lender-specific overlays may apply</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <DocumentTextIcon className="h-5 w-5 text-yellow-600 mt-0.5" />
                    </div>
                    <div className="ml-3">
                      <h4 className="text-sm font-semibold text-yellow-800">Important 2025 Update:</h4>
                      <p className="text-sm text-yellow-700 mt-1">
                        <strong>VA loan limits were eliminated in 2020</strong> for borrowers with full entitlement. 
                        First-time VA loan users typically have full entitlement, meaning no loan amount restrictions. 
                        The conforming loan limits only affect down payment requirements for jumbo loans above $813,635 in Northern Virginia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Tools */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              VA Loan Resources & Tools
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <CalculatorIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">VA Loan Calculator</h3>
              <p className="text-gray-600 mb-6">Calculate your monthly payments with VA loan benefits</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-500 font-semibold">
                Request Calculator →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <DocumentTextIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pre-Approval Checklist</h3>
              <p className="text-gray-600 mb-6">Everything you need for VA loan pre-approval</p>
              <Link href="/contact" className="text-blue-600 hover:text-blue-500 font-semibold">
                Get Checklist →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ClockIcon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">PCS Timeline Guide</h3>
              <p className="text-gray-600 mb-6">Coordinate your VA loan with PCS orders</p>
              <Link href="/pcs-timeline" className="text-blue-600 hover:text-blue-500 font-semibold">
                View Timeline →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Use Your VA Loan Benefits?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Connect with our MRP Certified veteran real estate agent and trusted VA lenders to start your home buying journey.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Start Your VA Loan Process
              </Link>
              <a
                href="tel:+1-555-MILITARY"
                className="text-base font-semibold leading-6 text-white hover:text-blue-100"
              >
                Call (555) MILITARY
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}