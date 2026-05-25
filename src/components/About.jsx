import "./About.css";

// importamos las tres fotos desde la carpeta assets
import fotoPerfil  from "../assets/foto.jpg";
import fotoTrombon from "../assets/trombon.jpg";
import fotoEventos from "../assets/eventos.jpg";

// lista de eventos para el timeline, van en orden cronologico
const timeline = [
  { year: "2014", label: "Trombonista - Banda Sinfonica La Estrella" },
  { year: "2018", label: "Diplomado en Musica con enfasis en Piano · EAFIT" },
  { year: "2020", label: "Cuidador pedagogico Waldorf · Pirna, Alemania" },
  { year: "2021", label: "Tecnico de Audio · NJ Eventos" },
  { year: "2022", label: "Jefe Operativo · Monikub Producciones" },
  { year: "2022", label: "Investigador semillero SIESI · USB Medellin" },
  { year: "2025", label: "Mencion de Honor REDCOLSI + Residencia Artistica Museo Explora" },
];

export default function About() {
  return (
    <section id="sobre-mi" className="section about">
      <div className="container">

        {/* fila superior: texto a la izquierda y foto de perfil a la derecha */}
        <div className="about-top">
          <div className="about-text">
            <p className="section-label">Sobre mi</p>
            <h2 className="section-title">
              Sonido que comunica. <br /> Tecnica que sostiene.
            </h2>
            <p className="about-p">
              Soy Ingeniero de Sonido en formacion (9 semestre, USB Medellin) con perfil
              orientado al diseno sonoro para producciones musicales y multimedia de gran
              formato. Mi trabajo integra fundamento tecnico en acustica, produccion
              multicanal y diseno sonoro con una perspectiva musical construida desde
              mas de una decada como trombonista sinfonico.
            </p>
            <p className="about-p">
              He operado sistemas de audio en eventos en vivo, liderado produccion en
              estudio, e investigado entornos de audio espacializado. Esa combinacion
              — tecnica de sala, estudio y campo — me da una lectura completa del
              sonido en cualquier formato.
            </p>

            {/* numeros destacados: semestre, anos en banda, idioma, certificacion */}
            <div className="about-meta">
              <div className="meta-item">
                <span className="meta-val">9</span>
                <span className="meta-key">Semestre</span>
              </div>
              <div className="meta-item">
                <span className="meta-val">12+</span>
                <span className="meta-key">Anos en banda</span>
              </div>
              <div className="meta-item">
                <span className="meta-val">B2</span>
                <span className="meta-key">Aleman</span>
              </div>
              <div className="meta-item">
                <span className="meta-val">Dante</span>
                <span className="meta-key">Certificado</span>
              </div>
            </div>
          </div>

          {/* foto de perfil que se queda fija al hacer scroll */}
          <div className="about-photo-wrap">
            <img src={fotoPerfil} alt="Samuel Bermudez Rivera" className="about-photo" />
            <div className="photo-label">Samuel Bermudez Rivera</div>
          </div>
        </div>

        {/* galeria inferior: foto trombon, foto eventos, timeline */}
        <div className="about-gallery">

          {/* foto tocando trombon */}
          <div className="gallery-item">
            <img src={fotoTrombon} alt="Samuel tocando trombon - Banda Sinfonica La Estrella" />
            <span className="gallery-caption">Banda Sinfonica La Estrella · Trombon</span>
          </div>

          {/* foto operando audio en evento en vivo */}
          <div className="gallery-item">
            <img src={fotoEventos} alt="Operacion de audio en evento en vivo" />
            <span className="gallery-caption">Sonido en vivo · NJ Eventos</span>
          </div>

          {/* timeline de trayectoria en la tercera columna */}
          <div className="gallery-timeline">
            <p className="section-label" style={{ marginBottom: "14px" }}>Trayectoria</p>
            <div className="timeline">
              {/* recorremos el array y pintamos cada item */}
              {timeline.map((item, i) => (
                <div key={i} className="timeline-item">
                  <span className="tl-year">{item.year}</span>
                  <span className="tl-dot" />
                  <span className="tl-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}