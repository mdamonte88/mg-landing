import React from 'react';

const Home = () => (
  <section id="slide-1" className="homeSlide contentbox">
    <div className="bcg" id="container1">
      <div className="container-fluid containerTitles">
        <div className="col-xs-4 col-ms-4 col-sm-4 col-md-4 col-lg-4"> <span className="titleTv"><img src="img/expand.png" alt="ayer" /> ayer </span> </div>
        <div className="col-xs-4 col-ms-4 col-sm-4 col-md-4 col-lg-4"> <span className="titleTv"><img src="img/expand.png" alt="hoy" /> hoy </span> </div>
        <div className="col-xs-4 col-ms-4 col-sm-4 col-md-4 col-lg-4"> <span className="titleTv"> <img src="img/expand.png" alt="mañana" /> mañana </span> </div>
      </div>
      <div className="container-fluid hsContainer">
        <div className="row table-row">
          <div className="col-xs-4 col-ms-4 col-sm-4 col-md-4 col-lg-4 colTitleTv">
            <span className="textColTv"> La comunicación era rígida,<br /> receptiva, simplemente informativa. </span>
            <img src="img/collapse.png" className="iconoCerrar" alt="" />
          </div>
          <div className="col-xs-4 col-ms-4 col-sm-4 col-md-4 col-lg-4 colTitleTv">
            <span className="textColTv"> Los viejos medios de comunicación cambiaron,<br /> la radio, la TV, la publicidad. </span>
            <img src="img/collapse.png" className="iconoCerrar" alt="" />
          </div>
          <div className="col-xs-4 col-ms-4 col-sm-4 col-md-4 col-lg-4 colTitleTv">
            <span className="textColTv"> Las empresas están en continua evolución.<br /> Por eso necesitan una comunicación<br /> a prueba de futuro.</span>
            <img src="img/collapse.png" className="iconoCerrar" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
