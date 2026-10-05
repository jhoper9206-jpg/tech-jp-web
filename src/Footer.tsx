export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Tech.JP
            </h2>

            <p className="text-slate-400 leading-relaxed">
              Soporte Técnico &amp; Soluciones Tecnológicas
            </p>

            <p className="text-blue-400 mt-3 font-medium">
              Soluciones tecnológicas donde las necesites.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Navegación
            </h3>

            <div className="flex flex-col gap-2">
              <a href="#inicio" className="hover:text-blue-400 transition">
                Inicio
              </a>

              <a href="#servicios" className="hover:text-blue-400 transition">
                Servicios
              </a>

              <a href="#empresas" className="hover:text-blue-400 transition">
                Empresas
              </a>

              <a href="#nosotros" className="hover:text-blue-400 transition">
                Nosotros
              </a>

              <a href="#contacto" className="hover:text-blue-400 transition">
                Contacto
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Contacto
            </h3>

            <div className="space-y-2 text-slate-400">
              <p>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/573332627572?text=Hola%2C%20Tech.JP.%20Quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20servicio%20t%C3%A9cnico."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  333 262 7572
                </a>
              </p>

              <p>
                Correo:{" "}
                <a
                  href="mailto:Tech.jp34@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  Tech.jp34@gmail.com
                </a>
              </p>

              <p>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/tech.jp34/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  @tech.jp34
                </a>
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Tech.JP. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}
