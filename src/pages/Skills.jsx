import PageHead from "../components/PageHead.jsx";
import { skillGroups, alsoWorking } from "../data.js";

export default function Skills() {
  return (
    <>
      <PageHead
        kicker="Skills"
        title="Technical toolkit"
        lead="Technologies across backend development, data, and machine learning."
      />
      <section>
        <div className="wrap">
          <div className="skill-cols">
            {skillGroups.map(({ title, description, items }) => (
              <article className="card skill-card" key={title}>
                <h3>{title}</h3>
                <p className="skill-card-description">{description}</p>
                <ul className="skill-tags">
                  {items.map((item) => (
                    <li className="skill-tag" key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          
        </div>
      </section>
    </>
  );
}
