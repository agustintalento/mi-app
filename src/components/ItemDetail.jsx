import React from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "./Cart";

const ItemDetail = ({item}) => {
    
    const [goToCart, setGoToCart] = useState(false);
    const onAdd = (qty) => {
        setGoToCart(true);
    }

    

    return(
    
        <div className="d-flex justify-content-center list-group-item list-group-item-action row">
            
            <div className="col-4">
                <img src={item.src} className="img-thumbnail" /> 
            </div>
            <div className="d-flex flex-column justify-content-center col-6">
                <h3>{item.nombre}</h3><br />
                <h5>${item.precio}</h5>
                <p>{item.descripcion}</p>
                {   
                    goToCart ? 

                    <Link to={'/cart'}><button className="btn btn-secondary">Ir al Carrito</button></Link> :

                    <ItemCount stock={7} initial={1} itemAddInicial={0} onAdd={onAdd} />
                }
                    
            </div>
        </div>
    
    )
}

export default ItemDetail;