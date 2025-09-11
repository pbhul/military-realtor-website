import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CalendarIcon, ClockIcon, TagIcon, UserIcon, ShareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import type { Metadata } from 'next';

// Sample blog post data - in production this would come from a CMS or markdown files
const getBlogPost = (slug: string) => {
  const posts: Record<string, any> = {
    "2025-va-loan-no-limits-first-time-buyers": {
      id: 1,
      title: "2025 VA Loan Changes: No Limits for First-Time Military Home Buyers",
      slug: "2025-va-loan-no-limits-first-time-buyers",
      excerpt: "Breaking: VA loan limits don't apply to first-time users with full entitlement. Learn how this affects your home buying power in Northern Virginia's competitive market.",
      content: `
        <h2>Here's What Just Changed (And Why It Matters)</h2>
        <p>Most military families don't know this: VA loan limits don't apply to you if you're a first-time user. Period. No caps. No restrictions based on your area's "conforming loan limits."</p>
        
        <p>This isn't new policy - it's just that most people (including some loan officers) don't understand how it actually works.</p>
        
        <h3>Full Entitlement = No Limits</h3>
        <p>If you've never used your VA loan benefit, you have "full entitlement." Here's what that gets you:</p>
        <ul>
          <li><strong>Zero down payment</strong> on any home, any price</li>
          <li><strong>No loan limits</strong> (unlike FHA or conventional loans)</li>
          <li><strong>Lower interest rates</strong> than almost any other loan type</li>
          <li><strong>No PMI</strong> - ever</li>
        </ul>
        
        <h3>What This Means in Northern Virginia</h3>
        <p>Northern Virginia homes cost $600K-$800K+ on average. With full entitlement, you can buy that $750K home with zero down while your civilian neighbor needs $150K cash.</p>
        
        <p>You're not competing on down payment anymore. You're competing on speed and certainty - which VA loans actually give you an advantage on.</p>

        <h2>Already Used Your VA Loan? Here's Your Situation</h2>
        <p>If you've used your VA loan before, you have "partial entitlement." You're subject to the county limit: $1,209,750 in Northern Virginia for 2025.</p>
        
        <p>But here's the thing most people miss: You can restore full entitlement by paying off your previous VA loan. You don't have to sell the house - just pay off the loan.</p>

        <h2>The Fees (Because Nothing's Free)</h2>
        <p>VA loans have a funding fee instead of PMI:</p>
        <ul>
          <li><strong>First use:</strong> 2.3% of loan amount</li>
          <li><strong>Second use:</strong> 3.6% of loan amount</li>
          <li><strong>Disabled veterans:</strong> $0 (waived completely)</li>
          <li><strong>Guard/Reserves:</strong> Add 0.25% to first use</li>
        </ul>
        
        <p>You can roll this fee into the loan - you don't pay it upfront.</p>

        <h2>Your Competitive Edge</h2>
        <p>Most military families think VA loans make them less competitive. That's backwards thinking. Here's your actual advantage:</p>
        <ul>
          <li><strong>Speed:</strong> No appraisal gaps, no PMI delays</li>
          <li><strong>Certainty:</strong> Government-backed loans close reliably</li>
          <li><strong>Cash flow:</strong> No down payment means you keep your savings for other investments</li>
          <li><strong>Protection:</strong> Built-in buyer protections that conventional loans don't have</li>
        </ul>
        
        <p>Stop thinking like everyone else. Start thinking like an investor who happens to serve their country.</p>
      `,
      author: "Parjinder, MRP Certified",
      publishDate: "2025-01-11",
      readTime: "6 min read",
      category: "VA Loans",
      tags: ["VA Loans", "2025", "First Time Buyers", "Full Entitlement"],
      featured: true,
      image: "/photos/military-family-keys.jpg",
      schema: {
        "@type": "BlogPosting",
        "headline": "2025 VA Loan Changes: No Limits for First-Time Military Home Buyers",
        "description": "Breaking: VA loan limits don't apply to first-time users with full entitlement. Learn how this affects your home buying power in Northern Virginia's competitive market.",
        "image": "https://pbrealtynova.com/photos/military-family-keys.jpg",
        "author": {
          "@type": "Person",
          "name": "Parjinder, MRP Certified"
        },
        "publisher": {
          "@type": "Organization",
          "name": "PB Realty Nova",
          "logo": {
            "@type": "ImageObject", 
            "url": "https://pbrealtynova.com/logo.jpg"
          }
        },
        "datePublished": "2025-01-11",
        "dateModified": "2025-01-11"
      }
    },
    "fort-belvoir-bah-rates-2025-ranking": {
      id: 2,
      title: "Fort Belvoir BAH Rates 2025: 11th Highest Among All Army Bases",
      slug: "fort-belvoir-bah-rates-2025-ranking",
      excerpt: "Fort Belvoir ranks 11th highest for BAH rates in 2025 with a 2.9% increase. Here's what this means for your housing budget and home buying power.",
      content: `
        <h2>Fort Belvoir Just Got More Expensive (In a Good Way)</h2>
        <p>Fort Belvoir ranks 11th highest for BAH rates among ALL Army installations. That's not by accident - it's because you're stationed in one of the most expensive (and highest-opportunity) markets in the country.</p>
        
        <p>Here's what this actually means for your wallet and your future.</p>
        
        <h3>Your 2025 BAH Numbers</h3>
        <p>Everyone got a 2.9% increase. Here's what you're working with:</p>
        <ul>
          <li><strong>E-1 to E-4:</strong> $2,451/month (+$69 more than last year)</li>
          <li><strong>E-5 to E-6:</strong> $2,709/month (+$76 more)</li>
          <li><strong>E-7 to E-9:</strong> $2,985/month (+$84 more)</li>
          <li><strong>O-1 to O-2:</strong> $2,709/month (+$76 more)</li>
          <li><strong>O-3 and above:</strong> $3,384/month (+$96 more)</li>
        </ul>
        
        <h3>Why Fort Belvoir Pays So Much</h3>
        <p>This isn't charity. The Army pays high BAH here because:</p>
        <ul>
          <li><strong>Location premium:</strong> You're 20 minutes from DC - the power center of the world</li>
          <li><strong>Supply and demand:</strong> Everyone wants to live here, housing is limited</li>
          <li><strong>Quality of life:</strong> Top schools, infrastructure, opportunities</li>
          <li><strong>Economic reality:</strong> Your civilian neighbors make $100K+ on average</li>
        </ul>

        <h2>How to Actually Use This Increase</h2>
        <p>Most people will spend the extra $70-96/month on nothing and wonder where it went. Don't be most people.</p>
        
        <p>Here are three moves that actually matter:</p>
        
        <h3>Option 1: Buy Instead of Rent</h3>
        <p>That extra BAH can support roughly $15K-20K more in mortgage. In this market, that's the difference between getting a house and not getting a house.</p>
        
        <h3>Option 2: Upgrade Your Location</h3>
        <p>Move closer to base. Save 45-60 minutes of commute daily. That's 250+ hours per year back in your life. What's your time worth?</p>
        
        <h3>Option 3: Pocket the Difference</h3>
        <p>Find housing under your BAH and invest the difference. If you're an E-6 saving $300/month in a decent index fund, that's $50K+ by retirement just from this one decision.</p>

        <h2>The Reality Check</h2>
        <p>Fort Belvoir's high BAH isn't a gift - it's compensation for living in an expensive area. The question is: Are you going to use this expensive location to build wealth, or just survive it?</p>
        
        <p>Most people choose survival. Winners choose strategy.</p>
      `,
      author: "Parjinder, MRP Certified",
      publishDate: "2025-01-10",
      readTime: "8 min read",
      category: "BAH & Housing Allowance",
      tags: ["Fort Belvoir", "BAH", "2025", "Housing Allowance"],
      featured: true,
      image: "/photos/fort-belvoir-housing.jpg",
      schema: {
        "@type": "BlogPosting",
        "headline": "Fort Belvoir BAH Rates 2025: 11th Highest Among All Army Bases",
        "description": "Fort Belvoir ranks 11th highest for BAH rates in 2025 with a 2.9% increase. Here's what this means for your housing budget and home buying power.",
        "image": "https://pbrealtynova.com/photos/fort-belvoir-housing.jpg",
        "author": {
          "@type": "Person",
          "name": "Parjinder, MRP Certified"
        },
        "publisher": {
          "@type": "Organization",
          "name": "PB Realty Nova",
          "logo": {
            "@type": "ImageObject", 
            "url": "https://pbrealtynova.com/logo.jpg"
          }
        },
        "datePublished": "2025-01-10",
        "dateModified": "2025-01-10"
      }
    },
    "pentagon-metro-real-estate-2025": {
      id: 3,
      title: "Pentagon Area Real Estate: Metro Access vs. Home Prices in 2025",
      slug: "pentagon-metro-real-estate-2025", 
      excerpt: "Analysis of Pentagon-area neighborhoods balancing Metro accessibility with home affordability for military families in 2025.",
      content: `
        <h2>The Pentagon Proximity Problem</h2>
        <p>You're stationed at the Pentagon - the most powerful building in the world. But here's the thing nobody tells you: living close costs a fortune, and living far costs your life.</p>
        
        <p>Let me break down your real options so you can make a decision based on math, not emotion.</p>
        
        <h3>The Close-In Options (High Cost, Low Commute)</h3>
        
        <h4>Crystal City/Pentagon City - The 5-Minute Option</h4>
        <p>You can walk to work. Literally. Here's what it costs:</p>
        <ul>
          <li><strong>Rent:</strong> $2,800-3,200/month (needs O-4+ BAH or dual military)</li>
          <li><strong>Buy:</strong> $650K-850K (VA loan gets you in with $0 down)</li>
          <li><strong>Time saved:</strong> 2+ hours daily vs. suburban commute</li>
          <li><strong>Parking:</strong> $0 (you don't need a car for work)</li>
        </ul>
        
        <h4>Arlington (Rosslyn/Ballston) - The 15-Minute Option</h4>
        <p>Still Metro accessible, slightly more reasonable:</p>
        <ul>
          <li><strong>Rent:</strong> $2,400-2,800/month</li>
          <li><strong>Buy:</strong> $550K-750K</li>
          <li><strong>Commute:</strong> 15 minutes door-to-door</li>
          <li><strong>Bonus:</strong> Better restaurants, nightlife, dating scene</li>
        </ul>
        
        <h4>Alexandria (Old Town/Del Ray) - The 20-Minute Option</h4>
        <p>Historic charm, still Metro connected:</p>
        <ul>
          <li><strong>Rent:</strong> $2,200-2,600/month</li>
          <li><strong>Buy:</strong> $500K-700K</li>
          <li><strong>Commute:</strong> 20 minutes on yellow/blue line</li>
          <li><strong>Vibe:</strong> Family-friendly, walkable, good schools</li>
        </ul>

        <h2>The Real Cost Calculation</h2>
        <p>Everyone looks at rent or mortgage. Winners look at total cost of lifestyle.</p>
        
        <p>Here's what transportation actually costs you:</p>
        <ul>
          <li><strong>Metro unlimited:</strong> $300-400/month</li>
          <li><strong>Pentagon parking:</strong> $200+/month (if you can even get it)</li>
          <li><strong>Suburban driving:</strong> $400-600/month in gas, wear, insurance</li>
          <li><strong>Time cost:</strong> 10+ hours/week in traffic = 500+ hours/year</li>
        </ul>
        
        <p>That time cost? If you value your time at even $20/hour, suburban living costs you $10,000+ per year in time alone.</p>

        <h2>The Decision Matrix</h2>
        <p>Here's how to think about this:</p>
        
        <p><strong>Choose Crystal City if:</strong> You're single/dual military, prioritize time over money, or plan to use the saved commute time for side income.</p>
        
        <p><strong>Choose Arlington if:</strong> You want urban amenities but need to stretch your BAH further.</p>
        
        <p><strong>Choose Alexandria if:</strong> You have a family and want the best of both worlds - Metro access with suburban feel.</p>
        
        <p><strong>Choose suburbs if:</strong> You prioritize space over time and don't mind 2+ hours daily in your car.</p>
        
        <p>Most people choose based on monthly payment. Smart people choose based on opportunity cost.</p>
      `,
      author: "Parjinder, MRP Certified",
      publishDate: "2025-01-08",
      readTime: "10 min read",
      category: "Market Updates",
      tags: ["Pentagon", "Metro", "Real Estate", "Commuting"],
      featured: true,
      image: "/photos/pentagon-metro.jpg",
      schema: {
        "@type": "BlogPosting",
        "headline": "Pentagon Area Real Estate: Metro Access vs. Home Prices in 2025",
        "description": "Analysis of Pentagon-area neighborhoods balancing Metro accessibility with home affordability for military families in 2025.",
        "image": "https://pbrealtynova.com/photos/pentagon-metro.jpg",
        "author": {
          "@type": "Person",
          "name": "Parjinder, MRP Certified"
        },
        "publisher": {
          "@type": "Organization",
          "name": "PB Realty Nova",
          "logo": {
            "@type": "ImageObject", 
            "url": "https://pbrealtynova.com/logo.jpg"
          }
        },
        "datePublished": "2025-01-08",
        "dateModified": "2025-01-08"
      }
    },
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
      schema: {
        "@type": "BlogPosting",
        "headline": "2024 BAH Rate Changes: What Military Families in Northern Virginia Need to Know",
        "description": "The 2024 BAH rates have been released, and Northern Virginia military families will see significant changes. Here's what you need to know about the new rates and how they affect your housing budget.",
        "image": "https://pbrealtynova.com/blog/bah-rates-2024.jpg",
        "author": {
          "@type": "Person",
          "name": "Military Real Estate Specialist"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Military Real Estate Northern Virginia",
          "logo": {
            "@type": "ImageObject", 
            "url": "https://pbrealtynova.com/logo.jpg"
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
      url: `https://pbrealtynova.com/blog/${slug}`,
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
            "url": `https://pbrealtynova.com/blog/${slug}`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://pbrealtynova.com/blog/${slug}`
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
          <div className="prose prose-lg prose-blue max-w-none prose-headings:mt-8 prose-headings:mb-4 prose-p:mb-6 prose-p:leading-relaxed prose-li:mb-2 prose-ul:mb-6 prose-ol:mb-6">
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