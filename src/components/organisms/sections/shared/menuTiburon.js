import React, { Component } from 'react';
import '../../../../styles/components/menuTiburon.scss';
import imgPuertoPensinsula from '../../../../images/tiburon/puertoPeninsula.jpg';
import imgPuntaDedos from '../../../../images/tiburon/puntaDedos.jpg';
import imgPuntaBallena from '../../../../images/tiburon/puntaBallena.jpg';
import imgPlayaMansa from '../../../../images/tiburon/playaMansa.jpg';
import imgPuertoPunta from '../../../../images/tiburon/puertoPunta.jpg';
import imgPlayaBrava from '../../../../images/tiburon/playaBrava.jpg';
import imgManantiales from '../../../../images/tiburon/manantiales.jpg';
import imgIgnacio from '../../../../images/tiburon/joseIgnacio.jpg';

class MenuTiburon extends Component {
  constructor(props) {
    super(props);
    this.onClickContact = this.onClickContact.bind(this);
  }

  componentDidMount() {
    console.log('did mount menu tiburon');
  }

  onClickContact() {
    // return gtag_report_conversion('https://quintessentiallyestates.com/contact-us/');
    console.log('Contact');
  }

  render() {
    const puertoPeninsulaStyle = { backgroundImage: `url(${imgPuertoPensinsula})` };
    const puntaDedosStyle = { backgroundImage: `url(${imgPuntaDedos})` };
    const puntaBallenaStyle = { backgroundImage: `url(${imgPuntaBallena})` } 
    const playaMansaStyle = { backgroundImage: `url(${imgPlayaMansa})` };
    const puertoPuntaStyle = { backgroundImage: `url(${imgPuertoPunta})` };
    const playaBravaStyle = { backgroundImage: `url(${imgPlayaBrava})` };
    const manantialesStyle = { backgroundImage: `url(${imgManantiales})` };
    const IgnacioStyle = { backgroundImage: `url('${imgIgnacio}')` };

    return (
      <div className="menu video_menu">
        <div className="image-wrap image-buy" style={puertoPeninsulaStyle} />
        {/* <!-- <div class="image-wrap image-sell" style="background-image: url('./images/SELL.jpg')"></div>	-->	*/}

        <div className="image-wrap image-rent" style={puntaDedosStyle} />
        {/* <!-- <div class="image-wrap image-manage" style="background-image: url('./images/MANAGE.jpg')"></div> --> */}

        <div className="image-wrap" data-id="39" style={puntaBallenaStyle} />
        <div className="image-wrap" data-id="4754" style={playaMansaStyle} />
        <div className="image-wrap" data-id="40" style={puertoPuntaStyle} />
        <div className="image-wrap" data-id="1152" style={playaBravaStyle} />
        <div className="image-wrap" data-id="1148" style={manantialesStyle} />
        <div className="image-wrap" data-id="2301" style={IgnacioStyle} />
        {/* <!-- <div class="image-wrap" data-id="1151" style="background-image: url('./images/Monaco.jpg')"></div> --> */}
        <div className="container">
          <div className="footer-block">
            <a href="https://quintessentiallyestates.com/international-services/buy/" className="buy-hover"> Comprar</a>
            {/* <!-- <a href="https://quintessentiallyestates.com/international-services/sell/" class="sell-hover"> Vender </a> --> */}
            <a href="https://quintessentiallyestates.com/international-services/rent/" className="rent-hover"> Alquilar</a>
            {/* <!-- <a href="https://quintessentiallyestates.com/international-services/manage/" class="manage-hover">Manage</a> --> */}
          </div>
          <div className="mobsel">
            <a onClick={this.onClickContact} href="https://quintessentiallyestates.com/contact-us/" className="header-contact">Contact</a>
            <div className="sep">|</div>
            <div className="selection-trigger">Selection</div>
          </div>
          <div className="footer-block with-dropdown">
            <div className="button transparent dropdown">Our global offices <span className="arrow" />
            </div>
            <ul className="offices-nav">
              <li id="menu-item-39" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-39"><a id="punta-ballena" href="#" data-id="39">Punta Ballena</a></li>
              <li id="menu-item-4754" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4754"><a id="playa-mansa" href="#" data-id="4754">Playa Mansa</a></li>
              <li id="menu-item-40" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-40"><a id="puerto-peninsula" href="#" data-id="40">Puerto Pen&iacute;nsula</a></li>
              <li id="menu-item-1152" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1152"><a id="playa-brava" href="#" data-id="1152">Playa Brava</a></li>
              <li id="menu-item-1148" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1148"><a id="barra-manantiales" href="#" data-id="1148">Barra de Manantiales</a></li>
              <li id="menu-item-2301" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2301"><a id="jose-ignacio" href="#" data-id="2301">Jos&eacute; Ignacio</a></li>
              {/* <!-- <li id="menu-item-1151" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1151"><a id="playa-ingleses" href="#" data-id="1151">Playa de los Ingleses</a></li> --> */}
            </ul>
          </div>
          <div className="footer-block">
            <ul><li id="menu-item-2309" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-2309"><a href="https://quintessentiallyestates.com/" aria-current="page" data-id="2309">Home</a></li>
              <li id="menu-item-1481" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1481"><a href="https://quintessentiallyestates.com/international-services/" data-id="1481">International Services</a></li>
              <li id="menu-item-1155" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1155"><a href="https://quintessentiallyestates.com/our-mission/" data-id="1155">Our Mission</a></li>
              <li id="menu-item-5459" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5459"><a href="https://quintessentiallyestates.com/affiliations/" data-id="5459">Affiliations</a></li>
              <li id="menu-item-1154" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1154"><a href="https://quintessentiallyestates.com/case-studies/" data-id="1154">Case Studies</a></li>
              <li id="menu-item-1444" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1444"><a href="https://quintessentiallyestates.com/intelligence/" data-id="1444">Intelligence</a></li>
              <li id="menu-item-4108" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4108"><a href="https://quintessentiallyestates.com/press/" data-id="4108">Press</a></li>
            </ul>
          </div>
          <div className="footer-block socials">
            <a href="https://twitter.com/q_estates/" target="_blank" className="social twitter" />
            <a href="https://www.instagram.com/quintessentiallyestates/" target="_blank" className="social instagram" />
          </div>
        </div>
      </div>
    );
  }
}

export default MenuTiburon;
