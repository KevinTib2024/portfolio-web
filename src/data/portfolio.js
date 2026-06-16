export const personal = {
  name: "Kevin Alexander Tibaquicha Ortiz",
  shortName: "Kevin Tibaquicha",
  initials: "KT",
  role: "Systems & Computing Engineering Student",
  semester: "9th Semester",
  tagline: "Backend · Fullstack · Data Analysis",
  bio: "Estudiante de noveno semestre de Ingeniería de Sistemas y Computación, apasionado por el desarrollo backend, la ingeniería de software y el análisis de datos. Busco prácticas profesionales o una posición junior donde pueda aportar soluciones técnicas robustas a problemas reales.",
  location: "Cundinamarca, Colombia",
  available: true,
  contact: {
    email: "ktibaquichaortiz@gmail.com",
    github: "https://github.com/KevinTib2024",
    linkedin: "https://www.linkedin.com/in/kevin-tibaquicha-ortiz-68a04b413/",
  },
};

export const interests = [
  "Backend Development",
  "Software Engineering",
  "Data Analysis",
  "Machine Learning",
  "Data Mining",
  "Cloud Computing",
];

export const technologies = {
  backend: [
    { name: "C#", level: "advanced" },
    { name: "ASP.NET Core", level: "advanced" },
    { name: "Entity Framework", level: "advanced" },
    { name: "SQL Server", level: "advanced" },
    { name: "REST APIs", level: "advanced" },
  ],
  frontend: [
    { name: "React", level: "intermediate" },
    { name: "JavaScript", level: "intermediate" },
    { name: "HTML", level: "intermediate" },
    { name: "CSS", level: "intermediate" },
  ],
  data: [
    { name: "Python", level: "advanced" },
    { name: "PySpark", level: "advanced" },
    { name: "Power BI", level: "advanced" },
    { name: "Machine Learning", level: "intermediate" },
    { name: "Data Mining", level: "intermediate" },
  ],
  otros: [
    { name: "Flask", level: "intermediate" },
    { name: "Unity", level: "intermediate" },
    { name: "Git", level: "advanced" },
    { name: "GitHub", level: "advanced" },
    { name: "Azure", level: "intermediate" },
    { name: "Vercel", level: "intermediate" },
  ],
};

export const strengths = [
  "Desarrollo de APIs REST",
  "Arquitectura por capas",
  "SQL Server y modelado de bases de datos",
  "Entity Framework",
  "Procesamiento de datos con PySpark",
  "Machine Learning",
  "Minería de datos",
  "Visualización de datos con Power BI",
  "Trabajo colaborativo",
  "Resolución de problemas",
  "Desarrollo de software orientado a proyectos reales",
];

