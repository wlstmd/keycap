import { useState } from 'react';
import Keycap from './components/Keycap.jsx';
import Keychain from './components/Keychain.jsx';
import IconPicker from './components/IconPicker.jsx';
import SwitchPicker from './components/SwitchPicker.jsx';
import PressCounter from './components/PressCounter.jsx';
import { DEFAULT_ICON, ICON_MAP } from './data/icons.jsx';
import { DEFAULT_SWITCH } from './data/switches.js';
import { playSwitch } from './audio/keyboardSound.js';

export default function App() {
  const [count, setCount] = useState(0);
  const [iconKey, setIconKey] = useState(DEFAULT_ICON);
  const [switchKey, setSwitchKey] = useState(DEFAULT_SWITCH);

  function handlePress() {
    setCount((n) => n + 1);
    playSwitch(switchKey);
  }

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

      <section className="stage" aria-label="키캡">
        <div className="keycap-assembly">
          <Keychain />
          <Keycap icon={ICON_MAP[iconKey]} onPress={handlePress} />
        </div>
      </section>

      <section className="panel">
        <IconPicker value={iconKey} onChange={setIconKey} />
        <div className="panel-divider" />
        <SwitchPicker value={switchKey} onChange={setSwitchKey} />
        <div className="panel-divider" />
        <PressCounter count={count} />
      </section>
    </main>
  );
}
