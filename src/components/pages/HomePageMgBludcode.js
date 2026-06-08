import React, { Component } from 'react';
import { Container } from 'reactstrap';
import logoMg from '../../assets/mg-logo.jpeg';
import mgShowcaseVideo from '../../assets/videos/mg-hero-meliter-style.mp4';
import CeoMGFullWidth from '../organisms/sections/mg/ceoMGFullWidth';
import CeoMG from '../organisms/sections/mg/ceoMG';
import HeroMG from '../organisms/sections/mg/heroMG';
import SeoMG from '../organisms/sections/mg/seoMG';
import ServicesMG from '../organisms/sections/mg/servicesMG';
import ProcessMG from '../organisms/sections/mg/processMG';
import ContactMG from '../organisms/sections/mg/contactMG';
import SectionRegistryRenderer from '../shared/layout/SectionRegistryRenderer';
import '../../styles/pages/home-page-mg-bludcode.scss';

const serviceGroups = [
  {
    title: 'Arquitectura y proyectos',
    items: [
      'Diseno de remodelaciones, interiores, oficinas, locales comerciales, fachada y espacios exteriores.',
      'Anteproyectos.',
      'Planos ejecutivos.',
      'Regularizacion de construcciones.',
      'Tramitacion de permisos.',
      'Relevamiento arquitectonico.',
      'Computos metricos.',
      'Presupuestos.',
      'Home staging.',
      'Visualizacion 3D antes de construir.'
    ]
  },
  {
    title: 'Construccion y direccion de obra',
    items: [
      'Construccion.',
      'Direccion de obra (seguimiento, control de calidad, inspeccion y gestion de cronogramas).'
    ]
  },
  {
    title: 'Servicios tecnicos y relevamientos',
    items: [
      'Informes tecnicos.',
      'Relevamiento y diagnostico de patologias.',
      'Memorias descriptivas.',
      'Relevamiento fotografico.',
      'Relevamiento con dron (ortomosaico, curvas de nivel y modelo digital de terreno).'
    ]
  },
  {
    title: 'Mantenimiento y supervision',
    items: [
      'Supervision.',
      'Mantenimiento de oficinas, locales, restaurantes, clinicas y tiendas (contratos mensuales).'
    ]
  },
  {
    title: 'Ejecucion en obra',
    items: ['Supervision.', 'Ejecucion.']
  },
  {
    title: 'Alquiler de equipos',
    items: [
      'Alquiler de equipos para la construccion (camion, excavadora, retroexcavadora, compactadores y motoniveladora).'
    ]
  }
];

class HomePageMgBludcode extends Component {
  constructor(props) {
    super(props);
    this.delta = 8;
    this.lastScrollTop = 0;
    this.didScroll = false;

    this.state = {
      menuOpen: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);

    this.scrollInterval = window.setInterval(() => {
      if (this.didScroll) {
        this.hasScrolled();
        this.didScroll = false;
      }
    }, 250);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
    window.clearInterval(this.scrollInterval);
    document.body.classList.remove('fixed');
  }

  handleScroll = () => {
    this.didScroll = true;
  };

  ensureVideoPlayback = (event) => {
    const playPromise = event.currentTarget.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {});
    }
  };

  hasScrolled = () => {
    const navbar = document.querySelector('.mg-navbar');
    if (!navbar) return;

    const navbarHeight = navbar.offsetHeight;
    const st = window.pageYOffset || document.documentElement.scrollTop || 0;

    if (Math.abs(this.lastScrollTop - st) <= this.delta) {
      return;
    }

    if (st > this.lastScrollTop && st > navbarHeight) {
      navbar.classList.remove('nav-down');
      navbar.classList.add('nav-up');
    } else {
      const docHeight = document.documentElement.scrollHeight
        || document.body.scrollHeight;
      if (st + window.innerHeight < docHeight) {
        navbar.classList.remove('nav-up');
        navbar.classList.add('nav-down');
      }
      if (st < 200) {
        navbar.classList.remove('nav-up');
        navbar.classList.remove('nav-down');
      }
    }

    this.lastScrollTop = st <= 0 ? 0 : st;
  };

  toggleMenu = () => {
    this.setState(
      prevState => ({ menuOpen: !prevState.menuOpen }),
      () => {
        document.body.classList.toggle('fixed', this.state.menuOpen);
      }
    );
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
    document.body.classList.remove('fixed');
  };

  render() {
    const { menuOpen } = this.state;
    const sectionRegistry = [
      { key: 'ceo-full-width',
        Component: CeoMGFullWidth,
        props: {
          posterSrc: logoMg,
          onCanPlay: this.ensureVideoPlayback
        },
      },
      {
        key: 'hero',
        Component: HeroMG,
        props: {
          videoSrc: mgShowcaseVideo,
          posterSrc: logoMg,
          onCanPlay: this.ensureVideoPlayback
        }
      },
      {
        key: 'seo',
        Component: SeoMG,
        props: {
          videoSrc: mgShowcaseVideo,
          posterSrc: logoMg,
          onCanPlay: this.ensureVideoPlayback
        }
      },
      {
        key: 'ceo',
        Component: CeoMG,
        props: {
          videoSrc: mgShowcaseVideo,
          posterSrc: logoMg,
          onCanPlay: this.ensureVideoPlayback
        }
      },
      {
        key: 'services',
        Component: ServicesMG,
        props: {
          serviceGroups
        }
      },
      {
        key: 'process',
        Component: ProcessMG
      },
      {
        key: 'contact',
        Component: ContactMG
      }
    ];

    return (
      <Container className="home-page home-page-mg-bludcode">
        <header className="mg-navbar">
          <a href="#inicio" className="mg-brand" onClick={this.closeMenu}>M&G</a>
          <nav>
            <a href="#servicios">Servicios</a>
            <a href="#metodologia">Metodologia</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <button type="button" className={`mg-menu-trigger ${menuOpen ? 'active' : ''}`} onClick={this.toggleMenu} aria-label="Toggle menu">
            <span />
          </button>
        </header>

        <div className={`mg-menu ${menuOpen ? 'active' : ''}`}>
          <a href="#servicios" onClick={this.closeMenu}>Servicios</a>
          <a href="#metodologia" onClick={this.closeMenu}>Metodologia</a>
          <a href="#contacto" onClick={this.closeMenu}>Contacto</a>
        </div>

        <main className="mg-main">
          <SectionRegistryRenderer sections={sectionRegistry} />
        </main>
      </Container>
    );
  }
}

export default HomePageMgBludcode;
