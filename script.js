'use strict';

const ICONS = {
  cat: {
    label: '어쩌라고',
    svg: `<g stroke="#1a1714" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <ellipse cx="40" cy="42" rx="20" ry="22"/>
      <path d="M20 28 13 18M60 28l7-10"/>
      <circle cx="33" cy="40" r="2.5" fill="#1a1714"/>
      <circle cx="47" cy="40" r="2.5" fill="#1a1714"/>
      <path d="M36 50q4 3 8 0"/>
      <line x1="22" y1="42" x2="14" y2="40"/>
      <line x1="22" y1="46" x2="13" y2="46"/>
      <line x1="58" y1="42" x2="66" y2="40"/>
      <line x1="58" y1="46" x2="67" y2="46"/>
      <path d="M34 62v6M46 62v6"/>
      <path d="M37 66h6"/>
    </g>`,
  },
  ghost: {
    label: '무섭지',
    svg: `<g stroke="#1a1714" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M18 65V36a22 22 0 1 1 44 0v29l-7-5-7 5-6-4-6 4-7-5-7 5z"/>
      <circle cx="33" cy="38" r="3" fill="#1a1714"/>
      <circle cx="47" cy="38" r="3" fill="#1a1714"/>
      <path d="M34 48q6 4 12 0"/>
    </g>`,
  },
  frog: {
    label: '개굴',
    svg: `<g stroke="#1a1714" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <ellipse cx="40" cy="50" rx="22" ry="18"/>
      <circle cx="26" cy="30" r="8"/>
      <circle cx="54" cy="30" r="8"/>
      <circle cx="28" cy="30" r="2.5" fill="#1a1714"/>
      <circle cx="56" cy="30" r="2.5" fill="#1a1714"/>
      <path d="M32 54q8 7 16 0"/>
      <path d="M20 65l-5 8M60 65l5 8"/>
      <path d="M15 70l8-2M65 70l-8-2"/>
    </g>`,
  },
  bear: {
    label: '곰돌이',
    svg: `<g stroke="#1a1714" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <ellipse cx="40" cy="50" rx="22" ry="20"/>
      <circle cx="22" cy="30" r="8"/>
      <circle cx="58" cy="30" r="8"/>
      <circle cx="34" cy="47" r="2.5" fill="#1a1714"/>
      <circle cx="46" cy="47" r="2.5" fill="#1a1714"/>
      <ellipse cx="40" cy="55" rx="7" ry="5"/>
      <path d="M37 55q3 3 6 0"/>
    </g>`,
  },
  star: {
    label: '★',
    svg: `<g stroke="#1a1714" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M40 12l7 14 16 2.3-11.5 11.2 2.7 15.8L40 48l-14.2 7.3 2.7-15.8L17 28.3l16-2.3L40 12z"/>
      <circle cx="40" cy="62" r="2" fill="#1a1714"/>
      <path d="M36 66h8"/>
    </g>`,
  },
  heart: {
    label: '♡',
    svg: `<g stroke="#1a1714" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M40 66S14 52 14 34a13 13 0 0 1 26-3.2A13 13 0 0 1 66 34c0 18-26 32-26 32z"/>
      <path d="M32 25q-3-4-8-3"/>
    </g>`,
  },
  bunny: {
    label: '살려줘',
    svg: `<g stroke="#1a1714" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <ellipse cx="40" cy="52" rx="21" ry="18"/>
      <path d="M29 36 23 11M51 36l6-25"/>
      <circle cx="34" cy="50" r="2.5" fill="#1a1714"/>
      <circle cx="46" cy="50" r="2.5" fill="#1a1714"/>
      <ellipse cx="40" cy="56" rx="5" ry="3"/>
      <path d="M35 62q5 4 10 0"/>
    </g>`,
  },
  chick: {
    label: '삐약',
    svg: `<g stroke="#1a1714" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <ellipse cx="40" cy="53" rx="22" ry="18"/>
      <circle cx="40" cy="29" r="12"/>
      <path d="M33 29l7 5 7-5"/>
      <circle cx="35" cy="26" r="2" fill="#1a1714"/>
      <circle cx="45" cy="26" r="2" fill="#1a1714"/>
      <path d="M20 55l-8 7M60 55l8 7"/>
    </g>`,
  },
  dino: {
    label: '으쌰',
    svg: `<g stroke="#1a1714" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <ellipse cx="38" cy="51" rx="22" ry="18"/>
      <path d="M48 35l10-18 6 10-3 9"/>
      <circle cx="33" cy="49" r="2.5" fill="#1a1714"/>
      <circle cx="47" cy="49" r="2.5" fill="#1a1714"/>
      <path d="M34 58q6 4 12 0"/>
      <path d="M25 66l-5 9M55 66l5 9"/>
    </g>`,
  },
  cloud: {
    label: '뭉게',
    svg: `<g stroke="#1a1714" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M18 55a13 13 0 0 1 2-25 16 16 0 0 1 30-5 14 14 0 0 1 8 27"/>
      <circle cx="33" cy="50" r="2.5" fill="#1a1714"/>
      <circle cx="47" cy="50" r="2.5" fill="#1a1714"/>
      <path d="M34 58q6 4 12 0"/>
      <path d="M31 66v6M49 66v6"/>
    </g>`,
  },
  mushroom: {
    label: '밟지마라',
    svg: `<g stroke="#1a1714" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <path d="M18 42a22 18 0 0 1 44 0z"/>
      <rect x="30" y="42" width="20" height="22" rx="5"/>
      <circle cx="30" cy="31" r="4" fill="#1a1714"/>
      <circle cx="46" cy="27" r="4" fill="#1a1714"/>
      <circle cx="56" cy="36" r="3" fill="#1a1714"/>
      <path d="M33 52h14"/>
    </g>`,
  },
  alien: {
    label: '개피곤',
    svg: `<g stroke="#1a1714" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none">
      <ellipse cx="40" cy="42" rx="22" ry="27"/>
      <ellipse cx="31" cy="38" rx="7" ry="6" fill="#1a1714" stroke="none"/>
      <ellipse cx="49" cy="38" rx="7" ry="6" fill="#1a1714" stroke="none"/>
      <path d="M32 55q8 5 16 0"/>
      <path d="M22 30l-5-10M58 30l5-10"/>
    </g>`,
  },
};

