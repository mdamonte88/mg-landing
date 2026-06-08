/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Container } from 'reactstrap';
import $ from 'jquery';
import imagesLoaded from 'imagesloaded';
import '../../styles/pages/parallaxScroll.scss';
import '../../styles/pages/home-page-tiburon.scss';

import HeaderBludcode from '../organisms/headers/bludcode/HeaderBludcodeBlue';
import MenuBludcode from '../organisms/sections/bludcode/menuBludcode';
// import HomeBludcode from '../organisms/sections/home';
import What from '../organisms/sections/shared/what';
import How from '../organisms/sections/shared/how';
import Why from '../organisms/sections/shared/why';
import ISDevelopers from '../organisms/sections/bludcode/internationalServicesBludcode';

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
      <Container className="home-page home-page-bludcode">
        <HeaderBludcode />
        <MenuBludcode />
        <main>
          <ISDevelopers />
        </main>
      </Container>
    );
  }
}

export default HomePage;
