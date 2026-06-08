import React, { Component } from 'react';

class WhySection extends Component {
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
                      Innovación, <br />
										  social y <br />
										  sustentable. <br />
                    <span id="downWhite3" className="downWhite"> </span>
                  </span>
                </div>
              </div>
              <div id="div_curtain32" className="div_curtain col-lg-4 div_right">
                <div className="divTable">
                  <span id="spn_text4" className="spn_text spn_textRotate spanCell">
                    <p><b>Tenemos una visión de desarrollar proyectos a partir de la innovación, con un fuerte contenido social y sustentable.</b></p>
                    <p>Creemos que las empresas son una herramienta poderosa para generar igualdad e inclusión social.
											Tenemos la certeza de que el emprendimiento social es una iniciativa que genera impacto, moviliza y permite la construcción de un mundo mejor.
											Prestamos nuestros servicios de una manera no tradicional, apuntando al desarrollo y crecimiento, impulsando una actitud proactiva para la toma de conciencia, la convivencia y la calidad de vida,
                      <b> creando un futuro más sostenible.</b>
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

export default WhySection;

