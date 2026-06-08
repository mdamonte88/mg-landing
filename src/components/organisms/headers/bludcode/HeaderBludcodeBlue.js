import React, { Component } from 'react';
import '../../../../styles/components/navbarBludcode.scss';
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
    console.log(`GO TO SECTION: ${idSlide}`);
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
      this.showSection(idSlide);
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
    $('.menu-trigger').on('click', function () {
      $(this).toggleClass('active');
      $('.menu').toggleClass('active');
      $('body').toggleClass('fixed');
    });
    this.activeCurrentTab();
  }

  render() {
    const self = this;
    const sytleSocialIcon = {
      paddingLeft: 0
    };

    function handleClick(slideId, e) {
      console.log(`parameter ${slideId}`);
      self.activeSection(slideId);
    }

    return (
      <header>
        <div className="navbar black navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="menu-trigger">
              <span />
            </div>
            <ul className="nav navbar-nav col-xs-12 col-ms-6 col-sm-6 col-md-6 col-lg-6">
              {/* <li id="nav1" className="active"><a className="noSeparator" href="#home" data-toggle="collapse" data-target=".in" onClick={e => handleClick('slide-1', e)} >Home</a></li>  */}
              <li id="nav1"><a className="noSeparator" href="#vision" data-toggle="collapse" data-target=".in" onClick={e => handleClick('slide-2', e)} >Visión</a></li>
              <li id="nav2"><a href="#mision" data-toggle="collapse" data-target=".in" onClick={e => handleClick('slide-3', e)} >Misión</a></li>
              <li id="nav3"><a href="#what" data-toggle="collapse" data-target=".in" onClick={e => handleClick('slide-4', e)} >Funcionalidades</a></li>
              <li id="nav4"><a href="#aboutUs" data-toggle="collapse" data-target=".in" onClick={e => handleClick('slide-5', e)} >Team</a></li>
              <li id="nav5"><a href="#contact" data-toggle="collapse" data-target=".in" onClick={e => handleClick('slide-6', e)} >Clientes</a></li>
            </ul>

            <div className="logoHeader" onClick={e => handleClick('slide-7', e)} />

            <ul className="nav navbar-nav pull-left-xs-12 pull-right">
              <li id="nav7"><a className="noSeparator" href="#clientes" onClick={this.active1} >Contacto</a></li>
              <li id="nav8"><a className="socialIcon" href="#facebook" data-toggle="collapse"> <img src={facebook} alt="" /> </a></li>
              <li id="nav9"><a className="noSeparator socialIcon" style={sytleSocialIcon} href="#twitter" data-toggle="collapse" alt="" > <img src={twitter} /> </a> </li>
            </ul>
          </div>
          {/* <!--[if lt IE 7]>
                    <p className="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
                    <![endif]-->

          <! -- Old Hamburger menu -->
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
          */}

          <div className="navbar-collapse collapse" id="bs-example-navbar-collapse-8" />
          {/* <!--/.navbar-collapse --> */}
        </div>
      </header>

    );
  }
}

export default Header;
