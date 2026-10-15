import { useState } from 'react';
import Keycap from './components/Keycap.jsx';
import Keychain from './components/Keychain.jsx';
import IconPicker from './components/IconPicker.jsx';
import SwitchPicker from './components/SwitchPicker.jsx';
import PressCounter from './components/PressCounter.jsx';
import TimeAttack from './components/TimeAttack.jsx';
import PremiumUnlock from './components/PremiumUnlock.jsx';
import FoundersWall from './components/FoundersWall.jsx';
import { DEFAULT_ICON, ICON_MAP } from './data/icons.jsx';
import { DEFAULT_SWITCH } from './data/switches.js';
import { playSwitch } from './audio/keyboardSound.js';
import { isPremiumUnlocked } from './data/premium.js';
import { getPhotoKeycaps, addPhotoKeycap, removePhotoKeycap } from './data/photoKeycap.js';

export default function App() {
  const [count, setCount] = useState(0);
  const [iconKey, setIconKey] = useState(DEFAULT_ICON);
  const [switchKey, setSwitchKey] = useState(DEFAULT_SWITCH);
  const [mode, setMode] = useState('free'); // free | timeattack
  const [premiumUnlocked, setPremiumUnlocked] = useState(() => isPremiumUnlocked());
  const [photos, setPhotos] = useState(() => getPhotoKeycaps());
  const [foundersKey, setFoundersKey] = useState(0);

  function handlePress() {
    setCount((n) => n + 1);
    playSwitch(switchKey);
  }

  function handleUnlock() {
    setPremiumUnlocked(true);
    setFoundersKey((k) => k + 1);
  }

  function handleAddPhoto(dataUrl) {
    const entry = addPhotoKeycap(dataUrl);
    setPhotos((prev) => [...prev, entry]);
    setIconKey(`photo:${entry.id}`);
  }

  function handleRemovePhoto(id) {
    setPhotos(removePhotoKeycap(id));
    setIconKey((k) => (k === `photo:${id}` ? DEFAULT_ICON : k));
  }

  const showPhoto = iconKey.startsWith('photo:');
  const activePhoto = showPhoto ? photos.find((p) => p.id === iconKey.slice(6))?.dataUrl : undefined;
  const icon = ICON_MAP[iconKey] || ICON_MAP[DEFAULT_ICON];

  return (
    <main className="app">
      <section className="hero">
        <p className="eyebrow">Online Keycap Toy</p>
        <h1 className="hero-title">
          Click. Relax.<br />
          <em>Repeat.</em>
        </h1>
        <p className="hero-sub">스트레스를 풀어주는 귀여운 온라인 키캡</p>
      </section>

      <div className="mode-tabs" role="tablist" aria-label="모드 선택">
        <button
          className={mode === 'free' ? 'mode-tab active' : 'mode-tab'}
          role="tab"
          aria-selected={mode === 'free'}
          onClick={() => setMode('free')}
        >
          자유모드
        </button>
        <button
          className={mode === 'timeattack' ? 'mode-tab active' : 'mode-tab'}
          role="tab"
          aria-selected={mode === 'timeattack'}
          onClick={() => setMode('timeattack')}
        >
          타임어택
        </button>
      </div>

      {mode === 'free' ? (
        <>
          <section className="stage" aria-label="키캡">
            <div className="keycap-assembly">
              <Keychain />
              <Keycap icon={icon} onPress={handlePress} photo={activePhoto} />
            </div>
          </section>

          <section className="panel">
            <IconPicker value={iconKey} onChange={setIconKey} photos={photos} onRemovePhoto={handleRemovePhoto} />
            <div className="panel-divider" />
            <SwitchPicker value={switchKey} onChange={setSwitchKey} />
            <div className="panel-divider" />
            <FoundersWall refreshKey={foundersKey} />
            <div className="panel-divider" />
            <PremiumUnlock
              unlocked={premiumUnlocked}
              onUnlock={handleUnlock}
              photoCount={photos.length}
              onAddPhoto={handleAddPhoto}
            />
            <div className="panel-divider" />
            <PressCounter count={count} />
          </section>
        </>
      ) : (
        <TimeAttack icon={icon} switchKey={switchKey} photo={activePhoto} premiumUnlocked={premiumUnlocked} />
      )}
    </main>
  );
}
