import { useContext, useState } from "react";
import { ProductContext } from "../contexts/products.context"

function FormProduct() {
    const [products, setProducts] = useState({})
    
    const { state, dispatch } = useContext(ProductContext)

    const onChangeData = (event) => {
        setProducts({
            ...products,
            [event.target.id]: event.target.value
        })
    }

    const submit = async (event) => {
        event.preventDefault();
        dispatch({ type: 'loading' });
    
        try {
            await new Promise(resolve => setTimeout(resolve, 500)); // Simula el tiempo de espera
    
            const response = await fetch('http://localhost:4000/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token')
                },
                body: JSON.stringify(products)
            });
    
            const responseData = await response.json();
            dispatch({ type: 'createProduct', products: responseData.products });
        } catch (error) {
            // Manejo de errores, por ejemplo, dispatch de un error
            console.error('Error submitting data:', error);
            dispatch({ type: 'error', error: 'Error submitting data' });
        }
    };
    

    if(state.status === 'loading')
        return 'loading...'

    return (
        <form className="d-flex" onSubmit={submit}>
            <div className="form-group m-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="title"
                    id="title"
                    onChange={ onChangeData }
                />
            </div>
            <div className="form-group m-2">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Precio"
                    name="price"
                    id="price"
                    onChange={ onChangeData }
                />
            </div>
            <div className="form-group m-2">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Cantidad"
                    name="stock"
                    id="stock"
                    onChange={ onChangeData }
                />
            </div>
            <div className="form-group m-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Descripción"
                    name="description"
                    id="description"
                    onChange={ onChangeData }
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
    )
}

export default FormProduct