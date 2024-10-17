import React from "react";

function FormQuote({ onSubmit, onChangeData, onClear, isCreating, quoteData, clients, products }) {
    return (
        <form onSubmit={onSubmit} className="text-gray-600 d-flex flex-wrap align-items-center">
            <div className="m-2 flex-grow-1">
                <select
                    name="clientId"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    onChange={onChangeData}
                    value={quoteData.clientId}
                >
                    <option value="">Seleccione un Cliente</option>
                    {clients.map(client => (
                        <option key={client.id} value={client.id}>
                            {client.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="m-2 flex-grow-1">
                <select
                    name="productId"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    onChange={onChangeData}
                    value={quoteData.productId}
                >
                    <option value="">Seleccione un Producto</option>
                    {products.map(product => (
                        <option key={product.id} value={product.id}>
                            {product.title} -- (${product.price})
                        </option>
                    ))}
                </select>
            </div>

            {['cant', 'price', 'subtotal', 'shippingPrice', 'total'].map(field => (
                <div className="m-2 flex-grow-1" key={field}>
                    <input
                        type="number"
                        name={field}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder={field}
                        value={quoteData[field]}
                        onChange={onChangeData}
                    />
                </div>
            ))}

            <div className="m-2 flex-grow-1">
                <textarea
                    name="description"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Descripción"
                    value={quoteData.description}
                    onChange={onChangeData}
                />
            </div>

            <div className="m-2 flex-grow-1">
                <button className="mx-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md shadow-md transition duration-300" type="submit">
                    {isCreating ? 'Crear Cotización' : 'Actualizar Cotización'}
                </button>
                <button className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md shadow-md transition duration-300" type="button" onClick={onClear}>
                    Limpiar
                </button>
            </div>
        </form>
    );
}

export default FormQuote;
