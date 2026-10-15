/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageCircle, Check, ArrowRight } from 'lucide-react';

export type ServiceItemData = {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  details: string[];
  whatsappMessage: string;
};

type ServiceCardProps = {
  service: ServiceItemData;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const whatsappHref = `https://wa.me/573332627572?text=${encodeURIComponent(
    service.whatsappMessage
  )}`;

  return (
    <article className="group relative bg-white border border-slate-200 hover:border-sky-400 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between">
      {/* Línea decorativa superior en hover */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-transparent via-sky-500/0 group-hover:via-sky-500 to-transparent transition-all duration-500" />

      <div>
        {/* Pieza publicitaria corporativa Tech.JP con formato 1:1 sin deformación ni recorte */}
        {service.image && (
          <div className="relative mb-5 w-full aspect-square rounded-xl overflow-hidden bg-black border border-slate-200/90 shadow-xs group-hover:shadow-md group-hover:border-sky-300 transition-all">
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="w-full h-full object-contain select-none"
            />
          </div>
        )}

        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-xl shadow-xs group-hover:scale-105 group-hover:bg-sky-100/70 transition-all duration-300">
            {service.icon}
          </div>

          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200/70 px-2.5 py-1 rounded-full">
            Especialidad
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
          {service.title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Botón accesible para expandir detalles */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded cursor-pointer"
        >
          <span>{isExpanded ? 'Ocultar detalles' : 'Ver qué incluye este servicio'}</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Panel de detalles expandible accesible */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="mt-3 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600 bg-slate-50/70 p-3.5 rounded-xl border border-slate-200/60">
                <p className="font-bold text-slate-800 text-[11px] uppercase tracking-wider mb-2">
                  Alcance técnico:
                </p>
                {service.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Botón directo de solicitud por WhatsApp */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl shadow-xs hover:shadow-md hover:shadow-sky-600/20 active:scale-95 transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Solicitar servicio</span>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Consultar sobre ${service.title} por WhatsApp`}
          className="p-2.5 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-xl transition-colors"
        >
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}