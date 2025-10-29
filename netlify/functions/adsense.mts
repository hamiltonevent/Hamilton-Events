import { Handler } from "@netlify/functions";

export const handler: Handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    };
  }

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
  };

  try {
    // Handle GET requests for AdSense configuration
    if (event.httpMethod === 'GET') {
      const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
      
      if (!clientId || clientId.includes('your-adsense-client-id-here')) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({
            configured: false,
            message: 'AdSense client ID not configured',
            placeholder: true
          }),
        };
      }

      // Return AdSense configuration
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          configured: true,
          clientId: clientId,
          adConfigs: {
            homepageBanner: {
              adSlot: "1234567890",
              adFormat: "auto",
              className: "w-full max-w-4xl mx-auto my-8",
              style: { minHeight: '250px' }
            },
            sidebar: {
              adSlot: "1234567891",
              adFormat: "vertical",
              className: "w-full max-w-xs",
              style: { minHeight: '600px' }
            },
            inContent: {
              adSlot: "1234567892",
              adFormat: "rectangle",
              className: "w-full max-w-2xl mx-auto my-6",
              style: { minHeight: '280px' }
            },
            footer: {
              adSlot: "1234567893",
              adFormat: "horizontal",
              className: "w-full max-w-6xl mx-auto my-4",
              style: { minHeight: '90px' }
            }
          }
        }),
      };
    }

    // Handle POST requests for AdSense analytics/reporting
    if (event.httpMethod === 'POST') {
      const { action, data } = JSON.parse(event.body || '{}');

      switch (action) {
        case 'track_impression':
          // Log ad impression for analytics
          console.log('AdSense impression tracked:', {
            adSlot: data?.adSlot,
            timestamp: new Date().toISOString(),
            userAgent: event.headers['user-agent'],
            referer: event.headers.referer
          });
          
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ 
              success: true, 
              message: 'Impression tracked' 
            }),
          };

        case 'report_error':
          // Log AdSense errors for debugging
          console.error('AdSense error reported:', {
            error: data?.error,
            adSlot: data?.adSlot,
            timestamp: new Date().toISOString(),
            userAgent: event.headers['user-agent'],
            referer: event.headers.referer
          });
          
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ 
              success: true, 
              message: 'Error reported' 
            }),
          };

        case 'validate_config':
          // Validate AdSense configuration
          const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
          const isValid = clientId && !clientId.includes('your-adsense-client-id-here');
          
          return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
              valid: isValid,
              clientId: isValid ? clientId : null,
              message: isValid ? 'Configuration valid' : 'Invalid or missing client ID'
            }),
          };

        default:
          return {
            statusCode: 400,
            headers,
            body: JSON.stringify({ 
              error: 'Invalid action. Supported actions: track_impression, report_error, validate_config' 
            }),
          };
      }
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };

  } catch (error) {
    console.error('AdSense function error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
    };
  }
};