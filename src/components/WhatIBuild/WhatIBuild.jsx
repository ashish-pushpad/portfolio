import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './WhatIBuild.css'

const items = [
  {
    number: '01',
    title: 'WEB\nAPPLICATIONS',
    description: 'Full-stack web apps from UI to database — fast, accessible and maintainable.',
  },
  {
    number: '02',
    title: 'BACKEND\nSYSTEMS',
    description: 'Server-side logic, APIs and data layers built to be reliable and easy to reason about.',
  },
  {
    number: '03',
    title: 'APIs &\nMICROSERVICES',
    description: 'REST and gRPC services that communicate cleanly across distributed systems.',
  },
  {
    number: '04',
    title: 'TECHNICAL\nEXPERIMENTS',
    description: 'Side projects exploring new tools, protocols and ideas worth understanding.',
  },
]

export default function WhatIBuild() {
  const ref = useScrollAnimation()

  return (
    <section className="whatibuild section" ref={ref}>
      <div className="divider" />
      <div className="container">
        <h2 className="whatibuild__heading t-display reveal">
          WHAT<br />I BUILD.
        </h2>

        <div className="whatibuild__list">
          {items.map((item, i) => (
            <div
              key={item.number}
              className={`whatibuild__item reveal reveal-delay-${i + 1}`}
            >
              <span className="whatibuild__number t-number">{item.number}</span>
              <div className="whatibuild__content">
                <h3 className="whatibuild__title t-heading">
                  {item.title.split('\n').map((line, j) => (
                    <span key={j}>{line}<br /></span>
                  ))}
                </h3>
                <p className="whatibuild__desc t-body">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
