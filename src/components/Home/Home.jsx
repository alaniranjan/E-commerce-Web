import CategoryPrd from "./Category/CategoryPrd";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import "./Home.scss";
const Home = () => {
    return <div  >
        <Banner/>
        <div className="main-content">
            <div className="layout">
        <CategoryPrd/>
        <Products hedingText="POPULAR PRODUCTS"/>
            </div>
        </div>
    </div>;
};

export default Home;
