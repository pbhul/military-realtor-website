import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const services = [
    'PCS Relocation Services',
    'VA Loan Assistance',
    'Military Home Buying',
    'Military Home Selling',
    'Military Spouse Support',
  ];

  const locations = [
    'Fort Belvoir Area',
    'Pentagon Area',
    'Quantico Marine Base',
    'Fairfax County',
    'Alexandria',
    'Arlington',
    'Loudoun County',
    'Prince William County',
  ];

  const resources = [
    'PCS Timeline Guide',
    'VA Loan Calculator',
    'BAH Housing Guide',
    'Military Resources',
    'Area Schools Info',
    'Base Commute Guide',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold">Military Realtor NoVA</h2>
              <p className="mt-4 text-gray-300">
                Your trusted Northern Virginia military real estate specialist. Serving Fort Belvoir, Pentagon, and Quantico areas with expertise in PCS relocations and VA loans.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-blue-400" />
                <a href="tel:+1-703-477-2606" className="text-gray-300 hover:text-white">
                  (703) 477-2606
                </a>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-blue-400" />
                <a href="mailto:parjinder@pbrealtynova.com" className="text-gray-300 hover:text-white">
                  parjinder@pbrealtynova.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Serving Northern Virginia</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {services.map((service) => (
                    <li key={service}>
                      <Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white">
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Locations</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {locations.map((location) => (
                    <li key={location}>
                      <Link href="/locations" className="text-sm leading-6 text-gray-300 hover:text-white">
                        {location}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Military Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {resources.map((resource) => (
                    <li key={resource}>
                      <Link href="/military-resources" className="text-sm leading-6 text-gray-300 hover:text-white">
                        {resource}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-700 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2024 Military Realtor Northern Virginia. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-xs leading-5 text-gray-400">
              <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-white">Sitemap</Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Licensed Real Estate Professional serving military families in Northern Virginia. 
              Equal Housing Opportunity. VA Loan Specialist.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}