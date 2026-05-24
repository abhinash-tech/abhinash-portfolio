import { IconType } from "react-icons";
import { FaBrain, FaRobot, FaFigma, FaAward, FaCode, FaCloud } from "react-icons/fa6";

export interface Certificate {
  id: string;
  title: string;
  organization: string[];
  skills: string[];
  date: string;
  credentialUrl?: string;
  image: string;
  description: string;
  icon: IconType;
  color: string;
  bgGlow: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    id: "openai-nxtwave",
    title: "OpenAI Academy x NxtWave Buildathon",
    organization: ["OpenAI", "NxtWave"],
    skills: ["Generative AI"],
    date: "12 Oct 2025",
    credentialUrl: "https://cdn1.ccbp.in/misc/openai-rg-c/Y6MBNE4SKY.png",
    image: "/certificates/openai-nxtwave.jpg",
    description: "Completed an intensive Generative AI buildathon focused on practical AI applications, modern AI tooling, and real-world problem-solving using advanced language models and AI workflows.",
    icon: FaBrain,
    color: "from-blue-400 to-cyan-400",
    bgGlow: "bg-blue-500/20"
  },
  {
    id: "agentathon",
    title: "Agentathon 2025",
    organization: ["GDG Hyderabad"],
    skills: ["Agentic AI"],
    date: "21 Dec 2025",
    credentialUrl: "https://firebasestorage.googleapis.com/v0/b/agentathon-hyd-25.firebasestorage.app/o/certificates%2FJangapallyAbhinash_certificate_5961.pdf",
    image: "/certificates/agentathon.jpg",
    description: "Participated in a large-scale Agentic AI hackathon exploring autonomous AI systems, multi-agent workflows, intelligent automation, and next-generation AI application development.",
    icon: FaRobot,
    color: "from-rose-400 to-orange-400",
    bgGlow: "bg-rose-500/20"
  },
  {
    id: "mcp-workshop",
    title: "Model Context Protocol Workshop",
    organization: ["NxtWave"],
    skills: ["AI Agents", "MCP"],
    date: "24 Aug 2025",
    credentialUrl: "https://cdn1.ccbp.in/misc/workshop-acad-mcp-mega-workshop-completion/2BW51IZ5WT.png",
    image: "/certificates/mcp-workshop.jpg",
    description: "Completed a hands-on workshop focused on AI agents, Model Context Protocol (MCP), and modern AI interaction systems for building context-aware intelligent applications.",
    icon: FaAward,
    color: "from-emerald-400 to-teal-400",
    bgGlow: "bg-emerald-500/20"
  },
  {
    id: "figmania",
    title: "Figmania UI/UX Challenge",
    organization: ["Anurag University"],
    skills: ["Figma Design", "UI/UX"],
    date: "21 Aug 2025",
    image: "/certificates/figmania.jpg",
    description: "Secured Runner-up in the Figma Challenge at Figmania 2025, demonstrating premium UI/UX design capabilities and rapid prototyping skills.",
    icon: FaFigma,
    color: "from-purple-400 to-pink-400",
    bgGlow: "bg-purple-500/20"
  },
  {
    id: "nxtcode",
    title: "NxtCode - AI Powered Challenge",
    organization: ["NxtWave"],
    skills: ["Coding", "Logical Problem Solving", "Analytical Thinking"],
    date: "08 Feb 2025",
    credentialUrl: "https://cdn1.ccbp.in/misc/nxtcode25under5-completion/F3DKHX68ZN.png",
    image: "/certificates/nxtcode.jpg",
    description: "Participated in an AI-powered coding challenge focused on logical problem-solving, coding efficiency, and rapid analytical thinking through competitive programming and decoding-based tasks.",
    icon: FaCode,
    color: "from-yellow-400 to-amber-500",
    bgGlow: "bg-yellow-500/20"
  },
  {
    id: "innoquest",
    title: "Innoquest Hackathon",
    organization: ["Azure Developer Community", "Reskilll"],
    skills: ["Azure", "Git", "GitHub Copilot", "Cloud Development"],
    date: "05 Nov 2025",
    image: "/certificates/innoquest-hackathon.png",
    description: "Participated in the Innoquest Hackathon exploring cloud development workflows, Git-based collaboration, Azure ecosystem tools, and AI-assisted development using GitHub Copilot.",
    icon: FaCloud,
    color: "from-cyan-400 to-blue-500",
    bgGlow: "bg-cyan-500/20"
  }
];
