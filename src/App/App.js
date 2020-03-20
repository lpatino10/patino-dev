import React, { useState } from 'react';

import { Header } from '../Header/Header';
import { AboutMe } from '../AboutMe/AboutMe'
import { Experience } from '../Experience/Experience'
import { Footer } from '../Footer/Footer'
import './App.scss';

const App = () => {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <>
      <Header/>
      <Experience/>
      <Footer/>
    </>
  );
};

export default App;
