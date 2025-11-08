import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://htrkupnuxhvhsbczfaod.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0cmt1cG51eGh2aHNiY3pmYW9kIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NjI3MjQ3MiwiZXhwIjoyMDcxODQ4NDcyfQ.E8j_MfTOjbHLw9wEy11vdqwVtfC4-G5n-XASqR1n5sQ";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
