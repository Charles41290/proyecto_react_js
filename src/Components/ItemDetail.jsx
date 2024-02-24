import ItemCount from "./ItemCount";


const ItemDetail = ({item}) =>{
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
 
                <ItemCount stock={10} />
                
            </div>
        </div>
    );
}
export default ItemDetail;