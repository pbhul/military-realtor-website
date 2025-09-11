import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircleIcon, ExclamationTriangleIcon, LightBulbIcon, DocumentTextIcon, HomeIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "First-Time Military Buyer Guide | Complete VA Loan Home Buying Guide Northern Virginia",
  description: "Complete guide for military personnel buying their first home in Northern Virginia. VA loan benefits, pre-approval process, inspection priorities, and military-specific considerations.",
  keywords: "first time military home buyer, VA loan guide, military home buying process, VA loan benefits, military real estate Northern Virginia",
  openGraph: {
    title: "First-Time Military Buyer Guide | Complete VA Loan Home Buying Guide Northern Virginia",
    description: "Complete guide for military personnel buying their first home in Northern Virginia. VA loan benefits and military-specific considerations.",
    url: "https://pbrealtynova.com/first-time-military-buyer",
  },
};

export default function FirstTimeMilitaryBuyerPage() {
  const buyingSteps = [
    {
      step: 1,
      title: "Get Your Certificate of Eligibility (COE)",
      description: "Your first step is obtaining your VA loan Certificate of Eligibility through VA.gov or your lender.",
      timeline: "1-3 days online",
      details: [
        "Apply online at VA.gov (fastest method)",
        "Through your VA-approved lender",
        "By mail with Form 26-1880",
        "Required documents: DD-214, current military orders"
      ],
      tips: "Active duty members can get instant COE with a Statement of Service from their personnel office."
    },
    {
      step: 2,
      title: "Get Pre-approved with a VA Lender",
      description: "Find a VA-approved lender and get pre-approved to understand your buying power.",
      timeline: "3-5 business days",
      details: [
        "Compare VA loan rates from multiple lenders",
        "Gather financial documents (pay stubs, bank statements, tax returns)",
        "Factor in BAH when calculating affordability",
        "Get pre-approval letter for house hunting"
      ],
      tips: "Consider lenders experienced with military clients and remote closings."
    },
    {
      step: 3,
      title: "Determine Your Budget with BAH",
      description: "Calculate what you can afford using your Basic Allowance for Housing and other income.",
      timeline: "1-2 hours",
      details: [
        "Use current BAH rates for your duty station",
        "Factor in utilities allowance (if applicable)",
        "Consider future PCS moves and equity building",
        "Account for homeowners insurance and property taxes"
      ],
      tips: "Don't max out your budget - leave room for unexpected military expenses."
    },
    {
      step: 4,
      title: "Find a Military-Experienced Realtor",
      description: "Work with an MRP (Military Relocation Professional) who understands military timelines.",
      timeline: "1-2 days",
      details: [
        "Look for MRP certification",
        "Experience with VA loans and military clients",
        "Ability to work with remote buyers",
        "Knowledge of military communities and base proximity"
      ],
      tips: "A good military realtor can coordinate with your PCS timeline and understand deployment schedules."
    },
    {
      step: 5,
      title: "Start House Hunting",
      description: "Search for homes that meet VA loan requirements and your military lifestyle needs.",
      timeline: "2-8 weeks",
      details: [
        "Consider commute times to base",
        "Look at school districts if you have children",
        "Evaluate military community presence",
        "Check for VA loan approval (no major repairs needed)"
      ],
      tips: "Virtual tours are essential if you're currently deployed or stationed elsewhere."
    },
    {
      step: 6,
      title: "Make an Offer with VA Loan Terms",
      description: "Submit a competitive offer that includes VA loan contingencies and military considerations.",
      timeline: "1-3 days",
      details: [
        "Include VA loan addendum",
        "Request seller to pay closing costs (VA loans allow up to 4%)",
        "Add military clause for PCS orders changes",
        "Negotiate inspection and appraisal timelines"
      ],
      tips: "VA loans are competitive - don't let sellers dismiss your offer due to loan type."
    },
    {
      step: 7,
      title: "VA Appraisal and Inspection",
      description: "Complete the required VA appraisal and your own home inspection.",
      timeline: "2-3 weeks",
      details: [
        "VA appraisal ensures property meets VA standards",
        "Schedule separate home inspection",
        "Review for military-specific concerns (base noise, etc.)",
        "Negotiate repairs or credits based on findings"
      ],
      tips: "VA appraisals protect you by ensuring the home meets safety standards."
    },
    {
      step: 8,
      title: "Finalize Loan and Prepare for Closing",
      description: "Complete loan processing and prepare for closing, potentially remotely.",
      timeline: "2-4 weeks",
      details: [
        "Provide any additional documentation requested",
        "Arrange homeowners insurance",
        "Prepare for closing (in-person or remote)",
        "Review all closing documents carefully"
      ],
      tips: "Many military buyers close remotely using power of attorney or electronic signatures."
    }
  ];

  const militaryBenefits = [
    {
      icon: CurrencyDollarIcon,
      title: "Zero Down Payment",
      description: "No down payment required on VA loans for first-time users with full entitlement (no purchase price limits).",
      details: "Build equity from day one without depleting savings for a large down payment."
    },
    {
      icon: DocumentTextIcon,
      title: "No Private Mortgage Insurance",
      description: "VA loans don't require PMI, saving you hundreds monthly compared to conventional loans.",
      details: "This can save $200-400+ per month depending on loan amount."
    },
    {
      icon: HomeIcon,
      title: "Competitive Interest Rates",
      description: "VA loans typically offer better rates than conventional loans due to government backing.",
      details: "Rates are often 0.25-0.50% lower than conventional loans."
    },
    {
      icon: CheckCircleIcon,
      title: "Flexible Credit Requirements",
      description: "VA loans are more forgiving of past credit issues common with military life.",
      details: "Most lenders accept 580+ credit scores, some as low as 500 with compensating factors."
    },
    {
      icon: ClockIcon,
      title: "Reusable Benefit",
      description: "Use your VA loan benefit multiple times throughout your military career.",
      details: "Entitlement restores when you sell, or use remaining entitlement for additional purchases."
    },
    {
      icon: LightBulbIcon,
      title: "Assumable Loans",
      description: "VA loans can be assumed by qualified buyers, making your home more attractive to sell.",
      details: "Especially valuable when rates rise - buyers can assume your lower rate."
    }
  ];

  const militaryConsiderations = [
    {
      category: "Deployment Planning",
      items: [
        "Consider property management if deployed after purchase",
        "Set up automatic mortgage payments and property tax payments",
        "Ensure spouse/family can manage property issues independently",
        "Research local military spouse networks for support"
      ]
    },
    {
      category: "PCS Moves",
      items: [
        "Factor in potential equity building vs. rental income",
        "Consider timing of purchase with next PCS orders",
        "Evaluate local rental market for future income potential",
        "Understand VA loan assumption options for selling"
      ]
    },
    {
      category: "Base Proximity",
      items: [
        "Calculate commute times during peak traffic hours",
        "Consider impact of base access requirements on daily routine",
        "Evaluate proximity to military family services and commissary",
        "Research noise factors from flight paths or training areas"
      ]
    },
    {
      category: "Family Considerations",
      items: [
        "Research school districts and registration requirements",
        "Consider military children's common challenges (frequent moves)",
        "Evaluate access to military family life programs",
        "Look for active military spouse communities"
      ]
    }
  ];

  const commonMistakes = [
    {
      mistake: "Maxing out your budget",
      solution: "Leave 10-15% buffer for unexpected military expenses and potential rent drops if you need to move."
    },
    {
      mistake: "Ignoring future PCS considerations",
      solution: "Buy in areas with strong rental markets and good resale potential for military families."
    },
    {
      mistake: "Not using VA loan benefits fully",
      solution: "Ask sellers to pay closing costs (up to 4%) and negotiate repairs rather than cash."
    },
    {
      mistake: "Choosing location based only on current orders",
      solution: "Consider long-term assignment potential and career progression possibilities."
    },
    {
      mistake: "Rushing due to PCS timeline",
      solution: "Start the process 90+ days before report date to avoid pressure decisions."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 mb-8">
              <HomeIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              🎖️ First-Time Military Buyer Guide
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Complete step-by-step guide for military personnel buying their first home 
              in Northern Virginia using VA loan benefits.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Get Personal Guidance
              </Link>
              <Link
                href="/va-loan-guidance"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                Learn about VA loans <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VA Loan Benefits */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              🎖️ Your Military Home Buying Advantages
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              VA loans provide significant benefits that make homeownership more accessible for military families.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {militaryBenefits.map((benefit) => (
                <div key={benefit.title} className="bg-white rounded-lg shadow-lg p-6">
                  <benefit.icon className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-3">{benefit.description}</p>
                  <p className="text-sm text-green-700 font-medium">{benefit.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              📋 Your 8-Step Military Home Buying Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Follow this proven process designed specifically for military home buyers.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-8">
              {buyingSteps.map((step) => (
                <div key={step.step} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <span className="text-lg font-bold text-green-800">{step.step}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                        <span className="text-sm text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full mt-2 sm:mt-0">
                          ⏱️ {step.timeline}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Action Items:</h4>
                          <ul className="space-y-1">
                            {step.details.map((detail, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 p-4 rounded-lg">
                          <div className="flex items-start gap-2">
                            <LightBulbIcon className="h-5 w-5 text-green-600 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-green-800 mb-1">Military Tip:</h4>
                              <p className="text-sm text-green-700">{step.tips}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Military-Specific Considerations */}
      <section className="py-24 sm:py-32 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              🎯 Military-Specific Considerations
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Additional factors military families should consider when buying their first home.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8">
              {militaryConsiderations.map((consideration) => (
                <div key={consideration.category} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{consideration.category}</h3>
                  <ul className="space-y-3">
                    {consideration.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ⚠️ Avoid These Common Mistakes
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Learn from other military families' experiences and avoid these pitfalls.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-6">
              {commonMistakes.map((item, index) => (
                <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <ExclamationTriangleIcon className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-red-900 mb-2">❌ {item.mistake}</h3>
                      <p className="text-red-700">✅ <strong>Solution:</strong> {item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Home Buying Journey?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get personalized guidance from an MRP-certified military real estate specialist 
              who understands your unique situation and timeline.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-8 py-4 text-lg font-semibold text-blue-900 shadow-sm hover:bg-blue-50 w-full sm:w-auto text-center"
              >
                Get Your Free Military Buyer Consultation
              </Link>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/bah-calculator"
                  className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
                >
                  Calculate Your BAH →
                </Link>
                <Link
                  href="/va-loan-guidance"
                  className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
                >
                  Learn About VA Loans →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}