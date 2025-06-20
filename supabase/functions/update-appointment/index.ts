// update-appointment/index.ts
// @ts-expect-error: Allow remote import in Deno edge functions
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
// @ts-expect-error: Allow remote import for Supabase JS client in Deno
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async (req: Request) => {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );

  const { id, status } = await req.json();

  if (!id || !status) {
    return new Response(JSON.stringify({ error: "ID and status required." }), {
      status: 400,
      headers: corsHeaders,
    });
  }

  const { error } = await supabase
    .from("appointments")
    .update({ status })
    .eq("id", id);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: corsHeaders,
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: corsHeaders,
  });
});

const corsHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
};
