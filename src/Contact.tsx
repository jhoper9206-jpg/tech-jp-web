/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, Instagram, Wrench, MessageCircle, Clock, Shield } from 'lucide-react';
import { SlideUp, FadeIn } from './components/AnimatedSection';

export default function Contact() {
  const whatsappUrl =
    "https://wa.me/573332627572?text=Hola%2C%20Tech.JP.%20Quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20servicio%20t%C3%A9cnico.";

  return (
    <section id="contacto" className="w-full py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SlideUp className="text-center mb-14">
          <p className="text-sky-600 font-bold uppercase tracking-wider text-xs sm:text-sm mb-2.5">
            Contacto Directo
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            ¿Necesitas soporte técnico?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Cuéntanos qué necesitas y recibe orientación para encontrar
            la solución adecuada para tu equipo o negocio.
          </p>
        </SlideUp>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Tarjeta de canales directos en fondo blanco */}
          <SlideUp delay={0.1} className="h-full">
            <div className="h-full bg-white border border-slate-200 rounded-3xl p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-600" />
                  Hablemos
                </h3>

                <div className="space-y-5">
                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                        WhatsApp
                      </span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base sm:text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors"
                      >
                        333 262 7572
                      </a>
                    </div>
                  </div>

                  {/* Correo */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                        Correo
                      </span>
                      <a
                        href="mailto:Tech.jp34@gmail.com"
                        className="text-base sm:text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors"
                      >
                        Tech.jp34@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                        Instagram
                      </span>
                      <a
                        href="https://www.instagram.com/tech.jp34/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base sm:text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors"
                      >
                        @tech.jp34
                      </a>
                    </div>
                  </div>

                  {/* Modalidad */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                        Modalidad
                      </span>
                      <p className="text-base font-semibold text-slate-800">
                        Atención presencial y remota
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Atención: Lunes a viernes 8:00 a.m. - 5:00 p.m.</span>
              </div>
            </div>
          </SlideUp>

          {/* Columna derecha con la pieza oficial Estamos Para Ayudarte */}
          <FadeIn delay={0.15} className="h-full flex flex-col justify-between">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-full aspect-square rounded-2xl overflow-hidden bg-black border border-slate-200/90 shadow-xs mb-6">
                <img
                  src="/images/gallery/techjp-contacto.png"
                  alt="Estamos para ayudarte - Soporte técnico Tech.JP"
                  loading="lazy"
                  className="w-full h-full object-contain select-none"
                />
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-semibold text-base py-3.5 px-6 rounded-xl text-center shadow-md shadow-sky-600/20 hover:shadow-lg hover:shadow-sky-600/30 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 text-cyan-100 group-hover:scale-110 transition-transform" />
                <span>Contactar por WhatsApp</span>
              </a>

              <p className="text-xs text-center text-slate-500 font-medium mt-3">
                Respuesta habitual en pocos minutos
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}