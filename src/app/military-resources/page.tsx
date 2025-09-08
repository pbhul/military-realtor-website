import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalculatorIcon, DocumentTextIcon, HomeIcon, PhoneIcon, BookOpenIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Military Resources | VA Loan & PCS Real Estate Guides Northern Virginia",
  description: "Comprehensive military real estate resources for Northern Virginia families. VA loan guidance, PCS timelines, BAH housing guides, and military community information.",
  keywords: "military real estate resources, VA loan guide, PCS timeline, military housing allowance, BAH housing guide, military family resources Northern Virginia",
  openGraph: {
    title: "Military Resources | VA Loan & PCS Real Estate Guides Northern Virginia",
    description: "Comprehensive military real estate resources for Northern Virginia families. VA loan guidance, PCS timelines, and housing guides.",
    url: "https://www.militaryrealestatenova.com/military-resources",
  },
};

export default function MilitaryResourcesPage() {
  const resources = [
    {
      icon: CalculatorIcon,
      title: "VA Loan Guidance",
      description: "Everything you need to know about using your VA loan benefits for home purchases in Northern Virginia.",
      topics: [
        "VA loan eligibility requirements",
        "Certificate of Eligibility process", 
        "Zero down payment strategies",
        "VA funding fee information",
        "Using VA loans multiple times",
        "VA loan limits in Northern Virginia"
      ],
      link: "/va-loan-guidance"
    },
    {
      icon: ClockIcon,
      title: "PCS Timeline Guide",
      description: "Step-by-step real estate timeline for military moves, coordinated with PCS orders and requirements.",
      topics: [
        "90-day PCS real estate timeline",
        "Coordinating with military orders",
        "Remote closing procedures",
        "Temporary lodging arrangements",
        "Household goods coordination",
        "School enrollment timing"
      ],
      link: "/pcs-timeline"
    },
    {
      icon: HomeIcon,
      title: "BAH Housing Guide",
      description: "Maximizing your Basic Allowance for Housing to find the perfect home within your budget.",
      topics: [
        "Current BAH rates by zip code",
        "BAH vs mortgage payment strategies",
        "Geographic BAH differences",
        "Utilities and BAH planning",
        "BAH for different ranks",
        "Off-base vs on-base housing decisions"
      ],
      link: "/bah-housing-guide"
    },
    {
      icon: DocumentTextIcon,
      title: "Military Community Guides",
      description: "Detailed information about military-friendly neighborhoods and communities in Northern Virginia.",
      topics: [
        "Base proximity and commute times",
        "School district ratings and reviews",
        "Military family amenities",
        "Community support services",
        "Recreation and family activities",
        "Military spouse employment opportunities"
      ],
      link: "/military-communities"
    },
    {
      icon: BookOpenIcon,
      title: "First-Time Military Buyer Guide",
      description: "Complete guide for military personnel buying their first home, from pre-approval to closing.",
      topics: [
        "Pre-approval process for military",
        "Home inspection priorities",
        "Closing cost considerations",
        "Homeownership during deployment",
        "Property management options",
        "Building equity vs renting"
      ],
      link: "/first-time-military-buyer"
    },
    {
      icon: HomeIcon,
      title: "Military Selling Guide",
      description: "Strategies for selling your home when PCSing, including timing, pricing, and remote management.",
      topics: [
        "Timing your home sale with PCS",
        "Pricing strategies for quick sale",
        "Staging tips for military families",
        "Remote selling procedures",
        "Rent vs sell decision matrix",
        "Tax implications of military moves"
      ],
      link: "/military-selling-guide"
    }
  ];

  const quickLinks = [
    {
      title: "🏠 BAH Rate Calculator",
      description: "Calculate your housing allowance for Fort Belvoir, Pentagon, and Quantico",
      link: "/bah-calculator"
    },
    {
      title: "🚗 Base Commute Calculator",
      description: "Find the best locations based on commute times to your base",
      link: "/commute-calculator"
    },
    {
      title: "🗺️ Interactive Base Proximity Map",
      description: "Visual map showing neighborhoods and their proximity to military bases",
      link: "/base-proximity-map"
    },
    {
      title: "💰 Current VA Loan Rates",
      description: "Up-to-date VA loan rates and lender recommendations",
      link: "/va-loan-guidance"
    },
    {
      title: "📋 PCS Timeline Checklist",
      description: "Printable checklist for your real estate PCS timeline",
      link: "/pcs-timeline"
    },
    {
      title: "🏫 School District Guide",
      description: "Northern Virginia school ratings for military families",
      link: "/military-communities"
    },
    {
      title: "🏛️ Military Housing Guide",
      description: "BAH optimization and housing allowance strategies",
      link: "/bah-housing-guide"
    }
  ];

  const faqs = [
    {
      question: "Can I use my VA loan benefit more than once?",
      answer: "Yes! You can use your VA loan benefit multiple times. Your entitlement may restore when you sell your home, or you may have remaining entitlement to purchase another property."
    },
    {
      question: "How do I coordinate home buying with PCS orders?",
      answer: "Start the process 90 days before your report date. We can work with remote closings, power of attorney, and coordinate with your military timeline."
    },
    {
      question: "What if I need to sell quickly due to military orders?",
      answer: "We specialize in quick military sales, including pricing strategies, staging, and marketing to military families. We can also discuss rent-to-own options if selling isn't feasible."
    },
    {
      question: "Can I buy a home while deployed?",
      answer: "Yes, many military members buy homes while deployed using remote processes, electronic signatures, and power of attorney arrangements."
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Military Real Estate Resources
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Comprehensive guides and resources specifically designed for military families 
              navigating real estate in Northern Virginia. From VA loans to PCS timelines.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/bah-housing-guide"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Get Personal Guidance
              </Link>
              <a
                href="tel:+1-555-MILITARY"
                className="flex items-center gap-2 text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                <PhoneIcon className="h-5 w-5" />
                Call (555) MILITARY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Complete Military Real Estate Resource Library
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Everything you need to make informed real estate decisions as a military family.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {resources.map((resource) => (
                <div key={resource.title} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <resource.icon className="h-8 w-8 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">{resource.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">What&apos;s Included:</h4>
                    <ul className="space-y-2">
                      {resource.topics.map((topic, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={resource.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
                  >
                    Access Resource <span className="ml-1">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Quick Access Tools
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Frequently used resources and calculators for military families.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {quickLinks.map((link) => (
                <div key={link.title} className="bg-blue-50 rounded-lg p-6 hover:bg-blue-100 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{link.title}</h3>
                  <p className="text-gray-600 mb-4">{link.description}</p>
                  <Link
                    href={link.link}
                    className="text-blue-600 hover:text-blue-500 font-medium text-sm"
                  >
                    Access Tool →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Common questions from military families about real estate in Northern Virginia.
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/bah-housing-guide"
              className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
            >
              Have more questions? Contact us <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need Personalized Guidance?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              While these resources provide comprehensive information, every military family&apos;s 
              situation is unique. Let&apos;s discuss your specific needs and goals.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/bah-housing-guide"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:+1-555-MILITARY"
                className="flex items-center gap-2 text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                <PhoneIcon className="h-5 w-5" />
                Call Now: (555) MILITARY
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}