import { ICONS } from '../data/icons.jsx';

export default function IconPicker({ value, onChange, photos, onRemovePhoto }) {
  return (
    <div className="panel-row">
      <span className="panel-label">캐릭터</span>

      <div className="icon-grid" role="group" aria-label="캐릭터 선택">
        {ICONS.map((icon) => (
          <button
            key={icon.key}
            className={icon.key === value ? 'icon-opt active' : 'icon-opt'}
            aria-pressed={icon.key === value}
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
        ))}

        {photos.map((p) => {
          const key = `photo:${p.id}`;
          const active = value === key;

          return (
            <div key={p.id} className="icon-opt-wrap">
              <button
                className={active ? 'icon-opt icon-opt-photo active' : 'icon-opt icon-opt-photo'}
                aria-pressed={active}
                aria-label="내 사진 캐릭터"
                onClick={() => onChange(key)}
              >
                <img src={p.dataUrl} alt="" />
              </button>
              <button
                type="button"
                className="icon-opt-remove"
                aria-label="사진 캐릭터 삭제"
                onClick={() => onRemovePhoto(p.id)}
              >
                ×
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
