import Brands from '../components/Brands/Brands';
import Commercial from '../components/Commercial/Commercial';
import Content from '../components/Content/Content';
import Features from '../components/Features/Features';
import Promo from '../components/Promo/Promo';

function HomePage() {
  return (
    <div>
      <Promo />
      <Content />
      <Features />
      <Commercial />
      <Brands />            
    </div>
  );
}

export default HomePage;
