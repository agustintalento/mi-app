import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {

        const producto = {...item, cantidad}

        if (isInCart(producto.id)) {

            actualizarCarrito(producto)
        } else

        {setCart([...cart, producto]);}
    }

    const isInCart = (id) => cart.some((prod) => prod.id === id); 


    const deleteItem = (id) => {
        const cartFiltrada = cart.filter(item => item.id !== id);
        setCart(cartFiltrada);
    }

    const actualizarCarrito = (nuevoProducto) => {
        const cantidadActual = cart.map((productoCarrito) => {
           
           if (nuevoProducto.id === productoCarrito.id) {
                const productoActual = {
                   
                    ...productoCarrito, 
                    cantidad : productoCarrito.cantidad + nuevoProducto.cantidad
                     
                }; 
                
                return productoActual;
            } 
            else {
                return productoCarrito; 
            }
            
        })
        setCart(cantidadActual);

    }

    const total = () => {

        return(
            cart.reduce((prev, act) => 
                prev + act.precio * act.cantidad, 0
            )
        )
    }

    const productosCarrito = () => {
        return(
            cart.reduce((previo, actual) => previo + actual.cantidad, 0)
        )
    }

    const clear = () => {
        setCart([]);
    }


    return (
        <CartContext.Provider value={{cart, addToCart, clear, deleteItem, total, productosCarrito}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;