import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { journey } from '../../data/journey'
import IllustrationWalking from '../../assets/illustrations/IllustrationWalking'
import './Journey.css'

export default function Journey() {
  const ref = useScrollAnimation()

  return (
    <section className="journey section" id="journey" ref={ref}>
      <div className="divider" />
      <div className="journey__inner container">

        <div className="journey__header reveal">
          <h2 className="t-display">
            MY<br />JOURNEY.
          </h2>
          <div className="journey__visual" aria-hidden="true">
            <IllustrationWalking className="journey__svg" />
          </div>
        </div>

        <ol className="journey__list" aria-label="Career timeline">
          {journey.map((entry, i) => (
            <li
              key={entry.year}
              className={`journey__entry reveal reveal-delay-${i + 1}`}
            >
              <span className="journey__year t-number">{entry.year}</span>
              <div className="journey__content">
                <p className="journey__title t-subheading">{entry.title}</p>
                <p className="journey__desc t-body">{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}
