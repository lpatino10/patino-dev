import React from 'react';
import { Image } from '../Image/Image';

import './ContactLinks.scss';

export const ContactLinks = () => (
  <div className="container">
    <a href="https://github.com/lpatino10">
      <div className="container__link">
        <Image src="github.png" alt="GitHub profile" />
      </div>
    </a>
    <a href="https://www.linkedin.com/in/logan-patino/">
      <div className="container__link">
        <Image src="linkedin.png" alt="LinkedIn profile" />
      </div>
    </a>
    <a href="mailto:loganpatino10@gmail.com">
      <div className="container__link">
        <Image src="email.png" alt="email" />
      </div>
    </a>
  </div>
);
