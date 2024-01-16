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

    const submit = (event) => {
        event.preventDefault()
        dispatch ({ type: 'loading' })

        setTimeout(() => {
            fetch('http://localhost:4000/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: localStorage.getItem('token')
            },
            body: JSON.stringify(products)
        })
            .then(response => response.json())
            .then(response => {
                dispatch({ type: 'createProduct', products: response.products })
            })

        }, 500)
    }

    if(state.status === 'loading')
        return 'loading...'

    return (
        <form onSubmit={submit}>
            <label htmlFor="title">Nombre</label>
            <input type="text" id='title' onChange={onChangeData} />
            <label htmlFor="price">Precio</label>
            <input type="number" id='price' onChange={onChangeData} />
            <label htmlFor="stock">Cantidad</label>
            <input type="number" id='stock' onChange={onChangeData} />
            <label htmlFor="description">Descripción</label>
            <input type="text" id='description' onChange={onChangeData} />

            <button type="submit">Guardar</button>
        </form>
    )
}

export default FormProduct