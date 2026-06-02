import { useState } from "react";
import { technologies } from "../../data/portfolio";
import { useInView } from "../../hooks/useInView";
import SectionLabel from "../ui/SectionLabel";

const categories = [
  { key: "backend", label: "Backend", icon: "⬡", color: "var(--accent)" },
  { key: "frontend", label: "Frontend", icon: "◈", color: "var(--blue)" },
  { key: "data", label: "Data & Analytics", icon: "◎", color: "#F59E0B" },
  { key: "otros", label: "Otros & Cloud", icon: "◇", color: "#EC4899" },
];

const TechBadgeWithLevel = ({ name, level }) => {
  const levelValues = {
    advanced: 100,
    intermediate: 70,
    beginner: 40,
  };

  const levelColors = {
    advanced: { bg: "rgba(0,212,170,0.08)", color: "var(--accent)", border: "rgba(0,212,170,0.2)" },
    intermediate: { bg: "rgba(79,142,247,0.08)", color: "var(--blue)", border: "rgba(79,142,247,0.2)" },
    beginner: { bg: "rgba(90,100,128,0.08)", color: "var(--text-3)", border: "var(--border)" },
  };

  const c = levelColors[level] || levelColors.intermediate;
  const progressValue = levelValues[level];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        padding: "10px 12px",
        background: c.bg,
        border: `1px solid ${c.border}`,
        borderRadius: "8px",
        transition: "all 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = c.bg.replace("0.08", "0.15");
        e.currentTarget.style.borderColor = c.color;
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = `0 8px 16px ${c.color}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = c.bg;
        e.currentTarget.style.borderColor = c.border;
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          fontWeight: 500,
          color: c.color,
          letterSpacing: "0.04em",
        }}
      >
        {name}
      </div>
      <div
        style={{
          width: "100%",
          height: "4px",
          background: "rgba(90,100,128,0.2)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progressValue}%`,
            height: "100%",
            background: `linear-gradient(90deg, ${c.color}, ${c.color}80)`,
            borderRadius: "2px",
            transition: "width 0.5s ease",
          }}
        />
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--text-3)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        {level === "advanced" ? "Intermedio" : level === "intermediate" ? "Básico" : "Bajo"}
      </div>
    </div>
  );
};

const TechCategory = ({ category, technologies: techs, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false);

  const frontendKeyTechs = [
    { name: "TypeScript", level: "intermediate" },
    { name: "Tailwind", level: "intermediate" },
  ];

  const isFrontend = category.key === "frontend";
  const allTechs = isFrontend ? [...techs, ...frontendKeyTechs] : techs;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: "var(--surface)",
        border: `1px solid ${isHovered ? category.color + "55" : "var(--border)"}`,
        borderRadius: "var(--radius)",
        padding: "28px",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
        transition: `all 0.6s ease ${index * 0.1}s`,
        position: "relative",
        overflow: "hidden",
        boxShadow: isHovered ? `0 12px 32px ${category.color}18` : "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      {/* Background glow effect */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-50%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${category.color}15 0%, transparent 70%)`,
          filter: "blur(40px)",
          pointerEvents: "none",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: `linear-gradient(90deg, ${category.color} 0%, transparent 100%)`,
          opacity: isHovered ? 1 : 0.3,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "10px",
            background: `${category.color}15`,
            border: `1.5px solid ${category.color}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            color: category.color,
            transition: "all 0.3s ease",
            transform: isHovered ? "scale(1.1) rotate(10deg)" : "scale(1) rotate(0deg)",
          }}
        >
          {category.icon}
        </div>
        <div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "16px",
              color: "var(--text)",
              marginBottom: "2px",
            }}
          >
            {category.label}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-3)",
              letterSpacing: "0.08em",
            }}
          >
            {allTechs.length} habilidades
          </p>
        </div>
      </div>

      {/* Tech badges grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "10px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {allTechs.map((tech, i) => (
          <div
            key={tech.name}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(10px)",
              transition: `all 0.5s ease ${index * 0.1 + i * 0.05}s`,
            }}
          >
            <TechBadgeWithLevel name={tech.name} level={tech.level} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Tech() {
  const { ref, inView } = useInView();

  const advancedCount = Object.values(technologies).flat().filter(t => t.level === "advanced").length;
  const totalCount = Object.values(technologies).flat().length;

  return (
    <section id="tech" style={{ padding: "100px 24px", background: "var(--bg-2)" }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "56px",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              <SectionLabel>Stack tecnológico</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  marginTop: "16px",
                }}
              >
                Herramientas & tecnologías
              </h2>
            </div>

            {/* Legend */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-3)",
                flexWrap: "wrap",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(10px)",
                transition: "all 0.7s ease 0.3s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: 12, height: 12, borderRadius: "2px", background: "var(--accent)" }} />
                <span>Intermedio (100%)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: 12, height: 12, borderRadius: "2px", background: "var(--blue)" }} />
                <span>Básico (70%)</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: 12, height: 12, borderRadius: "2px", background: "var(--text-3)" }} />
                <span>Bajo (40%)</span>
              </div>
            </div>
          </div>

          {/* Grid de categorías */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {categories.map((cat, ci) => (
              <TechCategory
                key={cat.key}
                category={cat}
                technologies={technologies[cat.key]}
                index={ci}
                inView={inView}
              />
            ))}
          </div>

          {/* Stats section */}
          <div
            style={{
              marginTop: "60px",
              padding: "32px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(20px)",
              transition: "all 0.7s ease 0.4s",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "32px",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "32px",
                    fontWeight: 800,
                    color: "var(--accent)",
                    marginBottom: "8px",
                  }}
                >
                  {totalCount}+
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--text-2)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Tecnologías
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "32px",
                    fontWeight: 800,
                    color: "var(--blue)",
                    marginBottom: "8px",
                  }}
                >
                  {advancedCount}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--text-2)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Intermedias
                </div>
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "32px",
                    fontWeight: 800,
                    color: "#F59E0B",
                    marginBottom: "8px",
                  }}
                >
                  4
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--text-2)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Categorías
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #tech > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}