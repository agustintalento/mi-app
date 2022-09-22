import React, { useEffect } from "react";
import { useState } from "react";


const ItemCount = ({stock, initial, onAdd, itemAddInicial}) => {

    const [qty, setQty] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setAdd] = useState(itemAddInicial);

    const modificarCantidad = (valor) => {

        if (valor > 0 && valor <= itemStock) {
            setQty(valor);
        }

    }

    const agregarItems = (cantidad) => {
        
        if (cantidad <= itemStock) {
            setAdd(cantidad + itemAdd);
            setItemStock(itemStock - cantidad);
            setQty(initial);
            onAdd(cantidad);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="d-flex align-items-center flex-column">
            <div className="btn-group" role="group" aria-label="Controles" style={{marginBottom : 10 + 'px'}}>
                
                <button type="button" className="btn btn-primary" onClick={ () => {modificarCantidad(qty - 1)}} >-</button>
                <input type="number" readOnly value={qty} />
                <button type="button" className="btn btn-primary" onClick={ () => {modificarCantidad(qty + 1)}} >+</button>
                
            </div><br />
            <div>
                <button type="button" className="btn btn-primary" onClick={ () => {agregarItems(qty)}} >Agregar al Carrito</button>

                <p> Stock disponible: {itemStock} uds. </p>
            </div>
        </div>
    )
}

export default ItemCount;