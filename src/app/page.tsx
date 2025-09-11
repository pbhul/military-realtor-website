'use client';

import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { PhoneIcon, MapPinIcon, ShieldCheckIcon, HomeIcon, DocumentTextIcon, CalculatorIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

// Dynamic imports for better code splitting
const Header = dynamic(() => import('@/components/Header'), {
  loading: () => <div className="h-16 bg-white shadow-sm"></div>
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-32 bg-gray-50"></div>,
  ssr: false
});

export default function Home() {
  const [leadFormData, setLeadFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    base: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleLeadInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLeadFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...leadFormData,
          sourceForm: 'Homepage PCS Guide'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setLeadFormData({
          fullName: '',
          email: '',
          phone: '',
          base: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Lead form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: ShieldCheckIcon,
      title: "MRP Certified Military Veteran",
      description: "Veteran-owned and Military Relocation Professional (MRP) certified with specialized training in military relocations, PCS moves, and deployment challenges."
    },
    {
      icon: HomeIcon,
      title: "VA Loan Process Guide",
      description: "Expert guidance through VA loan process, connecting you with trusted lenders and helping navigate the benefits you've earned."
    },
    {
      icon: MapPinIcon,
      title: "Local Knowledge",
      description: "Intimate knowledge of Fort Belvoir, Pentagon, and Quantico areas with base proximity insights and military community connections."
    },
    {
      icon: DocumentTextIcon,
      title: "PCS Timeline Expert",
      description: "Coordinating real estate transactions with military orders and deployment schedules from someone who understands the process."
    }
  ];

  const locations = [
    "Fort Belvoir Area",
    "Pentagon Region", 
    "Quantico Marine Base",
    "Fairfax County",
    "Alexandria",
    "Arlington",
    "Loudoun County",
    "Prince William County",
    "Stafford County",
    "Fredericksburg"
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-base font-medium text-white backdrop-blur-sm">
                🎖️ MRP Certified • Military Relocation Professional • Veteran Owned 🎖️
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Northern Virginia MRP Certified Military Realtor
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Veteran-owned & MRP Certified real estate services for military families at Fort Belvoir, Pentagon, and Quantico. 
              Specializing in PCS relocations, VA loan guidance, and military housing solutions with specialized military relocation training.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/pcs-timeline"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-lg hover:bg-blue-50 transition-colors"
              >
                🏠 Get Free PCS Guide
              </Link>
              <a
                href="tel:+1-703-477-2606"
                className="flex items-center gap-2 text-base font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
              >
                <PhoneIcon className="h-6 w-6" />
                Call (703) 477-2606
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Military Images */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose an MRP Certified Military Veteran?
            </h2>
            <div className="mt-8 flex justify-center">
              <Image
                className="h-24 w-24 rounded-full object-cover border-4 border-blue-200"
                src="/photos/Headshot.png"
                alt="Parjinder - Northern Virginia Military Realtor specializing in Fort Belvoir, Pentagon, and Quantico Marine Base relocations"
                width={96}
                height={96}
                priority
              />
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              As a Military Relocation Professional (MRP), I have specialized training beyond standard real estate education. 
              This certification ensures deep understanding of military life, PCS timelines, VA loans, and the unique challenges military families face.
            </p>
          </div>
          
          {/* Military Family with Keys Image */}
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <Image
                className="w-full rounded-lg shadow-xl"
                src="/photos/house-key-door.jpg"
                alt="Military family home keys - VA loan homeownership success in Northern Virginia near Fort Belvoir Pentagon Quantico"
                width={600}
                height={400}
                loading="lazy"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">🎖️ Military Families Trust Our Expertise</h3>
                <p className="text-lg text-gray-600">
                  We understand the unique challenges of military life - from sudden deployments to PCS moves. 
                  Our MRP certification ensures you get specialized support every step of the way.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🎖️</span>
                  <div>
                    <p className="font-semibold text-gray-900">Veteran-Owned Business</p>
                    <p className="text-gray-600">Supporting military families since 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 sm:py-32 relative">
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              🎖️ Serving Military Families Throughout Northern Virginia
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert knowledge of military communities near major installations and commuter-friendly neighborhoods.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {locations.map((location, index) => {
              // Create internal links for key military locations
              const locationLinks = {
                "Fort Belvoir Area": "/bases/fort-belvoir",
                "Pentagon Region": "/bases/pentagon", 
                "Quantico Marine Base": "/bases/quantico",
                "Fairfax County": "/locations/fairfax-county",
                "Alexandria": "/locations/alexandria",
                "Stafford County": "/locations/stafford"
              };
              
              const linkUrl = locationLinks[location as keyof typeof locationLinks];
              
              if (linkUrl) {
                return (
                  <Link key={location} href={linkUrl} className="flex items-center justify-center rounded-lg bg-blue-50 px-6 py-4 shadow-md border border-blue-100 hover:bg-blue-100 transition-colors">
                    <span className="text-sm font-semibold text-blue-900">{location}</span>
                  </Link>
                );
              } else {
                return (
                  <div key={location} className="flex items-center justify-center rounded-lg bg-blue-50 px-6 py-4 shadow-md border border-blue-100">
                    <span className="text-sm font-semibold text-blue-900">{location}</span>
                  </div>
                );
              }
            })}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/locations"
              className="text-sm font-semibold text-blue-600 hover:text-blue-500"
            >
              🗺️ View all service areas <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Military Personnel Lead Capture */}
      <section className="bg-blue-900 py-16 sm:py-24 relative overflow-hidden">
        {/* Military Background */}
        <div className="absolute inset-0">
          <Image
            className="h-full w-full object-cover"
            src="/photos/military-flag-background.jpg"
            alt="Northern Virginia military personnel saluting American flag - Fort Belvoir Pentagon Quantico real estate specialist"
            fill
            loading="lazy"
          />
          <div className="absolute inset-0 bg-blue-900/85"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                🎖️ Free Military PCS Real Estate Guide
              </h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                Get your comprehensive guide to buying or selling during a PCS move. Includes VA loan guidance, 
                timeline checklists, and Northern Virginia area insights from a fellow veteran.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="text-4xl">🎖️</span>
                <div>
                  <p className="font-semibold text-white">Trusted by 500+ Military Families</p>
                  <p className="text-blue-200">Join the community of successful relocations</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-md backdrop-blur-sm">
                  <p className="text-white text-center font-semibold">
                    🎉 Success! Check your email for your FREE Military Real Estate Guide. We&apos;ll be in touch within 24 hours!
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-md backdrop-blur-sm">
                  <p className="text-white text-center">
                    ❌ Sorry, there was an error. Please try calling us directly at (703) 477-2606.
                  </p>
                </div>
              )}

              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  value={leadFormData.fullName}
                  onChange={handleLeadInputChange}
                  placeholder="Full Name"
                  required
                  autoComplete="name"
                  inputMode="text"
                  className="w-full rounded-md border-0 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/70 focus:bg-white/20 focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                />
                <input
                  type="email"
                  name="email"
                  value={leadFormData.email}
                  onChange={handleLeadInputChange}
                  placeholder="Email Address"
                  required
                  autoComplete="email"
                  inputMode="email"
                  className="w-full rounded-md border-0 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/70 focus:bg-white/20 focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                />
                <input
                  type="tel"
                  name="phone"
                  value={leadFormData.phone}
                  onChange={handleLeadInputChange}
                  placeholder="Phone Number"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  className="w-full rounded-md border-0 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/70 focus:bg-white/20 focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                />
                <select 
                  name="base"
                  value={leadFormData.base}
                  onChange={handleLeadInputChange}
                  className="w-full rounded-md border-0 bg-white/10 px-4 py-3 text-white focus:bg-white/20 focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                >
                  <option value="" className="text-gray-900">🏛️ Select Your Base</option>
                  <option value="fort-belvoir" className="text-gray-900">🏰 Fort Belvoir</option>
                  <option value="pentagon" className="text-gray-900">🏢 Pentagon</option>
                  <option value="quantico" className="text-gray-900">🛡️ Quantico Marine Base</option>
                  <option value="other" className="text-gray-900">🎖️ Other/Not Military</option>
                </select>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-white hover:bg-blue-50 disabled:bg-gray-300 px-4 py-3 text-base font-semibold text-blue-900 shadow-lg transition-colors"
                >
                  {isSubmitting ? '📤 Sending...' : '🎖️ Get Free Military Guide'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MRP Certification with Military Imagery */}
      <section className="py-24 sm:py-32 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              🎖️ What Makes MRP Certification Special?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Military Relocation Professional (MRP) certification provides specialized training that goes beyond standard real estate education,
              ensuring I understand the unique challenges and opportunities military families face.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  🎖️ Specialized Military Training
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600">🏠</span>
                    <span>Understanding of military pay structures and allowances (BAH, BAS, Family Separation Pay)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600">📅</span>
                    <span>Knowledge of PCS timelines and deployment cycles affecting real estate decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600">💰</span>
                    <span>VA loan expertise including eligibility, limits, and specialized programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600">👨‍👩‍👧‍👦</span>
                    <span>Military spouse employment considerations and dual-career challenges</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-red-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  🎖️ Unique Military Challenges
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600">✈️</span>
                    <span>Coordinating remote transactions during deployments or TDY assignments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600">🚚</span>
                    <span>Managing dual-coast relocations and compressed timelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600">🔒</span>
                    <span>Understanding security clearance impacts on housing choices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600">🤝</span>
                    <span>Knowledge of military family life and community integration needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Resources */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              🎖️ Military Real Estate Resources
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Link href="/bah-calculator" className="group relative flex flex-col items-center p-8 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors shadow-lg hover:shadow-xl border border-blue-200">
              <span className="text-3xl mb-4">🏠</span>
              <CalculatorIcon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">BAH Calculator 2024</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">Calculate your housing allowance for Northern Virginia bases</p>
            </Link>
            <Link href="/commute-calculator" className="group relative flex flex-col items-center p-8 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors shadow-lg hover:shadow-xl border border-blue-200">
              <span className="text-3xl mb-4">🚗</span>
              <DocumentTextIcon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Base Commute Calculator</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">Find best locations based on commute to your base</p>
            </Link>
            <Link href="/military-resources" className="group relative flex flex-col items-center p-8 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors shadow-lg hover:shadow-xl border border-blue-200">
              <span className="text-3xl mb-4">🎖️</span>
              <HomeIcon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900">Military Resources</h3>
              <p className="mt-2 text-sm text-gray-600 text-center">Comprehensive guides for military families</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}