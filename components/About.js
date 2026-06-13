import Image from 'next/image';

export default function About() {
  return (
    <section 
      id="sobre-mi" 
      className="py-20 bg-fondo-seccion text-texto-para-fondo transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl px-6">
        {/* TÍTULO DE SECCIÓN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-6">
          
          {/* CONTENEDOR DE LA ILUSTRACIÓN REACTIVA */}
          <div className="flex justify-center items-center">
            <div className="relative p-4 bg-fondo dark:bg-contraste dark:border border-contraste rounded-2xl dark:shadow-sm overflow-hidden">
              {/* Imagen para Modo Claro (Se oculta en dark mode) */}
              <Image 
                src="/img/Logo-sin-luz2.svg"
                alt="Kevin Programando - Luz Encendida"
                width={300}
                height={300}
                loading="eager"
                className="block dark:hidden object-contain max-w-[250px] sm:max-w-[300px] h-auto drop-shadow-md"
              />
              {/* Imagen para Modo Oscuro (Se muestra solo en dark mode) */}
              <Image 
                src="/img/Logo-con-luz.svg"
                alt="Kevin Programando - Luz Apagada"
                width={300}
                height={300}
                className="hidden dark:block object-contain max-w-[250px] sm:max-w-[300px] h-auto]"
              />
            </div>
          </div>

          {/* TEXTO INFORMATIVO */}
          <div className="flex flex-col space-y-4 text-center">
            <h3 className="text-xl md:text-3xl font-bold text-primario dark:text-secundario item-center">
              ¿Quién soy?
            </h3>
            <p className="text-contraste text-justify leading-relaxed text-sm sm:text-base">
              Soy un desarrollador Frontend Junior apasionado por la tecnología y la creación de interfaces web modernas, intuitivas y eficientes. Actualmente combino mis estudios tecnológicos con el aprendizaje constante de herramientas del ecosistema de JavaScript y React.
            </p>
            <p className="text-contraste text-justify leading-relaxed text-sm sm:text-base">
              Mi enfoque está puesto en escribir código limpio, modular y escalable, siempre buscando optimizar la experiencia del usuario final. Disfruto enfrentando nuevos desafíos que me permitan expandir mis conocimientos y aportar valor real en proyectos digitales.
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

        </div>

      </div>
    </section>
  );
}