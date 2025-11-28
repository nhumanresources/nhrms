import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.86.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface LeadRequest {
  name: string;
  email: string;
  phone: string;
  company_name: string;
  lead_type: 'consultation' | 'whitepaper';
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const leadData: LeadRequest = await req.json();
    console.log('Received lead submission:', { ...leadData, phone: '[REDACTED]' });

    // Validate required fields
    if (!leadData.name || !leadData.email || !leadData.phone || !leadData.company_name) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

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

    // Send notification email to marketing.ops@nhrms.com
    // (You can add email notification here using Resend or similar service)

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
      JSON.stringify({ error: String(error) }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});