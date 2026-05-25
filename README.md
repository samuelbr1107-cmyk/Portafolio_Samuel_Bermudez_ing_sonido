# Samuel Bermúdez Rivera — Portafolio Personal

Portafolio web construido como proyecto final del curso de Desarrollo Web. Implementado con **React + Vite**, componentizado por secciones y desplegable en Vercel, Netlify o GitHub Pages.

---

## Tecnologías y librerías usadas

### Core
| Tecnología | Versión | Para qué se usa |
|---|---|---|
| React | 18.3.1 | Framework principal de la UI, manejo de estado y componentes |
| Vite | 5.4.2 | Bundler y servidor de desarrollo, reemplaza Create React App |
| @vitejs/plugin-react | 4.3.1 | Plugin que conecta Vite con React (JSX, Fast Refresh) |

### Dentro de React (sin instalar nada extra)
| Hook / API | Para qué se usa en este proyecto |
|---|---|
| `useState` | Estado del formulario de contacto, estado del scroll en Nav |
| `useEffect` | Listener de scroll en App.jsx, loop de animación del canvas en Hero |
| `useRef` | Referencia al elemento canvas del Waveform en Hero |
| Canvas API (nativa del browser) | Dibuja las ondas animadas del fondo en Hero.jsx |
| `requestAnimationFrame` | Loop de animación del waveform, frame a frame |

### Fuentes externas (Google Fonts, sin instalar)
| Fuente | Variable CSS | Uso |
|---|---|---|
| Syne (800, 700, 600, 400) | `--font-head` | Títulos y nombres grandes |
| Space Mono (400, 700) | `--font-mono` | Etiquetas, tags, código, formularios |

### Lo que NO se usó (a propósito)
- Sin Bootstrap ni Tailwind — todo el CSS es propio con variables CSS
- Sin librerías de animación (Framer Motion, GSAP) — las animaciones son CSS puro (`@keyframes`, `transition`)
- Sin librerías de íconos — el diseño usa texto y formas geométricas

---

## Estructura del proyecto

```
Samuel_portafolios/
│
├── index.html                  ← entry point de Vite, tiene el div#root
├── package.json                ← dependencias del proyecto
├── vite.config.js              ← configuración de Vite con el plugin de React
├── README.md                   ← este archivo
│
├── public/                     ← archivos que Vite sirve tal cual (sin procesar)
│   └── (vacío — las imágenes van en src/assets/)
│
└── src/                        ← todo el código fuente
    ├── main.jsx                ← punto de entrada, monta App en el div#root
    ├── App.jsx                 ← componente raíz, ensambla todo, maneja el scroll
    ├── App.css                 ← variables CSS globales, reset, layout base, footer
    │
    └── components/             ← un componente por sección del portafolio
        ├── Nav.jsx             ← barra de navegación fija, se oscurece al scrollear
        ├── Nav.css
        ├── Hero.jsx            ← pantalla completa con canvas animado y botones
        ├── Hero.css
        ├── About.jsx           ← foto de perfil, texto, galería y timeline
        ├── About.css
        ├── Skills.jsx          ← barras de habilidades por categoría + tags
        ├── Skills.css
        ├── Projects.jsx        ← tarjetas de proyectos con imagen y hover
        ├── Projects.css
        ├── Contact.jsx         ← lista de contactos + formulario
        └── Contact.css
    │
    └── assets/                 ← imágenes importadas directamente en los componentes
        ├── foto.jpg            ← foto de perfil (About)
        ├── trombon.jpg         ← foto tocando trombón (About gallery)
        ├── eventos.jpg         ← foto en evento de sonido en vivo (About gallery)
        ├── proyecto1.jpg       ← imagen proyecto VR / audio espacial
        ├── proyecto2.jpg       ← imagen grabación Banda Sinfónica La Estrella
        └── proyecto3.jpg       ← imagen sencillo Damas a la Plancha
```

---

## Cómo correr el proyecto localmente

```bash
# 1. Entrar a la carpeta
cd Samuel_portafolios

# 2. Instalar dependencias (solo la primera vez)
npm install

# 3. Correr el servidor de desarrollo
npm run dev
# → abre http://localhost:5173
```

## Cómo hacer el build para producción

```bash
npm run build
# genera la carpeta dist/ lista para desplegar
```

---

## Secciones del portafolio

