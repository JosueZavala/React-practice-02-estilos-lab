import styles from "@/components/modules/Card.module.css";
import Button from "@/components/modules/Button";

export default function CSSModulesPage() {
  return (
    <main
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      }}
    >
      {[1, 2, 3].map((i) => (
        <article key={i} className={styles.card}>
          <h3 className={styles.title}>Tarjeta {i}</h3>
          <p className={styles.body}>
            CSS Modules: estilos locales sin colisiones.
          </p>
          <div style={{ display: "flex", gap: ".5rem" }}>
            <Button>Primary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </article>
      ))}
    </main>
  );
}
