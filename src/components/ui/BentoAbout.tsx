import React, { useEffect, useRef, useState } from "react";
import { Code2, Database, Zap, Users, Lightbulb, Palette, Mail } from "lucide-react";

const getRootTheme = () => {
  if (typeof document === "undefined") return "dark";
  const root = document.documentElement;
  if (root.classList.contains("dark")) return "dark";
  return "light";
};

interface BentoAboutProps {
  strengths?: string[];
  interests?: string[];
}

export const BentoAbout = ({
  strengths = [
    "Desarrollo de APIs REST",
    "Arquitectura por capas",
    "SQL Server y modelado de bases de datos",
    "Entity Framework",
    "Procesamiento de datos con PySpark",
    "Machine Learning",
  ],
  interests = ["Backend Development", "Software Engineering", "Data Analysis"],
}: BentoAboutProps) => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const id = "bento-about-animations";
    if (document.getElementById(id)) return;

    const style = document.createElement("style");
    style.id = id;
    style.innerHTML = `
      @keyframes bento-intro {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes bento-card {
        0% { opacity: 0; transform: translateY(12px) scale(0.96); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative w-full py-20 px-6 md:py-32 transition-opacity duration-1000 ${
        sectionVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: "var(--bg)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <span
            className="text-xs uppercase tracking-[0.35em] font-mono"
            style={{ color: "var(--text-3)" }}
          >
            Sobre mí
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mt-4 mb-8 leading-tight"
            style={{ color: "var(--text)" }}
          >
            Desarrollador Full Stack & Analista de Datos
          </h2>
          <p
            className="text-base md:text-lg max-w-4xl leading-relaxed"
            style={{ color: "var(--text-2)" }}
          >
            Estudiante de Ingeniería de Sistemas apasionado por construir software robusto y escalable. Me especializo en desarrollo backend, frontend moderno y análisis de datos con impacto real. Capaz de llevar un proyecto desde el diseño hasta la producción.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-6">
          {/* Profile Card - Compact */}
          <div
            className={`md:col-span-2 rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg ${
              sectionVisible ? "animate-[bento-card_0.8s_ease-out_forwards]" : "opacity-0"
            }`}
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
              animationDelay: "0s",
            }}
          >
            {/* Profile Image */}
            <div className="relative w-full h-64 overflow-hidden bg-[var(--surface-2)] group">
              <img
                src="/images/profile/Foto-Face.jpg"
                alt="Kevin Tibaquicha"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-40" />

              <div
                className="absolute bottom-3 left-3 px-3 py-1 rounded-full border text-xs font-mono uppercase tracking-widest"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                  background: "var(--accent-dim)",
                }}
              >
                Disponible
              </div>
            </div>

            {/* Info */}
            <div className="p-5">
              <h3
                className="text-lg font-bold font-display mb-1"
                style={{ color: "var(--text)" }}
              >
                Kevin Tibaquicha
              </h3>
              <p
                className="text-xs font-mono mb-4"
                style={{ color: "var(--text-3)" }}
              >
                9° Semestre · Ing. Sistemas
              </p>

              {/* Stats */}
              <div className="space-y-2 mb-5 pb-5 border-b" style={{ borderColor: "var(--border)" }}>
                <div className="flex justify-between items-center text-xs">
                  <span style={{ color: "var(--text-3)" }}>Proyectos</span>
                  <span style={{ color: "var(--accent)" }} className="font-bold">5+</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span style={{ color: "var(--text-3)" }}>Tecnologías</span>
                  <span style={{ color: "var(--blue)" }} className="font-bold">15+</span>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex gap-2 justify-center">
                {/* GitHub */}
                <a
                  href="https://github.com/KevinTib2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border hover:bg-[var(--accent-dim)] transition-colors"
                  style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
                  title="GitHub"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/kevin-tibaquicha-ortiz-68a04b413/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded border hover:bg-[var(--blue)]20 transition-colors"
                  style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
                  title="LinkedIn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.002 1.413-.103.249-.129.597-.129.946v5.446h-3.554s.05-8.836 0-9.754h3.554v1.381c.43-.666 1.201-1.608 2.923-1.608 2.135 0 3.735 1.39 3.735 4.38v5.601zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.707 0-.955.77-1.708 1.963-1.708 1.192 0 1.915.753 1.937 1.708 0 .949-.745 1.707-1.985 1.707zm1.946 11.597H3.392V9.558h3.891v10.894zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:ktibaquichaortiz@gmail.com"
                  className="p-2 rounded border hover:bg-[var(--accent-dim)] transition-colors"
                  style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
                  title="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Backend Card */}
          <div
            className={`md:col-span-1 rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              sectionVisible ? "animate-[bento-card_0.8s_ease-out_forwards]" : "opacity-0"
            }`}
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
              animationDelay: "0.1s",
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
              style={{
                background: `var(--accent)20`,
                color: "var(--accent)",
              }}
            >
              <Code2 size={20} />
            </div>

            <h4
              className="text-sm font-bold font-display mb-4 uppercase tracking-wider"
              style={{ color: "var(--text)" }}
            >
              Backend
            </h4>

            <ul className="space-y-1.5">
              {["C# ASP.NET", "Entity Framework", "REST APIs", "SQL Server"].map((item) => (
                <li
                  key={item}
                  className="text-xs flex items-start gap-2"
                  style={{ color: "var(--text-2)" }}
                >
                  <span style={{ color: "var(--accent)" }} className="mt-0.5 flex-shrink-0">
                    ▸
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Frontend Card */}
          <div
            className={`md:col-span-1 rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              sectionVisible ? "animate-[bento-card_0.8s_ease-out_forwards]" : "opacity-0"
            }`}
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
              animationDelay: "0.2s",
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
              style={{
                background: `var(--blue)20`,
                color: "var(--blue)",
              }}
            >
              <Palette size={20} />
            </div>

            <h4
              className="text-sm font-bold font-display mb-4 uppercase tracking-wider"
              style={{ color: "var(--text)" }}
            >
              Frontend
            </h4>

            <ul className="space-y-1.5">
              {["React TypeScript", "Tailwind CSS", "Responsive", "Vite"].map((item) => (
                <li
                  key={item}
                  className="text-xs flex items-start gap-2"
                  style={{ color: "var(--text-2)" }}
                >
                  <span style={{ color: "var(--blue)" }} className="mt-0.5 flex-shrink-0">
                    ▸
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Data & Analytics Card */}
          <div
            className={`md:col-span-1 rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              sectionVisible ? "animate-[bento-card_0.8s_ease-out_forwards]" : "opacity-0"
            }`}
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
              animationDelay: "0.3s",
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
              style={{
                background: `#F59E0B20`,
                color: "#F59E0B",
              }}
            >
              <Database size={20} />
            </div>

            <h4
              className="text-sm font-bold font-display mb-4 uppercase tracking-wider"
              style={{ color: "var(--text)" }}
            >
              Data
            </h4>

            <ul className="space-y-1.5">
              {["Python PySpark", "Power BI", "ML Models", "Analytics"].map((item) => (
                <li
                  key={item}
                  className="text-xs flex items-start gap-2"
                  style={{ color: "var(--text-2)" }}
                >
                  <span style={{ color: "#F59E0B" }} className="mt-0.5 flex-shrink-0">
                    ▸
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Second Row - Soft Skills */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Collaboration */}
          <div
            className={`md:col-span-1 rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              sectionVisible ? "animate-[bento-card_0.8s_ease-out_forwards]" : "opacity-0"
            }`}
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
              animationDelay: "0.4s",
            }}
          >
            <Users size={20} style={{ color: "#EC4899" }} className="mb-4" />
            <h4
              className="text-sm font-bold font-display mb-3 uppercase tracking-wider"
              style={{ color: "var(--text)" }}
            >
              Collab
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>
              Trabajo en equipo y comunicación efectiva en proyectos multidisciplinarios.
            </p>
          </div>

          {/* Problem Solving */}
          <div
            className={`md:col-span-1 rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              sectionVisible ? "animate-[bento-card_0.8s_ease-out_forwards]" : "opacity-0"
            }`}
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
              animationDelay: "0.5s",
            }}
          >
            <Lightbulb size={20} style={{ color: "#22C55E" }} className="mb-4" />
            <h4
              className="text-sm font-bold font-display mb-3 uppercase tracking-wider"
              style={{ color: "var(--text)" }}
            >
              Análisis
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>
              Enfoque analítico para soluciones escalables y eficientes.
            </p>
          </div>

          {/* Learning */}
          <div
            className={`md:col-span-1 rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              sectionVisible ? "animate-[bento-card_0.8s_ease-out_forwards]" : "opacity-0"
            }`}
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
              animationDelay: "0.6s",
            }}
          >
            <Zap size={20} style={{ color: "var(--blue)" }} className="mb-4" />
            <h4
              className="text-sm font-bold font-display mb-3 uppercase tracking-wider"
              style={{ color: "var(--text)" }}
            >
              Aprendizaje
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>
              Exploración constante de nuevas tecnologías y mejora continua.
            </p>
          </div>

          {/* Architecture */}
          <div
            className={`md:col-span-1 rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              sectionVisible ? "animate-[bento-card_0.8s_ease-out_forwards]" : "opacity-0"
            }`}
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
              animationDelay: "0.7s",
            }}
          >
            <Code2 size={20} style={{ color: "var(--accent)" }} className="mb-4" />
            <h4
              className="text-sm font-bold font-display mb-3 uppercase tracking-wider"
              style={{ color: "var(--text)" }}
            >
              Arquitectura
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>
              Diseño de sistemas con patrones y mejores prácticas.
            </p>
          </div>

          {/* Performance */}
          <div
            className={`md:col-span-1 rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              sectionVisible ? "animate-[bento-card_0.8s_ease-out_forwards]" : "opacity-0"
            }`}
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
              animationDelay: "0.8s",
            }}
          >
            <Zap size={20} style={{ color: "#F59E0B" }} className="mb-4" />
            <h4
              className="text-sm font-bold font-display mb-3 uppercase tracking-wider"
              style={{ color: "var(--text)" }}
            >
              Performance
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>
              Optimización de código y aplicaciones de alto rendimiento.
            </p>
          </div>

          {/* Cloud & DevOps */}
          <div
            className={`md:col-span-1 rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              sectionVisible ? "animate-[bento-card_0.8s_ease-out_forwards]" : "opacity-0"
            }`}
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
              animationDelay: "0.9s",
            }}
          >
            <Database size={20} style={{ color: "#06B6D4" }} className="mb-4" />
            <h4
              className="text-sm font-bold font-display mb-3 uppercase tracking-wider"
              style={{ color: "var(--text)" }}
            >
              Cloud
            </h4>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>
              Despliegue en Azure, Vercel y gestión de infraestructura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoAbout;