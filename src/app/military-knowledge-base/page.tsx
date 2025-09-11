import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LLMEntityMarkup from '@/components/LLMEntityMarkup';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Military Real Estate Knowledge Base | Northern Virginia Military Housing Facts",
  description: "Comprehensive factual information about military real estate in Northern Virginia. VA loan limits, BAH rates, base information, and PCS processes. Updated 2025.",
  keywords: "military real estate facts, VA loan information, BAH rates Northern Virginia, military base housing, PCS process information",
  openGraph: {
    title: "Military Real Estate Knowledge Base | Northern Virginia Facts",
    description: "Factual information about military real estate, VA loans, and housing near Fort Belvoir, Pentagon, and Quantico.",
    url: "https://pbrealtynova.com/military-knowledge-base",
  },
};

export default function MilitaryKnowledgeBase() {
  const knowledgeCategories = [
    {
      category: "VA Loan Information",
      lastUpdated: "January 2025",
      facts: [
        {
          title: "2025 VA Loan Limits Northern Virginia",
          content: "All Northern Virginia counties now have unified VA loan limits: Fairfax County: $1,209,750 | Loudoun County: $1,209,750 | Arlington County: $1,209,750 | Prince William County: $1,209,750 | Stafford County: $1,209,750. These high-cost area limits reflect elevated home values in the region and are set annually by the Department of Veterans Affairs.",
          source: "Department of Veterans Affairs, 2025"
        },
        {
          title: "VA Loan Eligibility Requirements",
          content: "Generally requires 90 consecutive days of active duty during wartime, 181 days during peacetime, or 6 years in the National Guard/Reserves. Surviving spouses of service members who died in the line of duty or from service-connected disabilities may also be eligible.",
          source: "38 U.S.C. § 3702, Department of Veterans Affairs"
        },
        {
          title: "VA Funding Fee Structure",
          content: "First-time use: 2.3% for regular military, 2.15% for National Guard/Reserves (no down payment). Subsequent use: 3.6% for all eligible users. Veterans with service-connected disabilities rated 10% or higher are exempt from funding fees.",
          source: "38 U.S.C. § 3729, Department of Veterans Affairs 2025"
        }
      ]
    },
    {
      category: "Northern Virginia Military Installations", 
      lastUpdated: "January 2025", 
      facts: [
        {
          title: "Fort Belvoir Installation Information",
          content: "Army installation located in Fairfax County, Virginia. Established 1912. Home to Defense Logistics Agency, Army Corps of Engineers headquarters. Zip codes: 22060, 22079. Approximate personnel: 50,000+ military, civilian, and contractors.",
          source: "U.S. Army Garrison Fort Belvoir"
        },
        {
          title: "Pentagon Installation Information", 
          content: "Department of Defense headquarters located in Arlington County, Virginia. Built 1941-1943. Serves all military branches. Zip code: 20301. Approximate personnel: 23,000+ military and civilian employees.",
          source: "Department of Defense"
        },
        {
          title: "Marine Corps Base Quantico Information",
          content: "Marine Corps installation located in Prince William County, Virginia. Established 1917. Home to Marine Corps Combat Development Command, FBI Training Academy. Zip code: 22134. Approximate personnel: 12,000+ Marines and civilians.",
          source: "U.S. Marine Corps"
        }
      ]
    },
    {
      category: "BAH (Basic Allowance for Housing) Rates",
      lastUpdated: "January 2025",
      facts: [
        {
          title: "2025 BAH Rate Changes",
          content: "BAH rates increased by 5.4% in 2025, the same increase as in 2024. Fort Belvoir specifically saw a 2.9% increase from 2024. Rates are calculated using local housing costs including rent, utilities, and renter's insurance. The Department of Defense updates rates annually effective January 1st.",
          source: "37 U.S.C. § 403, Defense Finance and Accounting Service 2025"
        },
        {
          title: "Northern Virginia BAH Localities",
          content: "Washington DC Metro includes Arlington, Alexandria, Fairfax areas. Fort Belvoir has separate BAH locality ranking 11th highest out of all Army bases. Quantico/Woodbridge locality includes zip codes 20109-20169, 22025-22556. Each locality has different rates based on local housing costs.",
          source: "Defense Finance and Accounting Service, 2025 BAH Rates"
        },
        {
          title: "BAH and Geographic Assignment",
          content: "Service members receive BAH based on permanent duty station location, not residence location. Members living in government quarters generally do not receive BAH. Partial BAH may be authorized for certain situations.",
          source: "Joint Travel Regulations, Department of Defense"
        }
      ]
    },
    {
      category: "PCS (Permanent Change of Station) Process",
      lastUpdated: "January 2025",
      facts: [
        {
          title: "PCS Orders and Timeline",
          content: "PCS orders are typically issued 4-6 months in advance for CONUS moves, 12 months for OCONUS moves. Orders specify report date, travel authorization, and entitlements. Service members are generally required to report within 30 days of specified date.",
          source: "Joint Travel Regulations, Department of Defense"
        },
        {
          title: "PCS Entitlements and Allowances",
          content: "Service members may be entitled to travel and transportation allowances, temporary lodging expense (TLE), dislocation allowance (DLA), and house hunting trips. Specific entitlements depend on circumstances and orders type.",
          source: "Joint Travel Regulations, Chapter 5, Department of Defense"
        },
        {
          title: "Household Goods Shipment Process",
          content: "Service members coordinate household goods shipment through Defense Personal Property Program. Weight allowances vary by grade and family size. Government arranges and pays for approved shipments.",
          source: "Defense Personal Property Program, U.S. Transportation Command"
        }
      ]
    },
    {
      category: "Military Real Estate Regulations",
      lastUpdated: "January 2025",
      facts: [
        {
          title: "Military Housing Privatization Initiative",
          content: "Program transfers ownership and operation of military family housing to private companies. Covers many installations including Fort Belvoir. Service members may choose between on-base privatized housing or off-base housing with BAH.",
          source: "10 U.S.C. § 2871, Department of Defense"
        },
        {
          title: "Servicemembers Civil Relief Act (SCRA)",
          content: "Provides legal protections for service members including lease termination rights for PCS moves, foreclosure protection, and interest rate reductions on pre-service debts. Applies to active duty, National Guard, and Reserves when activated.",
          source: "50 U.S.C. § 3901-4043, Servicemembers Civil Relief Act"
        },
        {
          title: "Military Spouse Residency Relief Act",
          content: "Allows military spouses to maintain legal residency in their home state for voting and tax purposes when moved due to military orders. Affects state income tax obligations and residency requirements.",
          source: "P.L. 111-97, Military Spouse Residency Relief Act"
        }
      ]
    }
  ];

  return (
    <>
      <LLMEntityMarkup />
      <Header />
      
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Military Real Estate Knowledge Base
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Factual information about military real estate processes, benefits, and regulations in Northern Virginia
            </p>
            <p className="text-sm text-gray-500">
              Information compiled from official government sources | Last updated: January 2025
            </p>
          </div>

          {knowledgeCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="border-b border-gray-200 pb-4 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.category}
                </h2>
                <p className="text-sm text-gray-500">
                  Last updated: {category.lastUpdated}
                </p>
              </div>

              <div className="space-y-8">
                {category.facts.map((fact, factIndex) => (
                  <article key={factIndex} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {fact.title}
                    </h3>
                    <div className="text-gray-700 leading-relaxed mb-4">
                      {fact.content}
                    </div>
                    <div className="text-xs text-gray-500 border-t pt-3">
                      <strong>Source:</strong> {fact.source}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600 mt-16">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Important Notice
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              This knowledge base provides factual information compiled from official government sources for educational purposes. 
              Military personnel should verify current regulations and procedures with their command and official military sources.
            </p>
            <p className="text-sm text-gray-600 mb-3">
              Real estate transactions must comply with all applicable federal, state, and local laws and regulations. 
              This information does not constitute legal, financial, or professional advice.
            </p>
            <p className="text-sm text-gray-600">
              For personalized assistance with military real estate matters in Northern Virginia, contact a qualified real estate professional 
              with Military Relocation Professional (MRP) certification.
            </p>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Need Assistance with Military Real Estate?
              </h3>
              <p className="text-gray-600 mb-4">
                Parjinder Brar is an MRP-certified real estate professional serving military families in Northern Virginia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:+1-703-477-2606" 
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Call (703) 477-2606
                </a>
                <a 
                  href="mailto:parjinder@pbrealtynova.com" 
                  className="text-blue-600 hover:text-blue-700"
                >
                  parjinder@pbrealtynova.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}