import React, { Component } from 'react';
import imgNetsuite from '../../../../assets/featuredIn/netsuite.png';
import imgNode from '../../../../assets/featuredIn/node.svg';
import imgReact from '../../../../assets/featuredIn/react.png';
import imgVue from '../../../../assets/featuredIn/vue.png';

class featuredIn extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('did mount featuredIn');
  }

  render() {
    return (
      <section className="section-featuredin">
        <div className="container wow fadeInUpSmall" data-wow-offset="200">
          <div className="seperator"><span>FEATURED IN</span></div>
          <div className="logo-slider owl-carousel">
            <div className="slider-list">
              <a className="item-50" ><img src={imgNetsuite} /> </a>
              <a className="item-tecnology" ><img src={imgNode} /> </a>
              <a className="item-tecnology" ><img src={imgReact} /> </a>
              <a className="item-tecnology" ><img src={imgVue} /> </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default featuredIn;
