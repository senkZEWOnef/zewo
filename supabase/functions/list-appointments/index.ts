// list-appointments/index.ts
// @ts-expect-error: Allow remote import in Deno edge functions
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
// @ts-expect-error: Allow remote import for Supabase JS client in Deno
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async () => {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  const { data, error } = await supabase
    .from("appointments")
    .select("*")
    .order("date", { ascending: true });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: corsHeaders,
    });
  }

  return new Response(JSON.stringify(data), {
    headers: corsHeaders,
  });
});

const corsHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
};
