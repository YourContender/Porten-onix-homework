import React, { useContext } from 'react';
import TestContect from '../../context';
import log from '../../img/logo/log.png';
import iconPhone from '../../img/logo/phone-icon.png'; 
import './Header.sass';

function Header() {
  const value = useContext(TestContect);
  return (
    <header className={value !== 'dark' ? 'light' : 'dark'}>
      <div className="container">
        <div className="header">
          <div className="header_info">
            <div className="header_info_link">  
              <img src={iconPhone} alt="phone_icon" />
              <span>123(456) 78 99 10</span>
            </div>
            <div className="header_info_link">
              <span>Работаем 7 дней в неделю</span>
            </div>
            <div className="header_info_link">
              <span>9:00 — 18:00</span>
            </div>
          </div>
          <div className="header_log">
            <img src={log} alt="log" />
            <span>Войти / Регистрация</span>
            <span>
              {value}
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