let count = 0;
let currentSwitch = 'red';
let audioCtx = null;
let pressTimer = null;
let isPressed = false;

const keycap = document.getElementById('keycap');
const iconGroup = document.getElementById('iconGroup');
const capLabel = document.getElementById('capLabel');
const rippleLayer = document.getElementById('rippleLayer');
const countNum = document.getElementById('countNum');
const countStatus = document.getElementById('countStatus');
const stage = document.querySelector('.stage');

const STATUS_MAP = [
  [500, '키캡 신 🏆'],
  [300, '레전드 💀'],
  [200, '탁 ◎'],
  [100, '리듬 타는 중 〜'],
  [50, '워밍업 중...'],
  [0, 'keep going ✦'],
];

function getStatus(n) {
  for (const [target, message] of STATUS_MAP) {
    if (n >= target) return message;
  }

  return 'keep going ✦';
}

function getCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  return audioCtx;
}

function playNoise(ctx, {
  start = 0,
  duration = 0.006,
  gain = 0.2,
  frequency = 2500,
  q = 1.5,
  decay = 0.012,
  filterType = 'bandpass',
}) {
  const now = ctx.currentTime + start;

  const buffer = ctx.createBuffer(
    1,
    Math.floor(ctx.sampleRate * duration),
    ctx.sampleRate
  );

  const data = buffer.getChannelData(0);

  for (let i = 0; i < data.length; i++) {
    const t = i / data.length;

    data[i] =
      (Math.random() * 2 - 1) *
      Math.pow(1 - t, 2.8);
  }

  const src = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const g = ctx.createGain();

  src.buffer = buffer;

  filter.type = filterType;
  filter.frequency.value = frequency;
  filter.Q.value = q;

  g.gain.setValueAtTime(gain, now);
  g.gain.linearRampToValueAtTime(0.001, now + decay);

  src.connect(filter);
  filter.connect(g);
  g.connect(ctx.destination);

  src.start(now);
}

