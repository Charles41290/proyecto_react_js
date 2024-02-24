import { useContext } from 'react';
import IconoCarrito from '../assets/cart.svg'
import { CartContext } from '../context/CartContext';

const CartWidget = () =>{
    const {productosEnCarrito} = useContext(CartContext)
    return(
        <button type="button" className="btn btn-white position-relative">
            <img src={IconoCarrito} alt="carrito de compras" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            1-{productosEnCarrito.length}
            </span>
        </button>
    );
}

export default CartWidget;