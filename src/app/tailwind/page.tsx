import TWButton from "@/components/tailwind/TWButton";
import TWCard from "@/components/tailwind/TWCard";

export default function TailwindPage() {
  return (
    <main className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
      {[1, 2, 3].map((i) => (
        <TWCard key={i} title={`Tarjeta ${i}`}>
          <p>Tailwind: utilidades rápidas y consistentes.</p>
          <div className="flex gap-2 mt-2">
            <TWButton>Primary</TWButton>
            <TWButton variant="outline">Outline</TWButton>
          </div>
        </TWCard>
      ))}
    </main>
  );
}
