type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-bold text-slate-900 mb-3">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </article>
  );
}