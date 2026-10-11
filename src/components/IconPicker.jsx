import { ICONS } from '../data/icons.jsx';

export default function IconPicker({ value, onChange, unlocked }) {
  return (
    <div className="panel-row">
      <span className="panel-label">캐릭터</span>

      <div className="icon-grid" role="group" aria-label="캐릭터 선택">
        {ICONS.map((icon) => {
          const active = icon.key === value;
          const locked = icon.premium && !unlocked;

          return (
            <button
              key={icon.key}
              className={active ? 'icon-opt active' : locked ? 'icon-opt locked' : 'icon-opt'}
              aria-pressed={active}
              aria-label={locked ? `${icon.label} (서포터 전용)` : icon.label}
              disabled={locked}
              onClick={() => onChange(icon.key)}
            >
              <svg viewBox="0 0 36 36" fill="none">
                <g
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {icon.thumb}
                </g>
              </svg>
              {locked && <span className="lock-badge">🔒</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
