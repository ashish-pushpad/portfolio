import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="divider" />
      <div className="footer__inner container">
        <div className="footer__left">
          <p className="footer__name t-label">ASHISH BAGWAN.</p>
          <p className="footer__role t-label">FULL-STACK DEVELOPER.</p>
          <p className="footer__copy t-label">© {year}</p>
        </div>

        <nav className="footer__links" aria-label="Footer navigation">
          <a
            href="https://in.linkedin.com/in/ashish-bagwan"
            className="footer__link t-label underline-grow"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://github.com/ashish-pushpad"
            className="footer__link t-label underline-grow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (link coming soon)"
          >
            GITHUB <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </footer>
  )
}
