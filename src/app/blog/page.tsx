import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendarIcon, ClockIcon, TagIcon, UserIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Military Real Estate Blog | Expert Insights for Northern Virginia Military Families",
  description: "Latest insights, tips, and market updates for military families in Northern Virginia. Expert advice on VA loans, PCS moves, BAH optimization, and military community living.",
  keywords: "military real estate blog, northern virginia military housing, VA loan tips, PCS relocation advice, military family home buying, Fort Belvoir housing market, Pentagon area real estate",
  openGraph: {
    title: "Military Real Estate Blog | Expert Insights for Northern Virginia Military Families",
    description: "Latest insights, tips, and market updates for military families in Northern Virginia.",
    url: "https://www.militaryrealestatenova.com/blog",
  },
};

// Sample blog posts - in production these would come from a CMS or markdown files
const blogPosts = [
  {
    id: 1,
    title: "2024 BAH Rate Changes: What Military Families in Northern Virginia Need to Know",
    slug: "2024-bah-rate-changes-northern-virginia",
    excerpt: "The 2024 BAH rates have been released, and Northern Virginia military families will see significant changes. Here's what you need to know about the new rates and how they affect your housing budget.",
    content: "Complete analysis of BAH changes...",
    author: "Military Real Estate Specialist",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "BAH & Housing Allowance",
    tags: ["BAH", "2024", "Housing Allowance", "Fort Belvoir", "Pentagon", "Quantico"],
    featured: true,
  },
  {
    id: 2,
    title: "Fort Belvoir Housing Market Update: Best Neighborhoods for Military Families in 2024",
    slug: "fort-belvoir-housing-market-2024-best-neighborhoods",
    excerpt: "A comprehensive look at the Fort Belvoir area housing market, including the best neighborhoods for military families, commute times, school districts, and current pricing trends.",
    content: "Detailed market analysis...",
    author: "Military Real Estate Specialist",
    publishDate: "2024-01-10",
    readTime: "12 min read",
    category: "Market Updates",
    tags: ["Fort Belvoir", "Housing Market", "Neighborhoods", "Military Families"],
    featured: true,
  },
  {
    id: 3,
    title: "PCS to Northern Virginia: Complete Relocation Timeline and Checklist",
    slug: "pcs-northern-virginia-relocation-timeline-checklist",
    excerpt: "Planning a PCS move to Northern Virginia? This comprehensive guide covers everything from 120 days out to your first week in your new duty station.",
    content: "Complete PCS timeline...",
    author: "Military Real Estate Specialist", 
    publishDate: "2024-01-05",
    readTime: "15 min read",
    category: "PCS & Relocation",
    tags: ["PCS", "Relocation", "Northern Virginia", "Military Move", "Timeline"],
    featured: true,
  },
  {
    id: 4,
    title: "VA Loan Limits 2024: How Much House Can You Afford in Northern Virginia?",
    slug: "va-loan-limits-2024-northern-virginia-home-affordability",
    excerpt: "VA loan limits have increased for 2024. Learn how these changes affect your home buying power in high-cost Northern Virginia markets.",
    content: "VA loan analysis...",
    author: "Military Real Estate Specialist",
    publishDate: "2023-12-28", 
    readTime: "10 min read",
    category: "VA Loans",
    tags: ["VA Loans", "2024", "Home Affordability", "Loan Limits"],
    featured: false,
  },
  {
    id: 5,
    title: "Pentagon Metro Accessibility: Best Commuter-Friendly Neighborhoods",
    slug: "pentagon-metro-commuter-neighborhoods-northern-virginia",
    excerpt: "Working at the Pentagon? Discover the best neighborhoods with Metro access, parking options, and commute times to optimize your daily travel.",
    content: "Metro accessibility analysis...",
    author: "Military Real Estate Specialist",
    publishDate: "2023-12-20",
    readTime: "9 min read", 
    category: "Commuting & Transportation",
    tags: ["Pentagon", "Metro", "Commuting", "Transportation"],
    featured: false,
  },
  {
    id: 6,
    title: "Military Spouse Employment: Northern Virginia's Best Career Opportunities",
    slug: "military-spouse-employment-northern-virginia-career-opportunities",
    excerpt: "Northern Virginia offers exceptional career opportunities for military spouses. Explore remote work, federal contracting, and local business opportunities.",
    content: "Employment opportunities...",
    author: "Military Real Estate Specialist",
    publishDate: "2023-12-15",
    readTime: "11 min read",
    category: "Military Life",
    tags: ["Military Spouse", "Employment", "Career", "Northern Virginia"],
    featured: false,
  }
];

const categories = [
  "All Posts",
  "BAH & Housing Allowance", 
  "Market Updates",
  "PCS & Relocation",
  "VA Loans",
  "Commuting & Transportation",
  "Military Life"
];

const popularTags = [
  "BAH", "Fort Belvoir", "Pentagon", "Quantico", "VA Loans", "PCS", 
  "Northern Virginia", "Military Families", "Housing Market", "Relocation"
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Military Real Estate Insights
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Expert advice, market updates, and insider tips for military families 
              navigating Northern Virginia&apos;s real estate market.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Articles
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Essential reading for military families in Northern Virginia
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <CalendarIcon className="h-4 w-4" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-500 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts & Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Recent Posts */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Posts</h2>
              
              <div className="space-y-8">
                {recentPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow p-6">
                    <div className="flex gap-6">
                      <img 
                        alt={post.title}
                        className="w-32 h-24 object-cover rounded flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                          <span className="inline-flex items-center gap-1">
                            <CalendarIcon className="h-4 w-4" />
                            {new Date(post.publishDate).toLocaleDateString()}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <ClockIcon className="h-4 w-4" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                          {post.category}
                        </span>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                            {post.title}
                          </Link>
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 hover:text-blue-500 font-medium text-sm"
                        >
                          Read Article →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Categories */}
              <div className="bg-white rounded-lg shadow p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link 
                        href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-gray-600 hover:text-blue-600 text-sm"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-lg shadow p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="inline-flex items-center gap-1 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-xs px-3 py-1 rounded-full transition-colors"
                    >
                      <TagIcon className="h-3 w-3" />
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-blue-900 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get the latest military real estate insights delivered to your inbox twice a week.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 text-gray-900 rounded"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-900 font-semibold py-2 px-4 rounded hover:bg-blue-50 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}