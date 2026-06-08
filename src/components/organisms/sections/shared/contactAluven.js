import React, { PureComponent } from 'react';
import SimpleMap from '../../../molecules/maps/Map';

class Contact extends PureComponent {
  constructor() {
    super();
  }

  /* Parameters { x, y, lat, lng, event } */
  onClickMap = ({ lat, lng }) => {
    const targetPosition = {
      lat,
      lng
    };

    // this.createFutureTargetOnMap(targetPosition);
    // this.setState({ targetPosition, isCreatingNewTarget: true, isDeletingTarget: false });
  }

  /* Parameters { childProps } */
  onClickTarget = (key) => {
    if (parseInt(key, 10) === -1) {
      return;
    }

    // const targetToRem = this.findTarget(key);
    // this.props.selectTarget(targetToRem.target);
    // this.setState({ isDeletingTarget: true, isCreatingNewTarget: false });
  }

  render() {
    return (
      <section id="slide-6" className="contactSlide contentbox">
        <div className="left-content col-xs-12 col-lg-6">
          <div className="contact-hardcode">
            <span className="contact-data">Pantaleon Perez, Montevideo, Uruguay</span>
            <span className="contact-data link-data">098001464</span>
            <span className="contact-data link-data">andreschiribao@outlook.com</span>
          </div>
          <div className="form-container">
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
        <div className="rigth-content col-xs-12 col-lg-6">
          <SimpleMap
            markers={[]}
            topics={[]}
            onClick={this.onClickMap}
            onChildClick={this.onClickTarget}
          />
        </div>
      </section>
    );
  }
}

export default Contact;
