import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DocumentTextIcon, CheckCircleIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "VA Loan Pre-Approval Checklist | Military Home Buying Preparation",
  description: "🎖️ Complete VA loan pre-approval checklist for military families. Required documents, credit requirements, and expert guidance from MRP-certified agent.",
  keywords: "VA loan pre-approval checklist, military home buying documents, VA loan requirements, military mortgage preparation",
  openGraph: {
    title: "VA Loan Pre-Approval Checklist | Military Home Buying Preparation",
    description: "Complete VA loan pre-approval checklist for military families. Required documents and expert guidance.",
    url: "https://pbrealtynova.com/va-loan-pre-approval-checklist",
  },
};

export default function VALoanPreApprovalChecklist() {
  const documents = [
    {
      category: "Military Documents",
      items: [
        "Certificate of Eligibility (COE) - Get from VA.gov",
        "Current LES (Leave and Earnings Statement)",
        "PCS Orders (if applicable)",
        "DD-214 (for veterans)",
        "Statement of Service (for active duty)",
      ]
    },
    {
      category: "Financial Documents",
      items: [
        "2 years of tax returns and W-2s",
        "30 days of pay stubs",
        "2-3 months of bank statements (all accounts)",
        "Investment account statements",
        "Retirement account statements (401k, TSP, etc.)",
      ]
    },
    {
      category: "Employment Verification",
      items: [
        "Employment verification letter",
        "Contact information for HR department",
        "Base/unit contact information",
        "Any additional income documentation",
        "Spouse employment information (if applicable)",
      ]
    },
    {
      category: "Credit & Debt Information",
      items: [
        "List of all current debts and monthly payments",
        "Credit card statements",
        "Auto loan information",
        "Student loan details",
        "Any other monthly obligations",
      ]
    }
  ];

  const creditRequirements = [
    {
      score: "580+",
      description: "Minimum for most VA lenders",
      benefits: ["Access to VA loan programs", "Competitive rates available"]
    },
    {
      score: "620+", 
      description: "Better rates and terms",
      benefits: ["Lower interest rates", "More lender options", "Easier approval process"]
    },
    {
      score: "700+",
      description: "Best rates available",
      benefits: ["Lowest interest rates", "Premium loan terms", "Fast approval process"]
    }
  ];

  const timeline = [
    {
      step: "1-2 Days",
      title: "Gather Documents",
      description: "Collect all required paperwork and documentation"
    },
    {
      step: "2-5 Days", 
      title: "Submit Application",
      description: "Complete pre-approval application with VA lender"
    },
    {
      step: "3-7 Days",
      title: "Underwriter Review", 
      description: "Lender reviews and verifies all documentation"
    },
    {
      step: "1-3 Days",
      title: "Pre-Approval Letter",
      description: "Receive official pre-approval letter for home shopping"
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
              VA Loan Pre-Approval Checklist
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Everything you need to get pre-approved for your VA loan. Be prepared and speed up your home buying process.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Get Pre-Approval Help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Checklist */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Required Documents Checklist
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Gather these documents before starting your VA loan pre-approval process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documents.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <DocumentTextIcon className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credit Requirements */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Credit Score Requirements
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              While VA loans are more flexible than conventional loans, credit scores still matter for rates and terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creditRequirements.map((req, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{req.score}</div>
                  <div className="text-lg font-semibold text-gray-900">{req.description}</div>
                </div>
                <ul className="space-y-2">
                  {req.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2">
                      <CheckCircleIcon className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Credit Improvement Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Pay all bills on time</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Keep credit utilization below 30%</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Don&apos;t close old credit accounts</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Pay down existing debt</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Check credit reports for errors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600" />
                  <span className="text-sm">Avoid new credit applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pre-Approval Timeline
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Typical timeline for VA loan pre-approval process when all documents are ready.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((step, index) => (
              <div key={index} className="relative">
                {index !== timeline.length - 1 && (
                  <div className="absolute left-8 top-16 h-16 w-0.5 bg-gray-200"></div>
                )}
                <div className="flex items-start gap-6 pb-12">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold flex-shrink-0">
                    <ClockIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-blue-600 mb-1">{step.step}</div>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Tips */}
      <section className="py-24 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">
              Important Pre-Approval Tips
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">✅ Do&apos;s</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Keep employment stable during the process</li>
                  <li>• Maintain consistent income</li>
                  <li>• Keep documents organized and accessible</li>
                  <li>• Respond quickly to lender requests</li>
                  <li>• Ask questions if you don&apos;t understand something</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">❌ Don&apos;ts</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Don&apos;t make large purchases or take on new debt</li>
                  <li>• Don&apos;t change jobs during the process</li>
                  <li>• Don&apos;t make large deposits without documentation</li>
                  <li>• Don&apos;t apply for new credit cards or loans</li>
                  <li>• Don&apos;t close existing credit accounts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Pre-Approved?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Connect with our trusted VA lenders and get expert guidance through your pre-approval process.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Start Pre-Approval Process
              </Link>
              <a
                href="tel:+1-703-477-2606"
                className="flex items-center gap-2 text-base font-semibold leading-6 text-white hover:text-blue-100"
              >
                <PhoneIcon className="h-5 w-5" />
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