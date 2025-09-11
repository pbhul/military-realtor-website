'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import type { Metadata } from 'next';

// Note: For static generation, we'll need to move metadata to a separate file or handle differently
const metadata = {
  title: "Contact Military Real Estate Specialist | Northern Virginia Realtor",
  description: "Contact your Northern Virginia military real estate specialist. Serving Fort Belvoir, Pentagon, Quantico personnel. Free consultations for PCS moves and VA loans.",
  keywords: "contact military realtor Northern Virginia, military real estate consultation, PCS move assistance, VA loan help, Fort Belvoir Pentagon Quantico realtor contact",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    branch: '',
    base: '',
    timeline: '',
    serviceType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This would integrate with BoldTrail API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          branch: '',
          base: '',
          timeline: '',
          serviceType: '',
          message: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Phone",
      content: "(703) 477-2606",
      subContent: "Available 7 days a week",
      action: "tel:+1-703-477-2606"
    },
    {
      icon: EnvelopeIcon,
      title: "Email", 
      content: "contact@militaryrealestatenova.com",
      subContent: "We respond within 2 hours",
      action: "mailto:contact@militaryrealestatenova.com"
    },
    {
      icon: MapPinIcon,
      title: "Service Area",
      content: "Northern Virginia",
      subContent: "Fort Belvoir, Pentagon, Quantico areas",
      action: null
    },
    {
      icon: ClockIcon,
      title: "Availability",
      content: "Flexible Military Hours",
      subContent: "Accommodating PCS schedules",
      action: null
    }
  ];

  const faqs = [
    {
      question: "How quickly can you help with a PCS move?",
      answer: "We can typically begin working with military families immediately, even with short-notice PCS orders. Our process is designed to work within military timelines."
    },
    {
      question: "Do you work with all branches of the military?",
      answer: "Yes, we serve all branches of the military including Army, Navy, Air Force, Marines, Space Force, Coast Guard, and civilian DoD employees."
    },
    {
      question: "Can you help if I'm currently deployed?",
      answer: "Absolutely. We have extensive experience working with deployed service members through virtual consultations, electronic signatures, and power of attorney arrangements."
    },
    {
      question: "What areas do you serve?",
      answer: "We specialize in Northern Virginia including areas near Fort Belvoir, Pentagon, and Quantico. This includes Fairfax County, Alexandria, Arlington, Stafford County, Prince William County, and Loudoun County."
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
              Contact Your Military Real Estate Specialist
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Ready to start your Northern Virginia real estate journey? We&apos;re here to help with 
              PCS moves, VA loans, and all your military family real estate needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Get Your Free Military Real Estate Consultation
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Fill out the form below and we&apos;ll contact you within 2 hours to discuss your needs.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800">Thank you for your message! We&apos;ll contact you within 2 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800">Sorry, there was an error submitting your form. Please try calling us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-2">
                      Military Branch
                    </label>
                    <select
                      id="branch"
                      name="branch"
                      value={formData.branch}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Branch</option>
                      <option value="army">Army</option>
                      <option value="navy">Navy</option>
                      <option value="air-force">Air Force</option>
                      <option value="marines">Marines</option>
                      <option value="space-force">Space Force</option>
                      <option value="coast-guard">Coast Guard</option>
                      <option value="civilian">DoD Civilian</option>
                      <option value="veteran">Veteran</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="base" className="block text-sm font-medium text-gray-700 mb-2">
                      Current/Future Base
                    </label>
                    <select
                      id="base"
                      name="base"
                      value={formData.base}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Base</option>
                      <option value="fort-belvoir">Fort Belvoir</option>
                      <option value="pentagon">Pentagon</option>
                      <option value="quantico">Quantico Marine Base</option>
                      <option value="other-nova">Other Northern Virginia</option>
                      <option value="pcs-incoming">PCS Incoming to Area</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select Timeline</option>
                      <option value="immediate">Ready now</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="3-months">Within 3 months</option>
                      <option value="6-months">Within 6 months</option>
                      <option value="pcs-orders">Waiting for PCS orders</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                    How can we help you? *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Service</option>
                    <option value="buying">Buying a home</option>
                    <option value="selling">Selling a home</option>
                    <option value="pcs-relocation">PCS relocation assistance</option>
                    <option value="va-loan">VA loan guidance</option>
                    <option value="investment">Investment property</option>
                    <option value="consultation">General consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your specific needs, timeline, or any questions you have..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                  Get in Touch
        <div className="text-center py-6">
          <Image
            className="mx-auto h-32 w-32 object-cover rounded-full shadow-md border-4 border-blue-200"
            src="/photos/Headshot.png"
            alt="Parjinder - Your Northern Virginia Military Real Estate Specialist"
            width={128}
            height={128}
            priority
          />
        </div>
                </h2>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start">
                    <div className="flex-shrink-0">
                      <info.icon className="h-6 w-6 text-blue-600 mt-1" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{info.title}</h3>
                      {info.action ? (
                        <a href={info.action} className="text-blue-600 hover:text-blue-500">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-900">{info.content}</p>
                      )}
                      <p className="text-sm text-gray-500 mt-1">{info.subContent}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Military Family Promise</h3>
                <p className="text-gray-600">
                  We understand military life. That&apos;s why we offer flexible scheduling, deployment support, 
                  and PCS-friendly services. Your service to our country deserves our best service to your family.
                </p>
              </div>
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
              Quick answers to common questions from military families.
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}