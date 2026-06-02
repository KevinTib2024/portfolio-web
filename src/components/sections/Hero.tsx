import { GLSLHills } from '../ui/GLSLHills';
import Button from '../ui/Button';
import CVViewer from '../ui/CVViewer';
import { personal, interests } from '@/data/portfolio';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [interestIdx, setInterestIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setInterestIdx((i) => (i + 1) % interests.length);
        setFade(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Three.js Canvas Background */}
      <GLSLHills width="100vw" height="100vh" cameraZ={125} planeSize={256} speed={0.5} />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center space-y-8 max-w-4xl px-6">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-display tracking-tighter leading-tight">
              <span className="italic font-thin text-5xl md:text-6xl block mb-2">
                Backend · Fullstack · Data
              </span>
              <span className="text-[var(--accent)] block">
                Software y Datos
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-[var(--text-2)] max-w-2xl mx-auto leading-relaxed">
            Construyo software robusto, escalable y listo para producción. Especializado en APIs REST, arquitectura por capas y análisis de datos que generan valor real.
          </p>

          {/* Interest Rotator */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs font-mono text-[var(--text-3)] uppercase tracking-widest">
              Enfocado en:
            </span>
            <span
              className={`text-[var(--accent)] font-mono text-sm transition-opacity duration-300 ${
                fade ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {interests[interestIdx]}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-8 pointer-events-auto">
            <Button href="#projects" size="lg">
              Ver Proyectos →
            </Button>
            <Button href={personal.contact.github} variant="outline" size="lg">
              GitHub
            </Button>
            <Button href={`mailto:${personal.contact.email}`} variant="outline" size="lg">
              Contactar
            </Button>
            
            {/* ✅ CVViewer - Reemplaza el <a> anterior */}
            <CVViewer />
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-dim)] border border-[var(--accent)] text-[var(--accent)] text-xs font-mono uppercase tracking-widest pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            Disponible para nuevos proyectos
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-[var(--accent)]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}