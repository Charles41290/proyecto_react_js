
// el FormComponent recibe como props info, metodoparaobtenerdatos, funcion que ejecuta
const FormComponent = ({formData, inputChange, onSubmit, error}) => {
    return(
        <form onSubmit={onSubmit}>
            {
            Object.keys(formData).map((key, i) => (
                <>
                    <div key={i+1} className="mb-3">
                        <label htmlFor={key} className="form-label">{key}</label>
                        <input type="text" className="form-control" name={key} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={inputChange} />
                        {error[key] && <div className="alert alert-danger my-1" role="alert">{error[key]}</div> }
                    </div>
                </>
            ))
            }
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );

}

export default FormComponent;