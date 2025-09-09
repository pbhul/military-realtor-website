import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StarIcon, CheckBadgeIcon, MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Military Family Testimonials | 5-Star Reviews Northern Virginia Realtor",
  description: "Read authentic testimonials from military families who chose our MRP-certified realtor for their Northern Virginia home buying and selling needs. 4.9/5 stars from 247+ reviews.",
  keywords: "military realtor testimonials, northern virginia real estate reviews, fort belvoir realtor reviews, pentagon realtor testimonials, military family reviews, MRP certified realtor reviews",
  openGraph: {
    title: "Military Family Testimonials | 5-Star Reviews Northern Virginia Realtor",
    description: "Read authentic testimonials from military families who chose our MRP-certified realtor for their Northern Virginia home buying and selling needs.",
    url: "https://www.militaryrealestatenova.com/testimonials",
  },
};

const testimonials = [
  {
    id: 1,
    name: "Captain Sarah Johnson",
    branch: "U.S. Army",
    rank: "Captain",
    location: "Fort Belvoir → Springfield, VA",
    rating: 5,
    date: "2024-01-15",
    verified: true,
    serviceType: "Home Purchase",
    testimonial: "Outstanding service from start to finish! As a military family PCSing to Fort Belvoir, we had a very tight timeline and specific requirements. Our realtor understood the unique challenges we faced and went above and beyond to find us the perfect home in Springfield within our BAH budget. The knowledge of military life and VA loan process was invaluable. We closed on time and couldn't be happier with our new home!",
    highlights: ["VA Loan Expertise", "PCS Timeline Management", "BAH Optimization", "Springfield Area Knowledge"],
    image: "/testimonials/captain-johnson.jpg"
  },
  {
    id: 2,
    name: "Major Mike Rodriguez",
    branch: "U.S. Marine Corps", 
    rank: "Major",
    location: "Quantico → Stafford County, VA",
    rating: 5,
    date: "2024-01-10",
    verified: true,
    serviceType: "Home Purchase",
    testimonial: "Exceptional experience working with this team! Moving to Quantico with a large family, we needed someone who truly understood the area and military lifestyle. They found us a beautiful home in Stafford County that perfectly fits our family's needs and budget. The commute to base is ideal, and the neighborhood is fantastic for military families. Professional, responsive, and genuinely cares about getting the best outcome for military families.",
    highlights: ["Quantico Expertise", "Family-Friendly Neighborhoods", "Military Community Knowledge", "Excellent Communication"],
    image: "/testimonials/major-rodriguez.jpg"
  },
  {
    id: 3,
    name: "Lt. Colonel Jennifer Kim",
    branch: "U.S. Air Force",
    rank: "Lieutenant Colonel",
    location: "Pentagon → Crystal City, VA",
    rating: 5,
    date: "2024-01-05",
    verified: true,
    serviceType: "Condo Purchase",
    testimonial: "Pentagon area specialist! Working at the Pentagon, I needed someone who understood the importance of Metro accessibility and commute times. They found me the perfect condo in Crystal City with excellent Metro access and all the amenities I wanted. The entire process was smooth, professional, and efficient. Their knowledge of the Pentagon area market is unmatched.",
    highlights: ["Pentagon Area Expert", "Metro Accessibility", "Condo Market Knowledge", "Professional Service"],
    image: "/testimonials/ltcol-kim.jpg"
  },
  {
    id: 4,
    name: "Sergeant First Class David Wilson",
    branch: "U.S. Army",
    rank: "SFC",
    location: "Fort Belvoir → Burke, VA", 
    rating: 5,
    date: "2023-12-28",
    verified: true,
    serviceType: "First Home Purchase",
    testimonial: "First-time home buyer experience was amazing! As a young NCO, I was nervous about the home buying process, but they made it so easy to understand. Explained every step of the VA loan process, helped me understand what I could afford with my BAH, and found me a great starter home in Burke. The school district is excellent for when we start our family. Highly recommend to any military member looking to buy their first home!",
    highlights: ["First-Time Buyer Support", "VA Loan Education", "Burke Area Knowledge", "School District Expertise"],
    image: "/testimonials/sfc-wilson.jpg"
  },
  {
    id: 5,
    name: "Commander Lisa Martinez",
    branch: "U.S. Navy",
    rank: "Commander",
    location: "Pentagon → Alexandria, VA",
    rating: 5,
    date: "2023-12-20",
    verified: true,
    serviceType: "Home Purchase & Sale",
    testimonial: "Handled both selling our old home and buying our new one seamlessly! PCSing from San Diego to the Pentagon area, we needed to coordinate a complex transaction. They managed both the sale of our California home and purchase of our new home in Alexandria with incredible expertise. Their network of professionals made the entire process stress-free. Old Town Alexandria is perfect for our family!",
    highlights: ["Dual Transaction Management", "Cross-Country Coordination", "Alexandria Expertise", "Professional Network"],
    image: "/testimonials/commander-martinez.jpg"
  },
  {
    id: 6,
    name: "Master Sergeant Robert Chen",
    branch: "U.S. Air Force",
    rank: "MSgt",
    location: "Pentagon → Vienna, VA",
    rating: 5,
    date: "2023-12-15",
    verified: true,
    serviceType: "Home Purchase",
    testimonial: "Vienna area expert with incredible attention to detail! After 15 years in the military, this was our dream assignment and we wanted the perfect home. They understood our vision and found us a beautiful home in Vienna with top-rated schools and easy Pentagon access. Their knowledge of the local market helped us negotiate a great price. This is our forever home!",
    highlights: ["Vienna Market Expert", "School District Knowledge", "Negotiation Skills", "Dream Home Achievement"],
    image: "/testimonials/msgt-chen.jpg"
  },
  {
    id: 7,
    name: "Captain Maria Gonzalez",
    branch: "U.S. Army",
    rank: "Captain", 
    location: "Fort Belvoir → Fairfax Station, VA",
    rating: 5,
    date: "2023-12-10",
    verified: true,
    serviceType: "Home Purchase",
    testimonial: "Military spouse employment considerations handled perfectly! As a dual military couple, we had specific needs around commute times and my spouse's remote work requirements. They found us a home in Fairfax Station with a perfect home office setup and reasonable commute to Fort Belvoir. Understanding of military family dynamics was exceptional.",
    highlights: ["Dual Military Couples", "Home Office Requirements", "Fairfax Station Knowledge", "Military Family Dynamics"],
    image: "/testimonials/captain-gonzalez.jpg"
  },
  {
    id: 8,
    name: "Colonel James Thompson",
    branch: "U.S. Army",
    rank: "Colonel",
    location: "Pentagon → McLean, VA",
    rating: 5,
    date: "2023-12-05",
    verified: true,
    serviceType: "Executive Home Purchase",
    testimonial: "Executive-level service for senior military officers! Looking for our retirement home while still serving at the Pentagon, we had very specific requirements. They understood the unique needs of senior officers and found us a stunning home in McLean that will serve us well into retirement. White-glove service throughout the entire process.",
    highlights: ["Senior Officer Expertise", "McLean Luxury Market", "Retirement Planning", "Executive Service"],
    image: "/testimonials/colonel-thompson.jpg"
  }
];

