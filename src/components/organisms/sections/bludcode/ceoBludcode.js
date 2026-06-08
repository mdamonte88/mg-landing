import React from 'react';
import { CeoMG as CeoMGBase } from 'bludcode-landing-ui';

const Ceo = () => (
  <CeoMGBase
    id="slide-3"
    className="bludcode-ceo"
    ariaLabel="Mensaje del CEO de Bludcode"
    videoSrc="https://quintessentiallyestates.com/wp-content/uploads/2023/10/Home-Insurance-Section-1.mp4"
    content={(
      <div className="bludcode-ceo-overlay">
        <img src="/logo192.png" alt="Bludcode logo" className="bludcode-ceo-logo" />
        <div className="bludcode-ceo-copy">
          <p className="bludcode-ceo-eyebrow">CEO message</p>
        </div>
      </div>
    )}
  />
);

export default Ceo;
