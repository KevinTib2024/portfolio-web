import { useState } from "react";
import { personal } from "../../data/portfolio";
import { useInView } from "../../hooks/useInView";
import SectionLabel from "../ui/SectionLabel";
import Button from "../ui/Button";

const contactItems = [
  {
    icon: "email",
    label: "Email",
    value: "ktibaquichaortiz@gmail.com",
    href: `mailto:ktibaquichaortiz@gmail.com`,
    color: "var(--accent)",
    bgColor: "rgba(0,212,170,0.1)",
    borderColor: "rgba(0,212,170,0.2)",
  },
  {
    icon: "github",
    label: "GitHub",
    value: "github.com/KevinTib2024",
    href: "https://github.com/KevinTib2024",
    color: "#ffffff",
    bgColor: "rgba(255,255,255,0.08)",
    borderColor: "rgba(255,255,255,0.15)",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/kevin-tibaquicha",
    href: "https://www.linkedin.com/in/kevin-tibaquicha-ortiz-68a04b413/",
    color: "#0A66C2",
    bgColor: "rgba(10,102,194,0.1)",
    borderColor: "rgba(10,102,194,0.2)",
  },
];

// SVG Icons Component
const EmailIcon = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const GitHubIcon = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c2.5-.5 5-.5 5-5a4 4 0 0 0-1-3.5.4.4 0 0 1 0-.5 2 2 0 0 0 0-2.5 2 2 0 0 0-2.5 0 2 2 0 0 0-.5.5.4.4 0 0 1-.5 0 6 6 0 0 0-3 0 .4.4 0 0 1-.5 0 2 2 0 0 0-2.5 0 2 2 0 0 0 0 2.5.4.4 0 0 1 0 .5 4 4 0 0 0-1 3.5c0 4.5 2.5 4.5 5 5a4.8 4.8 0 0 0-1 3.5v4M9 16c-1 0-1.5.5-2 1"></path>
  </svg>
);

const LinkedInIcon = ({ color }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6 z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const LocationIcon = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const getIcon = (iconType, color) => {
  switch (iconType) {
    case "email":
      return <EmailIcon color={color} />;
    case "github":
      return <GitHubIcon color={color} />;
    case "linkedin":
      return <LinkedInIcon color={color} />;
    default:
      return null;
  }
};

// Contact Card Component
const ContactCard = ({ item, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isIconHovered, setIsIconHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={(e) => {
        if (item.icon === "email") {
          e.preventDefault();
          copyToClipboard(item.value);
        }
      }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        background: isHovered ? item.bgColor.replace("0.1", "0.2").replace("0.08", "0.15") : item.bgColor,
        border: `1px solid ${isHovered ? item.color : item.borderColor}`,
        borderRadius: "var(--radius)",
        padding: "20px 24px",
        textDecoration: "none",
        transition: "all 0.3s ease",
        opacity: inView ? 1 : 0,
        transform: inView ? (isHovered ? "translateX(4px)" : "translateX(0)") : "translateX(20px)",
        transitionDelay: `${0.2 + index * 0.1}s`,
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        boxShadow: isHovered ? `0 0 20px ${item.color}25` : "none",
      }}
    >
      {/* Glow effect background */}
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-50%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${item.color}20 0%, transparent 70%)`,
          filter: "blur(40px)",
          pointerEvents: "none",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Icon container */}
      <div
        onMouseEnter={() => setIsIconHovered(true)}
        onMouseLeave={() => setIsIconHovered(false)}
        style={{
          width: 50,
          height: 50,
          borderRadius: "12px",
          background: `${item.color}18`,
          border: `1.5px solid ${isIconHovered ? item.color : item.color}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "all 0.3s ease",
          position: "relative",
          zIndex: 1,
          transform: isIconHovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
        }}
      >
        {getIcon(item.icon, item.color)}
      </div>

      {/* Content */}
      <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--text-3)",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: "4px",
          }}
        >
          {item.label}
        </div>
        <div
          style={{
            color: "var(--text)",
            fontSize: "14px",
            fontWeight: 500,
            transition: "color 0.3s ease",
          }}
        >
          {item.value}
        </div>
      </div>

      {/* Arrow / Copy icon */}
      <div
        style={{
          color: item.color,
          fontSize: "18px",
          transition: "all 0.3s ease",
          position: "relative",
          zIndex: 1,
          transform: isHovered ? "translate(4px, -4px)" : "translate(0, 0)",
        }}
      >
        {isCopied && item.icon === "email" ? "✓" : "↗"}
      </div>
    </a>
  );
};

export default function Contact() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <SectionLabel>Contacto</SectionLabel>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              marginTop: "48px",
              alignItems: "center",
            }}
          >
            {/* Left */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  color: "var(--text)",
                  marginBottom: "24px",
                }}
              >
                Hablemos sobre tu{" "}
                <span style={{ color: "var(--accent)" }}>próximo proyecto</span>
              </h2>

              <p
                style={{
                  color: "var(--text-2)",
                  fontSize: "16px",
                  lineHeight: 1.75,
                  marginBottom: "36px",
                  maxWidth: "420px",
                }}
              >
                Estoy buscando prácticas profesionales o una posición junior en desarrollo backend, fullstack o análisis de datos. Si tienes una oportunidad o quieres colaborar, escríbeme.
              </p>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Button href="mailto:ktibaquichaortiz@gmail.com" size="lg">
                  Enviar mensaje ↗
                </Button>
                <Button href="https://linkedin.com/in/kevin-tibaquicha-ortiz" variant="outline" size="lg">
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Right */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {contactItems.map((item, i) => (
                <ContactCard key={item.label} item={item} index={i} inView={inView} />
              ))}

              {/* Location badge */}
              <LocationBadge inView={inView} />

              {/* Availability indicator */}
              <AvailabilityBadge inView={inView} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(0, 212, 170, 0.7);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(0, 212, 170, 0);
          }
        }
      `}</style>
    </section>
  );
}

// Location Badge Component
const LocationBadge = ({ inView }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "16px 20px",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        color: isHovered ? "var(--accent)" : "var(--text-2)",
        background: isHovered ? "var(--surface-2)" : "var(--surface)",
        border: `1px solid ${isHovered ? "var(--accent)" : "var(--border)"}`,
        borderRadius: "var(--radius)",
        transition: "all 0.3s ease",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(20px)",
        transitionDelay: "0.5s",
        marginTop: "8px",
        cursor: "default",
      }}
    >
      <LocationIcon color={isHovered ? "var(--accent)" : "var(--accent)"} />
      <span>Bogotá, Colombia · Disponible para trabajo remoto</span>
    </div>
  );
};

// Availability Badge Component
const AvailabilityBadge = ({ inView }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px 16px",
        background: "rgba(0,212,170,0.08)",
        border: "1px solid rgba(0,212,170,0.2)",
        borderRadius: "var(--radius)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(20px)",
        transitionDelay: "0.6s",
        transition: "all 0.7s ease",
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "var(--accent)",
          animation: "pulse-glow 2s ease-in-out infinite",
        }}
      />
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--accent)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        Disponible para proyectos
      </span>
    </div>
  );
};