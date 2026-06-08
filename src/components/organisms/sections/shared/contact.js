import React from 'react';

const Contact = () => (
  <section id="slide-6" className="homeSlide contentbox">
    <div className="bcg">
      <div className="hsContainer">
        <div className="hsContent">
          <form id="contactForm" method="post" className="contact-form">
            {/* <!--
                <div className="row">
                <div className="control-group">
                    <div className="col-xs-12 col-ms-6 col-sm-6 col-md-6 col-lg-6">
                        <input id = "nombre" name = "nombre" type = "text" className="form-control" placeholder = "Nombre">
<span className="help-block" id="nameMessage"></span>
                    </div>
                    <div className="col-xs-12 col-ms-6 col-sm-6 col-md-6 col-lg-6">
                        <input id = "telefono" name = "telefono" type = "text" className="form-control" placeholder = "Telefono">
<span className="help-block" id="phoneMessage"></span>
                    </div>
                </div>
            </div>
            --> */}
            <div className="row">
              <div className="col-xs-12 col-ms-12 col-sm-12 col-md-12 col-lg-12">
                <input id="nombre" name="nombre" type="text" className="form-control" placeholder="Nombre" />
                <span className="help-block" id="nameMessage" />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-ms-12 col-sm-12 col-md-12 col-lg-12">
                <input id="telefono" name="telefono" type="text" className="form-control" placeholder="Telefono" />
                <span className="help-block" id="phoneMessage" />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-ms-12 col-sm-12 col-md-12 col-lg-12">
                <input id="mail" name="mail" type="text" className="form-control" placeholder="Mail" />
                <span className="help-block" id="mailMessage" />
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-ms-12 col-sm-12 col-md-12 col-lg-12">
                <input id="empresa" name="empresa" type="text" className="form-control" placeholder="Empresa" />
                <span className="help-block" id="empresaMessage" />
              </div>
            </div>

            <div className="row">
              <div className="control-group">
                <div className="col-xs-12 col-ms-12 col-sm-12 col-md-12 col-lg-12">
                  <textarea id="consulta" name="consulta" className="form-control" rows="4" cols="40" placeholder="Consulta" />
                  <span className="help-block" id="consultaMessage" />
                </div>
              </div>
            </div>

            {/* <!-- #messages is where the messages are placed inside --> */}
            <div className="row">
              <div className="control-group">
                <div className="col-md-9">
                  <div id="messages" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="control-group">
                <div className="col-xs-offset-2 col-xs-10">
                  <button type="submit" className="btn btn-lg pull-right btn-primary">Enviar</button>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
