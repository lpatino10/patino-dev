import React from 'react';

import pic from '../../images/me.png'
import { Bio } from '../Bio/Bio';
import './AboutMe.scss';

export const AboutMe = () => (
  <div className="about-me-container">
    <img src={pic} className="personal-pic" alt="me" />
    <Bio/>
  </div>
);
