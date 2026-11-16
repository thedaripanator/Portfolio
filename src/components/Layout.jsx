import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Find Me Online" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu and scroll to top on every route change
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <Link className="brand" to="/">
            <b>&lt;/&gt;</b> Sayondeep <span className="tag">Aspiring software developer</span>
          </Link>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            Menu
          </button>
          <nav className={`nav${open ? " open" : ""}`} aria-label="Main">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <a className="btn-resume" href="/resume.pdf" download>
            Download resume
          </a>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <span>© 2026 sayondeep Daripa</span>
          <span className="status">
            <i className="dot" /> Systems operational · Spring Boot 3.2 · Java 21 LTS
          </span>
        </div>
      </footer>
    </>
  );
}
