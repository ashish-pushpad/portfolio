/* Animated microservices architecture diagram — used in Projects */
export default function DiagramMicroservices({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <style>{`
          .dm-node { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: currentColor; }
          @keyframes fadeDown {
            0%   { opacity: 0; transform: translateY(-6px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .dm-1 { animation: fadeDown 0.5s ease 0.2s both; }
          .dm-2 { animation: fadeDown 0.5s ease 0.5s both; }
          .dm-3 { animation: fadeDown 0.5s ease 0.8s both; }
          .dm-4 { animation: fadeDown 0.5s ease 1.1s both; }
          .dm-5 { animation: fadeDown 0.5s ease 1.4s both; }
          .dm-6 { animation: fadeDown 0.5s ease 1.7s both; }
          @keyframes dashMove {
            to { stroke-dashoffset: -20; }
          }
          .dm-line { stroke-dasharray: 4 4; animation: dashMove 1.2s linear infinite; }
        `}</style>
      </defs>

      {/* CLIENT */}
      <g className="dm-1">
        <rect x="40" y="8" width="80" height="28" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <text x="80" y="27" textAnchor="middle" className="dm-node" fontWeight="600">CLIENT</text>
      </g>
      <line x1="80" y1="36" x2="80" y2="54" stroke="currentColor" strokeWidth="1.5" className="dm-line" />

      {/* API GATEWAY */}
      <g className="dm-2">
        <rect x="30" y="54" width="100" height="28" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <text x="80" y="73" textAnchor="middle" className="dm-node" fontWeight="600">API GATEWAY</text>
      </g>

      {/* Fan out lines */}
      <line x1="80" y1="82" x2="80" y2="94" stroke="currentColor" strokeWidth="1.5" className="dm-line" />
      <line x1="80" y1="94" x2="36" y2="94" stroke="currentColor" strokeWidth="1.5" />
      <line x1="80" y1="94" x2="80" y2="94"  stroke="currentColor" strokeWidth="1.5" />
      <line x1="80" y1="94" x2="124" y2="94" stroke="currentColor" strokeWidth="1.5" />
      <line x1="36"  y1="94" x2="36"  y2="110" stroke="currentColor" strokeWidth="1.5" className="dm-line" />
      <line x1="80"  y1="94" x2="80"  y2="110" stroke="currentColor" strokeWidth="1.5" className="dm-line" />
      <line x1="124" y1="94" x2="124" y2="110" stroke="currentColor" strokeWidth="1.5" className="dm-line" />

      {/* Services row */}
      <g className="dm-3">
        <rect x="4"   y="110" width="64" height="26" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <text x="36"  y="127" textAnchor="middle" className="dm-node">PRODUCTS</text>
      </g>
      <g className="dm-4">
        <rect x="48"  y="110" width="64" height="26" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <text x="80"  y="127" textAnchor="middle" className="dm-node">INVENTORY</text>
      </g>
      <g className="dm-5">
        <rect x="92"  y="110" width="64" height="26" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <text x="124" y="127" textAnchor="middle" className="dm-node">PRICING</text>
      </g>

      {/* Lines to DB */}
      <line x1="36"  y1="136" x2="36"  y2="148" stroke="currentColor" strokeWidth="1.5" className="dm-line" />
      <line x1="80"  y1="136" x2="80"  y2="148" stroke="currentColor" strokeWidth="1.5" className="dm-line" />
      <line x1="124" y1="136" x2="124" y2="148" stroke="currentColor" strokeWidth="1.5" className="dm-line" />
      <line x1="36"  y1="148" x2="124" y2="148" stroke="currentColor" strokeWidth="1.5" />
      <line x1="80"  y1="148" x2="80"  y2="162" stroke="currentColor" strokeWidth="1.5" className="dm-line" />

      {/* DATABASE */}
      <g className="dm-6">
        <rect x="30" y="162" width="100" height="28" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <text x="80" y="181" textAnchor="middle" className="dm-node" fontWeight="600">POSTGRES</text>
      </g>

      {/* gRPC label */}
      <text x="86" y="106" className="dm-node" fill="currentColor" opacity="0.5">gRPC</text>
    </svg>
  )
}
