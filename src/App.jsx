import { useEffect, useState } from "react";

// importamos todos los componentes de cada seccion
import Hero     from "./components/Hero";
import About    from "./components/About";
import Skills   from "./components/Skills";
import Projects from "./components/Projects";
import Contact  from "./components/Contact";
import Nav      from "./components/Nav";
import "./App.css";

export default function App() {
  // estado que detecta si el usuario ya scrolleo mas de 60px
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // actualiza el estado cada vez que el usuario scrollea
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);

    // limpieza al desmontar el componente
    return () => window.removeEventListener("scroll", onScroll);
  }, []); // el array vacio hace que solo corra una vez al montar

  return (
    <div className="app">

      {/* nav recibe scrolled para cambiar su estilo */}
      <Nav scrolled={scrolled} />

      {/* secciones en orden de aparicion */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* footer simple al final */}
      <footer className="footer">
        <span>© 2026 Samuel Bermudez Rivera</span>
        <span className="footer-tag">Ingenieria de Sonido · USB Medellin</span>
      </footer>

    </div>
  );
}