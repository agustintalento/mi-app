import React from "react";
import logo from '../assets/img/logo.png';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <nav className="navbar navbar-light bg-light justify-content-evenly">
            <div className=" d-flex justify-content-center">
                <a className="navbar-brand" href="#">SERVICIOS</a>
            </div>
            <div className="d-flex justify-content-center">
                <div className="dropdown">
                    <a className="navbar-brand dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" >CATEGORIAS</a>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to={`/category/Palmeras`}>PALMERAS</Link></li>
                        <li><Link className="dropdown-item" to={`/category/Herbáceas`}>HERBÁCEAS</Link></li>
                        <li><Link className="dropdown-item" to={`/category/Suculentas`}>SUCULENTAS</Link></li>
                        <li><Link className="dropdown-item" to={`/category/Trepadoras`}>TREPADORAS</Link></li>
                        <li><Link className="dropdown-item" to={`/category/Arbustos`}>ARBUSTOS</Link></li>
                        <li><Link className="dropdown-item" to={`/category/Helechos`}>HELECHOS</Link></li>

                    </ul>
                </div>
            </div>
            <div className="logo d-flex justify-content-center">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="guava-logo" width="200" height="100" ></img>
            </Link>
            </div>
            <div className="d-flex justify-content-center">
                <a className="navbar-brand" href="#">UBICACION</a>
            </div>
            < CartWidget />    
        </nav>

    
    )

}

export default NavBar;