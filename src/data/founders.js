import { SUPABASE_READY, supabaseFetch } from './supabase.js';

export async function getFounders() {
  if (!SUPABASE_READY) return [];

  try {
    return await supabaseFetch('redeem_codes?select=name,redeemed_at&order=redeemed_at.asc&limit=50');
  } catch {
    return [];
  }
}
