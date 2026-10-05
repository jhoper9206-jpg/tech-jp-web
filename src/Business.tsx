type BusinessProps = {
  whatsappUrl: string;
};

export default function Business({ whatsappUrl }: BusinessProps) {
  return (
    <section id="empresas" className="w-full bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-blue-400 font-semibold mb-3">
              SOLUCIONES PARA EMPRESAS
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Soporte tecnológico para tu negocio
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Apoyamos a empresas y comercios en la atención de sus necesidades
              tecnológicas, mantenimiento de equipos y soporte técnico presencial
              y remoto.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Solicitar propuesta
            </a>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              ¿Cómo podemos ayudarte?
            </h3>

            <ul className="space-y-4 text-slate-300">
              <li>✓ Mantenimiento preventivo de equipos</li>
              <li>✓ Diagnóstico y solución de incidencias</li>
              <li>✓ Instalación y configuración de software y redes</li>
              <li>✓ Asesoría tecnológica para comercios y oficinas</li>
              <li>✓ Soporte técnico remoto y presencial continuo</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
