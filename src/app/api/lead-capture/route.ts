import { NextRequest, NextResponse } from 'next/server';

interface LeadCaptureData {
  fullName: string;
  email: string;
  phone: string;
  base?: string;
  sourceForm: string;
}

interface BoldTrailLead {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  source: string;
  campaign?: string;
  notes?: string;
  custom_fields?: {
    military_base?: string;
    lead_source?: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadCaptureData = await request.json();
    
    // Validate required fields
    if (!body.fullName || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Parse full name into first and last name
    const nameParts = body.fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Prepare data for BoldTrail CRM
    const boldTrailLead: BoldTrailLead = {
      first_name: firstName,
      last_name: lastName,
      email: body.email,
      phone: body.phone,
      source: `Website Lead Capture - ${body.sourceForm}`,
      campaign: 'Military Real Estate Lead Magnet',
      notes: `Lead captured from ${body.sourceForm} form. Requested military real estate guide.`,
      custom_fields: {
        military_base: body.base,
        lead_source: body.sourceForm,
      }
    };

    // BoldTrail API integration
    const boldTrailApiUrl = process.env.BOLDTRAIL_API_URL;
    const boldTrailApiKey = process.env.BOLDTRAIL_API_KEY;

    if (boldTrailApiUrl && boldTrailApiKey) {
      try {
        const response = await fetch(`${boldTrailApiUrl}/leads`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${boldTrailApiKey}`,
            'X-API-Key': boldTrailApiKey,
          },
          body: JSON.stringify(boldTrailLead),
        });

        if (!response.ok) {
          console.error('BoldTrail API error:', response.statusText);
        } else {
          console.log('Lead successfully sent to BoldTrail CRM');
        }
      } catch (crmError) {
        console.error('CRM integration error:', crmError);
      }
    }

    // Send email notifications
    await sendLeadNotification(body);
    await sendLeadMagnetEmail(body);

    // Log the lead for tracking
    console.log('New lead captured:', {
      name: body.fullName,
      email: body.email,
      source: body.sourceForm,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { 
        message: 'Lead captured successfully',
        leadId: generateLeadId(),
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function sendLeadNotification(leadData: LeadCaptureData) {
  try {
    const sgMail = await import('@sendgrid/mail');
    
    const sendGridApiKey = process.env.SENDGRID_API_KEY;
    const toEmail = process.env.LEAD_NOTIFICATION_EMAIL || process.env.CONTACT_EMAIL || 'parjinder@pbrealtynova.com';
    const fromEmail = process.env.FROM_EMAIL || 'noreply@pbrealtynova.com';
    
    if (!sendGridApiKey) {
      console.log('SendGrid not configured, logging lead instead');
      logLeadToConsole(leadData);
      return;
    }

    sgMail.default.setApiKey(sendGridApiKey);

    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>New Lead Capture</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1e3a8a; }
            .hot-lead { background-color: #fef3cd; border-left: 4px solid #fbbf24; padding: 15px; margin: 15px 0; }
            .footer { background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class="header">
            <span style="font-size: 24px;">🔥</span>
            <h2>HOT LEAD CAPTURED</h2>
        </div>
        
        <div class="content">
            <div class="hot-lead">
                <strong>🎯 High-Intent Lead Alert!</strong><br>
                Someone requested your military real estate guide from the <strong>${leadData.sourceForm}</strong> form.
            </div>
            
            <div class="field">
                <div class="label">👤 Full Name:</div>
                <div>${leadData.fullName}</div>
            </div>
            
            <div class="field">
                <div class="label">📧 Email:</div>
                <div><a href="mailto:${leadData.email}">${leadData.email}</a></div>
            </div>
            
            <div class="field">
                <div class="label">📞 Phone:</div>
                <div><a href="tel:${leadData.phone}">${leadData.phone}</a></div>
            </div>
            
            <div class="field">
                <div class="label">🏛️ Base:</div>
                <div>${leadData.base || 'Not specified'}</div>
            </div>
            
            <div class="field">
                <div class="label">📋 Source Form:</div>
                <div>${leadData.sourceForm}</div>
            </div>
            
            <div class="field">
                <div class="label">📅 Captured:</div>
                <div>${new Date().toLocaleString('en-US', { 
                  timeZone: 'America/New_York',
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })} EST</div>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #dcfce7; border-radius: 5px;">
                <strong>⚡ Action Required:</strong><br>
                This is a warm lead who specifically requested military real estate information. 
                Follow up within 5 minutes for best conversion rates!
            </div>
        </div>
        
        <div class="footer">
            Military Real Estate Northern Virginia | Lead Capture System<br>
            Follow up immediately for best results
        </div>
    </body>
    </html>
    `;

    const textContent = `
🔥 HOT LEAD CAPTURED! 🔥

High-intent lead from ${leadData.sourceForm} form:

👤 Name: ${leadData.fullName}
📧 Email: ${leadData.email}
📞 Phone: ${leadData.phone}
🏛️ Base: ${leadData.base || 'Not specified'}
📋 Source: ${leadData.sourceForm}
📅 Captured: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST

⚡ ACTION REQUIRED: Follow up within 5 minutes!

---
Military Real Estate Northern Virginia
Lead Capture System
    `;

    const msg = {
      to: toEmail,
      from: {
        email: fromEmail,
        name: 'Military Real Estate Lead System'
      },
      subject: `🔥 HOT LEAD: ${leadData.fullName} - ${leadData.sourceForm}`,
      text: textContent,
      html: htmlContent,
      categories: ['lead-capture', 'hot-leads'],
      customArgs: {
        'lead_source': leadData.sourceForm,
        'military_base': leadData.base || 'unknown'
      }
    };

    await sgMail.default.send(msg);
    console.log('Lead notification sent successfully');

  } catch (error) {
    console.error('Lead notification error:', error);
    logLeadToConsole(leadData);
  }
}

async function sendLeadMagnetEmail(leadData: LeadCaptureData) {
  try {
    const sgMail = await import('@sendgrid/mail');
    const fromEmail = process.env.FROM_EMAIL || 'noreply@militaryrealestatenova.com';

    const leadMagnetHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Your Military Real Estate Guide</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .guide-section { background-color: #f0f7ff; border: 2px solid #1e3a8a; border-radius: 10px; padding: 20px; margin: 20px 0; }
            .download-btn { background-color: #1e3a8a; color: white; padding: 15px 30px; border-radius: 5px; text-decoration: none; display: inline-block; margin: 10px 0; }
            .tips-box { background-color: #fef3cd; border-left: 4px solid #fbbf24; padding: 15px; margin: 15px 0; }
            .footer { background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class="header">
            <span style="font-size: 24px;">🎖️</span>
            <h2>Your FREE Military Real Estate Guide</h2>
        </div>
        
        <div class="content">
            <p>Dear ${leadData.fullName.split(' ')[0]},</p>
            
            <p>Thank you for your service and for requesting our comprehensive Military Real Estate Guide! As an MRP Certified professional, I've created this guide specifically for military families navigating Northern Virginia's real estate market.</p>
            
            <div class="guide-section">
                <h3>🎖️ Your Military Real Estate Guide Includes:</h3>
                <ul>
                    <li><strong>PCS Timeline Checklist</strong> - Step-by-step moving timeline</li>
                    <li><strong>VA Loan Maximization</strong> - Get the most from your benefits</li>
                    <li><strong>Base Proximity Maps</strong> - Best neighborhoods for your commute</li>
                    <li><strong>School District Guide</strong> - Top schools for military families</li>
                    <li><strong>BAH Optimization Tips</strong> - Stretch your housing allowance</li>
                    <li><strong>Deployment Strategies</strong> - Managing real estate while deployed</li>
                    <li><strong>Northern Virginia Insider Info</strong> - Local military family secrets</li>
                </ul>
                
                <div style="text-align: center; margin: 20px 0;">
                    <a href="${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3003'}/download-guide?email=${encodeURIComponent(leadData.email)}" class="download-btn" style="color: white;">
                        📋 DOWNLOAD YOUR FREE GUIDE
                    </a>
                </div>
            </div>
            
            <div class="tips-box">
                <strong>💡 Quick Win Tips:</strong>
                <ul>
                    <li>Start your housing search 2-3 months before PCS</li>
                    <li>Get pre-approved for VA loan early in the process</li>
                    <li>Consider commute times during rush hour (DC traffic!)</li>
                    <li>Look into military housing preferences in different areas</li>
                </ul>
            </div>
            
            <h3>🤝 What's Next?</h3>
            <p>I'll be reaching out within 24 hours to:</p>
            <ul>
                <li>Answer any questions about the Northern Virginia market</li>
                <li>Discuss your specific military housing needs</li>
                <li>Provide personalized recommendations for your situation</li>
                <li>Schedule a no-obligation consultation if you're interested</li>
            </ul>
            
            <p><strong>Need to talk sooner?</strong><br>
            📞 <a href="tel:+1-703-477-2606">(703) 477-2606</a><br>
            📧 <a href="mailto:parjinder@pbrealtynova.com">parjinder@pbrealtynova.com</a></p>
            
            <p>Your service to our country deserves the best service from us. I look forward to helping you and your family find the perfect home in Northern Virginia!</p>
            
            <p>Respectfully,<br>
            <strong>Your Military Real Estate Specialist</strong><br>
            MRP Certified | Veteran-Owned Business</p>
        </div>
        
        <div class="footer">
            Military Real Estate Northern Virginia<br>
            Serving Fort Belvoir • Pentagon • Quantico • All of NoVA<br>
            📧 parjinder@pbrealtynova.com | 📞 (703) 477-2606
        </div>
    </body>
    </html>
    `;

    const leadMagnetText = `
🎖️ Your FREE Military Real Estate Guide

Dear ${leadData.fullName.split(' ')[0]},

Thank you for your service and for requesting our Military Real Estate Guide!

🎖️ YOUR GUIDE INCLUDES:
• PCS Timeline Checklist
• VA Loan Maximization Tips  
• Base Proximity Maps
• School District Guide
• BAH Optimization Strategies
• Deployment Real Estate Management
• Northern Virginia Insider Information

📋 DOWNLOAD YOUR GUIDE:
${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3003'}/download-guide?email=${encodeURIComponent(leadData.email)}

💡 QUICK WINS:
• Start housing search 2-3 months before PCS
• Get VA loan pre-approval early
• Consider DC rush hour commute times
• Research military housing preferences

🤝 WHAT'S NEXT:
I'll contact you within 24 hours to discuss your specific needs and answer any questions about the Northern Virginia military housing market.

📞 NEED TO TALK SOONER?
Phone: (703) 477-2606
Email: parjinder@pbrealtynova.com

Your service deserves our best service!

Respectfully,
Your Military Real Estate Specialist
MRP Certified | Veteran-Owned Business
    `;

    const leadMagnetMsg = {
      to: leadData.email,
      from: {
        email: fromEmail,
        name: 'Military Real Estate NoVA'
      },
      subject: '🎖️ Your FREE Military Real Estate Guide (Download Ready!)',
      text: leadMagnetText,
      html: leadMagnetHtml,
      categories: ['lead-magnet', 'military-guide'],
      customArgs: {
        'type': 'lead-magnet',
        'source': leadData.sourceForm
      }
    };

    await sgMail.default.send(leadMagnetMsg);
    console.log('Lead magnet email sent successfully');

  } catch (error) {
    console.error('Lead magnet email error:', error);
  }
}

function logLeadToConsole(leadData: LeadCaptureData) {
  const leadContent = `
🔥 HOT LEAD CAPTURED! 🔥

👤 Name: ${leadData.fullName}
📧 Email: ${leadData.email}
📞 Phone: ${leadData.phone}
🏛️ Base: ${leadData.base || 'Not specified'}
📋 Source: ${leadData.sourceForm}
📅 Captured: ${new Date().toLocaleString()}
  `;

  console.log('LEAD CAPTURE (SendGrid not configured):', leadContent);
}

function generateLeadId(): string {
  return `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}