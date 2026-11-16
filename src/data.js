export const explore = [
  { to: "/about", title: "About me", text: "How I think about architecture, reliability and algorithms.", cta: "Read more" },
  { to: "/skills", title: "Technical arsenal", text: "Languages, frameworks, data stores and DevOps tooling.", cta: "See the stack" },
  { to: "/projects", title: "Projects", text: "A job scheduler, a payments gateway and a JVM profiler.", cta: "View projects" },
  { to: "/experience", title: "Experience", text: "Internship, open-source work and competition results.", cta: "See the timeline" },
  { to: "/contact", title: "Contact", text: "Hiring for a backend role? Send a message.", cta: "Get in touch" },
];

export const heroCode = `<span class="k">class</span> <span class="t">Sayondeep</span> {
    <span class="t">String</span> role = <span class="s">"Backend Developer"</span>;
    <span class="t">String</span> focus = <span class="s">"Scalable Backend Systems"</span>;

    <span class="t">String</span>[] techStack = {
        <span class="s">"Java"</span>,
        <span class="s">"Spring Boot"</span>,
        <span class="s">"Spring Security"</span>,
        <span class="s">"REST APIs"</span>,
        <span class="s">"MySQL"</span>
    };

    <span class="t">String</span>[] interests = {
        <span class="s">"DSA"</span>,
        <span class="s">"System Design"</span>,
        <span class="s">"Machine Learning"</span>,
        <span class="s">"Microservices"</span>
    };
}`;

export const tenets = [
  { title: "Backend", details: "Java · Spring Boot · REST APIs" },
  { title: "AI / ML", details: "Python · ML · Neural Networks" },
  { title: "CS Fundamentals", details: "DSA · DBMS · System Design" },
];

export const facts = [
  ["Role", "Java Backend Engineer"],
  ["Focus", "Distributed systems, APIs"],
  ["Primary stack", "Java 21, Spring Boot, Kafka, PostgreSQL"],
  ["Education", "B.Tech CSE, State University of Technology"],
  ["Location", "San Francisco, CA"],
];

export const skillGroups = [
  {
    title: "Programming Languages",
    description: "Languages and query tools for application development.",
    items: ["Java", "Python", "SQL", "C"],
  },
  {
    title: "Backend Engineering",
    description: "Frameworks and patterns for server-side applications.",
    items: ["Spring Boot", "Spring Data JPA & Hibernate", "REST APIs", "Microservices", "Spring Security"],
  },
  {
    title: "Databases & AI/ML",
    description: "Data platforms and libraries for machine learning.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Scikit-learn", "TensorFlow"],
  },
  {
    title: "Tools & Infrastructure",
    description: "Tools for version control, development, and infrastructure.",
    items: ["Git & GitHub", "Docker", "Maven", "Postman", "Linux"," Intellij IDEA", "VS Code"],
  },
];

export const alsoWorking = [
  "Apache Kafka", "Spring Cloud", "JWT / OAuth2", "Prometheus",
  "Grafana", "ROS 2", "Gemini API", "Distributed Tracing",
];

export const projects = [
  {
    title: "IPL Win Predictor",
    description: "An interactive machine learning application designed to predict IPL match outcomes using historical cricket data and match-specific parameters.",
    github: "https://github.com/thedaripanator/IplWinPredictor",
    liveDemo: "https://ipl-win-predictor-0ewj.onrender.com/",
    liveStatus: "LIVE",
    previewLinks: true,
    features: [
      "Predict the winning team based on match inputs.",
      "Analyze team performance and historical match statistics.",
      "Evaluate the influence of venue and match conditions.",
      "Present prediction results through an interactive interface.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: "Inventory Management System – Backend",
    description: "A RESTful backend application built with Java and Spring Boot to manage inventory operations, product categories, and billing workflows. Its layered architecture separates controllers, services, repositories, and database entities for modularity and scalability.",
    github: "https://github.com/thedaripanator/InventoryBackend",
    githubLabel: "GitHub Repository",
    liveDemo: "https://v0-daripa-electrical-frontend.vercel.app/",
    liveDemoLabel: "Live demo",
    liveStatus: "LIVE",
    previewLinks: true,
    architecture: ["React Frontend", "REST API", "Controller", "Service", "Repository", "PostgreSQL"],
    features: ["Developed REST APIs for product, category, and billing management.Implemented PostgreSQL persistence using Spring Data JPA and Hibernate.Followed a layered architecture (Controller, Service, Repository, Model).Integrated frontend-backend communication through REST endpoints.Deployed the Spring Boot backend on Render with Supabase PostgreSQL.",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL"],
  },
];

export const digitalPresence = [
  {
    category: "Professional Networks",
    profiles: [
      {
        platform: "GitHub",
        username: "thedaripanator",
        description: "Repositories, projects, and development work.",
        url: "https://github.com/thedaripanator",
        mark: "GH",
      },
      {
        platform: "LinkedIn",
        username: "sayondeep-daripa-158580334",
        description: "Professional profile, experience, and network.",
        url: "https://www.linkedin.com/in/sayondeep-daripa-158580334/",
        mark: "in",
      },
    ],
  },
  {
    category: "Coding & Problem Solving",
    profiles: [
      {
        platform: "LeetCode",
        username: "PrimeLogic",
        description: "Coding practice and problem-solving profile.",
        url: "https://leetcode.com/u/PrimeLogic/",
        mark: "LC",
      },
      {
        platform: "Codolio",
        username: "thedaripanator",
        description: "Coding profile and problem-solving activity.",
        url: "https://codolio.com/profile/thedaripanator",
        mark: "C",
      },
    ],
  },
];

export const jobs = [
  {
    when: "June 2024 – Present · San Francisco, CA (Hybrid)",
    role: "Backend Developer Intern",
    org: "CloudScale Solutions",
    points: [
      "Architected and containerized 6 mission-critical REST microservices using Spring Boot 3 and PostgreSQL for enterprise client onboarding.",
      "Optimized slow-running analytical SQL queries and introduced a distributed Redis cache, slicing average read latency by 42%.",
      "Authored end-to-end CI/CD workflows via GitHub Actions and Maven profiles to achieve automated 88% unit and integration test coverage.",
    ],
  },
  {
    when: "2023 – 2024",
    role: "Technical Contributor",
    org: "Open-Source Spring Ecosystem Tools",
    points: [
      "Contributed patch fixes, unit tests and documentation enhancements to developer-facing Spring Boot starters and diagnostic utilities. Reviewed and validated community pull requests focused on thread-safety and virtual thread integration.",
    ],
  },
];

export const achievements = [
  { badge: "LeetCode", title: "Knight Badge", text: "Top 4.8% worldwide rating. Solved 500+ algorithm problems spanning Graph Theory, DP and Trie implementations." },
  { badge: "Hackathon", title: "Backend Finalist", text: "Awarded Best Backend Architecture at University Hackathon for designing an automated real-time dispatch API handling concurrent telemetry pings." },
  { badge: "Open source", title: "Spring Contributor", text: "Merged patches to Spring ecosystem tooling used by thousands of developers." },
];
