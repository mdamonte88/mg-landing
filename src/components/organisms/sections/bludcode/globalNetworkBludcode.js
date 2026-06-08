import React, { Component } from 'react';
import imgMansa from '../../../../assets/ourwork/ecommerce.jpg';
import imgBallena from '../../../../images/tiburon/puntaBallena.jpg';
import imgPuerto from '../../../../images/tiburon/puertoPunta.jpg';
import imgBrava from '../../../../images/tiburon/playaBrava.jpg';
import imgIgnacio from '../../../../images/tiburon/joseIgnacio.jpg';

class globalNetwork extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const e = $('.section-global-network .container');
    if (window.innerWidth > 991) {
      console.log('aaaaaaaaaaaaa');
      e.hasClass('owl-carousel');
      e.trigger('destroy.owl.carousel');
      e.removeClass('owl-carousel');
      e.find('[data-trigger-class]').addClass('double');
    } else {
      console.log('bbbbbbbbbbbbbb');
      e.find('[data-trigger-class]').removeClass('double');
      e.addClass('owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        margin: 20
      });
    }
  }

  render() {
    const mansaStyle = { backgroundImage: `url(${imgMansa})` };
    const ballenaStyle = { backgroundImage: `url(${imgMansa})` };
    const puertoStyle = { backgroundImage: `url(${imgMansa})` };
    const bravaStyle = { backgroundImage: `url(${imgMansa})` };
    const IgnacioStyle = { backgroundImage: `url(${imgMansa})` };

    return (
      <section className="section-global-network">
        <div className="container wow fadeInUpSmall" data-wow-offset="200">
          <div className="seperator"><span>Our Work</span></div>
          <h3>Delivering a consistent, exceptional service across the globe for our
          clients is at the epicentre of our business. When you become a client
          of ours you receive all the benefits of the Quintessentially network
          and a level of service unmatched by any other real estate company.
          </h3>
          <div className="network-grid">
            <a href="#london" data-wow-offset="200" className="item network-item wow fadeInUpSmall double" data-trigger-class>
              <span className="image-wrap">
                <span className="image" style={ballenaStyle} />
              </span>
              <span className="content">
                <h6>Ecommerce</h6>
                <h5>Hacé crecer tu negocio con una tienda virtual en la nube</h5>
              </span>
            </a>
            <a href="#germany" data-wow-offset="200" className="item network-item wow fadeInUpSmall double" >
              <span className="image-wrap">
                <span className="image" style={mansaStyle} />
              </span>
              <span className="content">
                <h6>Landing Page</h6>
                <h5>Tu empresa en internet!</h5>
              </span>
            </a>
            <a href="#los-angeles" data-wow-offset="200" className="item network-item wow fadeInUpSmall " >
              <span className="image-wrap"><span className="image" style={puertoStyle} /></span>
              <span className="content">
                <h6>Web Apps</h6>
                <h5>Crea la Web Apps que necesitas para tu empresa se diferencie de las demas</h5>
              </span>
            </a>
            <a href="#new-york" data-wow-offset="200" className="item network-item wow fadeInUpSmall " >
              <span className="image-wrap"><span className="image" style={IgnacioStyle} /></span>
              <span className="content">
                <h6>Mobile Apps</h6>
                <h5>Mobile Apps</h5>
              </span>
            </a>
            <a href="#hong-kong" data-wow-offset="200" className="item network-item wow fadeInUpSmall " >
              <span className="image-wrap"><span className="image" style={bravaStyle} /></span>
              <span className="content">
                <h6>Netsuite Scripts</h6>
                <h5>Desarrollo y soporte para sitios en Netsuite</h5>
              </span>
            </a>
            <a href="#monaco" data-wow-offset="200" className="item network-item wow fadeInUpSmall " >
              <span className="image-wrap"><span className="image" style={IgnacioStyle} /></span>
              <span className="content">
                <h6>Custom Apps</h6>
                <h5>Desarrollamos aplicaciones a medida</h5>
              </span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default globalNetwork;
