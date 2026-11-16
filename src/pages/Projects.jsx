import { projects } from "../data.js";

export default function Projects() {
  return (
    <section>
      <div className="wrap project-grid">
        {projects.map(({ title, description, github, liveDemo, features, stack, architecture, highlightedStack, githubLabel, liveDemoLabel, liveDemoTitle, liveStatus, previewLinks }) => (
          <article className={`card project-details${architecture ? " project-details-backend" : ""}`} key={title}>
            <details className="project-disclosure">
              <summary>
                <div>
                  <h2 className="project-title">
                    {title}
                    {liveStatus && (
                      <span className="project-live-status">
                        <i aria-hidden="true" />
                        {liveStatus}
                      </span>
                    )}
                  </h2>
                  <p className="project-description">{description}</p>
                  <div className="chips project-summary-stack" aria-label="Technology stack">
                    {stack.map((technology) => (
                      <span className={`chip${highlightedStack?.includes(technology) ? " backend-chip-primary" : ""}`} key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
                <span className="project-summary-icon" aria-hidden="true" />
              </summary>
              <div className="project-card-content">
                {architecture && (
                  <div className="architecture-flow" aria-label={`Architecture: ${architecture.join(" to ")}`}>
                    {architecture.map((layer, index) => (
                      <span className="architecture-step" key={layer}>
                        {index > 0 && <span className="architecture-arrow" aria-hidden="true">→</span>}
                        <span className="architecture-node">{layer}</span>
                      </span>
                    ))}
                  </div>
                )}
                <h3>Key Features</h3>
                <ul className="project-features">
                  {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a className="btn" href={github} target="_blank" rel="noreferrer">{githubLabel ?? "GitHub"}</a>
                  <a className="btn" href={liveDemo} target="_blank" rel="noreferrer" title={liveDemoTitle}>{liveDemoLabel ?? "Live demo"}</a>
                </div>
                {liveDemoTitle && <p className="project-link-note">{liveDemoTitle}</p>}
              </div>
            </details>
            {previewLinks && (
              <div className="project-preview-links" aria-label="Project links">
                <a className="btn" href={github} target="_blank" rel="noreferrer">{githubLabel ?? "GitHub"}</a>
                <a className="btn" href={liveDemo} target="_blank" rel="noreferrer" title={liveDemoTitle}>{liveDemoLabel ?? "Live demo"}</a>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
