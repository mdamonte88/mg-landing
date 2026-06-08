import React from 'react';
import { CeoMG as CeoMGBase } from 'bludcode-landing-ui';

const SeoMG = ({ videoSrc, posterSrc, onCanPlay }) => (
  <CeoMGBase
    id="seo"
    className="mg-seo"
    ariaLabel="Video institucional de MG"
    videoSrc={videoSrc}
    posterSrc={posterSrc}
    onCanPlay={onCanPlay}
    mediaClassName="mg-seo-media"
    content={(
      <div className="mg-seo-copy">
        <p className="mg-overline">Gestion integral de obra</p>
        <h2>Planificacion tecnica, ejecucion y control en cada etapa</h2>
        <p>
          Coordinamos arquitectura, ingenieria y construccion para que el
          proyecto avance con trazabilidad, calidad y tiempos definidos.
        </p>
        <a href="#contacto" className="mg-button mg-button-primary">Hablar con un especialista</a>
      </div>
    )}
  />
);

export default SeoMG;
