import React, { useLayoutEffect, useRef, useState } from 'react';

import { Header } from '../Header/Header';
import { Experience } from '../Experience/Experience';
import { ScrollButton } from '../ScrollButton/ScrollButton';
import './App.scss';

export const App = () => {
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
  }, [dividingLineVerticalPos, scrollToTop]);

  return (
    <>
      <Header ref={header} />
      <Experience ref={experience} />
      <ScrollButton
        elementToScrollTo={scrollToTop ? header : experience}
        onClick={() => {
          setScrollToTop(!scrollToTop);
        }}
      />
    </>
  );
};
