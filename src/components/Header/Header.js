import React from 'react';

import { AboutMe } from '../AboutMe/AboutMe';
import { ContactLinks } from '../ContactLinks/ContactLinks';
import './Header.scss';

export const Header = React.forwardRef((_, ref) => {
  return (
    <section className="header" ref={ref}>
      <AboutMe/>
      <ContactLinks />
    </section>
  );
});
