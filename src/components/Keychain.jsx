const SPRING_LINES = 8;

export default function Keychain() {
  return (
    <div className="keychain-wrap" aria-hidden="true">
      <div className="clip-body">
        <div className="clip-shine" />
        <div className="clip-gate" />
      </div>

      <div className="spring-coil">
        {Array.from({ length: SPRING_LINES }, (_, i) => (
          <div key={i} className="spring-line" />
        ))}
      </div>

      <div className="chain-ring" />
    </div>
  );
}
