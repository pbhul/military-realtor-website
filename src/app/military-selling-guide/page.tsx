import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircleIcon, ExclamationTriangleIcon, LightBulbIcon, DocumentTextIcon, HomeIcon, ClockIcon, CurrencyDollarIcon, TruckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Military Home Selling Guide | PCS Home Sale Strategies Northern Virginia",
  description: "Complete guide for military families selling their home during PCS moves. Timing strategies, remote selling procedures, rent vs sell decisions, and tax implications.",
  keywords: "military home selling, PCS home sale, military real estate selling guide, VA loan assumption, remote home selling, military moving",
  openGraph: {
    title: "Military Home Selling Guide | PCS Home Sale Strategies Northern Virginia",
    description: "Complete guide for military families selling their home during PCS moves. Timing strategies and remote selling procedures.",
    url: "https://pbrealtynova.com/military-selling-guide",
  },
};

export default function MilitarySellingGuidePage() {
  const sellingTimeline = [
    {
      timeframe: "6 Months Before PCS",
      title: "Start Planning & Preparation",
      description: "Begin evaluating your options and preparing your home for potential sale.",
      tasks: [
        "Review current home value and market conditions",
        "Decide between selling vs. renting out the property",
        "Start decluttering and organizing belongings",
        "Research military real estate agents in your area",
        "Begin HHG (Household Goods) planning"
      ],
      tips: "Starting early gives you more options and reduces stress during your PCS timeline."
    },
    {
      timeframe: "4-5 Months Before PCS",
      title: "Market Analysis & Agent Selection",
      description: "Get a professional market analysis and choose your real estate agent.",
      tasks: [
        "Interview MRP-certified military real estate agents",
        "Get Comparative Market Analysis (CMA) from multiple agents",
        "Assess needed repairs or improvements for maximum return",
        "Start minor repairs and staging preparations",
        "Review VA loan assumption options for marketing"
      ],
      tips: "Choose an agent experienced with military sales and remote closings."
    },
    {
      timeframe: "3 Months Before PCS",
      title: "List Preparation & Marketing",
      description: "Complete home improvements and prepare for listing.",
      tasks: [
        "Complete necessary repairs and improvements",
        "Professional staging and photography",
        "List your home on the market",
        "Begin showing schedule coordination",
        "Market VA loan assumption benefit to potential buyers"
      ],
      tips: "Professional photos are crucial, especially for remote military buyers."
    },
    {
      timeframe: "2 Months Before PCS",
      title: "Active Selling & Negotiation",
      description: "Manage showings, negotiate offers, and handle contracts.",
      tasks: [
        "Manage showings and open houses",
        "Review and negotiate offers",
        "Accept offer and go under contract",
        "Coordinate inspections and appraisals",
        "Begin HHG shipment scheduling coordination"
      ],
      tips: "Be flexible with showing times to accommodate other military families' schedules."
    },
    {
      timeframe: "1 Month Before PCS",
      title: "Closing Preparation",
      description: "Handle final sale details and prepare for your move.",
      tasks: [
        "Finalize all inspection negotiations",
        "Prepare for closing (potentially remote)",
        "Coordinate final HHG shipment",
        "Arrange power of attorney if needed for closing",
        "Plan transition to temporary lodging if needed"
      ],
      tips: "Many military sales close remotely using electronic signatures and POA."
    },
    {
      timeframe: "PCS Week",
      title: "Final Closing & Move",
      description: "Complete the sale and execute your PCS move.",
      tasks: [
        "Final walk-through (in person or virtual)",
        "Sign closing documents",
        "Complete HHG shipment",
        "Transfer utilities and services",
        "Hand over keys and complete sale"
      ],
      tips: "Have backup plans for delays in closing or shipping schedules."
    }
  ];

  const rentVsSellFactors = [
    {
      category: "Financial Considerations",
      sellPros: [
        "Access equity for new home purchase",
        "No landlord responsibilities or expenses",
        "Avoid potential rental income tax implications",
        "No risk of property damage from tenants"
      ],
      sellCons: [
        "May lose money if selling in down market",
        "Miss potential appreciation in strong markets",
        "Transaction costs (6-10% of home value)",
        "May need to bring money to closing"
      ],
      rentPros: [
        "Generate passive rental income",
        "Potential property appreciation over time",
        "Tax benefits including depreciation",
        "Keep property in strong military market"
      ],
      rentCons: [
        "Property management costs and responsibilities",
        "Risk of vacancy periods and bad tenants",
        "Maintenance and repair expenses",
        "Rental income may not cover all expenses"
      ]
    }
  ];

  const pricingStrategies = [
    {
      strategy: "Competitive Pricing",
      description: "Price at or slightly below market value for quick sale",
      whenToUse: "When you have firm PCS orders and tight timeline",
      pros: ["Quick sale potential", "Multiple offers likely", "Less carrying costs"],
      cons: ["May leave money on table", "Could signal problems to buyers"]
    },
    {
      strategy: "Market Value Pricing",
      description: "Price at current market value based on recent comparables",
      whenToUse: "When you have flexibility in your timeline",
      pros: ["Maximize sale price", "Normal market timeline", "Good negotiation position"],
      cons: ["May take longer to sell", "Risk if market conditions change"]
    },
    {
      strategy: "Premium Pricing",
      description: "Price above market value to test buyer demand",
      whenToUse: "In seller's markets with low inventory",
      pros: ["Maximum potential profit", "Room to negotiate down", "Test market demand"],
      cons: ["May sit on market too long", "Could miss your PCS timeline", "May need price reductions"]
    }
  ];

  const stagingTips = [
    {
      area: "Living Spaces",
      tips: [
        "Remove family photos and personal items",
        "Declutter and organize all spaces",
        "Use neutral colors and décor",
        "Ensure adequate lighting in all rooms",
        "Create wide, open pathways for virtual tours"
      ]
    },
    {
      area: "Military-Specific Staging",
      tips: [
        "Highlight proximity to military bases",
        "Show flexible spaces for military lifestyle",
        "Emphasize storage for military gear",
        "Display home office/study spaces",
        "Show security features important to military families"
      ]
    },
    {
      area: "Curb Appeal",
      tips: [
        "Maintain lawn and landscaping",
        "Paint front door and touch up exterior",
        "Clean windows and pressure wash exterior",
        "Add welcoming touches like potted plants",
        "Ensure house numbers are clearly visible"
      ]
    },
    {
      area: "Photography Preparation",
      tips: [
        "Schedule during optimal lighting hours",
        "Remove all clutter and personal items",
        "Make all beds and fluff pillows",
        "Turn on all lights for photos",
        "Prepare both interior and exterior shots"
      ]
    }
  ];

  const remoteSelling = [
    {
      aspect: "Virtual Showings",
      details: [
        "Professional video walkthroughs",
        "Live virtual showing appointments",
        "3D virtual tour technology",
        "High-quality photo galleries",
        "Neighborhood and base proximity videos"
      ]
    },
    {
      aspect: "Remote Negotiations",
      details: [
        "Electronic offer review and countering",
        "Video calls for complex negotiations",
        "Digital document signing",
        "Remote inspection coordination",
        "Virtual final walkthrough options"
      ]
    },
    {
      aspect: "Closing Procedures",
      details: [
        "Power of attorney arrangements",
        "Electronic signature platforms",
        "Remote notarization services",
        "Wire transfer coordination",
        "Mail-away closing packages"
      ]
    }
  ];

  const taxImplications = [
    {
      topic: "Military Moving Expense Deductions",
      description: "Understanding what moving expenses are deductible for military families",
      details: [
        "PCS moves are generally tax-deductible for active duty",
        "Keep all receipts for moving-related expenses",
        "Temporary lodging expenses may be deductible",
        "Consult tax professional for latest military tax benefits"
      ]
    },
    {
      topic: "Capital Gains Considerations",
      description: "How military moves affect capital gains taxes on home sales",
      details: [
        "Primary residence exemption may apply ($250K single, $500K married)",
        "Must have lived in home 2 of last 5 years",
        "Military members get extensions for deployment periods",
        "Consult tax advisor for complex situations"
      ]
    },
    {
      topic: "Rental Income Tax Planning",
      description: "Tax implications if choosing to rent instead of sell",
      details: [
        "Rental income is taxable but expenses are deductible",
        "Depreciation benefits for rental properties",
        "Different rules for military members on extended tours",
        "Consider state tax implications for rental income"
      ]
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
              <TruckIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              🎖️ Military Home Selling Guide
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Complete strategies for selling your home during PCS moves, including timing, 
              pricing, remote management, and rent vs. sell decisions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Get Selling Strategy Consultation
              </Link>
              <Link
                href="/base-proximity-map"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                View Market Areas <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PCS Selling Timeline */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              📅 PCS Home Selling Timeline
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A month-by-month guide to coordinate your home sale with your PCS timeline.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-12">
              {sellingTimeline.map((phase, index) => (
                <div key={index} className="relative">
                  {index < sellingTimeline.length - 1 && (
                    <div className="absolute left-8 top-16 h-full w-0.5 bg-orange-200"></div>
                  )}
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 border-4 border-white shadow-lg">
                        <ClockIcon className="h-8 w-8 text-orange-600" />
                      </div>
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow-lg p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <div className="text-sm font-semibold text-orange-600 mb-1">{phase.timeframe}</div>
                          <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{phase.description}</p>
                      
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Tasks:</h4>
                          <ul className="space-y-2">
                            {phase.tasks.map((task, taskIndex) => (
                              <li key={taskIndex} className="flex items-start gap-2">
                                <CheckCircleIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <div className="flex items-start gap-2">
                            <LightBulbIcon className="h-5 w-5 text-orange-600 mt-0.5" />
                            <div>
                              <h4 className="font-medium text-orange-800 mb-1">Military Tip:</h4>
                              <p className="text-sm text-orange-700">{phase.tips}</p>
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

      {/* Rent vs Sell Decision Matrix */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              🏠 Rent vs. Sell Decision Matrix
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Weigh the pros and cons of selling versus renting out your property during PCS.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-6xl">
            {rentVsSellFactors.map((factor) => (
              <div key={factor.category} className="mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">{factor.category}</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Selling Column */}
                  <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
                    <h4 className="text-lg font-bold text-green-800 mb-6 text-center">💰 SELLING</h4>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-green-700 mb-3">✅ Pros:</h5>
                      <ul className="space-y-2">
                        {factor.sellPros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-red-700 mb-3">❌ Cons:</h5>
                      <ul className="space-y-2">
                        {factor.sellCons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Renting Column */}
                  <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
                    <h4 className="text-lg font-bold text-blue-800 mb-6 text-center">🏘️ RENTING</h4>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-green-700 mb-3">✅ Pros:</h5>
                      <ul className="space-y-2">
                        {factor.rentPros.map((pro, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-red-700 mb-3">❌ Cons:</h5>
                      <ul className="space-y-2">
                        {factor.rentCons.map((con, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Strategies */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              💵 Military Home Pricing Strategies
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the right pricing strategy based on your timeline and market conditions.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {pricingStrategies.map((strategy) => (
                <div key={strategy.strategy} className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{strategy.strategy}</h3>
                  <p className="text-gray-600 mb-4">{strategy.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">When to Use:</h4>
                    <p className="text-sm text-gray-600">{strategy.whenToUse}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-green-700 mb-2 text-sm">Pros:</h5>
                      <ul className="space-y-1">
                        {strategy.pros.map((pro, index) => (
                          <li key={index} className="text-xs text-gray-600 flex items-start gap-1">
                            <span className="text-green-500">+</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-red-700 mb-2 text-sm">Cons:</h5>
                      <ul className="space-y-1">
                        {strategy.cons.map((con, index) => (
                          <li key={index} className="text-xs text-gray-600 flex items-start gap-1">
                            <span className="text-red-500">-</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staging for Military Families */}
      <section className="py-24 sm:py-32 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              🎭 Staging Your Military Home
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Special staging considerations for military families and military buyer appeal.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              {stagingTips.map((area) => (
                <div key={area.area} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{area.area}</h3>
                  <ul className="space-y-3">
                    {area.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircleIcon className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Remote Selling Process */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              🌐 Remote Selling for Deployed Military
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              How to successfully sell your home while deployed or stationed elsewhere.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {remoteSelling.map((aspect) => (
                <div key={aspect.aspect} className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{aspect.aspect}</h3>
                  <ul className="space-y-3">
                    {aspect.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tax Implications */}
      <section className="py-24 sm:py-32 bg-yellow-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              💼 Tax Implications for Military Moves
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Understanding tax benefits and implications specific to military home sales and moves.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="space-y-8">
              {taxImplications.map((tax) => (
                <div key={tax.topic} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-yellow-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tax.topic}</h3>
                  <p className="text-gray-600 mb-4">{tax.description}</p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {tax.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <DocumentTextIcon className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-yellow-100 border border-yellow-300 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Tax Disclaimer</h4>
                  <p className="text-yellow-700">
                    Tax laws change frequently and vary by state. Military families should consult with a qualified 
                    tax professional or military-knowledgeable CPA for advice specific to their situation.
                  </p>
                </div>
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
              🎖️ Need Help Selling Your Military Home?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get expert guidance from an MRP-certified military real estate specialist who understands 
              PCS timelines, remote selling, and military family needs.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-8 py-4 text-lg font-semibold text-blue-900 shadow-sm hover:bg-blue-50 w-full sm:w-auto text-center"
              >
                Get Your Free Military Selling Consultation
              </Link>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/base-proximity-map"
                  className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
                >
                  View Market Areas →
                </Link>
                <Link
                  href="/military-resources"
                  className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
                >
                  More Military Resources →
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