"use client";
import { ThemeProvider } from "styled-components";
import { theme } from "@/components/styled/theme";
import { SCButton } from "@/components/styled/SCButton";
import { SCCard } from "@/components/styled/SCCard";

export default function StyledPage() {
  return (
    <ThemeProvider theme={theme}>
      <main
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {[1, 2, 3].map((i) => (
          <SCCard key={i}>
            <h3>Tarjeta {i}</h3>
            <p>styled-components: temas y estilos dinámicos en JS.</p>
            <div style={{ display: "flex", gap: ".5rem", marginTop: ".5rem" }}>
              <SCButton>Primary</SCButton>
              <SCButton $variant="ghost">Ghost</SCButton>
            </div>
          </SCCard>
        ))}
      </main>
    </ThemeProvider>
  );
}
