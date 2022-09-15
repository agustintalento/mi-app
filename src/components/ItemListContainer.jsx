import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { catalogo } from "./Catalogo";

const ItemListContainer = ({greeting}) => {    

    const [items, setItems] = useState([]);

    useEffect(() => {

    
        const promesa = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(catalogo);
                }, 2000) 
            });
            

            promesa.then((respuesta) => {

                setItems(respuesta);
            });

        
        }, [] 
    );

    return (
        <>
            <div id="divSaludo" className="d-flex justify-content-center row">
                <h1 id="saludo" className="d-flex saludo justify-content-center">{greeting}</h1>
                <ItemList catalogo={items} /> <br /> <hr />
                
            </div>
        </>
    );
}

export default ItemListContainer;