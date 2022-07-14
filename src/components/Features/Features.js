import { useTranslation } from 'react-i18next'; 
import './Features.sass';

function Features() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="features">
        <div className="features_block" />
        <div className="features_descr">
          <div className="features_descr_title">
            <h4>{t('collection')}</h4>
            <div className="line" />
          </div>
          <div className="features_descr_text">
            <span>
              {t('features')} 
            </span>
          </div>
          <div>
            <button type="button" className="features_descr_btn">{t('watch-collection')}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
