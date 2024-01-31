import { useEffect, useState } from "react";
import arrayProductos from "../assets/libros.json"
import {useParams} from "react-router-dom"

const ItemListContainer = () =>{
    //creo un estado para almacenar el arrayProductos
    const [productos, setProductos] = useState([]);
    const {categoriaAutor} = useParams();

    useEffect (() => {
        const promesa = new Promise((resolve) =>{
            resolve(
                
                categoriaAutor ? arrayProductos.filter(producto => producto.categoria === categoriaAutor) :arrayProductos);
        });

        promesa.then(data =>{
            setProductos(data);
        });
    }, [categoriaAutor]);

    return(
        <div className="container">
            <div className="row">
                {productos.map(producto => (
                        <div key = {producto.id} className="col-md-3 my-2">
                            <div className="card">
                                <img src={producto.imagen} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.titulo}</h5>
                                    <p className="card-text">{producto.autor}</p>
                                    <p className="card-text">${producto.precio}</p>
                                    <a href="#" className="btn btn-primary">Agregar al carrito</a>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
        
    );

}

    export default ItemListContainer;