export const projects = [
  {
    id: "sisben",
    title: "SISBEN Vulnerability Analysis",
    subtitle: "Minería de datos sobre vulnerabilidad socioeconómica",
    description:
      "Proyecto colaborativo de análisis de vulnerabilidad socioeconómica mediante técnicas de minería de datos aplicadas a 315.612 registros del SISBEN IV en Cundinamarca. Incluye procesamiento masivo, clustering K-Means e Índice de Pobreza Multidimensional.",
    featured: true,
    role: "Contributor",
    contributions: [
      "Estructuración del proyecto",
      "Desarrollo colaborativo",
      "Análisis de datos",
      "Interpretación de resultados",
    ],
    technologies: ["Flask", "PySpark", "SQL Server", "Power BI", "HTML", "CSS", "Orange Data Mining"],
    features: [
      "Procesamiento masivo de 315K+ registros",
      "Clustering K-Means",
      "Índice de Pobreza Multidimensional (IPM)",
      "Análisis dimensional",
      "Modelo estrella",
      "Dashboards analíticos",
      "Visualización de datos",
    ],
    category: "Data & Analytics",
    color: "#00D4AA",
    github: "https://github.com/KevinRamirez19/sisben-vulnerability-analysis",
    live: "https://proyecto-sisben.onrender.com/",
    image: "/images/projects/sisben/Inicio-sisben.png",
    images: [
      {
        src: "/images/projects/sisben/Inicio-sisben.png",
        title: "Main Interface",
        description: "Interfaz principal de la plataforma de análisis de vulnerabilidad SISBEN, proporcionando acceso a exploración de datos demográficos, indicadores sociales y herramientas analíticas para toma de decisiones."
      },
      {
        src: "/images/projects/sisben/DashBoard-DistribucionGeografica-sisben.png",
        title: "Geographical Distribution",
        description: "Panel interactivo que muestra la distribución geográfica de registros SISBEN en municipios y regiones, permitiendo análisis espacial de la vulnerabilidad poblacional."
      },
      {
        src: "/images/projects/sisben/DashBoard-ipm-Por-Region-sisben.png",
        title: "Multidimensional Poverty Index",
        description: "Panel analítico que presenta el Índice de Pobreza Multidimensional (IPM) por región, destacando diferencias socioeconómicas y tendencias relacionadas con la pobreza."
      },
      {
        src: "/images/projects/sisben/Modelo-Estrella-sisben.png",
        title: "Star Schema Model",
        description: "Modelo de almacén de datos en esquema de estrella diseñado para soportar análisis SISBEN a gran escala, generación de reportes y procesos de inteligencia empresarial."
      }
    ],
    stats: [
      { label: "Registros", value: "315K+" },
      { label: "Técnica", value: "K-Means" },
      { label: "Fuente", value: "SISBEN IV" },
    ],
  },
  {
    id: "greenscope",
    title: "GreenScope",
    subtitle: "Monitoreo ambiental y análisis de deforestación",
    description:
      "Plataforma enfocada en monitoreo ambiental y análisis de factores relacionados con la deforestación, con dashboards interactivos y centralización de información ambiental.",
    featured: false,
    role: "Developer",
    contributions: [],
    technologies: ["Power BI", "JavaScript", "HTML", "CSS", "Vercel", "Git LFS"],
    features: [
      "Dashboards interactivos",
      "Monitoreo ambiental",
      "Visualización de datos",
      "Centralización de información",
    ],
    category: "Data & Analytics",
    color: "#22C55E",
    github: "https://github.com/KevinTib2024/greenscope-environmental-monitoring",
    live: "https://green-scope-seven.vercel.app/",
    image: "/images/projects/greenscope/Inicio-GreenScope.png",
    images: [
      {
        src: "/images/projects/greenscope/Inicio-GreenScope.png",
        title: "Landing Page",
        description: "Página de inicio de la plataforma GreenScope, presentando características de monitoreo ambiental y herramientas de análisis de deforestación."
      },
      {
        src: "/images/projects/greenscope/DashBoard-General-greenscope.png",
        title: "General Dashboard",
        description: "Panel ambiental principal que proporciona una descripción general de indicadores clave, tendencias y métricas relacionadas con la deforestación mediante visualizaciones interactivas."
      },
      {
        src: "/images/projects/greenscope/DashBoard-kpi1-greenscope.png",
        title: "Environmental KPI",
        description: "Panel KPI enfocado en análisis ambiental a nivel país, permitiendo a los usuarios explorar indicadores de deforestación y sostenibilidad mediante filtros dinámicos."
      }
    ],
    stats: [],
  },
  {
    id: "sport-nutrition",
    title: "Sport Nutrition Platform",
    subtitle: "App web de ejercicio, nutrición y prevención de lesiones",
    description:
      "Aplicación web fullstack enfocada en ejercicio, nutrición y prevención de lesiones deportivas. Backend escalable con arquitectura por capas, API REST completa y chatbot integrado.",
    featured: false,
    role: "Backend Developer",
    contributions: [],
    technologies: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework", "Somee", "Vercel", "Tidio Chatbot"],
    features: [
      "Backend escalable",
      "API REST",
      "Arquitectura por capas (Controllers, DTOs, Models, Repository, Services)",
      "Migraciones automatizadas",
      "Chatbot integrado",
    ],
    category: "Backend",
    color: "#6366F1",
    github: "https://github.com/KevinTib2024/sport-nutrition-platform",
    live: "https://front-end-sport-nutrition-l8it.vercel.app/",
    image: "/images/projects/sport-nutrition/LoginSportNutrion.png",
    images: [
      {
        src: "/images/projects/sport-nutrition/LoginSportNutrion.png",
        title: "Authentication",
        description: "Interfaz de autenticación de usuario que permite acceso seguro a la plataforma Sport Nutrition y sus recursos de salud personalizados."
      },
      {
        src: "/images/projects/sport-nutrition/Registro-SportNutrition.png",
        title: "Registration",
        description: "Página de registro de usuario diseñada para recopilar información de cuenta y proporcionar acceso a servicios de nutrición y bienestar."
      },
      {
        src: "/images/projects/sport-nutrition/ChatBot-Inicio-SportNutrition.png",
        title: "Home with ChatBot",
        description: "Página principal de la plataforma Sport Nutrition con asistente chatbot integrado para orientación nutricional, hábitos saludables y soporte al usuario."
      }
    ],
    stats: [],
  },
  {
    id: "accounting-api",
    title: "Accounting Management API",
    subtitle: "Sistema backend para gestión contable",
    description:
      "Sistema backend para gestión contable con arquitectura por capas, lógica de negocio robusta y despliegue en Azure para pruebas y validación.",
    featured: false,
    role: "Backend Developer",
    contributions: [],
    technologies: ["ASP.NET Core", "SQL Server", "Entity Framework", "Azure"],
    features: [
      "API REST completa",
      "Arquitectura por capas",
      "Migraciones de base de datos",
      "Lógica de negocio",
      "Desplegado en Azure",
    ],
    category: "Backend",
    color: "#F59E0B",
    github: "https://github.com/KevinTib2024/accounting-management-api",
    live: null,
    image: "/images/projects/accounting/Swagger-SistemaDeGestionContable.png",
    images: [
      {
        src: "/images/projects/accounting/Swagger-SistemaDeGestionContable.png",
        title: "API Documentation",
        description: "Documentación interactiva de API generada con Swagger, proporcionando acceso a endpoints, parámetros de solicitud y servicios backend del sistema de gestión contable."
      },
      {
        src: "/images/projects/accounting/Diagrama-DB-SistemaDeGestionContable.png",
        title: "Database Structure",
        description: "Diagrama de Relaciones de Entidades (ERD) que ilustra la estructura de base de datos, entidades y relaciones que soportan la plataforma de gestión contable."
      }
    ],
    stats: [],
  },
  {
    id: "historical-game",
    title: "Historical Interactive Game",
    subtitle: "Videojuego educativo sobre historia de Colombia",
    description:
      "Videojuego educativo desarrollado en Unity inspirado en eventos históricos de Colombia y el Museo Nacional. Escenarios interactivos, narrativa histórica y mecánicas de exploración para el aprendizaje.",
    featured: false,
    role: "Contributor",
    contributions: [],
    technologies: ["Unity", "C#"],
    features: [
      "Escenarios interactivos",
      "Narrativa histórica",
      "Mecánicas de exploración",
      "Aprendizaje interactivo",
    ],
    category: "Game Dev",
    color: "#EC4899",
    github: "https://github.com/KevinRamirez19/historical-interactive-game",
    live: null,
    image: "/images/projects/historical-game/videoGame.gif",
    images: [
      {
        src: "/images/projects/historical-game/videoGame.gif",
        title: "Gameplay Trailer",
        description: "Tráiler oficial de juego que presenta escenarios históricos inmersivos, mecánicas de juego educativas y experiencias interactivas diseñadas para promover el aprendizaje mediante la exploración."
      }
    ],
    stats: [],
  },
];

