import prod from "../../../assets/products/earbuds-prod-1.webp"
import { MdClose } from "react-icons/md";
import "./Search.scss";
const Search = ({setShowSearch}) => {
    return <div className="search-model">
             <div className="form-field">
                <input 
                type="text" 
                autoFocus
                placeholder="Search for products"

                />
                <MdClose className="close-btn" onClick={()=>setShowSearch(false)} />
             </div>
             <div className="search-result-content">
                <div className="search-result">
                    <div className="search-result-item">
                    <div className="img-container">
                <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Product name</span>
                <span className="decs">Product decs</span>
            </div>
                    </div>
                </div>
             </div>
        </div>;
};

export default Search;
