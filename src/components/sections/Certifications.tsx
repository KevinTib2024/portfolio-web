import React, { useRef } from "react";
import { certifications } from "../../data/portfolio";
import { useInView } from "../../hooks/useInView";
import SectionLabel from "../ui/SectionLabel";

interface Certification {
  id: string | number;
  title: string;
  issuer: string;
  date: string;
  color: string;
  image: string;
  credentialId: string;
  verify: string;
}

interface CertCardProps {
  cert: Certification;
  index: number;
  inView: boolean;
}

export default function Certifications() {
  const { ref, inView } = useInView();
  const divRef = ref as React.RefObject<HTMLDivElement>;

  return (
    <section id="certifications" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>
        <div
          ref={divRef}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <SectionLabel>Certificaciones</SectionLabel>
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
            Certificaciones obtenidas
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
            }}
          >
            {certifications.map((cert: Certification, i: number) => (
              <CertCard key={cert.id} cert={cert} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CertCard({ cert, index, inView }: CertCardProps) {
  return (
    <div
      style={{
        position: "relative",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(24px)",
        transition: `all 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          height: "3px",
          background: `linear-gradient(90deg, ${cert.color} 0%, transparent 100%)`,
        }}
      />

      {/* Image preview */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "180px",
          overflow: "hidden",
          background: "var(--surface-2)",
          cursor: "pointer",
        }}
        onClick={() => window.open(cert.image, "_blank")}
      >
        <img
          src={cert.image}
          alt={cert.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLImageElement>) =>
            (e.currentTarget.style.transform = "scale(1.04)")
          }
          onMouseLeave={(e: React.MouseEvent<HTMLImageElement>) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 50%, rgba(5,7,9,0.7) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "24px" }}>
        {/* Issuer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: cert.color,
              background: cert.color + "18",
              border: `1px solid ${cert.color}33`,
              padding: "4px 10px",
              borderRadius: "4px",
            }}
          >
            {cert.issuer}
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--text-3)",
            }}
          >
            {cert.date}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "18px",
            fontWeight: 700,
            color: "var(--text)",
            lineHeight: 1.3,
            marginBottom: "16px",
          }}
        >
          {cert.title}
        </h3>

        {/* Credential ID */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--text-3)",
            marginBottom: "20px",
          }}
        >
          ID: {cert.credentialId}
        </div>

        {/* Verify link */}
        <a
          href={cert.verify}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 16px",
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: cert.color,
            background: cert.color + "15",
            border: `1px solid ${cert.color}33`,
            borderRadius: "6px",
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.currentTarget.style.background = cert.color + "28";
            e.currentTarget.style.borderColor = cert.color;
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.currentTarget.style.background = cert.color + "15";
            e.currentTarget.style.borderColor = cert.color + "33";
          }}
        >
          ✓ Verificar credencial ↗
        </a>
      </div>
    </div>
  );
}