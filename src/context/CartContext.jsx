import { createContext, useState } from "react";

export const CartContext = createContext(); // defino el nombre del contexto

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        // valido si item está en el carrito
        if(isInCart(item.id)){
            // verificar prod.id === id ???
            let posicion = cart.findIndex(prod => prod.id === item.id);
            cart[posicion].quantity += quantity;
            setCart([...cart])// crea un nuevo array con los elementos del array original actualizados
        } else {
            /* // otra forma de agregar el item
            cart.push({...item, quantity:quantity})
            setCart([...cart]) */

            //quantity(propiedad): quantity(valor que lleva por param)
            setCart([...cart, {...item, quantity:quantity}])
        }
    }

    const removeItem = (id) => {
        // filtro todos aquellos productos cuyo id sea distinto al id param
        const  items = cart.filter(prod => prod.id != id);
        setCart([...items]);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        //.some() devuelve true/false 
        return cart.some( prod => prod.id === id );
    }

    const CantTotalProductos = () => {
        return cart.reduce((acu, prod) => acu += prod.quantity, 0);
    }

    const SumaTotalProductos = () => {
        return cart.reduce((acu, prod) => acu += prod.quantity*prod.precio, 0);
    }

    return(
        <CartContext.Provider value = {{cart, addItem, removeItem, clear, CantTotalProductos, SumaTotalProductos}}>  
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;

