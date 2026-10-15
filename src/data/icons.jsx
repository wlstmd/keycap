const INK = '#1a1714';

// thumb: 선택 패널용 36x36 아이콘 (currentColor), art: 키캡용 80x80 아이콘
export const ICONS = [
  {
    key: 'cat',
    label: '어쩌라고',
    thumb: (
      <>
        <ellipse cx="18" cy="17" rx="8" ry="9" />
        <path d="M10 11 7 7M26 11l3-4" />
        <circle cx="15" cy="16" r="1" fill="currentColor" />
        <circle cx="21" cy="16" r="1" fill="currentColor" />
        <path d="M15 20q3 2 6 0" />
        <path d="M13 26v4M23 26v4" />
        <path d="M16 28h4" />
      </>
    ),
    art: (
      <>
        <ellipse cx="40" cy="42" rx="20" ry="22" />
        <path d="M20 28 13 18M60 28l7-10" />
        <circle cx="33" cy="40" r="2.5" fill={INK} />
        <circle cx="47" cy="40" r="2.5" fill={INK} />
        <path d="M36 50q4 3 8 0" />
        <line x1="22" y1="42" x2="14" y2="40" />
        <line x1="22" y1="46" x2="13" y2="46" />
        <line x1="58" y1="42" x2="66" y2="40" />
        <line x1="58" y1="46" x2="67" y2="46" />
        <path d="M34 62v6M46 62v6" />
        <path d="M37 66h6" />
      </>
    ),
  },
  {
    key: 'ghost',
    label: '무섭지',
    thumb: (
      <>
        <path d="M10 28V16a8 8 0 1 1 16 0v12l-3-2-2.5 2L18 26l-2.5 2L13 26l-3 2z" />
        <circle cx="15" cy="17" r="1.2" fill="currentColor" />
        <circle cx="21" cy="17" r="1.2" fill="currentColor" />
      </>
    ),
    art: (
      <>
        <path d="M18 65V36a22 22 0 1 1 44 0v29l-7-5-7 5-6-4-6 4-7-5-7 5z" />
        <circle cx="33" cy="38" r="3" fill={INK} />
        <circle cx="47" cy="38" r="3" fill={INK} />
        <path d="M34 48q6 4 12 0" />
      </>
    ),
  },
  {
    key: 'frog',
    label: '개굴',
    thumb: (
      <>
        <ellipse cx="18" cy="20" rx="9" ry="7" />
        <circle cx="12" cy="13" r="3" />
        <circle cx="24" cy="13" r="3" />
        <circle cx="13" cy="13" r="1" fill="currentColor" />
        <circle cx="25" cy="13" r="1" fill="currentColor" />
        <path d="M14 22q4 3 8 0" />
        <path d="M10 26l-2 3M26 26l2 3" />
      </>
    ),
    art: (
      <>
        <ellipse cx="40" cy="50" rx="22" ry="18" />
        <circle cx="26" cy="30" r="8" />
        <circle cx="54" cy="30" r="8" />
        <circle cx="28" cy="30" r="2.5" fill={INK} />
        <circle cx="56" cy="30" r="2.5" fill={INK} />
        <path d="M32 54q8 7 16 0" />
        <path d="M20 65l-5 8M60 65l5 8" />
        <path d="M15 70l8-2M65 70l-8-2" />
      </>
    ),
  },
  {
    key: 'bear',
    label: '곰돌이',
    thumb: (
      <>
        <ellipse cx="18" cy="20" rx="9" ry="8" />
        <circle cx="11" cy="13" r="3" />
        <circle cx="25" cy="13" r="3" />
        <circle cx="15" cy="19" r="1" fill="currentColor" />
        <circle cx="21" cy="19" r="1" fill="currentColor" />
        <ellipse cx="18" cy="22" rx="3" ry="2" />
        <path d="M17 22q1 1.5 2 0" />
      </>
    ),
    art: (
      <>
        <ellipse cx="40" cy="50" rx="22" ry="20" />
        <circle cx="22" cy="30" r="8" />
        <circle cx="58" cy="30" r="8" />
        <circle cx="34" cy="47" r="2.5" fill={INK} />
        <circle cx="46" cy="47" r="2.5" fill={INK} />
        <ellipse cx="40" cy="55" rx="7" ry="5" />
        <path d="M37 55q3 3 6 0" />
      </>
    ),
  },
  {
    key: 'star',
    label: '★',
    thumb: (
      <path d="M18 7l2.9 6 6.6.9-4.8 4.6 1.2 6.5L18 22l-5.9 3 1.2-6.5L8.5 14l6.6-.9L18 7z" />
    ),
    art: (
      <>
        <path d="M40 12l7 14 16 2.3-11.5 11.2 2.7 15.8L40 48l-14.2 7.3 2.7-15.8L17 28.3l16-2.3L40 12z" />
        <circle cx="40" cy="62" r="2" fill={INK} />
        <path d="M36 66h8" />
      </>
    ),
  },
  {
    key: 'heart',
    label: '♡',
    thumb: (
      <path d="M18 28S7 21 7 14a6 6 0 0 1 11-3.3A6 6 0 0 1 29 14c0 7-11 14-11 14z" />
    ),
    art: (
      <>
        <path d="M40 66S14 52 14 34a13 13 0 0 1 26-3.2A13 13 0 0 1 66 34c0 18-26 32-26 32z" />
        <path d="M32 25q-3-4-8-3" />
      </>
    ),
  },
  {
    key: 'bunny',
    label: '살려줘',
    thumb: (
      <>
        <ellipse cx="18" cy="22" rx="8" ry="7" />
        <path d="M13 15 11 6M23 15l2-9" />
        <circle cx="15" cy="21" r="1" fill="currentColor" />
        <circle cx="21" cy="21" r="1" fill="currentColor" />
        <path d="M16 24q2 1.5 4 0" />
        <ellipse cx="18" cy="23" rx="2" ry="1.2" />
      </>
    ),
    art: (
      <>
        <ellipse cx="40" cy="52" rx="21" ry="18" />
        <path d="M29 36 23 11M51 36l6-25" />
        <circle cx="34" cy="50" r="2.5" fill={INK} />
        <circle cx="46" cy="50" r="2.5" fill={INK} />
        <ellipse cx="40" cy="56" rx="5" ry="3" />
        <path d="M35 62q5 4 10 0" />
      </>
    ),
  },
  {
    key: 'chick',
    label: '삐약',
    thumb: (
      <>
        <ellipse cx="18" cy="22" rx="9" ry="8" />
        <circle cx="18" cy="12" r="5" />
        <path d="M15 12l3 2 3-2" />
        <circle cx="16" cy="11" r="0.8" fill="currentColor" />
        <circle cx="20" cy="11" r="0.8" fill="currentColor" />
        <path d="M9 23l-3 3M27 23l3 3" />
      </>
    ),
    art: (
      <>
        <ellipse cx="40" cy="53" rx="22" ry="18" />
        <circle cx="40" cy="29" r="12" />
        <path d="M33 29l7 5 7-5" />
        <circle cx="35" cy="26" r="2" fill={INK} />
        <circle cx="45" cy="26" r="2" fill={INK} />
        <path d="M20 55l-8 7M60 55l8 7" />
      </>
    ),
  },
  {
    key: 'dino',
    label: '으쌰',
    thumb: (
      <>
        <ellipse cx="17" cy="21" rx="8" ry="7" />
        <path d="M20 14l4-6 2 4-1 3" />
        <circle cx="15" cy="20" r="1" fill="currentColor" />
        <circle cx="20" cy="20" r="1" fill="currentColor" />
        <path d="M15 24q3 2 6 0" />
        <path d="M11 26l-2 4M23 26l2 4" />
      </>
    ),
    art: (
      <>
        <ellipse cx="38" cy="51" rx="22" ry="18" />
        <path d="M48 35l10-18 6 10-3 9" />
        <circle cx="33" cy="49" r="2.5" fill={INK} />
        <circle cx="47" cy="49" r="2.5" fill={INK} />
        <path d="M34 58q6 4 12 0" />
        <path d="M25 66l-5 9M55 66l5 9" />
      </>
    ),
  },
  {
    key: 'cloud',
    label: '뭉게',
    thumb: (
      <>
        <path d="M8 24a5 5 0 0 1 0-10 5.5 5.5 0 0 1 10.5-2A5 5 0 0 1 28 17a5 5 0 0 1-1 9.9" />
        <circle cx="14" cy="22" r="1" fill="currentColor" />
        <circle cx="20" cy="22" r="1" fill="currentColor" />
        <path d="M14 25q3 2 6 0" />
        <path d="M13 28v3M21 28v3" />
      </>
    ),
    art: (
      <>
        <path d="M18 55a13 13 0 0 1 2-25 16 16 0 0 1 30-5 14 14 0 0 1 8 27" />
        <circle cx="33" cy="50" r="2.5" fill={INK} />
        <circle cx="47" cy="50" r="2.5" fill={INK} />
        <path d="M34 58q6 4 12 0" />
        <path d="M31 66v6M49 66v6" />
      </>
    ),
  },
  {
    key: 'mushroom',
    label: '밟지마라',
    thumb: (
      <>
        <path d="M8 20a10 8 0 0 1 20 0z" />
        <rect x="14" y="20" width="8" height="8" rx="2" />
        <circle cx="13" cy="15" r="1.5" fill="currentColor" />
        <circle cx="20" cy="13" r="1.5" fill="currentColor" />
        <circle cx="25" cy="17" r="1" fill="currentColor" />
        <path d="M15 23h6" />
      </>
    ),
    art: (
      <>
        <path d="M18 42a22 18 0 0 1 44 0z" />
        <rect x="30" y="42" width="20" height="22" rx="5" />
        <circle cx="30" cy="31" r="4" fill={INK} />
        <circle cx="46" cy="27" r="4" fill={INK} />
        <circle cx="56" cy="36" r="3" fill={INK} />
        <path d="M33 52h14" />
      </>
    ),
  },
  {
    key: 'alien',
    label: '개피곤',
    thumb: (
      <>
        <ellipse cx="18" cy="18" rx="9" ry="11" />
        <ellipse cx="14" cy="16" rx="3" ry="2.5" fill="currentColor" stroke="none" />
        <ellipse cx="22" cy="16" rx="3" ry="2.5" fill="currentColor" stroke="none" />
        <path d="M14 23q4 2.5 8 0" />
        <path d="M10 14 8 10M26 14l2-4" />
      </>
    ),
    art: (
      <>
        <ellipse cx="40" cy="42" rx="22" ry="27" />
        <ellipse cx="31" cy="38" rx="7" ry="6" fill={INK} stroke="none" />
        <ellipse cx="49" cy="38" rx="7" ry="6" fill={INK} stroke="none" />
        <path d="M32 55q8 5 16 0" />
        <path d="M22 30l-5-10M58 30l5-10" />
      </>
    ),
  },
];

export const ICON_MAP = Object.fromEntries(ICONS.map((icon) => [icon.key, icon]));

export const DEFAULT_ICON = 'cat';
