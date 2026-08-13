import { useEffect, useRef } from 'react'
import IllustrationCoder from '../../assets/illustrations/IllustrationCoder'
import './Hero.css'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Stagger children in on mount
    const items = el.querySelectorAll('.hero-reveal')
    items.forEach((item, i) => {
      item.style.transitionDelay = `${i * 0.12}s`
      requestAnimationFrame(() => item.classList.add('visible'))
    })
  }, [])

  const scrollToWork = (e) => {
    e.preventDefault()
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" ref={ref} aria-label="Introduction">
      <div className="hero__inner container">
        {/* Left: typography */}
        <div className="hero__text">
          <p className="hero__hello t-label reveal hero-reveal">HELLO,</p>

          <h1 className="hero__name t-display-lg reveal hero-reveal">
            I'M<br />ASHISH.
          </h1>

          <p className="hero__tagline t-display reveal hero-reveal">
            I BUILD<br />SOFTWARE.
          </p>

          <p className="hero__sub t-body reveal hero-reveal">
            Full-Stack Developer building web applications,<br className="hero__br" />
            backend systems and things I find interesting.
          </p>

          <div className="hero__actions reveal hero-reveal">
            <a href="#work" className="btn btn-primary" onClick={scrollToWork}>
              VIEW MY WORK <span aria-hidden="true">→</span>
            </a>
            <a
              href="https://in.linkedin.com/in/ashish-bagwan"
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINKEDIN <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Right: illustration */}
        <div className="hero__visual reveal hero-reveal" aria-hidden="true">
          <IllustrationCoder className="hero__svg float" />
        </div>
      </div>

    
    </section>
  )
}
