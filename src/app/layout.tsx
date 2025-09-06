import "./globals.css";

export const metadata = { title: "Estilos Lab" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={{ padding: "2rem", background: "#f8fafc" }}>{children}</body>
    </html>
  );
}
