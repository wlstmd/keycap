const STATUS_MAP = [
  [500, '키캡 신 🏆'],
  [300, '레전드 💀'],
  [200, '탁 ◎'],
  [100, '리듬 타는 중 〜'],
  [50, '워밍업 중...'],
  [0, 'keep going ✦'],
];

function getStatus(n) {
  for (const [target, message] of STATUS_MAP) {
    if (n >= target) return message;
  }

  return 'keep going ✦';
}

export default function PressCounter({ count }) {
  return (
    <div className="count-row">
      <div>
        <p className="panel-label">Today's Press</p>
        <p className="count-status">{getStatus(count)}</p>
      </div>

      <div className="count-display">
        {/* key가 바뀌면 다시 마운트되어 bump 애니메이션이 매번 재생됨 */}
        <span key={count} className={count > 0 ? 'count-num bump' : 'count-num'}>
          {count}
        </span>
      </div>
    </div>
  );
}
