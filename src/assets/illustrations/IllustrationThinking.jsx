/* Original stick-figure thinking / inspecting code illustration */
export default function IllustrationThinking({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Large magnifying glass */}
      <circle cx="90" cy="90" r="48" stroke="currentColor" strokeWidth="2.5" />
      <line x1="128" y1="128" x2="162" y2="162" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      {/* Code inside glass */}
      <line x1="66" y1="78" x2="86" y2="78" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="66" y1="88" x2="100" y2="88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="74" y1="98" x2="94" y2="98" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="74" y1="108" x2="110" y2="108" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Person looking through glass */}
      {/* Head */}
      <circle cx="40" cy="156" r="14" stroke="currentColor" strokeWidth="2" />
      <circle cx="36" cy="154" r="1.8" fill="currentColor" />
      <circle cx="43" cy="154" r="1.8" fill="currentColor" className="blink-eye" />
      {/* Body */}
      <line x1="40" y1="170" x2="40" y2="200" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Arm pointing toward glass */}
      <path d="M40 178 L72 148" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Other arm down */}
      <path d="M40 178 L22 196" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Legs */}
      <line x1="40" y1="200" x2="28" y2="218" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="200" x2="52" y2="218" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Thought bubble */}
      <circle cx="62" cy="142" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="70" cy="134" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="80" cy="126" r="5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
