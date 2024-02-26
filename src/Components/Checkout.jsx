import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import FormComponent from './FormComponent'

const Checkout = () => {
    const [cliente, setCliente] = useState({nombre:"", telefono:"", email:""});
    const [error, setError] = useState({nombre:"", telefono:"", email:""});
    const[orderId, setOrderId] = useState(); 
    const {cart,clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);

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
        }else{
            // realizamos la conex con la base de datos y la creacion de una nueva collection
            const db = getFirestore();
            const colRef = collection(db, "orders"); // la collection orders no existe en Firestore así que la crea
            addDoc(colRef, compra)
            .then((res) => {
                clear();
                setOrderId(res.id);
            })
            .catch(err => console.log(err));
        }   
    }

    const handleChange = (e) => {
        setCliente({...cliente, [e.target.name]:e.target.value})
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col text-center my-3">
                    <h1>Checkout</h1>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-6">
                    < FormComponent formData = {cliente} inputChange = {handleChange} onSubmit = {onSubmit} error ={error} />
                </div>
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
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4}>Suma Total</td>
                                <td>${SumaTotalProductos()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-success p-5 text-center" role="alert">
                        <p>📗📘</p>
                        <h1>Gracias por su compra</h1>
                        <p>El ID de compra es: <b>{orderId}</b></p>
                        </div> : ""
                    }
                </div>
            </div>
        </div>
    );
}
export default Checkout;