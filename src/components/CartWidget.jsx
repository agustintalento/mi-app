import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
    
    return (
    
        <div className="d-flex justify-content-center">
                <a href="https://www.facebook.com/guavaplantshop/" target="_blank" className="sm-icon"> <i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/guavaplantshop/" target="_blank" className="sm-icon"> <i className="fa-brands fa-instagram"></i></a>
                <a href="https://wa.me/######?text=GuavaPlantShop" target="_blank" className="sm-icon"><i className="fa-brands fa-whatsapp"></i></a>
                <Link to={'/cart'}  className="sm-icon" ><i className="cart fa-solid fa-cart-shopping"></i></Link>
        </div>
    
    )
    
}

export default CartWidget;