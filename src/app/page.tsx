import Link from "next/link";

export default function Home() {
  const links = [
    { href: "/css-modules", label: "CSS Modules" },
    { href: "/tailwind", label: "TailwindCSS" },
    { href: "/styled", label: "styled-components" },
  ];
  return (
    <main style={{ display: "grid", gap: "1rem" }}>
      <h1>Estilos en React/Next.js</h1>
      <ul
        style={{ display: "flex", gap: "1rem", listStyle: "none", padding: 0 }}
      >
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              style={{ textDecoration: "underline", color: "#2563eb" }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
