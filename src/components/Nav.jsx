import "./Nav.css";

// los links del menu con su destino y etiqueta
const links = [
  { href: "#sobre-mi",   label: "Sobre mi" },
  { href: "#habilidades", label: "Skills" },
  { href: "#proyectos",  label: "Proyectos" },
  { href: "#contacto",   label: "Contacto" },
];

// scrolled viene del App.jsx y nos dice si el usuario ya scrolleo
export default function Nav({ scrolled }) {
  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>

      {/* logo que lleva al inicio */}
      <a href="#hero" className="nav-logo">
        <span className="nav-logo-bracket">[</span>
        SBR
        <span className="nav-logo-bracket">]</span>
      </a>

      {/* recorremos el array y pintamos cada link */}
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="nav-link">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  );
}