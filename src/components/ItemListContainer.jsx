import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {    

    const [items, setItems] = useState([]);
    useEffect(() => {


        const catalogo = [
            
            {   "id": 1,
                "nombre": "Drácena Tricolor",
                "tipo" : "Palmera",
                "altura" : 50,
                "macetaInculida" : true,
                "precio" : 370,
                "stock" : 6,
                "src" : "./img/productos/dracenaTricolor.jpg"
            },
            
    
            {   "id": 2,
                "nombre": "Lirio De La Paz",
                "tipo" : "Herbácea",
                "altura" : 50,
                "macetaInculida" : true,
                "precio" : 400,
                "stock" : 7,
                "src" : "./img/productos/lirioDeLaPaz.jpg"
            },

            {   "id": 3,
                "nombre": "Peperomia Cola De Ratón",
                "tipo" : "Suculenta",
                "altura" : 20,
                "macetaInculida" : true,
                "precio" : 250,
                "stock" : 3,
                "src" : "./img/productos/peperomiaColaDeRaton.jpg"
            },

            {   "id": 4,
                "nombre": "Philodendron Brasil",
                "tipo" : "Trepador",
                "altura" : 20,
                "macetaInculida" : true,
                "precio" : 760,
                "stock" : 4,
                "src" : "./img/productos/philodendronBrasil.jpg"
            },

            {   "id": 5,
                "nombre": "Calathea Orbifolia",
                "tipo" : "Herbácea",
                "altura" : 30,
                "macetaInculida" : true,
                "precio" : 1200,
                "stock" : 3,
                "src" : "./img/productos/calatheaOrbifolia.jpg"
            },

            {   "id": 6,
                "nombre": "Difembaquia Tropic",
                "tipo" : "Arbusto",
                "altura" : 60,
                "macetaInculida" : true,
                "precio" : 470,
                "stock" : 5,
                "src" : "./img/productos/difembaquiaTropic.jpg"
            },

            {   "id": 7,
                "nombre": "Diffembaquia Sp",
                "tipo" : "Trepador",
                "altura" : 35,
                "macetaInculida" : true,
                "precio" : 210,
                "stock" : 4,
                "src" : "./img/productos/diffembaquiaSp.jpg"
            },

            {   "id": 8,
                "nombre": "Begonia Rex",
                "tipo" : "Herbácea",
                "altura" : 35,
                "macetaInculida" : true,
                "precio" : 460,
                "stock" : 7,
                "src" : "./img/productos/begoniaRex.jpg"
            },

            {   "id": 9,
                "nombre": "Helecho Asplenium",
                "tipo" : "Helecho",
                "altura" : 35,
                "macetaInculida" : true,
                "precio" : 400,
                "stock" : 7,
                "src" : "./img/productos/helechoAsplenium.jpg"
            },

            {   "id": 10,
                "nombre": "Drácena",
                "tipo" : "Arbusto",
                "altura" : 55,
                "macetaInculida" : true,
                "precio" : 1100,
                "stock" : 12,
                "src" : "./img/productos/dracena.jpg"
            },

            {   "id": 11,
                "nombre": "Pilea Peperomioides",
                "tipo" : "Herbácea",
                "altura" : 12,
                "macetaInculida" : true,
                "precio" : 400,
                "stock" : 10,
                "src" : "./img/productos/pilea.jpg"
            },

            {   "id": 12,
                "nombre": "Crisantemo",
                "tipo" : "Herbácea",
                "altura" : 30,
                "macetaInculida" : true,
                "precio" : 320,
                "stock" : 15,
                "src" : "./img/productos/crisantemo.jpg"
            }
    
        ];
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
                <ItemList catalogo={items} />
            </div>
        </>
    );
}

export default ItemListContainer;