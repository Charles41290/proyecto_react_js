import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash3.svg"

const Cart = () => {
    const {cart, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

    if(CantTotalProductos() === 0){
        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                    <div className="alert alert-danger" role="alert">No hay items en el carrito</div>
                        <Link to ={"/"}>Volver a la página principal</Link>
                    </div>
                </div>
            </div>
        );
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col text-center my-3">
                    <h1>Productos seleccionados</h1>
                </div>
            </div>
            <div className="row ">
                <div className="col text-center">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="text-end aling-middle" colSpan={7}>
                                    <a href="#" className="btn btn-warning" onClick={clear}>
                                            Vaciar Carrito <img src={trash} alt="Eliminar producto" />
                                    </a>
                                </td>
                            </tr>
                            {cart.map(prod => (
                                <tr key={prod.id}>
                                    <td><img src={prod.imagen} alt={prod.titulo} width={80}></img></td>
                                    <td>{prod.titulo}</td>
                                    <td>${prod.precio}</td>
                                    <td>{prod.quantity}</td>
                                    <td>${prod.quantity*prod.precio}</td>
                                    <td className="text-end align-middle">
                                        <a href="#" onClick={() => removeItem(prod.id)}>
                                            <img src={trash} alt="Eliminar producto" />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={5}>Suma Total</td>
                                <td>${SumaTotalProductos()}</td>
                                <td className="text-end align-middle"><Link to={"/checkout"} className="btn btn-warning">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Cart;