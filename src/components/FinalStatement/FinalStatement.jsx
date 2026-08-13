import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './FinalStatement.css'

export default function FinalStatement() {
  const ref = useScrollAnimation()

  return (
    <section className="final section" ref={ref}>
      <div className="divider" />
      <div className="final__inner container">
        <div className="final__words">
          <h2 className="final__line t-display-lg reveal">
            LET'S BUILD
          </h2>
          <h2 className="final__line t-display-lg reveal reveal-delay-1">
            SOMETHING
          </h2>
          <h2 className="final__line final__line--accent t-display-lg reveal reveal-delay-2">
            USEFUL.
          </h2>
        </div>

        <div className="final__sub reveal reveal-delay-3">
          <p className="t-body">
            Open to interesting projects, collaborations
            and conversations worth having.
          </p>
          <a
            href="https://in.linkedin.com/in/ashish-bagwan"
            className="btn btn-primary final__btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            SAY HELLO <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
