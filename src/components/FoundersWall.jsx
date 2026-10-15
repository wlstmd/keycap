import { useEffect, useState } from 'react';
import { getFounders } from '../data/founders.js';
import { SUPABASE_READY } from '../data/supabase.js';

export default function FoundersWall({ refreshKey }) {
  const [founders, setFounders] = useState(null);

  useEffect(() => {
    let alive = true;
    getFounders().then((data) => {
      if (alive) setFounders(data);
    });
    return () => {
      alive = false;
    };
  }, [refreshKey]);

  if (!SUPABASE_READY || founders === null || founders.length === 0) return null;

  return (
    <div className="panel-row">
      <span className="panel-label">창립 후원자 ({founders.length}명)</span>

      <ol className="rank-list">
        {founders.map((f, i) => (
          <li key={f.redeemed_at} className="rank-item">
            <span className="rank-badge">#{i + 1}</span>
            <span className="rank-name">{f.name}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
