import { useState, useEffect } from "react";
import { personal } from "../../data/portfolio";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#tech", label: "Tecnologías" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 24px",
        height: "68px",
        display: "flex",
        alignItems: "center",
        background: scrolled ? "rgba(5,7,9,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <nav
        style={{
          width: "100%",
          maxWidth: "1140px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "18px",
            color: "var(--text)",
            letterSpacing: "-0.02em",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: "8px",
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#050709",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            {personal.initials}
          </span>
          <span style={{ color: "var(--text-2)", fontWeight: 400, fontSize: "14px" }}>
            {personal.shortName}
          </span>
        </a>

        {/* Desktop nav links */}
        <div
          style={{
            display: "flex",
            gap: "2px",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "var(--text-2)",
                padding: "6px 14px",
                borderRadius: "6px",
                transition: "var(--transition)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.background = "var(--surface)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-2)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {l.label}
            </a>
          ))}

          <a
            href={`mailto:${personal.contact.email}`}
            style={{
              marginLeft: "8px",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "13px",
              color: "#050709",
              background: "var(--accent)",
              padding: "8px 16px",
              borderRadius: "6px",
              transition: "var(--transition)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.filter = "")}
          >
            Contactar
          </a>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}