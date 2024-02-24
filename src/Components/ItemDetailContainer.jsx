import { useEffect, useState } from "react";
import arrayProductos from "../assets/libros.json"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const {idProducto} = useParams(); // recibe los parametros de Route y llega como string
    useEffect (() => {
        let producto = arrayProductos.find(item => item.id == parseInt(idProducto))
        const promesa = new Promise((resolve) =>{
            resolve(producto);
        });

        promesa.then(data => {
            setItem(data);
        });
    }, [idProducto]);
 
    return(
        <ItemDetail item={item} />
    );
}
export default ItemDetailContainer;