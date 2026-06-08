import React, { Component } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

/**
 *
 * * */
class SliderDuenoAlquila extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.carousel').carousel({
      interval: 2000
    });
  }

  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://quintessentiallyestates.com/wp-content/uploads/2018/06/111W57-T4-Interior-FINAL-JDS--1920x618.jpg" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://quintessentiallyestates.com/wp-content/uploads/2018/06/111W57-T4-Interior-FINAL-JDS--1920x618.jpg" alt="Second slide" />
            {/* <!--
                        <img class="d-block w-100" src="https://quintessentiallyestates.com/wp-content/uploads/2018/05/iStock-171590884-1620x1080.jpg" alt="Second slide" />
            --> */}
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://quintessentiallyestates.com/wp-content/uploads/2018/06/111W57-T4-Interior-FINAL-JDS--1920x618.jpg" alt="Third slide" />
            {/* <!--
                    <img class="d-block w-100" src="https://quintessentiallyestates.com/wp-content/uploads/2018/06/Tombazis_pool_facade-1918x1080.jpg" alt="Third slide" />
            --> */}
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default SliderDuenoAlquila;

