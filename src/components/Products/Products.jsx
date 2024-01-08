import "./Products.scss";
import Product from './Product/Product'
const Products = ({innerPages, hedingText}) => {
    return <div className="products-container">
       {!innerPages &&  <div className="sec-heading">{hedingText}</div>}
       <div className="products">
        <Product/>
        {/* <Product/>
        <Product/>
        <Product/> */}

       </div>
    </div>;
};

export default Products;
