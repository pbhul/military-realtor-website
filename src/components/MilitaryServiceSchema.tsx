'use client';

export default function MilitaryServiceSchema() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://pbrealtynova.com/emergency-pcs",
        "name": "Emergency PCS Real Estate Services",
        "description": "Rapid real estate assistance for urgent military relocations with compressed timelines. Specialized support for emergency PCS orders and quick closings.",
        "provider": {
          "@type": "RealEstateAgent",
          "@id": "https://pbrealtynova.com/#agent"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Northern Virginia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Military Personnel"
        },
        "serviceType": "Emergency Military Relocation"
      },
      {
        "@type": "Service", 
        "@id": "https://pbrealtynova.com/deployment-property-management",
        "name": "Deployment Property Management",
        "description": "Professional property management services for military families during deployments. Tenant screening, maintenance coordination, and rental management.",
        "provider": {
          "@type": "RealEstateAgent",
          "@id": "https://pbrealtynova.com/#agent"
        },
        "areaServed": {
          "@type": "AdministrativeArea", 
          "name": "Northern Virginia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Deployed Military Personnel"
        },
        "serviceType": "Military Property Management"
      },
      {
        "@type": "Service",
        "@id": "https://pbrealtynova.com/va-loan-guidance", 
        "name": "VA Loan Guidance & Support",
        "description": "Expert guidance through the VA loan process, including eligibility verification, lender connections, and benefit optimization for military home purchases.",
        "provider": {
          "@type": "RealEstateAgent",
          "@id": "https://pbrealtynova.com/#agent"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Northern Virginia"
        },
        "audience": {
          "@type": "Audience", 
          "audienceType": "Military Veterans and Active Duty"
        },
        "serviceType": "VA Loan Assistance"
      },
      {
        "@type": "Service",
        "@id": "https://pbrealtynova.com/pcs-timeline",
        "name": "PCS Timeline Coordination",
        "description": "Real estate timeline coordination with military PCS orders, ensuring smooth transitions and meeting critical military deadlines.",
        "provider": {
          "@type": "RealEstateAgent",
          "@id": "https://pbrealtynova.com/#agent"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Northern Virginia"
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Military Personnel with PCS Orders"
        },
        "serviceType": "Military PCS Real Estate Coordination"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(servicesSchema)
      }}
    />
  );
}