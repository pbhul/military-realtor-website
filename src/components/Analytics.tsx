'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Google Analytics 4 tracking
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export function GoogleAnalytics({ ga_id }: { ga_id: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!ga_id) return;

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', ga_id, {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        custom_parameter_1: 'military_base',
        custom_parameter_2: 'service_branch',
        custom_parameter_3: 'home_type'
      }
    });
  }, [ga_id]);

  useEffect(() => {
    if (!window.gtag) return;

    // Track page views
    window.gtag('config', ga_id, {
      page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
      page_title: document.title,
    });

    // Track military-specific events
    const trackMilitaryPageView = () => {
      const militaryKeywords = ['fort-belvoir', 'pentagon', 'quantico', 'military', 'va-loan', 'bah', 'pcs'];
      const currentPath = pathname.toLowerCase();
      
      const matchedKeywords = militaryKeywords.filter(keyword => currentPath.includes(keyword));
      
      if (matchedKeywords.length > 0) {
        window.gtag('event', 'military_page_view', {
          event_category: 'Military Engagement',
          event_label: matchedKeywords.join(', '),
          page_path: pathname,
          custom_parameter_1: matchedKeywords[0] // Primary military context
        });
      }
    };

    trackMilitaryPageView();
  }, [pathname, searchParams, ga_id]);

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga_id}', {
              page_path: window.location.pathname,
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true,
              custom_map: {
                'custom_parameter_1': 'military_base',
                'custom_parameter_2': 'service_branch', 
                'custom_parameter_3': 'home_type'
              }
            });
          `,
        }}
      />
    </>
  );
}

// Facebook Pixel tracking
export function FacebookPixel({ pixel_id }: { pixel_id: string }) {
  useEffect(() => {
    if (!pixel_id) return;

    // Initialize Facebook Pixel
    (function(f: any, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    (window as any).fbq('init', pixel_id);
    (window as any).fbq('track', 'PageView');
  }, [pixel_id]);

  return (
    <noscript>
      <img 
        height="1" 
        width="1" 
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${pixel_id}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}

// Custom event tracking for military-specific actions
export const trackMilitaryEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'Military Engagement',
      ...parameters
    });
  }

  // Also track on Facebook Pixel if available
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, parameters);
  }
};

// Lead tracking
export const trackLead = (leadType: string, source: string, additionalData: Record<string, any> = {}) => {
  const leadData = {
    event_category: 'Lead Generation',
    event_label: leadType,
    source: source,
    value: leadType === 'contact_form' ? 50 : leadType === 'phone_call' ? 75 : 25,
    currency: 'USD',
    ...additionalData
  };

  trackMilitaryEvent('generate_lead', leadData);

  // Track conversion for advertising platforms
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_category: 'Military Real Estate',
      content_name: leadType,
      source: source
    });
  }
};

// Calculator usage tracking
export const trackCalculatorUsage = (calculatorType: string, result: any) => {
  trackMilitaryEvent('calculator_use', {
    calculator_type: calculatorType,
    event_label: `${calculatorType}_calculation`,
    custom_parameter_3: calculatorType === 'bah' ? 'bah_calculation' : 'commute_calculation'
  });
};

// Page engagement tracking
export const trackPageEngagement = (engagementType: string, element: string, duration?: number) => {
  trackMilitaryEvent('page_engagement', {
    engagement_type: engagementType,
    element: element,
    duration: duration,
    event_label: `${engagementType}_${element}`
  });
};

// Search tracking
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackMilitaryEvent('search', {
    search_term: searchTerm,
    results_count: resultsCount,
    event_label: searchTerm
  });
};

// Download tracking
export const trackDownload = (fileName: string, fileType: string) => {
  trackMilitaryEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
    event_label: fileName
  });
};