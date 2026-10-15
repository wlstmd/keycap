import { useEffect, useRef, useState } from 'react';

const PRESS_DURATION = 135;
const RIPPLE_DURATION = 420;
const RIPPLE_SIZE = 100;

export default function Keycap({ icon, onPress, photo }) {
  const [pressed, setPressed] = useState(false);
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);
  const pressTimer = useRef(null);
  const rippleId = useRef(0);

  useEffect(() => () => clearTimeout(pressTimer.current), []);

  function setPressedSmooth() {
    clearTimeout(pressTimer.current);
    setPressed(true);

    pressTimer.current = window.setTimeout(() => {
      setPressed(false);
    }, PRESS_DURATION);
  }

  function spawnRipple(e) {
    const rect = buttonRef.current.getBoundingClientRect();

    // 키보드 입력엔 좌표가 없으므로 중앙에서 퍼지게
    const clientX = e.clientX || rect.left + rect.width / 2;
    const clientY = e.clientY || rect.top + rect.height / 2;

    const id = ++rippleId.current;
    const ripple = {
      id,
      x: clientX - rect.left - RIPPLE_SIZE / 2,
      y: clientY - rect.top - RIPPLE_SIZE / 2,
    };

    setRipples((prev) => [...prev, ripple]);

    window.setTimeout(() => {
      setRipples((prev) => prev.filter((item) => item.id !== id));
    }, RIPPLE_DURATION);
  }

  function press(e) {
    setPressedSmooth();
    spawnRipple(e);
    onPress();
  }

  function handlePointerDown(e) {
    e.preventDefault();
    press(e);
  }

  function handleKeyDown(e) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      press(e);
    }
  }

  return (
    <button
      ref={buttonRef}
      className={pressed ? 'keycap pressed' : 'keycap'}
      aria-label="키캡 누르기"
      onPointerDown={handlePointerDown}
      onKeyDown={handleKeyDown}
    >
      <div className="cap-top">
        <div className="cap-face">
          <div className="cap-inner-ring" />

          <div className="ripple-layer">
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                className="ripple"
                style={{
                  width: RIPPLE_SIZE,
                  height: RIPPLE_SIZE,
                  left: ripple.x,
                  top: ripple.y,
                }}
              />
            ))}
          </div>

          <div className="cap-art">
            {photo ? (
              <img className="cap-photo" src={photo} alt="" />
            ) : (
              <>
                <span className="cap-label">{icon.label}</span>
                <span className="cap-icon">
                  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g
                      stroke="#1a1714"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    >
                      {icon.art}
                    </g>
                  </svg>
                </span>
              </>
            )}
          </div>
        </div>

        <div className="cap-side-right" />
        <div className="cap-side-bottom" />
        <div className="cap-corner" />
      </div>
    </button>
  );
}
