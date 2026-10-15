/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS, GalleryCategory, GalleryItem } from '../data/gallery';
import { X, ChevronLeft, ChevronRight, Eye, MessageCircle, Info } from 'lucide-react';
import { SlideUp } from './AnimatedSection';

const CATEGORIES: GalleryCategory[] = [
  'Todos',
  'Computadores',
  'Celulares y tablets',
  'Consolas',
  'Servicio a domicilio',
  'Empresas',
  'Consejos',
  'Corporativo',
];

export default function ServiceGallery() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('Todos');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    selectedCategory === 'Todos'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Navegación en el lightbox
  const currentIndex = activeItem
    ? filteredItems.findIndex((item) => item.id === activeItem.id)
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filteredItems.length - 1) {
      setActiveItem(filteredItems[currentIndex + 1]);
    } else {
      setActiveItem(filteredItems[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveItem(filteredItems[currentIndex - 1]);
    } else {
      setActiveItem(filteredItems[filteredItems.length - 1]);
    }
  };

  // Cierre con Escape y navegación con flechas
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') setActiveItem(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, currentIndex, filteredItems]);

  return (
    <section id="galeria" className="w-full py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SlideUp className="text-center mb-12">
          <p className="text-sky-600 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2.5">
            Identidad &amp; Piezas Oficiales
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Galería Tecnológica
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-3">
            Conoce nuestras soluciones, consejos y servicios tecnológicos.
          </p>

          <p className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-3.5 py-1 rounded-full">
            <Info className="w-3.5 h-3.5 text-sky-600" />
            Piezas publicitarias e informativas oficiales de Tech.JP
          </p>
        </SlideUp>

        {/* Filtros interactivos por categoría */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                  isSelected
                    ? 'bg-sky-600 text-white shadow-sm shadow-sky-600/30'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Cuadrícula responsiva de la galería con animaciones Motion */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => setActiveItem(item)}
                className="group relative bg-white border border-slate-200 hover:border-sky-400 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between p-4"
              >
                <div>
                  {/* Visor de imagen sin recortes (1:1 aspect ratio) */}
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-black border border-slate-200/90 mb-4 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-contain select-none group-hover:scale-[1.02] transition-transform duration-300"
                    />

                    {/* Botón flotante al pasar cursor */}
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-1.5 bg-white/95 text-slate-900 font-bold text-xs py-2 px-3.5 rounded-full shadow-md">
                        <Eye className="w-3.5 h-3.5 text-sky-600" />
                        Ver pieza completa
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200/60 px-2 py-0.5 rounded-md inline-block mb-2">
                      {item.tag}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors line-clamp-2 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="text-slate-600 font-semibold">{item.category}</span>
                  <span className="text-sky-600 font-bold group-hover:translate-x-1 transition-transform">
                    Ampliar imagen →
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal / Lightbox para vista ampliada accesible sin recortes */}
      <AnimatePresence>
        {activeItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          >
            {/* Backdrop oscuro con desenfoque */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"
            />

            {/* Contenedor del Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 z-10 max-h-[92vh] flex flex-col"
            >
              {/* Botón de cierre */}
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                aria-label="Cerrar vista previa"
                className="absolute top-4 right-4 z-20 p-2.5 text-white bg-slate-900/80 hover:bg-slate-900 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Botón imagen anterior */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Imagen anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 text-white bg-slate-900/80 hover:bg-slate-900 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Botón imagen siguiente */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Siguiente imagen"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 text-white bg-slate-900/80 hover:bg-slate-900 rounded-full shadow-lg transition-all active:scale-95 cursor-pointer backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Imagen corporativa completa en el lightbox sin deformación */}
              <div className="w-full bg-black flex items-center justify-center p-3 sm:p-5 overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.alt}
                  className="max-h-[60vh] w-auto aspect-square object-contain select-none rounded-xl"
                />
              </div>

              {/* Contenido descriptivo del modal */}
              <div className="p-5 sm:p-6 overflow-y-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full">
                    {activeItem.category}
                  </span>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs text-slate-500 font-medium">
                    {activeItem.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {activeItem.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                  {activeItem.description}
                </p>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
                    Pieza gráfica publicitaria oficial · Tech.JP
                  </span>

                  <a
                    href={`https://wa.me/573332627572?text=${encodeURIComponent(
                      activeItem.whatsappMessage || `Hola, Tech.JP. Quisiera consultar sobre el servicio: ${activeItem.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs sm:text-sm py-2.5 px-5 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
