// src/components/Projects.js
import Image from "next/image";
import projectsData from "../data/projectsData"; // 🚀 Importamos los datos modularizados

export default function Projects() {
  return (
    <section id="proyectos" className="py-16 px-4 relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
      {/* ─── CAPA DE FONDO: EFECTO DE PROFUNDIDAD 3D DE PALABRAS REPETIDAS ─── */}
<div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden font-black tracking-widest uppercase text-neutral-500">

  {/* ================= CAPA LEJANA ================= */}

<span className="absolute text-7xl md:text-9xl top-[10%] left-[18%] rotate-[12deg] opacity-20 blur-[3px]">
  PROJECTS
</span>

<span className="absolute text-6xl md:text-8xl top-[55%] right-[15%] rotate-[-18deg] opacity-20 blur-[2px]">
  PROJECTS
</span>

<span className="absolute text-8xl md:text-[10rem] bottom-[8%] left-[5%] rotate-[5deg] opacity-20 blur-[4px]">
  PROJECTS
</span>

{/* ================= CAPA MEDIA ================= */}

<span className="absolute text-5xl md:text-7xl top-[25%] right-[28%] rotate-[22deg] opacity-50">
  PROJECTS
</span>
<span className="absolute text-8xl md:text-8xl top-[20%] right-[2%] rotate-[22deg] opacity-50">
  PROJECTS
</span>

<span className="absolute text-6xl md:text-8xl top-[45%] left-[22%] rotate-[-10deg] opacity-50">
  PROJECTS
</span>

<span className="absolute text-5xl md:text-7xl bottom-[28%] right-[8%] rotate-[15deg] opacity-50">
  PROJECTS
</span>

<span className="absolute text-4xl md:text-6xl bottom-[45%] left-[40%] rotate-[-20deg] opacity-50">
  PROJECTS
</span>

{/* ================= CAPA CERCANA ================= */}

<span className="absolute text-8xl md:text-[13rem] top-[-5%] left-[-3%] rotate-[-8deg] opacity-80">
  PROJECTS
</span>

<span className="absolute text-9xl md:text-[15rem] top-[35%] right-[-8%] rotate-[10deg] opacity-80">
  PROJECTS
</span>

<span className="absolute text-[10rem] md:text-[18rem] bottom-[-10%] left-[20%] rotate-[-2deg] opacity-80">
  PROJECTS
</span>
<span className="absolute text-[10rem] md:text-[6rem] bottom-[35%] right-[78%] rotate-[-90deg] opacity-100 text-secundario/90">
  PROJECTS
</span>

</div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* 1. Mapeamos tus proyectos reales */}
  {projectsData.map((project, index) => (
    <div
      key={index}
      className="group bg-primario border-2 border-contraste shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col rounded-xl transform hover:-translate-y-1"
    >
      {/* Contenedor de la imagen */}
      <div className="relative w-full h-40 bg-black overflow-hidden rounded-t-xl">
        <Image
          src={project.image}
          alt={`Captura de pantalla de ${project.title}`}
          fill
          className="object-cover grayscale brightness-50 opacity-60 transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 group-hover:scale-105"
          priority={index === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold uppercase text-contraste text-center mb-5 relative inline-block left-1/2 -translate-x-1/2 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-1 after:bg-diferencias">
          {project.title}
        </h3>
        <p className="text-contraste mb-4 flex-grow text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="bg-contraste text-texto-para-contraste text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-10 items-center justify-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            w-auto
            className="bg-contraste hover:bg-dejarWEB border-2 border-fondo dark:border-contraste dark:text-contraste dark:bg-fondo text-fondo px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2 text-sm font-medium"
          >
            Ver Sitio <i className="fas fa-external-link-alt text-xs"></i>
          </a>
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-contraste hover:bg-dejarWEB border-2 border-fondo dark:border-contraste dark:text-contraste dark:bg-fondo text-fondo px-4 py-2 rounded-lg transition-colors inline-flex items-center gap-2 text-sm font-medium"
            >
              <i className="fab fa-github"></i> Código
            </a>
          )}
        </div>
      </div>
    </div>
  ))}

  {/* 🚀 2. TARJETA EXTRA: "Próximo Proyecto" */}
  {/* ... abajo del mapeo de projectsData.map ... */}

{/* 🚀 TARJETA EXTRA INTELIGENTE: Solo aparece si hay espacio libre en la pantalla */}
{(() => {
  // Calculamos si la cantidad de proyectos deja baches libres en alguna resolución
  const sobraEnLg = projectsData.length % 3 !== 0; // Verdadero si no es múltiplo de 3 (deja bache en 3 col)
  const sobraEnMd = projectsData.length % 2 !== 0; // Verdadero si no es múltiplo de 2 (deja bache en 2 col)

  // Si no sobra espacio en ninguna de las dos pantallas grandes, no renderizamos nada
  if (!sobraEnLg && !sobraEnMd) return null;

  return (
    <div className={`
      group border-2 border-dashed border-contraste/50 bg-primario/60 
      hover:bg-primario/80 hover:border-contraste shadow-sm hover:shadow-md 
      transition-all duration-300 rounded-xl flex flex-col justify-center 
      items-center p-8 text-center min-h-[400px] z-10
      ${sobraEnLg ? 'lg:flex' : 'lg:hidden'} 
      ${sobraEnMd ? 'md:flex' : 'md:hidden'}
      hidden 
    `}>
      {/* Icono interactivo animado */}
      <div className="w-16 h-16 rounded-full border-2 border-dashed border-contraste/40 flex items-center justify-center mb-6 text-contraste/60 group-hover:text-contraste group-hover:border-contraste group-hover:scale-110 transition-all duration-300">
        <i className="fas fa-code text-2xl animate-pulse"></i>
      </div>
      
      <h3 className="text-xl font-bold uppercase text-contraste mb-3">
        ¿Tu próximo proyecto?
      </h3>
      
      <p className="text-contraste/80 max-w-xs text-sm leading-relaxed mb-6">
        Estoy listo para ayudarte a materializar tus ideas con arquitecturas modernas, optimización SEO y un rendimiento excepcional.
      </p>

      <a
        href="#contacto"
        className="border-2 border-contraste text-contraste hover:bg-contraste hover:text-texto-para-contraste px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform group-hover:scale-105"
      >
        Empecemos a hablar <i className="fas fa-arrow-right ml-1 text-xs"></i>
      </a>
    </div>
  );
})()}
</div>
      </div>
    </section>
  );
}