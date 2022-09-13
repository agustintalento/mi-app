import React from "react";
import ItemCount from "./ItemCount";

const Item = ({planta}) => {
    return (
        <>
         
            <div className="card align-items-center">
                <img src={planta.src} className="card-img-top" alt={planta.nombre} />
                <div className="card-body">
                    <div className="d-flex justify-content-center">
                        <p className="card-text plantaNombre">{planta.nombre}</p>
                        <p className="card-text plantaNombre">$ {planta.precio}</p>
                    </div>
                    <ItemCount stock={planta.stock} initial={1} onAdd={0} />    
                </div>
            
            </div>
            

        </>
    )
}

export default Item;