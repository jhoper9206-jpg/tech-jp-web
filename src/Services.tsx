import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Computadores y portátiles",
      description:
        "Diagnóstico, mantenimiento, optimización, instalación de software y actualización de componentes.",
    },
    {
      icon: "📱",
      title: "Celulares y tablets",
      description:
        "Diagnóstico, configuración, mantenimiento y reemplazo de componentes modulares.",
    },
    {
      icon: "🎮",
      title: "Consolas",
      description:
        "Diagnóstico, mantenimiento preventivo, configuración y actualizaciones.",
    },
    {
      icon: "🛠️",
      title: "Soporte técnico",
      description:
        "Atención remota y presencial para solucionar incidencias tecnológicas.",
    },
    {
      icon: "🏢",
      title: "Soluciones para empresas",
      description:
        "Soporte técnico para equipos, periféricos y necesidades tecnológicas de empresas y comercios.",
    },
  ];

  return (
    <section id="servicios" className="w-full bg-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Nuestros servicios
          </h2>

          <p className="text-lg text-slate-600">
            Soluciones tecnológicas para hogares, empresas y comercios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}