import React from 'react';

import linkedInIcon from '../../images/linkedin.png';
import emailIcon from '../../images/email.png';
import githubIcon from '../../images/github.png';

import './Footer.scss';

export const Footer = () => (
  <div className="footer">
    <a href="https://github.com/lpatino10">
      <img src={githubIcon} className="footer__link" alt="GitHub profile" />
    </a>
    <a href="https://www.linkedin.com/in/logan-patino/">
      <img src={linkedInIcon} className="footer__link" alt="LinkedIn profile" />
    </a>
    <a href="mailto:loganpatino10@gmail.com">
      <img src={emailIcon} className="footer__link" alt="email" />
    </a>
  </div>
);
