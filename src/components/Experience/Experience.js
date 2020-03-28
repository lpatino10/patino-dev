import React from 'react';

import watsonLogo from '../images/watson-logo.png'
import hylandLogo from '../images/hyland-logo.png'
import { JobDescription } from '../JobDescription/JobDescription';

import './Experience.scss';

export const Experience = React.forwardRef((_, ref) => {
  const ibmDescription = [
    'Here, the goal could be summed up as improving the way users (developers!) interact with Watson.',
    'One piece of this was work with the Watson SDKs. My team developed a fork of the open-source'
    + ' Swagger Codegen project to actually generate over 10 languages from a single API spec. I also'
    + ' actively managed the open-source Java SDK, working with outside developers to fix bugs and add features.',
    'The second big piece was web development using React and Redux throughout the IBM Cloud platform, wherever the'
    + ' general experience could be improved.',
  ];

  const hylandDescription = [
    'At Hyland, I worked on a small team with a few other interns and one dev lead to improve a feature in their main product,'
    + ' an enterprise content management platform.',
    'This was mostly work in C#, with a little bit of web development thrown in.',
  ];

  return (
    <div className="experience" ref={ref}>
      <JobDescription
        title="IBM Watson Developer Experience"
        timeframe="2017 - Present"
        description={ibmDescription}
        logo={watsonLogo}
      />
      <JobDescription
        title="Hyland Software Development Intern"
        timeframe="2016"
        description={hylandDescription}
        logo={hylandLogo}
      />
    </div>
  );
});
