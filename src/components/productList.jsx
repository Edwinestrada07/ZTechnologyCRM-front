import React from 'react';

const ProductList = ({ products, deleteProduct, getProduct }) => {
    return (
        <>
            {products.length > 0 ? (
                <table className="table table-striped table-hover table-light table-dark mt-4">
                    <thead>
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
                                    <button className="btn btn-primary form-group m-2"  onClick={() => deleteProduct(product.id)}>Eliminar</button>
                                    <button className="btn btn-primary form-group m-2" onClick={() => getProduct(product.id)}>Actualizar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h3>No hay Productos</h3>
            )}
        </>
    );
};

export default ProductList;
