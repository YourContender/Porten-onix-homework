import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import basket from '../../img/logo/basket.png';
import search from '../../img/logo/search.png';
import logoShop from '../../img/logo/logo-porten.png';
import './Nav.sass';
import ThemeContext from '../../context/ThemeContext';

function Nav() {
  const [blockItems] = useState([   
    { value: 'Понравилось', id: 12 },
    { value: 'Личный кабинет', id: 13 },
    { value: 'Настройки', id: 14 }
  ]);
  const [blockImg] = useState([basket, search]); 
  const [active, setActive] = useState(false);

  const { themeColor } = useContext(ThemeContext);

  return (
    <nav className={themeColor !== 'light' ? 'nav_dark' : 'nav_light'}>
      <div className="nav">
        <div className="container">
          <div className="nav_block">
            <div className="nav_block_logo">
              <Link to="/">
                <img src={logoShop} alt="logo" />
              </Link>
            </div>
            <div className={active ? 'nav_block_link_active' : 'nav_block_link'}>
              {
                blockItems.map((item) => {
                  return (
                    <Link
                      to={item.id === 12 ? '/list' : '/'} 
                      className="block_item" 
                      key={item.id}
                      onClick={() => setActive(false)}
                    >
                      <span>{item.value}</span>
                    </Link>
                  );
                })
              }

              {
                blockImg.map((item) => {
                  return (
                    <div className="block_item_link" key={item}>
                      <img src={item} alt="basket" />
                    </div>
                  );
                })
              }
            </div>
          </div>
          <div // eslint-disable-line
            className={active ? 'hamburger_active' : 'hamburger'} 
            role="button"
            onClick={() => setActive(true)}
          >
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </nav>  
  );
}

export default Nav;
