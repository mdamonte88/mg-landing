import React from 'react';

const sectionStyle = { height: '500px', background: 'linear-gradient(rgb(8, 92, 176), rgba(8, 92, 176, 0.3) 80%)' };
const Ceo = () => (
  <section id="slide-3" className="quote-block wow fadeInUpSmall" data-wow-offset="200" style={sectionStyle}>
    <video autoPlay loop muted>
      <source src="https://player.vimeo.com/external/272587061.hd.mp4?s=bc3cec23355b817d92b5a3e009cf0238ca22355c&profile_id=174" type="video/mp4" />
    </video>

    <div className="quote-carousel owl-carousel">

      <div className="block">
        <div className="texts">
          <h2>“Being part of the Quintessentially group means we understand our client’s needs better than any other real estate agency.”</h2>
          <span className="name">PENNY MOSGROVE</span>
          <span className="duties">CEO - QUINTESSENTIALLY ESTATES</span>
        </div>
      </div>
      <div className="block">
        <div className="texts">
          <h2>“Being nimble as a company and staying in front of the curve is essential – it’s like a game of chess you have to always be thinking 5 moves ahead.”</h2>
          <span className="name">PENNY MOSGROVE</span>
          <span className="duties">CEO - QUINTESSENTIALLY ESTATES</span>
        </div>
      </div>
    </div>
  </section>
);

export default Ceo;

