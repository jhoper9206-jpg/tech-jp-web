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
              Soporte Técnico & Soluciones Tecnológicas
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
              <p>WhatsApp: 333 262 7572</p>
              <p>Tech.jp34@gmail.com</p>
              <p>Instagram: @tech.jp34</p>
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