// Apne Supabase project ka URL aur anon public key yahan likhein
// (Dashboard -> Project Settings -> API)
const PROJECTURL = `ADD YOUR URL    `;
const ANON_PUBLIC_KEY = `ADD YOUR ANON PUBLIC KEY`
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabase = createClient(PROJECTURL, ANON_PUBLIC_KEY);
export default supabase;
