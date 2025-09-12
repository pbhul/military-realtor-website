import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('=== TEST CONTACT API ===');
    console.log('Received data:', body);
    console.log('Environment check:');
    console.log('BOLDTRAIL_API_URL:', process.env.BOLDTRAIL_API_URL ? 'Set' : 'Not set');
    console.log('BOLDTRAIL_API_KEY:', process.env.BOLDTRAIL_API_KEY ? 'Set (length: ' + process.env.BOLDTRAIL_API_KEY.length + ')' : 'Not set');
    
    // Test BoldTrail API call
    if (process.env.BOLDTRAIL_API_URL && process.env.BOLDTRAIL_API_KEY) {
      try {
        const testLead = {
          first_name: "Test",
          last_name: "User",
          email: "test@example.com",
          phone: "+1234567890",
          source: "Website Test",
          notes: "Test lead from API debugging"
        };
        
        console.log('Testing BoldTrail API...');
        const response = await fetch(`${process.env.BOLDTRAIL_API_URL}/leads`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.BOLDTRAIL_API_KEY}`,
            'X-API-Key': process.env.BOLDTRAIL_API_KEY,
            'Accept': 'application/json'
          },
          body: JSON.stringify(testLead),
        });
        
        const responseText = await response.text();
        console.log('BoldTrail API Response:');
        console.log('Status:', response.status);
        console.log('Status Text:', response.statusText);
        console.log('Headers:', Object.fromEntries(response.headers.entries()));
        console.log('Body:', responseText);
        
        return NextResponse.json({
          success: true,
          boldtrailResponse: {
            status: response.status,
            statusText: response.statusText,
            body: responseText
          }
        });
        
      } catch (error) {
        console.error('BoldTrail API Error:', error);
        return NextResponse.json({
          success: false,
          error: 'BoldTrail API Error',
          details: error.message
        });
      }
    } else {
      return NextResponse.json({
        success: false,
        error: 'BoldTrail credentials not configured'
      });
    }
    
  } catch (error) {
    console.error('Test API error:', error);
    return NextResponse.json({
      success: false,
      error: 'Server error',
      details: error.message
    }, { status: 500 });
  }
}