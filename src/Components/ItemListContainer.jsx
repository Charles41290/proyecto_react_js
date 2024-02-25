import { useContext, useEffect, useState } from "react";
import arrayProductos from "../assets/libros.json"
import {Link, useParams} from "react-router-dom"
import { CartContext } from "../context/CartContext";
import {addDoc, collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import { getDocument } from "../services/firebase";
import Loading from "./Loading"


const ItemListContainer = () =>{
    //creo un estado para almacenar el arrayProductos
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const {categoriaAutor} = useParams();
    const {addItem} = useContext(CartContext);

    /* useEffect (() => {
        const promesa = new Promise((resolve) =>{
            resolve(categoriaAutor ? arrayProductos.filter(producto => producto.categoria === categoriaAutor) : arrayProductos);
        });

        promesa.then(data => {
            setProductos(data);
        });
    }, [categoriaAutor]); */

    //Llamda de productos desde firebase
    useEffect (() => {
        /* const db = getFirestore();
        const colRef = collection(db, "productos");
        const consulta = categoriaAutor ? query(colRef, where("categoria", "==", categoriaAutor)) : colRef;
        getDocs(consulta).then((snapshot) => {
            const data = snapshot.docs.map(doc => ({id:doc.id,...doc.data()}));
            setProductos(data);
        }) */
        const data = getDocument("productos", categoriaAutor).then(res => {
            setCargando(false);
            setProductos(res)});
    }, [categoriaAutor]);

    /* // se uso para la subida de los productos al firebase
    useEffect(()=>{
        const db = getFirestore();
        const colRef = collection(db, "productos");
        arrayProductos.forEach(prod => {
            addDoc(colRef, prod);
        })
    },[]); */

    return(
        <>
            {cargando ? <Loading /> : <div className="container">
                    <div className="row">
                        {productos.map(producto => (
                                <div key = {producto.id} className="col-md-3 my-2">
                                    <div className="card">
                                        <Link to={"productos/" + producto.id} >
                                            <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
                                        </Link>
                                        <div className="card-body">
                                            <h5 className="card-title">{producto.titulo}</h5>
                                            <p className="card-text">{producto.autor}</p>
                                            <p className="card-text">${producto.precio}</p>
                                            <button type="button" className="btn btn-primary" onClick={()=> addItem(producto, 1)}>Agregar al carrito</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            }
        </>
    );
}

export default ItemListContainer;