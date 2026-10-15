/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Film } from 'lucide-react';

type CommercialVideoProps = {
  src?: string;
  poster?: string;
  className?: string;
};

export default function CommercialVideo({
  src = '/videos/techjp-commercial.mp4',
  poster = '/images/hero/techjp-video-poster.webp',
  className = '',
}: CommercialVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);

  // Manejo de reproducción inteligente con IntersectionObserver
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container || hasError) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !prefersReducedMotion) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => {
                setIsPlaying(false);
              });
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [hasError, prefersReducedMotion]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setHasError(true));
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full max-w-lg mx-auto bg-white rounded-3xl p-2.5 sm:p-3 border border-sky-200/90 shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-sky-500/10 hover:border-sky-400 transition-all duration-300 ${className}`}
    >
      {/* Contenedor del reproductor en formato 16:9 */}
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
        {!hasError ? (
          <>
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              autoPlay={!prefersReducedMotion}
              muted={isMuted}
              loop
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={() => setHasError(true)}
              className="w-full h-full object-cover select-none"
            />

            {/* Capa de controles interactivos sobre el video */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 transition-opacity duration-300 flex flex-col justify-between p-4 ${
                isHovered || !isPlaying ? 'opacity-100' : 'opacity-0 sm:opacity-0'
              }`}
            >
              {/* Etiqueta superior */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-sky-400/30 text-[10px] sm:text-xs font-bold text-sky-300 tracking-wider uppercase shadow-xs">
                  <Film className="w-3 h-3 text-cyan-400" />
                  TECH.JP | SOLUCIONES TECNOLÓGICAS
                </span>

                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
                  className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white backdrop-blur-md border border-slate-700/80 transition-transform active:scale-90 cursor-pointer"
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                  )}
                </button>
              </div>

              {/* Botón central / inferior de reproducción */}
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pausar video comercial' : 'Reproducir video comercial'}
                  className="group/btn inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-sky-600/90 hover:bg-sky-500 text-white text-xs font-bold shadow-md shadow-sky-600/30 backdrop-blur-md transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-white" />
                      <span>Pausar</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-white" />
                      <span>Reproducir</span>
                    </>
                  )}
                </button>

                <span className="text-[11px] text-slate-300 font-medium bg-slate-900/70 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-slate-800">
                  Video Comercial Oficial
                </span>
              </div>
            </div>
          </>
        ) : (
          /* Presentación visual elegante con soporte para el póster oficial cuando el video aún no está disponible */
          <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-6 bg-gradient-to-br from-slate-950 via-[#020617] to-slate-900 text-white select-none overflow-hidden">
            {/* Imagen póster de fondo si existe */}
            <img
              src={poster}
              alt="Tech.JP - Video Comercial"
              onLoad={() => setPosterLoaded(true)}
              onError={() => setPosterLoaded(false)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                posterLoaded ? 'opacity-35' : 'opacity-0'
              }`}
            />

            {/* Trazos sutiles de circuitos vectoriales de fondo */}
            {!posterLoaded && (
              <svg
                className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="video-circuit-grid"
                    width="36"
                    height="36"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 36 0 L 0 0 0 36"
                      fill="none"
                      stroke="#06B6D4"
                      strokeWidth="0.8"
                    />
                    <circle cx="36" cy="0" r="1.5" fill="#0284C7" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#video-circuit-grid)" />
              </svg>
            )}

            {/* Halo de luz decorativo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />

            {/* Etiqueta superior */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-sky-500/30 text-[10px] sm:text-xs font-bold text-cyan-300 tracking-wider uppercase shadow-xs backdrop-blur-sm">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                TECH.JP | SOLUCIONES TECNOLÓGICAS
              </span>

              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
            </div>

            {/* Mensaje central oficial */}
            <div className="relative z-10 text-center my-auto py-2">
              <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-sky-600 to-cyan-500 p-0.5 shadow-lg shadow-sky-600/30 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Play className="w-5 h-5 text-cyan-400 ml-0.5 fill-cyan-400/20" />
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug max-w-xs mx-auto mb-1">
                Tech.JP — Soluciones tecnológicas{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">
                  donde las necesites.
                </span>
              </h3>

              <p className="text-[11px] sm:text-xs text-slate-400 max-w-xs mx-auto">
                Soporte técnico integral para hogares, empresas y comercios
              </p>
            </div>

            {/* Pie del reproductor de video */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-2.5 backdrop-blur-xs">
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                Atención presencial y remota
              </span>
              <span className="text-sky-400 font-semibold">+57 333 262 7572</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
