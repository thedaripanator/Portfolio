import PageHead from "../components/PageHead.jsx";
import { digitalPresence } from "../data.js";

export default function Contact() {
  return (
    <>
      <PageHead
        kicker="CONNECT / DIGITAL PRESENCE"
        title="Find me across the web."
        lead="Explore my work, coding journey, professional network, and contributions across different platforms."
      />
      <section>
        <div className="wrap">
          <div className="presence-grid">
            {digitalPresence.flatMap(({ category, profiles }) =>
              profiles.map(({ platform, username, description, url, mark }) => (
                <a
                  className="presence-card"
                  href={url}
                  key={`${category}-${platform}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${platform} profile for ${username} in a new tab`}
                >
                  <div className="presence-card-heading">
                    <span className="presence-mark" aria-hidden="true">{mark}</span>
                    <span className="presence-arrow" aria-hidden="true">↗</span>
                  </div>
                  <p className="presence-category">{category}</p>
                  <h2>{platform}</h2>
                  <p className="presence-username">{username}</p>
                  <p className="presence-description">{description}</p>
                </a>
              )),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
