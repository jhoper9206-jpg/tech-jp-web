type HeroProps = {
  title: string;
  description: string;
  whatsappUrl: string;
};

export default function Hero({
  title,
  description,
  whatsappUrl,
}: HeroProps) {
  return (
<section
  id="inicio"
  className="w-full max-w-6xl mx-auto px-6 py-20 text-center"
>
  <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
    {title}
  </h1>

  <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
    {description}
  </p>

  <a
    href={whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-blue-700 transition"
  >
    Solicitar servicio
  </a>
</section>
  );
}