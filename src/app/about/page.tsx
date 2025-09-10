import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PhoneIcon, ShieldCheckIcon, HomeIcon, AcademicCapIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About | Military Veteran Real Estate Agent Northern Virginia",
  description: "Learn about your military veteran real estate agent specializing in Northern Virginia. Personal military experience serving Fort Belvoir, Pentagon, Quantico personnel and families.",
  keywords: "military veteran realtor Northern Virginia, about military real estate agent, veteran owned real estate, military experience realtor Fort Belvoir Pentagon Quantico",
  openGraph: {
    title: "About | Military Veteran Real Estate Agent Northern Virginia", 
    description: "Learn about your military veteran real estate agent specializing in Northern Virginia military families.",
    url: "https://www.militaryrealestatenova.com/about",
  },
};

export default function AboutPage() {
  const qualifications = [
    {
      icon: ShieldCheckIcon,
      title: "Military Veteran",
      description: "Personal military service experience provides deep understanding of military life, PCS moves, and deployment challenges."
    },
    {
      icon: HomeIcon,
      title: "Northern Virginia Expert",
      description: "Extensive knowledge of Fort Belvoir, Pentagon, and Quantico areas built through years of serving military families."
    },
    {
      icon: AcademicCapIcon,
      title: "Real Estate Professional",
      description: "Licensed real estate agent with specialized training in military relocations and VA loan processes."
    },
    {
      icon: MapPinIcon,
      title: "Community Connections",
      description: "Strong relationships with military communities, lenders, and service providers throughout Northern Virginia."
    }
  ];

  const services = [
    "PCS Relocation Coordination",
    "VA Loan Process Guidance", 
    "Military Community Expertise",
    "Deployment-Friendly Scheduling",
    "Base Proximity Analysis",
    "Military Spouse Support",
    "Investment Property Guidance",
    "First-Time Buyer Education"
  ];

  const areaExpertise = [
    "Fort Belvoir and surrounding communities",
    "Pentagon area and Metro-accessible locations",
    "Quantico Marine Base and Stafford County",
    "Fairfax County school districts and neighborhoods",
    "Alexandria historic districts and waterfront",
    "Arlington high-rise and urban living options",
    "Loudoun County technology corridor",
    "Prince William County growing communities"
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              About Your Military Veteran Realtor
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Serving military families in Northern Virginia with the expertise that comes from 
              personal military experience and deep community knowledge.
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
                Call (703) 477-2606
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Realtor Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <img
              className="mx-auto h-48 w-48 rounded-full object-cover shadow-lg border-4 border-blue-100"
              src="/photos/Headshot.png"
              alt="Professional Military Realtor Headshot"
            />
            <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Trusted Military Realtor
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              MRP Certified professional with personal military experience, dedicated to serving 
              military families throughout Northern Virginia with expertise you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Understanding Military Life from Experience
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              As a military veteran, I understand the unique challenges that come with military life. 
              From PCS moves on short notice to deployment schedules that don&apos;t align with traditional 
              real estate timelines, I&apos;ve lived the experiences that my clients are navigating.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              This personal understanding, combined with years of serving military families in Northern Virginia, 
              allows me to provide the specialized service that military personnel and their families deserve. 
              I know what it&apos;s like to balance military obligations with family needs, and I bring that 
              perspective to every real estate transaction.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you&apos;re PCSing to the area, looking to buy your first home with VA loan benefits, 
              or need to sell quickly due to military orders, I&apos;m here to make the process as smooth 
              as possible for you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose a Military Veteran Real Estate Agent?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The combination of military experience and real estate expertise provides unique value for military families.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {qualifications.map((qualification) => (
                <div key={qualification.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <qualification.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {qualification.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{qualification.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Specialized Military Real Estate Services
            </h2>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12">
            <Link
              href="/services" 
              className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
            >
              Learn more about our services <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Area Expertise */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Northern Virginia Area Expertise
            </h2>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              Deep knowledge of military communities, commute times, school districts, and neighborhood characteristics 
              throughout Northern Virginia.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {areaExpertise.map((area) => (
                <div key={area} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12">
            <Link
              href="/locations"
              className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
            >
              Explore all coverage areas <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Military Promise */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My Commitment to Military Families
            </h2>
            <div className="mt-8 bg-blue-50 rounded-lg p-8">
              <p className="text-lg text-gray-700 italic">
                &ldquo;Having served our country, military families deserve real estate service that understands 
                their unique needs, respects their time, and honors their sacrifice. I&apos;m committed to providing 
                that level of service to every military family I have the privilege to work with.&rdquo;
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">Flexible Scheduling</h3>
                <p className="mt-2 text-sm text-gray-600">Available evenings and weekends to accommodate military schedules</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">Deployment Support</h3>
                <p className="mt-2 text-sm text-gray-600">Remote capabilities and POA experience for deployed service members</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">PCS Expertise</h3>
                <p className="mt-2 text-sm text-gray-600">Coordinating real estate timelines with military orders and requirements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Work Together?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Let&apos;s discuss how my military experience and Northern Virginia expertise can help 
              make your real estate goals a reality.
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