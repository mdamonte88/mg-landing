import React, { Component } from 'react';

class HowSection extends Component {
  constructor(props) {
    super(props);
  }

  leftRigthYellowContent() {
    $('.downWhite').click(function () {
      const containerYellow = $(this).closest('.div_curtain');
      let leftYellow;
      let rigthYellow;
      leftYellow = containerYellow;
      rigthYellow = containerYellow.siblings('.div_right');

      if (!containerYellow.hasClass('div_right')) {
        // Oculto el de la izquierda moviendolo hacia la izquierda
        leftYellow.animate(
          { left: '-50%' },
          {
            duration: 1000
          }
        );
        // Muestro el de la derecha moviendolo hacia la izquierda
        console.debug(rigthYellow);
        rigthYellow.animate(
          { left: '50%' },
          {
            duration: 1000
          }
        );
      }
    });

    $('.collapseWhite').click(function () {
      const containerYellow = $(this).closest('.div_curtain');
      let leftYellow;
      let rigthYellow;
      if (containerYellow.hasClass('div_right')) {
        rigthYellow = containerYellow;
        leftYellow = containerYellow.prev();

        // Oculto el de la derecha moviendolo hacia la derecha
        rigthYellow.animate(
          { left: '100%' },
          {
            duration: 1000
          }
        );
        // Muestro el de la izquierda moviendolo hacia la derecha
        leftYellow.animate(
          { left: '0%' },
          {
            duration: 1000
          }
        );
      }
    });
  }

  componentDidMount() {
    this.leftRigthYellowContent();
  }

  render() {
    const { id } = this.props;
    const hsContainer = { height: '200%' };
    return (
      <section id={id} className="homeSlide contentbox">
        <div className="bcg">
          <div className="hsContainer">
            <div className="div_container">
              <div id="div_curtain4" className="div_curtain col-lg-4">
                <div className="divTable">
                  <span id="spn_text5" className="spn_text spanCell">
                                  Trabajamos <br />
                                en red para <br />
                                cambiar.  <br />
                    <span id="downWhite3" className="downWhite"> </span>
                  </span>
                </div>
              </div>
              <div id="div_curtain42" className="div_curtain col-lg-4 div_right">
                <div className="divTable">
                  <span id="spn_text6" className="spn_text spn_textRotate spanCell">
                    <p><b>Trabajamos en red con empresas y personas que ya son agentes de cambio y quieren cambiar el mundo.</b></p>
                    <p>Que tienen una visión innovadora y que se atrevan a hacer realidad sus sueños,  mediante un modelo de desarrollo dirigido hacia la sustentabilidad, que busca responder a los retos socio ambientales con soluciones que generen crecimiento económico.
                      <b>Nuestras acciones, se desarrollan a partir de la integración del conocimiento científico y sabiduría de las comunidades tradicionales, con el uso sostenible de la biodiversidad.</b>
                    </p>
                    <br />
                    <span id="collapseWhite2" className="collapseWhite"> </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="container4" className="scrollContainer">
            <div className="spacer s0" id="trigger4" />
            <div className="hsContainer" style={hsContainer} />
          </div>
        </div>
      </section>
    );
  }
}

export default HowSection;

