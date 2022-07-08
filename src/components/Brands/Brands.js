import brand from '../../img/logo/brand.png';
import { useTranslation } from "react-i18next"; 
import './Brands.sass';

function Brands() {
  const {t} = useTranslation();
  return (
    <section>
      <div className="brands">
        <div className="container">
          <h4>{t('brands')}</h4>
          <div className="line" />
          <div className="brands_list">
            <img src={brand} alt="brand" />
            <img src={brand} alt="brand" />
            <img src={brand} alt="brand" />
            <img src={brand} alt="brand" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
