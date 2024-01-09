import IconoCarrito from '../assets/cart.svg'

const CartWidget = () =>{
    return(
        <button type="button" className="btn btn-white position-relative">
            <img src={IconoCarrito} alt="carrito de compras" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            2
            </span>
        </button>
    );
}

export default CartWidget;