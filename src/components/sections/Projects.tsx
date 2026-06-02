import { projects } from "../../data/portfolio";
import { useInView } from "../../hooks/useInView";
import SectionLabel from "../ui/SectionLabel";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  const { ref, inView } = useInView();
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <SectionLabel>Proyectos</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginTop: "16px",
              marginBottom: "48px",
            }}
          >
            Lo que he construido
          </h2>

          {/* Featured project */}
          {featured && (
            <div style={{ marginBottom: "24px" }}>
              <ProjectCard project={featured} featured={true} />
            </div>
          )}

          {/* Rest grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {rest.map((project, i) => (
              <div
                key={project.id}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(24px)",
                  transition: `all 0.6s ease ${0.2 + i * 0.1}s`,
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}