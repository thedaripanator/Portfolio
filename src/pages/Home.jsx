import CodeWindow from "../components/CodeWindow.jsx";
import { heroCode } from "../data.js";

export default function Home() {
  return (
    <section className="hero">
      <div className="wrap grid">
        <div className="hero-copy reveal">
          <p className="hero-prompt">$ whoami</p>
          <h1>Sayondeep Daripa</h1>
          <p className="hero-role">Aspiring software developer.</p>
          <p className="lead">
            I build reliable backend applications, design REST APIs and solve challenging engineering problems with Java and Spring Boot.
          </p>
        </div>
        <CodeWindow title="Sayondeep.java" html={heroCode} style={{ animationDelay: ".15s" }}>
          <span className="cursor" />
        </CodeWindow>
      </div>
    </section>
  );
}
