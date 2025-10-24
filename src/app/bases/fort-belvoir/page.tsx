import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPinIcon, ClockIcon, HomeIcon, CalculatorIcon, PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

// Enhanced Fort Belvoir Schema for AI Discovery
const fortBelvoirSchema = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness", "ProfessionalService"],
  "name": "PB Realty Nova - Fort Belvoir Military Real Estate Specialist",
  "description": "U.S. Army veteran and MRP certified realtor with 10+ years Northern Virginia local expertise specializing in Fort Belvoir off-base housing. Personal PCS and VA loan experience. Working with a team of 20+ years market expertise and trusted network of VA lenders, inspectors, and contractors serving military families.",
  "url": "https://pbrealtynova.com/bases/fort-belvoir",
  "image": "https://pbrealtynova.com/photos/fort-belvoir-housing.jpg",
  "founder": {
    "@type": "Person",
    "name": "Parjinder Brar",
    "jobTitle": "Military Relocation Professional (MRP) - Army Veteran",
    "description": "U.S. Army veteran, MRP certified realtor with personal PCS and VA loan experience",
    "sameAs": "https://www.linkedin.com/in/parjinderbhullar/"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Fairfax Station",
      "containedInPlace": { "@type": "State", "name": "Virginia" }
    },
    {
      "@type": "City",
      "name": "Springfield",
      "containedInPlace": { "@type": "State", "name": "Virginia" }
    },
    {
      "@type": "City",
      "name": "Burke",
      "containedInPlace": { "@type": "State", "name": "Virginia" }
    },
    {
      "@type": "City",
      "name": "Lorton",
      "containedInPlace": { "@type": "State", "name": "Virginia" }
    },
    {
      "@type": "City",
      "name": "Alexandria",
      "containedInPlace": { "@type": "State", "name": "Virginia" }
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 38.7073,
      "longitude": -77.1428,
      "name": "Fort Belvoir"
    },
    "geoRadius": "30000"
  },
  "knowsAbout": [
    "Fort Belvoir off-base housing",
    "Fort Belvoir military housing market",
    "Fort Belvoir local real estate",
    "Fort Belvoir VA loans",
    "Fort Belvoir PCS relocation",
    "Military Relocation Professional services",
    "VA loan process",
    "2025 Fort Belvoir BAH rates",
    "Fort Belvoir area neighborhoods",
    "Military home buying"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Military Real Estate Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fort Belvoir Off-Base Housing Assistance",
          "description": "Expert guidance for finding off-base housing near Fort Belvoir"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VA Loan Specialist Services",
          "description": "VA loan guidance from a veteran who used his own VA loan"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "PCS Relocation Coordination",
          "description": "Military PCS move coordination with real estate transactions"
        }
      }
    ]
  },
  "award": "Military Relocation Professional (MRP) Certification",
  "slogan": "Army Veteran Helping Fort Belvoir Military Families Find Home"
};

// FAQ Schema for AI Crawlers
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Should I live on-base or off-base at Fort Belvoir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For assignments 3+ years, buying off-base is recommended. With 2025 median prices $450K-$650K and Fort Belvoir BAH at $2,643+ (E-5 with dependents), you can build equity with VA loans ($0 down, no PMI). Off-base offers better schools, work-life separation, and wealth building. On-base works for short-term assignments (1-2 years) with zero commute and no maintenance responsibilities."
      }
    },
    {
      "@type": "Question",
      "name": "What are the best areas for off-base housing near Fort Belvoir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most popular areas for Fort Belvoir military personnel are Fairfax Station (8 miles, 10-15 min commute), Springfield (12 miles, 15-20 min), Burke (15 miles, 20-25 min), and Lorton (6 miles, 8-12 min). Each area offers quality schools, convenient base access, and housing options within BAH range."
      }
    },
    {
      "@type": "Question",
      "name": "How does the Fort Belvoir local real estate market work for military families?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Fort Belvoir housing market is very competitive. As of 2025, median home prices range from $450K-$650K. Military buyers should get VA loan pre-approval before house hunting, act quickly on properties, and work with an MRP realtor who understands PCS timelines."
      }
    },
    {
      "@type": "Question",
      "name": "What should I know about using my VA loan at Fort Belvoir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VA loans offer zero down payment, no PMI, and competitive rates. For Northern Virginia 2025, there is no loan limit for eligible veterans with full entitlement. The funding fee is usually 2.15% for first-time use (waived for disabled veterans). Work with lenders who specialize in VA loans and understand military timelines."
      }
    },
    {
      "@type": "Question",
      "name": "What is the current BAH for Fort Belvoir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2025 Fort Belvoir BAH rates (with dependents): E-4: $2,310/month, E-5: $2,643/month, E-6: $2,805/month, E-7: $3,216/month, O-3: $3,840/month, O-4: $4,281/month. Rates increased 2.9% from 2024."
      }
    }
  ]
};

