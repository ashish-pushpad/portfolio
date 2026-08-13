import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './LinkedIn.css'

export default function LinkedIn() {
  const ref = useScrollAnimation()

  return (
    <section className="linkedin section" ref={ref}>
      <div className="divider" />
      <div className="linkedin__inner container">
        <div className="linkedin__text">
          <h2 className="linkedin__heading t-display reveal">
            WANT TO<br />KNOW MORE?
          </h2>
          <p className="t-body reveal reveal-delay-1">
            Find me on LinkedIn.
          </p>
          <a
            href="https://in.linkedin.com/in/ashish-bagwan"
            className="linkedin__cta reveal reveal-delay-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with Ashish on LinkedIn"
          >
            CONNECT WITH ME <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Decorative text block */}
        <div className="linkedin__deco reveal reveal-delay-3" aria-hidden="true">
          <span className="linkedin__deco-text">LI</span>
        </div>
      </div>
    </section>
  )
}
