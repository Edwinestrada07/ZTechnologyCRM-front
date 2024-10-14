import React from 'react'

const ProductList = ({ products, deleteProduct, getProduct }) => {
    return (
        <>
            {products.length > 0 ? (
                <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                    <table className="w-full table-auto text-sm text-left">
                        <thead className="bg-gray-100 text-gray-600 font-medium border-b">
                            <tr>
                                <th className="py-3 px-6">Nombre</th>
                                <th className="py-3 px-6">Precio</th>
                                <th className="py-3 px-6">Cantidad</th>
                                <th className="py-3 px-6">Descripción</th>
                                <th className="py-3 px-6"></th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 divide-y">
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">{product.title}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">$ {product.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{product.stock}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{product.description}</td>
                                    <td>
                                        <button 
                                            className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg" 
                                            onClick={() => deleteProduct(product.id)}
                                          >
                                            Eliminar
                                        </button>
                                        <button 
                                            className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg" 
                                            onClick={() => getProduct(product.id)}
                                          >
                                            Actualizar
                                        </button>
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
