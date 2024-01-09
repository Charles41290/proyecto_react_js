const ItemListContainer = ({mensaje}) =>{
    return(
        <div className="container my-3">
            <div className="row">
                <div className="col text-center">
                    <div className="alert alert-success" role="alert">{mensaje}</div>
                </div>
            </div>
        </div>
        
    );

}

    export default ItemListContainer;