// SobreNosotros.jsx
import React from "react";
import "./SobreNosotros.css";
import icono from "../assets/icono.webp";

const SobreNosotros = () => {
  return (
    <section id="sobre-nosotros" className="sobre-nosotros">
      <div className="sobre-nosotros-container">
        {/* Título Principal */}
        <div className="sobre-nosotros-header">
          <h2 className="sobre-nosotros-title">¿Quiénes Somos?</h2>
          <div className="title-decoration">
            <span className="star">⭐</span>
            <span className="star">🎈</span>
            <span className="star">⭐</span>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="sobre-nosotros-content">
          {/* Imagen o Video */}
          <div className="sobre-nosotros-image">
            <div className="image-placeholder">
              <img src={icono} alt="Leidy Animaciones en acción" />
              <div className="image-overlay">
                <span className="emoji">🎉</span>
              </div>
            </div>
          </div>

          {/* Texto Descriptivo */}
          <div className="sobre-nosotros-text">
            <h3 className="subtitle">
              ¡Creamos Momentos Mágicos e Inolvidables! ✨
            </h3>
            <p className="description">
              En <strong>Leidy Animaciones</strong>, nos especializamos en hacer
              de cada cumpleaños y evento infantil una experiencia única llena
              de alegría, diversión y magia.
            </p>
            <p className="description">
              Con años de experiencia en el mundo de la animación infantil,
              nuestro equipo de animadores profesionales está comprometido con
              crear sonrisas y momentos que permanecerán en los corazones de los
              niños y sus familias para siempre.
            </p>

            {/* Características */}
            <div className="caracteristicas">
              <div className="caracteristica-item">
                <div className="caracteristica-icon">🎭</div>
                <div className="caracteristica-content">
                  <h4>Animadores Profesionales</h4>
                  <p>
                    Personal capacitado y con experiencia en eventos infantiles
                  </p>
                </div>
              </div>

              <div className="caracteristica-item">
                <div className="caracteristica-icon">🎨</div>
                <div className="caracteristica-content">
                  <h4>Creatividad Sin Límites</h4>
                  <p>Actividades dinámicas adaptadas a cada edad</p>
                </div>
              </div>

              <div className="caracteristica-item">
                <div className="caracteristica-icon">💖</div>
                <div className="caracteristica-content">
                  <h4>Pasión por lo que Hacemos</h4>
                  <p>Amamos crear felicidad en cada evento</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas o Datos Divertidos */}
        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-number">500+</div>
            <div className="stat-label">Eventos Realizados</div>
            <div className="stat-emoji">🎉</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">1000+</div>
            <div className="stat-label">Niños Felices</div>
            <div className="stat-emoji">😄</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">5+</div>
            <div className="stat-label">Años de Experiencia</div>
            <div className="stat-emoji">⭐</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Diversión Garantizada</div>
            <div className="stat-emoji">🎈</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
