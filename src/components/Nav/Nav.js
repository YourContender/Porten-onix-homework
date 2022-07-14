import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import basket from '../../img/logo/basket.png';
import search from '../../img/logo/search.png';
import logoShop from '../../img/logo/logo-porten.png';
import ThemeContext from '../../context/ThemeContext';
import './Nav.sass';

function Nav() {
  const { t } = useTranslation();
  const [blockItems] = useState([   
    { value: 'shop', id: 12 },
    { value: 'log', id: 13 },
    { value: 'setting', id: 14 }
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
                blockItems.map(({ id, value }) => (
                  <Link
                    to={id === 12 ? '/list' : '/'} 
                    className="block_item" 
                    key={id}
                    onClick={() => setActive(false)}
                  >
                    <span>{t(value)}</span>
                  </Link>
                ))
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
