import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PhoneIcon, GlobeAltIcon, ShieldCheckIcon, HomeIcon, CurrencyDollarIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Deployment Property Management | Military Real Estate Services Northern Virginia",
  description: "🌍 Deployed overseas? Professional property management for military families during deployment. Rent your home, maintenance, tenant screening. Northern Virginia specialist.",
  keywords: "deployment property management, military property management, overseas deployment real estate, deployed military rental management, PCS property rental, military landlord services",
  openGraph: {
    title: "Deployment Property Management | Military Real Estate Northern VA",
    description: "Professional property management for deployed military families. Keep your Northern Virginia home profitable while serving overseas.",
    url: "https://www.militaryrealestatenova.com/deployment-property-management",
  },
};

export default function DeploymentPropertyManagementPage() {
  const deploymentServices = [
    {
      icon: HomeIcon,
      title: "Complete Property Management",
      description: "Full-service property management while you're deployed - from tenant screening to maintenance coordination."
    },
    {
      icon: CurrencyDollarIcon,
      title: "Rental Income Optimization", 
      description: "Market-rate pricing, rent collection, and income optimization to maximize your property's earning potential."
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Maintenance & Emergency Response",
      description: "24/7 maintenance coordination and emergency response while you're serving overseas."
    },
    {
      icon: ShieldCheckIcon,
      title: "Military-Grade Security",
      description: "Enhanced security monitoring and regular property inspections with military attention to detail."
    }
  ];

  const deploymentScenarios = [
    {
      title: "Overseas Deployment (6+ months)",
      description: "Long-term rental management with complete tenant oversight",
      timeline: "6-36 months"
    },
    {
      title: "TDY/Training Assignment",
      description: "Short-term property care or temporary rental arrangements", 
      timeline: "3-12 months"
    },
    {
      title: "Remote Assignment",
      description: "Maintain your Northern Virginia home while stationed elsewhere",
      timeline: "1-4 years"
    },
    {
      title: "Special Operations",
      description: "Flexible property management for unpredictable deployment schedules",
      timeline: "Variable"
    }
  ];

  const managementFeatures = [
    "Military tenant preference screening",
    "Monthly property inspections with photo reports", 
    "Emergency repair coordination (24/7)",
    "Rent collection and income reporting",
    "Lawn care and seasonal maintenance",
    "Tax documentation for rental income",
    "Market analysis and rent optimization",
    "Secure military-grade property monitoring"
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 to-blue-800/90"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-6">
              <GlobeAltIcon className="h-16 w-16 text-green-300" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              🌍 Deployment Property Management
            </h1>
            <p className="mt-6 text-xl leading-8 text-green-100">
              <strong>Serving overseas?</strong> Don't let your Northern Virginia home sit empty. 
              Professional property management designed specifically for deployed military families.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+1-703-477-2606"
                className="flex items-center gap-3 rounded-md bg-white px-6 py-4 text-lg font-bold text-green-900 shadow-sm hover:bg-green-50 transform hover:scale-105 transition-all duration-200"
              >
                <PhoneIcon className="h-6 w-6" />
                Call Now: (703) 477-2606
              </a>
              <p className="text-green-100 text-sm text-center">
                🌍 Serving military families worldwide<br/>
                📧 Email updates from anywhere you're stationed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-yellow-50 border-t-4 border-yellow-400">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              🎯 The Deployed Military Family Dilemma
            </h2>
            <div className="mt-8 bg-white p-8 rounded-lg shadow-lg border-l-8 border-yellow-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h3 className="font-bold text-red-600 mb-3">❌ Common Problems:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Empty house losing money monthly</li>
                    <li>• Maintenance issues going unnoticed</li>
                    <li>• Security concerns while overseas</li>
                    <li>• Complex tenant screening from abroad</li>
                    <li>• Time zone challenges for property management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-green-600 mb-3">✅ Our Solution:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Generate rental income during deployment</li>
                    <li>• Professional maintenance oversight</li>
                    <li>• Military-grade security monitoring</li>
                    <li>• Expert military tenant screening</li>
                    <li>• 24/7 support regardless of your location</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Services */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Deployment Property Management Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive property management designed for military families serving overseas.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {deploymentServices.map((service) => (
                <div key={service.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
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

      {/* Deployment Scenarios */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Common Deployment Scenarios We Handle
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every deployment is different. We customize our services to match your specific situation.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {deploymentScenarios.map((scenario, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{scenario.title}</h3>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">{scenario.timeline}</span>
                  </div>
                  <p className="text-gray-600">{scenario.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management Features */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              🏠 What's Included in Deployment Property Management
            </h2>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              Full-service property management so you can focus on your mission, not home maintenance.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {managementFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                  <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 sm:py-32 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              💰 Military Family Pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 mb-8">
              Transparent pricing designed for military budgets. No hidden fees, no surprises.
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Deployment Management Package</h3>
                <p className="text-gray-600 mt-2">Complete property management during deployment</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">Standard Management</h4>
                  <p className="text-2xl font-bold text-green-600">8%</p>
                  <p className="text-sm text-gray-600">of monthly rental income</p>
                </div>
                
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">Military Discount Rate</h4>
                  <p className="text-2xl font-bold text-blue-600">6%</p>
                  <p className="text-sm text-gray-600">of monthly rental income</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-gray-700 font-medium">
                  🎖️ <strong>Military Benefit:</strong> 25% discount for active duty deployed personnel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              🚀 How Deployment Property Management Works
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 mb-12">
              Simple 4-step process to get your property generating income while you serve.
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Property Assessment</h3>
                <p className="text-gray-600 text-sm">Professional evaluation and rental market analysis</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tenant Screening</h3>
                <p className="text-gray-600 text-sm">Military-preferred tenant screening and background checks</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Management</h3>
                <p className="text-gray-600 text-sm">Monthly inspections, maintenance, and income collection</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome Home</h3>
                <p className="text-gray-600 text-sm">Property ready for your return or sale preparation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Turn Your Home Into Income During Deployment?
            </h2>
            <p className="mt-6 text-lg leading-8 text-green-100">
              Don't let your Northern Virginia home cost you money while you're serving overseas. 
              Let us handle everything so you can focus on your mission.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="tel:+1-703-477-2606"
                className="flex items-center gap-3 rounded-md bg-white px-8 py-4 text-xl font-bold text-green-900 shadow-sm hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                <PhoneIcon className="h-8 w-8" />
                (703) 477-2606
              </a>
              <div className="text-center text-green-100">
                <p className="font-semibold">Free Deployment Consultation</p>
                <p className="text-sm">Available 24/7 regardless of your time zone</p>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-green-800 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">🌍 Currently Deployed?</h3>
              <p className="text-green-100 mb-4">We can start managing your property remotely while you're overseas. No need to wait until you return.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-green-100 text-sm">
                <div>• Remote property assessment via video</div>
                <div>• Digital contract signing</div>
                <div>• International communication support</div>
                <div>• Secure online income reporting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Other Military Real Estate Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Link href="/emergency-pcs" className="p-6 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">🚨 Emergency PCS Services</h3>
              <p className="text-gray-600 text-sm">24-48 hour response for urgent military orders</p>
            </Link>
            
            <Link href="/bases/quantico" className="p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">🇺🇸 Quantico Marine Specialist</h3>
              <p className="text-gray-600 text-sm">Specialized real estate services for Marine Corps families</p>
            </Link>
            
            <Link href="/va-loan-guidance" className="p-6 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-2">💰 VA Loan Guidance</h3>
              <p className="text-gray-600 text-sm">Expert help with VA loan benefits and process</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}