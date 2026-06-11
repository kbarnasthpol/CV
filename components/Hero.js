"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const elEscritura = useRef(null);

  useEffect(() => {
    const typed = new Typed(elEscritura.current, {
      strings: [
        'KEVIN BARNASTHPOL.', 
        'PROGRAMADOR FRONTEND.', 
        'ESTUDIANTE TECNOLÓGICO.', 
        'ENTUSIASTA DEL CÓDIGO.'
      ],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
      contentType: 'html',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex flex-col items-center justify-center bg-fondo text-texto-para-fondo transition-colors duration-300 px-6 overflow-hidden"
    >
      {/* Elemento estético de fondo (Gradiente suave opcional para darle un toque premium) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primario-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl text-center z-10 flex flex-col items-center justify-center">
        {/* TÍTULO PRINCIPAL */}
        <h1 className="text-4xl text-texto-para-fondo sm:text-5xl md:text-6xl font-extrabold tracking-tight min-h-[96px] sm:min-h-[60px] md:min-h-[72px] flex items-center justify-center flex-wrap gap-x-3">
          HOLA, SOY 
          <span 
            ref={elEscritura} 
            className="text-diferencias border-r-2 border-principal whitespace-nowrap"
          ></span>
        </h1>

        {/* SUBTÍTULO / DESCRIPCIÓN */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-texto-para-fondo max-w-2xl leading-relaxed">
          Desarrollador Frontend enfocado en crear soluciones web limpias, modernas y eficientes.
        </p>

        {/* BOTONES / CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a 
            href="#proyectos" 
            className="w-full sm:w-auto px-8 h-12 flex items-center justify-center text-sm font-semibold tracking-wider bg-contraste hover:bg-diferencias dark:hover:text-contraste text-fondo rounded-lg shadow-lg shadow-principal-500/20 dark:shadow-none transition-all duration-300"
          >
            MIS PROYECTOS
          </a>
          <a 
            href="#contacto" 
            className="w-full sm:w-auto px-8 h-12 flex items-center justify-center text-sm font-semibold tracking-wider bg-contraste hover:bg-diferencias dark:hover:text-contraste text-fondo rounded-lg shadow-lg shadow-principal-500/20 dark:shadow-none transition-all duration-300"
          >
            CONTACTARME
          </a>
        </div>
      </div>

      {/* INDICADOR DE SCROLL ANIMADO */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <div className="w-6 h-10 border-2 border-contraste rounded-full flex justify-center p-1">
          <div className="w-1.5 h-2 bg-secundario rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}