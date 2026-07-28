'use client';
import Footer from './Footer';
import useReveal from "../hooks/useReveal";

export default function Contact() {
  const [revealRef, isVisible] = useReveal();
  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      url: 'https://api.whatsapp.com/send?phone=+5492213144339&text=Hola%20Kevin!',
      color: 'hover:text-green-500 hover:border-green-500/30 hover:shadow-green-500/5'
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:kevin.barnasthpol@gmail.com',
      color: 'hover:text-blue-400 hover:border-blue-400/30 hover:shadow-blue-400/5'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/kevin-barnasthpol',
      color: 'hover:text-blue-600 hover:border-blue-600/30 hover:shadow-blue-600/5'
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/kbarnasthpol',
      color: 'hover:text-gray-400 hover:border-gray-400/30 hover:shadow-gray-400/5'
    },
    {
      name: 'Mi CV',
      icon: 'fas fa-book',
      url: '/cv/kevin-cv.pdf',
      color: 'hover:text-red-400 hover:border-red-400/30 hover:shadow-red-400/5'
    },
  ];

  return (
    <section
      id="contacto"
      ref={revealRef}
      className="w-full flex flex-col justify-between px-6 min-h-screen pt-16 md:pt-12 relative text-secundario items-center"
    >
      <div className="absolute inset-0 pointer-events-none" />

      <div className="container mx-auto max-w-4xl my-auto relative z-10 w-full py-8 md:py-0">
        <div className="text-center mb-12">
          <h2 className={`text-2xl md:text-4xl font-bold mb-3 text-principal p-3 transition-all duration-1000 delay-100 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0 blur-[0px]"
              : "opacity-0 translate-x-12 blur-[2px]"
          }`}>
            ¿Tenés un proyecto en mente?
          </h2>
          <p className={`max-w-xl mx-auto text-xs md:text-sm leading-relaxed text-texto-para-fondo transition-all duration-1000 delay-200 ease-out ${
            isVisible
              ? "opacity-100 translate-x-0 blur-[0px]"
              : "opacity-0 translate-x-12 blur-[2px]"
          }`}>
            ¡Hablemos por el canal que prefieras!
          </p>
        </div>

        {/* REDES SOCIALES */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 max-w-3xl mx-auto mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                /* 
                  Si NO es visible, le asignamos el delay para que entren en cascada.
                  Una vez que es visible, el delay pasa a 0ms para NO afectar la entrada NI la salida del hover.
                */
                transitionDelay: isVisible ? '0ms' : `${index * 350}ms`
              }}
              className={`flex flex-col items-center justify-center p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-1500 delay-700 transform hover:-translate-y-1 hover:shadow-xl ${link.color} ease-out ${
                isVisible
                  ? "scale-100 opacity-100 translate-y-0 blur-[0px]"
                  : "scale-95 opacity-0 translate-y-10 blur-sm"
              }`}
            >
              {/* Ícono */}
              <i className={`${link.icon} text-2xl md:text-3xl mb-3 transition-transform duration-300`} />
              {/* Nombre de la red */}
              <span className="text-sm font-medium text-principal">{link.name}</span>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
}