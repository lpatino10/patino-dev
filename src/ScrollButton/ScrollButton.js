import React, { useEffect, useRef } from 'react';

import './ScrollButton.scss';

export const ScrollButton = ({ elementToScrollTo, onClick }) => {
  const button = useRef(null);
  const arrow = useRef(null);

  useEffect(() => {
    const handler = () => {
      window.scrollTo({
        behavior: 'smooth',
        top: elementToScrollTo.current.offsetTop,
      });
      arrow.current.classList.toggle("flip");
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
