"use client";
import { FiMoon, FiSun } from "react-icons/fi";
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
  const [headerVisible, setHeaderVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("inicio");

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
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
                link.classList.add("text-diferencias", "dark:text-secundario", "font-semibold");
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
  const links = [
    { href: "#inicio", label: "INICIO" },
    { href: "#sobre-mi", label: "SOBRE MI" },
    { href: "#habilidades", label: "HABILIDADES" },
    { href: "#proyectos", label: "PROYECTOS" },
    { href: "#contacto", label: "CONTACTO" },
  ];

  return (
    <header
      className={`
    fixed top-0 left-0 w-full z-50
    bg-primario/90 backdrop-blur-md
    border-b border-diferencias
    transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]

    ${headerVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
        }
  `}
    >
      <div
        className={`
    container mx-auto max-w-6xl px-6 h-16
    flex items-center justify-between relative

    transition-all duration-2000
    ease-[cubic-bezier(.22,1,.36,1)]

    ${headerVisible
            ? "translate-x-0 rotate-0 opacity-100"
            : "-opacity-0 -translate-x-24 -rotate-2 blur-sm"
          }
  `}
      >

        {/* LOGO */}
        <div
          className={`
    text-lg font-bold tracking-wider
    text-secundario dark:text-diferencias

    transition-all duration-1000 delay-200

    ${headerVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-16 opacity-0"
            }
  `}
        >
          KEVIN<span className="text-diferencias dark:text-secundario ml-0.5">BARNASTHPOL</span>
        </div>

        {/* Hamburguesa móvil reactiva */}
        <div className="flex items-center gap-2 md:hidden z-50">

          <button
            onClick={alternarTema}
            aria-label="Cambiar tema"
            className="
    p-2
    rounded-full
    text-secundario
    hover:bg-diferencias/20
    transition-all
    duration-300
  "
          >
            <div
              className={`
      transition-all
      duration-500
      ease-in-out
      ${temaOscuro
                  ? "rotate-180 scale-110"
                  : "rotate-0 scale-100"
                }
    `}
            >
              {temaOscuro ? <FiSun size={22} /> : <FiMoon size={22} />}
            </div>
          </button>

          <button
            className="
      text-2xl
      font-bold
      text-secundario
      p-2
    "
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Abrir menú"
          >
            {menuAbierto ? "✕" : "☰"}
          </button>

        </div>

        {/* Enlaces de navegación responsive */}
        <ul className={`
          fixed md:static top-16 left-0 w-full md:w-auto h-[calc(100vh-64px)] md:h-auto
          bg-primario md:bg-transparent text-fondo
          flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-6
          transition-all duration-300 ease-in-out z-40 transition-all
duration-700
delay-100
${menuAbierto
            ? "translate-x-0 opacity-100"
            : "translate-x-full md:translate-x-0 opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto"
          }

${headerVisible
            ? "md:translate-x-0 md:opacity-100"
            : "md:-translate-x-20 md:opacity-0"
          }        `}>
          {links.map((link, index) => (
            <li
              key={link.href}
              className={`
      transition-all duration-1500 delay-500
      ${headerVisible
                  ? "translate-x-0 opacity-100 blur-0"
                  : "-translate-x-10 opacity-0 blur-sm"
                }
    `}
              style={{
                transitionDelay: headerVisible
                  ? `${100 + index * 70}ms`
                  : `${(links.length - index) * 70}ms`,
              }}
            >
              <a
                href={link.href}
                className="nav-link-item text-sm tracking-wider uppercase transition-colors hover:text-contraste"
                onClick={() => setMenuAbierto(false)}
              >
                {link.label}
              </a>
            </li>
          ))}


        </ul>

        {/* Interruptor de Modo Oscuro estilo Switch Slider */}
        <div
          className={`
    hidden md:flex items-center gap-3

    transition-all duration-1700 delay-300

    ${headerVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0 blur-sm"
            }
  `}
        >
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={temaOscuro}
              onChange={alternarTema}
            />
            <div className="w-11 h-6 bg-fondo border-1 border-diferencias peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-contraste after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-contraste after:border-secundario after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-fondo"></div>
          </label>
          <span className="text-[10px] tracking-widest font-bold text-contraste w-24">
            {temaOscuro ? "MODO CLARO" : "MODO OSCURO"}
          </span>
        </div>

      </div>
    </header>
  );
}