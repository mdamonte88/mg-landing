import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';

const sectionStyle = { background: 'linear-gradient(rgb(8, 92, 176), rgba(8, 92, 176, 0.3) 80%)' };
const Ceo = () => (
  <section id="slide-3" className="quote-block wow fadeInUpSmall" data-wow-offset="200" style={sectionStyle}>
    <video autoPlay loop muted>
      <source src="https://quintessentiallyestates.com/wp-content/uploads/2023/10/Home-Insurance-Section-1.mp4" type="video/mp4" />
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

export default Ceo;

