/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */






import Header from './components/Header';
import Hero from './Hero';
export default function App() {
  const whatsappUrl =
    "https://wa.me/573332627572?text=Hola%2C%20Tech.JP.%20Quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20servicio%20t%C3%A9cnico.";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-6">
      <Hero
  title="Soluciones tecnológicas donde las necesites."
  description="Soporte técnico para hogares, empresas y comercios."
  whatsappUrl={whatsappUrl}
/>


















      </main>
    </div>
  );
}