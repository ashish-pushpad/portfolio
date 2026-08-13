import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { skills } from '../../data/skills'
import './Stack.css'

export default function Stack() {
  const ref = useScrollAnimation()

  return (
    <section className="stack section" id="stack" ref={ref}>
      <div className="divider" />
      <div className="container">
        <h2 className="stack__heading t-display reveal">
          THE TOOLS<br />I USE.
        </h2>

        <ul className="stack__list" aria-label="Technologies">
          {skills.map((skill, i) => (
            <li
              key={skill.name}
              className={`stack__item reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <span className="stack__dot" aria-hidden="true" />
              <span className="stack__name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
