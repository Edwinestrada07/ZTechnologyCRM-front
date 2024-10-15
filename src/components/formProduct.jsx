function FormProduct(props) {
    
    const submit = async (event) => {
        event.preventDefault()
        props.onSubmit()
    }
    
    return (
        <form onSubmit={ submit } className="text-gray-600 d-flex flex-wrap align-items-center">
            <div className="m-2 flex-grow-1">
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Nombre"
                    name="title"
                    id="title"
                    value={ props.product.title ||  '' }
                    onChange={ props.onChangeData }
                />
            </div>
            <div className="m-2 flex-grow-1">
                <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Precio"
                    name="price"
                    id="price"
                    value={ props.product.price ||  '' }
                    onChange={ props.onChangeData }
                />
            </div>
            <div className="m-2 flex-grow-1">
                <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Cantidad"
                    name="stock"
                    id="stock"
                    value={ props.product.stock ||  '' }
                    onChange={ props.onChangeData }
                />
            </div>
            <div className="w-full">
                <textarea
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Descripción"
                    name="description"
                    id="description"
                    value={ props.product.description ||  '' }
                    onChange={ props.onChangeData }
                />
            </div>
            <div className="m-2">
                <button 
                    className="mx-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md shadow-md transition duration-300" 
                    type="submit"
                >
                    Guardar
                </button>
                <button 
                    className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md shadow-md transition duration-300" 
                    type="button" 
                    onClick={ props.onClear }
                >
                    Limpiar
                </button>
            </div>
        </form>
    )
}

export default FormProduct
