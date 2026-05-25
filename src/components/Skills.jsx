import "./Skills.css";

// categorias con sus habilidades y nivel del 0 al 100
const categories = [
  {
    cat: "Audio & Produccion",
    items: [
      { name: "Pro Tools / Cubase / Reaper", level: 90 },
      { name: "Audio Espacial & Binaural",   level: 70 },
      { name: "Operacion de Consolas",        level: 72 },
      { name: "Diseno Acustico",              level: 55 },
      { name: "Redes de Audio (Dante)",       level: 50 },
    ],
  },
  {
    cat: "Programacion & Software",
    items: [
      { name: "Python",                level: 65 },
      { name: "MATLAB",                level: 65 },
      { name: "R (Metodos Numericos)", level: 60 },
      { name: "AutoCAD",               level: 40 },
    ],
  },
  {
    cat: "Investigacion & Otros",
    items: [
      { name: "Sistemas Inmersivos VR",      level: 68 },
      { name: "Diseno Sonoro Interactivo",   level: 72 },
      { name: "Fotografia / Produccion AV",  level: 70 },
      { name: "Gestion de Eventos",          level: 80 },
    ],
  },
];

// tags de areas de interes que aparecen como chips abajo
const tags = [
  "Ambisonics", "HOA", "HRTF", "Binaural", "VR Audio",
  "Metamateriales Acusticos", "Diseno Sonoro", "Bandas Sinfonicas",
  "Educacion Musical", "Sonido en Vivo", "Acustica Espacial",
  "Motor de Juego", "Simscape", "Signal Flow",
];

export default function Skills() {
  return (
    <section id="habilidades" className="section skills">
      <div className="container">
        <p className="section-label">Habilidades</p>
        <h2 className="section-title">Stack tecnico.</h2>

        {/* grilla de categorias */}
        <div className="skills-grid">
          {categories.map((c) => (
            <div key={c.cat} className="skill-cat">
              <h3 className="skill-cat-title">{c.cat}</h3>

              {/* barras de cada habilidad */}
              <div className="skill-bars">
                {c.items.map((s) => (
                  <div key={s.name} className="skill-row">
                    <div className="skill-meta">
                      <span className="skill-name">{s.name}</span>
                      <span className="skill-pct">{s.level}%</span>
                    </div>
                    {/* la variable --w le dice a la barra hasta donde crecer */}
                    <div className="skill-track">
                      <div className="skill-fill" style={{ "--w": `${s.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* tags de areas de interes */}
        <div className="tags-section">
          <p className="section-label" style={{ marginBottom: "16px" }}>Areas de interes</p>
          <div className="tags">
            {tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}