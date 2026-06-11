// src/components/Skills.js

const skillsData = [
  { name: "HTML5", icon: "fab fa-html5", level: "Avanzado" },
  { name: "CSS3", icon: "fab fa-css3-alt", level: "Avanzado" },
  { name: "JavaScript", icon: "fab fa-js", level: "Avanzado" },
  { name: "React / Next.js", icon: "fab fa-react", level: "Intermedio" },
  { name: "Git & GitHub", icon: "fab fa-github", level: "Intermedio" },
  // Agregá acá las tecnologías reales que quieras mostrar
];

export default function Skills() {
  return (
    <section id="habilidades" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-texto-para-fondo text-3xl md:text-4xl font-black uppercase tracking-tight text-center mb-12 relative inline-block left-1/2 -translate-x-1/2 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/1 after:h-1 after:bg-diferencias">
          Mis Habilidades
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-contraste rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center"
            >
              <i className={`${skill.icon} text-5xl text-texto-para-contraste mb-4`}></i>
              <h3 className="text-xl font-semibold text-texto-para-contraste mb-2">
                {skill.name}
              </h3>
              <p className="text-texto-para-contraste">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}