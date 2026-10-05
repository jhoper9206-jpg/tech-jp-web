export default function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-200 py-4 px-6 flex items-center justify-between">
      <strong className="text-xl font-bold text-slate-900">Tech.JP</strong>

      <nav className="flex flex-wrap gap-4 sm:gap-6 text-sm font-medium text-slate-600">
        <a href="#inicio" className="hover:text-blue-600 transition-colors">Inicio</a>
        <a href="#servicios" className="hover:text-blue-600 transition-colors">Servicios</a>
        <a href="#empresas" className="hover:text-blue-600 transition-colors">Empresas</a>
        <a href="#nosotros" className="hover:text-blue-600 transition-colors">Nosotros</a>
        <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
      </nav>
    </header>
  );
}