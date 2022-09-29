import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { where, collection, getDocs, query} from "firebase/firestore";
import { db} from "./firebaseConfig"
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {    

    const [items, setItems] = useState([]);
    const {tipo} = useParams();

    useEffect(() => {


        const prodCollection = collection(db, 'productos');
        const ref = tipo ? query(prodCollection, where('tipo', "==", tipo)) : prodCollection;
        getDocs(ref).then((resp) => {
            const products = resp.docs.map((product) => {
                return{
                    id: product.id,
                    ...product.data()
                }
            });
            setItems(products);
            
        });
        
        }, [tipo] 
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