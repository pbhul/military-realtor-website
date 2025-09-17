'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    base: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('🔥 FORM SUBMIT TRIGGERED - Header Modal');
    e.preventDefault();
    setIsSubmitting(true);

    console.log('🚀 Form submitted from Header Modal:', formData);

    try {
      console.log('📡 Sending request to /api/lead-capture...');

      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sourceForm: 'Header Free Guide Modal'
        }),
      });

      console.log('📨 API Response status:', response.status);

      if (response.ok) {
        console.log('✅ Form submission successful!');
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          base: ''
        });
        // Auto-download PDF after successful submission
        const link = document.createElement('a');
        link.href = '/downloads/military-relocation-guide-northern-virginia.pdf';
        link.download = 'Military-Relocation-Guide-Northern-Virginia.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Close modal after 2 seconds
        setTimeout(() => {
          setModalOpen(false);
          setSubmitStatus('idle');
        }, 2000);
      } else {
        console.error('❌ Form submission failed with status:', response.status);
        const errorText = await response.text();
        console.error('❌ Error response:', errorText);
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('💥 Lead form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Locations', href: '/locations' },
    { name: 'Military Resources', href: '/military-resources' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-blue-900">Military Realtor NoVA</span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-900">
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <a href="tel:+1-703-477-2606" className="flex items-center gap-2 text-sm font-semibold leading-6 text-blue-900 hover:text-blue-700 whitespace-nowrap">
            <PhoneIcon className="h-5 w-5" />
            (703) 477-2606
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
          >
            Free Relocation Guide
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-bold text-blue-900">Military Realtor NoVA</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a href="tel:+1-703-477-2606" className="flex items-center gap-2 -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-blue-900 hover:bg-gray-50">
                    <PhoneIcon className="h-5 w-5" />
                    (703) 477-2606
                  </a>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setModalOpen(true);
                    }}
                    className="mt-4 block w-full rounded-md bg-blue-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-800"
                  >
                    Free Relocation Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lead Capture Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  🎖️ Free Military Relocation Guide
                </h2>
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <p className="text-gray-600 mb-6">
                Get your comprehensive guide to military relocations in Northern Virginia.
                Includes VA loan guidance, PCS timeline, and local area insights.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800 text-center font-semibold">
                    🎉 Success! Your guide is downloading now. We'll be in touch within 24 hours!
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800 text-center">
                    ❌ Sorry, there was an error. Please try calling us at (703) 477-2606.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  autoComplete="name"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  autoComplete="email"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                  autoComplete="tel"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />
                <select
                  name="base"
                  value={formData.base}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">🏛️ Select Your Base</option>
                  <option value="fort-belvoir">🏰 Fort Belvoir</option>
                  <option value="pentagon">🏢 Pentagon</option>
                  <option value="quantico">🛡️ Quantico Marine Base</option>
                  <option value="other">🎖️ Other/Not Military</option>
                </select>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-blue-900 hover:bg-blue-800 disabled:bg-gray-400 px-4 py-3 text-base font-semibold text-white shadow-lg transition-colors"
                >
                  {isSubmitting ? '📤 Sending...' : '🎖️ Get Free Guide & Download PDF'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}