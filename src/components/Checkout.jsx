import React from "react";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Success from "./Success";
import { Link } from "react-router-dom";
import {collection, addDoc } from "firebase/firestore";
import {db} from "./FirebaseConfig";

const Checkout = () => {
    const {cart, total, deleteItem, clear} = useContext(CartContext);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState("");

    const setOrder = () => {
        if ((name !== "") && (email !== "") && (phone !== "")) {
            const buyer = {name:name, email:email, phone:phone};
            const items = [];
            cart.forEach(item => { 
                items.push({id:item.id, title:item.nombre, price:item.precio, quantity:item.cantidad});
            });
            const date = new Date();
            const now = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            const order = {buyer:buyer, items: items, date:now, total: total()};
            
            const orderCollection =  collection(db, "orders");
            addDoc(orderCollection, order).then(({id}) => {
                setOrderId(id);
                clear();
            });
        }
    }

    return(
        <div className="container py-5">
            {(cart.length !== 0) ?
            
                <div className="row">
                    <div className="col-md-4 offset-md-2">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="name" onInput={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="phone" onInput={(e) => setPhone(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-secondary" onClick={() => {setOrder()}}>Finalizar Compra</button>
                    </div>
               

                    <div className="d-flex row justify-content-center">
                        {cart.map(item => 
                            <div key={item.id} className="card card-group align-items-center">
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
                </div>    

                   
            : orderId !== "" ? <Success id={orderId} /> : <div className="saludo">No hay productos en el carrito</div>}
                    
        </div>
    )


}


export default Checkout;
