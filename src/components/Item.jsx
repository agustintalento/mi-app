import React from "react";
import { useState } from "react";
import { useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Item = ({planta}) => {

    const {addToCart} = useContext(CartContext);
    // eslint-disable-next-line
    const [cantidad, setCantidad] = useState(0);

    const onAdd = (qty) => {
        setCantidad(qty)
        addToCart(planta, qty);
    }
    return (
        <>
         
            <div className="card align-items-center">
                <Link to={`/item/${planta.id}`} >
                    <img src={planta.src} className="card-img-top" alt={planta.nombre} />
                </Link>

                <div className="card-body">
                    <div className="d-flex justify-content-center">
                        <Link className="plantaNombre" to={`/item/${planta.id}`} >
                            <p className="card-text">{planta.nombre}</p>
                        </Link>
                        <p className="card-text plantaNombre">$ {planta.precio}</p>
                    </div>
                    {   
                    
                    <ItemCount stock={planta.stock} initial={1} itemAddInicial={0} onAdd={onAdd} />
                }   
                </div>
            
            </div>
            

        </>
    )
}

export default Item;