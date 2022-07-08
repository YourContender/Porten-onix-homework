import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import log from '../../img/logo/log.png';
import iconPhone from '../../img/logo/phone-icon.png';
import { useTranslation } from "react-i18next"; 
import './Header.sass';

function Header() {
  const { themeColor } = useContext(ThemeContext); 
  const {t} = useTranslation();

  return (
    <header className={themeColor !== 'dark' ? 'light' : 'dark'}>
      <div className="container">
        <div className="header">
          <div className="header_info">
            <div className="header_info_link">  
              <img src={iconPhone} alt="phone_icon" />
              <span>123(456) 78 99 10</span>
            </div>
            <div className="header_info_link">
              <span>{t('schedule')}</span>
            </div>
            <div className="header_info_link">
              <span>9:00 — 18:00</span>
            </div>
          </div>
          <div className="header_log">
            <img src={log} alt="log" />
            <span>{t('login')}</span>
            <span>
              {themeColor}
              {' '}
              theme
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