function playTone(ctx, {
  start = 0,
  duration = 0.02,
  gain = 0.08,
  frequency = 1200,
  type = 'triangle',
  detune = 0,
  decay = 0.012,
}) {
  const now = ctx.currentTime + start;
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const g = ctx.createGain();

  osc.type = type;
  osc.frequency.value = frequency;
  osc.detune.value = detune;

  filter.type = 'lowpass';
  filter.frequency.value = Math.max(600, frequency * 2.4);
  filter.Q.value = 0.7;

  g.gain.setValueAtTime(0.0001, now);
  g.gain.exponentialRampToValueAtTime(Math.max(gain, 0.0002), now + 0.001);
  g.gain.exponentialRampToValueAtTime(0.0001, now + decay);

  osc.connect(filter);
  filter.connect(g);
  g.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + duration + 0.02);
}

function playKeyboardPress(ctx, profile) {
  const jitter = (Math.random() - 0.5) * 0.003;
  const clickScale = 0.9 + Math.random() * 0.2;
  const bodyScale = 0.92 + Math.random() * 0.16;
  const thudScale = 0.92 + Math.random() * 0.16;

  playNoise(ctx, {
    start: jitter,
    duration: profile.clickDuration,
    gain: profile.clickGain * clickScale,
    frequency: profile.clickFrequency * (0.96 + Math.random() * 0.08),
    q: profile.clickQ,
    decay: profile.clickDecay,
  });

  playTone(ctx, {
    start: 0.0015 + jitter,
    duration: profile.bodyDuration,
    gain: profile.bodyGain * bodyScale,
    frequency: profile.bodyFrequency * (0.97 + Math.random() * 0.06),
    type: profile.bodyType,
    detune: (Math.random() - 0.5) * profile.bodyDetune,
    decay: profile.bodyDecay,
  });

  playNoise(ctx, {
    start: 0.006 + jitter,
    duration: profile.thudDuration,
    gain: profile.thudGain * thudScale,
    frequency: profile.thudFrequency * (0.97 + Math.random() * 0.06),
    q: profile.thudQ,
    decay: profile.thudDecay,
    filterType: 'lowpass',
  });

  if (profile.rattleGain > 0) {
    playNoise(ctx, {
      start: 0.011 + jitter,
      duration: profile.rattleDuration,
      gain: profile.rattleGain * (0.9 + Math.random() * 0.2),
      frequency: profile.rattleFrequency * (0.96 + Math.random() * 0.08),
      q: profile.rattleQ,
      decay: profile.rattleDecay,
    });
  }
}

