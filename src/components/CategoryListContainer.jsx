import React from "react";
import ItemList from "./ItemList";
import {catalogo} from "./Catalogo"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryListContainer = () => {
    const [items, setItems] = useState([]);
    const {tipo} =  useParams()


    useEffect(() => {
      
        const getItems = (tipo) => {
            
            return new Promise((res, rej) => {
            
            const productos = catalogo.filter((planta) => planta.tipo === tipo);

            setTimeout(() => {
                res(productos);
            }, 2000)
        })};

        getItems(tipo).then((resp) => {

            setItems(resp);
        });

        getItems(tipo).catch((error) => {
            console.log(error);
        });

    },[tipo])

    return(
        <>  
            <h1 className="saludo d-flex justify-content-center">{tipo}</h1>
            <ItemList catalogo= {items} />
        </>
    )
}

export default CategoryListContainer;