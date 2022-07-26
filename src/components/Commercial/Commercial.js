import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; 
import watch from '../../img/logo/watch.png';
import './Commercial.sass';

function Commercial() {
  const { t } = useTranslation();
  const [data] = useState([]);
  
  return (
    <section>
      <div className="container">
        <div className="title">
          <h4>{t('commercial')}</h4>
          <div className="line" />
        </div>
        <div className="commercial">
          {
            data.map(({ title, price, id }) => (
              <div className="commercial_item" key={id}>
                <div className="commercial_item_block">
                  <img src={watch} alt="logo" />
                </div>
                <div className="commercial_item_text">
                  <span>{title}</span>
                  <br />
                  <span>{price}</span>
                </div>
              </div>
            ))
          }
        </div>
        <div>
          <button type="button" className="commercial_btn">смотреть еще</button>
        </div>
      </div>
    </section>
  );
}

export default Commercial;
