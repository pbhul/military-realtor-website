'use client';

export default function MilitaryRealEstateFAQ() {
  const faqs = [
    {
      question: "What is a Military Relocation Professional (MRP) certification?",
      answer: "The Military Relocation Professional (MRP) certification is a designation awarded by the National Association of Realtors to real estate professionals who complete specialized training. The program covers military relocation processes, VA loan benefits, PCS timeline considerations, and military family housing needs. MRP-certified agents have demonstrated knowledge of military-specific real estate challenges.",
      category: "Certification"
    },
    {
      question: "What are the current VA loan limits for Northern Virginia in 2025?",
      answer: "As of 2025, all Northern Virginia counties have unified VA loan limits: Fairfax County - $1,209,750, Loudoun County - $1,209,750, Arlington County - $1,209,750, Prince William County - $1,209,750, Stafford County - $1,209,750. These high-cost area limits reflect elevated home values in the region and are set by the Department of Veterans Affairs annually. Veterans with full entitlement may be able to purchase above these limits with a down payment.",
      category: "VA Loans"
    },
    {
      question: "What military bases are located in Northern Virginia?",
      answer: "Northern Virginia hosts several major military installations: Fort Belvoir (Army installation in Fairfax County), The Pentagon (Department of Defense headquarters in Arlington), Joint Base Myer-Henderson Hall (Army installation in Arlington), Marine Corps Base Quantico (located in Prince William County), and various smaller facilities. Each installation serves different military branches and functions.",
      category: "Military Bases"
    },
    {
      question: "How does BAH (Basic Allowance for Housing) work in Northern Virginia?",
      answer: "BAH rates in Northern Virginia increased by 5.4% in 2025. Rates vary by military grade, dependency status, and duty station. Fort Belvoir ranks 11th highest among all Army bases for BAH rates. The rates are determined by the Department of Defense and adjusted annually based on local housing costs. BAH is intended to offset housing costs for service members living off-base. Current rates can be found on the official Defense Finance and Accounting Service website.",
      category: "Military Benefits"
    },
    {
      question: "What is the typical PCS timeline for military relocations?",
      answer: "A typical PCS (Permanent Change of Station) timeline begins 4-6 months before the move date with official orders. Service members generally receive 30-60 days advance notice. The actual relocation process includes household goods shipment, travel arrangements, and housing transitions. Timelines can vary based on military branch, destination, and individual circumstances.",
      category: "PCS Process"
    },
    {
      question: "What real estate services are available for deployed military personnel?",
      answer: "Real estate services for deployed personnel may include remote consultation, power of attorney coordination, property management referrals, and virtual property tours. Service members can utilize technology for remote transactions while following all applicable laws and military regulations. Each situation is unique and may require different approaches.",
      category: "Deployment Services"
    },
    {
      question: "What are the residency requirements for VA loan eligibility?",
      answer: "VA loan eligibility is primarily based on military service requirements, not state residency. Veterans, active duty service members, and eligible surviving spouses may qualify regardless of their current state of residence. Specific eligibility criteria are established by the Department of Veterans Affairs and include minimum service requirements and discharge status.",
      category: "VA Loans"
    },
    {
      question: "How do military families typically search for housing near bases?",
      answer: "Military families commonly consider factors such as commute time to base, school district quality, base proximity, BAH coverage, and military community presence. Popular resources include military housing offices, online military community groups, and MRP-certified real estate professionals. Each family's priorities and circumstances are unique.",
      category: "Housing Search"
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Military Real Estate Information
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Factual information about military real estate processes in Northern Virginia
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {faq.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
            <p className="text-sm text-gray-600">
              <strong>Disclaimer:</strong> This information is provided for educational purposes only. 
              Military personnel should verify current regulations, benefits, and procedures with official military sources. 
              Real estate transactions should be conducted in accordance with all applicable federal, state, and local laws.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}