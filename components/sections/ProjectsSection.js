// src/components/Projects.js
import FondoProjects from "../projects/FondoProjects";
import ProjectCard from "../projects/ProjectCard";
import ProjectCardNext from "../projects/ProjectCardNext";
import ProjectCarousel from "../projects/ProjectCarousel";
import projectsData from "@/data/projectsData"; // 🚀 Importamos los datos modularizados
import useReveal from "../hooks/useReveal";

export default function Projects() {
  const [revealRef, isVisible] = useReveal();
  return (
    <section id="proyectos"
    ref={revealRef}
     className="py-16 px-4 relative min-h-screen flex items-center">
      <div className="mx-auto w-full">
      <FondoProjects/>
<div className="relative z-10">
<ProjectCarousel>
  {/* 1. Mapeamos tus proyectos reales */}
  {projectsData.map((project, index) => (
    <ProjectCard
        key={project.title}
        project={project}
        priority={index === 0}
        style={{
            transitionDelay: `${index * 300}ms`
          }}
        classname={`transition-all
                  duration-700
          ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-100"
            }`}
    />
    
))}<ProjectCardNext />
</ProjectCarousel>
</div>
      </div>
    </section>
  );
}