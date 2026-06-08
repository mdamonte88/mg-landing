import React, { Component } from 'react';
import '../../../../styles/components/navbarEntrenadores.scss';
import $ from 'jquery';
import { autoScrollTo } from '../../../../js/autoScrollTo.js';
import '../../../../scripts/jquery.nicescroll.min.js';
import '../../../../styles/components/navbar.scss';
import '../../../../styles/components/progressBar.scss';
import facebook from '../../../../images/facebook.png';
import twitter from '../../../../images/twitter.png';

class Header extends Component {
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

  /** **************************
		NAVEGACION
  *************************** */
  activeCurrentTab() {
    $('.nav li, .logoHeader').click(function () {
      $('.nav li').removeClass('active');
      if (!$(this).hasClass('logoHeader')) {
        $(this).addClass('active');
      }
    });
  }

  loadNiceScroll() {
    $('html').niceScroll({ autohidemode: true, zindex: 3, enablescrollonselection: false, cursorcolor: 'redr', cursorwidth: 10, background: '#000000' });
    /* $(".scrollContainer").niceScroll({autohidemode:false, zindex:6, enablescrollonselection:false, cursorcolor:"#fff", cursorwidth: 12, background: "#C4C4C4"});
    $(".scrollContainer").getNiceScroll().hide(); */
  }

  componentDidMount() {
    this.activeCurrentTab();
  }

  render() {
    const sytleSocialIcon = {
      paddingLeft: 0
    };

    return (
      <header>
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
            <div className="selection-trigger"><a href="#sobreNosotros" onClick={() => this.activeSection('slide-2')}>Sobre Nosotrosss </a> </div>
            <div className="sep">|</div>
            <div className="selection-trigger"><a href="#nuestrosProductos" onClick={() => this.activeSection('slide-3')}>Nuestros Productos </a> </div>
            <div className="sep">|</div>
            <div className="selection-trigger"><a href="#nuestrosProductos" onClick={() => this.activeSection('slide-4')}>Trabajos Realizados </a> </div>
            <div className="sep">|</div>
            <div className="selection-trigger"><a href="#contacto" onClick={() => this.activeSection('slide-5')}>Contacto </a> </div>
          </div>
        </div>
        {/* <!--[if lt IE 7]>
                    <p className="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
                    <![endif]-->
                 */}
        <div className="navbar black navbar-inverse navbar-fixed-top" role="navigation">
          <div className="navbar-header">
            <button
              type="button" className="navbar-toggle" data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-8"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>

          <div className="navbar-collapse collapse" id="bs-example-navbar-collapse-8">
            <ul className="nav navbar-nav col-xs-12 col-ms-6 col-sm-6 col-md-6 col-lg-6">
              <li id="nav1" className="active"><a className="noSeparator" href="#home" data-toggle="collapse" data-target=".in" onClick={() => this.activeSection('slide-1')} >Home</a></li>
              <li id="nav3"><a href="#porque" data-toggle="collapse" data-target=".in" onClick={() => this.activeSection('slide-3')} >Why</a></li>
              <li id="nav4"><a href="#como" data-toggle="collapse" data-target=".in" onClick={() => this.activeSection('slide-4')} >How</a></li>
              <li id="nav5"><a href="#que" data-toggle="collapse" data-target=".in" onClick={() => this.activeSection('slide-5')} >What</a></li>
              <li id="nav2"><a href="#quienesSomos" data-toggle="collapse" data-target=".in" onClick={() => this.activeSection('slide-2')} >About us</a></li>
              <li id="nav6"><a href="#contacto" data-toggle="collapse" data-target=".in" onClick={() => this.activeSection('slide-6')} >Contact</a></li>
            </ul>

            <div className="logoHeader" onClick={() => this.activeSection('slide-7')} />

            <ul className="nav navbar-nav pull-left-xs-12 pull-right">
              <li id="nav7"><a className="noSeparator" href="#clientes" onClick={this.active1} >Customers</a></li>
              <li id="nav8"><a className="socialIcon" href="#facebook" data-toggle="collapse"> <img src={facebook} alt="" /> </a></li>
              <li id="nav9"><a className="noSeparator socialIcon" style={sytleSocialIcon} href="#twitter" data-toggle="collapse" alt="" > <img src={twitter} /> </a> </li>
            </ul>
          </div>
          {/* <!--/.navbar-collapse --> */}
        </div>
      </header>

    );
  }
}

export default Header;
