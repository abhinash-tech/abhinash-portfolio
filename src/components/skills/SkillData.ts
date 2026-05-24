import { IconType } from "react-icons";
import { 
  SiPython, SiC, SiCplusplus, SiJavascript,
  SiReact, SiNodedotjs, 
  SiMysql, SiMongodb, SiGithub,
  SiKaggle, SiDiscord 
} from "react-icons/si";
import { FaBrain, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { IoRocketOutline } from "react-icons/io5";
import { TbBrandVscode } from "react-icons/tb";

export type SkillCategory = "Programming" | "Frontend" | "Backend" | "AI/ML" | "Databases" | "Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: IconType;
  color: string;
}

export const SKILLS: Skill[] = [
  // Orbit 1: Frontend & Basic (Radius 140)
  { name: "HTML", category: "Frontend", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", category: "Frontend", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", category: "Programming", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB" },
  
  // Orbit 2: Languages, Backend & DB (Radius 240)
  { name: "Python", category: "Programming", icon: SiPython, color: "#3776AB" },
  { name: "Java", category: "Programming", icon: FaJava, color: "#007396" },
  { name: "C", category: "Programming", icon: SiC, color: "#A8B9CC" },
  { name: "C++", category: "Programming", icon: SiCplusplus, color: "#00599C" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#339933" },
  { name: "MySQL", category: "Databases", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", category: "Databases", icon: SiMongodb, color: "#47A248" },

  // Orbit 3: AI/ML & Tools (Radius 340)
  { name: "Machine Learning", category: "AI/ML", icon: FaBrain, color: "#FF6F00" },
  { name: "GitHub", category: "Tools", icon: SiGithub, color: "#ffffff" },
  { name: "VS Code", category: "Tools", icon: TbBrandVscode, color: "#007ACC" },
  { name: "Antigravity", category: "Tools", icon: IoRocketOutline, color: "#818cf8" },
  { name: "Kaggle", category: "Tools", icon: SiKaggle, color: "#20BEFF" },
  { name: "Discord", category: "Tools", icon: SiDiscord, color: "#5865F2" }
];

export const ORBIT_DATA = [
  { radius: 140, duration: 25, skills: SKILLS.slice(0, 4) },
  { radius: 240, duration: 35, skills: SKILLS.slice(4, 11) },
  { radius: 340, duration: 45, skills: SKILLS.slice(11) }
];
