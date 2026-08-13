import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { projects } from '../../data/projects'
import DiagramMicroservices from '../../assets/illustrations/DiagramMicroservices'
import DiagramGateway from '../../assets/illustrations/DiagramGateway'
import DiagramPipeline from '../../assets/illustrations/DiagramPipeline'
import './Projects.css'

const diagrams = {
  microservices: DiagramMicroservices,
  gateway: DiagramGateway,
  pipeline: DiagramPipeline,
}

export default function Projects() {
  const ref = useScrollAnimation()

  return (
    <section className="projects section" id="work" ref={ref}>
      <div className="divider" />
      <div className="container">
        <h2 className="projects__heading t-display reveal">
          THINGS<br />I'VE BUILT.
        </h2>

        <div className="projects__list">
          {projects.map((project, i) => {
            const Diagram = diagrams[project.diagramType]
            const isEven = i % 2 === 0
            return (
              <article
                key={project.number}
                className={`project-item reveal reveal-delay-${Math.min(i + 1, 3)} ${isEven ? '' : 'project-item--flip'}`}
              >
                {/* Text side */}
                <div className="project-item__text">
                  <span className="project-item__number t-number">{project.number}</span>
                  <h3 className="project-item__title t-heading">
                    {project.title.split('\n').map((line, j) => (
                      <span key={j}>{line}<br /></span>
                    ))}
                  </h3>

                  <p className="project-item__tech t-label">
                    {project.technologies.join(' · ')}
                  </p>

                  <p className="project-item__desc t-body">
                    {project.description}
                  </p>

                  <div className="project-item__links">
                    {project.github && (
                      <a
                        href={project.github}
                        className="btn btn-ghost"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.shortTitle} on GitHub`}
                      >
                        GITHUB <span aria-hidden="true">↗</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.shortTitle}`}
                      >
                        LIVE <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Diagram side */}
                <div className="project-item__diagram" aria-hidden="true">
                  {Diagram && <Diagram className="project-item__svg" />}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
