/**
 * Order Fulfillment Platform diagram
 * Go · Gin · gRPC · Protobuf · GraphQL · PostgreSQL · Redis · Docker
 *
 * Visual idea:
 *   Client (GraphQL / REST)
 *     ↓
 *   API Gateway (Gin)
 *     ↓  gRPC fan-out
 *   [Users] [Products] [Cart] [Orders] [Inventory]
 *     ↓           ↓
 *   Redis Cache   PostgreSQL
 *     (all wrapped inside a Docker border)
 */
export default function DiagramOrderFulfillment({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 310"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <style>{`
          .dof-t { font-family: 'IBM Plex Mono', monospace; font-size: 8.5px; fill: currentColor; }
          .dof-sm { font-size: 6.5px; }

          @keyframes dof-in {
            from { opacity: 0; transform: translateY(-8px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .dof-a1 { animation: dof-in 0.45s ease 0.1s both; }
          .dof-a2 { animation: dof-in 0.45s ease 0.35s both; }
          .dof-a3 { animation: dof-in 0.45s ease 0.6s both; }
          .dof-a4 { animation: dof-in 0.45s ease 0.85s both; }
          .dof-a5 { animation: dof-in 0.45s ease 1.1s both; }
          .dof-a6 { animation: dof-in 0.45s ease 1.35s both; }
          .dof-a7 { animation: dof-in 0.45s ease 1.6s both; }

          @keyframes dof-flow { to { stroke-dashoffset: -18; } }
          .dof-dash { stroke-dasharray: 4 4; animation: dof-flow 1.1s linear infinite; }

          @keyframes dof-grpc {
            0%,100% { stroke-dashoffset: 0; }
            50%     { stroke-dashoffset: -18; }
          }
          .dof-grpc { stroke-dasharray: 3 5; animation: dof-grpc 1.4s ease-in-out infinite; }
        `}</style>
      </defs>

      {/* ── Docker outer border ── */}
      <rect x="4" y="4" width="212" height="302" rx="6"
        stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" opacity="0.25" />
      <text x="8" y="14" className="dof-t dof-sm" opacity="0.4">DOCKER</text>

      {/* ── Client ── */}
      <g className="dof-a1">
        <rect x="60" y="18" width="100" height="26" rx="3"
          stroke="currentColor" strokeWidth="1.8" />
        <text x="110" y="31" textAnchor="middle" className="dof-t" fontWeight="700">CLIENT</text>
        <text x="110" y="41" textAnchor="middle" className="dof-t dof-sm" opacity="0.55">GraphQL · REST</text>
      </g>

      <line x1="110" y1="44" x2="110" y2="62"
        stroke="currentColor" strokeWidth="1.5" className="dof-dash" />

      {/* ── API Gateway (Gin) ── */}
      <g className="dof-a2">
        <rect x="35" y="62" width="150" height="30" rx="3"
          stroke="currentColor" strokeWidth="1.8" />
        <text x="110" y="77" textAnchor="middle" className="dof-t" fontWeight="700">API GATEWAY</text>
        <text x="110" y="88" textAnchor="middle" className="dof-t dof-sm" opacity="0.55">Gin · auth · routing</text>
      </g>

      {/* gRPC label */}
      <text x="114" y="106" className="dof-t dof-sm" opacity="0.45" fontStyle="italic">gRPC</text>

      {/* Fan-out lines from gateway → 5 services */}
      {/* vertical stem */}
      <line x1="110" y1="92" x2="110" y2="104"
        stroke="currentColor" strokeWidth="1.4" className="dof-dash" />
      {/* horizontal bar */}
      <line x1="24" y1="104" x2="196" y2="104"
        stroke="currentColor" strokeWidth="1.2" />
      {/* vertical drops */}
      {[24, 62, 110, 158, 196].map(x => (
        <line key={x} x1={x} y1="104" x2={x} y2="118"
          stroke="currentColor" strokeWidth="1.2" className="dof-grpc" />
      ))}

      {/* ── 5 micro-services row ── */}
      {/* Users */}
      <g className="dof-a3">
        <rect x="4" y="118" width="40" height="28" rx="2"
          stroke="currentColor" strokeWidth="1.5" />
        <text x="24" y="130" textAnchor="middle" className="dof-t" fontSize="7">USERS</text>
        <text x="24" y="141" textAnchor="middle" className="dof-t dof-sm" opacity="0.5">Go</text>
      </g>

      {/* Products */}
      <g className="dof-a3">
        <rect x="48" y="118" width="40" height="28" rx="2"
          stroke="currentColor" strokeWidth="1.5" />
        <text x="68" y="130" textAnchor="middle" className="dof-t" fontSize="7">PRODUCTS</text>
        <text x="68" y="141" textAnchor="middle" className="dof-t dof-sm" opacity="0.5">Go</text>
      </g>

      {/* Cart */}
      <g className="dof-a4">
        <rect x="90" y="118" width="40" height="28" rx="2"
          stroke="currentColor" strokeWidth="1.5" />
        <text x="110" y="130" textAnchor="middle" className="dof-t" fontSize="7">CART</text>
        <text x="110" y="141" textAnchor="middle" className="dof-t dof-sm" opacity="0.5">Go</text>
      </g>

      {/* Orders */}
      <g className="dof-a4">
        <rect x="134" y="118" width="40" height="28" rx="2"
          stroke="currentColor" strokeWidth="1.5" />
        <text x="154" y="130" textAnchor="middle" className="dof-t" fontSize="7">ORDERS</text>
        <text x="154" y="141" textAnchor="middle" className="dof-t dof-sm" opacity="0.5">Go</text>
      </g>

      {/* Inventory */}
      <g className="dof-a4">
        <rect x="178" y="118" width="38" height="28" rx="2"
          stroke="currentColor" strokeWidth="1.5" />
        <text x="197" y="130" textAnchor="middle" className="dof-t" fontSize="6.5">INVENTORY</text>
        <text x="197" y="141" textAnchor="middle" className="dof-t dof-sm" opacity="0.5">Go</text>
      </g>

      {/* Lines from services to storage tier */}
      {/* Left cluster → Redis */}
      <line x1="24"  y1="146" x2="24"  y2="165" stroke="currentColor" strokeWidth="1.2" className="dof-dash" />
      <line x1="68"  y1="146" x2="68"  y2="165" stroke="currentColor" strokeWidth="1.2" className="dof-dash" />
      <line x1="110" y1="146" x2="110" y2="165" stroke="currentColor" strokeWidth="1.2" className="dof-dash" />
      <line x1="154" y1="146" x2="154" y2="165" stroke="currentColor" strokeWidth="1.2" className="dof-dash" />
      <line x1="197" y1="146" x2="197" y2="165" stroke="currentColor" strokeWidth="1.2" className="dof-dash" />

      {/* Converge to two trunks */}
      <line x1="24" y1="165" x2="67"  y2="165" stroke="currentColor" strokeWidth="1.1" />
      <line x1="67" y1="165" x2="67"  y2="180" stroke="currentColor" strokeWidth="1.2" className="dof-dash" />
      <line x1="110" y1="165" x2="197" y2="165" stroke="currentColor" strokeWidth="1.1" />
      <line x1="154" y1="165" x2="154" y2="180" stroke="currentColor" strokeWidth="1.2" className="dof-dash" />

      {/* ── Redis Cache ── */}
      <g className="dof-a5">
        <rect x="24" y="180" width="88" height="28" rx="3"
          stroke="currentColor" strokeWidth="1.7" />
        <text x="68" y="194" textAnchor="middle" className="dof-t" fontWeight="700">REDIS</text>
        <text x="68" y="204" textAnchor="middle" className="dof-t dof-sm" opacity="0.55">cache · sessions</text>
      </g>

      {/* ── PostgreSQL ── */}
      <g className="dof-a5">
        <rect x="118" y="180" width="94" height="28" rx="3"
          stroke="currentColor" strokeWidth="1.7" />
        <text x="165" y="194" textAnchor="middle" className="dof-t" fontWeight="700">POSTGRESQL</text>
        <text x="165" y="204" textAnchor="middle" className="dof-t dof-sm" opacity="0.55">persistent store</text>
      </g>

      {/* Protobuf label */}
      <text x="8" y="275" className="dof-t dof-sm" opacity="0.35">Protobuf · Protocol Buffers</text>

      {/* ── bottom legend ── */}
      <line x1="8" y1="260" x2="212" y2="260" stroke="currentColor" strokeWidth="0.7" opacity="0.2" />
      <text x="8"   y="272" className="dof-t dof-sm" opacity="0.4">Go · Gin · gRPC</text>
      <text x="8"   y="282" className="dof-t dof-sm" opacity="0.4">PostgreSQL · Redis · Docker</text>
    </svg>
  )
}
