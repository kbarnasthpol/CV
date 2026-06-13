"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const elEscritura = useRef(null);
  const heroRef = useRef(null); // Corregido: Declaramos la referencia para el Observer

  useEffect(() => {
    const typed = new Typed(elEscritura.current, {
      strings: [
        "Desarrollador Frontend.<br><span class='text-secundario text-3xl sm:text-4xl md:text-5xl dark:text-diferencias font-semibold'>Creando soluciones web limpias.</span>",
        "Estudiante Tecnológico.<br><span class='text-secundario text-3xl sm:text-4xl md:text-5xl dark:text-diferencias font-semibold'>Apasionado por interfaces modernas.</span>",
        "Entusiasta del Código.<br><span class='text-secundario text-3xl sm:text-4xl md:text-5xl  dark:text-diferencias font-semibold'>Escribiendo código escalable y eficiente.</span>"
      ],
      typeSpeed: 70,
      backSpeed: 20,
      backDelay: 1400,
      loop: true,
      contentType: 'html',
      cursorChar: '|',
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // 2. Intersection Observer para controlar el Header al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const header = document.querySelector("header"); // Selecciona tu componente Header
        if (!header) return;

        if (!entry.isIntersecting) {
          // Cuando pasamos el Hero: mostramos el header con efectos visuales
          header.classList.remove("-translate-y-full", "opacity-0");
          header.classList.add("translate-y-0", "opacity-100", "backdrop-blur-md", "shadow-md");
        } else {
          // Mientras estemos en el Hero: se oculta por completo hacia arriba
          header.classList.remove("translate-y-0", "opacity-100", "backdrop-blur-md", "shadow-md");
          header.classList.add("-translate-y-full", "opacity-0");
        }
      },
      { threshold: 0.15 } // Se dispara cuando queda un 15% del Hero en pantalla
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section 
      ref={heroRef} // Corregido: Enlazamos la referencia aquí para que el Observer funcione
      id="inicio" 
      className="relative min-h-screen flex flex-col items-center justify-center bg-fondo text-texto-para-fondo transition-colors duration-300 px-6 overflow-hidden"
    >
      {/* Elemento estético de fondo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primario-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-4xl text-center z-10 flex flex-col items-center justify-center">
        
        <div className="w-full max-w-5xl mx-auto">
          <div className="
            grid 
            grid-cols-1
            sm:gap-x-10
            sm:grid-cols-[auto_1fr] 
            gap-x-2
            text-4xl sm:text-5xl md:text-6xl 
            font-extrabold tracking-tight
            text-center sm:text-left
          ">
            
            {/* Columna 1 - HOLA SOY + NOMBRE VERTICAL */}
<div className="flex flex-col items-center sm:items-start select-none relative">              <span className="text-3xl whitespace-nowrap">
                HOLA, SOY
              </span>
              {/* Nombre en vertical a 270° debajo y a la derecha */}
              <span
  className="
    block sm:hidden
    mt-2
    text-2xl
    font-semibold
    text-primario
  "
>
  KEVIN BARNASTHPOL
</span>

<span
  className="
    hidden sm:block
    absolute
    left-full
    top-1/2
    -translate-y-1/2
    ml-0
    mt-5

    rotate-180
    [writing-mode:vertical-rl]

    text-4xl
    font-semibold
    text-primario
    whitespace-nowrap
  "
>
  KEVIN BARNASTHPOL
</span>
            </div>

            {/* Columna 2 */}
            <span 
              ref={elEscritura} 
              className="
                text-diferencias
                dark:text-secundario
                break-words
                inline
               min-h-[6.5em] sm:min-h-[5em] md:min-h-[5.5em]
                typed-text
                uppercase
                mt-4 sm:mt-0
              "
            ></span>

          </div>
        </div>
      </div>

      {/* INDICADOR DE SCROLL ANIMADO */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none animate-bounce">
        <div className="w-6 h-10 border-2 border-contraste rounded-full flex justify-center p-1">
          <div className="w-1.5 h-2 bg-secundario rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}