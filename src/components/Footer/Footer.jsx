import './Footer.css'

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

        {/* ── Centre: links ── */}
        <nav className="footer__nav" aria-label="Footer links">
          <a
            href="https://in.linkedin.com/in/ashish-bagwan"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://github.com/ashish-pushpad"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB <span aria-hidden="true">↗</span>
          </a>
        </nav>

        {/* ── Right: copyright ── */}
        <p className="footer__copy">© {year}</p>

      </div>
    </footer>
  )
}
