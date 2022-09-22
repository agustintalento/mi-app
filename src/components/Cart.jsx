import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const {deleteItem} = useContext(CartContext);
    const {cart} = useContext(CartContext);
    return(
        <>
            <h1 className="saludo d-flex justify-content-center">CARRITO</h1>
            <div className="d-flex row justify-content-center">
                {cart.map( item => 
                    <div key={item.id} className="card align-items-center">
                        <Link to={`/item/${item.id}`} >
                            <img src={item.src} className="card-img-top" alt={item.nombre} />
                        </Link>

                        <div className="card-body">
                            <div className="d-flex justify-content-center">
                                <Link className="plantaNombre" to={`/item/${item.id}`} >
                                    <p className="card-text">{item.nombre}</p>
                                </Link>
                                <p className="card-text plantaNombre">$ {item.precio}</p>
                            </div>
                            <p> Cantidad: {item.cantidad} uds. </p>
                            <button className="btn btn-secondary" onClick={() => deleteItem(item.id)}>Borrar Item</button>

                        </div>
            
                    </div>
                )} 
            </div>
            

        </>
    )
}

export default Cart;