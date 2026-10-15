/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import TechBackground from './components/TechBackground';
import Hero from './Hero';
import Services from './Services';
import ServiceGallery from './components/ServiceGallery';
import Business from './Business';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

export default function App() {
  const whatsappUrl =
    "https://wa.me/573332627572?text=Hola%2C%20Tech.JP.%20Quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20servicio%20t%C3%A9cnico.";

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-sky-500/20 selection:text-sky-900 font-sans">
      {/* Fondo tecnológico claro de alto rendimiento */}
      <TechBackground />

      {/* Encabezado fijo con glassmorphism claro y navegación interactiva */}
      <Header whatsappUrl={whatsappUrl} />

      {/* Secciones principales de la versión 2.2.0 Light Tech Experience */}
      <main className="relative flex flex-col w-full">
        <Hero
          title="Soluciones tecnológicas donde las necesites."
          description="Soporte técnico para hogares, empresas y comercios."
          whatsappUrl={whatsappUrl}
        />
        <Services />
        <ServiceGallery />
        <Business whatsappUrl={whatsappUrl} />
        <About />
        <Contact />
      </main>

      {/* Pie de página corporativo */}
      <Footer />
    </div>
  );
}
