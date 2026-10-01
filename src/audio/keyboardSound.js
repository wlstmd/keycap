import { SWITCH_PROFILES } from '../data/switches.js';

let audioCtx = null;

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

export function playSwitch(type) {
  const profile = SWITCH_PROFILES[type];

  if (!profile) return;

  try {
    playKeyboardPress(getCtx(), profile);
  } catch (error) {
    console.warn('Audio play failed:', error);
  }
}
