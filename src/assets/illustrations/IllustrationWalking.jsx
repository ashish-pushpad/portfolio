/* Original stick-figure walking forward illustration — used in Journey */
export default function IllustrationWalking({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 180 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Path / road */}
      <path
        d="M10 170 Q90 158 170 170"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Dashes on road */}
      <line x1="40" y1="168" x2="56" y2="167" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 8" />
      <line x1="88" y1="166" x2="110" y2="166" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 8" />

      {/* Walking figure */}
      <g className="walk">
        {/* Head */}
        <circle cx="90" cy="110" r="14" stroke="currentColor" strokeWidth="2" />
        <circle cx="86" cy="109" r="1.8" fill="currentColor" />
        <circle cx="93" cy="109" r="1.8" fill="currentColor" className="blink-eye" />
        {/* smile */}
        <path d="M86 115 Q90 118 94 115" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Body */}
        <line x1="90" y1="124" x2="90" y2="152" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />

        {/* Walking arms */}
        <path d="M90 132 L72 144" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M90 132 L108 140" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Walking legs */}
        <line x1="90" y1="152" x2="76" y2="170" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="90" y1="152" x2="104" y2="166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Arrow ahead */}
      <polyline
        points="138,100 152,92 138,84"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <line x1="130" y1="92" x2="152" y2="92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
