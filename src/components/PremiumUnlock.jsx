import { useState } from 'react';
import { redeemCode } from '../data/premium.js';

export default function PremiumUnlock({ unlocked, onUnlock }) {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true);
    const result = await redeemCode(code);
    setLoading(false);
    setStatus(result);
    if (result.ok) onUnlock();
  }

  if (unlocked) {
    return (
      <div className="panel-row">
        <span className="panel-label">서포터 혜택</span>
        <p className="count-status">✨ 프리미엄 캐릭터·스위치 해제됨</p>
      </div>
    );
  }

  return (
    <div className="panel-row">
      <span className="panel-label">서포터 전용 콘텐츠</span>
      <p className="count-status">펀딩 리워드로 받은 코드를 입력하면 프리미엄 캐릭터·스위치가 영구 해제돼요</p>

      <div className="attack-save">
        <input
          className="attack-name-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="서포터 코드"
        />
        <button className="attack-start" onClick={submit} disabled={loading}>
          {loading ? '확인 중...' : '잠금 해제'}
        </button>
      </div>

      {status && !status.ok && <p className="unlock-error">{status.message}</p>}
    </div>
  );
}
