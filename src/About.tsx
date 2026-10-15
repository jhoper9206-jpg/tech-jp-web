/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SlideUp, StaggerContainer, StaggerItem, FadeIn } from './components/AnimatedSection';

export default function About() {
  const values = [
    {
      icon: '🤝',
      title: 'Atención personalizada',
      description:
        'Analizamos cada necesidad para ofrecer una solución adecuada para cada equipo o entorno tecnológico.',
      accent: 'border-sky-200 bg-sky-50/50',
    },
    {
      icon: '🛡️',
      title: 'Soluciones confiables',
      description:
        'Trabajamos con diagnóstico, buenas prácticas y procesos claros para brindar un servicio técnico responsable.',
      accent: 'border-cyan-200 bg-cyan-50/50',
    },
    {
      icon: '⚡',
      title: 'Respuesta ágil',
      description:
        'Modalidad presencial y remota para resolver incidencias con rapidez, minimizando el tiempo de inactividad de tus equipos.',
      accent: 'border-blue-200 bg-blue-50/50',
    },
  ];

  return (
    <section id="nosotros" className="w-full py-20 sm:py-24 bg-slate-50/80 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SlideUp className="text-center mb-14">
          <p className="text-sky-600 font-bold uppercase tracking-wider text-xs sm:text-sm mb-2.5">
            Sobre Tech.JP
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight">
            Tecnología y soporte{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-600">
              donde lo necesites
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            En Tech.JP brindamos soporte técnico y soluciones tecnológicas
            para hogares, empresas y comercios, con atención presencial y
            remota según las necesidades de cada cliente.
          </p>
        </SlideUp>

        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {values.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group h-full bg-white hover:bg-white border border-slate-200 hover:border-sky-400 rounded-2xl p-7 sm:p-8 text-center shadow-xs hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className={`w-16 h-16 mx-auto mb-5 rounded-2xl border ${item.accent} flex items-center justify-center text-3xl shadow-xs group-hover:scale-105 transition-all duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-sky-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center">
                  <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                    Compromiso Tech.JP
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Galería destacada institucional con piezas oficiales */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Pieza 1: Presentación Tech.JP */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col items-center">
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-black border border-slate-200 shadow-xs mb-4">
                <img
                  src="/images/gallery/techjp-presentacion.png"
                  alt="Presentación oficial de servicios Tech.JP"
                  loading="lazy"
                  className="w-full h-full object-contain select-none"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                Servicios integrales para tus dispositivos
              </h3>
              <p className="text-xs text-slate-500 text-center">
                Atención especializada en computadores, móviles, consolas y redes.
              </p>
            </div>

            {/* Pieza 2: Tu satisfacción nos importa */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col items-center">
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-black border border-slate-200 shadow-xs mb-4">
                <img
                  src="/images/gallery/techjp-satisfaccion.png"
                  alt="Tu satisfacción nos importa Tech.JP"
                  loading="lazy"
                  className="w-full h-full object-contain select-none"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                Compromiso y acompañamiento continuo
              </h3>
              <p className="text-xs text-slate-500 text-center">
                Soluciones efectivas, diagnóstico responsable y garantía técnica.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
