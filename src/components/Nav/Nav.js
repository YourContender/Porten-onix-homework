import React from 'react';
import { Link } from 'react-router-dom';
import basket from '../../img/logo/basket.png';
import search from '../../img/logo/search.png';
import logoShop from '../../img/logo/logo-porten.png';
import './Nav.sass';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blockItem: [
        { value: 'Понравилось', id: 12 },
        { value: 'Личный кабинет', id: 13 },
        { value: 'Настройки', id: 14 }
      ],
      blockImg: [basket, search],
      active: false
    };
  }

  onActiveClass = (result) => {
    this.setState({ active: result });
  };

  render() {
    const { blockItem, blockImg, active } = this.state;

    return (
      <nav>
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
                    blockItem.map((item) => {
                      return (
                        <Link
                          to={item.id === 12 ? '/list' : '/'} 
                          className="block_item" 
                          key={item.id}
                          onClick={() => this.onActiveClass(false)}
                        >
                          <span>{item.value}</span>
                        </Link>
                      );
                    })
                }

                {
                    blockImg.map((item, i) => {
                      return (
                        <div className="block_item_link" key={i}>
                          <img src={item} alt="basket" />
                        </div>
                      );
                    })
                }
              </div>
            </div>
            <div 
              className={active ? 'hamburger_active' : 'hamburger'} 
              onClick={() => this.onActiveClass(true)}
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
}

export default Nav;
