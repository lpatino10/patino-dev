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
      let scrollTop = elementToScrollTo.current.offsetTop;

      // The offsetTop of the header might be something larger than 0 since we're using the sticky
      // positioning, so we'll go ahead and just always use 0.
      if (elementToScrollTo.current.className === 'header') {
        scrollTop = 0;
      }

      window.scrollTo({
        behavior: 'smooth',
        top: scrollTop,
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