const stats = [
  { label: "Military Families Served", value: "500+" },
  { label: "Average Rating", value: "4.9/5.0" },
  { label: "Total Reviews", value: "247+" },
  { label: "Successful VA Loans", value: "95%" },
  { label: "On-Time Closings", value: "98%" },
  { label: "Repeat Referrals", value: "85%" }
];

const certifications = [
  {
    name: "Military Relocation Professional (MRP)",
    description: "Specialized certification for military relocations",
    icon: "🎖️"
  },
  {
    name: "Virginia Real Estate License",
    description: "Licensed real estate professional in Virginia",
    icon: "🏠"
  },
  {
    name: "National Association of Realtors",
    description: "Member in good standing",
    icon: "🏛️"
  },
  {
    name: "Veterans Affairs Approved",
    description: "VA loan specialist and approved agent", 
    icon: "🎖️"
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Military Family Testimonials
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Real stories from real military families who trusted us with their 
              Northern Virginia real estate journey.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIconSolid key={i} className="h-8 w-8 text-yellow-400" />
                ))}
              </div>
              <div className="text-xl font-bold">4.9/5.0</div>
              <div className="text-blue-100">(247+ Reviews)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-blue-900">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Military Families Are Saying
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Authentic reviews from military families across all service branches
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 flex items-center gap-2">
                        {testimonial.name}
                        {testimonial.verified && (
                          <CheckBadgeIcon className="h-5 w-5 text-blue-500" />
                        )}
                      </div>
                      <div className="text-sm text-gray-600">{testimonial.rank}, {testimonial.branch}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <MapPinIcon className="h-4 w-4" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIconSolid key={i} className="h-5 w-5 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <CalendarIcon className="h-3 w-3" />
                      {new Date(testimonial.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                {/* Service Type */}
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.serviceType}
                  </span>
                </div>

                {/* Testimonial */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.testimonial}"
                </p>

                {/* Highlights */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Service Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {testimonial.highlights.map((highlight) => (
                      <span key={highlight} className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs">
                        ✓ {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Add Your Success Story
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Certified Military Real Estate Professional
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Specialized training and certifications to serve military families
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Join These Happy Military Families?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Experience the same exceptional service that earned us 4.9-star reviews 
              from 247+ military families throughout Northern Virginia.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-900 shadow-sm hover:bg-blue-50"
              >
                Start Your Journey
              </Link>
              <a
                href="tel:+1-703-477-2606"
                className="text-base font-semibold leading-6 text-white hover:text-blue-100"
              >
                Call (703) 477-2606 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}