import React, { Component } from 'react';
import { Stars } from 'bludcode-landing-ui';
import imgMatias from '../../../../assets/team/matias-damonte.jpeg';
import imgAlejandro from '../../../../assets/team/alejandro-maidana.jpeg';
import imgAndy from '../../../../assets/team/andy-barreiro.jpeg';
import imgGabriel from '../../../../assets/team/gabriel-rodriguez.jpeg';

// import fabi1 from '../../../../images/fabi1.jpeg';
// import fabi2 from '../../../../images/fabi2.jpeg';
// import fabi3 from '../../../../images/fabi3.jpeg';
// import susan1 from '../../../../images/susan1.jpeg';

const matyStyle = { backgroundImage: `url(${imgMatias})` };
const aleStyle = { backgroundImage: `url(${imgAlejandro})` };
const andyStyle = { backgroundImage: `url(${imgAndy})` };
const gabyStyle = { backgroundImage: `url(${imgGabriel})` };

class InternationalService extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const e = $('.section-home-services .container');
    if (window.innerWidth > 991) {
      console.log('aaaaaaaaaaaaa');
      e.hasClass('owl-carousel');
      e.trigger('destroy.owl.carousel');
      e.removeClass('owl-carousel');
      e.find('[data-trigger-class]').addClass('double');
    } else {
      console.log('bbbbbbbbbbbbbb');
      e.find('[data-trigger-class]').removeClass('double');
      e.addClass('owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        margin: 10
      });
    }
  }

  render() {
    const { id } = this.props;
    const hsContainer = { height: '200%' };

    return (
      <section id={id} className="homeSlide section-home-services team-white">
        <div className="container wow fadeInUpSmall" data-wow-offset="200">
          <div className="seperator"><span>Team</span></div>
          <div className="main-services">
            <a href="#" className="item service-item">
              <div className="image-wrap"><div className="image" style={andyStyle} /></div>
              <div className="content">
                <Stars rating="5" />

                <h5>🇺🇾Andy</h5>
                <p>Web Development - Systems Engineering Student</p>
                <p>Specialized in web development, data science, cripto currencies and computational intelligence</p>
              </div>
            </a>
            <a href="#" className="item service-item">
              <div className="image-wrap"><div className="image" style={gabyStyle} /></div>
              <div className="content">
                <Stars rating="5" />

                <h5>🇺🇾Mario</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, rhoncus erat taciti placerat nullam at. Felis tellus ad fames neque, turpis id ridiculus.</p>
                <p></p>
              </div>
            </a>
            <a href="#" className="item service-item">
              <div className="image-wrap"><div className="image" style={matyStyle} /></div>
              <div className="content">
                <Stars rating="5" />

                <h5>🇺🇾Matías</h5>
                <p>Senior Software Engineer - Specialized in web development, Ecommerces and Single Page Applications </p>
                <p>I'm passionate about new technologies so I love to learn continuously.
                    About my hobbies, I practice sports and carry on a healthy lifestyle.
                </p>
              </div>
            </a>
            <a href="#" className="item service-item">
              <div className="image-wrap"><div className="image" style={aleStyle} /></div>
              <div className="content">
                <Stars rating="5" />
                <h5>🇺🇾Alejandro</h5>
                <p>Graphic designer and System Analyst</p>
                <p>Passionate for the technologies and graphic design</p>
              </div>
            </a>

          </div>
        </div>
      </section>
    );
  }
}

export default InternationalService;
