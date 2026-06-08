import React, { Component } from 'react';
import '../../../../styles/components/navbarAluven.scss';
import logoAluven from '../../../../images/logoAluven.jpeg';
import { autoScrollTo } from '../../../../js/autoScrollTo.js';

class HeaderAluven extends Component {
    constructor(props) {
      super(props);
    }
    
    showSection(idSlide) {
      let $enableScrollWin = true;
      let $enableScrollSec = false;
      let $numContainer = 0;
  
      if (idSlide == 'slide-1' || idSlide == 'slide-6' || idSlide == 'slide-7') {
        $enableScrollWin = true;
        $enableScrollSec = false;
      } else {
      /* TIENEN EFECTO DE GIRO */
        $enableScrollWin = false;
        $enableScrollSec = true;
        if (idSlide == 'slide-2') {
          $numContainer = 0;
        }
        if (idSlide == 'slide-3') {
          $numContainer = 1;
        }
        if (idSlide == 'slide-4') {
          $numContainer = 2;
        }
        if (idSlide == 'slide-5') {
          $numContainer = 3;
        }
      }
      autoScrollTo(idSlide);
      // $("html").getNiceScroll().hide();
      // $("#" + idSlide + " .scrollContainer").getNiceScroll().show();
    }

    componentDidMount() {
      $('.menu-trigger').on('click', function () {
          $(this).toggleClass('active');
          $('.menu').toggleClass('active');
          $('body').toggleClass('fixed');
      });
    }

    onClickContact() {
    // return gtag_report_conversion('https://www.aluven.com.uy/contact-us/');
        console.log('Contact');
    }

  render() {
    return (
      <header>
        <div id="navbar" className="navbar white">
          <div className="container">
            <div className="menu-trigger">
              <span />
            </div>
            <a href="https://www.aluven.com.uy" className="logo">
              <img src={logoAluven} alt="Tiburon Properties" />
            </a>
            <div className="right">
              {/* <-- <div className="selection-trigger"> <a href="#home" onClick={this.showSection('slide-1')}> Home </a> </div>
              <div className="sep">|</div> --> */}
              <div className="selection-trigger"><a href="#sobreNosotros" onClick={this.showSection('slide-2')}>Sobre Nosotros </a> </div>
              <div className="sep">|</div>
              <div className="selection-trigger"><a href="#nuestrosProductos" onClick={this.showSection('slide-3')}>Nuestros Productos </a> </div>
              <div className="sep">|</div>
              <div className="selection-trigger"><a href="#contacto" onClick={this.showSection('slide-4')}>Contacto </a> </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderAluven;
