import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'ABOUT',   href: '#about'   },
  { label: 'WORK',    href: '#work'    },
  { label: 'STACK',   href: '#stack'   },
  { label: 'JOURNEY', href: '#journey' },
  { label: 'LINKEDIN', href: 'https://in.linkedin.com/in/ashish-bagwan', external: true },
]

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      setMenuOpen(false)
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
        <div className="navbar__inner container">
          {/* Logo */}
          <a href="#" className="navbar__logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            ASHISH.
          </a>

          {/* Desktop nav */}
          <nav className="navbar__links" aria-label="Primary navigation">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="navbar__link underline-grow"
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={e => handleNavClick(e, link.href)}
              >
                {link.label}
                {link.external && <span className="navbar__ext" aria-hidden="true"> ↗</span>}
              </a>
            ))}

            {/* Theme toggle */}
            <button
              className="navbar__theme-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '☾' : '☼'}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="navbar__mobile-controls">
            <button
              className="navbar__theme-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '☾' : '☼'}
            </button>
            <button
              className="navbar__burger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className={`navbar__burger-line${menuOpen ? ' open' : ''}`} />
              <span className={`navbar__burger-line${menuOpen ? ' open' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu__nav" aria-label="Mobile navigation">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-menu__link"
              style={{ transitionDelay: `${i * 0.06}s` }}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              onClick={e => handleNavClick(e, link.href)}
            >
              {link.label}
              {link.external && <span aria-hidden="true"> ↗</span>}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
