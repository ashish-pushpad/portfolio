/**
 * Song Hunter diagram
 * React.js · Tailwind · Google Gemini AI · REST APIs · MongoDB
 *
 * Visual idea:
 *   User types emotion / tags
 *     ↓
 *   React UI (Tailwind)
 *     ↓  REST
 *   Backend API
 *     ├── Gemini AI  →  AI suggestions
 *     └── MongoDB    →  Song metadata
 *     ↓
 *   Results back to UI
 */
export default function DiagramSongHunter({ className = '' }) {
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
          .dsh-t  { font-family: 'IBM Plex Mono', monospace; font-size: 8.5px; fill: currentColor; }
          .dsh-sm { font-size: 6.5px; }

          @keyframes dsh-in {
            from { opacity: 0; transform: translateY(-6px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .dsh-a1 { animation: dsh-in 0.45s ease 0.1s  both; }
          .dsh-a2 { animation: dsh-in 0.45s ease 0.35s both; }
          .dsh-a3 { animation: dsh-in 0.45s ease 0.6s  both; }
          .dsh-a4 { animation: dsh-in 0.45s ease 0.85s both; }
          .dsh-a5 { animation: dsh-in 0.45s ease 1.1s  both; }
          .dsh-a6 { animation: dsh-in 0.45s ease 1.35s both; }

          @keyframes dsh-flow { to { stroke-dashoffset: -18; } }
          .dsh-dash { stroke-dasharray: 4 4; animation: dsh-flow 1s linear infinite; }

          /* Pulse on the AI node */
          @keyframes dsh-pulse {
            0%,100% { opacity: 0.9; }
            50%      { opacity: 0.3; }
          }
          .dsh-pulse { animation: dsh-pulse 2s ease-in-out infinite; }

          /* Floating music note */
          @keyframes dsh-note {
            0%   { transform: translateY(0)  rotate(0deg);   opacity: 0.7; }
            50%  { transform: translateY(-8px) rotate(8deg); opacity: 1;   }
            100% { transform: translateY(0)  rotate(0deg);   opacity: 0.7; }
          }
          .dsh-note { animation: dsh-note 2.4s ease-in-out infinite; transform-origin: center; }
        `}</style>
      </defs>

      {/* ── User / emotion input ── */}
      <g className="dsh-a1">
        <rect x="50" y="10" width="100" height="28" rx="3"
          stroke="currentColor" strokeWidth="1.8" />
        <text x="100" y="23" textAnchor="middle" className="dsh-t" fontWeight="700">USER</text>
        <text x="100" y="34" textAnchor="middle" className="dsh-t dsh-sm" opacity="0.55">emotion · tags</text>
      </g>

      <line x1="100" y1="38" x2="100" y2="56"
        stroke="currentColor" strokeWidth="1.5" className="dsh-dash" />

      {/* ── React UI ── */}
      <g className="dsh-a2">
        <rect x="30" y="56" width="140" height="30" rx="3"
          stroke="currentColor" strokeWidth="1.8" />
        <text x="100" y="70" textAnchor="middle" className="dsh-t" fontWeight="700">REACT UI</text>
        <text x="100" y="81" textAnchor="middle" className="dsh-t dsh-sm" opacity="0.55">React.js · Tailwind CSS</text>
      </g>

      {/* REST label */}
      <text x="105" y="100" className="dsh-t dsh-sm" opacity="0.45" fontStyle="italic">REST</text>
      <line x1="100" y1="86" x2="100" y2="106"
        stroke="currentColor" strokeWidth="1.5" className="dsh-dash" />

      {/* ── Backend API ── */}
      <g className="dsh-a3">
        <rect x="30" y="106" width="140" height="28" rx="3"
          stroke="currentColor" strokeWidth="1.8" />
        <text x="100" y="119" textAnchor="middle" className="dsh-t" fontWeight="700">BACKEND API</text>
        <text x="100" y="130" textAnchor="middle" className="dsh-t dsh-sm" opacity="0.55">Node.js · REST</text>
      </g>

      {/* Fork: left → Gemini, right → MongoDB */}
      <line x1="100" y1="134" x2="100" y2="148"
        stroke="currentColor" strokeWidth="1.4" />
      <line x1="55"  y1="148" x2="145" y2="148"
        stroke="currentColor" strokeWidth="1.2" />
      <line x1="55"  y1="148" x2="55"  y2="164"
        stroke="currentColor" strokeWidth="1.3" className="dsh-dash" />
      <line x1="145" y1="148" x2="145" y2="164"
        stroke="currentColor" strokeWidth="1.3" className="dsh-dash" />

      {/* ── Gemini AI ── */}
      <g className="dsh-a4">
        <rect x="8" y="164" width="94" height="34" rx="3"
          stroke="currentColor" strokeWidth="1.8" />
        <text x="55" y="178" textAnchor="middle" className="dsh-t" fontWeight="700">GEMINI AI</text>
        <text x="55" y="189" textAnchor="middle" className="dsh-t dsh-sm" opacity="0.55">Google Gemini</text>
        {/* pulsing AI indicator */}
        <circle cx="94" cy="164" r="5" stroke="currentColor" strokeWidth="1.5"
          fill="none" className="dsh-pulse" />
      </g>

      {/* ── MongoDB ── */}
      <g className="dsh-a4">
        <rect x="108" y="164" width="84" height="34" rx="3"
          stroke="currentColor" strokeWidth="1.8" />
        <text x="150" y="178" textAnchor="middle" className="dsh-t" fontWeight="700">MONGODB</text>
        <text x="150" y="189" textAnchor="middle" className="dsh-t dsh-sm" opacity="0.55">songs · tags</text>
      </g>

      {/* Converge back */}
      <line x1="55"  y1="198" x2="55"  y2="212"
        stroke="currentColor" strokeWidth="1.3" className="dsh-dash" />
      <line x1="150" y1="198" x2="150" y2="212"
        stroke="currentColor" strokeWidth="1.3" className="dsh-dash" />
      <line x1="55"  y1="212" x2="150" y2="212"
        stroke="currentColor" strokeWidth="1.2" />
      <line x1="100" y1="212" x2="100" y2="228"
        stroke="currentColor" strokeWidth="1.4" className="dsh-dash" />

      {/* ── Results ── */}
      <g className="dsh-a5">
        <rect x="30" y="228" width="140" height="28" rx="3"
          stroke="currentColor" strokeWidth="1.8" />
        <text x="100" y="242" textAnchor="middle" className="dsh-t" fontWeight="700">SONG RESULTS</text>
        <text x="100" y="253" textAnchor="middle" className="dsh-t dsh-sm" opacity="0.55">matched by emotion</text>
      </g>

      {/* Floating music note decoration */}
      <g className="dsh-note">
        <text x="174" y="88" className="dsh-t" fontSize="18" opacity="0.18">♪</text>
      </g>
      <g className="dsh-note" style={{ animationDelay: '0.8s' }}>
        <text x="14" y="72" className="dsh-t" fontSize="14" opacity="0.14">♫</text>
      </g>

      {/* bottom legend */}
      <line x1="8" y1="270" x2="192" y2="270" stroke="currentColor" strokeWidth="0.7" opacity="0.2" />
      <text x="8" y="281" className="dsh-t dsh-sm" opacity="0.4">React · Tailwind · Gemini AI</text>
      <text x="8" y="291" className="dsh-t dsh-sm" opacity="0.4">REST APIs · MongoDB</text>
    </svg>
  )
}
