export default function ProjectCardNext() {
  return (
    <div className={`
      group border-2 border-dashed border-contraste/50 bg-primario/60 
      hover:bg-primario/80 hover:border-contraste shadow-sm hover:shadow-md 
      transition-all duration-300 rounded-xl flex flex-col justify-center 
      items-center p-8 text-center w-[320px]
    md:w-[360px]
    min-h-[480px] z-10 snap-center
flex-shrink-0
    `}>
      {/* Icono interactivo animado */}
      <div className="w-16 h-16 rounded-full border-2 border-dashed border-contraste/40 flex items-center justify-center mb-6 text-contraste/60 group-hover:text-contraste group-hover:border-contraste group-hover:scale-110 transition-all duration-300">
        <i className="fas fa-code text-2xl animate-pulse"></i>
      </div>

      <h3 className="text-xl font-bold uppercase text-contraste mb-3">
        ¿Tu próximo proyecto?
      </h3>

      <p className="text-contraste/80 hover:text-contraste max-w-xs font-semibold text-sm leading-relaxed mb-6">
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
}