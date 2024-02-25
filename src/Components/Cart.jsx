import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash3.svg"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import FormComponent from './FormComponent'

const Cart = () => {
    const [cliente, setCliente] = useState({nombre:"", email:""});
    const [error, setError] = useState({nombre:"", email:""});
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

        // validacion de los datos del cliente
        const localError = {};
        for(const key in cliente){
            // si el object comprador NO tiene valor en cada una de sus keys (nombre, email)
            if(!cliente[key]){
                localError[key] = `${key} es requerido`
            }
        }

        if(Object.keys(localError).length > 0){
            setError(localError)
            console.log(localError);
        }else{
            // realizamos la conex con la base de datos y la creacion de una nueva collection
            const db = getFirestore();
            const colRef = collection(db, "orders"); // la collection orders no existe en Firestore así que la crea
            addDoc(colRef, compra)
            .then((res) => console.log(res))
            .catch(err => console.log(err));
        }   
    }

    const handleChange = (e) => {
        setCliente({...cliente, [e.target.name]:e.target.value})
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col text-center my-5">
                    <h1>Productos seleccionados</h1>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    <table className="table">
                        <tbody>
                            {cart.map(prod => (
                                <tr key={prod.id}>
                                    <td><img src={prod.imagen} alt={prod.titulo} width={80}></img></td>
                                    <td>{prod.titulo}</td>
                                    <td>${prod.precio}</td>
                                    <td>{prod.quantity}</td>
                                    <td>${prod.precio}</td>
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
            < FormComponent formData = {cliente} inputChange = {handleChange} onSubmit = {onSubmit} error ={error} />
        </div>
    );
}
export default Cart;