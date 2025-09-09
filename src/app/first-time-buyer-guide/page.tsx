import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HomeIcon, CheckCircleIcon, CurrencyDollarIcon, DocumentTextIcon, CalendarIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "First-Time Military Home Buyer Guide | Northern Virginia VA Loan Expert",
  description: "Complete guide for military personnel buying their first home in Northern Virginia. Expert advice on VA loans, inspections, closing costs, and deployment considerations.",
  keywords: "first time military home buyer, VA loan first time buyer, military home buying guide, northern virginia first home, military real estate guide",
  openGraph: {
    title: "First-Time Military Home Buyer Guide | Northern Virginia VA Loan Expert",
    description: "Complete guide for military personnel buying their first home in Northern Virginia.",
    url: "https://www.militaryrealestatenova.com/first-time-buyer-guide",
  },
};

const buyingSteps = [
  {
    step: 1,
    title: "Get Your Financial Foundation Ready",
    description: "Before you start looking, establish your financial readiness",
    details: [
      "Check your credit score (580+ for VA loans, 620+ for best rates)",
      "Gather 2 years of tax returns, pay stubs, and bank statements",
      "Calculate your debt-to-income ratio (preferably under 41%)",
      "Save for closing costs (2-5% of home price, though VA loans allow seller credits)"
    ],
    timeframe: "30-45 days before house hunting"
  },
  {
    step: 2,
    title: "Obtain Your Certificate of Eligibility (COE)",
    description: "Essential document proving your VA loan eligibility",
    details: [
      "Apply online at VA.gov (fastest method - usually same day)",
      "Through your lender during pre-approval process",
      "By mail using Form 26-1880 (takes 2-6 weeks)",
      "We can help expedite this process for you"
    ],
    timeframe: "Same day to 2 weeks"
  },
  {
    step: 3,
    title: "Get Pre-Approved with a VA Lender",
    description: "Secure your financing before shopping for homes",
    details: [
      "Shop multiple VA-approved lenders for best rates",
      "Get pre-approval letter showing your maximum loan amount",
      "Understand VA funding fee (0-3.6% depending on service/down payment)",
      "Lock in interest rate if you find a home within 30-60 days"
    ],
    timeframe: "3-7 days"
  },
  {
    step: 4,
    title: "Start House Hunting with Your Agent",
    description: "Find your perfect home with military-focused guidance",
    details: [
      "Focus on neighborhoods with good military family amenities",
      "Consider commute times to your base during peak hours",
      "Evaluate school districts if you have or plan to have children",
      "Factor in deployment considerations and property management options"
    ],
    timeframe: "2-8 weeks"
  },
  {
    step: 5,
    title: "Make an Offer and Negotiate",
    description: "Submit a competitive offer in today's market",
    details: [
      "Include VA loan pre-approval letter with offer",
      "Add contingencies for inspection and appraisal",
      "Negotiate seller credits to cover closing costs",
      "Consider escalation clauses in competitive markets"
    ],
    timeframe: "1-3 days per offer"
  },
  {
    step: 6,
    title: "Complete Home Inspection",
    description: "Protect your investment with thorough inspection",
    details: [
      "Hire independent inspector familiar with local construction",
      "Focus on major systems: HVAC, electrical, plumbing, roof",
      "Check for wood-destroying insects (common in Virginia)",
      "Negotiate repairs or credits based on inspection findings"
    ],
    timeframe: "7-10 days after offer acceptance"
  },
  {
    step: 7,
    title: "VA Appraisal Process",
    description: "VA-required appraisal ensures home value and safety",
    details: [
      "VA orders appraisal to determine fair market value",
      "Appraiser checks for health and safety issues",
      "Home must meet VA Minimum Property Requirements (MPRs)",
      "If appraisal comes in low, negotiate with seller or walk away"
    ],
    timeframe: "10-14 days"
  },
  {
    step: 8,
    title: "Final Walkthrough and Closing",
    description: "Complete your home purchase",
    details: [
      "Final walkthrough 24-48 hours before closing",
      "Review closing disclosure 3 days before closing",
      "Bring government-issued ID and certified funds for closing costs",
      "Get keys and celebrate your new home!"
    ],
    timeframe: "1-2 days"
  }
];

