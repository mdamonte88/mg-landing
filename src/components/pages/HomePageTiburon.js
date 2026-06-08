/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import $ from 'jquery';
import imagesLoaded from 'imagesloaded';
import '../../styles/pages/parallaxScroll.scss';
import '../../styles/pages/home-page-tiburon.scss';

import HeaderTiburon from '../organisms/headers/shared/HeaderTiburon';
import MenuTiburon from '../organisms/sections/shared/menuTiburon';
import HomeTiburon from '../organisms/sections/shared/homeTiburon';
import InternationalService from '../organisms/sections/shared/internationalServices';
import Ceo from '../organisms/sections/shared/ceo';
import GlobalNetwork from '../organisms/sections/shared/globalNetwork';

import '../../styles/pages/parallaxScroll.scss';

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.delta = 5;
    this.lastScrollTop = 0;
  }

  adjustWindow() {
    // Init Skrollr
    // Get window size
    const $slide = $('.homeSlide');
    const $slideHeight = $(window).height();
    const $scrollSize = ($slideHeight / 7) * 0.85;
    // Keep minimum height 550
    /*
    if(winH <= 550) {
      winH = 550;
    }
    */

    // Resize our slides
    // $slide.height($slideHeight);

    // Refresh Skrollr after resizing our sections
  }

  /*
  loadImages(){
    const $body = $('body');
    const self = this;
    $body.imagesLoaded( function() {
      setTimeout(function() {
            // Resize sections
            self.adjustWindow();
            // Fade in sections
            $body.removeClass('loading').addClass('loaded');

          //createTweens();
          //scrollMagicoo();
                //scrollMagicooBySection();
      }, 800);
    });
  }
  */

  componentDidMount() {
    const $body = $('body');
    const self = this;
    console.log('Monte');
    imagesLoaded('body', () => {
      setTimeout(() => {
        // Resize sections
        self.adjustWindow();
        // Fade in sections
        $body.removeClass('loading').addClass('loaded');

      // createTweens();
      // scrollMagicoo();
      // scrollMagicooBySection();
      }, 800);
    });

    // Added by me
    this.controlScroll();
  }

  onLoaded() {
    const $body = $('body');
    // Resize sections
    this.adjustWindow();
    // Fade in sections
    $body.removeClass('loading').addClass('loaded');

    // createTweens();
    // scrollMagicoo();
    // scrollMagicooBySection();
  }

  controlScroll() {
    let didScroll;

    $(window).scroll((event) => {
      console.log('0 window.scroll');
      didScroll = true;
    });

    setInterval(() => {
      var self = this;
      console.log('0.1 setInterval');
      if (didScroll) {
        console.log('0.2 didScroll');
        self.hasScrolled();
        didScroll = false;
      }
    }, 250);
  }

  hasScrolled() {
    let delta = this.delta;
    let lastScrollTop = this.lastScrollTop;
    let navbarHeight = $('.navbar').outerHeight();
    let st = $(document).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) {
      console.log('3 - lastScrollTop:', lastScrollTop, 'st', st, 'delta', delta);
      return;
    }

    if (st > lastScrollTop && st > navbarHeight) {
      console.log('4 - lastScrollTop:', lastScrollTop, 'st', st, 'navbarHeight', navbarHeight);
      // Scroll Down
      $('.navbar').removeClass('nav-down').addClass('nav-up');
    } else {
      console.log('5 - ');
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        console.log('6 - lastScrollTop:', lastScrollTop, 'st', st, 'navbarHeight', navbarHeight);
        $('.navbar').removeClass('nav-up').addClass('nav-down');
      }

      if (st < 200) {
        console.log('7 - st:', st);
        $('.navbar').removeClass('nav-up').removeClass('nav-down');
      }
    }

    this.lastScrollTop = st;
  }


  render() {
    return (
      <Container className="home-page home-page-tiburon">
        <HeaderTiburon />
        <MenuTiburon />
        <main>
          <HomeTiburon />
          <InternationalService />
          <Ceo />
          <GlobalNetwork />
        </main>
      </Container>
    );
  }
}

export default HomePage;
