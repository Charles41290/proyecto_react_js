import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash3.svg"
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const [cliente, setCliente] = useState({nombre:"", email:""})
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

    const onSubmit = (e) => {
        e.preventDefault();
        const compra = {date: new Date(), cliente, items: cart, total: SumaTotalProductos()};

        const db = getFirestore();
        const colRef = collection(db, "orders"); // la collection orders no existe en Firestore así que la crea
        addDoc(colRef, compra)
        .then((res) => console.log(res))
        .catch(err => console.log(err));
    }

    const handleChange = (e) => {
        setCliente({...cliente, [e.target.name]:e.target.value})
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Productos seleccionados</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <table className="table">
                        <tbody>
                            {cart.map(prod => (
                                <tr key={prod.id}>
                                    <td><img src={prod.imagen} alt={prod.titulo} width={80}></img></td>
                                    <td>{prod.titulo}</td>
                                    <td>${prod.precio}</td>
                                    <td>{prod.quantity}</td>
                                    <td>${prod.quantity*prod.precio}</td>
                                    <td>${prod.quantity*prod.precio}</td>
                                    <td>
                                        <a href="#" onClick={() => removeItem(prod.id)}>
                                            <img src={trash} alt="Eliminar producto" />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={5}>Suma Total</td>
                                <td>${SumaTotalProductos()}</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
                    <input type="text" className="form-control" name="nombre" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" id="exampleInputPassword1" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    );
}
export default Cart;