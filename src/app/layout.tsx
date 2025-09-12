import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics, FacebookPixel } from '@/components/Analytics';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import LLMEntityMarkup from '@/components/LLMEntityMarkup';
import MilitaryServiceSchema from '@/components/MilitaryServiceSchema';
import { Suspense } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://pbrealtynova.com'),
  title: {
    default: "Military Realtor Northern Virginia | MRP Certified | PCS & VA Loan Specialist",
    template: "%s | Military Real Estate NoVA"
  },
  description: "🎖️ MRP Certified military realtor serving Fort Belvoir, Pentagon, Quantico. Expert PCS relocations, VA loans, BAH optimization for military families in Northern Virginia. Veteran-owned.",
  keywords: [
    // Primary Military Keywords
    "military realtor Northern Virginia", "MRP certified realtor", "military relocation professional",
    "Fort Belvoir realtor", "Pentagon area realtor", "Quantico Marine Base realtor",
    
    // PCS & Military Services
    "PCS relocation services", "military PCS move", "PCS real estate timeline",
    "military deployment real estate", "TDY housing assistance", "military orders relocation",
    
    // VA Loan Keywords
    "VA loan specialist", "VA home loan Northern Virginia", "military home buying VA loan",
    "VA loan benefits", "100% financing VA loan", "VA loan eligibility",
    
    // Location-Specific
    "Northern Virginia military housing", "Fairfax County military realtor", "Alexandria military homes",
    "Arlington military realtor", "Loudoun County military housing", "Prince William County PCS",
    "Stafford County military realtor", "Fredericksburg military homes",
    
    // Military Branches
    "Army realtor Fort Belvoir", "Navy Pentagon realtor", "Marine Corps Quantico realtor",
    "Air Force Northern Virginia", "Coast Guard realtor", "Space Force housing",
    
    // Military Family Services
    "military family real estate", "military spouse realtor", "dual military career housing",
    "military children schools", "base proximity housing", "BAH housing allowance",
    
    // Service-Specific
    "military home buying", "military home selling", "PCS home sale", "quick military sale",
    "veteran owned business", "military friendly realtor"
  ].join(", "),
  authors: [{ 
    name: "Military Real Estate Specialist",
    url: "https://pbrealtynova.com"
  }],
  creator: "MRP Certified Military Real Estate Professional",
  publisher: "Military Real Estate Northern Virginia",
  category: "Real Estate Services",
  classification: "Military Real Estate Services",
  
  openGraph: {
    title: "🎖️ Military Realtor Northern Virginia | MRP Certified PCS & VA Loan Expert",
    description: "Veteran-owned MRP certified realtor specializing in Fort Belvoir, Pentagon, Quantico military relocations. Expert PCS moves, VA loans, BAH optimization for military families.",
    url: "https://pbrealtynova.com",
    siteName: "Military Real Estate Northern Virginia",
    locale: "en_US",
    type: "website",
    images: [
      {
        width: 1200,
        height: 630,
        alt: "Military Realtor Northern Virginia - MRP Certified Professional",
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "🎖️ Military Realtor NoVA | MRP Certified | PCS Expert",
    description: "Veteran-owned MRP certified realtor. Fort Belvoir, Pentagon, Quantico military relocations. PCS moves, VA loans, military family real estate.",
    creator: "@MilitaryRealtorNoVA",
    site: "@MilitaryRealtorNoVA",
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  alternates: {
    canonical: "https://pbrealtynova.com",
  },
  
  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-verification-code",
    other: {
      bing: ["bing-verification-code"],
    },
  },
  
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Military Realtor NoVA",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "RealEstateAgent",
                  "@id": "https://pbrealtynova.com/#agent",
                  "name": "Military Real Estate Northern Virginia",
                  "alternateName": "MRP Certified Military Realtor NoVA",
                  "description": "🎖️ MRP Certified military real estate specialist serving Fort Belvoir, Pentagon, and Quantico areas. Expert in PCS relocations, VA loans, BAH optimization for military families.",
                  "url": "https://pbrealtynova.com",
                  "sameAs": [
                    "https://facebook.com/militaryrealestatenova",
                    "https://linkedin.com/in/militaryrealtor",
                    "https://instagram.com/militaryrealestatenova"
                  ],
                  "telephone": "+1-703-477-2606",
                  "email": "parjinder@pbrealtynova.com",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "123 Military Drive",
                    "addressLocality": "Fairfax",
                    "addressRegion": "VA",
                    "postalCode": "22030",
                    "addressCountry": "US"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 38.8462,
                    "longitude": -77.3064
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
                      "@type": "AdministrativeArea",
                      "name": "Fairfax County",
                      "containedInPlace": {
                        "@type": "State",
                        "name": "Virginia"
                      }
                    },
                    {
                      "@type": "AdministrativeArea",
                      "name": "Loudoun County", 
                      "containedInPlace": {
                        "@type": "State",
                        "name": "Virginia"
                      }
                    },
                    {
                      "@type": "AdministrativeArea",
                      "name": "Prince William County",
                      "containedInPlace": {
                        "@type": "State", 
                        "name": "Virginia"
                      }
                    }
                  ],
                  "hasCredential": [
                    {
                      "@type": "EducationalOccupationalCredential",
                      "name": "Military Relocation Professional (MRP)",
                      "description": "Specialized certification for military relocations and real estate services"
                    },
                    {
                      "@type": "EducationalOccupationalCredential", 
                      "name": "Virginia Real Estate License",
                      "description": "Licensed Real Estate Professional in Virginia"
                    }
                  ],
                  "serviceType": [
                    "Military Real Estate Services",
                    "PCS Relocation Services", 
                    "VA Loan Assistance",
                    "Military Family Home Buying",
                    "Military Family Home Selling",
                    "Deployment Real Estate Management",
                    "BAH Housing Optimization",
                    "Military Spouse Relocation Support"
                  ],
                  "knowsAbout": [
                    "VA Loans",
                    "Military Relocations", 
                    "PCS Moves",
                    "Military Housing Allowance (BAH)",
                    "Fort Belvoir Area Real Estate",
                    "Pentagon Area Real Estate",
                    "Quantico Marine Base Area Real Estate",
                    "Military Deployment Challenges",
                    "TDY Housing Assistance",
                    "Military Family Schools",
                    "Base Proximity Analysis"
                  ],
                  "priceRange": "$$",
                  "paymentAccepted": ["Cash", "Check", "Financing"],
                  "currenciesAccepted": "USD"
                },
                {
                  "@type": "Organization",
                  "@id": "https://pbrealtynova.com/#organization", 
                  "name": "Military Real Estate Northern Virginia",
                  "alternateName": "Military Realtor NoVA",
                  "description": "Veteran-owned MRP certified real estate company specializing in military relocations in Northern Virginia",
                  "url": "https://pbrealtynova.com",
                  "foundingDate": "2020",
                  "founder": {
                    "@type": "Person",
                    "name": "Military Real Estate Specialist"
                  },
                  "numberOfEmployees": "1-5",
                  "slogan": "Your Service Deserves Our Best Service",
                  "keywords": "military realtor, PCS relocation, VA loans, Fort Belvoir, Pentagon, Quantico, MRP certified"
                },
                {
                  "@type": "WebSite",
                  "@id": "https://pbrealtynova.com/#website",
                  "url": "https://pbrealtynova.com",
                  "name": "Military Real Estate Northern Virginia",
                  "description": "MRP Certified military realtor serving Fort Belvoir, Pentagon, Quantico. Expert PCS relocations, VA loans for military families.",
                  "publisher": {
                    "@id": "https://pbrealtynova.com/#organization"
                  },
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://pbrealtynova.com/search?q={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "@id": "https://pbrealtynova.com/#services",
                  "name": "Military Real Estate Services",
                  "description": "Comprehensive real estate services for military families including PCS relocations, VA loan assistance, and military housing solutions",
                  "provider": {
                    "@id": "https://pbrealtynova.com/#agent"
                  },
                  "areaServed": {
                    "@type": "State",
                    "name": "Virginia"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Military Real Estate Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "PCS Relocation Services",
                          "description": "Specialized relocation services for military PCS moves"
                        }
                      },
                      {
                        "@type": "Offer", 
                        "itemOffered": {
                          "@type": "Service",
                          "name": "VA Loan Assistance",
                          "description": "Expert guidance through VA loan process and benefits"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service", 
                          "name": "Military Home Buying",
                          "description": "Home buying services tailored for military families"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Military Home Selling", 
                          "description": "Home selling services with military timeline flexibility"
                        }
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <GoogleAnalytics ga_id="GA_MEASUREMENT_ID" />
          <FacebookPixel pixel_id="FB_PIXEL_ID" />
          <BreadcrumbSchema />
          <LLMEntityMarkup />
          <MilitaryServiceSchema />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
