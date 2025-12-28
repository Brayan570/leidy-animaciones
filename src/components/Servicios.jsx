// Servicios.jsx
import React, { useState } from "react";
import "./Servicios.css";

const Servicios = () => {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  const servicios = [
    {
      id: 1,
      titulo: "Animación de Cumpleaños",
      emoji: "🎂",
      descripcionCorta: "Hacemos de tu cumpleaños un día inolvidable",
      descripcionLarga:
        "Incluye animadores profesionales, juegos dinámicos, música, concursos y sorpresas especiales para el cumpleañero. Adaptado a todas las edades.",
      incluye: [
        "2-3 Animadores",
        "Juegos y Dinámicas",
        "Música y Baile",
        "Regalos Sorpresa",
        "Show Especial",
      ],
      precio: "Desde $150.000",
      duracion: "3 horas",
      color: "#ec4899",
    },
    {
      id: 2,
      titulo: "Personajes Animados",
      emoji: "🦸",
      descripcionCorta: "Trae los personajes favoritos a tu fiesta",
      descripcionLarga:
        "Shows protagonizados por superhéroes, princesas, personajes de películas y más. Con vestuarios profesionales y actuaciones memorables.",
      incluye: [
        "Personaje a Elección",
        "Show de 30 minutos",
        "Fotos con el Personaje",
        "Actividades Temáticas",
        "Música del Personaje",
      ],
      precio: "Desde $200.000",
      duracion: "2 horas",
      color: "#a855f7",
    },
    {
      id: 3,
      titulo: "Juegos Inflables",
      emoji: "🎪",
      descripcionCorta: "Diversión gigante para todos los niños",
      descripcionLarga:
        "Castillos inflables, toboganes, piscinas de pelotas y más. Instalación, supervisión y limpieza incluida. Garantía de diversión sin límites.",
      incluye: [
        "Inflable a Elección",
        "Instalación y Retiro",
        "Supervisor",
        "Extensión de 4 horas",
        "Seguro de Accidentes",
      ],
      precio: "Desde $180.000",
      duracion: "4 horas",
      color: "#eab308",
    },
    {
      id: 4,
      titulo: "Decoración Temática",
      emoji: "🎨",
      descripcionCorta: "Ambientes mágicos para tu evento",
      descripcionLarga:
        "Diseño y montaje de decoración personalizada según tu tema favorito. Globos, centros de mesa, telones, arcos y más elementos decorativos.",
      incluye: [
        "Diseño Personalizado",
        "Globos y Arreglos",
        "Mesa Principal",
        "Telón de Fondo",
        "Montaje y Desmontaje",
      ],
      precio: "Desde $120.000",
      duracion: "Todo el evento",
      color: "#10b981",
    },
    {
      id: 5,
      titulo: "Show de Magia",
      emoji: "🎩",
      descripcionCorta: "Magia y asombro para grandes y chicos",
      descripcionLarga:
        "Espectáculo de magia profesional con trucos increíbles, participación del público y momentos de pura sorpresa que dejarán a todos boquiabiertos.",
      incluye: [
        "Mago Profesional",
        "Show de 45 minutos",
        "Trucos Interactivos",
        "Participación de Niños",
        "Regalos Mágicos",
      ],
      precio: "Desde $250.000",
      duracion: "1.5 horas",
      color: "#f59e0b",
    },
    {
      id: 6,
      titulo: "Paquete Completo",
      emoji: "🎁",
      descripcionCorta: "Todo incluido para un evento perfecto",
      descripcionLarga:
        "La experiencia completa: animación, personajes, inflables, decoración y show especial. El paquete más solicitado para fiestas inolvidables.",
      incluye: [
        "Todo lo Anterior",
        "Sonido Profesional",
        "Fotografía",
        "Snacks y Bebidas",
        "Coordinador de Evento",
      ],
      precio: "Desde $500.000",
      duracion: "5 horas",
      color: "#8b5cf6",
    },
  ];

  const paquetesEspeciales = [
    {
      nombre: "Básico",
      precio: "$150k - $250k",
      descripcion: "Perfecto para fiestas pequeñas",
      icon: "🌟",
    },
    {
      nombre: "Premium",
      precio: "$250k - $400k",
      descripcion: "Para eventos medianos",
      icon: "💎",
    },
    {
      nombre: "VIP",
      precio: "$400k+",
      descripcion: "La experiencia completa",
      icon: "👑",
    },
  ];

  return (
    <section id="servicios" className="servicios">
      <div className="servicios-container">
        {/* Header */}
        <div className="servicios-header">
          <h2 className="servicios-title">Nuestros Servicios</h2>
          <p className="servicios-subtitle">
            ¡Elige el servicio perfecto para tu evento especial! ✨
          </p>
          <div className="title-decoration">
            <span className="deco-item">🎉</span>
            <span className="deco-item">🎈</span>
            <span className="deco-item">🎊</span>
          </div>
        </div>

        {/* Grid de Servicios */}
        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <div
              key={servicio.id}
              className="servicio-card"
              style={{
                animationDelay: `${index * 0.1}s`,
                "--card-color": servicio.color,
              }}
              onClick={() => setServicioSeleccionado(servicio)}>
              <div className="card-header">
                <div
                  className="emoji-circle"
                  style={{ background: servicio.color }}>
                  {servicio.emoji}
                </div>
                <h3 className="card-titulo">{servicio.titulo}</h3>
              </div>

              <p className="card-descripcion">{servicio.descripcionCorta}</p>

              <div className="card-info">
                <div className="info-item">
                  <span className="info-icon">⏱️</span>
                  <span className="info-text">{servicio.duracion}</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">💰</span>
                  <span className="info-text">{servicio.precio}</span>
                </div>
              </div>

              <button
                className="card-btn"
                style={{ background: servicio.color }}>
                Ver Detalles
              </button>
            </div>
          ))}
        </div>

        {/* Paquetes Especiales */}
        <div className="paquetes-section">
          <h3 className="paquetes-title">Paquetes Especiales</h3>
          <div className="paquetes-grid">
            {paquetesEspeciales.map((paquete, index) => (
              <div
                key={index}
                className="paquete-card"
                style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="paquete-icon">{paquete.icon}</div>
                <h4 className="paquete-nombre">{paquete.nombre}</h4>
                <p className="paquete-precio">{paquete.precio}</p>
                <p className="paquete-descripcion">{paquete.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner de Contacto */}
        <div className="servicios-cta">
          <div className="cta-content">
            <h3 className="cta-titulo">¿No encuentras lo que buscas?</h3>
            <p className="cta-texto">
              ¡Creamos paquetes personalizados a tu medida!
            </p>
            <a href="#contacto" className="cta-boton">
              Cotiza Ahora 📞
            </a>
          </div>
        </div>
      </div>

      {/* Modal de Detalles */}
      {servicioSeleccionado && (
        <div
          className="modal-overlay"
          onClick={() => setServicioSeleccionado(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setServicioSeleccionado(null)}>
              ✕
            </button>

            <div
              className="modal-header"
              style={{ background: servicioSeleccionado.color }}>
              <div className="modal-emoji">{servicioSeleccionado.emoji}</div>
              <h3 className="modal-titulo">{servicioSeleccionado.titulo}</h3>
            </div>

            <div className="modal-body">
              <p className="modal-descripcion">
                {servicioSeleccionado.descripcionLarga}
              </p>

              <div className="modal-section">
                <h4 className="section-titulo">📋 Incluye:</h4>
                <ul className="incluye-lista">
                  {servicioSeleccionado.incluye.map((item, index) => (
                    <li key={index} className="incluye-item">
                      <span className="check-icon">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-footer">
                <div className="footer-info">
                  <div className="footer-item">
                    <span className="footer-icon">⏱️</span>
                    <span className="footer-label">Duración:</span>
                    <span className="footer-value">
                      {servicioSeleccionado.duracion}
                    </span>
                  </div>
                  <div className="footer-item">
                    <span className="footer-icon">💰</span>
                    <span className="footer-label">Precio:</span>
                    <span className="footer-value">
                      {servicioSeleccionado.precio}
                    </span>
                  </div>
                </div>

                <a
                  href="#contacto"
                  className="modal-cta-btn"
                  style={{ background: servicioSeleccionado.color }}>
                  Reservar Este Servicio
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Servicios;
