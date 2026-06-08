import React from 'react';

const HeroMG = ({ videoSrc, posterSrc, onCanPlay }) => (
  <section id="inicio" className="mg-hero" aria-label="Presentacion M&G Arquitectura e Ingenieria">
    <div className="mg-hero-copy">
      <p className="mg-overline">Diseno - Proyectos - Construccion</p>
      <h1>MG Arquitectura e Ingenieria</h1>
      <p className="mg-lead">
        Soluciones integrales en arquitectura, construccion, servicios
        tecnicos y mantenimiento corporativo.
      </p>
      <div className="mg-actions">
        <a href="#servicios" className="mg-button mg-button-primary">Ver servicios</a>
        <a href="#contacto" className="mg-button">Solicitar propuesta</a>
      </div>
    </div>
    <div className="mg-hero-media">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={posterSrc}
        onCanPlay={onCanPlay}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <img src={posterSrc} alt="Logo MG Arquitectura e Ingenieria" className="mg-logo" />
    </div>
  </section>
);

export default HeroMG;
