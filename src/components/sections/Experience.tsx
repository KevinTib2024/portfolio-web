import { useState } from "react";
import { experience } from "../../data/portfolio";
import { useInView } from "../../hooks/useInView";
import SectionLabel from "../ui/SectionLabel";

function ExperienceCard({ item, index, inView }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        gap: "32px",
        marginBottom: "40px",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateX(-20px)",
        transition: `all 0.6s ease ${index * 0.15}s`,
      }}
    >
      {/* Dot mejorado */}
      <div style={{ flexShrink: 0, paddingTop: "8px" }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "var(--surface)",
            border: "2.5px solid var(--accent)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontSize: "16px",
            color: "var(--accent)",
            transition: "all 0.3s ease",
            transform: isHovered ? "scale(1.2)" : "scale(1)",
            boxShadow: isHovered ? "0 0 20px rgba(0,212,170,0.4)" : "none",
            cursor: "pointer",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {item.type === "education" ? "◎" : "⬡"}
        </div>
      </div>

      {/* Card mejorada */}
      <div
        style={{
          background: "var(--surface)",
          border: `1px solid ${isHovered ? "var(--accent)" : "var(--border)"}`,
          borderRadius: "var(--radius)",
          padding: "24px 28px",
          flex: 1,
          transition: "all 0.3s ease",
          transform: isHovered ? "translateY(-4px)" : "translateY(0)",
          boxShadow: isHovered ? "0 12px 32px rgba(0,212,170,0.15)" : "0 2px 8px rgba(0,0,0,0.1)",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            top: "-50%",
            right: "-50%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,212,170,0.2) 0%, transparent 70%)",
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
            background: "linear-gradient(90deg, var(--accent) 0%, transparent 100%)",
            opacity: isHovered ? 1 : 0.3,
            transition: "opacity 0.3s ease",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "12px",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "18px",
                color: "var(--text)",
              }}
            >
              {item.title}
            </h3>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--accent)",
                background: "rgba(0,212,170,0.1)",
                border: "1px solid rgba(0,212,170,0.2)",
                padding: "4px 10px",
                borderRadius: "99px",
                whiteSpace: "nowrap",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {item.period}
            </span>
          </div>

          {/* Organization */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--text-3)",
              marginBottom: "12px",
              fontWeight: 500,
            }}
          >
            {item.organization}
          </p>

          {/* Description */}
          <p
            style={{
              color: "var(--text-2)",
              fontSize: "14px",
              lineHeight: 1.7,
              marginBottom: "16px",
            }}
          >
            {item.description}
          </p>

          {/* Progress bar animada */}
          <div
            style={{
              width: "100%",
              height: "3px",
              background: "var(--border)",
              borderRadius: "2px",
              overflow: "hidden",
              marginBottom: "14px",
            }}
          >
            <div
              style={{
                height: "100%",
                background: "linear-gradient(90deg, var(--accent), var(--blue))",
                width: inView ? "100%" : "0%",
                transition: `width 0.8s ease-out ${index * 0.15 + 0.3}s`,
                borderRadius: "2px",
              }}
            />
          </div>

          {/* Highlights/Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {item.highlights.map((h) => (
              <span
                key={h}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--text-3)",
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  padding: "3px 8px",
                  borderRadius: "4px",
                }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" style={{ padding: "100px 24px", background: "var(--bg-2)" }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <SectionLabel>Formación</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginTop: "16px",
              marginBottom: "56px",
            }}
          >
            Trayectoria académica
          </h2>

          <div style={{ position: "relative", maxWidth: "700px" }}>
            {/* Timeline line */}
            <div
              style={{
                position: "absolute",
                left: "20px",
                top: "0px",
                bottom: "0",
                width: "2px",
                background: "linear-gradient(to bottom, var(--accent), var(--border))",
                opacity: inView ? 1 : 0,
                transition: "opacity 0.8s ease",
              }}
            />

            {/* Experience items */}
            {experience.map((item, i) => (
              <ExperienceCard key={i} item={item} index={i} inView={inView} />
            ))}

            {/* End point */}
            <div
              style={{
                position: "absolute",
                left: "14px",
                bottom: "-18px",
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: "var(--accent)",
                border: "3px solid var(--bg-2)",
                boxShadow: "0 0 12px rgba(0,212,170,0.4)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}