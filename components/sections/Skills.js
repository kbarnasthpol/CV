"use client";
import { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";
const skillsData = [
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "React / Next.js", icon: "fab fa-react" },
  { name: "Git & GitHub", icon: "fab fa-github" },
];

export default function Skills() {
  const [revealRef, isVisible] = useReveal();
  const CARD_WIDTH = 256;
  const GAP = 24;
  const ITEM_WIDTH = CARD_WIDTH + GAP;

  // 🔹 Duplicamos más veces para asegurar cobertura completa
  const repeatedSkills = [
    ...skillsData,
    ...skillsData,
    ...skillsData,
    ...skillsData,
    ...skillsData,
    ...skillsData, // 6 veces para estar seguros
  ];

  const singleSetWidth = skillsData.length * ITEM_WIDTH;
  
  // 🔹 Offset inicial: comenzamos en 0 para que la fila 1 empiece llena
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev - 0.75;
        // 🔹 Reset cuando llegamos al final de un set completo
        if (newOffset <= -singleSetWidth) {
          return 0;
        }
        return newOffset;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [singleSetWidth]);

  // 🔹 Para la fila 2: empezamos con medio set de desfase pero positivo
  // así la fila 2 comienza mostrando los elementos que la fila 1 ya mostró
  const row2Offset = offset + singleSetWidth / 2;
  
  // 🔹 Si el offset de la fila 2 es positivo, lo llevamos a negativo
  // para que siempre muestre elementos desde el principio
  const finalRow2Offset = row2Offset > 0 ? row2Offset - singleSetWidth : row2Offset;

  return (
    <section id="habilidades"
    ref={revealRef}
     className="py-16 overflow-hidden min-h-screen flex items-center relative">
      <div className="w-full mx-auto">
      {/* ─── CAPA DE FONDO: EFECTO DE PROFUNDIDAD 3D DE PALABRAS REPETIDAS ─── */}
<div className="absolute inset-0 pointer-events-none select-none overflow-hidden font-black tracking-widest uppercase text-neutral-500">
  <div className={`z-0
  transition
    duration-2500
    delay-500
    ease-out
    ${isVisible
? "opacity-100"
: "opacity-0"}
    `}>
  {/* ================= CAPA LEJANA (Opacidad: 0.20 + Mucho Blur = Fondo Profundo) ================= */}
  <span className="absolute text-5xl md:text-7xl top-[5%] left-[8%] rotate-[-15deg] opacity-20 blur-[3px]">
    SKILLS
  </span>
  <span className="absolute text-7xl md:text-9xl top-[35%] right-[5%] rotate-[20deg] opacity-20 blur-[2px]">
    SKILLS
  </span>
  <span className="absolute text-6xl md:text-8xl bottom-[40%] left-[4%] rotate-[-8deg] opacity-20 blur-[3px]">
    SKILLS
  </span>
  <span className="absolute text-8xl md:text-[11rem] bottom-[10%] right-[12%] rotate-[35deg] opacity-20 blur-[4px]">
    SKILLS
  </span>

  {/* ================= CAPA MEDIA (Opacidad: 0.50 + Sin Blur = Plano de Lectura Suave) ================= */}
  <span className="absolute text-4xl md:text-6xl top-[22%] left-[25%] rotate-[12deg] opacity-50">
    SKILLS
  </span>
  <span className="absolute text-5xl md:text-7xl top-[55%] right-[28%] rotate-[-18deg] opacity-50">
    SKILLS
  </span>
  <span className="absolute text-6xl md:text-8xl bottom-[25%] left-[30%] rotate-[5deg] opacity-50">
    SKILLS
  </span>
  <span className="absolute text-4xl md:text-5xl top-[75%] left-[8%] rotate-[-25deg] opacity-50">
    SKILLS
  </span>

  {/* ================= CAPA CERCANA (Opacidad: 0.80 + Ligero Blur = Elementos en Primer Plano) ================= */}
  {/* Estas palabras son gigantes, están cerca de los bordes y destacan más para dar el impacto visual */}
  <span className="absolute text-7xl md:text-[10rem] top-[-3%] right-[-5%] rotate-[-5deg] opacity-80 blur-[0.5px]">
    SKILLS
  </span>
  <span className="absolute text-8xl md:text-[12rem] top-[42%] left-[-8%] rotate-[15deg] opacity-80">
    SKILLS
  </span>
  <span className="absolute text-6xl md:text-[9rem] top-[68%] right-[-4%] rotate-[-10deg] opacity-80 blur-[1px]">
    SKILLS
  </span>
  <span className="absolute text-7xl md:text-[16rem] bottom-[-5%] left-[15%] rotate-[-3deg] opacity-80">
   SKILLS
  </span>
  </div>
  <span className={`absolute z-1 text-7xl md:block hidden md:text-[8rem] top-[10%] left-[5%] text-secundario/90
    transition-all
    duration-1500
    delay-100
    ease-out
    ${isVisible
? "scale-100 rotate-[-5deg] opacity-100 translate-x-0"
: "scale-95 rotate-[3deg] opacity-0 translate-x-100"}
    `}>
    SKILLS
  </span>

</div>
      <div className={`transition-all
    duration-1500
    delay-200
    ease-out
    ${isVisible
? "opacity-100 translate-y-0"
: "opacity-0  translate-y-1/2"}`}>
        {/* FILA 1 */}
        <div className={`${isMobile ? 'mb-12' : ''} w-full overflow-hidden`}>
          <div
            style={{
              transform: `translateX(${offset}px)`,
            }}
            className="flex gap-6 w-max px-4"
          >
            {repeatedSkills.map((skill, i) => (
              <div
                key={`row1-${i}`}
                className="bg-primario dark:bg-diferencias w-64 h-64 flex-shrink-0 flex items-center justify-center rounded-2xl border border-secundario dark:border-contraste"
              >
                <div className="flex flex-col items-center gap-4">
                  <i className={`${skill.icon} text-6xl text-diferencias dark:text-secundario`} />
                  <span className="text-texto-para-contraste dark:text-texto-para-fondo text-sm font-medium">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FILA 2 (solo móvil) - CON DESFASE CORREGIDO */}
        {isMobile && (
          <div className="w-full overflow-hidden pointer-events-none">
            <div
              style={{
                transform: `translateX(${finalRow2Offset}px)`,
              }}
              className="flex gap-6 w-max px-4"
            >
              {repeatedSkills.map((skill, i) => (
                <div
                  key={`row2-${i}`}
                  className="bg-primario dark:bg-diferencias w-64 h-64 flex-shrink-0 flex items-center justify-center rounded-2xl shadow-2xl border border-secundario dark:border-contraste"
                >
                  <div className="flex flex-col items-center gap-4">
                    <i className={`${skill.icon} text-6xl text-diferencias dark:text-secundario`} />
                    <span className="text-texto-para-contraste dark:text-texto-para-fondo text-sm font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
      </div>
    </section>
  );
}