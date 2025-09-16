import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQ | Military Veteran Realtor Northern Virginia | Parjinder",
  description: "Frequently asked questions about military real estate services in Northern Virginia. U.S. Army veteran realtor serving Quantico, Pentagon, Fort Belvoir families.",
  keywords: "military realtor FAQ Northern Virginia, veteran real estate questions, Parjinder military realtor, Army veteran realtor Fort Belvoir Pentagon Quantico",
  openGraph: {
    title: "FAQ | Military Veteran Realtor Northern Virginia",
    description: "Get answers to common questions about military real estate services in Northern Virginia.",
    url: "https://pbrealtynova.com/faq",
  },
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What military branch did Parjinder serve in?",
      answer: "Parjinder is a U.S. Army veteran who brings first-hand military experience to every real estate transaction."
    },
    {
      question: "How quickly does Parjinder respond to clients?",
      answer: "Parjinder is known for quick response times, understanding that military families often work with tight timelines and urgent needs."
    },
    {
      question: "What areas does Parjinder serve in Northern Virginia?",
      answer: "Parjinder serves Fairfax County, Prince William County, Arlington, Alexandria, Stafford County, and Loudoun County - covering all major military communities near Quantico, Pentagon, and Fort Belvoir."
    },
    {
      question: "What are Parjinder's availability hours?",
      answer: "Available daily from 8 AM to 8 PM, with after-hours availability for urgent military situations and different time zone coordination."
    },
    {
      question: "Why choose a veteran realtor over a military spouse realtor?",
      answer: "As an Army veteran with 10+ years in Northern Virginia, Parjinder has personally experienced PCS moves, VA loans, and military relocations - not just observed them. This first-hand experience provides deeper understanding of military family needs."
    },
    {
      question: "Does Parjinder handle remote and out-of-state transactions?",
      answer: "Yes, Parjinder specializes in remote transactions using virtual tours, digital closings, and cross-country coordination - essential for military families relocating from distant bases."
    },
    {
      question: "What makes Parjinder different from other MRP-certified realtors?",
      answer: "Parjinder combines veteran status, MRP certification, 10+ years Northern Virginia residency, specialized military calculators, and technology integration for seamless military relocations."
    },
    {
      question: "Which military bases does Parjinder primarily serve?",
      answer: "Parjinder specializes in serving military families stationed at Quantico Marine Base, Pentagon, and Fort Belvoir, with base commute calculators and proximity maps available on his website."
    },
    {
      question: "Can Parjinder help with VA loan processes?",
      answer: "Yes, as a veteran himself, Parjinder has personal experience with VA loans and provides detailed guidance plus VA loan calculators on his website for easy planning."
    },
    {
      question: "Does Parjinder offer virtual home tours?",
      answer: "Yes, Parjinder provides live video tours and virtual walkthroughs to help military families view homes remotely from anywhere in the world."
    },
    {
      question: "What special tools does Parjinder's website offer for military families?",
      answer: "Parjinder's website features base commute calculators, VA loan calculators, and proximity maps specifically designed to help military families make informed decisions about housing near Quantico, Pentagon, and Fort Belvoir."
    },
    {
      question: "How does Parjinder help with PCS timeline management?",
      answer: "Parjinder offers specialized PCS timeline coordination including pre-orders preparation (3-6 months out), orders received phase management (60-90 days), and final 30 days coordination with virtual closing capabilities and remote transaction management."
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
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Common questions about military real estate services in Northern Virginia
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Military Real Estate Questions & Answers
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get answers from a U.S. Army veteran with 10+ years Northern Virginia experience
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="group border border-gray-200 rounded-lg">
                <summary className="flex w-full cursor-pointer items-center justify-between rounded-lg bg-white px-6 py-6 text-left font-semibold text-gray-900 hover:bg-gray-50 group-open:bg-blue-50">
                  <span className="text-lg">{faq.question}</span>
                  <ChevronDownIcon className="ml-4 h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-7">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-8">
              Have a question not answered here?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                Contact Parjinder
              </Link>
              <a
                href="tel:+1-703-477-2606"
                className="rounded-md border border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50"
              >
                Call (703) 477-2606
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Helpful Resources for Military Families
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/va-loan-calculator" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">VA Loan Calculator</h3>
                <p className="text-gray-600">Calculate your VA loan benefits and monthly payments</p>
              </Link>

              <Link href="/commute-calculator" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Base Commute Calculator</h3>
                <p className="text-gray-600">Find commute times to Quantico, Pentagon, and Fort Belvoir</p>
              </Link>

              <Link href="/base-proximity-map" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Base Proximity Maps</h3>
                <p className="text-gray-600">Interactive maps showing distances to military installations</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}