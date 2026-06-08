/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import $ from 'jquery';
import imagesLoaded from '../../js/imagesloaded.js';
import '../../styles/pages/parallaxScroll.scss';

import Header from '../organisms/headers/shared/Header';

import IntroSection from '../organisms/sections/shared/intro';
import HomeSection from '../organisms/sections/shared/home';
import AboutUsSection from '../organisms/sections/shared/aboutUs';
import WhySection from '../organisms/sections/shared/why';
import HowSection from '../organisms/sections/shared/how';
import WhatSection from '../organisms/sections/shared/what';
import ContactSection from '../organisms/sections/shared/contact';
import ClientsSection from '../organisms/sections/shared/clients';
import daLogo from '../../assets/logo.png';
import '../../styles/pages/parallaxScroll.scss';

const imgStyle = { display: 'none' };

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
    const $scrollSize = ($slideHeight / 7) * 0.85;
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

  render() {
    return (
      <Container className="home-page">
        <Header />
        <main>
          <IntroSection />
          <HomeSection />
          <AboutUsSection />
          <WhySection />
          <HowSection />
          <WhatSection />
          <ContactSection />
          <ClientsSection />
          <Row className="center-items">
            <Col>
              <img src={daLogo} alt="Dueño Alquila Logo" className="duenoalquila-logo" style={imgStyle} />
            </Col>
          </Row>
        </main>
      </Container>
    );
  }
}

export default HomePage;
