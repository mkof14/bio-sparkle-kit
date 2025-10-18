import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://swbexijaawnfnxigzuke.supabase.co";
const SUPABASE_KEY = "sb_publishable_VoovndJcIPwtbfF7ZkI8kg_nUstrsSh";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: true, autoRefreshToken: true },
});
