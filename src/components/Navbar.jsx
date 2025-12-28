import React, { useState } from "react";
import "./Navbar.css";
import icono from "../assets/icono.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <img src={icono} alt="Leidy Animaciones Logo" />
            <span className="navbar-brand">Leidy Animaciones</span>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            <a href="#inicio" className="navbar-link">
              Inicio
            </a>
            <a href="#sobre-nosotros" className="navbar-link">
              Sobre Nosotros
            </a>
            <a href="#galeria" className="navbar-link">
              Galería
            </a>
            <a href="#servicios" className="navbar-link">
              Servicios
            </a>
            <a href="https://wa.me/573242286120" className="navbar-cta">
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="navbar-toggle">
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile ${isMenuOpen ? "open" : ""}`}>
        <div className="navbar-mobile-content">
          <a
            href="#inicio"
            className="navbar-mobile-link"
            onClick={() => setIsMenuOpen(false)}>
            Inicio
          </a>
          <a
            href="#sobre-nosotros"
            className="navbar-mobile-link"
            onClick={() => setIsMenuOpen(false)}>
            Sobre Nosotros
          </a>
          <a
            href="#galeria"
            className="navbar-mobile-link"
            onClick={() => setIsMenuOpen(false)}>
            Galería
          </a>
          <a
            href="#servicios"
            className="navbar-mobile-link"
            onClick={() => setIsMenuOpen(false)}>
            Servicios
          </a>
          <a
            href="#contacto"
            className="navbar-mobile-cta"
            onClick={() => setIsMenuOpen(false)}>
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
