import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc, collection,} from "firebase/firestore";
import { db} from "./FirebaseConfig"
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id} =  useParams()


    useEffect(() => {

        const prodCollection = collection(db, 'productos');
        const ref = doc(prodCollection, id);
        getDoc(ref).then((res) => {
            setItem({
                id: res.id,
                ...res.data(),

            });
        });
       
    },[id])
    
    return(

        <ItemDetail item ={item} />
        
    )
}

export default ItemDetailContainer;