import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import IllustrationBuilding from '../../assets/illustrations/IllustrationBuilding'
import './Mindset.css'

export default function Mindset() {
  const ref = useScrollAnimation()

  return (
    <section className="mindset section" ref={ref}>
      <div className="divider" />
      <div className="mindset__inner container">

        {/* Left: large statement */}
        <div className="mindset__text">
          <h2 className="mindset__statement reveal">
            <span className="mindset__line t-display-lg">BUILD</span>
            <span className="mindset__line t-display-lg mindset__line--accent">SIMPLE.</span>
          </h2>

          <h2 className="mindset__statement reveal reveal-delay-1">
            <span className="mindset__line t-display-lg">UNDERSTAND</span>
            <span className="mindset__line t-display-lg">THE SYSTEM.</span>
          </h2>

          <h2 className="mindset__statement reveal reveal-delay-2">
            <span className="mindset__line t-display-lg">THEN MAKE</span>
            <span className="mindset__line t-display-lg mindset__line--accent">IT BETTER.</span>
          </h2>

          <p className="mindset__body t-body reveal reveal-delay-3">
            I prefer understanding the problem first,
            building something simple, and improving it
            as I learn more.
          </p>
        </div>

        {/* Right: illustration */}
        <div className="mindset__visual reveal reveal-delay-2" aria-hidden="true">
          <IllustrationBuilding className="mindset__svg" />
        </div>

      </div>
    </section>
  )
}
