import "./Projects.css";

// importamos las imagenes de los tres primeros proyectos
import imgVR       from "../assets/proyecto1.jpg";
import imgBanda    from "../assets/proyecto2.jpg";
import imgSencillo from "../assets/proyecto3.jpg";

// array con todos los proyectos
// img: null significa que ese proyecto no tiene imagen
const projects = [
  {
    id: "01",
    title: "Produccion - Banda Sinfonica La Estrella",
    type: "Produccion Musical · Semillero SIPAP",
    desc: "Grabacion, mezcla y masterizacion para la Banda Sinfonica La Estrella. Captura multicanal de ensamble sinfonico completo, edicion de instrumentos de viento, cuerda y percusion. Proyecto de produccion en sala con criterio musicologico y tratamiento acustico del espacio.",
    tags: ["Grabacion", "Mezcla", "Masterizacion", "Sinfonico", "Pro Tools"],
    badge: "Produccion completada",
    img: imgBanda,
    accent: "#00e5b0",
  },
  {
    id: "02",
    title: "Sencillo - Damas a la Plancha",
    type: "Produccion Musical · Semillero SIPAP",
    desc: "Produccion musical integral de sencillo independiente: arreglos, grabacion, mezcla y masterizacion. Trabajo de produccion discografica con enfoque en la identidad sonora del artista y coherencia timbrica entre instrumentos.",
    tags: ["Produccion Musical", "Arreglos", "Mezcla", "Masterizacion", "DAW"],
    badge: "Publicado",
    img: imgSencillo,
    accent: "#0099ff",
  },
  {
    id: "03",
    title: "Audio Espacializado - Banda Sinfonica en VR",
    type: "Diseno Sonoro · Investigacion SIESI",
    desc: "Diseno de audio para entorno virtual inmersivo: posicionamiento de secciones instrumentales en espacio tridimensional, balance de ensamble sinfonico desde multiples puntos de escucha. Aplica tecnicas de espacializacion HOA/binaural a la educacion musical.",
    tags: ["Audio Espacial", "HOA", "Binaural", "VR", "Diseno Sonoro"],
    badge: "Investigacion activa",
    img: imgVR,
    accent: "#00e5b0",
  },
  {
    id: "04",
    title: "Operacion de Sistemas de Audio en Vivo",
    type: "Sonido en Vivo · NJ Eventos (2022-2024)",
    desc: "Operacion tecnica de sistemas de audio en eventos musicales en el area metropolitana de Medellin. Configuracion de consolas analogicas y digitales, gestion de senal, monitoreo de planta y mezcla en tiempo real para distintos formatos de produccion en vivo.",
    tags: ["Sonido en Vivo", "Consola Digital", "Signal Flow", "Monitor", "FOH"],
    badge: "Experiencia profesional",
    img: null, // sin imagen
    accent: "#0099ff",
  },
  {
    id: "05",
    title: "Coordinacion de Produccion - Monikub",
    type: "Produccion de Eventos · 2021-2026",
    desc: "Liderazgo operativo y tecnico en produccion de eventos musicales en centros comerciales del area metropolitana. Administracion de equipos, logistica de audio y coordinacion entre artistas, tecnicos y espacios. Mas de cinco anos de gestion continua.",
    tags: ["Produccion de Eventos", "Liderazgo", "Logistica", "Audio en Vivo"],
    badge: "Direccion tecnica",
    img: null, // sin imagen
    accent: "#00e5b0",
  },
  {
    id: "06",
    title: "Investigacion - Contaminacion Auditiva en Medellin",
    type: "Acustica Ambiental · Academico",
    desc: "Analisis de contaminacion sonora en el area metropolitana de Medellin: relevamiento de zonas criticas, medicion de niveles de presion sonora, contraste con normativa colombiana vigente (Resolucion 0627) y propuestas de mitigacion acustica.",
    tags: ["Acustica Ambiental", "Medicion SPL", "Normativa", "Medellin"],
    badge: "Investigacion",
    img: null, // sin imagen
    accent: "#0099ff",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="section projects">
      <div className="container">
        <p className="section-label">Proyectos</p>
        <h2 className="section-title">Trabajo realizado.</h2>

        {/* grilla de tarjetas */}
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.id} className="project-card" style={{ "--card-accent": p.accent }}>

              {/* solo muestra la imagen si el proyecto tiene una */}
              {p.img && (
                <div className="card-img-wrap">
                  <img src={p.img} alt={p.title} className="card-img" />
                </div>
              )}

              <div className="card-body">
                <div className="card-header">
                  <span className="card-id">{p.id}</span>
                  <span className="card-badge">{p.badge}</span>
                </div>
                <div className="card-type">{p.type}</div>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.desc}</p>

                {/* tags al fondo de cada tarjeta */}
                <div className="card-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="card-tag">{t}</span>
                  ))}
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}