import { useEffect, useState } from 'react';
import { getScores } from '../data/leaderboard.js';
import { SUPABASE_READY } from '../data/supabase.js';

const MEDALS = ['🥇', '🥈', '🥉'];

export default function Leaderboard({ refreshKey }) {
  const [scores, setScores] = useState(null);

  useEffect(() => {
    let alive = true;
    getScores().then((data) => {
      if (alive) setScores(data);
    });
    return () => {
      alive = false;
    };
  }, [refreshKey]);

  return (
    <div className="panel-row">
      <span className="panel-label">글로벌 타임어택 랭킹</span>

      {!SUPABASE_READY ? (
        <p className="count-status">랭킹 서버가 아직 연결되지 않았어요</p>
      ) : scores === null ? (
        <p className="count-status">불러오는 중...</p>
      ) : scores.length === 0 ? (
        <p className="count-status">아직 기록이 없어요</p>
      ) : (
        <ol className="rank-list">
          {scores.map((entry, i) => (
            <li key={`${entry.created_at}-${i}`} className="rank-item">
              <span className="rank-badge">{MEDALS[i] || i + 1}</span>
              <span className="rank-name">{entry.name}</span>
              <span className="rank-score">{entry.score}타</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
