import React from "react";
import ItemCount from "./ItemCount";

const ItemListConteiner = ({greeting}) => {
    return (
        <>
            <div id="divSaludo" className="d-flex justify-content-center">
                <div>
                    <h1 id="saludo">{greeting}</h1>
                </div>
            </div>
        </>
    );
}

export default ItemListConteiner;