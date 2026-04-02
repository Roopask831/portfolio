import {
  Monitor,
  Server,
  Database,
  Wrench,
  BrainCircuit,
  Palette,
} from "lucide-react";

export const skillGroups = [
  {
    Icon: Monitor,
    cat: "Frontend",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Chart.js"],
  },
  {
    Icon: Server,
    cat: "Backend",
    skills: ["Node.js", "Express.js", "Spring Boot", "Microservices", "REST APIs"],
  },
  {
    Icon: Database,
    cat: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase", "Firestore"],
  },
  {
    Icon: Wrench,
    cat: "Tools & Platforms",
    skills: ["Git", "GitHub", "AWS", "Docker", "Kubernetes"],
  },
  {
    Icon: BrainCircuit,
    cat: "AI & Geospatial",
    skills: ["LLaMA 3", "Groq API", "Leaflet.js", "GeoTIFF.js", "Google Earth Engine", "NumPy"],
  },
  {
    Icon: Palette,
    cat: "Languages",
    skills: ["C", "Java", "JavaScript", "SQL"],
  },
];