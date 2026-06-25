"use client";
import { useEffect, useState } from "react";

export default function Header() {
  // Estados para controlar la interactividad del Header
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [temaOscuro, setTemaOscuro] = useState(false);

useEffect(() => {
  const esOscuro =
    document.documentElement.classList.contains("dark");

  setTemaOscuro(esOscuro);
}, []);

  // 2. Función para alternar entre Modo Claro y Oscuro con Tailwind
  const alternarTema = () => {
    const nuevoTema = !temaOscuro ? "dark" : "light";
    setTemaOscuro(!temaOscuro);
    if (nuevoTema === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", nuevoTema);
  };

  // 3. IntersectionObserver adaptado para las clases dinámicas de Tailwind
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-link-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navItems.forEach((link) => {
              // Remueve clases activas de Tailwind
              link.classList.remove("text-diferencias", "dark:text-secundario", "font-semibold");
              link.classList.add("text-contraste");
              
              if (link.getAttribute("href") === `#${entry.target.id}`) {
                link.classList.remove("text-contraste");
                link.classList.add("text-diferencias","dark:text-secundario", "font-semibold");
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
    <header className="fixed top-0 left-0 w-full z-50 bg-primario backdrop-blur-md border-b border-diferencias transition-colors duration-300">
      <div className="container mx-auto max-w-6xl px-6 h-16 flex items-center justify-between relative">
        
        {/* LOGO */}
        <div className="text-lg font-bold tracking-wider text-secundario dark:text-diferencias">
          KEVIN<span className="text-diferencias dark:text-secundario ml-0.5">BARNASTHPOL</span>
        </div>

        {/* Hamburguesa móvil reactiva */}
        <button 
          className="md:hidden text-2xl font-bold text-secundario focus:outline-none z-50 p-2"
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          {menuAbierto ? "✕" : "☰"}
        </button>

        {/* Enlaces de navegación responsive */}
        <ul className={`
          fixed md:static top-16 left-0 w-full md:w-auto h-[calc(100vh-64px)] md:h-auto
          bg-primario md:bg-transparent text-fondo
          flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-6
          transition-all duration-300 ease-in-out z-40
          ${menuAbierto ? "translate-x-0 opacity-100" : "translate-x-full md:translate-x-0 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto"}
        `}>
          <li>
            <a href="#inicio" className="nav-link-item text-sm tracking-wider uppercase transition-colors hover:text-contraste" onClick={() => setMenuAbierto(false)}>INICIO</a>
          </li>
          <li>
            <a href="#sobre-mi" className="nav-link-item text-sm tracking-wider uppercase transition-colors hover:text-contraste" onClick={() => setMenuAbierto(false)}>SOBRE MI</a>
          </li>
          <li>
            <a href="#habilidades" className="nav-link-item text-sm tracking-wider uppercase transition-colors hover:text-contraste" onClick={() => setMenuAbierto(false)}>HABILIDADES</a>
          </li>
          <li>
            <a href="#proyectos" className="nav-link-item text-sm tracking-wider uppercase transition-colors hover:text-contraste" onClick={() => setMenuAbierto(false)}>PROYECTOS</a>
          </li>
          <li>
            <a href="#contacto" className="nav-link-item text-sm tracking-wider uppercase transition-colors hover:text-contraste" onClick={() => setMenuAbierto(false)}>CONTACTO</a>
          </li>
          <li className="md:hidden mt-4">
  <div className="flex items-center gap-3">
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={temaOscuro}
        onChange={alternarTema}
      />

      <div className="w-11 h-6 bg-fondo rounded-full peer after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-contraste after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
    </label>

    <span className="text-xs tracking-widest text-contraste">
      {temaOscuro ? "MODO CLARO" : "MODO OSCURO"}
    </span>
  </div>
</li>


        </ul>

        {/* Interruptor de Modo Oscuro estilo Switch Slider */}
        <div className="hidden sm:flex items-center gap-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={temaOscuro}
              onChange={alternarTema}
            />
            <div className="w-11 h-6 bg-fondo peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-contraste after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-contraste after:border-secundario after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-fondo"></div>
          </label>
          <span className="text-[10px] tracking-widest font-bold text-contraste w-24">
            {temaOscuro ? "MODO CLARO" : "MODO OSCURO"}
          </span>
        </div>

      </div>
    </header>
  );
}