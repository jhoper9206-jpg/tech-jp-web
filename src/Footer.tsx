/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import BrandLogo from './components/BrandLogo';
import { Phone, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const whatsappUrl =
    "https://wa.me/573332627572?text=Hola%2C%20Tech.JP.%20Quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20servicio%20t%C3%A9cnico.";

  return (
    <footer className="w-full bg-slate-100/90 border-t border-slate-200 text-slate-600 px-4 sm:px-6 py-14 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Columna Marca & Identidad */}
          <div className="md:col-span-5">
            <div className="mb-4">
              <BrandLogo size="lg" showSubtitle isLightContext={true} />
            </div>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mt-3">
              Soporte Técnico &amp; Soluciones Tecnológicas integrales para
              computadores, dispositivos móviles, consolas y redes corporativas.
            </p>

            <p className="text-sky-700 mt-4 text-xs font-bold tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-600" />
              Soluciones tecnológicas donde las necesites.
            </p>
          </div>

          {/* Columna Navegación */}
          <div className="md:col-span-3">
            <h3 className="text-slate-900 font-bold text-xs tracking-wider uppercase mb-4">
              Navegación
            </h3>

            <div className="flex flex-col gap-2.5 text-sm">
              <a href="#inicio" className="text-slate-600 hover:text-sky-700 transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-slate-600 hover:text-sky-700 transition-colors">
                Servicios
              </a>
              <a href="#galeria" className="text-slate-600 hover:text-sky-700 transition-colors">
                Galería
              </a>
              <a href="#empresas" className="text-slate-600 hover:text-sky-700 transition-colors">
                Empresas
              </a>
              <a href="#nosotros" className="text-slate-600 hover:text-sky-700 transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="text-slate-600 hover:text-sky-700 transition-colors">
                Contacto
              </a>
            </div>
          </div>

          {/* Columna Canales Oficiales */}
          <div className="md:col-span-4">
            <h3 className="text-slate-900 font-bold text-xs tracking-wider uppercase mb-4">
              Canales Oficiales
            </h3>

            <div className="space-y-3 text-sm">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-700 hover:text-sky-700 transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                <span>WhatsApp: 333 262 7572</span>
              </a>

              <a
                href="mailto:Tech.jp34@gmail.com"
                className="flex items-center gap-2.5 text-slate-700 hover:text-sky-700 transition-colors font-medium"
              >
                <Mail className="w-4 h-4 text-cyan-600 shrink-0" />
                <span>Tech.jp34@gmail.com</span>
              </a>

              <a
                href="https://www.instagram.com/tech.jp34/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-700 hover:text-sky-700 transition-colors font-medium"
              >
                <Instagram className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Instagram: @tech.jp34</span>
              </a>
            </div>
          </div>
        </div>

        {/* Barra de copyright */}
        <div className="border-t border-slate-200 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Tech.JP. Todos los derechos reservados.</p>
          <p className="text-slate-500 font-medium">Versión 2.2.0 · Light Tech Experience</p>
        </div>
      </div>
    </footer>
  );
}
