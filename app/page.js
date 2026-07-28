"use client";
import { useEffect } from "react";
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from "../components/sections/ProjectsSection";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";
import MobileDivider from "../components/sections/MobileDivider";
import { SpeedInsights } from "@vercel/speed-insights/next"


export default function Home() {
  
  // Lógica nativa de IntersectionObserver para iluminar el menú (efecto web de abogados)
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navItems.forEach((link) => {
              link.classList.remove("nav-active");
              if (link.getAttribute("href") === `#${entry.target.id}`) {
                link.classList.add("nav-active");
              }
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <main className="snap-container max-w-full overflow-hidden">
        <div className="snap-section">
         <Hero/>
        </div>
        <div className="snap-section">
        <About/>
        </div>
        <MobileDivider title="SKILLS" />
        <div className="snap-section">
        <Skills/>
        </div>
        <MobileDivider title="PROJECTS" />
        <div className="snap-section">
        <Projects/>
        </div>
        <MobileDivider title="CONTACT" />
        <div className="snap-section">
        <Contact/>
        </div>
      </main>
    </>
  );
}
