import React from 'react';

import { AboutMe } from '../AboutMe/AboutMe'
import './Header.scss';

export const Header = React.forwardRef((_, ref) => {
  return (
    <section className="header" ref={ref}>
      <AboutMe/>
    </section>
  );
});
