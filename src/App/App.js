import React, { useRef, useState } from 'react';

import { Header } from '../Header/Header';
import { AboutMe } from '../AboutMe/AboutMe'
import { Experience } from '../Experience/Experience'
import { Footer } from '../Footer/Footer'
import './App.scss';
import { ScrollButton } from '../ScrollButton/ScrollButton';

const App = () => {
  const header = useRef();
  const experience = useRef();

  const [scrollToTop, setScrollToTop] = useState(false);

  return (
    <>
      <Header ref={header} />
      <Experience ref={experience} />
      <Footer/>
      <ScrollButton
        elementToScrollTo={scrollToTop ? header : experience}
        onClick={() => {
          setScrollToTop(!scrollToTop);
        }}
      />
    </>
  );
};

export default App;
