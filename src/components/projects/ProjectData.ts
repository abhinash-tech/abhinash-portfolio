import { Rocket, Brain, LineChart, TrendingUp, ShieldCheck } from "lucide-react";

export type ProjectCategory = "All" | "AI/ML" | "Full Stack" | "Frontend" | "Analytics";

export const CATEGORIES: ProjectCategory[] = ["All", "AI/ML", "Full Stack", "Frontend", "Analytics"];

export interface ProjectMetric {
  label: string;
  value: string;
  description: string;
  icon: any;
}

export interface GithubStats {
  stars: number;
  forks: number;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  categories: ProjectCategory[];
  techStack: string[];
  features: string[];
  metrics: ProjectMetric[];
  githubUrl: string;
  liveUrl: string | null;
  heroImage: string;
  aboutImage: string;
  theme: {
    textLight: string;
    bgGlow: string;
    glowHover: string;
    borderHover: string;
    iconHover: string;
  };
  githubStats: GithubStats;
}

export const PROJECTS: Project[] = [
  {
    id: "olvian-co",
    title: "Olvian.co",
    type: "Full Stack Agency Platform",
    description: "A modern digital growth agency platform engineered to help brands scale through strategic marketing, creative services, and technology-driven solutions. Built with a performance-first architecture delivering a fast, lightweight, and responsive experience without relying on heavy frontend frameworks.",
    categories: ["Full Stack", "Frontend"],
    techStack: ["HTML5", "CSS3", "Vanilla JS", "Python", "Formspree", "LocalStorage API"],
    features: [
      "Digital Marketing & SEO",
      "Social Media Management",
      "Website Development",
      "Automated Page Generation",
      "Smart Booking System",
      "Moodle LMS Administration"
    ],
    metrics: [
      { 
        label: "Performance First", 
        value: "Lightweight Architecture", 
        description: "Vanilla JS architecture delivering maximum speed and conversion rates.",
        icon: TrendingUp 
      }
    ],
    githubUrl: "https://github.com/abhinash-tech/Olvian-co",
    liveUrl: "https://olvian-co.netlify.app/",
    heroImage: "/projects/olvian-hero.png",
    aboutImage: "/projects/olvian-about.png",
    theme: {
      textLight: "text-rose-400",
      bgGlow: "bg-rose-500/10",
      glowHover: "group-hover:bg-rose-500/20",
      borderHover: "hover:border-rose-500/30",
      iconHover: "group-hover/stat:text-rose-400"
    },
    githubStats: { stars: 12, forks: 4 }
  },
  {
    id: "student-predictor",
    title: "Student Performance Predictor",
    type: "AI-Powered Academic Analytics Platform",
    description: "An AI-powered academic early-warning system designed for engineering institutions to identify at-risk students using predictive analytics and weighted scoring algorithms. Classifies students into risk categories with confidence scoring to enable early intervention.",
    categories: ["AI/ML", "Full Stack", "Analytics"],
    techStack: ["Node.js", "Express.js", "MySQL", "HTML5", "CSS3", "JavaScript", "JWT Auth", "bcryptjs"],
    features: [
      "Risk Prediction Engine",
      "Confidence Scoring",
      "Subject-wise Analysis",
      "AI Improvement Suggestions",
      "Attendance & Marks Analytics",
      "Secure Authentication"
    ],
    metrics: [
      { 
        label: "Prediction Accuracy", 
        value: "85%", 
        description: "High-accuracy classification for at-risk student identification.",
        icon: Brain 
      },
      {
        label: "Security",
        value: "JWT Secure",
        description: "End-to-end secure authentication and protected data access.",
        icon: ShieldCheck
      }
    ],
    githubUrl: "https://github.com/abhinash-tech/Student-Performance-Predictor",
    liveUrl: null,
    heroImage: "/projects/predictor-hero.png",
    aboutImage: "/projects/predictor-about.png",
    theme: {
      textLight: "text-blue-400",
      bgGlow: "bg-blue-500/10",
      glowHover: "group-hover:bg-blue-500/20",
      borderHover: "hover:border-blue-500/30",
      iconHover: "group-hover/stat:text-blue-400"
    },
    githubStats: { stars: 24, forks: 8 }
  }
];
