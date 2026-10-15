/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, MessageCircle } from 'lucide-react';
import BrandLogo from './BrandLogo';
import MobileMenu from './MobileMenu';

type HeaderProps = {
  whatsappUrl?: string;
};

const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio', id: 'inicio' },
  { label: 'Servicios', href: '#servicios', id: 'servicios' },
  { label: 'Galería', href: '#galeria', id: 'galeria' },
  { label: 'Empresas', href: '#empresas', id: 'empresas' },
  { label: 'Nosotros', href: '#nosotros', id: 'nosotros' },
  { label: 'Contacto', href: '#contacto', id: 'contacto' },
];

export default function Header({
  whatsappUrl = "https://wa.me/573332627572?text=Hola%2C%20Tech.JP.%20Quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20servicio%20t%C3%A9cnico.",
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detección de scroll para ajustar el tamaño y sombras del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver para detectar la sección activa dinámicamente
  useEffect(() => {
    const sectionIds = ['inicio', 'servicios', 'galeria', 'empresas', 'nosotros', 'contacto'];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: 0.1,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm'
            : 'py-4 bg-white/70 backdrop-blur-sm border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logotipo oficial / BrandLogo en presentación limpia */}
          <BrandLogo size={isScrolled ? 'sm' : 'md'} showSubtitle={!isScrolled} isLightContext={true} />

          {/* Navegación Desktop Interactiva con tema claro */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-1 bg-slate-100/80 border border-slate-200/80 px-2.5 py-1 rounded-full backdrop-blur-md shadow-xs"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                    isActive
                      ? 'text-sky-800 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {/* Indicador animado azul suave para sección activa */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white border border-sky-300/80 rounded-full shadow-xs -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Desktop & Botón Hamburguesa Móvil */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white text-xs uppercase tracking-wider font-bold py-2.5 px-4.5 rounded-full shadow-sm shadow-sky-600/20 hover:shadow-md hover:shadow-sky-500/20 active:scale-95 transition-all duration-200"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Solicitar servicio
            </a>

            {/* Botón para menú móvil */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Abrir menú de navegación"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 bg-slate-100/90 border border-slate-200 rounded-xl active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil modal */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        activeSection={activeSection}
        whatsappUrl={whatsappUrl}
      />
    </>
  );
}