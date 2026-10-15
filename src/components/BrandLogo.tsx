/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';

type BrandLogoProps = {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
  isLightContext?: boolean;
};

export default function BrandLogo({
  size = 'md',
  showSubtitle = false,
  className = '',
  isLightContext = true,
}: BrandLogoProps) {
  const [imageError, setImageError] = useState(false);

  // Escala de tamaños optimizada para mayor presencia visual
  const sizeMap = {
    sm: { imgClass: 'h-10 sm:h-11 w-auto', text: 'text-xl', subText: 'text-[10px]' },
    md: { imgClass: 'h-13 sm:h-15 w-auto', text: 'text-2xl sm:text-3xl', subText: 'text-[11px]' },
    lg: { imgClass: 'h-24 sm:h-28 w-auto', text: 'text-3xl sm:text-4xl', subText: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  return (
    <motion.a
      href="#inicio"
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      aria-label="Tech.JP - Ir al inicio"
      className={`group inline-flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-2xl transition-transform duration-200 active:scale-95 ${className}`}
    >
      {!imageError ? (
        /* Presentación elegante y destacada del logotipo oficial con su fondo negro y proporciones íntegras */
        <div className="relative flex items-center justify-center p-1 sm:p-1.5 rounded-2xl bg-black border border-sky-500/40 shadow-sm transition-all duration-300 group-hover:border-sky-400 group-hover:shadow-[0_0_20px_rgba(2,132,199,0.35)] shrink-0">
          <img
            src="/images/branding/techjp-logo.png"
            alt="Tech.JP - Soporte Técnico & Soluciones Tecnológicas"
            onError={() => setImageError(true)}
            className={`${currentSize.imgClass} aspect-square object-contain rounded-xl select-none`}
          />
        </div>
      ) : (
        /* Respaldo de texto solo si no carga la imagen */
        <div className="flex items-center gap-2.5">
          <div className="w-12 h-12 rounded-2xl bg-black border border-sky-500/40 p-1 flex items-center justify-center shadow-sm">
            <span className="font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-300 to-cyan-300 text-lg">
              JP
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span
              className={`${currentSize.text} font-black tracking-tight ${
                isLightContext ? 'text-slate-900' : 'text-white'
              } flex items-center`}
            >
              Tech<span className="text-cyan-600">.</span>JP
            </span>
          </div>
        </div>
      )}

      {/* Rótulo tipográfico complementario para asegurar lectura instantánea */}
      <div className="hidden sm:flex flex-col text-left leading-none">
        <span
          className={`${currentSize.text} font-black tracking-tight ${
            isLightContext ? 'text-slate-900' : 'text-white'
          } flex items-center group-hover:text-sky-700 transition-colors`}
        >
          Tech<span className="text-cyan-600">.</span>JP
        </span>
        {showSubtitle && (
          <span className={`${currentSize.subText} uppercase tracking-widest text-slate-500 font-bold mt-1`}>
            Soporte Técnico
          </span>
        )}
      </div>
    </motion.a>
  );
}
