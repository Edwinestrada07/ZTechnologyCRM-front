function FormProduct(props) {

    const submit = async (event) => {
        event.preventDefault();
        
    props.onSubmit()
    };
    
    return (
        <>
            <form className="d-flex" onSubmit={submit}> 
                <div className="form-group m-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        name="title"
                        id="title"
                        value={ props.product.title ||  ''}
                        onChange={ props.onChangeData }
                    />
                </div>
                <div className="form-group m-2">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Precio"
                        name="price"
                        id="price"
                        value={ props.product.price ||  ''}
                        onChange={ props.onChangeData }
                    />
                </div>
                <div className="form-group m-2">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Cantidad"
                        name="stock"
                        id="stock"
                        value={ props.product.stock ||  ''}
                        onChange={ props.onChangeData }
                    />
                </div>
                <div className="form-group m-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Descripción"
                        name="description"
                        id="description"
                        value={ props.product.description ||  ''}
                        onChange={ props.onChangeData }
                    />
                </div>
                <div className="form-group m-2">
                    <button 
                        className="btn btn-primary" 
                        type="submit"
                    >
                        Guardar
                    </button>
                </div>
            
            </form>

            <button className="btn btn-outline-primary mx-2" onClick={props.onClear} >Limpiar</button>
        </>
    )
}

export default FormProduct