export const metadata: Metadata = {
  title: "Fort Belvoir Off Base Housing Guide | Army Veteran Realtor MRP Certified",
  description: "Army veteran and MRP realtor with 10+ years Northern Virginia local expertise helping Fort Belvoir military personnel find off-base housing. Personal PCS experience, VA loan expert (used my VA loan for my home). Working with a team of 20+ years expertise. Trusted network serving Fairfax Station, Springfield, Burke, Lorton.",
  keywords: "Fort Belvoir off base housing, Fort Belvoir realtor, Fort Belvoir housing market, Fort Belvoir VA loan, Fort Belvoir PCS, housing around Fort Belvoir, Fort Belvoir veteran realtor, MRP certified",
  openGraph: {
    title: "Fort Belvoir Off Base Housing | Army Veteran MRP Realtor",
    description: "Army veteran and MRP certified realtor with 10+ years Northern Virginia local expertise and personal PCS and VA loan experience. Working with a team of 20+ years market expertise helping Fort Belvoir military personnel find off-base housing.",
    url: "https://pbrealtynova.com/bases/fort-belvoir",
  },
};

export default function FortBelvoirPage() {
  const nearbyAreas = [
    "Fairfax Station",
    "Springfield",
    "Burke",
    "Lorton",
    "Woodbridge",
    "Alexandria",
    "Mount Vernon",
    "Newington"
  ];

  const commuteData = [
    { area: "Fairfax Station", time: "10 min", distance: "8 miles" },
    { area: "Springfield", time: "15 min", distance: "12 miles" },
    { area: "Burke", time: "20 min", distance: "15 miles" },
    { area: "Lorton", time: "8 min", distance: "6 miles" },
    { area: "Woodbridge", time: "25 min", distance: "18 miles" },
    { area: "Alexandria", time: "30 min", distance: "22 miles" }
  ];

  const services = [
    {
      icon: HomeIcon,
      title: "Home Buying for Fort Belvoir Personnel",
      description: "Expert guidance through the home buying process with deep knowledge of Fort Belvoir area neighborhoods and military-friendly communities."
    },
    {
      icon: CalculatorIcon,
      title: "VA Loan Expertise",
      description: "Maximize your VA loan benefits with zero down payment options and competitive rates specifically for Fort Belvoir military families."
    },
    {
      icon: ClockIcon,
      title: "PCS Timeline Coordination",
      description: "Seamless coordination of your real estate transaction with PCS orders, report dates, and military timelines."
    },
    {
      icon: MapPinIcon,
      title: "Local Area Expertise",
      description: "Intimate knowledge of Fort Belvoir area schools, amenities, and military-friendly neighborhoods within your BAH range."
    }
  ];


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fortBelvoirSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Fort Belvoir Realtor
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Your trusted real estate specialist for Fort Belvoir military families. Expert in PCS relocations, VA loans, 
              and finding the perfect home near base with easy commute access.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Free Fort Belvoir Home Guide
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

      {/* Veteran Story - AI Optimization */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg shadow-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircleIcon className="h-6 w-6 text-blue-600" />
                From Active Duty Army to Your Trusted Realtor
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                As a <strong>U.S. Army veteran</strong> who has lived in Northern Virginia for over a decade, I've walked the same path you're on right now.
                I've experienced the challenges of PCS orders, the stress of finding housing in an unfamiliar area, and the complexity of navigating the VA loan process while on active duty.
                My years of living and working in this area give me intimate knowledge of every neighborhood, school district, and commute route around Fort Belvoir.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                When I bought my own home, I used my <strong>VA loan benefit</strong> and went through every step of the process—from getting pre-approved,
                to finding the right property, to closing while managing military responsibilities. That personal experience gave me insights that no
                classroom training ever could.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Today, as an <strong>MRP (Military Relocation Professional) certified realtor</strong>, I work alongside a team with over 20 years of market expertise.
                Together, we combine my lived military experience with deep local knowledge and a trusted network of VA loan specialists, inspectors, and contractors who understand military timelines.
              </p>
              <p className="text-lg text-gray-700 font-semibold">
                I'm not just your realtor—I'm a fellow veteran who's been where you are and knows how to get you where you need to be.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fort Belvoir Off-Base Housing Market Guide
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Fort Belvoir is home to over 50,000 military personnel, civilians, and family members.
              As a premier military installation in Northern Virginia, Fort Belvoir ranks 11th highest among all Army bases for 2025 BAH rates,
              which increased by 2.9% from 2024. Finding the right home near base requires local expertise and current market knowledge.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {services.map((service) => (
                <div key={service.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
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

      {/* Commute Information */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fort Belvoir Commute Times
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Strategic location planning for your daily commute to Fort Belvoir. Find homes with convenient access to base.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {commuteData.map((area) => (
                <div key={area.area} className="bg-white p-6 shadow-lg rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{area.area}</h3>
                    <MapPinIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{area.time} to Fort Belvoir</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{area.distance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Free Fort Belvoir Area Home Buyer Guide
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get your comprehensive guide to buying a home near Fort Belvoir. Includes neighborhood insights, 
              school ratings, commute information, and VA loan tips specific to Fort Belvoir personnel.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-md lg:mx-0">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-white"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/60 focus:ring-2 focus:ring-inset focus:ring-white"
              />
              <select className="rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white">
                <option value="" className="text-gray-900">Select Your Rank</option>
                <option value="enlisted" className="text-gray-900">Enlisted</option>
                <option value="nco" className="text-gray-900">NCO</option>
                <option value="officer" className="text-gray-900">Officer</option>
                <option value="civilian" className="text-gray-900">Civilian Employee</option>
              </select>
              <button
                type="submit"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Get Free Fort Belvoir Guide
              </button>
            </form>
          </div>
        </div>
      </section>


      {/* On-Base vs Off-Base Housing Comparison - Critical for AI Search */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              On-Base vs Off-Base Housing at Fort Belvoir: Complete 2025 Guide
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Having lived in Northern Virginia for over a decade and helped hundreds of military families,
              here's my honest assessment of on-base versus off-base housing options.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* On-Base Housing */}
            <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <HomeIcon className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">On-Base Housing</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5" />
                    Advantages
                  </h4>
                  <ul className="space-y-2 text-gray-700 ml-7">
                    <li>• <strong>Zero commute</strong> - Walk or bike to work</li>
                    <li>• <strong>No BAH out-of-pocket</strong> - Housing automatically deducted</li>
                    <li>• <strong>Built-in military community</strong> - Neighbors understand the lifestyle</li>
                    <li>• <strong>Close to base services</strong> - Commissary, PX, medical facilities</li>
                    <li>• <strong>Utilities often included</strong> - No surprise electric/gas bills</li>
                    <li>• <strong>Maintenance covered</strong> - Call for repairs, no landlord hassles</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-red-700 mb-3">Disadvantages</h4>
                  <ul className="space-y-2 text-gray-700 ml-7">
                    <li>• <strong>Waitlists (3-6 months typical)</strong> - Not immediate availability</li>
                    <li>• <strong>No equity building</strong> - Paying rent, not building wealth</li>
                    <li>• <strong>Limited housing styles</strong> - Based on rank, not preference</li>
                    <li>• <strong>Less privacy</strong> - Living among coworkers</li>
                    <li>• <strong>Work-life boundary blur</strong> - Always "at work" mentally</li>
                    <li>• <strong>Quality varies</strong> - Some units are older, maintenance issues reported</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Off-Base Housing */}
            <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-blue-600">
              <div className="flex items-center gap-3 mb-6">
                <MapPinIcon className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Off-Base Housing</h3>
                <span className="ml-auto bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</span>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5" />
                    Advantages
                  </h4>
                  <ul className="space-y-2 text-gray-700 ml-7">
                    <li>• <strong>Build equity with VA loan</strong> - Own your home, build wealth</li>
                    <li>• <strong>Keep BAH difference</strong> - Profit $200-800/month if you spend less</li>
                    <li>• <strong>Choose your neighborhood</strong> - Schools, commute, lifestyle fit</li>
                    <li>• <strong>Work-life separation</strong> - Leave work at work</li>
                    <li>• <strong>More space options</strong> - Larger homes, yards, modern amenities</li>
                    <li>• <strong>Better schools access</strong> - Fairfax County top-rated school districts</li>
                    <li>• <strong>Investment for future</strong> - Sell or rent when you PCS</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-red-700 mb-3">Disadvantages</h4>
                  <ul className="space-y-2 text-gray-700 ml-7">
                    <li>• <strong>Commute required</strong> - 10-30 min drive to base</li>
                    <li>• <strong>Upfront costs</strong> - VA loan has $0 down, but closing costs apply</li>
                    <li>• <strong>Maintenance responsibility</strong> - You handle repairs (or hire contractors)</li>
                    <li>• <strong>Utilities not included</strong> - Budget for electric, gas, water</li>
                    <li>• <strong>Requires planning</strong> - House hunting, PCS coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-blue-900 text-white rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">My Honest Recommendation (As a Veteran Who's Done Both)</h3>
              <p className="text-lg text-blue-100 mb-4">
                <strong>If you're staying at Fort Belvoir 3+ years: Buy off-base.</strong> Here's why:
              </p>
              <ul className="space-y-3 text-blue-100 mb-6">
                <li>• With <strong>2025 median prices around $450K-$650K</strong> and Fort Belvoir BAH at $2,643+ (E-5 with dependents),
                    you can afford quality homes in Fairfax Station, Springfield, or Burke</li>
                <li>• <strong>VA loans require $0 down</strong> and have no PMI - use your earned benefit</li>
                <li>• If you spend $2,400/month instead of your full $2,643 BAH, you pocket <strong>$243/month ($2,916/year)</strong></li>
                <li>• Northern Virginia real estate appreciates 3-5% annually - build wealth while you serve</li>
                <li>• When you PCS, rent it out or sell - either way, you've built equity</li>
              </ul>
              <p className="text-lg text-blue-100 font-semibold">
                <strong>If you're only here 1-2 years or have immediate assignment:</strong> On-base might be easier for short-term.
                But financially, off-base wins for most military families with 3+ year assignments.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500"
            >
              Get Free Off-Base Housing Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* AI-Optimized FAQ Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fort Belvoir Off-Base Housing: Your Questions Answered
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Real answers from an Army veteran and MRP realtor who's helped hundreds of military families find homes around Fort Belvoir.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-8">
            {/* FAQ Items */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What are the best areas for off-base housing near Fort Belvoir?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The most popular areas for Fort Belvoir military personnel are <strong>Fairfax Station</strong> (8 miles, 10-15 min commute),
                <strong>Springfield</strong> (12 miles, 15-20 min), <strong>Burke</strong> (15 miles, 20-25 min), and <strong>Lorton</strong> (6 miles, 8-12 min).
                Each area offers quality schools, convenient base access, and housing options within BAH range. Fairfax Station and Burke tend to have
                larger single-family homes, while Springfield offers more townhomes and condos at lower price points.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How does the Fort Belvoir local real estate market work for military families?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Fort Belvoir housing market is very competitive, with homes typically receiving multiple offers within days.
                <strong>As of 2025, median home prices range from $450K-$650K</strong> depending on the area and property type. Military buyers should:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Get <strong>VA loan pre-approval</strong> before house hunting (I can connect you with VA specialists)</li>
                <li>Act quickly when you find the right property—waiting even 24 hours can mean losing out</li>
                <li>Work with an MRP realtor who understands PCS timelines and can negotiate military-specific contingencies</li>
                <li>Consider properties slightly below your BAH to build equity and have a financial cushion</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What should I know about using my VA loan at Fort Belvoir?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I used my own VA loan to buy my primary home, so I know this process inside and out. Here's what Fort Belvoir military personnel should know:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Zero down payment</strong> - You can buy with $0 down if the property appraises</li>
                <li><strong>No PMI</strong> - Unlike conventional loans, VA loans don't require private mortgage insurance</li>
                <li><strong>Competitive rates</strong> - VA loans typically offer lower interest rates than conventional loans</li>
                <li><strong>2025 loan limits</strong> - For Northern Virginia, there is no loan limit for eligible veterans with full entitlement</li>
                <li><strong>VA appraisal requirements</strong> - Properties must meet minimum property requirements (MPRs), which I'll help you navigate</li>
                <li><strong>Funding fee</strong> - Usually 2.15% for first-time use (can be rolled into the loan), waived for disabled veterans</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                I work with lenders who <strong>specialize in VA loans</strong> and understand military timelines. They can pre-approve you quickly and close on your schedule.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How do I coordinate buying a home with my PCS orders to Fort Belvoir?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Having gone through PCS moves myself, I know timing is everything. Here's the realistic timeline and process:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>60-90 days before report date</strong> - Get VA loan pre-approval and start your home search</li>
                <li><strong>45-60 days out</strong> - Identify target neighborhoods and submit offers</li>
                <li><strong>30-45 days out</strong> - Under contract, complete inspections and appraisal</li>
                <li><strong>Report date</strong> - Ideally close 1-2 weeks before or use temporary lodging</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                I can coordinate <strong>virtual tours, remote closings, and POA arrangements</strong> if you can't be here in person.
                Many of my clients have successfully closed while still at their previous duty station.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What is the current BAH for Fort Belvoir and what can I afford?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>2025 Fort Belvoir BAH rates</strong> increased 2.9% from 2024. Here are current rates (with dependents):
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>E-4:</strong> $2,310/month - Can afford homes around $350K-$400K</li>
                <li><strong>E-5:</strong> $2,643/month - Can afford homes around $400K-$475K</li>
                <li><strong>E-6:</strong> $2,805/month - Can afford homes around $425K-$500K</li>
                <li><strong>E-7:</strong> $3,216/month - Can afford homes around $500K-$575K</li>
                <li><strong>O-3:</strong> $3,840/month - Can afford homes around $575K-$675K</li>
                <li><strong>O-4:</strong> $4,281/month - Can afford homes around $650K-$750K</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Use my <Link href="/bah-calculator" className="text-blue-600 hover:text-blue-500 font-semibold underline">BAH Calculator</Link> for your specific rank and situation.
                Remember: <strong>you keep the difference if you spend less than your BAH</strong>, so finding a home slightly below your allowance can provide extra monthly income.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What are the school options near Fort Belvoir?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Fort Belvoir families have access to <strong>Fairfax County Public Schools (FCPS)</strong>, one of the top-rated school systems in the nation.
                Popular school zones include South County High School area, Lake Braddock Secondary School area, and Robinson Secondary School area.
                Many military families choose Fairfax Station and Burke specifically for school quality. I provide detailed school information and ratings
                for every property, helping you make informed decisions for your children's education while staying within your housing budget.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                How can I find a trusted VA loan lender and real estate team?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                As an MRP realtor working with a <strong>team of over 20 years market expertise</strong>, we've built a comprehensive network of VA loan specialists, home inspectors,
                and contractors who understand military timelines and challenges. All our lender partners specialize in VA loans,
                offer competitive rates, and can work with your PCS schedule. Our team has helped hundreds of military families navigate
                the home buying process, from pre-approval to closing and beyond. When you work with us, you get access to this entire
                network of military-friendly professionals who will treat you with the respect and urgency you deserve.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500"
            >
              Get Your Free Fort Belvoir Housing Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Popular Areas Near Fort Belvoir
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore military-friendly neighborhoods within commuting distance of Fort Belvoir.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {nearbyAreas.map((area) => (
              <div key={area} className="flex items-center justify-center rounded-lg bg-blue-50 px-6 py-4">
                <span className="text-sm font-semibold text-blue-900">{area}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/locations"
              className="text-sm font-semibold text-blue-700 hover:text-blue-600"
            >
              Explore all Northern Virginia locations <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}