/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle, ShieldCheck, Zap, Laptop, ArrowRight } from 'lucide-react';
import { SlideUp, FadeIn } from './components/AnimatedSection';
import CommercialVideo from './components/CommercialVideo';

type HeroProps = {
  title: string;
  description: string;
  whatsappUrl: string;
};

export default function Hero({
  title,
  description,
  whatsappUrl,
}: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-20 sm:pt-16 sm:pb-28"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Columna Izquierda: Mensajes comerciales y llamadas a la acción */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <FadeIn delay={0.05}>
            {/* Insignia de soporte especializado */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs sm:text-sm font-semibold text-sky-800 mb-6 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600"></span>
              </span>
              <span className="tracking-wide uppercase text-[11px] font-bold text-sky-700">
                Soporte Especializado
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-normal">Atención Presencial y Remota</span>
            </div>
          </FadeIn>

          <SlideUp delay={0.15}>
            {/* Título principal en tipografía corporativa */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-[1.12]">
              Soluciones tecnológicas{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700">
                donde las necesites.
              </span>
            </h1>
          </SlideUp>

          <SlideUp delay={0.25}>
            {/* Descripción comercial */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-normal">
              {description}
            </p>
          </SlideUp>

          <SlideUp delay={0.35}>
            {/* Botones comerciales */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-md shadow-sky-600/20 hover:shadow-lg hover:shadow-sky-600/30 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-all duration-200 cursor-pointer w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 text-cyan-100 group-hover:scale-110 transition-transform duration-200" />
                <span>Solicitar servicio</span>
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 border border-slate-200 font-medium text-base transition-all duration-200 w-full sm:w-auto"
              >
                <span>Explorar servicios</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>
          </SlideUp>

          {/* Pilares rápidos de confianza técnica */}
          <FadeIn delay={0.45}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Diagnóstico confiable</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Zap className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Respuesta oportuna</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Laptop className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Atención multiequipo</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Columna Derecha: Reproductor de Video Comercial */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <CommercialVideo />
        </div>
      </div>
    </section>
  );
}