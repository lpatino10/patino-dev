import React from 'react';
import { Image } from '../Image/Image';
import { Bio } from '../Bio/Bio';
import './AboutMe.scss';

export const AboutMe = () => (
  <div className="about-me-container">
    <div className="personal-pic">
      <Image src="me.png" alt="me" />
    </div>
    <Bio />
  </div>
);
