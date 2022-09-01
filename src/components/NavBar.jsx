import React from "react";
import logo from '../assets/img/logo.png';
import CartWidget from "./CartWidget";


const NavBar = () => {

    return (
        <nav className="navbar navbar-light bg-light justify-content-evenly">
            <div className=" d-flex justify-content-center">
                <a className="navbar-brand" href="#">SERVICIOS</a>
            </div>
            <div className="d-flex justify-content-center">
                <a className="navbar-brand" href="#">CATALOGO</a>
            </div>
            <div className="logo d-flex justify-content-center">
            <a className="navbar-brand" href="./index.html">
                <img src={logo} alt="guava-logo" width="200" height="100" ></img>
            </a>
            </div>
            <div className="d-flex justify-content-center">
                <a className="navbar-brand" href="#">UBICACION</a>
            </div>
            < CartWidget />    
        </nav>

    
    )

}

export default NavBar;