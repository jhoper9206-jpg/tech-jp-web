export default function About() {
  return (
    <section id="nosotros" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold uppercase tracking-wider mb-3">
            Sobre Tech.JP
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Tecnología y soporte donde lo necesites
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            En Tech.JP brindamos soporte técnico y soluciones tecnológicas
            para hogares, empresas y comercios, con atención presencial y
            remota según las necesidades de cada cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Atención personalizada
            </h3>
            <p className="text-slate-600">
              Analizamos cada necesidad para ofrecer una solución adecuada
              para cada equipo o entorno tecnológico.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Soluciones confiables
            </h3>
            <p className="text-slate-600">
              Trabajamos con diagnóstico, buenas prácticas y procesos claros
              para brindar un servicio técnico responsable.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Respuesta ágil
            </h3>
            <p className="text-slate-600">
              Modalidad presencial y remota para resolver incidencias con
              rapidez, minimizando el tiempo de inactividad de tus equipos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
