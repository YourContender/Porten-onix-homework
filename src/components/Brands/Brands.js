import brand from '../../img/logo/brand.png';
import './Brands.sass';

function Brands() {
  return (
    <section>
      <div className="brands">
        <div className="container">
          <h4>our brands</h4>
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
