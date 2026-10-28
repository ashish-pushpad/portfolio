import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './Experience.css'

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Walrus Solutions Private Limited',
    duration: 'February 2026 – March 2026',
    mode: 'On-site',
    points: [
      'Built report modules for a live university platform serving 1,000+ users, including pagination and Excel export for large datasets.',
      'Developed responsive interfaces using React.js and Material UI and integrated REST APIs into a production codebase.',
      'Independently built a canvas-based examination application with stylus input and PDF generation.',
      'Developed an examination registration system with authentication, Paytm payment integration, an admin dashboard, and CSV upload functionality.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'WebSeeder Technologies Private Limited',
    duration: 'October 2025 – December 2025',
    mode: 'Hybrid',
    points: [
      'Developed RESTful APIs for a food-ordering platform covering orders, restaurant management, and delivery partner registration.',
      'Implemented CRUD operations and backend logic for users, menus, and orders.',
      'Designed and documented APIs for frontend integration.',
      'Delivered assigned features within daily deadlines.',
    ],
  },
]

export default function Experience() {
  const ref = useScrollAnimation()

  return (
    <section className="experience section" id="experience" ref={ref}>
      <div className="divider" />
      <div className="container">
        <div className="experience__header reveal">
          <h2 className="experience__heading t-display">
            EXPERIENCE.
          </h2>
        </div>

        <div className="experience__list">
          {experiences.map((entry, i) => (
            <article
              key={entry.company}
              className={`experience__item reveal reveal-delay-${Math.min(i + 1, 5)}`}
            >
              <div className="experience__meta">
                <p className="experience__role t-subheading">{entry.role}</p>
                <p className="experience__company t-label">{entry.company}</p>
                <p className="experience__duration t-body">
                  {entry.duration} · {entry.mode}
                </p>
              </div>

              <ul className="experience__points">
                {entry.points.map((point) => (
                  <li key={point} className="experience__point t-body">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
