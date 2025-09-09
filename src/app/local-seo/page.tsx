import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPinIcon, StarIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Northern Virginia Military Realtor Near Me | Local Military Real Estate Expert",
  description: "Find the best military realtor near you in Northern Virginia. Local expert serving Fort Belvoir, Pentagon, Quantico areas. MRP certified with 5-star reviews from military families.",
  keywords: "military realtor near me, northern virginia real estate agent, fort belvoir realtor, pentagon realtor, quantico realtor, local military real estate expert, MRP certified realtor near me",
  openGraph: {
    title: "Northern Virginia Military Realtor Near Me | Local Expert",
    description: "Find the best military realtor near you in Northern Virginia. Local expert serving Fort Belvoir, Pentagon, Quantico areas.",
    url: "https://www.militaryrealestatenova.com/local-seo",
  },
};

// Local business data for structured markup
const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Military Real Estate Northern Virginia",
  "image": "https://www.militaryrealestatenova.com/images/office-front.jpg",
  "telephone": "+1-703-477-2606",
  "email": "info@militaryrealestatenova.com",
  "url": "https://www.militaryrealestatenova.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Military Drive",
    "addressLocality": "Alexandria",
    "addressRegion": "VA",
    "postalCode": "22301",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.8048,
    "longitude": -77.0469
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday", 
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "247",
    "bestRating": "5"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Alexandria",
      "containedInPlace": {
        "@type": "State",
        "name": "Virginia"
      }
    },
    {
      "@type": "City", 
      "name": "Arlington",
      "containedInPlace": {
        "@type": "State",
        "name": "Virginia"
      }
    },
    {
      "@type": "City",
      "name": "Fairfax",
      "containedInPlace": {
        "@type": "State",
        "name": "Virginia"
      }
    }
  ],
  "serviceType": ["Military Real Estate Services", "VA Loan Assistance", "PCS Relocation Support"],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "Military Relocation Professional (MRP)",
    "credentialCategory": "Professional Certification"
  }
};

const serviceAreas = [
  {
    area: "Alexandria, VA",
    description: "Serving Fort Belvoir military families with expert local knowledge",
    zipCodes: ["22301", "22302", "22303", "22304", "22305", "22306", "22307", "22308", "22309", "22310", "22311", "22312", "22314", "22315"],
    landmarks: ["Fort Belvoir", "Old Town Alexandria", "Pentagon", "Reagan National Airport"],
    driveTime: "15 minutes to Fort Belvoir, 20 minutes to Pentagon"
  },
  {
    area: "Arlington, VA", 
    description: "Pentagon area specialist with Metro expertise",
    zipCodes: ["22201", "22202", "22203", "22204", "22205", "22206", "22207", "22209", "22210", "22211", "22212", "22213", "22214", "22215", "22216"],
    landmarks: ["Pentagon", "Arlington Cemetery", "Crystal City", "Rosslyn"],
    driveTime: "5 minutes to Pentagon, 30 minutes to Fort Belvoir"
  },
  {
    area: "Fairfax County, VA",
    description: "Full county coverage for military families",
    zipCodes: ["22003", "22015", "22030", "22031", "22032", "22033", "22034", "22035", "22036", "22037", "22038", "22039", "22040", "22041", "22042", "22043", "22044", "22046", "22047", "22060", "22066", "22067", "22079", "22080", "22081", "22082", "22124", "22150", "22151", "22152", "22153", "22180", "22181", "22182", "22183", "22184", "22185"],
    landmarks: ["Fairfax City", "Vienna", "McLean", "Reston", "Herndon", "Springfield", "Burke"],
    driveTime: "20-45 minutes to major military installations"
  },
  {
    area: "Stafford County, VA",
    description: "Quantico Marine Base specialist",
    zipCodes: ["22554", "22555", "22556", "22558", "22560", "22571", "22572", "22573", "22576"],
    landmarks: ["Quantico Marine Base", "Fredericksburg", "Aquia Harbour"],
    driveTime: "10 minutes to Quantico, 45 minutes to Pentagon"
  }
];

