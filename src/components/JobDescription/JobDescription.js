import React from 'react';
import { Image } from '../Image/Image';

import './JobDescription.scss';

export const JobDescription = ({ description, logoSrc, timeframe, title }) => (
  <div className="job-description-container">
    <div className="job-description-container__logo">
      <Image src={logoSrc} alt="logo" />
    </div>
    <div className="job-description-container__description">
      <h3 className="job-description-container__description--title">
        {title}
      </h3>
      <p className="job-description-container__description--timeframe">
        {timeframe}
      </p>
      {description && description.map((paragraph, index) => (
        <p key={paragraph.substring(0, 4) + index}>
          {paragraph}
        </p>
      ))}
    </div>
  </div>
);

