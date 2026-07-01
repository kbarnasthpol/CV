'use client';
import Footer from './Footer'; 

export default function Contact() {
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
      url: 'https://linkedin.com/in/kevin-barnasthpol', // 👈 Acordate de cambiar por tu usuario real
      color: 'hover:text-blue-600 hover:border-blue-600/30 hover:shadow-blue-600/5' 
    },
    { 
      name: 'GitHub', 
      icon: 'fab fa-github',
      url: 'https://github.com/kbarnasthpol', // 👈 Acordate de cambiar por tu usuario real
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
      className="w-full flex flex-col justify-between px-6 min-h-screen pt-16 md:pt-12 relative text-secundario items-center"
    >
      {/* Detalle decorativo de fondo */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="container mx-auto max-w-4xl my-auto relative z-10 w-full py-8 md:py-0">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-principal p-3">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="max-w-xl mx-auto text-xs md:text-sm leading-relaxed text-texto-para-fondo">
           ¡Hablemos por el canal que prefieras!
          </p>
        </div>

        {/* 🚀 AQUÍ SE MAREAN Y RENDERIZAN LAS REDES SOCIALES */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 max-w-3xl mx-auto mb-12">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-6 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${link.color}`}
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