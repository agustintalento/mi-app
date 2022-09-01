import React from "react";

const ItemListConteiner = ({greeting}) => {
    return (
        <div id="divSaludo" className="d-flex justify-content-center">
            <h1 id="saludo">{greeting}</h1>
        </div>
    );
}

export default ItemListConteiner;