import { ICONS } from '../data/icons.jsx';

export default function IconPicker({ value, onChange }) {
  return (
    <div className="panel-row">
      <span className="panel-label">캐릭터</span>

      <div className="icon-grid" role="group" aria-label="캐릭터 선택">
        {ICONS.map((icon) => {
          const active = icon.key === value;

          return (
            <button
              key={icon.key}
              className={active ? 'icon-opt active' : 'icon-opt'}
              aria-pressed={active}
              aria-label={icon.label}
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
            </button>
          );
        })}
      </div>
    </div>
  );
}