export const experience = [
  {
    type: "education",
    title: "Ingeniería de Sistemas y Computación",
    organization: "Universidad de Cundinamarca",
    period: "2022 – Actualidad",
    description: "Estudiante de 9.º semestre en Ingeniería de Sistemas y Computación.",
    highlights: ["9.º semestre", "Sistemas", "Arquitectura", "Bases de datos"],
  },
  {
    type: "education",
    title: "Especialización en Análisis y Ciencia de Datos",
    organization: "Universidad de Cundinamarca",
    period: "2026 – Actualidad",
    description: "Programa de especialización enfocado en análisis de datos.",
    highlights: ["En curso", "Machine Learning", "Data Science", "Análisis"],
  },
  {
    type: "education",
    title: "Bachiller Técnico con Especialidad en Sistemas",
    organization: "Institución Educativa Diversificado de Chía",
    period: "Graduado en 2021",
    description: "Formación técnica en sistemas informáticos.",
    highlights: ["Técnico", "Programación", "Redes", "Sistemas"],
  },
];

export const certifications = [
  {
    id: "az900",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "Junio 2026",
    credentialId: "8F69503172D2D5D7",
    image: "/images/certifications/CertifiedAzureAZ900.png",
    color: "#0078D4",
    verify: "https://learn.microsoft.com/api/credentials/share/en-us/KEVINALEXANDER-9506/8F69503172D2D5D7?sharingId=C5824D2034B57A6B",
  },
];