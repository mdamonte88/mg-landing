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
    title: 'ARQUITECTURA Y DISEÑO',
    items: [
      `Desarrollamos soluciones integrales de arquitectura y diseño para proyectos residenciales, comerciales y corporativos. Diseñamos remodelaciones, interiores, oficinas, locales comerciales, fachadas y espacios exteriores, combinando funcionalidad, estética y eficiencia en cada propuesta.

      Brindamos asesoramiento desde las etapas iniciales del proyecto mediante anteproyectos, relevamientos arquitectónicos, planos ejecutivos, cómputos métricos y presupuestos. Además, gestionamos la regularización de construcciones y la tramitación de permisos, acompañando al cliente durante todo el proceso.

      Complementamos nuestros servicios con visualización 3D, permitiendo conocer el resultado final antes de construir, y soluciones de home staging para potenciar la presentación y valorización de los espacios.`
    ]
  },
  {
    title: 'ASESORAMIENTO Y DIRECCIÓN DE OBRA DE ARQUITECTURA E INGENIERÍA',
    items: [
      `Ofrecemos servicios de asesoramiento y dirección de obra, poniendo a disposición profesionales especializados para la gestión y supervisión de proyectos de movimiento de suelos, arquitectura e ingeniería. 
      
      Nuestro objetivo es asegurar el cumplimiento de los plazos, la calidad de los trabajos y la correcta ejecución de cada proyecto.`
    ]
  },
  {
    title: 'SERVICIOS TÉCNICOS',
    items: [
      `Brindamos servicios técnicos especializados para el análisis, evaluación y documentación de obras y terrenos. Elaboramos informes técnicos, memorias descriptivas, relevamientos fotográficos y diagnósticos de patologías constructivas, proporcionando información confiable para la planificación y ejecución de proyectos.
      Además, realizamos relevamientos con dron, obteniendo datos de alta precisión para la generación de ortomosaicos, curvas de nivel y modelos digitales de terreno, herramientas fundamentales para estudios topográficos, planificación de obras y control de avances.`
    ]
  },
  {
    title: 'MANTENIMIENTO CORPORATIVO',
    items: [
      `Brindamos soluciones integrales de mantenimiento corporativo adaptadas a las necesidades de cada cliente. Atendemos oficinas, locales comerciales, restaurantes, clínicas y todo tipo de instalaciones, mediante servicios programados que garantizan el buen estado, la seguridad y el funcionamiento continuo de los espacios.
      Nuestro equipo realiza tareas de mantenimiento preventivo y correctivo, ofreciendo una gestión eficiente y una respuesta ágil para resolver cualquier requerimiento.`
    ]
  },
  {
    title: 'OBRAS DE MOVIMIENTO DE SUELOS',
    items: [
      `Desarrollamos proyectos de movimiento de suelos mediante modalidades de contratación flexibles, ya sea ejecutando la obra en su totalidad o proporcionando servicios de administración y dirección técnica.
      Nuestra experiencia abarca relevamientos topográficos, cálculo de volúmenes y metrajes, replanteos planialtimétricos, excavaciones, rellenos compactados, zanjeos y suministro de materiales de cantera, respaldados por maquinaria especializada para cada etapa de la obra.`
    ]
  },
  {
    title: 'ALQUILER DE MAQUINARIA VIAL',
    items: [
      `Ofrecemos servicios de alquiler de maquinaria y equipos para obras de construcción, movimiento de suelos e infraestructura. 
      Disponemos de excavadoras, retroexcavadoras combinadas, camiones, minicargadores tipo Bobcat, compactadores lisos y de pata de cabra, entre otros equipos, adaptándonos a las necesidades específicas de cada proyecto.`
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
