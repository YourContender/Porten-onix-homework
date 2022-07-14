import { useTranslation } from 'react-i18next'; 
import PropTypes from 'prop-types';

export default function FooterView({ category }) {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer_block">
            <div className="footer_about">
              <h4>{t('footer-title')}</h4>
              <div className="footer_about_box">
                <span>
                  {t('footer-about')}
                </span>
              </div>
            </div>
            <div className="footer_category">
              <h4>{t('category')}</h4>
              <div className="footer_category_list">
                {
                  category.map((item) => {
                    return (
                      <div className="item" key={item}>
                        <span>{t(item)}</span>
                      </div>
                    );
                  })
                }
              </div>
            </div>
            <div className="footer_link">
              <h4>{t('newsletter')}</h4>
              <span>
                {t('newsletter-about')}
              </span>
              <div className="footer_link_box">
                <input className="input" placeholder="enter your e-mail" type="text" />
                <button type="button">{t('newsletter-button')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="info">
          <span>Сделал: Саенко Сергей</span>
          <a target="_blank" rel="noreferrer" href="https://github.com/YourContender">
            Мой GitHub
          </a>
          <a 
            target="_blank" 
            rel="noreferrer" 
            href="https://www.figma.com/file/0a01UVA3pCxrJTXErEGLho/PORTEN?node-id=0%3A1"
          >
            Оригинал дизайна
          </a>
        </div>
        <div>
          <span>© 2022</span>
        </div>
      </div>
    </footer>
  );
}

FooterView.propTypes = { 
  category: PropTypes.arrayOf(PropTypes.string),
};

FooterView.defaultProps = { 
  category: [], 
};
