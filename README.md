# Papá Noel Argentina | CG Producciones

SPA desarrollada con Angular, SCSS, Bootstrap y GSAP para la web de Papá Noel Argentina.

## Stack

- Angular standalone components
- SCSS modular por componente
- Bootstrap 5
- GSAP + ScrollTrigger
- Formulario de contacto sin backend usando `mailto:`

## Instalación

```bash
npm install
npm start
```

## Build

```bash
npm run build
```

## Estructura principal

```txt
src/app/components
├── navbar
├── hero
├── nosotros
├── shoppings
├── gallery
├── clients
├── empresas
├── contacto
└── footer

src/app/pages/home
└── HomeComponent integra todas las secciones y anima con GSAP.
```

Los assets están en `public/images`. El Papá Noel principal está en:

```txt
public/images/pnoel-hero.png
```

Las rutas son SPA: una sola ruta raíz (`''`) y navegación por anclas (`#nosotros`, `#shoppings`, etc.).
