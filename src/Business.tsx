/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, Building, MessageCircle } from 'lucide-react';
import { SlideUp, FadeIn } from './components/AnimatedSection';

type BusinessProps = {
  whatsappUrl: string;
};

export default function Business({ whatsappUrl }: BusinessProps) {
  const businessPoints = [
    'Mantenimiento preventivo de equipos y estaciones de trabajo',
    'Diagnóstico y solución ágil de incidencias técnicas',
    'Instalación, ordenamiento y configuración de software y redes',
    'Asesoría tecnológica continua para comercios y oficinas',
    'Soporte técnico remoto y presencial con cobertura garantizada',
  ];

  return (
    <section id="empresas" className="w-full py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-50 via-sky-50/30 to-slate-100/80 border border-slate-200/90 p-8 sm:p-12 lg:p-14 shadow-lg shadow-slate-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Columna de presentación comercial */}
            <SlideUp className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/80 border border-sky-200 text-xs font-bold text-sky-800 mb-4 uppercase tracking-wider">
                <Building className="w-3.5 h-3.5 text-sky-600" />
                Soluciones para empresas
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight leading-tight">
                Soporte tecnológico{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-600">
                  para tu negocio
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-xl font-normal">
                Apoyamos a empresas y comercios en la atención de sus necesidades
                tecnológicas, mantenimiento de equipos y soporte técnico presencial
                y remoto.
              </p>

              {/* Lista de beneficios técnicos corporativos */}
              <div className="bg-white/90 rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs mb-8">
                <h3 className="text-sm font-bold text-slate-900 mb-3.5 uppercase tracking-wider text-sky-800">
                  ¿Cómo podemos ayudarte?
                </h3>
                <ul className="space-y-2.5">
                  {businessPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-md shadow-sky-600/20 hover:shadow-lg hover:shadow-sky-600/30 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 text-cyan-100 group-hover:scale-110 transition-transform" />
                <span>Solicitar propuesta</span>
              </a>
            </SlideUp>

            {/* Columna con la pieza publicitaria oficial de Empresas */}
            <FadeIn delay={0.15} className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-black border border-sky-500/30 shadow-xl p-1.5 hover:border-sky-400 transition-all group">
                <img
                  src="/images/gallery/techjp-empresas.png"
                  alt="Soluciones tecnológicas para empresas Tech.JP"
                  loading="lazy"
                  className="w-full h-full object-contain rounded-xl select-none group-hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
