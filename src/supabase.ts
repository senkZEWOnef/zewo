// src/supabase.ts
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://bkxzmwjkdgrnvsrfkhsw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJreHptd2prZGdybnZzcmZraHN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY0MDE2MzQsImV4cCI6MjA2MTk3NzYzNH0.SZ5JzmvncXAzNm6QE9NEkG--kYtmIbBRWo3lcztFaWY"
);
