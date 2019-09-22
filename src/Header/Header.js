import React, { useState } from 'react';

import './Header.scss';

export const Header = ({ onTabSelect }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="header">
      <div className="header__tab-container">
        <button
          className={`header__tab-container--button${selectedTab === 0 ? ' header__tab-container--button-selected' : ''}`}
          href="#"
          onClick={() => {
            setSelectedTab(0);
            onTabSelect(0);
          }}
        >
          About me
        </button>
        <button
          className={`header__tab-container--button${selectedTab === 1 ? ' header__tab-container--button-selected' : ''}`}
          href="#"
          onClick={() => {
            setSelectedTab(1);
            onTabSelect(1);
          }}
        >
          Experience
        </button>
      </div>
    </div>
  );
};
