import React from 'react';

import linkedInIcon from '../../images/linkedin.png';
import emailIcon from '../../images/email.png';
import githubIcon from '../../images/github.png';

import './ContactLinks.scss';

export const ContactLinks = () => (
  <div className="container">
    <a href="https://github.com/lpatino10">
      <img src={githubIcon} className="container__link" alt="GitHub profile" />
    </a>
    <a href="https://www.linkedin.com/in/logan-patino/">
      <img src={linkedInIcon} className="container__link" alt="LinkedIn profile" />
    </a>
    <a href="mailto:loganpatino10@gmail.com">
      <img src={emailIcon} className="container__link" alt="email" />
    </a>
  </div>
);
