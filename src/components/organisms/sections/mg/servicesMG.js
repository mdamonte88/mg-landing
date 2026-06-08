import React from 'react';

const ServicesMG = ({ serviceGroups }) => (
  <section id="servicios" className="mg-services" aria-label="Servicios MG">
    <div className="mg-section-title">
      <h2>Servicios</h2>
      <p>
        Oferta tecnica completa para proyectos, obra y mantenimiento.
      </p>
    </div>
    <div className="mg-services-grid">
      {serviceGroups.map(group => (
        <article className="mg-service-group" key={group.title}>
          <h3>{group.title}</h3>
          <ul>
            {group.items.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default ServicesMG;
