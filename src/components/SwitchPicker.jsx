import { SWITCH_OPTIONS } from '../data/switches.js';

export default function SwitchPicker({ value, onChange, unlocked }) {
  return (
    <div className="panel-row">
      <span className="panel-label">축 선택</span>

      <div className="switch-chips" role="group" aria-label="스위치 축 선택">
        {SWITCH_OPTIONS.map((option) => {
          const active = option.key === value;
          const locked = option.premium && !unlocked;

          return (
            <button
              key={option.key}
              className={active ? 'chip active' : locked ? 'chip locked' : 'chip'}
              aria-pressed={active}
              disabled={locked}
              onClick={() => onChange(option.key)}
            >
              <span className="chip-dot" style={{ background: option.color }} />
              {locked ? `🔒 ${option.name}` : option.name}
              <span className="chip-hint">{option.hint}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
