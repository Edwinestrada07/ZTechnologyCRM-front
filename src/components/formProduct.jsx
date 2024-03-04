function FormProduct(props) {

    const submit = async (event) => {
        event.preventDefault()
        props.onSubmit()
    }
    
    return (
        <form onSubmit={submit} className="d-flex flex-wrap align-items-center">
            <div className="form-group m-2 flex-grow-1">
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
            <div className="form-group m-2 flex-grow-1">
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
            <div className="form-group m-2 flex-grow-1">
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
            <div className="form-group m-2 flex-grow-1">
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
                <button className="btn btn-primary mr-2" type="submit">
                    Guardar
                </button>
                <button className="btn btn-secondary" type="button" onClick={props.onClear}>
                    Limpiar
                </button>
            </div>
        </form>
    )
}

export default FormProduct
