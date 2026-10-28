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
            aria-label="Visit Ashish on LinkedIn"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="footer__icon">
              <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.5 9.87h2.92v7.63H5.5V9.87Zm4.84 0h2.8v1.04h.04c.39-.74 1.35-1.52 2.78-1.52 2.97 0 3.52 1.95 3.52 4.48v3.63h-2.92v-3.4c0-1.02-.02-2.33-1.42-2.33-1.42 0-1.64 1.11-1.64 2.25v3.48H10.34V9.87Z" fill="currentColor"/>
            </svg>
          </a>
          <a
            href="https://github.com/ashish-pushpad"
            className="footer__link t-label underline-grow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ashish on GitHub"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="footer__icon">
              <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.68.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.35-3.37-1.35-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.54 1.05 1.54 1.05.9 1.56 2.36 1.11 2.93.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.78 1.07a9.42 9.42 0 0 1 5.07 0c1.93-1.35 2.77-1.07 2.77-1.07.55 1.42.2 2.47.1 2.73.64.72 1.03 1.64 1.03 2.76 0 3.95-2.35 4.81-4.58 5.07.36.31.68.92.68 1.86v2.77c0 .27.18.6.69.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" fill="currentColor"/>
            </svg>
          </a>
        </nav>
      </div>
      <div className="footer__credit container">
        <p className="footer__design-credit t-label">
          Inspired by the design of <a href="https://walkover.in/" target="_blank" rel="noopener noreferrer">Walkover</a>
        </p>
      </div>
    </footer>
  )
}