const militaryConsiderations = [
  {
    icon: CalendarIcon,
    title: "Deployment Planning",
    description: "Consider how deployments will affect homeownership",
    tips: [
      "Research property management companies if you'll be deployed",
      "Budget for maintenance and repairs while away",
      "Consider location accessibility for spouse if applicable",
      "Understand your rights under Servicemembers Civil Relief Act"
    ]
  },
  {
    icon: CurrencyDollarIcon,
    title: "BAH vs Mortgage Strategy",
    description: "Align your housing costs with your BAH allowance",
    tips: [
      "Keep total housing costs (PITI + HOA) at or below BAH",
      "Account for utilities not covered by BAH",
      "Consider BAH changes if you get promoted or PCS",
      "Build equity instead of paying rent to landlords"
    ]
  },
  {
    icon: HomeIcon,
    title: "Future PCS Considerations",
    description: "Buy with future military moves in mind",
    tips: [
      "Choose homes in desirable neighborhoods for resale",
      "Consider rental potential if you PCS but keep the home",
      "Avoid over-personalizing with permanent modifications",
      "Factor in closing costs if you sell within 2-3 years"
    ]
  },
  {
    icon: DocumentTextIcon,
    title: "Military-Specific Benefits",
    description: "Maximize your military homebuying advantages",
    tips: [
      "No down payment required with VA loan",
      "No PMI (private mortgage insurance) saves $200-300/month",
      "Seller can pay all closing costs (up to 4% of home price)",
      "VA assumption available for future buyers"
    ]
  }
];

const commonMistakes = [
  {
    mistake: "Not getting pre-approved first",
    consequence: "Missing out on homes in competitive markets",
    solution: "Get pre-approved before looking at homes"
  },
  {
    mistake: "Maxing out your loan amount",
    consequence: "House poor with no emergency fund",
    solution: "Stay 10-20% below your maximum to maintain financial flexibility"
  },
  {
    mistake: "Skipping the home inspection",
    consequence: "Costly surprises after closing",
    solution: "Always get a professional inspection, even in competitive markets"
  },
  {
    mistake: "Not understanding VA loan requirements",
    consequence: "Delays or deal falling through",
    solution: "Work with VA loan experienced lender and realtor"
  },
  {
    mistake: "Ignoring future PCS possibilities",
    consequence: "Difficulty selling or renting when orders come",
    solution: "Choose location and price point with resale/rental potential"
  }
];

export default function FirstTimeBuyerGuidePage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              First-Time Military Home Buyer Guide
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Complete step-by-step guide for military personnel buying their first home in Northern Virginia. 
              Navigate the process with confidence using your VA loan benefits.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Get Personal Guidance
              </Link>
              <a
                href="tel:+1-703-477-2606"
                className="flex items-center gap-2 text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                <PhoneIcon className="h-5 w-5" />
                Call (703) 477-2606
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Home Buying Journey
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Follow this proven 8-step process designed specifically for military home buyers
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            {buyingSteps.map((step, index) => (
              <div key={step.step} className="relative pb-12">
                {index !== buyingSteps.length - 1 && (
                  <div className="absolute left-8 top-20 h-16 w-0.5 bg-gray-200"></div>
                )}
                <div className="flex gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">{step.timeframe}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Military Considerations */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Military-Specific Considerations
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Unique factors military buyers should consider beyond the standard home buying process
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {militaryConsiderations.map((consideration) => (
              <div key={consideration.title} className="bg-white p-8 rounded-lg shadow-sm">
                <consideration.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{consideration.title}</h3>
                <p className="text-gray-600 mb-6">{consideration.description}</p>
                <ul className="space-y-3">
                  {consideration.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Avoid These Common First-Time Buyer Mistakes
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Learn from others&apos; experiences to make your home buying journey smoother
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            {commonMistakes.map((item, index) => (
              <div key={index} className="border border-red-200 rounded-lg p-6 bg-red-50">
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">❌ Mistake:</h4>
                    <p className="text-sm text-red-800">{item.mistake}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-900 mb-2">⚠️ Consequence:</h4>
                    <p className="text-sm text-red-800">{item.consequence}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">✅ Solution:</h4>
                    <p className="text-sm text-green-800">{item.solution}</p>
                  </div>
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
              Ready to Buy Your First Home?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Work with an MRP-certified military real estate specialist who understands your unique needs 
              and can guide you through every step of the process.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Start Your Home Buying Journey
              </Link>
              <a
                href="tel:+1-703-477-2606"
                className="text-base font-semibold leading-6 text-white hover:text-blue-100"
              >
                Call (703) 477-2606 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}