const SWITCHES = {
  blue: (ctx) => {
    playKeyboardPress(ctx, {
      clickDuration: 0.0018,
      clickGain: 0.82,
      clickFrequency: 9200,
      clickQ: 9.2,
      clickDecay: 0.0034,
      bodyDuration: 0.016,
      bodyGain: 0.07,
      bodyFrequency: 2380,
      bodyType: 'square',
      bodyDetune: 18,
      bodyDecay: 0.009,
      thudDuration: 0.006,
      thudGain: 0.34,
      thudFrequency: 260,
      thudQ: 0.9,
      thudDecay: 0.013,
      rattleGain: 0.3,
      rattleDuration: 0.004,
      rattleFrequency: 5200,
      rattleQ: 2.6,
      rattleDecay: 0.006,
    });
  },

  red: (ctx) => {
    playKeyboardPress(ctx, {
      clickDuration: 0.0028,
      clickGain: 0.3,
      clickFrequency: 5200,
      clickQ: 5.5,
      clickDecay: 0.005,
      bodyDuration: 0.02,
      bodyGain: 0.08,
      bodyFrequency: 1180,
      bodyType: 'triangle',
      bodyDetune: 8,
      bodyDecay: 0.013,
      thudDuration: 0.009,
      thudGain: 0.22,
      thudFrequency: 175,
      thudQ: 0.8,
      thudDecay: 0.016,
      rattleGain: 0.08,
      rattleDuration: 0.0035,
      rattleFrequency: 2600,
      rattleQ: 2.1,
      rattleDecay: 0.008,
    });
  },

  brown: (ctx) => {
    playKeyboardPress(ctx, {
      clickDuration: 0.0026,
      clickGain: 0.36,
      clickFrequency: 6100,
      clickQ: 6.2,
      clickDecay: 0.0045,
      bodyDuration: 0.019,
      bodyGain: 0.1,
      bodyFrequency: 1560,
      bodyType: 'triangle',
      bodyDetune: 10,
      bodyDecay: 0.012,
      thudDuration: 0.008,
      thudGain: 0.2,
      thudFrequency: 205,
      thudQ: 0.9,
      thudDecay: 0.015,
      rattleGain: 0.12,
      rattleDuration: 0.004,
      rattleFrequency: 3400,
      rattleQ: 2.3,
      rattleDecay: 0.007,
    });
  },

  silent: null,
};

function playSwitch(type) {
  const sound = SWITCHES[type];

  if (!sound) return;

  try {
    sound(getCtx());
  } catch (error) {
    console.warn('Audio play failed:', error);
  }
}

function spawnRipple(e) {
  const rect = keycap.getBoundingClientRect();

  const clientX = e.clientX || rect.left + rect.width / 2;
  const clientY = e.clientY || rect.top + rect.height / 2;

  const x = clientX - rect.left;
  const y = clientY - rect.top;

  const size = 100;
  const ripple = document.createElement('span');

  ripple.className = 'ripple';
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${x - size / 2}px`;
  ripple.style.top = `${y - size / 2}px`;

  rippleLayer.appendChild(ripple);

  window.setTimeout(() => {
    ripple.remove();
  }, 420);
}

function setPressedSmooth() {
  if (pressTimer) {
    clearTimeout(pressTimer);
  }

  if (!isPressed) {
    keycap.classList.add('pressed');
    isPressed = true;
  }

  pressTimer = window.setTimeout(() => {
    keycap.classList.remove('pressed');
    isPressed = false;
  }, 135);
}

function setStagePressed() {
  if (!stage) return;

  stage.classList.add('stage-pressed');

  window.setTimeout(() => {
    stage.classList.remove('stage-pressed');
  }, 135);
}

function onPress(e) {
  count += 1;

  countNum.textContent = count;
  countStatus.textContent = getStatus(count);

  countNum.classList.remove('bump');
  void countNum.offsetWidth;
  countNum.classList.add('bump');

  setPressedSmooth();
  setStagePressed();

  playSwitch(currentSwitch);
  spawnRipple(e);
}

keycap.addEventListener('pointerdown', (e) => {
  e.preventDefault();
  onPress(e);
});

keycap.addEventListener('keydown', (e) => {
  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    onPress(e);
  }
});

countNum.addEventListener('animationend', () => {
  countNum.classList.remove('bump');
});

function setIcon(key) {
  const data = ICONS[key];

  if (!data) return;

  capLabel.textContent = data.label;
  iconGroup.innerHTML = data.svg;
}

document.querySelectorAll('.icon-opt').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.icon-opt').forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });

    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');

    setIcon(button.dataset.icon);
  });
});

document.querySelectorAll('.chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });

    chip.classList.add('active');
    chip.setAttribute('aria-pressed', 'true');

    currentSwitch = chip.dataset.switch;
  });
});

setIcon('cat');