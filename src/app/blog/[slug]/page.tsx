import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendarIcon, ClockIcon, TagIcon, UserIcon, ShareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

// Sample blog post data - in production this would come from a CMS or markdown files
const getBlogPost = (slug: string) => {
  const posts: Record<string, any> = {
    "2024-bah-rate-changes-northern-virginia": {
      id: 1,
      title: "2024 BAH Rate Changes: What Military Families in Northern Virginia Need to Know",
      slug: "2024-bah-rate-changes-northern-virginia",
      excerpt: "The 2024 BAH rates have been released, and Northern Virginia military families will see significant changes. Here's what you need to know about the new rates and how they affect your housing budget.",
      content: `
        <h2>Major BAH Increases for Northern Virginia</h2>
        <p>The Department of Defense has announced significant BAH rate increases for Northern Virginia, with some areas seeing increases of up to 8.2%. This is welcome news for military families facing one of the nation's most expensive housing markets.</p>
        
        <h3>Fort Belvoir Area Changes</h3>
        <p>Fort Belvoir personnel will see the following changes:</p>
        <ul>
          <li><strong>E-1 to E-4:</strong> Increased from $2,193 to $2,385 (+$192/month)</li>
          <li><strong>E-5 to E-6:</strong> Increased from $2,454 to $2,634 (+$180/month)</li>
          <li><strong>E-7 to E-9:</strong> Increased from $2,682 to $2,901 (+$219/month)</li>
          <li><strong>O-1 to O-2:</strong> Increased from $2,454 to $2,634 (+$180/month)</li>
          <li><strong>O-3 and above:</strong> Increased from $3,039 to $3,288 (+$249/month)</li>
        </ul>
        
        <h3>Pentagon Area Changes</h3>
        <p>Pentagon personnel in the DC area will see even larger increases:</p>
        <ul>
          <li><strong>E-1 to E-4:</strong> Increased from $2,544 to $2,748 (+$204/month)</li>
          <li><strong>E-5 to E-6:</strong> Increased from $2,793 to $3,024 (+$231/month)</li>
          <li><strong>E-7 to E-9:</strong> Increased from $3,096 to $3,351 (+$255/month)</li>
          <li><strong>O-1 to O-2:</strong> Increased from $2,793 to $3,024 (+$231/month)</li>
          <li><strong>O-3 and above:</strong> Increased from $3,690 to $3,993 (+$303/month)</li>
        </ul>
        
        <h3>Quantico Marine Base Changes</h3>
        <p>Quantico Marines will benefit from these rate adjustments:</p>
        <ul>
          <li><strong>E-1 to E-4:</strong> Increased from $2,193 to $2,385 (+$192/month)</li>
          <li><strong>E-5 to E-6:</strong> Increased from $2,454 to $2,634 (+$180/month)</li>
          <li><strong>E-7 to E-9:</strong> Increased from $2,682 to $2,901 (+$219/month)</li>
          <li><strong>O-1 to O-2:</strong> Increased from $2,454 to $2,634 (+$180/month)</li>
          <li><strong>O-3 and above:</strong> Increased from $3,039 to $3,288 (+$249/month)</li>
        </ul>

        <h2>What This Means for Your Housing Budget</h2>
        <p>These BAH increases provide military families with additional purchasing power in Northern Virginia's competitive housing market. Here's how to maximize your benefits:</p>
        
        <h3>Home Buying Strategies</h3>
        <p>With increased BAH rates, you may qualify for:</p>
        <ul>
          <li><strong>Higher home prices:</strong> The additional monthly allowance can support larger mortgage payments</li>
          <li><strong>Better neighborhoods:</strong> Previously out-of-reach areas may now be affordable</li>
          <li><strong>Shorter commutes:</strong> Base-proximate housing becomes more financially viable</li>
        </ul>
        
        <h3>Rental Considerations</h3>
        <p>For families choosing to rent:</p>
        <ul>
          <li>Expanded rental options in premium locations</li>
          <li>Ability to afford higher-quality housing</li>
          <li>Potential for saving excess BAH (depending on actual rent costs)</li>
        </ul>

        <h2>Market Impact Analysis</h2>
        <p>The BAH increases will likely impact Northern Virginia's housing market in several ways:</p>
        
        <h3>Increased Competition</h3>
        <p>Higher BAH rates mean military families can compete more effectively with civilian buyers, potentially driving up demand in military-preferred neighborhoods near Fort Belvoir, Pentagon, and Quantico.</p>
        
        <h3>Seller Benefits</h3>
        <p>Military families looking to sell their homes may benefit from increased buyer demand within the military community, potentially leading to faster sales and better offers.</p>

        <h2>Planning Your Next Move</h2>
        <p>Whether you're PCSing to Northern Virginia or already stationed here, these BAH increases create new opportunities:</p>
        
        <h3>For Incoming Military Families</h3>
        <ul>
          <li>Review your housing options with updated budget calculations</li>
          <li>Consider previously expensive neighborhoods that are now within range</li>
          <li>Factor in the full financial picture including utilities and commute costs</li>
        </ul>
        
        <h3>For Current Residents</h3>
        <ul>
          <li>Evaluate your current housing situation - can you upgrade?</li>
          <li>Consider refinancing if you own and want to access equity</li>
          <li>Review your housing allowance utilization strategy</li>
        </ul>

        <h2>Get Expert Guidance</h2>
        <p>Navigating Northern Virginia's complex housing market requires expert knowledge. As an MRP-certified military real estate specialist, I understand how BAH changes affect your housing decisions and can help you maximize your benefits.</p>
        
        <p>Ready to explore your housing options with the new BAH rates? Contact me for a personalized consultation that takes into account your specific situation, timeline, and goals.</p>
      `,
      author: "Military Real Estate Specialist",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      category: "BAH & Housing Allowance", 
      tags: ["BAH", "2024", "Housing Allowance", "Fort Belvoir", "Pentagon", "Quantico"],
      image: "/blog/bah-rates-2024.jpg",
      schema: {
        "@type": "BlogPosting",
        "headline": "2024 BAH Rate Changes: What Military Families in Northern Virginia Need to Know",
        "description": "The 2024 BAH rates have been released, and Northern Virginia military families will see significant changes. Here's what you need to know about the new rates and how they affect your housing budget.",
        "image": "https://www.militaryrealestatenova.com/blog/bah-rates-2024.jpg",
        "author": {
          "@type": "Person",
          "name": "Military Real Estate Specialist"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Military Real Estate Northern Virginia",
          "logo": {
            "@type": "ImageObject", 
            "url": "https://www.militaryrealestatenova.com/logo.jpg"
          }
        },
        "datePublished": "2024-01-15",
        "dateModified": "2024-01-15"
      }
    }
  };
  
  return posts[slug] || null;
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found'
    };
  }

  return {
    title: `${post.title} | Military Real Estate Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.militaryrealestatenova.com/blog/${slug}`,
      type: 'article',
      images: [post.image],
      publishedTime: post.publishDate,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Post Not Found</h1>
            <Link href="/blog" className="text-blue-600 hover:text-blue-500 mt-4 inline-block">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            ...post.schema,
            "url": `https://www.militaryrealestatenova.com/blog/${slug}`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.militaryrealestatenova.com/blog/${slug}`
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-900 truncate">{post.title}</li>
            </ol>
          </nav>

          {/* Category */}
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-6">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-8">
            <div className="flex items-center gap-2">
              <UserIcon className="h-5 w-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" />
              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShareIcon className="h-5 w-5" />
              <span>Share</span>
            </div>
          </div>

          {/* Featured Image */}
          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-64 lg:h-96 object-cover rounded-lg mb-12"
          />
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag.toLowerCase()}`}
                  className="inline-flex items-center gap-1 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 text-sm px-3 py-1 rounded-full transition-colors"
                >
                  <TagIcon className="h-3 w-3" />
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-8 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
                <UserIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{post.author}</h3>
                <p className="text-gray-600">MRP Certified Military Real Estate Specialist</p>
              </div>
            </div>
            <p className="text-gray-700">
              As a Military Relocation Professional (MRP) certified specialist, I understand the unique 
              challenges military families face when buying, selling, or renting in Northern Virginia. 
              I&apos;m committed to providing expert guidance tailored to military lifestyles and timelines.
            </p>
            <div className="mt-4">
              <Link 
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
              >
                Get Expert Consultation →
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-blue-900 rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Make Your Move?</h3>
            <p className="text-blue-100 mb-6">
              Get personalized guidance from Northern Virginia&apos;s military real estate specialist. 
              Free consultations for all military families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/bah-calculator"
                className="border border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Calculate Your BAH
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}