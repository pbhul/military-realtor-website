import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HomeIcon, CalculatorIcon, ClockIcon, PhoneIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Military Real Estate Services | Northern Virginia PCS & VA Loan Specialist",
  description: "Comprehensive military real estate services for Northern Virginia. PCS relocations, VA loan assistance, military home buying/selling, and specialized support for Fort Belvoir, Pentagon, Quantico personnel.",
  keywords: "military real estate services, PCS relocation services, VA loan assistance, military home buying, military home selling, Northern Virginia military realtor services",
  openGraph: {
    title: "Military Real Estate Services | Northern Virginia PCS & VA Loan Specialist",
    description: "Comprehensive military real estate services for Northern Virginia. PCS relocations, VA loan assistance, and specialized support for military families.",
    url: "https://www.militaryrealestatenova.com/services",
  },
};

export default function ServicesPage() {
  const services = [
    {
      icon: ClockIcon,
      title: "PCS Relocation Services",
      description: "Comprehensive support for military families during PCS moves, including timeline coordination, temporary lodging assistance, and seamless transitions.",
      features: [
        "PCS timeline coordination with military orders",
        "Temporary lodging and rental assistance",
        "Remote transaction capabilities",
        "Deployment-friendly scheduling",
        "Household goods coordination",
        "Base housing office liaison"
      ],
      link: "/services/pcs-relocation"
    },
    {
      icon: CalculatorIcon,
      title: "VA Loan Specialist Services",
      description: "Expert guidance through VA loan benefits, helping military families maximize their buying power with zero down payment options.",
      features: [
        "VA loan pre-qualification assistance",
        "Certificate of Eligibility help",
        "Zero down payment strategies",
        "Competitive rate negotiations",
        "VA funding fee guidance",
        "Multiple VA loan usage education"
      ],
      link: "/services/va-loans"
    },
    {
      icon: HomeIcon,
      title: "Military Home Buying Services",
      description: "Specialized home buying support designed around military life, deployment schedules, and unique family needs.",
      features: [
        "Military-friendly neighborhood guidance",
        "School district expertise for military families",
        "BAH optimization strategies",
        "Investment property guidance",
        "New construction navigation",
        "Military spouse employment considerations"
      ],
      link: "/services/home-buying"
    },
    {
      icon: ShieldCheckIcon,
      title: "Military Home Selling Services",
      description: "Strategic home selling services for military families, including deployment management and PCS timeline coordination.",
      features: [
        "Pre-deployment preparation",
        "Remote selling capabilities",
        "Market timing strategies",
        "Tenant screening for rentals",
        "Property management coordination",
        "Tax benefit optimization"
      ],
      link: "/services/home-selling"
    },
    {
      icon: DocumentTextIcon,
      title: "Military Spouse Support Services",
      description: "Dedicated support for military spouses navigating real estate decisions, career transitions, and family relocations.",
      features: [
        "Flexible scheduling around deployments",
        "Career transition support",
        "Childcare-friendly appointments",
        "Virtual consultation options",
        "Military spouse network connections",
        "Educational workshop access"
      ],
      link: "/services/military-spouse"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "Understanding your military status, timeline, and specific needs"
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Creating a customized plan that works with your PCS timeline"
    },
    {
      step: "3",
      title: "Execution & Support",
      description: "Professional guidance through every step of the process"
    },
    {
      step: "4",
      title: "Closing & Beyond",
      description: "Continued support even after your transaction is complete"
    }
  ];

  const testimonials = [
    {
      content: "The PCS relocation service was incredible. They coordinated everything with our moving timeline and made our transition to Northern Virginia seamless.",
      author: "Major Williams",
      branch: "Army",
      service: "PCS Relocation"
    },
    {
      content: "VA loan expertise saved us thousands. They found us a lender with the best rates and walked us through the entire process.",
      author: "SSG Martinez",
      branch: "Air Force", 
      service: "VA Loan Services"
    },
    {
      content: "As a military spouse, finding someone who understood our unique challenges was amazing. Professional, flexible, and truly caring.",
      author: "Sarah Chen",
      branch: "Navy Spouse",
      service: "Military Spouse Support"
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
              Military Real Estate Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Comprehensive real estate services designed specifically for military families in Northern Virginia. 
              From PCS relocations to VA loans, we understand your unique needs and timeline.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Start Your Journey
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

      {/* Services Overview */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Specialized Military Real Estate Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every service is designed with military life in mind - from deployment schedules to PCS timelines.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
              {services.map((service, index) => (
                <div key={service.title} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={service.link}
                        className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
                      >
                        Learn More <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Military-Focused Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A streamlined approach designed to work with your military schedule and requirements.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Whether you&apos;re buying, selling, or need PCS assistance, we&apos;re here to help make your 
              military real estate experience smooth and successful.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:+1-703-477-2606"
                className="flex items-center gap-2 text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                <PhoneIcon className="h-5 w-5" />
                Call Now: (703) 477-2606
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}