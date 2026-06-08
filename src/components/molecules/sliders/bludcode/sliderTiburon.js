import React, { Component } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import '../../../../styles/components/sliderTiburon.scss';
import puntaBallena from '../../../../images/CasaPuebloPuntaBallena.jpg';
import puertoPunta from '../../../../images/puertoPunta2.jpg';
import puntaDelEste from '../../../../images/puntaDelEste.jpg';

/**
 *
 * * */
class SliderTiburon extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const prepareHomeServices = function () {
      const e = $('.section-home-services .main-services');
      window.innerWidth > 991 ? e.hasClass('owl-carousel') && (e.trigger('destroy.owl.carousel'), e.removeClass('owl-carousel')) : e.addClass('owl-carousel').owlCarousel({
        items: 1,
        loop: !0,
        touchDrag: !0,
        mouseDrag: !1,
        margin: 20
      });
    };

    const prepareHomeNetwork = function () {
      const e = $('.section-global-network .network-grid');
      window.innerWidth > 991 ? e.hasClass('owl-carousel') && (e.trigger('destroy.owl.carousel'), e.removeClass('owl-carousel'), e.find('[data-trigger-class]').addClass('double')) : (e.find('[data-trigger-class]').removeClass('double'), e.addClass('owl-carousel').owlCarousel({
        items: 1,
        loop: !0,
        touchDrag: !0,
        mouseDrag: !1,
        margin: 20
      }));
    };

    if ($('.section-home-hero').length > 0) {
      const e = $('.home-carousel').owlCarousel({
        items: 1,
        loop: !0,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        slidesToShow: 1,
        touchDrag: !1,
        mouseDrag: !1,
        checkVisibility: false,
        onInitialized() {
          const e = $('.home-carousel').find('.owl-item:not(.cloned)');
          e.length === 1 && $('.home-carousel').find('.carousel-slide').addClass('no-arrow');
        }
      });
      $('.home-carousel .carousel-left').on('click', () => {
        e.trigger('prev.owl.carousel');
      });
      $('.home-carousel .carousel-right').on('click', () => {
        e.trigger('next.owl.carousel');
      });
      $('.home-carousel .video').each((e, t) => {
        $(t).parent().hasClass('active') && $(t).find('video').get(0).play();
        $(t).find('.carousel-left')[0].addEventListener('click', () => {
          $(t).find('video').get(0).muted = !0, $(t).find('.carousel-play-pause').removeClass('playing');
        });
        $(t).find('.carousel-right')[0].addEventListener('click', () => {
          $(t).find('video').get(0).muted = !0, $(t).find('.carousel-play-pause').removeClass('playing');
        });
      });

      prepareHomeServices();
      prepareHomeNetwork();
    }
  }

  render() {
    const styleCarousel1 = { backgroundImage: `url(${puntaBallena})` };
    const styleCarousel2 = { backgroundImage: `url(${puertoPunta})` };
    const styleCarousel3 = { backgroundImage: `url(${puntaDelEste})` };

    return (
      <div className="home-carousel-wrap wow fadeInUpSmall" data-wow-offset="200">
        <div className="home-carousel owl-carousel">
          <div className="carousel-slide image" style={styleCarousel1}>
            <div className="carousel-left" />
            <div className="carousel-right" />
          </div>
          <div className="carousel-slide image" style={styleCarousel2}>
            <div className="carousel-left" />
            <div className="carousel-right" />
          </div>
          <div className="carousel-slide image" style={styleCarousel3}>
            <div className="carousel-left" />
            <div className="carousel-right" />
          </div>
        </div>
        <div className="search-box">
          <div className="type-dropdown-wrap">
            <div className="type-current dd-trigger"><span>For sale</span></div>
            <div className="type-dropdown">
              <div className="type current" data-type="sell">For sale</div>
              <div className="type" data-type="rent">For rent</div>
              <div className="type" data-type="serviced">Short lets</div>
              <div className="type" data-type="developments">Developments</div>
            </div>
          </div>

          <div className="search-input-wrap">
            <input type="text" placeholder="Enter a City" />
            <div className="search-dropdown" data-none="No locations found" />
          </div>

          <div className="button black submit-search" data-url="/search/">Search</div>
        </div>
      </div>
    );
  }
}

export default SliderTiburon;

