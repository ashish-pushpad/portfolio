/**
 * TenderBandhu E-Tendering diagram
 * MongoDB · Express.js · React.js · Node.js · REST APIs · Git
 *
 * Visual idea  (MERN stack, left-to-right flow inside a vertical stack):
 *
 *   React UI  (frontend)
 *      ↓  REST
 *   Express.js  (auth · tender · bid routes)
 *      ↓
 *   Node.js runtime
 *      ├──  Auth workflow
 *      ├──  Tender management
 *      └──  Bid management
 *      ↓
 *   MongoDB  (persistent store)
 */
export default function DiagramTenderBandhu({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <style>{`
          .dtb-t  { font-family: 'IBM Plex Mono', monospace; font-size: 8.5px; fill: currentColor; }
          .dtb-sm { font-size: 6.5px; }

          @keyframes dtb-in {
            from { opacity: 0; transform: translateX(-8px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          .dtb-a1 { animation: dtb-in 0.45s ease 0.1s  both; }
          .dtb-a2 { animation: dtb-in 0.45s ease 0.35s both; }
          .dtb-a3 { animation: dtb-in 0.45s ease 0.6s  both; }
          .dtb-a4 { animation: dtb-in 0.45s ease 0.85s both; }
          .dtb-a5 { animation: dtb-in 0.45s ease 1.1s  both; }
          .dtb-a6 { animation: dtb-in 0.45s ease 1.35s both; }
          .dtb-a7 { animation: dtb-in 0.45s ease 1.6s  both; }

          @keyframes dtb-flow { to { stroke-dashoffset: -18; } }
          .dtb-dash { stroke-dasharray: 4 4; animation: dtb-flow 1.1s linear infinite; }

          /* Shimmer on MongoDB to hint at writes */
          @keyframes dtb-shimmer {
            0%,100% { opacity: 1; }
            50%      { opacity: 0.5; }
          }
          .dtb-shimmer { animation: dtb-shimmer 2.2s ease-in-out infinite; }
        `}</style>
      </defs>

      {/* ── MERN label (top-right badge) ── */}
      <text x="152" y="16" className="dtb-t dtb-sm" opacity="0.35" fontWeight="600">MERN STACK</text>

      {/* ── React UI ── */}
      <g className="dtb-a1">
        <rect x="30" y="18" width="140" height="30" rx="3"
          stroke="currentColor" strokeWidth="1.8" />
        <text x="100" y="32" textAnchor="middle" className="dtb-t" fontWeight="700">REACT UI</text>
        <text x="100" y="43" textAnchor="middle" className="dtb-t dtb-sm" opacity="0.55">React.js · frontend</text>
      </g>

      {/* REST label */}
      <text x="104" y="62" className="dtb-t dtb-sm" opacity="0.45" fontStyle="italic">REST</text>
      <line x1="100" y1="48" x2="100" y2="68"
        stroke="currentColor" strokeWidth="1.5" className="dtb-dash" />

      {/* ── Express.js ── */}
      <g className="dtb-a2">
        <rect x="20" y="68" width="160" height="30" rx="3"
          stroke="currentColor" strokeWidth="1.8" />
        <text x="100" y="82" textAnchor="middle" className="dtb-t" fontWeight="700">EXPRESS.JS</text>
        <text x="100" y="93" textAnchor="middle" className="dtb-t dtb-sm" opacity="0.55">routes · middleware</text>
      </g>

      <line x1="100" y1="98" x2="100" y2="114"
        stroke="currentColor" strokeWidth="1.5" className="dtb-dash" />

      {/* ── Node.js runtime ── */}
      <g className="dtb-a3">
        <rect x="30" y="114" width="140" height="26" rx="3"
          stroke="currentColor" strokeWidth="1.6" />
        <text x="100" y="128" textAnchor="middle" className="dtb-t" fontWeight="700">NODE.JS RUNTIME</text>
      </g>

      {/* Fan out to three workflow boxes */}
      <line x1="100" y1="140" x2="100" y2="150"
        stroke="currentColor" strokeWidth="1.3" />
      <line x1="36"  y1="150" x2="164" y2="150"
        stroke="currentColor" strokeWidth="1.2" />
      <line x1="36"  y1="150" x2="36"  y2="162"
        stroke="currentColor" strokeWidth="1.3" className="dtb-dash" />
      <line x1="100" y1="150" x2="100" y2="162"
        stroke="currentColor" strokeWidth="1.3" className="dtb-dash" />
      <line x1="164" y1="150" x2="164" y2="162"
        stroke="currentColor" strokeWidth="1.3" className="dtb-dash" />

      {/* ── Auth workflow ── */}
      <g className="dtb-a4">
        <rect x="6"  y="162" width="60" height="30" rx="2"
          stroke="currentColor" strokeWidth="1.5" />
        <text x="36" y="175" textAnchor="middle" className="dtb-t" fontSize="7.5" fontWeight="600">AUTH</text>
        <text x="36" y="186" textAnchor="middle" className="dtb-t dtb-sm" opacity="0.5">register · login</text>
      </g>

      {/* ── Tender management ── */}
      <g className="dtb-a5">
        <rect x="70" y="162" width="60" height="30" rx="2"
          stroke="currentColor" strokeWidth="1.5" />
        <text x="100" y="175" textAnchor="middle" className="dtb-t" fontSize="7.5" fontWeight="600">TENDERS</text>
        <text x="100" y="186" textAnchor="middle" className="dtb-t dtb-sm" opacity="0.5">CRUD · manage</text>
      </g>

      {/* ── Bid management ── */}
      <g className="dtb-a5">
        <rect x="134" y="162" width="60" height="30" rx="2"
          stroke="currentColor" strokeWidth="1.5" />
        <text x="164" y="175" textAnchor="middle" className="dtb-t" fontSize="7.5" fontWeight="600">BIDS</text>
        <text x="164" y="186" textAnchor="middle" className="dtb-t dtb-sm" opacity="0.5">submit · track</text>
      </g>

      {/* Converge to MongoDB */}
      <line x1="36"  y1="192" x2="36"  y2="206"
        stroke="currentColor" strokeWidth="1.3" className="dtb-dash" />
      <line x1="100" y1="192" x2="100" y2="206"
        stroke="currentColor" strokeWidth="1.3" className="dtb-dash" />
      <line x1="164" y1="192" x2="164" y2="206"
        stroke="currentColor" strokeWidth="1.3" className="dtb-dash" />
      <line x1="36"  y1="206" x2="164" y2="206"
        stroke="currentColor" strokeWidth="1.2" />
      <line x1="100" y1="206" x2="100" y2="220"
        stroke="currentColor" strokeWidth="1.4" className="dtb-dash" />

      {/* ── MongoDB ── */}
      <g className="dtb-a6 dtb-shimmer">
        <rect x="25" y="220" width="150" height="34" rx="3"
          stroke="currentColor" strokeWidth="1.8" />
        <text x="100" y="234" textAnchor="middle" className="dtb-t" fontWeight="700">MONGODB</text>
        <text x="100" y="246" textAnchor="middle" className="dtb-t dtb-sm" opacity="0.55">persistent · document store</text>
      </g>

      {/* Git badge — bottom left */}
      <g className="dtb-a7">
        <rect x="6" y="264" width="36" height="18" rx="2"
          stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
        <text x="24" y="276" textAnchor="middle" className="dtb-t dtb-sm" opacity="0.5">GIT</text>
      </g>

      {/* bottom legend */}
      <line x1="8" y1="288" x2="192" y2="288"
        stroke="currentColor" strokeWidth="0.7" opacity="0.2" />
      <text x="8" y="297" className="dtb-t dtb-sm" opacity="0.4">MongoDB · Express · React · Node</text>
    </svg>
  )
}
