import { useEffect, useState } from 'react';
import FormProduct from '../components/formProduct';
import TableProducts from '../components/tableProducts';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [isEditProduct, setIsEditProduct] = useState(false);

    const getProducts = async () => {
        try {
            const response = await fetch('http://localhost:4000/product', {
                method: 'GET',
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })

            const products = await response.json();
            setProducts(products);

        } catch (error) {
            console.error('error', error);
        }
    }

    const getProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/product/${id}`, {
                method: 'GET',
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })

            const product = await response.json()
            setProduct(product)
            setIsEditProduct(true)

        } catch (error) {
            console.error('error', error)
        }
    }

    const createProduct = async (product) => {
        try {
            const response = await fetch('http://localhost:4000/product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token')
                },
                body: JSON.stringify(product)
            })
            const responseData = await response.json()
            console.log('Producto creado:', responseData)

            getProducts()
            setProduct({})

        } catch (error) {
            console.error('Error al crear Producto', error)
        }
    }

    const updateProduct = async (product) => {
        try {
            const response = await fetch(`http://localhost:4000/product/${product.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: localStorage.getItem('token')
                },
                body: JSON.stringify(product)
            })
            const responseData = await response.json()
            console.log('Producto actualizado:', responseData)

            getProducts()

        } catch (error) {
            console.error('Error al actualizar Producto', error)
        }
    }

    const deleteProduct = async (id) => {
        await fetch(`http://localhost:4000/product/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: localStorage.getItem('token')
            }
        })

        getProducts()
    }

    useEffect(() => {
        getProducts()
    }, [])

    const onChangeData = (event) => {
        setProduct({
            ...product,
            [event.target.id]: event.target.value
        })
    }

    const onSubmit = () => {
        if (isEditProduct) {
            updateProduct(product)
        } else {
            createProduct(product)
        }
    }

    const onClear = () => {
        setProduct({})
        setIsEditProduct(false)
    }

    return (
        <div id="product" className="container">
            <div className="text-white p-5">
                <h2 className="text-gray-800 text-center text-3xl my-3 font-extrabold sm:text-4xl"><strong>Página de Productos</strong></h2>
                <p className="text-gray-600 my-2">
                    A continuación el formulario para el ingreso de los Productos.
                </p>
                <FormProduct product={product} onSubmit={onSubmit} onChangeData={onChangeData} onClear={onClear} />
                <TableProducts products={products} getProduct={getProduct} deleteProduct={deleteProduct} />
            </div>
        </div>
    );
};

export default ProductPage;
