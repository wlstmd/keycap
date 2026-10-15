import { useState } from "react";
import { redeemCode } from "../data/premium.js";
import { photoToKeycapArt } from "../utils/photoKeycap.js";

export default function PremiumUnlock({
  unlocked,
  onUnlock,
  photoCount,
  onAddPhoto,
}) {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoLoading, setPhotoLoading] = useState(false);

  async function submit() {
    setLoading(true);
    const result = await redeemCode(code, name);
    setLoading(false);
    setStatus(result);
    if (result.ok) onUnlock();
  }

  async function handlePhotoFile(e) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    setPhotoLoading(true);
    try {
      const art = await photoToKeycapArt(file);
      onAddPhoto(art);
    } finally {
      setPhotoLoading(false);
    }
  }

  if (unlocked) {
    return (
      <div className="panel-row">
        <span className="panel-label">서포터 혜택</span>
        <p className="count-status">
          📸 내 반려동물, 내 얼굴, 좋아하는 캐릭터 - 사진으로 나만의 키캡을 몇
          개든 만들어보세요
          {photoCount > 0 &&
            ` (현재 ${photoCount}개, 캐릭터 목록에서 고를 수 있어요)`}
        </p>

        <div className="attack-save">
          <label className="attack-start" style={{ cursor: "pointer" }}>
            {photoLoading ? "변환 중..." : "사진 추가"}
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoFile}
              disabled={photoLoading}
              style={{ display: "none" }}
            />
          </label>
        </div>
      </div>
    );
  }

  return (
    <div className="panel-row">
      <span className="panel-label">서포터 전용 콘텐츠</span>
      <p className="count-status">
        펀딩 리워드로 받은 코드를 입력하면 내 사진으로 만든 캐릭터 키캡을
        영구적으로 사용할 수 있어요
      </p>

      <div className="attack-save">
        <input
          className="attack-name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="닉네임 (창립 후원자 명단에 표시)"
          maxLength={12}
        />
      </div>

      <div className="attack-save">
        <input
          className="attack-name-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="서포터 코드"
        />
        <button className="attack-start" onClick={submit} disabled={loading}>
          {loading ? "확인 중..." : "잠금 해제"}
        </button>
      </div>

      {status && !status.ok && <p className="unlock-error">{status.message}</p>}
    </div>
  );
}
