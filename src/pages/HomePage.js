import Brands     from "../components/Brands/Brands";
import Commercial from "../components/Commercial/Commercial";
import Content    from "../components/Content/Content";
import Features   from "../components/Features/Features";
import Footer     from "../components/Footer/Footer";
import Promo      from "../components/Promo/Promo";

const HomePage = () => {
    return (
        <div>
            <Promo/>
            <Content/>
            <Features/>
            <Commercial/>
            <Brands/>
            <Footer/>
        </div>
    );
}

export default HomePage;