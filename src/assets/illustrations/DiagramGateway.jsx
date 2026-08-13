/* Animated API gateway architecture diagram */
export default function DiagramGateway({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <style>{`
          .dg-node { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: currentColor; }
          @keyframes dg-fade {
            0%   { opacity: 0; transform: translateY(-5px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .dg-1 { animation: dg-fade 0.4s ease 0.1s both; }
          .dg-2 { animation: dg-fade 0.4s ease 0.4s both; }
          .dg-3 { animation: dg-fade 0.4s ease 0.7s both; }
          .dg-4 { animation: dg-fade 0.4s ease 1.0s both; }
          .dg-5 { animation: dg-fade 0.4s ease 1.3s both; }
          @keyframes dg-dash { to { stroke-dashoffset: -20; } }
          .dg-line { stroke-dasharray: 4 4; animation: dg-dash 1.2s linear infinite; }
        `}</style>
      </defs>

      {/* Request flow label */}
      <text x="80" y="16" textAnchor="middle" className="dg-node" opacity="0.5">REST REQUEST</text>

      {/* Client */}
      <g className="dg-1">
        <rect x="40" y="22" width="80" height="26" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <text x="80" y="39" textAnchor="middle" className="dg-node" fontWeight="600">CLIENT</text>
      </g>
      <line x1="80" y1="48" x2="80" y2="66" stroke="currentColor" strokeWidth="1.5" className="dg-line" />

      {/* Gateway box */}
      <g className="dg-2">
        <rect x="5" y="66" width="155" height="36" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <text x="80" y="82" textAnchor="middle" className="dg-node" fontWeight="600">API GATEWAY</text>
        <text x="85" y="96" textAnchor="middle" className="dg-node" fontSize= "6"  opacity="0.6">auth · routing · rate-limit</text>
      </g>
      <line x1="80" y1="102" x2="80" y2="120" stroke="currentColor" strokeWidth="1.5" className="dg-line" />

      {/* Redis cache */}
      <g className="dg-3">
        <rect x="40" y="120" width="80" height="26" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <text x="80" y="137" textAnchor="middle" className="dg-node">REDIS CACHE</text>
      </g>
      <line x1="80" y1="146" x2="80" y2="162" stroke="currentColor" strokeWidth="1.5" className="dg-line" />

      {/* Services */}
      <g className="dg-4">
        <rect x="20" y="162" width="120" height="26" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <text x="80" y="179" textAnchor="middle" className="dg-node">UPSTREAM SERVICES</text>
      </g>
      <line x1="80" y1="188" x2="80" y2="204" stroke="currentColor" strokeWidth="1.5" className="dg-line" />

      {/* Docker label */}
      <g className="dg-5">
        <rect x="40" y="204" width="80" height="26" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <text x="80" y="221" textAnchor="middle" className="dg-node" fontWeight="600">DOCKER</text>
      </g>
    </svg>
  )
}
