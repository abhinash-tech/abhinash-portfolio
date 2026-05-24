import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abhinash Jangapally — Software Developer & ML Engineer",
  description:
    "Portfolio of Abhinash Jangapally — Computer Science student passionate about Machine Learning, software engineering, and building impactful digital products.",
  keywords: [
    "Abhinash Jangapally",
    "Software Developer",
    "ML Engineer",
    "AI Enthusiast",
    "Portfolio",
    "Next.js",
    "React",
    "Machine Learning",
  ],
  authors: [{ name: "Abhinash Jangapally" }],
  creator: "Abhinash Jangapally",
  openGraph: {
    title: "Abhinash Jangapally — Software Developer & ML Engineer",
    description:
      "Designing and developing modern AI-powered experiences. Computer Science student passionate about ML and software engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinash Jangapally — Software Developer & ML Engineer",
    description:
      "Designing and developing modern AI-powered experiences.",
  },
};

import Navbar from "@/components/ui/Navbar";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#07070e] text-[#e8eaf0] flex flex-col selection:bg-indigo-500/30 selection:text-white">
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
