// ProjectCardNext.jsx

import { useState, useEffect } from "react";

export default function ProjectCardNext({ isVisible, index }) {
  const [hasEnteredState, setHasEnteredState] = useState(false);

  const hasEntered = isVisible ? hasEnteredState : false;

  return (
    <div
      style={{
        transitionDelay: hasEntered ? '0ms' : `${index * 200}ms`,
      }}
      onTransitionEnd={(e) => {
        if (e.target === e.currentTarget && isVisible && !hasEnteredState) {
          setHasEnteredState(true);
        }
      }}
      className={`
        group border-2 border-dashed border-contraste/50 bg-primario/60 
        hover:bg-primario/80 hover:border-contraste shadow-sm hover:shadow-md 
        rounded-xl flex flex-col justify-center 
        items-center p-8 text-center w-[320px]
        md:w-[360px] min-h-[480px] z-10 snap-center flex-shrink-0
        transition-all duration-700 transform
        ${
          isVisible
            ? "opacity-90 translate-y-0 scale-100 blur-[0px]"
            : "opacity-0 translate-y-10 scale-90 blur-sm"
        }
      `}
    >
      {/* Icono interactivo animado */}
      <div
        className={`w-16 h-16 rounded-full border-2 border-dashed border-contraste/40 flex items-center justify-center mb-6 text-contraste/60 group-hover:text-contraste group-hover:border-contraste group-hover:scale-110 transition-all duration-500
          ${
            isVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75"
          }
        `}
      >
        <i className="fas fa-code text-2xl animate-pulse"></i>
      </div>

      {/* Título con animación */}
      <h3
        className={`text-xl font-bold uppercase text-contraste mb-3 transition-all duration-700
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }
        `}
      >
        ¿Tu próximo proyecto?
      </h3>

      {/* Descripción con animación */}
      <p
        className={`text-contraste/80 hover:text-contraste max-w-xs font-semibold text-sm leading-relaxed mb-6 transition-all duration-700
          ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-6"
          }
        `}
      >
        Estoy listo para ayudarte a materializar tus ideas con arquitecturas modernas, optimización SEO y un rendimiento excepcional.
      </p>

      {/* Botón de acción con animación */}
      <a
        href="#contacto"
        className={`border-2 border-contraste text-contraste hover:bg-contraste hover:text-texto-para-contraste px-5 py-2 rounded-lg font-medium text-sm transition-all duration-500 transform group-hover:scale-105
          ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }
        `}
      >
        Empecemos a hablar <i className="fas fa-arrow-right ml-1 text-xs"></i>
      </a>
    </div>
  );
}