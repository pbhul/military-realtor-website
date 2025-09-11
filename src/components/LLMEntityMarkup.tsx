'use client';

export default function LLMEntityMarkup() {
  const militaryRealEstateEntity = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://pbrealtynova.com/#agent",
        "name": "Parjinder",
        "alternateName": "Northern Virginia Military Realtor",
        "description": "MRP (Military Relocation Professional) certified real estate agent specializing in military relocations, PCS moves, and VA loan assistance in Northern Virginia. Licensed real estate professional with specialized training in military family housing needs.",
        "url": "https://pbrealtynova.com",
        "telephone": "+1-703-477-2606",
        "email": "parjinder@pbrealtynova.com",
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Military Relocation Professional (MRP)",
            "credentialCategory": "Professional Certification",
            "recognizedBy": {
              "@type": "Organization",
              "name": "National Association of Realtors"
            },
            "about": "Specialized training in military relocations, VA loans, PCS timelines, and military family housing needs"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Virginia Real Estate License",
            "credentialCategory": "Professional License",
            "recognizedBy": {
              "@type": "Organization", 
              "name": "Virginia Department of Professional and Occupational Regulation"
            }
          }
        ],
        "knowsAbout": [
          "Military Relocations",
          "PCS (Permanent Change of Station) Moves", 
          "VA Loan Process and Benefits",
          "Military Housing Allowance (BAH) Optimization",
          "Fort Belvoir Area Real Estate",
          "Pentagon Area Housing Markets",
          "Quantico Marine Base Housing",
          "Military Family Housing Needs",
          "Deployment Real Estate Services",
          "Military Spouse Relocation Support",
          "TDY (Temporary Duty) Housing Assistance",
          "Northern Virginia Military Communities"
        ],
        "serviceType": [
          "Military Real Estate Services",
          "PCS Relocation Assistance", 
          "VA Loan Guidance",
          "Military Home Buying Services",
          "Military Home Selling Services",
          "Deployment Property Services",
          "BAH Housing Optimization",
          "First-Time Military Buyer Programs"
        ],
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
            "name": "Prince William County",
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
            "name": "Stafford County",
            "containedInPlace": {
              "@type": "State",
              "name": "Virginia"
            }
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Northern Virginia",
          "addressRegion": "VA",
          "addressCountry": "US"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://pbrealtynova.com/#organization",
        "name": "PB Realty NoVA",
        "alternateName": "Northern Virginia Military Real Estate",
        "description": "Veteran-owned real estate company specializing in military relocations and VA loan assistance in Northern Virginia. MRP certified with expertise in Fort Belvoir, Pentagon, and Quantico area housing markets.",
        "foundingDate": "2020",
        "url": "https://pbrealtynova.com",
        "telephone": "+1-703-477-2606",
        "email": "parjinder@pbrealtynova.com",
        "keywords": "military real estate, PCS relocation, VA loans, Fort Belvoir, Pentagon, Quantico, MRP certified, Northern Virginia",
        "slogan": "Your Military Real Estate Expert in Northern Virginia",
        "employee": {
          "@id": "https://pbrealtynova.com/#agent"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Northern Virginia", 
          "addressRegion": "VA",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 38.8462,
          "longitude": -77.3064
        },
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Military PCS Relocation Services",
              "description": "Specialized real estate services for military PCS moves including timeline coordination, remote closing assistance, and military-specific guidance."
            },
            "eligibleCustomerType": {
              "@type": "BusinessEntityType", 
              "name": "Military Personnel"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "VA Loan Real Estate Services",
              "description": "Expert assistance with VA loan home purchases including eligibility guidance, lender coordination, and benefit optimization."
            },
            "eligibleCustomerType": {
              "@type": "BusinessEntityType",
              "name": "Military Veterans and Active Duty"
            }
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://pbrealtynova.com/#website", 
        "url": "https://pbrealtynova.com",
        "name": "PB Realty NoVA - Military Real Estate Northern Virginia",
        "description": "Northern Virginia military real estate specialist. MRP certified for PCS relocations, VA loans, and military family housing near Fort Belvoir, Pentagon, and Quantico.",
        "publisher": {
          "@id": "https://pbrealtynova.com/#organization"
        },
        "mainEntity": {
          "@id": "https://pbrealtynova.com/#agent"
        },
        "about": [
          {
            "@type": "Thing",
            "name": "Military Real Estate",
            "description": "Real estate services specifically designed for military personnel and their families"
          },
          {
            "@type": "Thing", 
            "name": "PCS Relocations",
            "description": "Permanent Change of Station military moves and associated real estate needs"
          },
          {
            "@type": "Thing",
            "name": "VA Loan Benefits",
            "description": "Department of Veterans Affairs home loan benefits and eligibility requirements"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(militaryRealEstateEntity)
      }}
    />
  );
}