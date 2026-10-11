import { SUPABASE_READY, supabaseFetch } from './supabase.js';

export async function getScores() {
  if (!SUPABASE_READY) return [];

  try {
    return await supabaseFetch('scores?select=name,score,created_at&order=score.desc&limit=10');
  } catch {
    return [];
  }
}

export async function addScore(name, score) {
  if (!SUPABASE_READY) return [];

  const entry = { name: name.trim().slice(0, 12) || '익명', score };

  try {
    await supabaseFetch('scores', {
      method: 'POST',
      headers: { Prefer: 'return=minimal' },
      body: JSON.stringify(entry),
    });
  } catch {
    // ponytail: best-effort save, no retry queue
  }

  return getScores();
}
