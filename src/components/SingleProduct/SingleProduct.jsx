import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
    } from "react-icons/fa";

import Product from '../../assets/products/earbuds-prod-1.webp'
import "./SingleProduct.scss";
const SingleProduct = () => {
    return ( <div className="single-product-main-content">
        <div className="layout">
            <div className="single-products-page">
                <div className="left">
                    <img src={Product} alt="" />
                </div>
                    <div className="right">
                     <span className="name">AirPods</span>
                     <span className="price">&#8377;399</span>
                     <span className="desc">AirPods deliver an industry-leading 4 5 hours of listening time 5 — and up to 3 hours of talk time 6 — all on one charge. And they're made to keep up with you, thanks to a charging case that holds multiple charges for more than 24 hours of listening time</span>

                     <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span>-</span>
                            <span>5</span>
                            <span>+</span>
                        </div>
                        <button className="add-to-card-button">
                            <FaCartPlus size={20}/>
                            ADD TO CART
                        </button>
                     </div>
                     <span className="divider">
                        <div className="info-item">
                            <span className="text-bold">Category:
                            <span>Headphones</span>
                            </span>
                        </div>
                        <div className="info-item">
                            <span className="text-bold">Share:
                            <span className="social-icons">
                            <FaFacebookF size={16} />
<FaTwitter size={16} />
<FaInstagram size={16} />
<FaLinkedinIn size={16} />
<FaPinterest size={16} />
                            </span>
                            </span>
                        </div>
                     </span>


                    </div>
            </div>
            <RelatedProducts/>
        </div>
    </div>
    );
};

export default SingleProduct;
