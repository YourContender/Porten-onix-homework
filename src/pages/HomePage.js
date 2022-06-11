import Brands     from "../components/Brands/Brands";
import Commercial from "../components/Commercial/Commercial";
import Content    from "../components/Content/Content";
import Features   from "../components/Features/Features";
import Layout     from "../components/Layout/Layout";
import Promo      from "../components/Promo/Promo";

const HomePage = () => {
    return (
        <div>
            <Layout>
                <Promo/>
                <Content/>
                <Features/>
                <Commercial/>
                <Brands/>    
            </Layout>            
        </div>
    );
}

export default HomePage;