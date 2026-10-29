import './Footer.css'

/* ── Inline SVG icons — monochrome, stroke-based to match IBM Plex Mono feel ── */

function IconLinkedIn() {
  return (
    <svg className="footer__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <line x1="7" y1="10" x2="7" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="7" cy="7" r="1.2" fill="currentColor" />
      <path
        d="M11 10v7M11 13c0-1.657 1.12-3 2.5-3S16 11.343 16 13v4"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
      />
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg className="footer__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.5 11.5 0 0 0-6 0C6.8 2.3 5.8 2.6 5.8 2.6a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.4 9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="divider" />

      <div className="footer__inner container">

        {/* ── Left: identity ── */}
        <div className="footer__identity">
          <p className="footer__name">ASHISH BAGWAN.</p>
          <p className="footer__role">FULL-STACK DEVELOPER.</p>
        </div>

        {/* ── Centre: icon links ── */}
        <nav className="footer__nav" aria-label="Social links">
          <a
            href="https://in.linkedin.com/in/ashish-bagwan"
            className="footer__icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <IconLinkedIn />
          </a>
          <a
            href="https://github.com/ashish-pushpad"
            className="footer__icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <IconGitHub />
          </a>
        </nav>

      </div>

      {/* ── Design credit ── */}
      <div className="footer__credit container">
        <p className="footer__credit-text">
          Design inspired by{' '}
          <a
            href="https://walkover.in/"
            className="footer__credit-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            walkover.in
          </a>
        </p>
          {/* ── Right: copyright ── */}
        <p className="footer__copy">© {year}</p>
      </div>
    </footer>
  )
}
