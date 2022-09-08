import React from "react";
import Item from "./Item";

const ItemList = ({catalogo}) => {
    return (
        <div className="d-flex row">
            {catalogo.map( planta => <Item planta={planta} key={planta.id}  />)} 
        </div>
    )
}

export default ItemList;