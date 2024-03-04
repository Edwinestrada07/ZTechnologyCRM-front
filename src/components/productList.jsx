import React from 'react'

const ProductList = ({ products, deleteProduct, getProduct }) => {
    return (
        <>
            {products.length > 0 ? (
                <div className="table-responsive mt-4">
                    <table className="table table-striped table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Descripción</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>$ {product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <button className="btn btn-primary mr-3" onClick={() => deleteProduct(product.id)}>Eliminar</button>
                                        <button className="btn btn-primary" onClick={() => getProduct(product.id)}>Actualizar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h3 className="mt-4">No hay Productos</h3>
            )}
        </>
    )
}

export default ProductList
