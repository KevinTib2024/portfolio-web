import { useState } from "react";

export default function ProjectCard({ project, featured = false }) {
  const [hovered, setHovered] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  if (featured) {
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          background: "var(--surface)",
          border: `1px solid ${hovered ? project.color + "55" : "var(--border)"}`,
          borderRadius: "var(--radius-lg)",
          padding: "40px",
          overflow: "hidden",
          transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
          transform: hovered ? "translateY(-3px)" : "none",
          boxShadow: hovered ? `0 20px 60px ${project.color}18` : "none",
          gridColumn: "1 / -1",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: project.color + "18",
            filter: "blur(60px)",
            pointerEvents: "none",
            transition: "opacity 0.4s ease",
            opacity: hovered ? 1 : 0.4,
          }}
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", position: "relative" }}>
          {/* Left - Images gallery */}
          <div>
            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius)",
                overflow: "hidden",
                border: "1px solid var(--border)",
                background: "var(--surface-2)",
                marginBottom: "24px",
                aspectRatio: "1",
              }}
            >
              {/* Image title and description */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  padding: "16px 20px",
                  background: "linear-gradient(180deg, rgba(5,7,9,0.9) 0%, transparent 100%)",
                  zIndex: 5,
                }}
              >
                <h4
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--text)",
                    marginBottom: "4px",
                  }}
                >
                  {project.images[currentImageIdx].title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    color: "var(--text-2)",
                    lineHeight: 1.4,
                  }}
                >
                  {project.images[currentImageIdx].description}
                </p>
              </div>

              {/* Main image */}
              <img
                src={project.images[currentImageIdx].src}
                alt={`${project.title} - ${currentImageIdx + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                  transition: "opacity 0.4s ease",
                  backgroundColor: "var(--surface-2)",
                }}
              />

              {/* Navigation arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentImageIdx((i) => (i - 1 + project.images.length) % project.images.length)
                    }
                    style={{
                      position: "absolute",
                      left: "8px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "32px",
                      height: "32px",
                      borderRadius: "6px",
                      background: "rgba(5,7,9,0.7)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s ease",
                      opacity: hovered ? 1 : 0.6,
                      zIndex: 10,
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = project.color + "44";
                      e.currentTarget.style.borderColor = project.color;
                      e.currentTarget.style.color = project.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(5,7,9,0.7)";
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--text)";
                    }}
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setCurrentImageIdx((i) => (i + 1) % project.images.length)}
                    style={{
                      position: "absolute",
                      right: "8px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "32px",
                      height: "32px",
                      borderRadius: "6px",
                      background: "rgba(5,7,9,0.7)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.2s ease",
                      opacity: hovered ? 1 : 0.6,
                      zIndex: 10,
                      fontSize: "16px",
                      fontWeight: 600,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = project.color + "44";
                      e.currentTarget.style.borderColor = project.color;
                      e.currentTarget.style.color = project.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(5,7,9,0.7)";
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.color = "var(--text)";
                    }}
                  >
                    →
                  </button>
                </>
              )}

              {/* Thumbnail indicators */}
              {project.images.length > 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "12px",
                    display: "flex",
                    gap: "6px",
                    zIndex: 10,
                  }}
                >
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIdx(idx)}
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: idx === currentImageIdx ? project.color : "rgba(238,241,248,0.3)",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = project.color;
                      }}
                      onMouseLeave={(e) => {
                        if (idx !== currentImageIdx) {
                          e.currentTarget.style.background = "rgba(238,241,248,0.3)";
                        }
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Image counter */}
              {project.images.length > 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--text)",
                    background: "rgba(5,7,9,0.8)",
                    backdropFilter: "blur(8px)",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    border: "1px solid var(--border)",
                  }}
                >
                  {currentImageIdx + 1} / {project.images.length}
                </div>
              )}
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: project.color,
                  background: project.color + "18",
                  border: `1px solid ${project.color}33`,
                  padding: "4px 10px",
                  borderRadius: "4px",
                }}
              >
                ★ Proyecto destacado
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                }}
              >
                {project.category}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "32px",
                fontWeight: 800,
                color: "var(--text)",
                lineHeight: 1.15,
                marginBottom: "12px",
              }}
            >
              {project.title}
            </h3>
            <p style={{ color: project.color, fontFamily: "var(--font-mono)", fontSize: "13px", marginBottom: "20px" }}>
              {project.subtitle}
            </p>
            <p style={{ color: "var(--text-2)", fontSize: "15px", lineHeight: 1.7, marginBottom: "28px" }}>
              {project.description}
            </p>

            {/* Stats */}
            {project.stats.length > 0 && (
              <div style={{ display: "flex", gap: "24px", marginBottom: "28px" }}>
                {project.stats.map((s) => (
                  <div key={s.label}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, color: project.color }}>
                      {s.value}
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Role badge */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "28px" }}>
              {project.technologies.slice(0, 5).map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "var(--text-3)",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    padding: "4px 10px",
                    borderRadius: "4px",
                  }}
                >
                  {t}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--text-3)", padding: "4px 0" }}>
                  +{project.technologies.length - 5} más
                </span>
              )}
            </div>

            {/* Links Section */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "28px", flexWrap: "wrap" }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 14px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--text)",
                    background: "var(--surface-2)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = project.color;
                    e.currentTarget.style.color = project.color;
                    e.currentTarget.style.background = project.color + "15";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text)";
                    e.currentTarget.style.background = "var(--surface-2)";
                  }}
                >
                  <span>⬡</span> GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 14px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--text)",
                    background: project.color + "15",
                    border: `1px solid ${project.color}33`,
                    borderRadius: "6px",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = project.color;
                    e.currentTarget.style.color = project.color;
                    e.currentTarget.style.background = project.color + "25";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = project.color + "33";
                    e.currentTarget.style.color = "var(--text)";
                    e.currentTarget.style.background = project.color + "15";
                  }}
                >
                  <span>↗</span> Live Demo
                </a>
              )}
            </div>

            {/* Features and contributions */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
              {project.features.length > 0 && (
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--text-3)",
                      marginBottom: "14px",
                    }}
                  >
                    Características
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {project.features.map((f) => (
                      <li
                        key={f}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          color: "var(--text-2)",
                          fontSize: "14px",
                        }}
                      >
                        <span style={{ color: project.color, marginTop: "4px", flexShrink: 0 }}>▸</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.contributions.length > 0 && (
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--text-3)",
                      marginBottom: "14px",
                    }}
                  >
                    Mi participación
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {project.contributions.map((c) => (
                      <li
                        key={c}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          color: "var(--text-2)",
                          fontSize: "14px",
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: project.color,
                            flexShrink: 0,
                          }}
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Regular card
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "var(--surface)",
        border: `1px solid ${hovered ? project.color + "44" : "var(--border)"}`,
        borderRadius: "var(--radius)",
        overflow: "hidden",
        transition: "all 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? `0 16px 40px ${project.color}14` : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: project.color,
          opacity: hovered ? 1 : 0.3,
          transition: "opacity 0.3s ease",
          zIndex: 10,
        }}
      />

      {/* Image thumbnail */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "160px",
          overflow: "hidden",
          background: "var(--surface-2)",
        }}
      >
        <img
          src={project.images?.[currentImageIdx]?.src || project.image || ""}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "center",
            transition: "opacity 0.3s ease",
            backgroundColor: "var(--surface-2)",
          }}
        />

        {/* Image title and description overlay */}
        {project.images?.length > 0 && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(5,7,9,0.95) 0%, rgba(5,7,9,0.8) 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              padding: "12px",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.3s ease",
              zIndex: 5,
            }}
          >
            <h5
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "13px",
                fontWeight: 700,
                color: project.color,
                marginBottom: "6px",
                lineHeight: 1.2,
              }}
            >
              {project.images[currentImageIdx]?.title}
            </h5>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                color: "var(--text-2)",
                lineHeight: 1.4,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {project.images[currentImageIdx]?.description}
            </p>
          </div>
        )}

        {/* Navigation arrows */}
        {project.images?.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrentImageIdx((i) => (i - 1 + project.images.length) % project.images.length)
              }
              style={{
                position: "absolute",
                left: "4px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "28px",
                height: "28px",
                borderRadius: "4px",
                background: "rgba(5,7,9,0.7)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
                opacity: hovered ? 1 : 0,
                zIndex: 10,
                fontSize: "14px",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = project.color + "44";
                e.currentTarget.style.borderColor = project.color;
                e.currentTarget.style.color = project.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(5,7,9,0.7)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text)";
              }}
            >
              ←
            </button>
            <button
              onClick={() => setCurrentImageIdx((i) => (i + 1) % project.images.length)}
              style={{
                position: "absolute",
                right: "4px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "28px",
                height: "28px",
                borderRadius: "4px",
                background: "rgba(5,7,9,0.7)",
                border: "1px solid var(--border)",
                color: "var(--text)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
                opacity: hovered ? 1 : 0,
                zIndex: 10,
                fontSize: "14px",
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = project.color + "44";
                e.currentTarget.style.borderColor = project.color;
                e.currentTarget.style.color = project.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(5,7,9,0.7)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text)";
              }}
            >
              →
            </button>
          </>
        )}

        {/* Image indicators dots */}
        {project.images?.length > 1 && (
          <div
            style={{
              position: "absolute",
              bottom: "8px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "4px",
              zIndex: 10,
            }}
          >
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIdx(idx)}
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: idx === currentImageIdx ? project.color : "rgba(238,241,248,0.3)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = project.color;
                }}
                onMouseLeave={(e) => {
                  if (idx !== currentImageIdx) {
                    e.currentTarget.style.background = "rgba(238,241,248,0.3)";
                  }
                }}
              />
            ))}
          </div>
        )}

        {/* Image count badge */}
        {project.images?.length > 1 && (
          <div
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--text)",
              background: "rgba(5,7,9,0.8)",
              backdropFilter: "blur(8px)",
              padding: "3px 6px",
              borderRadius: "4px",
              border: "1px solid var(--border)",
              zIndex: 10,
            }}
          >
            {currentImageIdx + 1} / {project.images.length}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-3)",
            }}
          >
            {project.category}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: project.color,
              background: project.color + "15",
              border: `1px solid ${project.color}33`,
              padding: "3px 8px",
              borderRadius: "4px",
            }}
          >
            {project.role}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "20px",
            fontWeight: 700,
            color: "var(--text)",
            marginBottom: "8px",
            lineHeight: 1.25,
          }}
        >
          {project.title}
        </h3>

        <p style={{ color: project.color, fontFamily: "var(--font-mono)", fontSize: "12px", marginBottom: "14px" }}>
          {project.subtitle}
        </p>

        <p style={{ color: "var(--text-2)", fontSize: "14px", lineHeight: 1.65, marginBottom: "20px", flex: 1 }}>
          {project.description}
        </p>

        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "16px" }}>
          {project.technologies.slice(0, 3).map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-3)",
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                padding: "3px 8px",
                borderRadius: "4px",
              }}
            >
              {t}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-3)",
                padding: "3px 4px",
              }}
            >
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Links Section */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "6px 10px",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-2)",
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                flex: project.live ? "1" : "auto",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = project.color;
                e.currentTarget.style.color = project.color;
                e.currentTarget.style.background = project.color + "10";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-2)";
                e.currentTarget.style.background = "var(--surface-2)";
              }}
            >
              <span>⬡</span> GitHub
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "6px 10px",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text)",
                background: project.color + "10",
                border: `1px solid ${project.color}33`,
                borderRadius: "4px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                flex: project.github ? "1" : "auto",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = project.color;
                e.currentTarget.style.background = project.color + "20";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = project.color + "33";
                e.currentTarget.style.background = project.color + "10";
              }}
            >
              <span>↗</span> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}