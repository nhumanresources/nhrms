import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.86.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Input validation functions
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

function isValidPhone(phone: string): boolean {
  // Allow 5-20 characters, digits, spaces, dashes, parentheses, and plus sign
  const phoneRegex = /^[\d\s\-\(\)\+]{5,20}$/;
  return phoneRegex.test(phone);
}

function isValidLeadType(type: string): type is 'consultation' | 'whitepaper' {
  return type === 'consultation' || type === 'whitepaper';
}

function sanitizeString(str: string, maxLength: number): string {
  return str.trim().slice(0, maxLength);
}

interface LeadRequest {
  name: string;
  email: string;
  phone: string;
  company_name: string;
  lead_type: 'consultation' | 'whitepaper';
}

interface ValidationResult {
  valid: boolean;
  errors: string[];
  data?: LeadRequest;
}

function validateLeadData(data: unknown): ValidationResult {
  const errors: string[] = [];
  
  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['Invalid request body'] };
  }
  
  const raw = data as Record<string, unknown>;
  
  // Validate name
  if (!raw.name || typeof raw.name !== 'string' || raw.name.trim().length === 0) {
    errors.push('Name is required');
  } else if (raw.name.length > 100) {
    errors.push('Name must be 100 characters or less');
  }
  
  // Validate email
  if (!raw.email || typeof raw.email !== 'string') {
    errors.push('Email is required');
  } else if (!isValidEmail(raw.email.trim())) {
    errors.push('Invalid email format');
  }
  
  // Validate phone
  if (!raw.phone || typeof raw.phone !== 'string') {
    errors.push('Phone is required');
  } else if (!isValidPhone(raw.phone.trim())) {
    errors.push('Invalid phone format (5-20 characters, digits and common separators only)');
  }
  
  // Validate company_name
  if (!raw.company_name || typeof raw.company_name !== 'string' || raw.company_name.trim().length === 0) {
    errors.push('Company name is required');
  } else if (raw.company_name.length > 200) {
    errors.push('Company name must be 200 characters or less');
  }
  
  // Validate lead_type
  if (!raw.lead_type || typeof raw.lead_type !== 'string') {
    errors.push('Lead type is required');
  } else if (!isValidLeadType(raw.lead_type)) {
    errors.push('Lead type must be "consultation" or "whitepaper"');
  }
  
  if (errors.length > 0) {
    return { valid: false, errors };
  }
  
  // Return sanitized data
  return {
    valid: true,
    errors: [],
    data: {
      name: sanitizeString(raw.name as string, 100),
      email: (raw.email as string).trim().toLowerCase(),
      phone: sanitizeString(raw.phone as string, 20),
      company_name: sanitizeString(raw.company_name as string, 200),
      lead_type: raw.lead_type as 'consultation' | 'whitepaper',
    }
  };
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawData = await req.json();
    
    // Validate and sanitize input
    const validation = validateLeadData(rawData);
    
    if (!validation.valid || !validation.data) {
      console.log('Validation failed:', validation.errors);
      return new Response(
        JSON.stringify({ error: 'Validation failed', details: validation.errors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    const leadData = validation.data;
    console.log('Received validated lead submission:', { ...leadData, phone: '[REDACTED]' });

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert lead into database
    const { data: dbLead, error: dbError } = await supabase
      .from('labour_code_leads')
      .insert({
        name: leadData.name,
        email: leadData.email,
        phone: leadData.phone,
        company_name: leadData.company_name,
        lead_type: leadData.lead_type,
        white_paper_downloaded: leadData.lead_type === 'whitepaper',
      })
      .select()
      .single();

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Failed to save lead' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Lead saved to database:', dbLead.id);

    // Send to Zoho CRM in background
    const zohoApiKey = Deno.env.get('ZOHO_CRM_API_KEY');
    const zohoEmail = Deno.env.get('ZOHO_CRM_ACCOUNT_EMAIL');

    if (zohoApiKey && zohoEmail) {
      // Background task to sync with Zoho
      EdgeRuntime.waitUntil(
        (async () => {
          try {
            console.log('Syncing lead to Zoho CRM...');
            
            // Prepare Zoho CRM payload
            const zohoPayload = {
              data: [{
                Company: leadData.company_name,
                Last_Name: leadData.name,
                Email: leadData.email,
                Phone: leadData.phone,
                Lead_Source: 'Website - Labour Codes Landing Page',
                Description: `Lead Type: ${leadData.lead_type}\nInterest: India New Labour Codes Implementation\nSubmitted from: nHRMS Labour Codes Landing Page`,
                Lead_Status: leadData.lead_type === 'whitepaper' ? 'White Paper Downloaded' : 'Consultation Requested',
              }],
            };

            const zohoResponse = await fetch('https://www.zohoapis.in/crm/v2/Leads', {
              method: 'POST',
              headers: {
                'Authorization': `Zoho-oauthtoken ${zohoApiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(zohoPayload),
            });

            const zohoResult = await zohoResponse.json();
            console.log('Zoho API response:', zohoResult);

            if (zohoResult.data && zohoResult.data[0]?.status === 'success') {
              // Update lead as synced
              await supabase
                .from('labour_code_leads')
                .update({ synced_to_zoho: true })
                .eq('id', dbLead.id);
              console.log('Lead synced to Zoho successfully');
            } else {
              // Log error
              const errorMsg = zohoResult.data?.[0]?.message || 'Unknown Zoho error';
              console.error('Zoho sync failed:', errorMsg);
              await supabase
                .from('labour_code_leads')
                .update({ zoho_sync_error: errorMsg })
                .eq('id', dbLead.id);
            }
          } catch (zohoError) {
            console.error('Error syncing to Zoho:', zohoError);
            await supabase
              .from('labour_code_leads')
              .update({ zoho_sync_error: String(zohoError) })
              .eq('id', dbLead.id);
          }
        })()
      );
    } else {
      console.warn('Zoho credentials not configured, skipping CRM sync');
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Lead submitted successfully',
        lead_id: dbLead.id 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in submit-labour-code-lead function:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
