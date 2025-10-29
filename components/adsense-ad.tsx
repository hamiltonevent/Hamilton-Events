'use client';

import { useEffect } from 'react';

interface AdSenseAdProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdSenseAd({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  className = '',
  style = {}
}: AdSenseAdProps) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  
  useEffect(() => {
    // Only initialize AdSense if client ID is properly configured
    if (!clientId || clientId.includes('your-adsense-client-id-here') || clientId.includes('ca-pub-XXXXXXXXXXXXXXXX')) {
      return;
    }
    
    try {
      // Only push ad if adsbygoogle is available and not already pushed
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        // Add a small delay to ensure DOM is ready
        const timer = setTimeout(() => {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            console.log('AdSense ad initialized for slot:', adSlot);
          } catch (error) {
            console.error('AdSense push error:', error);
            // Report error to our Netlify function
            fetch('/api/adsense', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                action: 'report_error',
                data: { error: error instanceof Error ? error.message : String(error), adSlot }
              })
            }).catch(console.error);
          }
        }, 100);
        
        return () => clearTimeout(timer);
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, [clientId, adSlot]); // Add adSlot as dependency to reinitialize when slot changes

  // Don't render ad if client ID is not properly configured
  if (!clientId || clientId.includes('your-adsense-client-id-here') || clientId.includes('ca-pub-XXXXXXXXXXXXXXXX')) {
    return (
      <div className={`adsense-placeholder ${className}`} style={style}>
        <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center text-gray-500 dark:text-gray-400">
          <p className="text-sm">AdSense Placeholder</p>
          <p className="text-xs">Configure NEXT_PUBLIC_ADSENSE_CLIENT_ID</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          textAlign: 'center',
          ...style
        }}
        data-ad-client={clientId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
}

// Predefined ad configurations for different placements
export const AdConfigs = {
  // Homepage banner ad
  homepageBanner: {
    adSlot: "1234567890", // Replace with actual ad slot ID
    adFormat: "auto" as const,
    className: "w-full max-w-4xl mx-auto my-8",
    style: { minHeight: '250px' }
  },
  
  // Sidebar ad for service pages
  sidebar: {
    adSlot: "1234567891", // Replace with actual ad slot ID
    adFormat: "vertical" as const,
    className: "w-full max-w-xs",
    style: { minHeight: '600px' }
  },
  
  // In-content ad for long pages
  inContent: {
    adSlot: "1234567892", // Replace with actual ad slot ID
    adFormat: "rectangle" as const,
    className: "w-full max-w-md mx-auto my-6",
    style: { minHeight: '280px' }
  },
  
  // Footer ad
  footer: {
    adSlot: "1234567893", // Replace with actual ad slot ID
    adFormat: "horizontal" as const,
    className: "w-full max-w-6xl mx-auto",
    style: { minHeight: '100px' }
  }
};