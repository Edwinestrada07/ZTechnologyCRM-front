import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({ products, deleteProduct, getProduct}) => {

    return (
    <> { products.length > 0 ?
    <table className="table table-striped table-hover table-light table-dark mt-4">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Descripción</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            { 
            products.map((product, i) => (
                <tr key={i}>
                    <td>{product.title}</td>
                    <td>$ {product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.description}</td>
                    <td>
                        <Link onClick={() => deleteProduct(product.id)}>Eliminar</Link><br />
                        <Link onClick={() => getProduct(product.id)}>Actualizar</Link>
                    </td>
                </tr>
            ))
        }
        </tbody>
    </table>
    : <h3>No hay Productos</h3>}
    </>
    )
}

export default ProductList
