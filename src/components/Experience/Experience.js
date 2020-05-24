import React from 'react';
import { JobDescription } from '../JobDescription/JobDescription';

import './Experience.scss';

export const Experience = React.forwardRef((_, ref) => {
  const buoyDescription = [
    'At Buoy, I\'m helping improve the Buoy symptom checker experience to help people get the right care quickly. We\'re'
    + ' using Python on the back-end to interact with the machine learning models powering everything, with React on the front-end.'
  ];
  const toastDescription = [
    'The Capital team at Toast builds software to help provide funds for restaurants to be able to do what they do best.',
    'The software encompasses the whole lifecycle, from the loan application to the repayment and settlement process.'
    + ' Most of it is implemented using Java microservices, with React webpages for any interactive pieces.'
  ];
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
        title="Buoy Health"
        timeframe="2020 - Present"
        description={buoyDescription}
        logoSrc="buoy-logo.png"
      />
      <JobDescription
        title="Toast Capital"
        timeframe="2020 - 2020"
        description={toastDescription}
        logoSrc="toast-logo.png"
      />
      <JobDescription
        title="IBM Watson Developer Experience"
        timeframe="2017 - 2020"
        description={ibmDescription}
        logoSrc="watson-logo.png"
      />
      <JobDescription
        title="Hyland Software Development Intern"
        timeframe="2016"
        description={hylandDescription}
        logoSrc="hyland-logo.png"
      />
    </div>
  );
});
