/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */




export default function App() {
  const whatsappUrl =
    "https://wa.me/573332627572?text=Hola%2C%20Tech.JP.%20Quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20servicio%20t%C3%A9cnico.";

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-800">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
        {/* Encabezado principal */}
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          Tech.JP
        </h1>

        {/* Subtítulo descriptivo */}
        <p className="text-lg text-slate-600 mb-8 font-medium">
          Soporte Técnico &amp; Soluciones Tecnológicas
        </p>

        {/* Botón de acción para solicitar servicio vía WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg shadow-sm transition-colors duration-150 text-center"
        >
          Solicitar servicio
        </a>
      </div>
    </main>
  );
}
