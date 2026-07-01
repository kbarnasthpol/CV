"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
  const elEscritura = useRef(null);
  const heroRef = useRef(null); // Corregido: Declaramos la referencia para el Observer

  useEffect(() => {
    const typed = new Typed(elEscritura.current, {
      strings: [
        "Desarrollador Frontend.<br><span class='text-secundario text-3xl sm:text-4xl md:text-5xl dark:text-texto-para-contraste font-semibold'>Creando soluciones web limpias.</span>",
        "Estudiante Tecnológico.<br><span class='text-secundario text-3xl sm:text-4xl md:text-5xl dark:text-texto-para-contraste font-semibold'>Apasionado por interfaces modernas.</span>",
        "Entusiasta del Código.<br><span class='text-secundario text-3xl sm:text-4xl md:text-5xl  dark:text-texto-para-contraste font-semibold'>Escribiendo código escalable y eficiente.</span>"
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
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40 blur-[2px]">
  <svg
    className="absolute w-full h-full animate-code-float text-primario dark:text-secundario"
    viewBox="0 0 1000 1000"
    preserveAspectRatio="xMidYMid slice"
    style={{
      WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
      maskImage: "linear-gradient(to bottom, black 70%, transparent 95%)",
    }}
  >
    <defs>
      <pattern
        id="codePattern"
        width="1000"
        height="225"
        patternUnits="userSpaceOnUse"
      >
        <g
          fill="currentColor"
          fontSize="15"
          fontFamily="monospace"
          letterSpacing="-1"
        >
          <text x="0" y="25" textLength="1000">
            const app = () =&gt; &#123; return &lt;Hero /&gt; &#125;; function fetchData() &#123; return fetch('/api') &#125;;
          </text>
          <text x="0" y="50" textLength="1000">
            useEffect(() =&gt; &#123; load() &#125;, []); if (loading) return &lt;Spinner /&gt;;
          </text>
          <text x="0" y="75" textLength="1000">
            const debounce = (fn) =&gt; &#123;&#125;; requestAnimationFrame(loop);
          </text>
          <text x="0" y="100" textLength="1000">
            const user = &#123; name: "Kevin", role: "Frontend Dev" &#125;;
          </text>
          <text x="0" y="125" textLength="1000">
            map(data =&gt; data.map(x =&gt; x.id)); async function getUsers() &#123;&#125;;
          </text>
          <text x="0" y="150" textLength="1000">
            function render() &#123; return &lt;Component /&gt; &#125;;
          </text>
          <text x="0" y="175" textLength="1000">
            localStorage.setItem('key', value); Promise.resolve();
          </text>
          <text x="0" y="200" textLength="1000">
            const ctx = createContext(); useContext(ctx);
          </text>
          <text x="0" y="225" textLength="1000">
            let theme = dark ? 'dark' : 'light'; fetch('/api/data');
          </text>
        </g>
      </pattern>
    </defs>

    {/* Pintamos el patrón original */}
    <rect width="100%" height="100%" fill="url(#codePattern)" />
    {/* Pintamos un duplicado desplazado justo abajo para crear el bucle sin saltos */}
    <rect width="100%" height="100%" fill="url(#codePattern)" y="225" />
  </svg>
</div>
      <div className="container mx-auto max-w-4xl text-center z-10 flex flex-col items-center justify-center">
        
        <div className="w-full max-w-6xl bg-primario/70 dark:bg-diferencias/70 mx-auto">
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
            <div className="flex flex-col items-center sm:items-start select-none relative">

              <span className="text-3xl mt-1 ml-3 whitespace-nowrap text-texto-para-contraste ">
                HOLA, SOY
              </span>
              {/* Nombre horizontal comun  */}
              <span
                className="
    block sm:hidden
    mt-2
    text-2xl
    font-semibold
  "
              >
                KEVIN BARNASTHPOL
              </span>

              <span
                className="
    hidden sm:block
    relative
    left-full
    bot-auto
     ml-[-40]
    mt-0

    rotate-180
    [writing-mode:vertical-rl]

    text-4xl
    font-semibold
        text-diferencias
        dark:text-contraste
    whitespace-nowrap
  "
              >
                KEVIN <br></br>BARNASTHPOL
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
               min-h-[6em] sm:min-h-[5em] md:min-h-[5em]
                typed-text
                uppercase
                mt-4 sm:mt-0
                select-none
              "
            ></span>

          </div>
        </div>
      </div>

      {/* INDICADOR DE SCROLL ANIMADO */}
      <div className="absolute hidden sm:block bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none animate-bounce">
        <div className="w-6 h-10 border-2 border-contraste rounded-full flex justify-center p-1">
          <div className="w-1.5 h-2 bg-secundario rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}