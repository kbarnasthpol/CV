// ProjectCard.jsx

import Image from "next/image";
import { memo } from "react";

function ProjectCard({ project, priority = false }) {
  return (
    <div
      className="
  data-project={project.title}
    group
    bg-primario
    opacity-95
    hover:opacity-100
    border-2
    border-contraste
    shadow-md
    hover:shadow-2xl
    transition-all
    duration-300
    overflow-hidden
    flex
    flex-col
    rounded-xl
    transform
    w-[320px]
    md:w-[360px] hover:shadow-secundario

    min-h-[480px]
    snap-center
flex-shrink-0
  "
    >
      {/* Contenedor de la imagen */}
      <div className="relative w-full h-52 bg-black overflow-hidden rounded-t-xl">
        <Image
          src={project.image}
          alt={`Captura de pantalla de ${project.title}`}
          fill
          className="object-cover grayscale brightness-50 opacity-60 transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 group-hover:scale-105"
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
      </div>

      <div className="flex flex-col flex-grow">

        {/* Contenido con padding */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold uppercase text-contraste text-center mb-5 relative inline-block left-1/2 -translate-x-1/2 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-diferencias">
            {project.title}
          </h3>

          <p className="text-contraste mb-4 flex-grow text-sm leading-relaxed line-clamp-5">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 ">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tag}
                className="bg-contraste text-texto-para-contraste text-xs font-semibold px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Botones pegados abajo */}
        <div className="flex mt-auto bg-contraste">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-12 hover:bg-dejarWEB border-t border-fondo dark:border-contraste dark:text-contraste dark:bg-fondo text-fondo flex items-center justify-center gap-2 text-sm font-medium transition-colors"
          >
            Ver Sitio
            <i className="fas fa-external-link-alt text-xs"></i>
          </a>

          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-12 bg-contraste hover:bg-dejarWEB border-l border-t border-fondo dark:border-contraste dark:text-contraste dark:bg-fondo text-fondo flex items-center justify-center gap-2 text-sm font-medium transition-all duration-300"
            >
              <i className="fab fa-github"></i>
              Código
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
export default memo(ProjectCard);