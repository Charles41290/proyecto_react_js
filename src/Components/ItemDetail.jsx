import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import {CartContext } from "../context/CartContext"

const ItemDetail = ({item}) =>{
    const {addItem} = useContext(CartContext);

    // quantity la va a recibir desde el ItemCount según el valor que tenga counter
    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-md-4">
                    <img src={item.imagen} alt={item.titulo} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1>{item.titulo}</h1>
                    <p>{item.resenia}</p>
                    <p><b>${item.precio}</b></p>
                </div>
                <ItemCount stock = {item.stock} onAdd={onAdd} />
            </div>
        </div>
    );
}
export default ItemDetail;