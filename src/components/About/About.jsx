import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import IllustrationThinking from '../../assets/illustrations/IllustrationThinking'
import './About.css'

export default function About() {
  const ref = useScrollAnimation()

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="divider" />
      <div className="about__inner container">

        {/* Left: large typography statement */}
        <div className="about__text">
          <h2 className="about__headline t-display reveal">
            I LIKE<br />
            UNDERSTANDING<br />
            HOW THINGS<br />
            WORK.
          </h2>

          <div className="about__body reveal reveal-delay-2">
            <p className="t-body">
              I enjoy building software from the interface
              all the way down to the backend.
            </p>
            <p className="t-body">
              I like understanding how the pieces connect,
              how systems communicate and how small ideas
              turn into working software.
            </p>
            <p className="t-body">
              Based in Indore, Madhya Pradesh, India.
            </p>
          </div>

          <p className="about__location t-label reveal reveal-delay-3">
            INDORE · INDIA
          </p>
        </div>

        {/* Right: illustration */}
        <div className="about__visual reveal reveal-delay-2" aria-hidden="true">
          <IllustrationThinking className="about__svg" />
        </div>

      </div>
    </section>
  )
}
