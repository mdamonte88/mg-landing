import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

const Ceo = ({
  sectionHeight = '500px',
  style,
  videoSrc = 'https://quintessentiallyestates.com/wp-content/uploads/2023/10/Home-Insurance-Section-1.mp4',
  posterSrc,
  onCanPlay
}) => {
  const resolvedHeight = (style && (style.minHeight || style.height)) || sectionHeight;
  const maxWidth = (style && (style.maxWidth || style.width)) || '1600px';
  const padding = (style && style.padding) || '0';

  return (
    <section
      id="slide-3"
      className="homeSlide quote-block wow fadeInUpSmall mg-hero"
      aria-label="Mensaje del CEO de Bludcode"
      data-wow-offset="200"
      style={{
        maxHeight: resolvedHeight,
        maxWidth,
        padding,
        ...(style || {})
      }}
    >
      <video autoPlay loop muted playsInline preload="auto" poster={posterSrc} onCanPlay={onCanPlay}>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="quote-carousel owl-carousel">
        <OwlCarousel
          items={1}
          className="owl-theme"
          loop
          margin={10}
          nav
        >
          <div className="block">
            <div className="texts">
              <h2>“Being part of the Bludcode group means we understand our client’s needs better than any other Software factory.”</h2>
              <span className="name">Matías Damonte</span>
              <span className="duties">CEO - Bludcode</span>
            </div>
          </div>
          <div className="block">
            <div className="texts">
              <h2>“Being nimble as a company and staying in front of the curve is essential – it’s like a game of chess you have to always be thinking 5 moves ahead.”</h2>
              <span className="name">Matías Damonte</span>
              <span className="duties">CEO - Bludcode</span>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Ceo;
