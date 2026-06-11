"use client";
import { useEffect } from "react";
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
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
      <main className="snap-container">
        <div className="snap-section">
         <Hero/>
        </div>
        <div className="snap-section">
        <About/>
        </div>
        <div className="snap-section">
        <Skills/>
        </div>
        <div className="snap-section">
        <Projects/>
        </div>
        <div className="snap-section">
        <Contact/>
        </div>
      </main>
    </>
  );
}
