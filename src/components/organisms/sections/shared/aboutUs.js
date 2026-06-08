import React from 'react';

const styleContainerPhotos = { display: 'none' };
const hsContainer = { height: '200%' };

const AboutUs = () => (
  <section id="slide-2" className="homeSlide contentbox">
    <div id="overlay-photo1" className="overlay overlayPhotos">
      <div className="toolbar"><a className="close" href="#"><span>x</span> </a></div>
      <div>
        <div className="photoBig" />
        <div className="namePhoto"> <span>Matias Damonte </span></div>
      </div>
      <div className="wrapper">
            ...
      </div>
    </div>
    <div id="overlay-photo2" className="overlay overlayPhotos">
      <div className="toolbar"><a className="close" href="#"><span>x</span> </a></div>
      <div>
        <div className="photoBig" />
        <div className="namePhoto"> <span>Alejandro Maidana</span></div>
      </div>
      <div className="wrapper">
            ...
      </div>
    </div>
    <div id="overlay-photo3" className="overlay overlayPhotos">
      <div className="toolbar"><a className="close" href="#"><span>x</span> </a></div>
      <div>
        <div className="photoBig" />
        <div className="namePhoto"> <span>nombre3</span></div>
      </div>

      <div className="wrapper">
            TEXTO3
      </div>
    </div>
    <div id="overlay-photo4" className="overlay overlayPhotos">
      <div className="toolbar"><a className="close" href="#"><span>x</span> </a></div>
      <div>
        <div className="photoBig" />
        <div className="namePhoto"> <span>nombre4</span></div>
      </div>

      <div className="wrapper">
            TEXTO4
      </div>
    </div>
    <div id="overlay-photo5" className="overlay overlayPhotos">
      <div className="toolbar"><a className="close" href="#"><span>x</span> </a></div>
      <div>
        <div className="photoBig" />
        <div className="namePhoto"> <span>Oscar Martinez </span></div>
      </div>

      <div className="wrapper">
            Algunos jóvenes años en Bellas Artes, un pasaje por San Pablo
            y su trabajo para una empresa de publicidad;
            hizo que enfocara su carrera a la industria de la comunicación donde se graduó.
            Con 20 años vinculado a la tecnología, habiendo trabajado para empresas
            como IBM, HP, Microsoft; empujó su espíritu emprendedor a la hora de combinar tecnología y comunicación...con la innovación como buena consejera, desde hace 11 años desarrolla su propio camino, conectando grandes compañeros, con el objetivo de primordial de divertirse en el viaje.
      </div>
    </div>
    <div id="overlay-photo6" className="overlay overlayPhotos">
      <div className="toolbar"><a className="close" href="#"><span>x</span> </a></div>
      <div>
        <div className="photoBig" />
        <div className="namePhoto"> <span /></div>
      </div>

      <div className="wrapper" />
    </div>

    <div className="bcg">
      <div id="containerPhotos" style={styleContainerPhotos}>
        <div id="photo1" className="photo" />
        <div id="photo2" className="photo" />
        <div id="photo3" className="photo" />
        <div className="clear clearfix clearFix" />
        <div id="photo1" className="photo" />
        <div id="photo2" className="photo" />
        <div id="photo3" className="photo" />
      </div>
      <div className="div_container">
        <div id="div_curtain2" className="div_curtain col-lg-4">
          <div className="divTable">
            <span id="spn_text1" className="spn_text spanCell">
                            Comunicación <br />
                            integral <br />
                            interactiva. <br />
              <span id="downWhite1" className="downWhite" />
            </span>
          </div>
        </div>

        <div id="div_curtain22" className="div_curtain col-lg-4 div_right">
          <div className="divTable">
            <span id="spn_text2" className="spn_text spn_textRotate spanCell">
              <p><b> Bludcode nace como una empresa de amigos, con gran experiencia en tengnología de la información, desarrollo de software, comunicación y marketing. </b></p>

              <p><b>Fue fundada en el año 2012 en Miami</b>, teniendo en su mayoría clientes del mercado hispano de USA, Centroamérica y el Caribe principalmente. </p>
              <br />
              <span id="collapseWhite1" className="collapseWhite" />
            </span>
          </div>
        </div>
      </div>
      <div id="container2" className="scrollContainer">
        <div className="spacer s0" id="trigger2" />
        <div className="hsContainer" style={hsContainer} />
      </div>
    </div>
  </section>
);

export default AboutUs;
