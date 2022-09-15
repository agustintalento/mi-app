import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { catalogo } from "./Catalogo";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} =  useParams()


    useEffect(() => {
      
        const getItem = (id) => {
            
            return new Promise((res, rej) => {
            
            const producto = catalogo.find((planta) => planta.id === parseInt(id));
            setTimeout(() => {
                res(producto);
            }, 2000)
        })};

        getItem(id).then((resp) => {

            setItem(resp);
        });

        getItem(id).catch((error) => {
            console.log(error);
        });

    },[id])
    
    return(

        <ItemDetail item ={item} />
        
    )
}

export default ItemDetailContainer;