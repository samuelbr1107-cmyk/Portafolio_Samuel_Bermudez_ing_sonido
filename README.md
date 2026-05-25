# Samuel Bermúdez Rivera — Portafolio

Portafolio personal construido con **React + Vite**.

## Estructura

```
src/
├── App.jsx          # Componente raíz + ensamblaje
├── App.css          # Variables globales, tipografía, layout base
└── components/
    ├── Nav.jsx / Nav.css
    ├── Hero.jsx / Hero.css       ← Canvas con forma de onda animada
    ├── About.jsx / About.css     ← Descripción + línea de tiempo
    ├── Skills.jsx / Skills.css   ← Barras de habilidades + tags
    ├── Projects.jsx / Projects.css
    └── Contact.jsx / Contact.css ← Formulario + datos de contacto
```

## Instalación y desarrollo

```bash
npm install
npm run dev
```

## Build y despliegue

```bash
npm run build
```

El directorio `dist/` resultante se puede desplegar en:
- **Vercel**: conectar repo GitHub → deploy automático
- **Netlify**: arrastrar `dist/` al dashboard o conectar repo
- **GitHub Pages**: usar plugin `vite-plugin-gh-pages` o GitHub Actions

## Personalización pendiente

- Agregar foto en la sección **Sobre mí** (`/public/foto.jpg`)
- Conectar formulario de contacto con **Formspree** o **EmailJS**
- Agregar links reales a proyectos / repositorios
- Ajustar porcentajes de habilidades según criterio propio
