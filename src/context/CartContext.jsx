import { createContext } from "react";

export const CartContext = createContext(); // defino el nombre del contexto

const CartContextProvider = ({children}) => {
    let productosEnCarrito = [];

    const agregarProductoACarrito = (producto) => {
        console.log("Producto agregado al carrito");
        productosEnCarrito.push(producto);
        
    }

    return(
        <CartContext.Provider value = {{productosEnCarrito, agregarProductoACarrito}}>  
            {children}
        </CartContext.Provider>

    );
}

export default CartContextProvider;

