import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('Test BoldTrail API endpoint called');
    
    const boldTrailApiUrl = process.env.BOLDTRAIL_API_URL;
    const boldTrailApiKey = process.env.BOLDTRAIL_API_KEY;

    console.log('Environment check:', {
      hasApiUrl: !!boldTrailApiUrl,
      hasApiKey: !!boldTrailApiKey,
      apiUrl: boldTrailApiUrl,
      apiKeyPrefix: boldTrailApiKey ? boldTrailApiKey.substring(0, 8) + '...' : 'Not set'
    });

    if (!boldTrailApiUrl || !boldTrailApiKey) {
      return NextResponse.json({ 
        error: 'BoldTrail credentials not configured',
        hasApiUrl: !!boldTrailApiUrl,
        hasApiKey: !!boldTrailApiKey
      }, { status: 400 });
    }

    // Test simple API call
    const testLead = {
      first_name: "Test",
      last_name: "Lead",
      email: "test@example.com",
      phone: "703-555-0123",
      source: "API Test",
      notes: "Test lead from website integration"
    };

    const endpoints = [
      `${boldTrailApiUrl}/leads`,
      `${boldTrailApiUrl}/contacts`,
      `${boldTrailApiUrl}/lead`,
      `${boldTrailApiUrl}/api/leads`,
      `${boldTrailApiUrl}/v1/leads`
    ];

    const results = [];

    for (const endpoint of endpoints) {
      try {
        console.log(`Testing endpoint: ${endpoint}`);
        
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${boldTrailApiKey}`,
            'X-API-Key': boldTrailApiKey,
            'Accept': 'application/json'
          },
          body: JSON.stringify(testLead),
        });

        const responseText = await response.text();
        
        results.push({
          endpoint,
          status: response.status,
          statusText: response.statusText,
          response: responseText,
          success: response.ok
        });

        console.log(`Result for ${endpoint}:`, {
          status: response.status,
          statusText: response.statusText,
          body: responseText
        });

      } catch (error) {
        results.push({
          endpoint,
          error: error.message,
          success: false
        });
        console.log(`Error testing ${endpoint}:`, error);
      }
    }

    return NextResponse.json({ 
      message: 'BoldTrail API test completed',
      results,
      environment: {
        hasApiUrl: !!boldTrailApiUrl,
        hasApiKey: !!boldTrailApiKey,
        apiUrl: boldTrailApiUrl
      }
    });

  } catch (error) {
    console.error('Test endpoint error:', error);
    return NextResponse.json({ 
      error: 'Test failed',
      details: error.message 
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'BoldTrail test endpoint - use POST to test API connection',
    environment: {
      hasApiUrl: !!process.env.BOLDTRAIL_API_URL,
      hasApiKey: !!process.env.BOLDTRAIL_API_KEY
    }
  });
}