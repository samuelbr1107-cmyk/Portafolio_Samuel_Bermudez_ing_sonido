import { useState } from "react";
import "./Contact.css";

// array con todos los datos de contacto
// href null significa que no es un link clickeable
const links = [
  { label: "Email personal",      value: "samuel.br1107@gmail.com",             href: "mailto:samuel.br1107@gmail.com" },
  { label: "Email institucional", value: "samuel.bermudez212@tau.usbmed.edu.co", href: "mailto:samuel.bermudez212@tau.usbmed.edu.co" },
  { label: "Telefono",            value: "+57 302 850 7534",                     href: "tel:+573028507534" },
  { label: "Instagram",           value: "@samuel.b.r7",                         href: "https://www.instagram.com/samuel.b.r7/" },
  { label: "Ciudad",              value: "Itagui, Medellin · Colombia",          href: null },
];

export default function Contact() {
  // estado del formulario con los tres campos
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // estado para mostrar el mensaje de enviado
  const [sent, setSent] = useState(false);

  // actualiza el campo que cambio sin tocar los otros
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault(); // evita que la pagina recargue
    console.log("Form data:", form); // aca conectas formspree o emailjs
    setSent(true); // muestra el mensaje de enviado
    setTimeout(() => setSent(false), 4000); // despues de 4 segundos vuelve al normal
    setForm({ name: "", email: "", message: "" }); // limpia el formulario
  };

  return (
    <section id="contacto" className="section contact">
      <div className="container contact-grid">

        {/* columna izquierda: titulo, descripcion y lista de contactos */}
        <div>
          <p className="section-label">Contacto</p>
          <h2 className="section-title">Hablemos.</h2>
          <p className="contact-sub">
            Abierto a colaboraciones en proyectos de diseno sonoro,
            produccion musical y multimedia, sonido en vivo y grandes formatos.
          </p>

          {/* recorremos el array de links y pintamos cada uno */}
          <ul className="contact-links">
            {links.map((l) => (
              <li key={l.label} className="contact-link-row">
                <span className="cl-label">{l.label}</span>
                {/* si tiene href lo ponemos como link, si no como texto plano */}
                {l.href
                  ? <a href={l.href} className="cl-value" target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{l.value}</a>
                  : <span className="cl-value cl-plain">{l.value}</span>
                }
              </li>
            ))}
          </ul>
        </div>

        {/* columna derecha: formulario de contacto */}
        <form className="contact-form" onSubmit={submit}>

          {/* campo nombre */}
          <div className="field">
            <label htmlFor="name" className="field-label">Nombre</label>
            <input id="name" name="name" type="text" className="field-input"
              placeholder="Tu nombre" value={form.name} onChange={handle} required />
          </div>

          {/* campo correo */}
          <div className="field">
            <label htmlFor="email" className="field-label">Correo electronico</label>
            <input id="email" name="email" type="email" className="field-input"
              placeholder="tu@correo.com" value={form.email} onChange={handle} required />
          </div>

          {/* campo mensaje, mas alto que los inputs normales */}
          <div className="field">
            <label htmlFor="message" className="field-label">Mensaje</label>
            <textarea id="message" name="message" className="field-input field-textarea"
              placeholder="Cuentame sobre tu proyecto" rows={5}
              value={form.message} onChange={handle} required />
          </div>

          {/* boton que cambia de texto cuando se envia */}
          <button type="submit" className={`btn btn--primary send-btn ${sent ? "sent" : ""}`}>
            {sent ? "// Mensaje enviado" : "Enviar mensaje"}
          </button>

        </form>
      </div>
    </section>
  );
}