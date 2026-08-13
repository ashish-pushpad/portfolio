/* Original stick-figure developer at desk illustration */
export default function IllustrationCoder({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Monitor */}
      <rect x="60" y="30" width="100" height="70" rx="4" stroke="currentColor" strokeWidth="2.5" />
      <rect x="68" y="38" width="84" height="54" rx="2" stroke="currentColor" strokeWidth="1.5" />
      {/* Monitor stand */}
      <line x1="110" y1="100" x2="110" y2="118" stroke="currentColor" strokeWidth="2.5" />
      <line x1="90" y1="118" x2="130" y2="118" stroke="currentColor" strokeWidth="2.5" />

      {/* Code lines on screen */}
      <line x1="76" y1="52" x2="100" y2="52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="76" y1="60" x2="118" y2="60" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="76" y1="68" x2="108" y2="68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="84" y1="76" x2="122" y2="76" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="84" y1="84" x2="112" y2="84" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Desk */}
      <line x1="30" y1="140" x2="190" y2="140" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

      {/* Keyboard */}
      <rect x="78" y="132" width="64" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />

      {/* Person: head */}
      <circle cx="110" cy="158" r="12" stroke="currentColor" strokeWidth="2" />
      {/* eyes */}
      <circle cx="106" cy="157" r="1.5" fill="currentColor" className="blink-eye" />
      <circle cx="114" cy="157" r="1.5" fill="currentColor" />
      {/* mouth - slight smile */}
      <path d="M106 163 Q110 166 114 163" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Body */}
      <line x1="110" y1="170" x2="110" y2="192" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Arms on desk */}
      <path d="M110 176 L88 182 L82 178" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M110 176 L132 182 L138 178" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Cursor blink on screen */}
      <rect x="124" y="77" width="2" height="10" rx="1" fill="currentColor" className="cursor-blink" />
    </svg>
  )
}
