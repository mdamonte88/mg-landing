import React from 'react';

const buyStyle = { backgroundImage: `url('https://quintessentiallyestates.com/wp-content/uploads/2018/07/Buy.jpg')` };
const sellStyle = { backgroundImage: `url('https://quintessentiallyestates.com/wp-content/uploads/2018/07/Sell.jpg')` };
const rentStyle = { backgroundImage: `url('https://quintessentiallyestates.com/wp-content/uploads/2018/07/Rent-1.jpg')` };
const londonManagedSales = { backgroundImage: `url('https://quintessentiallyestates.com/wp-content/uploads/2018/11/london-managed-sales.jpg')` };

const InternationalService = () => (
  <section id="slide-2" className="homeSlide section-home-services">
    <div className="container wow fadeInUpSmall" data-wow-offset="200">
      <div className="seperator"><span>Title Section 1</span></div>
      <div className="main-services">
        <a href="/international-services/buy/" className="service-item">
          <div className="image-wrap"><div className="image" style={buyStyle} /></div>
          <div className="content">
            <h5>Buy</h5>
            <p>Trusted consultancy finding you exceptional properties worldwide.</p>
          </div>
        </a>
        <a href="/international-services/sell/" className="service-item">
          <div className="image-wrap"><div className="image" style={sellStyle} /></div>
          <div className="content">
            <h5>Sell</h5>
            <p>Unequalled exposure for your luxury residential property.</p>
          </div>
        </a>
        <a href="/international-services/rent/" className="service-item">
          <div className="image-wrap"><div className="image" style={rentStyle} /></div>
          <div className="content">
            <h5>Rent</h5>
            <p>Exceptional rental properties locally & across our international network.</p>
          </div>
        </a>
        <a href="/international-services/manage/" className="service-item">
          <div className="image-wrap"><div className="image" style={londonManagedSales} /></div>
          <div className="content">
            <h5>Manage</h5>
            <p>Unrivalled property management services on a global scale.</p>
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

