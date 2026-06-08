import React, { Component } from 'react';

class WhatSection extends Component {
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
          <div className="div_container">
            <div id="div_curtain5" className="div_curtain col-lg-4">
              <div className="divTable">
                <span id="spn_text7" className="spn_text spanCell">
                                Ideas<br />
                                integrales.<br />
                                Digital<br />
                                interactiva.<br />
                  <span id="downWhite4" className="downWhite" />
                </span>
              </div>
            </div>
            <div id="div_curtain52" className="div_curtain col-lg-4 div_right">
              <div className="divTable">
                <span id="spn_text8" className="spn_text spn_textRotate spanCell">
                  <p><b>Somos una empresa de ideas integrales, con un fuerte componente en comunicación digital interactiva. </b></p>

                  <p>Desarrollamos  un servicio con capacidad  global que nos permite enfocarnos en la optimización de los recursos de nuestros clientes, basándonos en los avances tecnológicos y  una estructura más ágil y moderna, a la medida de cada proyecto.</p>

                  <p>Combinamos el conocimiento de diferentes aéreas, con una fuerte especialización en consultoría, marketing, comunicación digital interactiva y gestión de empresas, que nos permiten aportar <b>un enfoque único e integrado</b></p>

                  <p>Somos participes de las decisiones de negocios que toman nuestros clientes, y acompañamos su crecimiento <b>desde una nueva perspectiva.</b>
                No solo desarrollamos ideas con tecnologías interactivas, sino que tenemos una visión mucho más profunda, haciendo que las ideas interaccionen entre ellas,  con la gente y las empresas.
                  </p>
                  <br />
                  <span id="collapseWhite1" className="collapseWhite" />
                </span>
              </div>
            </div>
          </div>
          <div id="container5" className="scrollContainer">
            <div className="spacer s0" id="trigger5" />
            <div className="hsContainer" style={hsContainer} />
          </div>
        </div>
      </section>
    );
  }
}

export default WhatSection;

