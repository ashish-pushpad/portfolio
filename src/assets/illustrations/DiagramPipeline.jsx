/* Animated data pipeline diagram */
export default function DiagramPipeline({ className = '' }) {
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
          .dp-node { font-family: 'IBM Plex Mono', monospace; font-size: 9px; fill: currentColor; }
          @keyframes dp-fade {
            0%   { opacity: 0; transform: translateY(-5px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .dp-1 { animation: dp-fade 0.4s ease 0.1s both; }
          .dp-2 { animation: dp-fade 0.4s ease 0.4s both; }
          .dp-3 { animation: dp-fade 0.4s ease 0.7s both; }
          .dp-4 { animation: dp-fade 0.4s ease 1.0s both; }
          .dp-5 { animation: dp-fade 0.4s ease 1.3s both; }
          @keyframes dp-dash { to { stroke-dashoffset: -16; } }
          .dp-line { stroke-dasharray: 4 4; animation: dp-dash 1s linear infinite; }

          @keyframes dp-pulse {
            0%, 100% { r: 3; opacity: 1; }
            50%       { r: 5; opacity: 0.5; }
          }
          .dp-dot { animation: dp-pulse 1.5s ease-in-out infinite; }
        `}</style>
      </defs>

      {/* Event source */}
      <g className="dp-1">
        <rect x="30" y="10" width="100" height="26" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <text x="80" y="27" textAnchor="middle" className="dp-node" fontWeight="600">EVENT SOURCE</text>
      </g>
      <line x1="80" y1="36" x2="80" y2="52" stroke="currentColor" strokeWidth="1.5" className="dp-line" />

      {/* Kafka */}
      <g className="dp-2">
        <rect x="20" y="52" width="120" height="32" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <text x="80" y="68" textAnchor="middle" className="dp-node" fontWeight="600">KAFKA</text>
        <text x="80" y="80" textAnchor="middle" className="dp-node" opacity="0.55">message broker</text>
      </g>

      {/* Animated dots representing messages */}
      <circle cx="80" cy="98" r="3" fill="currentColor" className="dp-dot" style={{animationDelay:'0s'}} />
      <circle cx="80" cy="110" r="3" fill="currentColor" className="dp-dot" style={{animationDelay:'0.4s'}} />
      <circle cx="80" cy="122" r="3" fill="currentColor" className="dp-dot" style={{animationDelay:'0.8s'}} />

      {/* Consumer service */}
      <g className="dp-3">
        <rect x="20" y="130" width="120" height="32" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <text x="80" y="146" textAnchor="middle" className="dp-node" fontWeight="600">CONSUMER</text>
        <text x="80" y="158" textAnchor="middle" className="dp-node" opacity="0.55">Go service</text>
      </g>
      <line x1="80" y1="162" x2="80" y2="180" stroke="currentColor" strokeWidth="1.5" className="dp-line" />

      {/* Transform / process */}
      <g className="dp-4">
        <rect x="30" y="180" width="100" height="26" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <text x="80" y="197" textAnchor="middle" className="dp-node">TRANSFORM</text>
      </g>
      <line x1="80" y1="206" x2="80" y2="222" stroke="currentColor" strokeWidth="1.5" className="dp-line" />

      {/* Postgres */}
      <g className="dp-5">
        <rect x="20" y="222" width="120" height="32" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <text x="80" y="238" textAnchor="middle" className="dp-node" fontWeight="600">POSTGRES</text>
        <text x="80" y="250" textAnchor="middle" className="dp-node" opacity="0.55">persistent store</text>
      </g>
    </svg>
  )
}
