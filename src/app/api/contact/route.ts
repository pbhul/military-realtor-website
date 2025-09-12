import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  branch?: string;
  base?: string;
  timeline?: string;
  serviceType: string;
  message?: string;
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
    military_branch?: string;
    military_base?: string;
    timeline?: string;
    service_type?: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Validate required fields
    if (!body.fullName || !body.email || !body.phone || !body.serviceType) {
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
      source: 'Website Contact Form',
      campaign: 'Military Real Estate Northern Virginia',
      notes: body.message || `Service Type: ${body.serviceType}`,
      custom_fields: {
        military_branch: body.branch,
        military_base: body.base,
        timeline: body.timeline,
        service_type: body.serviceType,
      }
    };

    // BoldTrail API integration
    const boldTrailApiUrl = process.env.BOLDTRAIL_API_URL;
    const boldTrailApiKey = process.env.BOLDTRAIL_API_KEY;

    console.log('BoldTrail Debug:', {
      hasApiUrl: !!boldTrailApiUrl,
      hasApiKey: !!boldTrailApiKey,
      apiUrl: boldTrailApiUrl ? `${boldTrailApiUrl.substring(0, 20)}...` : 'Not set'
    });

    if (boldTrailApiUrl && boldTrailApiKey) {
      try {
        console.log('Attempting to send lead to BoldTrail:', {
          url: `${boldTrailApiUrl}/leads`,
          leadData: {
            first_name: boldTrailLead.first_name,
            last_name: boldTrailLead.last_name,
            email: boldTrailLead.email,
            phone: boldTrailLead.phone
          }
        });

        // Try multiple BoldTrail API endpoints and formats
        const endpoints = [
          `${boldTrailApiUrl}/leads`,
          `${boldTrailApiUrl}/contacts`,
          `${boldTrailApiUrl}/lead`,
          `${boldTrailApiUrl}/api/leads`,
          `${boldTrailApiUrl}/v1/leads`
        ];

        let response;
        let lastError;

        for (const endpoint of endpoints) {
          try {
            console.log(`Trying endpoint: ${endpoint}`);
            
            response = await fetch(endpoint, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${boldTrailApiKey}`,
                'X-API-Key': boldTrailApiKey,
                'Accept': 'application/json'
              },
              body: JSON.stringify(boldTrailLead),
            });

            if (response.ok) {
              console.log(`Success with endpoint: ${endpoint}`);
              break;
            } else {
              console.log(`Failed with endpoint ${endpoint}: ${response.status} ${response.statusText}`);
              lastError = { status: response.status, statusText: response.statusText, endpoint };
            }
          } catch (err) {
            console.log(`Error with endpoint ${endpoint}:`, err);
            lastError = { error: err, endpoint };
            continue;
          }
        }

        const responseText = await response.text();
        console.log('BoldTrail API Response:', {
          status: response.status,
          statusText: response.statusText,
          body: responseText
        });

        if (!response.ok) {
          console.error('BoldTrail API error:', {
            status: response.status,
            statusText: response.statusText,
            body: responseText,
            headers: Object.fromEntries(response.headers.entries())
          });
          // Continue with fallback even if CRM fails
        } else {
          console.log('✅ Lead successfully sent to BoldTrail CRM');
          console.log('BoldTrail success response:', responseText);
        }
      } catch (crmError) {
        console.error('CRM integration error:', crmError);
        // Continue with fallback even if CRM fails
      }
    } else {
      console.warn('BoldTrail credentials not configured - missing:', {
        apiUrl: !boldTrailApiUrl,
        apiKey: !boldTrailApiKey
      });
    }

    // Fallback: Email notification
    await sendEmailNotification(body);

    // Log the lead for tracking (always log to server console)
    console.log('=== NEW LEAD RECEIVED ===');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Name:', body.fullName);
    console.log('Email:', body.email);
    console.log('Phone:', body.phone);
    console.log('Service Type:', body.serviceType);
    console.log('Military Branch:', body.branch || 'Not specified');
    console.log('Base:', body.base || 'Not specified');
    console.log('Timeline:', body.timeline || 'Not specified');
    console.log('Message:', body.message || 'No additional message');
    console.log('=== END LEAD DATA ===');

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        leadId: generateLeadId(),
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function sendEmailNotification(formData: ContactFormData) {
  try {
    // Import SendGrid dynamically to avoid issues if not configured
    const sgMail = await import('@sendgrid/mail');
    
    const sendGridApiKey = process.env.SENDGRID_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL || 'parjinder@pbrealtynova.com';
    const fromEmail = process.env.FROM_EMAIL || 'noreply@pbrealtynova.com';
    
    if (!sendGridApiKey) {
      console.log('SendGrid not configured, logging email instead');
      logEmailToConsole(formData);
      return;
    }

    sgMail.default.setApiKey(sendGridApiKey);

    // HTML email template
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>New Military Real Estate Lead</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1e3a8a; }
            .flag { font-size: 24px; margin-right: 10px; }
            .military-badge { background-color: #f0f7ff; border-left: 4px solid #1e3a8a; padding: 15px; margin: 15px 0; }
            .footer { background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class="header">
            <span class="flag">🎖️</span>
            <h2>New Military Real Estate Lead</h2>
        </div>
        
        <div class="content">
            <div class="military-badge">
                <strong>🎖️ Military Family Contact</strong><br>
                A service member or military family member has requested assistance with real estate services.
            </div>
            
            <div class="field">
                <div class="label">👤 Full Name:</div>
                <div>${formData.fullName}</div>
            </div>
            
            <div class="field">
                <div class="label">📧 Email:</div>
                <div><a href="mailto:${formData.email}">${formData.email}</a></div>
            </div>
            
            <div class="field">
                <div class="label">📞 Phone:</div>
                <div><a href="tel:${formData.phone}">${formData.phone}</a></div>
            </div>
            
            <div class="field">
                <div class="label">🎖️ Military Branch:</div>
                <div>${formData.branch || 'Not specified'}</div>
            </div>
            
            <div class="field">
                <div class="label">🏛️ Base:</div>
                <div>${formData.base || 'Not specified'}</div>
            </div>
            
            <div class="field">
                <div class="label">⏰ Timeline:</div>
                <div>${formData.timeline || 'Not specified'}</div>
            </div>
            
            <div class="field">
                <div class="label">🏠 Service Type:</div>
                <div>${formData.serviceType}</div>
            </div>
            
            ${formData.message ? `
            <div class="field">
                <div class="label">💬 Additional Message:</div>
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${formData.message}</div>
            </div>
            ` : ''}
            
            <div class="field">
                <div class="label">📅 Submitted:</div>
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
        </div>
        
        <div class="footer">
            Military Real Estate Northern Virginia | MRP Certified<br>
            Serving Fort Belvoir, Pentagon, Quantico & surrounding areas
        </div>
    </body>
    </html>
    `;

    const textContent = `
🎖️ NEW MILITARY REAL ESTATE LEAD 🎖️

👤 Name: ${formData.fullName}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}
🎖️ Military Branch: ${formData.branch || 'Not specified'}
🏛️ Base: ${formData.base || 'Not specified'}
⏰ Timeline: ${formData.timeline || 'Not specified'}
🏠 Service Type: ${formData.serviceType}
💬 Message: ${formData.message || 'No additional message'}

📅 Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST

---
Military Real Estate Northern Virginia
MRP Certified | Serving Military Families
    `;

    const msg = {
      to: toEmail,
      from: {
        email: fromEmail,
        name: 'Military Real Estate NoVA'
      },
      subject: `🎖️ New Military Lead: ${formData.fullName} - ${formData.serviceType}`,
      text: textContent,
      html: htmlContent,
      categories: ['military-leads', 'website-contact'],
      customArgs: {
        'source': 'website-contact-form',
        'military_branch': formData.branch || 'unknown',
        'service_type': formData.serviceType
      }
    };

    await sgMail.default.send(msg);
    console.log('Email notification sent successfully to:', toEmail);

    // Also send auto-reply to the customer
    await sendAutoReply(formData);

  } catch (error) {
    console.error('Email sending error:', error);
    // Fallback to console logging
    logEmailToConsole(formData);
  }
}

async function sendAutoReply(formData: ContactFormData) {
  try {
    const sgMail = await import('@sendgrid/mail');
    const fromEmail = process.env.FROM_EMAIL || 'noreply@pbrealtynova.com';

    const autoReplyHtml = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Thank you for contacting us!</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background-color: #1e3a8a; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .military-badge { background-color: #f0f7ff; border-left: 4px solid #1e3a8a; padding: 15px; margin: 15px 0; }
            .contact-info { background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; }
            .footer { background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class="header">
            <span style="font-size: 24px;">🎖️</span>
            <h2>Thank You for Your Service & Your Trust</h2>
        </div>
        
        <div class="content">
            <p>Dear ${formData.fullName},</p>
            
            <p>Thank you for contacting Military Real Estate Northern Virginia. As a fellow military family supporter and MRP Certified professional, I understand the unique challenges you face with military relocations and real estate needs.</p>
            
            <div class="military-badge">
                <strong>🎖️ Your Request:</strong><br>
                Service Type: ${formData.serviceType}<br>
                ${formData.timeline ? `Timeline: ${formData.timeline}<br>` : ''}
                ${formData.base ? `Base: ${formData.base}` : ''}
            </div>
            
            <p><strong>What happens next:</strong></p>
            <ul>
                <li>🕐 I will personally contact you promptly during business hours</li>
                <li>📋 We'll discuss your specific military real estate needs</li>
                <li>🎯 I'll provide you with a customized action plan</li>
                <li>📚 You'll receive our free Military PCS Real Estate Guide</li>
            </ul>
            
            <div class="contact-info">
                <strong>📞 Need to reach me sooner?</strong><br>
                Phone: <a href="tel:+1-703-477-2606">(703) 477-2606</a><br>
                Email: <a href="mailto:parjinder@pbrealtynova.com">parjinder@pbrealtynova.com</a><br>
                <br>
                <em>Available 7 days a week to accommodate military schedules</em>
            </div>
            
            <p>Your service to our country deserves the best service from us. I look forward to helping you and your family with your Northern Virginia real estate needs.</p>
            
            <p>Semper Fi,<br>
            <strong>Your Military Real Estate Specialist</strong><br>
            MRP Certified | Veteran-Owned Business</p>
        </div>
        
        <div class="footer">
            Military Real Estate Northern Virginia<br>
            Serving Fort Belvoir • Pentagon • Quantico • All of NoVA<br>
            MRP Certified Military Relocation Professional
        </div>
    </body>
    </html>
    `;

    const autoReplyText = `
🎖️ Thank you for contacting Military Real Estate Northern Virginia!

Dear ${formData.fullName},

Thank you for your trust in our military-focused real estate services. As an MRP Certified professional, I understand your unique needs.

Your Request: ${formData.serviceType}
${formData.timeline ? `Timeline: ${formData.timeline}` : ''}
${formData.base ? `Base: ${formData.base}` : ''}

What happens next:
• I will personally contact you promptly during business hours
• We'll discuss your specific military real estate needs  
• You'll receive a customized action plan
• Free Military PCS Real Estate Guide included

Need to reach me sooner?
Phone: (703) 477-2606
Email: parjinder@pbrealtynova.com
Available 7 days a week for military schedules

Your service deserves our best service.

Respectfully,
Your Military Real Estate Specialist
MRP Certified | Veteran-Owned Business
    `;

    const autoReplyMsg = {
      to: formData.email,
      from: {
        email: fromEmail,
        name: 'Military Real Estate NoVA'
      },
      subject: '🎖️ Thank you for contacting us - We\'ll be in touch soon',
      text: autoReplyText,
      html: autoReplyHtml,
      categories: ['auto-reply', 'customer-communication'],
      customArgs: {
        'type': 'auto-reply',
        'original_service': formData.serviceType
      }
    };

    await sgMail.default.send(autoReplyMsg);
    console.log('Auto-reply sent successfully to:', formData.email);

  } catch (error) {
    console.error('Auto-reply sending error:', error);
  }
}

function logEmailToConsole(formData: ContactFormData) {
  const emailContent = `
🎖️ NEW MILITARY REAL ESTATE LEAD 🎖️

👤 Name: ${formData.fullName}
📧 Email: ${formData.email}  
📞 Phone: ${formData.phone}
🎖️ Military Branch: ${formData.branch || 'Not specified'}
🏛️ Base: ${formData.base || 'Not specified'}
⏰ Timeline: ${formData.timeline || 'Not specified'}
🏠 Service Type: ${formData.serviceType}
💬 Message: ${formData.message || 'No additional message'}

📅 Submitted: ${new Date().toLocaleString()}
  `;

  console.log('EMAIL NOTIFICATION (SendGrid not configured):', emailContent);
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