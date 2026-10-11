import { useEffect, useRef, useState } from 'react';
import Keycap from './Keycap.jsx';
import Keychain from './Keychain.jsx';
import Leaderboard from './Leaderboard.jsx';
import { playSwitch } from '../audio/keyboardSound.js';
import { addScore } from '../data/leaderboard.js';

const DURATION = 10;

export default function TimeAttack({ icon, switchKey }) {
  const [state, setState] = useState('idle'); // idle | running | done
  const [score, setScore] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(DURATION);
  const [name, setName] = useState('');
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => () => clearInterval(timerRef.current), []);

  function start() {
    clearInterval(timerRef.current);
    setScore(0);
    setSecondsLeft(DURATION);
    setSaved(false);
    setState('running');

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

  function press() {
    playSwitch(switchKey);
    if (state === 'running') setScore((n) => n + 1);
  }

  async function save() {
    setSaving(true);
    await addScore(name, score);
    setSaving(false);
    setSaved(true);
    setRefreshKey((k) => k + 1);
  }

  return (
    <>
      <section className="stage" aria-label="타임어택 키캡">
        <div className="keycap-assembly">
          <Keychain />
          <Keycap icon={icon} onPress={press} />
        </div>
      </section>

      <section className="panel">
        <div className="attack-row">
          <div>
            <p className="panel-label">
              {state === 'running' ? '남은 시간' : `${DURATION}초 타임어택`}
            </p>
            <p className="count-status">
              {state === 'running'
                ? `${secondsLeft}초`
                : state === 'done'
                ? `${score}타 기록!`
                : '시작하면 10초간 최대한 눌러보세요'}
            </p>
          </div>

          {state === 'running' ? (
            <span className="count-num">{score}</span>
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
