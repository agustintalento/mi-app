import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return(
    
        <div className="d-flex justify-content-center list-group-item list-group-item-action row">
            
            <div className="col-4">
                
                <img  src= {item.src} className="img-thumbnail" /> 
            </div>
            <div className="d-flex flex-column justify-content-center col-6">
                <h3>{item.nombre}</h3><br />
                <h5>${item.precio}</h5>
                <p>{item.descripcion}</p>
                <ItemCount stock={7} initial={1} onAdd={0} />
            </div>
        </div>
    
    )
}

export default ItemDetail;