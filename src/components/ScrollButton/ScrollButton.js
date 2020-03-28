import React, { useEffect, useRef } from 'react';

import { usePrevious } from '../../hooks/usePrevious';
import './ScrollButton.scss';

export const ScrollButton = ({ elementToScrollTo, onClick }) => {
  const button = useRef(null);
  const arrow = useRef(null);

  const previousElement = usePrevious(elementToScrollTo);

  useEffect(() => {
    if (previousElement !== undefined && previousElement !== elementToScrollTo) {
      arrow.current.classList.toggle("flip");
    }
  }, [elementToScrollTo]);

  useEffect(() => {
    const handler = () => {
      window.scrollTo({
        behavior: 'smooth',
        top: elementToScrollTo.current.offsetTop,
      });
      onClick();
    };

    button.current.addEventListener('click', handler);

    return (() => {
      button.current.removeEventListener('click', handler);
    })
  });

  return (
    <div className="button" ref={button}>
      <div className="arrow" ref={arrow} />
    </div>
  );
};
