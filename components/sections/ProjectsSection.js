// src/components/Projects.js
import FondoProjects from "../projects/FondoProjects";
import ProjectCard from "../projects/ProjectCard";
import ProjectCardNext from "../projects/ProjectCardNext";
import ProjectCarousel from "../projects/ProjectCarousel";
import projectsData from "@/data/projectsData"; // 🚀 Importamos los datos modularizados

export default function Projects() {
  return (
    <section id="proyectos" className="py-16 px-4 relative min-h-screen flex items-center">
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
    />
    
))}<ProjectCardNext />
</ProjectCarousel>
</div>
      </div>
    </section>
  );
}