| Sección | ID ancla | Componente | Descripción |
|---|---|---|---|
| Hero | `#hero` | `Hero.jsx` | Pantalla completa con nombre, rol, descripción y canvas con ondas animadas |
| Sobre mí | `#sobre-mi` | `About.jsx` | Texto de perfil, foto de perfil, galería de fotos y timeline de trayectoria |
| Skills | `#habilidades` | `Skills.jsx` | Barras de habilidades agrupadas por categoría y tags de áreas de interés |
| Proyectos | `#proyectos` | `Projects.jsx` | Tarjetas con imagen, descripción, tipo, badge y tags de tecnologías |
| Contacto | `#contacto` | `Contact.jsx` | Lista de datos de contacto (email, teléfono, Instagram) y formulario |

---

## Cómo funciona el responsive

El portafolio está optimizado para tres rangos de pantalla usando solo CSS media queries:

**Desktop (> 960px)**
- Nav horizontal con logo a la izquierda y links a la derecha
- Hero con ondas animadas y barras de frecuencia visibles
- About en grilla de dos columnas: texto + foto de perfil
- Galería de About en tres columnas: foto, foto, timeline
- Skills en tres columnas
- Projects en tres columnas
- Contact en dos columnas: info + formulario

**Tablet (601px – 960px)**
- About: foto baja debajo del texto, galería en una columna
- Skills: dos columnas
- Projects: dos columnas
- Contact: dos columnas hasta 860px, luego apilado

**Móvil (≤ 600px)**
- Nav: logo y links se apilan verticalmente, links más chicos
- Hero: padding reducido, nombre más chico con `clamp()`, barras de frecuencia ocultas
- About: todo en una columna, foto más chica
- Skills: una columna
- Projects: una columna, imagen más alta
- Contact: una columna

Técnicas usadas para el responsive:
- `clamp()` para tamaños de fuente que se adaptan solos sin breakpoints
- `grid-template-columns: repeat(auto-fit, ...)` en algunos casos
- `flex-wrap: wrap` para que los elementos bajen solos cuando no caben
- `word-wrap: break-word` para que los títulos no se salgan de la pantalla
- `overflow-x: hidden` en html, body y #root para evitar scroll horizontal

---
## Cómo conectar el formulario de contacto

Para que el formulario envíe mensajes reales se conectó con **Formspree**, un servicio externo que recibe los datos del formulario y los reenvía al correo configurado, sin necesidad de escribir ningún backend ni instalar dependencias adicionales.

### Qué se hizo

En `Contact.jsx` la función `submit` originalmente solo hacía un `console.log` con los datos. Se reemplazó por una llamada `fetch` a la API de Formspree:

```js
const submit = async (e) => {
  e.preventDefault();
  await fetch("https://formspree.io/f/xpwzabcd", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  setSent(true);
  setTimeout(() => setSent(false), 4000);
  setForm({ name: "", email: "", message: "" });
};
```

Lo que hace cada parte:
- `e.preventDefault()` evita que la página recargue al enviar
- `fetch` manda los datos del formulario a Formspree en formato JSON
- `JSON.stringify(form)` convierte el objeto `{ name, email, message }` a texto para enviarlo
- `setSent(true)` cambia el botón a "Mensaje enviado" por 4 segundos
- `setForm(...)` limpia los campos después de enviar

### Cómo se configuró Formspree

1. Se creó una cuenta en https://formspree.io
2. Se creó un nuevo form llamado "Portafolio Samuel"
3. Formspree entregó un endpoint único con este formato: `https://formspree.io/f/ID`
4. Ese ID se pegó en el `fetch` dentro de `Contact.jsx`
5. Los mensajes llegan directo a `samuel.br1107@gmail.com`

### Notas
- No se instaló ninguna librería extra, `fetch` es nativo del browser
- El plan gratuito de Formspree permite 50 envíos por mes


---

## Relación con otros proyectos del curso

Este portafolio aplica los mismos conceptos usados en proyectos anteriores de la clase:

- **Componentización**: separar la UI en piezas reutilizables, igual que en los ejercicios de componentes de React del curso
- **useState y useEffect**: mismos hooks usados en los proyectos de contador, lista de tareas y fetch de datos
- **CSS Variables**: sistema de diseño con tokens, mismo enfoque que en los ejercicios de theming
- **Responsive con media queries**: breakpoints y grillas flexibles, aplicando lo visto en el módulo de Responsive Design del curso
- **Importación de assets**: imágenes importadas directamente en JSX con `import`, mismo patrón que en proyectos anteriores con imágenes locales
- **Event handlers**: `onChange`, `onSubmit`, `onClick` usados en los formularios y en el scroll listener, igual que en los ejercicios interactivos del curso

---

*Samuel Bermúdez Rivera — Ingeniería de Sonido, USB Medellín — 2026*
