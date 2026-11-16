import PageHead from "../components/PageHead.jsx";
import { tenets } from "../data.js";

export default function About() {
  return (
    <>
      <section>
        <div className="wrap about-layout">
          <div className="profile-sidebar">
            <img className="profile-photo" src="/profile.jpg" alt="Sayondeep" />
            <div className="profile-details">
              <h2>
                Sayondeep Daripa
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.5 20 6v5.5c0 4.7-3.3 8-8 10-4.7-2-8-5.3-8-10V6l8-3.5Z" />
                  <path d="m8.5 12 2.3 2.3 4.8-4.8" />
                </svg>
              </h2>
              <p>
                Aspiring Backend Developer | Java | Spring Boot | REST API Development | DSA &amp; Problem Solving | Machine Learning Experience
              </p>
            </div>
          </div>
          <div className="prose">
            <p>
              I'm a Computer Science student passionate about Backend Engineering, <strong>Distributed Systems</strong>, and <strong>AI/ML</strong>. I enjoy designing backend architectures, building scalable REST APIs, and understanding what makes software reliable, efficient, and secure.
            </p>
            <p>
              My primary technical stack revolves around <strong>Java</strong>, <strong>Spring Boot</strong>, PostgreSQL, and Python. I enjoy exploring system design concepts, microservices architecture, database optimization, API security, and the engineering principles behind scalable applications.
            </p>
            <p>
              Beyond development, I'm passionate about problem-solving and Data Structures &amp; Algorithms, constantly challenging myself through LeetCode. I also enjoy exploring Machine Learning and building intelligent systems that solve real-world problems.
            </p>
            <p>
              I believe great engineering isn't just about writing code — it's about understanding the systems behind it.
            </p>
            <div className="chips about-tech-stack" aria-label="Technology stack">
              <span className="chip">JAVA</span>
              <span className="chip">SPRING BOOT</span>
              <span className="chip">POSTGRESQL</span>
              <span className="chip">PYTHON</span>
              <span className="chip">MACHINE LEARNING</span>
            </div>
            <h2 style={{ marginTop: 40, fontSize: "1.3rem" }}>Core engineering tenets</h2>
            <div className="tenets">
              {tenets.map(({ title, details }) => (
                <div className="card" key={title}>
                  <h3>{title}</h3>
                  <p>{details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
