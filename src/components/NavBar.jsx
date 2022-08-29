import React from "react";
import logo from '../assets/img/logo.png'


const NavBar = () => {

    return (
        <>
            <nav className="navbar navbar-light bg-light justify-content-evenly">
                <div className=" d-flex justify-content-center">
                    <a className="navbar-brand" href="#">SERVICIOS</a>
                </div>
                <div className="d-flex justify-content-center">
                    <a className="navbar-brand" href="#">CATALOGO</a>
                </div>
                <div className="logo d-flex justify-content-center">
                <a className="navbar-brand" href="index.html">
                    <img src={logo} alt="guava-logo" width="200" height="100" ></img>
                </a>
                </div>
                <div className="d-flex justify-content-center">
                    <a className="navbar-brand" href="#">UBICACION</a>
                </div>
                <div className="d-flex justify-content-center">
                    <a href="https://www.facebook.com/guavaplantshop/" target="_blank" className="sm-icon"> <i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/guavaplantshop/" target="_blank" className="sm-icon"> <i className="fa-brands fa-instagram"></i></a>
                    <a href="https://wa.me/######?text=GuavaPlantShop" target="_blank" className="sm-icon"><i className="fa-brands fa-whatsapp"></i></a>
                    <a href="#" target="_blank" className="sm-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCarrito" aria-controls="offcanvasExample"><i className="cart fa-solid fa-cart-shopping"></i></a>
                </div>
                
            </nav>
        </>
    
    )

}

export default NavBar;