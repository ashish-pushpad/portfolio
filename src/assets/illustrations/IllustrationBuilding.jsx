/* Original stick-figure building / constructing illustration */
export default function IllustrationBuilding({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Structure being built — stacked blocks */}
      <rect x="60" y="140" width="80" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      <rect x="72" y="116" width="56" height="24" rx="3" stroke="currentColor" strokeWidth="2" />
      <rect x="84" y="92" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="2" />

      {/* Top block being placed (floating slightly) */}
      <rect x="88" y="66" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="2" className="float" />

      {/* Person placing block */}
      {/* Head */}
      <circle cx="152" cy="86" r="13" stroke="currentColor" strokeWidth="2" />
      <circle cx="148" cy="85" r="1.8" fill="currentColor" className="blink-eye" />
      <circle cx="155" cy="85" r="1.8" fill="currentColor" />

      {/* Body */}
      <line x1="152" y1="99" x2="152" y2="132" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Arms reaching toward block */}
      <path d="M152 108 L118 78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M152 108 L170 118" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Legs */}
      <line x1="152" y1="132" x2="140" y2="164" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="152" y1="132" x2="162" y2="164" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Floor line */}
      <line x1="20" y1="168" x2="186" y2="168" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Small sparkle / stars near top block */}
      <line x1="78" y1="56" x2="78" y2="62" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="75" y1="59" x2="81" y2="59" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="72" y1="50" x2="72" y2="54" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="70" y1="52" x2="74" y2="52" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
