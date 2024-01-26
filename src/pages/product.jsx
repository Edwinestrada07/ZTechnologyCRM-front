import ProductList from "../components/productList"
import FormProduct from '../components/formProduct';
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [isEditProduct, setIsEditProduct] = useState(false)

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:4000/product", {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("token")
        }
      })

      const products = await response.json()
      setProducts(products)

    } catch (error) {
      console.error("error", error)
    }
  }

  const getProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/product/${id}`, {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("token")
        }
      })

      const product = await response.json()
      setProduct(product)
      setIsEditProduct(true)

    } catch (error) {
      console.error("error", error)
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

        getProduct()
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
        method: "DELETE",
        headers: {
            authorization: localStorage.getItem("token")
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
    if(isEditProduct){
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
      <>
        <div>
          <h2 className="text-center">Página de Productos</h2>
        
            <FormProduct product={product} onSubmit={onSubmit} onChangeData={onChangeData} onClear={onClear} />
            <ProductList products={products} getProduct={getProduct} deleteProduct={deleteProduct} />
        </div>
      </>
  );
};

export default ProductsPage 
