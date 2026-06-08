import React, { Component } from 'react';
import imgMansa from '../../../../images/tiburon/playaMansa.jpg';
import imgBallena from '../../../../images/tiburon/puntaBallena.jpg';
import imgPuerto from '../../../../images/tiburon/puertoPunta.jpg';
import imgBrava from '../../../../images/tiburon/playaBrava.jpg';
import imgIgnacio from '../../../../images/tiburon/joseIgnacio.jpg';

class globalNetwork extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const e = $('.section-global-network .network-grid');
    if (window.innerWidth > 991) {
      console.log('aa');
      e.hasClass('owl-carousel');
      e.trigger('destroy.owl.carousel');
      e.removeClass('owl-carousel');
      e.find('[data-trigger-class]').addClass('double');
    } else {
      console.log('bb');
      e.find('[data-trigger-class]').removeClass('double');
      e.addClass('owl-carousel').owlCarousel({
        items: 1,
        loop: !0,
        touchDrag: !0,
        mouseDrag: !1,
        margin: 20
      });
    }
  }

  render() {
    const mansaStyle = { backgroundImage: `url(${imgMansa})` };
    const ballenaStyle = { backgroundImage: `url(${imgBallena})` };
    const puertoStyle = { backgroundImage: `url(${imgPuerto})` };
    const bravaStyle = { backgroundImage: `url(${imgBrava})` };
    const IgnacioStyle = { backgroundImage: `url('${imgIgnacio}')` };

    return (
      <section className="section-global-network">
        <div className="container wow fadeInUpSmall" data-wow-offset="200">
          <div className="seperator"><span>OUR GLOBAL NETWORK</span></div>
          <h3>Delivering a consistent, exceptional service across the globe for our 
          clients is at the epicentre of our business. When you become a client 
          of ours you receive all the benefits of the Quintessentially network 
          and a level of service unmatched by any other real estate company.</h3>
          <div className="network-grid">
            <a href="#london" data-wow-offset="200" className="network-item wow fadeInUpSmall double" data-trigger-class>
              <span className="image-wrap">
                <span className="image" style={ballenaStyle} />
              </span>
              <span className="content">
                <h6>Europe</h6>
                <h5>Punta Ballena</h5>
              </span>
            </a>
            <a href="/germany/" data-wow-offset="200" className="network-item wow fadeInUpSmall " >
              <span className="image-wrap">
                <span className="image" style={mansaStyle} />
              </span>
              <span className="content">
                <h6>Europe</h6>
                <h5>Playa Mansa</h5>
              </span>
            </a>
            <a href="/los-angeles/" data-wow-offset="200" className="network-item wow fadeInUpSmall " >
              <span className="image-wrap"><span className="image" style={puertoStyle} /></span>
              <span className="content">
                <h6>Americas</h6>
                <h5>Puerto Pen&iacute;nsula</h5>
              </span>
            </a>
            <a href="/new-york/" data-wow-offset="200" className="network-item wow fadeInUpSmall " >
              <span className="image-wrap"><span className="image" style={puertoStyle} /></span>
              <span className="content">
                <h6>Americas</h6>
                <h5>Playa Brava</h5>
              </span>
            </a>
            <a href="/hong-kong/" data-wow-offset="200" className="network-item wow fadeInUpSmall " >
              <span className="image-wrap"><span className="image" style={bravaStyle} /></span>
              <span className="content">
                <h6>Asia</h6>
                <h5>Barra de Manantiales</h5>
              </span>
            </a>
            <a href="/monaco/" data-wow-offset="200" className="network-item wow fadeInUpSmall " >
              <span className="image-wrap"><span className="image" style={{ backgroundImage: `url(https://quintessentiallyestates.com/wp-content/uploads/2018/07/Buy.jpg)`}} /></span>
              <span className="content">
                <h6>Europe</h6>
                <h5>José Ignacio</h5>
              </span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default globalNetwork;
