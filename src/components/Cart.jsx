import {React, useContext} from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const {total, deleteItem, cart} = useContext(CartContext);

    if (cart.length !== 0) {
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
                            <h3 className="saludo subtotal">Subtotal: ${item.cantidad * item.precio}</h3>
                            <button className="btn btn-secondary" onClick={() => deleteItem(item.id)}>Borrar Item</button>

                        </div>
                    </div>    
                        
                )} 

            </div>
            <div className="saludo d-flex justify-content-center">
                <h2 className="precioTotal">PRECIO TOTAL: ${total()}</h2>
            </div>
        
            
            

        </>
    )}

    return(
        <div className="d-flex saludo flex-column align-items-center">
            <h1>NO HAY PRODUCTOS EN EL CARRITO</h1>
            <Link to="/"> Ir al inicio </Link>
        </div>
    )

    
}

export default Cart;