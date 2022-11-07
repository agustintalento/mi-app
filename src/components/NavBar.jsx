import React from "react";
import logo from '../assets/img/logo.png';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "./FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const NavBar = () => {

    const [categoryList, setCategoryList] = useState([]);
   
    useEffect(() => {
        const catCollection = collection(db, 'categories')
        getDocs(catCollection).then((resp) => {
            const categories = resp.docs.map((category) => {
                return{
                    id: category.id,
                    ...category.data()
                }
            });
            setCategoryList(categories);
            
        });

    },[categoryList]);

    return (
        <nav className="navbar navbar-light bg-light justify-content-evenly">
            <div className=" d-flex justify-content-center">
                <a className="navbar-brand" href="#">SERVICIOS</a>
            </div>
            <div className="d-flex justify-content-center">
                <div className="dropdown">
                    <a className="navbar-brand dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" >CATEGORIAS</a>
                    <ul className="dropdown-menu">
                        {categoryList.map( category => 
                            <li key={category.id}><Link key={category.id} className="dropdown-item" to={`category/${category.name}`}>{category.name}</Link></li>
                        )}
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