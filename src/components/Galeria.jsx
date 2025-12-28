// Galeria.jsx
import React, { useState } from "react";
import "./Galeria.css";

const Galeria = () => {
  const [filtroActivo, setFiltroActivo] = useState("todos");
  const [imagenAmpliada, setImagenAmpliada] = useState(null);

  // Array de imágenes - reemplaza con tus propias imágenes
  const imagenes = [
    {
      id: 1,
      url: "https://via.placeholder.com/400x300",
      categoria: "cumpleanos",
      titulo: "Cumpleaños Temático",
    },
    {
      id: 2,
      url: "https://via.placeholder.com/400x300",
      categoria: "fiestas",
      titulo: "Fiesta Infantil",
    },
    {
      id: 3,
      url: "https://via.placeholder.com/400x300",
      categoria: "personajes",
      titulo: "Show de Personajes",
    },
    {
      id: 4,
      url: "https://via.placeholder.com/400x300",
      categoria: "cumpleanos",
      titulo: "Decoración Mágica",
    },
    {
      id: 5,
      url: "https://via.placeholder.com/400x300",
      categoria: "juegos",
      titulo: "Juegos Dinámicos",
    },
    {
      id: 6,
      url: "https://via.placeholder.com/400x300",
      categoria: "personajes",
      titulo: "Superhéroes",
    },
    {
      id: 7,
      url: "https://via.placeholder.com/400x300",
      categoria: "fiestas",
      titulo: "Evento Especial",
    },
    {
      id: 8,
      url: "https://via.placeholder.com/400x300",
      categoria: "juegos",
      titulo: "Inflables Gigantes",
    },
    {
      id: 9,
      url: "https://via.placeholder.com/400x300",
      categoria: "cumpleanos",
      titulo: "Pastel y Sorpresas",
    },
  ];

  const categorias = [
    { id: "todos", nombre: "Todos", emoji: "🎨" },
    { id: "cumpleanos", nombre: "Cumpleaños", emoji: "🎂" },
    { id: "fiestas", nombre: "Fiestas", emoji: "🎊" },
    { id: "personajes", nombre: "Personajes", emoji: "🦸" },
    { id: "juegos", nombre: "Juegos", emoji: "🎮" },
  ];

  const imagenesFiltradas =
    filtroActivo === "todos"
      ? imagenes
      : imagenes.filter((img) => img.categoria === filtroActivo);

  return (
    <section id="galeria" className="galeria">
      <div className="galeria-container">
        {/* Header */}
        <div className="galeria-header">
          <h2 className="galeria-title">Nuestra Galería</h2>
          <p className="galeria-subtitle">
            ¡Descubre momentos increíbles de diversión y alegría! 🎉
          </p>
          <div className="title-decoration">
            <span className="decoration-star">⭐</span>
            <span className="decoration-balloon">🎈</span>
            <span className="decoration-star">⭐</span>
          </div>
        </div>

        {/* Filtros */}
        <div className="galeria-filtros">
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              className={`filtro-btn ${
                filtroActivo === categoria.id ? "activo" : ""
              }`}
              onClick={() => setFiltroActivo(categoria.id)}>
              <span className="filtro-emoji">{categoria.emoji}</span>
              <span className="filtro-nombre">{categoria.nombre}</span>
            </button>
          ))}
        </div>

        {/* Grid de Imágenes */}
        <div className="galeria-grid">
          {imagenesFiltradas.map((imagen, index) => (
            <div
              key={imagen.id}
              className="galeria-item"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setImagenAmpliada(imagen)}>
              <div className="imagen-wrapper">
                <img src={imagen.url} alt={imagen.titulo} />
                <div className="imagen-overlay">
                  <div className="overlay-content">
                    <h3 className="imagen-titulo">{imagen.titulo}</h3>
                    <div className="zoom-icon">🔍</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Imagen Ampliada */}
        {imagenAmpliada && (
          <div
            className="modal-overlay"
            onClick={() => setImagenAmpliada(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={() => setImagenAmpliada(null)}>
                ✕
              </button>
              <img src={imagenAmpliada.url} alt={imagenAmpliada.titulo} />
              <h3 className="modal-titulo">{imagenAmpliada.titulo}</h3>
            </div>
          </div>
        )}

        {/* CTA Final */}
        <div className="galeria-cta">
          <div className="cta-content">
            <h3 className="cta-titulo">
              ¿Listo para crear recuerdos increíbles?
            </h3>
            <p className="cta-texto">
              ¡Contáctanos y hagamos de tu evento algo inolvidable!
            </p>
            <a href="https://wa.me/573242286120" className="cta-btn">
              Reserva Ahora 🎉
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
