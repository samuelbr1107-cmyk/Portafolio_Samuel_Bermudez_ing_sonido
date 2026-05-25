import { useEffect, useRef } from "react";
import "./Hero.css";

// componente que dibuja las ondas animadas en el fondo usando canvas
function Waveform() {
  const canvasRef = useRef(null); // referencia al elemento canvas del DOM

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d"); // contexto 2d para dibujar
    let raf; // guardamos el id del requestAnimationFrame para cancelarlo despues
    let t = 0; // contador de tiempo para mover las ondas

    // ajusta el tamano del canvas cuando cambia el tamano de la ventana
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio; // resolucion real
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio); // que no se vea pixelado
    };
    resize();
    window.addEventListener("resize", resize);

    // funcion que dibuja un frame y se llama sola en loop
    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H); // borra el frame anterior

      const LINES = 6; // cuantas ondas dibujamos

      for (let l = 0; l < LINES; l++) {
        const freq  = 0.6 + l * 0.4;          // frecuencia de cada onda
        const amp   = (H * 0.1) * (1 - l * 0.12); // amplitud, las de atras son mas chicas
        const speed = 0.008 + l * 0.002;       // velocidad de cada onda
        const yBase = H / 2 + (l - LINES / 2) * 18; // posicion vertical centrada
        const alpha = 0.07 + (LINES - l) * 0.025;   // opacidad, la de adelante mas visible

        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 229, 176, ${alpha})`; // color verde con la opacidad calculada
        ctx.lineWidth = 1;

        // dibuja la onda punto por punto de izquierda a derecha
        for (let x = 0; x <= W; x += 2) {
          const y =
            yBase +
            Math.sin((x / W) * Math.PI * freq * 4 + t * speed * 60 + l) * amp +
            Math.sin((x / W) * Math.PI * freq * 2 - t * speed * 40) * amp * 0.4; // segunda onda encima para que se vea mas organica
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      t++; // avanza el tiempo
      raf = requestAnimationFrame(draw); // pide el siguiente frame
    };
    draw();

    // limpieza cuando el componente se desmonta
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []); // el array vacio hace que esto corra solo una vez al montar

  return <canvas ref={canvasRef} className="waveform-canvas" />;
}

// componente principal del hero
export default function Hero() {
  return (
    <section id="hero" className="hero">

      {/* fondo animado con ondas */}
      <Waveform />

      {/* contenido principal: nombre, rol, descripcion y botones */}
      <div className="hero-content">
        <p className="hero-tag">// Diseño Sonoro · Produccion Musical · Gran Formato</p>
        <h1 className="hero-name">
          Samuel<br />
          <span className="hero-name-accent">Bermudez</span>
        </h1>
        <p className="hero-role">
          Ingeniero de Sonido &nbsp;·&nbsp; Disenador Sonoro &nbsp;·&nbsp; Productor
        </p>
        <p className="hero-desc">
          Especializado en diseno sonoro para producciones musicales y multimedia
          de gran formato. Desde el sonido en vivo hasta el audio inmersivo,
          construyo experiencias acusticas con fundamento tecnico y vision artistica.
        </p>

        {/* botones de navegacion */}
        <div className="hero-cta">
          <a href="#proyectos" className="btn btn--primary">Ver proyectos</a>
          <a href="#contacto"  className="btn btn--ghost">Contacto</a>
        </div>
      </div>

      {/* barritas decorativas tipo ecualizador abajo a la derecha */}
      <div className="hero-freq">
        {/* array con alturas distintas para que no queden todas iguales */}
        {[40, 65, 30, 80, 55, 70, 45, 90, 35, 60, 75, 50].map((h, i) => (
          <div
            key={i}
            className="freq-bar"
            style={{ height: `${h}%`, animationDelay: `${i * 0.08}s` }} // cada barra arranca la animacion un poco despues
          />
        ))}
      </div>

    </section>
  );
}