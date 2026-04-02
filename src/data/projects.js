export const projects = [
  {
    id: 1,
    title: "Flash Flood Vulnerability Mapping",
    thumb: "linear-gradient(135deg, #1a4a6b 0%, #2d7d9a 50%, #74b9d0 100%)",
    short:
      "Real-time flood forecasting system using terrain analysis and live weather APIs to generate 48-hour prediction maps.",
    tags: ["Python", "Leaflet.js", "NASA API", "NOAA", "GIS"],
    github: "https://github.com/Roopask831/flashflood_vulnerability",
    live: null,
    overview:
      "A geospatial intelligence platform that combines digital elevation model analysis with real-time meteorological data to forecast flash flood risk across regions.",
    problem:
      "Flash floods are among the deadliest natural disasters, often with little warning time. Existing solutions are too complex for emergency responders or lack real-time integration. This system bridges that gap.",
    implementation:
      "Built terrain analysis pipelines using DEM data to compute elevation, slope, and flow accumulation. Integrated three live weather APIs (NASA POWER, NOAA, Open-Meteo) to layer precipitation forecasts. Leaflet.js renders dynamic risk maps with color-coded vulnerability zones.",
    features: [
      "DEM-based terrain analysis (elevation, slope, flow accumulation)",
      "Live data from NASA POWER + NOAA + Open-Meteo APIs",
      "48-hour flood prediction map generation",
      "Interactive Leaflet.js vulnerability visualization",
    ],
    tech: ["Python", "Leaflet.js", "NASA POWER API", "NOAA API", "Open-Meteo", "GIS", "NumPy"],
  },
  {
    id: 2,
    title: "Expense Tracker",
    thumb: "linear-gradient(135deg, #1a3a5c 0%, #2563a8 50%, #4f9cf0 100%)",
    short:
      "Full-stack personal finance app with Firebase auth, real-time charts, budget alerts, and PWA support.",
    tags: ["Firebase", "Chart.js", "JavaScript", "PWA", "Excel Export"],
    github: "https://github.com/Roopask831/expense-tracker",
    live: "https://roopask831.github.io/expense-tracker/dashboard.html",
    overview:
      "A production-ready personal finance management application that helps users track expenses, visualize spending patterns, set budgets, and export data — all in a responsive PWA.",
    problem:
      "Most expense trackers are either too complex or don't work offline. This app needed to feel native, work without internet, and give meaningful financial insights at a glance.",
    implementation:
      "Firebase handles authentication and Firestore for real-time data sync across devices. Chart.js powers dynamic spending breakdowns. Budget thresholds trigger in-app alerts. The app is installable as a PWA with offline support.",
    features: [
      "Firebase Authentication + Firestore real-time sync",
      "Chart.js interactive graphs (spending trends, category breakdown)",
      "Smart budget alerts when thresholds are exceeded",
      "Excel export for financial reporting",
      "Progressive Web App — installable, offline-capable",
    ],
    tech: ["Firebase", "Firestore", "Chart.js", "JavaScript", "HTML5", "CSS3", "PWA / Service Workers"],
  },
  {
    id: 3,
    title: "Resume Analysis",
    thumb: "linear-gradient(135deg, #2d1b4e 0%, #5b3b8c 50%, #9b6de0 100%)",
    short:
      "AI-powered resume optimizer using LLaMA 3 for ATS scoring, keyword matching, and personalized recommendations.",
    tags: ["LLaMA 3", "Groq API", "React", "AI", "NLP"],
    github: "https://github.com/Roopask831/resumeanalysis",
    live: "https://resumeanalysis-chi.vercel.app/",
    overview:
      "An AI-driven web application that analyzes resumes against job descriptions using large language models, providing ATS compatibility scores and actionable improvement suggestions.",
    problem:
      "Most job seekers don't know why their resume fails ATS filters. This tool demystifies the process with transparent scoring and specific, LLM-generated suggestions.",
    implementation:
      "React frontend with a clean UX for uploading resumes and job descriptions. The Groq API calls LLaMA 3 for semantic analysis. The system computes keyword match scores, identifies gaps, and generates contextual recommendations ranked by impact.",
    features: [
      "LLaMA 3 via Groq API for semantic resume analysis",
      "ATS keyword matching and compatibility scoring",
      "Personalized improvement recommendations system",
      "Side-by-side job description vs resume comparison",
      "React-based responsive architecture",
    ],
    tech: ["React", "LLaMA 3", "Groq API", "JavaScript", "Vercel", "NLP"],
  },
];