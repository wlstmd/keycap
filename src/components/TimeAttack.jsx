import { useEffect, useRef, useState } from 'react';
import Keycap from './Keycap.jsx';
import Keychain from './Keychain.jsx';
import Leaderboard from './Leaderboard.jsx';
import { playSwitch } from '../audio/keyboardSound.js';
import { addScore } from '../data/leaderboard.js';

const DURATION = 10;
const COUNTDOWN_FROM = 3;
const URGENT_AT = 3;

export default function TimeAttack({ icon, switchKey, photo, premiumUnlocked }) {
  const [state, setState] = useState('idle'); // idle | countdown | running | done
  const [countdown, setCountdown] = useState(COUNTDOWN_FROM);
  const [score, setScore] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(DURATION);
  const [name, setName] = useState('');
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const timerRef = useRef(null);
  const countdownRef = useRef(null);

  useEffect(
    () => () => {
      clearInterval(timerRef.current);
      clearInterval(countdownRef.current);
    },
    []
  );

  function beginRun() {
    setState('running');
    setScore(0);
    setSecondsLeft(DURATION);
    setSaved(false);

    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(timerRef.current);
          setState('done');
          return 0;
        }

        return s - 1;
      });
    }, 1000);
  }

  function start() {
    clearInterval(timerRef.current);
    clearInterval(countdownRef.current);

    let n = COUNTDOWN_FROM;
    setCountdown(n);
    setState('countdown');

    countdownRef.current = setInterval(() => {
      n -= 1;
      if (n <= 0) {
        clearInterval(countdownRef.current);
        beginRun();
      } else {
        setCountdown(n);
      }
    }, 600);
  }

  function press() {
    playSwitch(switchKey);
    if (state === 'running') setScore((n) => n + 1);
  }

  async function save() {
    setSaving(true);
    const finalName = premiumUnlocked ? `👑 ${name.trim() || '익명'}` : name;
    await addScore(finalName, score);
    setSaving(false);
    setSaved(true);
    setRefreshKey((k) => k + 1);
  }

  const urgent = state === 'running' && secondsLeft <= URGENT_AT;

  return (
    <>
      <section className={urgent ? 'stage urgent' : 'stage'} aria-label="타임어택 키캡">
        <div className={urgent ? 'keycap-assembly urgent' : 'keycap-assembly'}>
          <Keychain />
          <Keycap icon={icon} onPress={press} photo={photo} />
        </div>

        {state === 'countdown' && (
          <div className="countdown-overlay" key={countdown}>
            {countdown}
          </div>
        )}
      </section>

      <section className="panel">
        <div className="attack-row">
          <div>
            <p className="panel-label">
              {state === 'running'
                ? '남은 시간'
                : state === 'countdown'
                ? '준비!'
                : `${DURATION}초 타임어택`}
            </p>
            <p className={urgent ? 'count-status urgent' : 'count-status'}>
              {state === 'running'
                ? `${secondsLeft}초`
                : state === 'countdown'
                ? '곧 시작합니다...'
                : state === 'done'
                ? `${score}타 기록!`
                : '시작하면 10초간 최대한 눌러보세요'}
            </p>
          </div>

          {state === 'running' ? (
            <span className="count-num">{score}</span>
          ) : state === 'countdown' ? (
            <button className="attack-start" disabled>
              {countdown}
            </button>
          ) : (
            <button className="attack-start" onClick={start}>
              {state === 'done' ? '다시 하기' : '시작'}
            </button>
          )}
        </div>

        {state === 'done' && !saved && (
          <div className="attack-save">
            <input
              className="attack-name-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="닉네임"
              maxLength={12}
            />
            <button className="attack-start" onClick={save} disabled={saving}>
              {saving ? '저장 중...' : '랭킹 등록'}
            </button>
          </div>
        )}

        <div className="panel-divider" />
        <Leaderboard refreshKey={refreshKey} />
      </section>
    </>
  );
}