const localReviews = [
  {
    id: 1,
    reviewer: "Captain Sarah Johnson, USA",
    rating: 5,
    location: "Fort Belvoir",
    review: "Outstanding service! As a military family PCSing to Fort Belvoir, we needed someone who understood our unique timeline and requirements. Found our perfect home in Springfield within our BAH budget.",
    date: "2024-01-10",
    verified: true
  },
  {
    id: 2,
    reviewer: "Major Mike Rodriguez, USMC",
    rating: 5,
    location: "Quantico",
    review: "Exceptional knowledge of the Quantico area. Helped us find a home in Stafford County that fits our family size and commute needs. The VA loan process was seamless.",
    date: "2024-01-05",
    verified: true
  },
  {
    id: 3,
    reviewer: "Lt. Colonel Jennifer Kim, USAF",
    rating: 5,
    location: "Pentagon",
    review: "Pentagon area expert! Found us the perfect condo in Crystal City with Metro access. Professional, responsive, and truly understands military life.",
    date: "2023-12-28",
    verified: true
  }
];

export default function LocalSEOPage() {
  return (
    <>
      <Header />
      
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData)
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Military Realtor Near Me in Northern Virginia
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              MRP Certified military real estate specialist serving Fort Belvoir, Pentagon, 
              and Quantico areas. Local expert with 4.9-star rating from 247+ military families.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="tel:+1-703-477-2606"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Call (703) 477-2606
              </a>
              <Link
                href="/contact"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
              >
                Get Free Consultation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Local Northern Virginia Military Communities
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Expert real estate services in every military community throughout Northern Virginia
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {serviceAreas.map((area) => (
              <div key={area.area} className="relative bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPinIcon className="h-6 w-6 text-blue-600" />
                  {area.area}
                </h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Landmarks:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.landmarks.map((landmark) => (
                      <span key={landmark} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <ClockIcon className="h-4 w-4" />
                    Drive Times:
                  </h4>
                  <p className="text-sm text-gray-600">{area.driveTime}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Zip Codes Served:</h4>
                  <div className="text-sm text-gray-600">
                    {area.zipCodes.slice(0, 8).join(', ')}
                    {area.zipCodes.length > 8 && <span className="text-blue-600"> +{area.zipCodes.length - 8} more</span>}
                  </div>
                </div>

                <Link
                  href={`/locations/${area.area.toLowerCase().replace(/,.*/, '').replace(/\s+/g, '-')}`}
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  Explore {area.area} Properties →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Reviews */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Local Military Families Say
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">4.9/5.0</span>
              <span className="text-gray-600">(247+ reviews)</span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {localReviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      Verified
                    </span>
                  )}
                </div>
                
                <p className="text-gray-700 mb-4">"{review.review}"</p>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{review.reviewer}</div>
                      <div className="text-sm text-gray-600 flex items-center gap-1">
                        <MapPinIcon className="h-4 w-4" />
                        {review.location}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Read All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Local Contact */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Your Local Military Real Estate Expert
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Based in Alexandria, Virginia, serving all Northern Virginia military communities. 
              Available for in-person consultations and property viewings.
            </p>
            
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 text-center">
              <div>
                <PhoneIcon className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">Call or Text</div>
                <div className="text-blue-100">(703) 477-2606</div>
              </div>
              <div>
                <MapPinIcon className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">Office Location</div>
                <div className="text-blue-100">Alexandria, VA 22301</div>
              </div>
              <div>
                <ClockIcon className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-white font-semibold">Office Hours</div>
                <div className="text-blue-100">Mon-Fri 8AM-8PM</div>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Schedule In-Person Meeting
              </Link>
              <a
                href="tel:+1-703-477-2606"
                className="text-base font-semibold leading-6 text-white hover:text-blue-100"
              >
                Call Now <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}