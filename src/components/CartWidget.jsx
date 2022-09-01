import React, {Component} from "react";

class CartWidget extends Component {
    render() {
            return (
            
            <div className="d-flex justify-content-center">
                    <a href="https://www.facebook.com/guavaplantshop/" target="_blank" className="sm-icon"> <i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/guavaplantshop/" target="_blank" className="sm-icon"> <i className="fa-brands fa-instagram"></i></a>
                    <a href="https://wa.me/######?text=GuavaPlantShop" target="_blank" className="sm-icon"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="#" target="_blank" className="sm-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCarrito" aria-controls="offcanvasExample"><i className="cart fa-solid fa-cart-shopping"></i></a>
            </div>
            
        )
    }
}

export default CartWidget;