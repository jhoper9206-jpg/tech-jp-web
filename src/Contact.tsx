export default function Contact() {
  const whatsappUrl =
    "https://wa.me/573332627572?text=Hola%2C%20Tech.JP.%20Quisiera%20solicitar%20informaci%C3%B3n%20sobre%20un%20servicio%20t%C3%A9cnico.";

  return (
    <section id="contacto" className="bg-slate-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold uppercase tracking-wider mb-3">
            Contacto
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
            ¿Necesitas soporte técnico?
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Cuéntanos qué necesitas y recibe orientación para encontrar
            la solución adecuada para tu equipo o negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Hablemos
            </h3>

            <div className="space-y-5 text-slate-600">
<p>
  <span className="font-semibold text-slate-900">
    📱 WhatsApp:
  </span>{" "}
  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    333 262 7572
  </a>
</p>
<p>
  <span className="font-semibold text-slate-900">
    ✉️ Correo:
  </span>{" "}
  <a
    href="mailto:Tech.jp34@gmail.com"
    className="text-blue-600 hover:underline"
  >
    Tech.jp34@gmail.com
  </a>
</p>
<p>
  <span className="font-semibold text-slate-900">
    📷 Instagram:
  </span>{" "}
  <a
    href="https://www.instagram.com/tech.jp34/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    @tech.jp34
  </a>
</p>
              <p>
                <span className="font-semibold text-slate-900">
                  🛠️ Modalidad:
                </span>
                {" "}Atención presencial y remota
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-white flex flex-col justify-center">
            <p className="text-blue-400 font-semibold uppercase tracking-wider mb-3">
              Tech.JP
            </p>

            <h3 className="text-3xl font-bold mb-4">
              Solicita tu servicio
            </h3>

            <p className="text-slate-300 mb-8 leading-relaxed">
              Escríbenos por WhatsApp y cuéntanos qué equipo presenta
              la falla o qué solución tecnológica necesitas.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-center transition"
            >
              Contactar por WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}