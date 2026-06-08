/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import $ from 'jquery';
import imagesLoaded from 'imagesloaded';
import '../../styles/pages/parallaxScroll.scss';
import '../../styles/pages/home-page-bludcode.scss';

import HeaderBludcode from '../organisms/headers/bludcode/HeaderBludcodeBlue';
import MenuBludcode from '../organisms/sections/bludcode/menuBludcode';
import VisionBludcode from '../organisms/sections/bludcode/visionBludcode';
import HomeBludcode from '../organisms/sections/bludcode/homeBludcode';
import What from '../organisms/sections/shared/what';
import How from '../organisms/sections/shared/how';
import Why from '../organisms/sections/shared/why';
import ISDevelopers from '../organisms/sections/bludcode/internationalServicesBludcode';
import SeoBludcode from '../organisms/sections/bludcode/ceoBludcode';
import ContactBludcode from '../organisms/sections/bludcode/contactBludcode';
import FeaturedIn from '../organisms/sections/shared/featuredIn';
import GlobalNetworkBludcode from '../organisms/sections/bludcode/globalNetworkBludcode';

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  adjustWindow() {
    // Init Skrollr
    // Get window size
    const $slide = $('.homeSlide');
    const $slideHeight = $(window).height();
    const $scrollSize = ($slideHeight / 7);
    // Keep minimum height 550
    /*
    if(winH <= 550) {
      winH = 550;
    }
    */

    // Resize our slides
    $slide.height($slideHeight);

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

    const handleScroll = () => {
      console.log('0 window.scroll');
      didScroll = true;
    };

    window.addEventListener('scroll', handleScroll, true);

    setInterval(() => {
      const self = this;
      console.log('0.1 setInterval');
      if (didScroll) {
        console.log('0.2 didScroll');
        self.hasScrolled();
        didScroll = false;
      }
    }, 250);
  }

  hasScrolled() {
    const { delta } = this;
    const { lastScrollTop } = this;
    const navbarHeight = $('.navbar').outerHeight();
    const st = $(document).scrollTop();

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
      <Container className="home-page home-page-bludcode">
        <HeaderBludcode />
        <MenuBludcode />
        <main>
          <HomeBludcode id="slide-1" />
          <VisionBludcode />
          <SeoBludcode />
          <GlobalNetworkBludcode />
          <How id="slide-2" />
          <FeaturedIn />
          <What id="slide-3" />
          <FeaturedIn />
          <Why id="slide-4" />
          <ISDevelopers id="slide-5" />
          <ContactBludcode id="slide-5" />
        </main>
      </Container>
    );
  }
}

export default HomePage;
