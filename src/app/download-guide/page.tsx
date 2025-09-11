'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { DocumentArrowDownIcon, CheckCircleIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

function DownloadGuideContent() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');

  useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam));
    }
  }, [searchParams]);

  const guideContents = [
    {
      title: "🎖️ PCS Timeline Checklist",
      description: "Month-by-month timeline for military relocations with key milestones and deadlines"
    },
    {
      title: "💰 VA Loan Maximization Guide",
      description: "How to get the most from your VA loan benefits, including eligibility and limits"
    },
    {
      title: "🗺️ Base Proximity Maps",
      description: "Best neighborhoods for commuting to Fort Belvoir, Pentagon, and Quantico"
    },
    {
      title: "🏫 School District Rankings",
      description: "Top-rated schools and districts preferred by military families"
    },
    {
      title: "🏠 BAH Optimization Strategies",
      description: "How to maximize your Basic Allowance for Housing in Northern Virginia"
    },
    {
      title: "✈️ Deployment Real Estate Management",
      description: "Managing property and real estate transactions while deployed"
    },
    {
      title: "💡 Northern Virginia Insider Tips",
      description: "Local secrets and tips known only to military families in the area"
    },
    {
      title: "📋 Military-Specific Checklists",
      description: "Customized checklists for buying, selling, and relocating as military"
    }
  ];

  const handleDownload = () => {
    // In a real implementation, this would generate and download a PDF
    // For now, we'll simulate the download
    const link = document.createElement('a');
    link.href = '/military-real-estate-guide.pdf'; // This would be the actual PDF file
    link.download = 'Military-Real-Estate-Guide-Northern-Virginia.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header />
      
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20 mb-8">
              <DocumentArrowDownIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              🎖️ Your FREE Military Real Estate Guide
            </h1>
            <p className="text-xl leading-8 text-blue-100 mb-8">
              Comprehensive Northern Virginia real estate information specifically for military families
            </p>
            
            {email && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
                <p className="text-lg">
                  ✅ Guide ready for: <strong>{email}</strong>
                </p>
                <p className="text-blue-100 mt-2">
                  Check your email for additional resources and follow-up from your military real estate specialist.
                </p>
              </div>
            )}
            
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              <DocumentArrowDownIcon className="h-6 w-6" />
              Download Your Guide (PDF)
            </button>
          </div>
        </div>
      </div>

      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What&apos;s Inside Your Guide
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Over 50 pages of military-specific real estate information for Northern Virginia
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {guideContents.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <CheckCircleIcon className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              🤝 Ready to Work Together?
            </h2>
            <p className="text-lg leading-8 text-gray-600 mb-12">
              Your Military Real Estate Specialist will be in touch within 24 hours. 
              Need to talk sooner? Contact us directly:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:+1-703-477-2606"
                className="flex items-center gap-3 bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                <PhoneIcon className="h-5 w-5" />
                (703) 477-2606
              </a>
              <a 
                href="mailto:parjinder@pbrealtynova.com"
                className="flex items-center gap-3 bg-white text-blue-900 border border-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <EnvelopeIcon className="h-5 w-5" />
                Email Us
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">Personal response during business hours</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🎖️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Military Expertise</h3>
              <p className="text-gray-600">MRP Certified with specialized military training</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🎖️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Veteran Owned</h3>
              <p className="text-gray-600">Military family supporting military families</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default function DownloadGuidePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DownloadGuideContent />
    </Suspense>
  );
}