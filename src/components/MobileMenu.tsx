/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, ChevronRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

type NavItem = {
  label: string;
  href: string;
  id: string;
};

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeSection: string;
  whatsappUrl: string;
};

export default function MobileMenu({
  isOpen,
  onClose,
  navItems,
  activeSection,
  whatsappUrl,
}: MobileMenuProps) {
  // Manejo de la tecla Escape para accesibilidad
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Bloqueo de scroll en el fondo cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal móvil"
          className="fixed inset-0 z-50 md:hidden"
        >
          {/* Backdrop con desenfoque suave */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Panel deslizante lateral en tema claro */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white border-l border-slate-200 shadow-2xl p-6 flex flex-col justify-between"
          >
            <div>
              {/* Cabecera del menú móvil */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <BrandLogo size="sm" />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Cerrar menú de navegación"
                  className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Enlaces de navegación con animación escalonada */}
              <nav className="mt-6 flex flex-col gap-1.5">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={onClose}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * index, duration: 0.25 }}
                      className={`group flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all ${
                        isActive
                          ? 'bg-sky-50 text-sky-700 font-semibold border border-sky-200/80'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`w-2 h-2 rounded-full transition-all ${
                            isActive
                              ? 'bg-sky-600 shadow-[0_0_8px_#0284C7]'
                              : 'bg-slate-300 group-hover:bg-sky-400'
                          }`}
                        />
                        {item.label}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 transition-all ${
                          isActive
                            ? 'text-sky-600 translate-x-0.5'
                            : 'text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1'
                        }`}
                      />
                    </motion.a>
                  );
                })}
              </nav>
            </div>

            {/* Acciones al pie del menú móvil */}
            <div className="pt-6 border-t border-slate-200 space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-semibold py-3.5 px-4 rounded-xl shadow-md shadow-sky-600/20 active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar servicio
              </a>

              <p className="text-xs text-center text-slate-500 font-medium">
                Tech.JP · Soporte Técnico &amp; Soluciones
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
