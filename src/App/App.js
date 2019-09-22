import React, { useState } from 'react';

import { Header } from '../Header/Header';
import { AboutMe } from '../AboutMe/AboutMe'
import { Experience } from '../Experience/Experience'
import { Footer } from '../Footer/Footer'
import './App.scss';

const App = () => {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div className="app">
      <Header onTabSelect={(selectedTab) => {
        setPageIndex(selectedTab);
      }}/>
      <div className="app-content-container">
        { pageIndex === 0
          ? <AboutMe/>
          : <Experience/>
        }
      </div>
      <Footer/>
    </div>
  );
};

export default App;
