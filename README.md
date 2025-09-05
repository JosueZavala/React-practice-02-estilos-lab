# Estilos Lab 🎨🚀

Práctica completa para aprender y comparar **tres formas de estilado en
React/Next.js**:

-   **CSS Modules**
-   **TailwindCSS**
-   **styled-components**

El objetivo es que los alumnos experimenten con cada técnica, entiendan
sus ventajas/desventajas y discutan cuándo conviene usarlas en un
proyecto real.

------------------------------------------------------------------------

## 🚀 Requisitos y Setup

### Requisitos

-   Node.js ≥ 18
-   npm o pnpm

### Crear proyecto

``` bash
npx create-next-app@latest estilos-lab --ts --eslint
cd estilos-lab
```

### Estructura inicial sugerida

    estilos-lab/
      app/
        layout.tsx
        page.tsx
        css-modules/page.tsx
        tailwind/page.tsx
        styled/page.tsx
      components/
        modules/...
        tailwind/...
        styled/...
      styles/
        globals.css
      next.config.mjs
      tailwind.config.ts   (se crea en sección Tailwind)

------------------------------------------------------------------------

## 📦 CSS Modules

-   Archivos `*.module.css` con **scope local por clase** (sin
    colisiones).
-   Ideal cuando quieres **CSS clásico pero encapsulado**.

Ejemplo:

``` tsx
import styles from "./Button.module.css";

export default function Button({ children }) {
  return <button className={styles.btn}>{children}</button>;
}
```

👉 Ruta demo: [`/css-modules`](http://localhost:3000/css-modules)

------------------------------------------------------------------------

## 🌬 TailwindCSS

-   Utilidades rápidas y consistentes.
-   Gran velocidad para prototipado y sistemas de diseño.

### Instalación

``` bash
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Ejemplo:

``` tsx
export default function TWButton() {
  return <button className="px-4 py-2 bg-blue-600 text-white rounded-xl">Primary</button>;
}
```

👉 Ruta demo: [`/tailwind`](http://localhost:3000/tailwind)

------------------------------------------------------------------------

## 💅 styled-components

-   Estilos dinámicos y **theming avanzado**.
-   Útil para librerías de UI custom.

### Instalación

``` bash
npm i styled-components
npm i -D @types/styled-components
```

Ejemplo:

``` tsx
import styled from "styled-components";

export const SCButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: .6rem 1rem;
  border-radius: 16px;
`;
```

👉 Ruta demo: [`/styled`](http://localhost:3000/styled)

------------------------------------------------------------------------

## 🧭 Navegación

La página principal incluye links a cada demo:

-   [CSS Modules](/css-modules)
-   [TailwindCSS](/tailwind)
-   [styled-components](/styled)

------------------------------------------------------------------------

## 📝 Ejercicios

### CSS Modules

-   Crear una grid responsive (2--4 columnas).
-   Añadir modificadores en CSS (.success, .warning).
-   Animación simple con `:hover`.

### TailwindCSS

-   Implementar **dark mode** con `dark:*`.
-   Añadir estados hover, focus, active, disabled.
-   Crear un **alert componible** con variantes (info, error, success).

### styled-components

-   Agregar **tema oscuro** con `<ThemeProvider>`.
-   Crear un **Mixin** de botones y reutilizarlo.
-   Usar props (`$status="error"`) para variar estilos.

------------------------------------------------------------------------

## ✅ Criterios de Evaluación

-   Funcionan las tres rutas con su técnica correspondiente.
-   Componentes reutilizables y accesibles.
-   Responsividad y estados interactivos.
-   Código ordenado, sin estilos "huérfanos".
-   Justificación de cuándo usar cada técnica.

------------------------------------------------------------------------

## 🗣 Discusión final: ¿Cuándo usar cada técnica?

-   **CSS Modules** → proyectos medianos con CSS claro y encapsulado.
-   **TailwindCSS** → prototipado rápido, sistemas de diseño
    consistentes.
-   **styled-components** → theming avanzado y estilos dinámicos.

------------------------------------------------------------------------

## ▶️ Scripts

``` bash
npm run dev
# abre http://localhost:3000
```

------------------------------------------------------------------------

## 📚 Créditos

Ejercicio creado para fines didácticos.\
Autor: **Josué Zavala** 👨‍💻
