import React, { useState } from "react";

function FormQuote({ onSubmit, onChangeData, addProductToQuote, quoteData, clients, products, onClear }) {
    const [productData, setProductData] = useState({
        productId: '',
        cant: 0,
        price: 0,
        subtotal: 0,
        shippingPrice: 0,
        total: 0
    });

    const onProductChange = (e) => {
        const { name, value } = e.target;
        setProductData({
            ...productData,
            [name]: value
        });
    };

    const addProduct = () => {
        const subtotal = productData.cant * productData.price;
        const total = subtotal + productData.shippingPrice;
        addProductToQuote({ ...productData, subtotal, total });
        setProductData({
            productId: '',
            cant: 0,
            price: 0,
            subtotal: 0,
            shippingPrice: 0,
            total: 0
        });
    };

    return (
        <form onSubmit={onSubmit} className="text-gray-600 d-flex flex-wrap align-items-center">
            <div className="m-2 flex-grow-1">
                <select id="clientSelect" className="w-full px-4 py-2 border border-gray-300 rounded-md" name="clientId" value={quoteData.clientId} onChange={onChangeData}>
                    <option value="">Seleccione un Cliente</option>
                    {clients.map(client => (
                        <option key={client.id} value={client.id}>{client.name}</option>
                    ))}
                </select>
            </div>

            <div className="m-2 flex-grow-1">
                <select id="productSelect" className="w-full px-4 py-2 border border-gray-300 rounded-md" name="productId" value={productData.productId} onChange={onProductChange}>
                    <option value="">Seleccione un Producto</option>
                    {products.map(product => (
                        <option key={product.id} value={product.id}>{product.title} -- (${product.price})</option>
                    ))}
                </select>
            </div>

            <div className="m-2 flex-grow-1">
                <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                    placeholder="Cantidad" 
                    name="cant" 
                    value={productData.cant} 
                    onChange={onProductChange} 
                />
            </div>

            <div className="m-2 flex-grow-1">
                <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                    placeholder="Precio" 
                    name="price" 
                    value={productData.price} 
                    onChange={onProductChange} 
                />
            </div>

            <div className="m-2 flex-grow-1">
                <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md" 
                    placeholder="Precio Envío" 
                    name="shippingPrice" 
                    value={productData.shippingPrice} 
                    onChange={onProductChange} 
                />
            </div>

            <div className="m-2 flex-grow-1">
                <button type="button" className="mx-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md" onClick={addProduct}>
                    Agregar Producto
                </button>
            </div>

            <div className="m-2 flex-grow-1">
                <button type="button" className="mx-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md" onClick={onClear}>
                    Limpiar Formulario
                </button>
            </div>

            <div className="w-full px-4 py-2 border border-gray-300 rounded-md my-2">
                <textarea 
                    placeholder="Descripción de la Cotización" 
                    className="w-full" 
                    name="description" 
                    value={quoteData.description} 
                    onChange={onChangeData} 
                />
            </div>

            <div className="w-full px-4 py-2 border border-gray-300 rounded-md my-2">
                <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-md py-2">
                    Crear Cotización
                </button>
            </div>
        </form>
    );
}

export default FormQuote;
