import React from 'react';

const SectionRegistryRenderer = ({ sections }) => (
  sections.map(({ key, Component, props }) => (
    <Component key={key} {...(props || {})} />
  ))
);

export default SectionRegistryRenderer;
