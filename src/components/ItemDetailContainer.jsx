import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { catalogo } from "./Catalogo";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    useEffect(() => {
      
        const getItem = new Promise((res, rej) => {
            
            const producto = catalogo.find((planta) => planta.id === 2);
            setTimeout(() => {
                res(producto);
            }, 2000)
        });

        getItem.then((resp) => {

            setItem(resp);
        });

        getItem.catch((error) => {
            console.log(error);
        });

    },[])
    
    return(

        <>
            <ItemDetail item ={item} />
        </>
    )
}

export default ItemDetailContainer;