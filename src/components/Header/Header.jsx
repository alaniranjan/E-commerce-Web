import { useEffect,useState,useContext } from "react";
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
import {TbSearch} from "react-icons/tb"
import {CgShoppingCart, cgShoopingCard} from "react-icons/cg"
import {AiOutlineHeart} from 'react-icons/ai'


import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import {Context } from '../../utils/context'


import "./Header.scss";







const Header = () => {

    const [scrolled, setScrolled] = useState(false)
    const [showCart, setShowCart] = useState(true)
    const [showSearch, setShowSearch] = useState(false)

const handelScroll=()=>{

    const offset = window.screenY
    // console.log(offset)
    // header fiexd
    if(offset > 200){
       setScrolled(true)
    }else{
        setScrolled(false)
    }

}





useEffect(()=>{
  window.addEventListener('scroll',handelScroll)

},[])
 




    return (

  
    <>
    <header className={`main-header ${scrolled ? "sticky-header":""} `}>
        <div className="header-content">
            <ul className="left-header">
            <li><Link className="header-link" to="./home">Home </Link> </li>
            <li><Link className="header-link" to="./home">About </Link></li>
            <li><Link className="header-link" to="./category/:id"> Category</Link></li>
            </ul>
            <div className="center-header"><Link  className="header-link-home" to="./home">SHOPPING </Link> </div>
            <div className="right-header"> 
            <TbSearch onClick={()=>setShowSearch(true)} />
            <AiOutlineHeart/>
            <span className="cart-icon-header" onClick={()=>setShowCart(true)}>
                <CgShoppingCart/>
                <span>5</span>
            </span>
             </div>
        </div>
        
    </header>
    
   {showCart &&  <Cart setShowCart={setShowCart}/> }
   {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
      );
};

export default Header;
