export default function TWCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="bg-white rounded-2xl shadow-md p-4">
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <div className="text-slate-600">{children}</div>
    </article>
  );
}
