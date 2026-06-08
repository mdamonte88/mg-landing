import React, { Component } from 'react';
import '../../../../styles/components/navbarEntrenadores.scss';
import logoAluven from '../../../../images/logoAluven.jpeg';
import { autoScrollTo } from '../../../../js/autoScrollTo.js';

class HeaderAluven extends Component {
  constructor(props) {
    super(props);
    this.activeSection = this.activeSection.bind(this);
  }

  activeSection(idSlide) {
    const self = this;
    // LLeva todos los scroll de las secciones al tope salvo en la seccion que esta parado
    // $(".scrollContainer:not(#" + idSlide + " .scrollContainer)").scrollTop(0);
    /* NO TIENEN EFECTO DE GIRO */
    const homeintro = $('#slide-intro');
    if (homeintro.is(':visible')) {
      $('#slide-intro span').animate({
        height: '0%',
        opacity: 0
      }, 650, () => {
        $('#slide-intro span').hide();
      });
      homeintro.animate({
        height: '0%',
        opacity: 0.5
      }, 800, () => {
        homeintro.hide();
        self.loadNiceScroll();
        $('#containerProgress').hide();
        setTimeout(() => {
          self.showSection(idSlide);
        }, 500);
      });
    } else {
      self.showSection(idSlide);
    }
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
        <div id="navbar" className="navbar black">
          <div className="container">
            <div className="menu-trigger">
              <span />
            </div>
            <a href="https://www.aluven.com.uy" className="logo">
              FITNEX
            </a>
            <div className="right">
              {/* <-- <div className="selection-trigger"> <a href="#home" onClick={this.showSection('slide-1')}> Home </a> </div>
              <div className="sep">|</div> --> */}
              <div className="selection-trigger"><a href="#sobreNosotros" onClick={() => this.activeSection('slide-2')}>Sobre Nosotros </a> </div>
              <div className="sep">|</div>
              <div className="selection-trigger"><a href="#nuestrosProductos" onClick={() => this.activeSection('slide-3')}>Nuestros Productos </a> </div>
              <div className="sep">|</div>
              <div className="selection-trigger"><a href="#nuestrosProductos" onClick={() => this.activeSection('slide-4')}>Trabajos Realizados </a> </div>
              <div className="sep">|</div>
              <div className="selection-trigger"><a href="#contacto" onClick={() => this.activeSection('slide-5')}>Contacto </a> </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderAluven;
