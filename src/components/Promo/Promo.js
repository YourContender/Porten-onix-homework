import React from 'react';
import { useTranslation } from 'react-i18next'; 
import logoShopSecond from '../../img/logo/logo-porten-2.png';
import './Promo.sass';

function Promo() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="promo">
        <div className="container">
          <div className="promo_block">

            <div className="promo_block_item">
              <img src={logoShopSecond} alt="logo porten" />
            </div>
                        
            <div className="promo_block_text">
              <h5>
                {t('promo')}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section> 
  );
}

export default Promo;
