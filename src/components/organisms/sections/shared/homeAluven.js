import React from 'react';
import SliderAluven from '../../../molecules/sliders/shared/sliderAluven';
import logoAluvenFull from '../../../../images/logoAluvenFull.png';

const HomeAluven = () => (
  <section id="slide-1" className="homeSlide contentbox section-home-hero">
    <SliderAluven />
    <div className="container" data-wow-offset="200">
      <h2>SOBRE NOSOTROS</h2>
      <img src={logoAluvenFull} />
      <h3>Somos una empresa dedicada a la carpintería en aluminio, con mas de 17 años de trabajo en construcción tradicional y moderna.
      Contamos con una vasta experiencia en soluciones en aberturas y cerramientos en general ,apuntando siempre a la mejor calidad
        y excelencia de los mismos.
      </h3>
      <br /> <br />

      <h6>MISIÓN</h6>
      <h3>Satisfacer la demanda de la industria de la construcción atreves de la producción y comercialización de los distintos productos en el aluminio y cristal
          siguiendo altos estándares de calidad ,brindar garantía y confiabilidad a nuestros clientes ,impulsar el desarrollo del país y su gente apuntando
          a la capacitación y profesionalismo de nuestro personal.
      </h3>
      <br /> <br />

      <h6>VISIÓN</h6>
      <h3>Ser lideres en el mercado y diferentes en soluciones innovadoras con aluminio y cristal , destinadas a pequeños y grandes proyectos de construcción
          , ser reconocidos por nuestra calidad humana y profesional estar presentes en todo el territorio nacional ,,
          ofreciendo productos de la mas altas calidad para satisfacer a nuestro cliente
      </h3>
    </div>
  </section>
);

export default HomeAluven;
