import React from 'react';
import imagePuerta from '../../../../images/ventana.jpg';
import imageVentana from '../../../../images/ventana.jpg';
import imageVentanal from '../../../../images/ventanal.jpg';
import imageBanderola from '../../../../images/banderola.jpg';

const doorStyle = { backgroundImage: `url('${imagePuerta}` };
const windowStyle = { backgroundImage: `url('${imageVentana}` };
const pictureWindowStyle = { backgroundImage: `url('${imageVentanal}` };
const londonManagedSales = { backgroundImage: `url('${imageBanderola}` };

const InternationalService = () => (
  <section id="slide-2" className="homeSlide section-home-services">
    <div className="container wow fadeInUpSmall" data-wow-offset="200">
      <div className="seperator"><span>Nuestros Productos</span></div>
      <div className="main-services">
        <a href="#" className="service-item">
          <div className="image-wrap"><div className="image" style={doorStyle} /></div>
          <div className="content">
            <h5>Puertas</h5>
            {/* <!-- <p>Trusted consultancy finding you exceptional properties worldwide.</p> --> */}
          </div>
        </a>
        <a href="#" className="service-item">
          <div className="image-wrap"><div className="image" style={windowStyle} /></div>
          <div className="content">
            <h5>Ventanas</h5>
            {/* <!-- <p>Unequalled exposure for your luxury residential property.</p> --> */}
          </div>
        </a>
        <a href="#" className="service-item">
          <div className="image-wrap"><div className="image" style={pictureWindowStyle} /></div>
          <div className="content">
            <h5>Ventanales</h5>
            {/* <!-- <p>Exceptional rental properties locally & across our international network.</p>  --> */}
          </div>
        </a>
        <a href="/international-services/manage/" className="service-item">
          <div className="image-wrap"><div className="image" style={londonManagedSales} /></div>
          <div className="content">
            <h5>Banderolas</h5>
            {/* <!-- <p>Unrivalled property management services on a global scale.</p> --> */}
          </div>
        </a>

      </div>
      <div className="subservices wow fadeInUpSmall" data-wow-offset="200">
        <div className="qoute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </div>
        <div className="sublist">
          <div className="list-item"><a data-case-modal="2110"><span>&#x226B;</span>Subitem 1</a></div>
          <div className="list-item"><a data-case-modal="1263"><span>&#x226B;</span>Subitem 2</a></div>
          <div className="list-item"><a data-case-modal="1257"><span>&#x226B;</span>Subitem 3</a></div>
          <div className="list-item"><a data-case-modal="1260"><span>&#x226B;</span>Subitem 4</a></div>
          <div className="list-item"><a data-case-modal="1259"><span>&#x226B;</span>Subitem 5</a></div>
          <div className="list-item"><a data-case-modal="1262"><span>&#x226B;</span>Subitem 6</a></div>
        </div>
      </div>
    </div>
  </section>
);

export default InternationalService;

