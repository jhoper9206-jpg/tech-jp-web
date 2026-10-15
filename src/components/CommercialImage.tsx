/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Cpu, HardDrive, Laptop, Smartphone, Gamepad2, Network } from 'lucide-react';

type CommercialImageProps = {
  src: string;
  alt: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
  className?: string;
  category?: string;
  loading?: 'lazy' | 'eager';
};

export default function CommercialImage({
  src,
  alt,
  aspectRatio = '16/9',
  className = '',
  category = 'General',
  loading = 'lazy',
}: CommercialImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getAspectClass = () => {
    switch (aspectRatio) {
      case '16/9':
        return 'aspect-video';
      case '4/3':
        return 'aspect-[4/3]';
      case '1/1':
        return 'aspect-square';
      default:
        return '';
    }
  };

  const getCategoryIcon = () => {
    const cat = category.toLowerCase();
    if (cat.includes('computador') || cat.includes('laptop')) {
      return <Laptop className="w-8 h-8 text-sky-600" />;
    }
    if (cat.includes('celular') || cat.includes('tablet') || cat.includes('móvil')) {
      return <Smartphone className="w-8 h-8 text-cyan-600" />;
    }
    if (cat.includes('consola')) {
      return <Gamepad2 className="w-8 h-8 text-indigo-600" />;
    }
    if (cat.includes('empresa') || cat.includes('red')) {
      return <Network className="w-8 h-8 text-blue-600" />;
    }
    if (cat.includes('mantenimiento')) {
      return <HardDrive className="w-8 h-8 text-teal-600" />;
    }
    return <Cpu className="w-8 h-8 text-sky-600" />;
  };

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-slate-100 border border-slate-200/80 ${getAspectClass()} ${className}`}
    >
      {!hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            loading={loading}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-all duration-500 hover:scale-105 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-100 animate-pulse">
              <Cpu className="w-6 h-6 text-slate-300" />
            </div>
          )}
        </>
      ) : (
        /* Fallback visual tecnológico ligero cuando la fotografía comercial aún no está cargada */
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-50 via-sky-50/50 to-slate-100 text-center select-none">
          {/* Malla decorativa de circuitos de fondo */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id={`circuit-${category.replace(/\s+/g, '-')}`}
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="#0284C7" />
                <path d="M 2 2 L 14 2 L 14 14" fill="none" stroke="#0284C7" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#circuit-${category.replace(/\s+/g, '-')})`} />
          </svg>

          {/* Icono central de especialidad con iluminación suave */}
          <div className="relative w-14 h-14 rounded-2xl bg-white border border-sky-200 shadow-sm flex items-center justify-center mb-3">
            {getCategoryIcon()}
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
            {category}
          </span>
          <span className="text-[11px] text-slate-500 font-medium max-w-[220px] line-clamp-2">
            {alt}
          </span>

          <span className="mt-3 text-[10px] font-semibold tracking-wide text-sky-700 bg-sky-100/70 border border-sky-200/80 px-2 py-0.5 rounded-full">
            Referencia técnica
          </span>
        </div>
      )}
    </div>
  );
}
