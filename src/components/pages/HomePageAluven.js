/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import $ from 'jquery';
import imagesLoaded from 'imagesloaded';
import '../../styles/pages/parallaxScroll.scss';
import '../../styles/pages/home-page-tiburon.scss';
import '../../styles/pages/home-page-aluven.scss';

import HeaderAluven from '../organisms/headers/shared/HeaderAluven';
import MenuAluven from '../organisms/sections/shared/menuAluven';
import HomeAluven from '../organisms/sections/shared/homeAluven';
import InternationalService from '../organisms/sections/shared/internationalServicesAluven';
import Ceo from '../organisms/sections/shared/ceo';
/* import GlobalNetwork from '../organisms/sections/globalNetwork'; */
import ContactAluven from '../organisms/sections/shared/contactAluven';

// eslint-disable-next-line react/prefer-stateless-function
class HomePageAluven extends Component {
  constructor(props) {
    super(props);
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
    let lastScrollTop = 0;
    let delta = 5;
    let navbarHeight = $('.navbar').outerHeight();
    console.log('1 - hasScrolled:');
    let st = $(this).scrollTop();
    console.log('2 - st: ', st);

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

    lastScrollTop = st;
  }

  render() {
    return (
      <Container className="home-page home-page-aluven">
        <HeaderAluven />
        <MenuAluven />
        <main>
          <HomeAluven />
          <InternationalService />
          <Ceo />
          {/* <GlobalNetwork /> */}
          <ContactAluven />
        </main>
      </Container>
    );
  }
}

export default HomePageAluven;
