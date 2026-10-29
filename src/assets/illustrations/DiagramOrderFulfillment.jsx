/**
 * Order Fulfillment Platform diagram
 * Go · Gin · gRPC · Protocol Buffers · GraphQL · PostgreSQL · Redis · Docker
 *
 * Layout (top → bottom, well-spaced):
 *   ┌─────────────── DOCKER ───────────────┐
 *   │   CLIENT  (GraphQL · REST)           │
 *   │       ↓  dashed line                 │
 *   │   API GATEWAY  (Gin · auth · routing)│
 *   │    ↓  "gRPC"  ↓                      │
 *   │  USERS PRODUCTS CART ORDERS INVENTORY│
 *   │       ↓            ↓                 │
 *   │   REDIS        POSTGRESQL            │
 *   │                                      │
 *   │  Go · Gin · gRPC · Protobuf          │
 *   └──────────────────────────────────────┘
 */
export default function DiagramOrderFulfillment({ className = '' }) {
  /* x-centres for the 5 services — spread evenly across 240px */
  const svcX = [22, 62, 102, 148, 192]

  return (
    <svg
      className={className}
      viewBox="0 0 240 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <style>{`
          .dof-t   { font-family: 'IBM Plex Mono', monospace; font-size: 8.5px; fill: currentColor; }
          .dof-sub { font-size: 6.5px; }
          .dof-xs  { font-size: 6px; }

          @keyframes dofIn {
            from { opacity: 0; transform: translateY(-7px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .dof-a1 { animation: dofIn 0.4s ease 0.10s both; }
          .dof-a2 { animation: dofIn 0.4s ease 0.30s both; }
          .dof-a3 { animation: dofIn 0.4s ease 0.55s both; }
          .dof-a4 { animation: dofIn 0.4s ease 0.80s both; }
          .dof-a5 { animation: dofIn 0.4s ease 1.05s both; }

          @keyframes dofFlow { to { stroke-dashoffset: -16; } }
          .dof-dash { stroke-dasharray: 4 4; animation: dofFlow 1s linear infinite; }
        `}</style>
      </defs>

      {/* ── Docker border — drawn FIRST so it sits behind everything ── */}
      <rect
        x="6" y="6" width="228" height="340" rx="5"
        stroke="currentColor" strokeWidth="1"
        strokeDasharray="7 4" opacity="0.22"
      />
      {/* DOCKER label — top-left corner of border */}
      <text x="12" y="18" className="dof-t dof-xs" opacity="0.4" letterSpacing="1">DOCKER</text>

      {/* ── CLIENT ── y: 24–52 */}
      <g className="dof-a1">
        <rect x="70" y="24" width="100" height="28" rx="2"
          stroke="currentColor" strokeWidth="1.6" />
        <text x="120" y="37" textAnchor="middle" className="dof-t" fontWeight="700">CLIENT</text>
        <text x="120" y="47" textAnchor="middle" className="dof-t dof-sub" opacity="0.5">GraphQL · REST</text>
      </g>

      {/* stem down from CLIENT */}
      <line x1="120" y1="52" x2="120" y2="72"
        stroke="currentColor" strokeWidth="1.4" className="dof-dash" />

      {/* ── API GATEWAY ── y: 72–106 */}
      <g className="dof-a2">
        <rect x="24" y="72" width="192" height="34" rx="2"
          stroke="currentColor" strokeWidth="1.7" />
        <text x="120" y="87" textAnchor="middle" className="dof-t" fontWeight="700">API GATEWAY</text>
        <text x="120" y="100" textAnchor="middle" className="dof-t dof-sub" opacity="0.5">Gin · auth · routing · rate-limit</text>
      </g>

      {/* gRPC badge — positioned clearly below gateway, above fan bar */}
      <text x="121" y="118" textAnchor="middle" className="dof-t dof-sub"
        opacity="0.45" fontStyle="italic">gRPC</text>

      {/* stem down from gateway to fan bar */}
      <line x1="120" y1="106" x2="120" y2="124"
        stroke="currentColor" strokeWidth="1.3" className="dof-dash" />

      {/* horizontal fan bar */}
      <line x1={svcX[0]} y1="124" x2={svcX[4]} y2="124"
        stroke="currentColor" strokeWidth="1.1" />

      {/* vertical drops to each service */}
      {svcX.map((x, i) => (
        <line key={`drop-${x}`}
          x1={x} y1="124" x2={x} y2="140"
          stroke="currentColor" strokeWidth="1.1" className="dof-dash"
          style={{ animationDelay: `${i * 0.1}s` }} />
      ))}

      {/* ── 5 MICROSERVICES ── y: 140–174 */}
      {[
        { cx: svcX[0], label: 'USERS'     },
        { cx: svcX[1], label: 'PRODUCTS'  },
        { cx: svcX[2], label: 'CART'      },
        { cx: svcX[3], label: 'ORDERS'    },
        { cx: svcX[4], label: 'INVENTORY' },
      ].map(({ cx, label }, i) => (
        <g key={label} className="dof-a3">
          <rect x={cx - 8} y="140" width="40" height="32" rx="2"
            stroke="currentColor" strokeWidth="1.4" />
          <text x={cx + 12} y="155" textAnchor="middle" className="dof-t dof-xs" fontWeight="700">{label}</text>
          <text x={cx + 12} y="167" textAnchor="middle" className="dof-t dof-xs" opacity="0.5">Go</text>
        </g>
      ))}

      {/* lines down from each service */}
      {svcX.map(x => (
        <line key={`svc-down-${x}`}
          x1={x + 1} y1="174" x2={x + 1} y2="196"
          stroke="currentColor" strokeWidth="1.1" className="dof-dash" />
      ))}

      {/* converge — left 3 → Redis, right 2 → Postgres */}
      <line x1={svcX[0] + 1} y1="196" x2={svcX[2] + 1} y2="196"
        stroke="currentColor" strokeWidth="1" />
      <line x1={svcX[1] + 1} y1="196" x2={svcX[1] + 1} y2="212"
        stroke="currentColor" strokeWidth="1.2" className="dof-dash" />

      <line x1={svcX[3] + 1} y1="196" x2={svcX[4] + 1} y2="196"
        stroke="currentColor" strokeWidth="1" />
      <line x1={svcX[3] + 1} y1="196" x2={svcX[3] + 1} y2="212"
        stroke="currentColor" strokeWidth="1.2" className="dof-dash" />

      {/* ── REDIS ── y: 212–246 */}
      <g className="dof-a4">
        <rect x="14" y="212" width="100" height="34" rx="2"
          stroke="currentColor" strokeWidth="1.7" />
        <text x="64" y="227" textAnchor="middle" className="dof-t" fontWeight="700">REDIS</text>
        <text x="64" y="239" textAnchor="middle" className="dof-t dof-sub" opacity="0.5">cache · sessions</text>
      </g>

      {/* ── POSTGRESQL ── y: 212–246 */}
      <g className="dof-a4">
        <rect x="126" y="212" width="100" height="34" rx="2"
          stroke="currentColor" strokeWidth="1.7" />
        <text x="176" y="227" textAnchor="middle" className="dof-t" fontWeight="700">POSTGRESQL</text>
        <text x="176" y="239" textAnchor="middle" className="dof-t dof-sub" opacity="0.5">persistent store</text>
      </g>

      {/* ── Protobuf note ── */}
      <g className="dof-a5">
        <text x="14" y="264" className="dof-t dof-sub" opacity="0.4">Protocol Buffers · Protobuf</text>
      </g>

      {/* ── Tech stack legend ── bottom of Docker border */}
      <line x1="14" y1="278" x2="226" y2="278"
        stroke="currentColor" strokeWidth="0.6" opacity="0.15" />
      <text x="14" y="310" className="dof-t dof-xs" opacity="0.35">Go · Gin · gRPC · GraphQL . PostgreSQL · Redis · Docker</text>
    </svg>
  )
}
