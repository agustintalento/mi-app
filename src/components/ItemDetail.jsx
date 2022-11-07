import React from "react";
import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({item}) => {

    const {addToCart} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0);
    const onAdd = (qty) => {
        setCantidad(qty)
        addToCart(item, qty);
    }

    return(
    
        <div className="d-flex justify-content-center list-group-item list-group-item-action row">
            
            <div className="col-4">
                <img src={item.src} className="img-thumbnail" alt={item.nombre} /> 
            </div>
            <div className="d-flex flex-column justify-content-center col-6">
                <h3>{item.nombre}</h3><br />
                <h5>${item.precio}</h5>
                <p>{item.descripcion}</p>
                {   
                    cantidad  ? 

                    <Link to={'/cart'}><button className="btn btn-secondary">Ir al Carrito</button></Link> :

                    <ItemCount stock={item.stock} initial={1} itemAddInicial={0} onAdd={onAdd} />
                }
                    
            </div>
        </div>
    
    )
}

export default ItemDetail;