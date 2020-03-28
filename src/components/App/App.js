import React, { useLayoutEffect, useRef, useState } from 'react';

import { Header } from '../Header/Header';
import { Experience } from '../Experience/Experience'
import { Footer } from '../Footer/Footer'
import { ScrollButton } from '../ScrollButton/ScrollButton';
import './App.scss';

const App = () => {
  const header = useRef();
  const experience = useRef();

  const [scrollToTop, setScrollToTop] = useState(false);
  const [dividingLineVerticalPos, setDividingLineVerticalPos] = useState();

  useLayoutEffect(() => {
    const handler = () => {
      if (experience && experience.current) {
        setDividingLineVerticalPos(experience.current.getBoundingClientRect().top);
      }
    }

    window.addEventListener('scroll', handler);

    return(() => {
      window.removeEventListener('scroll', handler);
    })
  })

  useLayoutEffect(() => {
    const windowHeight = window.screen.height;
    const isOnHeaderSection = !dividingLineVerticalPos || dividingLineVerticalPos > (windowHeight / 2);

    if ((isOnHeaderSection && scrollToTop) || (!isOnHeaderSection && !scrollToTop)) {
      setScrollToTop(!scrollToTop);
    }
  }, [dividingLineVerticalPos]);

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
