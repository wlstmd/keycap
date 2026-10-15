import { SUPABASE_READY, supabaseFetch } from './supabase.js';

const KEY = 'keycap-premium-unlocked';

export function isPremiumUnlocked() {
  return localStorage.getItem(KEY) === '1';
}

// 코드 1개 = 펀딩 리워드로 전달되는 1회용 잠금해제 코드.
// redeem_codes 테이블은 RLS로 완전히 잠겨있고, security definer 함수(redeem_code)만
// 공개돼 있어 원자적인 UPDATE ... WHERE redeemed_at is null 로 중복 사용을 막는다.
export async function redeemCode(code, name) {
  const trimmed = code.trim();
  if (!trimmed) return { ok: false, message: '코드를 입력해주세요' };
  if (!SUPABASE_READY) return { ok: false, message: '잠금 해제 서버가 아직 연결되지 않았어요' };

  try {
    const claimed = await supabaseFetch('rpc/redeem_code', {
      method: 'POST',
      body: JSON.stringify({ p_code: trimmed, p_name: (name || '').trim().slice(0, 12) }),
    });

    if (!claimed) {
      return { ok: false, message: '유효하지 않거나 이미 사용된 코드예요' };
    }

    localStorage.setItem(KEY, '1');
    return { ok: true, message: '프리미엄 캐릭터·스위치가 해제됐어요!' };
  } catch {
    return { ok: false, message: '해제에 실패했어요, 다시 시도해주세요' };
  }
}
