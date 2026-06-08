import React from 'react';
import { CeoMG as CeoMGBase } from 'bludcode-landing-ui';

const CeoMG = ({ videoSrc, posterSrc, onCanPlay, mediaClassName }) => (
  <CeoMGBase
    videoSrc={videoSrc}
    posterSrc={posterSrc}
    onCanPlay={onCanPlay}
    mediaClassName={mediaClassName}
    content={(
      <div className="mg-ceo-overlay">
        <h2>
          "En M&G Arquitectura e Ingenieria convertimos cada necesidad tecnica en
          un plan ejecutable, con control de obra, calidad y resultados medibles."
        </h2>
        <span className="mg-ceo-name">Juan Pablo Gretter</span>
        <span className="mg-ceo-role">Direccion - M&amp;G</span>
      </div>
    )}
  />
);

export default CeoMG;
