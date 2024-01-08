
import { Link } from "react-router-dom"
import PRD1 from "../../../assets/products/earbuds-prod-1.webp"
import PRD2 from "../../../assets/products/earbuds-prod-2.webp"
import PRD3 from "../../../assets/products/earbuds-prod-3.webp"
import PRD4 from "../../../assets/products/earbuds-prod-4.webp"
import PRD5 from "../../../assets/products/earbuds-prod-5.webp"
import PRD6 from "../../../assets/products/headphone-prod-1.webp"
import PRD7 from "../../../assets/products/headphone-prod-2.webp"
import PRD8 from "../../../assets/products/headphone-prod-3.webp"
// sepaker
import PRDS1 from "../../../assets/products/speaker-prod-1.webp"
import PRDS2 from "../../../assets/products/speaker-prod-2.webp"
import PRDS3 from "../../../assets/products/speaker-prod-3.webp"
import PRDS4 from "../../../assets/products/speaker-prod-4.webp"
import PRDS5 from "../../../assets/products/speaker-prod-5.webp"
// WATCHS
import PRDW1 from "../../../assets/products/watch-prod-1.webp"
import PRDW2 from "../../../assets/products/watch-prod-2.webp"
import PRDW3 from "../../../assets/products/watch-prod-3.webp"



import "./Product.scss";
import { useEffect } from "react"
const Product = () => {
     useEffect(()=>{
     window.scrollTo(0,0)
     },[])
    return (
        <>
    <div className="product-card">
     <div className="thumbnai">
   <Link to="/product/:id"><img src={PRD1} alt="" /></Link> 

     </div>
     <div className="prd-details">
     <span className="name">Product name</span>
     <span className="price">&#8377;399</span>

     </div>
         
    </div>
    <div className="product-card">
     <div className="thumbnai">
<img src={PRD2} alt="" />

     </div>
     <div className="prd-details">
     <span className="name">Product name</span>
     <span className="price">&#8377;399</span>

     </div>
         
    </div>
    <div className="product-card">
     <div className="thumbnai">
<img src={PRD3} alt="" />

     </div>
     <div className="prd-details">
     <span className="name">Product name</span>
     <span className="price">&#8377;399</span>

     </div>
         
    </div>
    <div className="product-card">
     <div className="thumbnai">
<img src={PRD4} alt="" />

     </div>
     <div className="prd-details">
     <span className="name">Product name</span>
     <span className="price">&#8377;399</span>

     </div>
         
    </div>
    <div className="product-card">
     <div className="thumbnai">
<img src={PRD5} alt="" />

     </div>
     <div className="prd-details">
     <span className="name">Product name</span>
     <span className="price">&#8377;399</span>

     </div>
         
    </div>
    <div className="product-card">
     <div className="thumbnai">
<img src={PRD6} alt="" />

     </div>
     <div className="prd-details">
     <span className="name">Product name</span>
     <span className="price">&#8377;399</span>

     </div>
         
    </div>
    <div className="product-card">
     <div className="thumbnai">
<img src={PRD7} alt="" />

     </div>
     <div className="prd-details">
     <span className="name">Product name</span>
     <span className="price">&#8377;399</span>

     </div>
         
    </div>
    <div className="product-card">
     <div className="thumbnai">
<img src={PRD8} alt="" />

     </div>
     <div className="prd-details">
     <span className="name">Product name</span>
     <span className="price">&#8377;399</span>

     </div>
         
    </div>
    {/* spacker */}
    <div className="product-card">
     <div className="thumbnai">
<img src={PRDS1} alt="" />

     </div>
     <div className="prd-details">
     <span className="name">Product name</span>
     <span className="price">&#8377;399</span>

     </div>
         
    </div>
    <div className="product-card">
     <div className="thumbnai">
<img src={PRDS2} alt="" />

     </div>
     <div className="prd-details">
     <span className="name">Product name</span>
     <span className="price">&#8377;399</span>

     </div>
         
    </div>
    <div className="product-card">
     <div className="thumbnai">
<img src={PRDS3} alt="" />

     </div>
     <div className="prd-details">
     <span className="name">Product name</span>
     <span className="price">&#8377;399</span>

     </div>
         
    </div>
    <div className="product-card">
     <div className="thumbnai">
<img src={PRDS4} alt="" />

     </div>
     <div className="prd-details">
     <span className="name">Product name</span>
     <span className="price">&#8377;399</span>

     </div>
         
    </div>
    <div className="product-card">
     <div className="thumbnai">
<img src={PRDS5} alt="" />

     </div>
     <div className="prd-details">
     <span className="name">Product name</span>
     <span className="price">&#8377;399</span>

     </div>
         
    </div>
    <div className="product-card">
     <div className="thumbnai">
<img src={PRDW3} alt="" />

     </div>
     <div className="prd-details">
     <span className="name">Product name</span>
     <span className="price">&#8377;399</span>

     </div>
         
    </div>
    <div className="product-card">
     <div className="thumbnai">
<img src={PRDW2} alt="" />

     </div>
     <div className="prd-details">
     <span className="name">Product name</span>
     <span className="price">&#8377;399</span>

     </div>
         
    </div>
    <div className="product-card">
     <div className="thumbnai">
<img src={PRDW1} alt="" />

     </div>
     <div className="prd-details">
     <span className="name">Product name</span>
     <span className="price">&#8377;399</span>
     </div> 
    </div>
    </>
    );
};
export default Product;
