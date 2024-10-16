import React, { useEffect, useState } from "react";

function FormQuote({ onSubmit, onChangeData, onClear, isCreating, quoteData, clients, products }) {
    const initialProductData = {
        productId: '',
        cant: 0,
        price: 0,
        subtotal: 0,
        shippingPrice: 0,
        total: 0
    };
    
    const [productData, setProductData] = useState(initialProductData);

    useEffect(() => {
        const { cant, price, shippingPrice } = productData;
        const subtotal = cant * price;
        const total = subtotal + Number(shippingPrice);
        setProductData(prevData => ({
            ...prevData,
            subtotal,
            total
        }));
    }, [productData.cant, productData.price, productData.shippingPrice]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = value ? Number(value) : 0;
        setProductData(prevData => ({
            ...prevData,
            [name]: updatedValue
        }));
        onChangeData(e);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { clientId } = quoteData;
        const { productId, cant, price } = productData;

        if (!clientId || !productId || cant <= 0 || price <= 0) {
            alert("Por favor, complete todos los campos obligatorios.");
            return;
        }

        const validQuoteData = {
            ...quoteData,
            cant: productData.cant,
            price: productData.price,
            shippingPrice: productData.shippingPrice,
            subtotal: productData.subtotal,
            total: productData.total
        };

        onSubmit(validQuoteData);
    };

    return (
        <form onSubmit={handleSubmit} className="text-gray-600 d-flex flex-wrap align-items-center">
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
                    onChange={handleChange}
                    value={productData.productId}
                >
                    <option value="">Seleccione un Producto</option>
                    {products.map(product => (
                        <option key={product.id} value={product.id}>
                            {product.title} -- (${product.price})
                        </option>
                    ))}
                </select>
            </div>

            <div className="m-2 flex-grow-1">
                <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" 
                    placeholder="Cantidad" 
                    name="cant" 
                    value={productData.cant} 
                    onChange={handleChange} 
                />
            </div>

            <div className="m-2 flex-grow-1">
                <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" 
                    placeholder="Precio por Unidad" 
                    name="price" 
                    value={productData.price} 
                    onChange={handleChange} 
                />
            </div>

            <div className="w-full lg:w-1/3 p-2">
                <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500" 
                    placeholder="Precio de Envío" 
                    name="shippingPrice" 
                    value={productData.shippingPrice} 
                    onChange={handleChange} 
                />
            </div>

            <div className="m-2 flex-grow-1">
                <textarea
                    name="description"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Descripción"
                    value={quoteData.description}
                    onChange={onChangeData}
                />
            </div>

            <div className="w-full lg:w-1/2 p-2">
                <label className="block mb-2">Subtotal</label>
                <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500" 
                    value={productData.subtotal} 
                    readOnly 
                />
            </div>

            <div className="w-full lg:w-1/2 p-2">
                <label className="block mb-2">Total</label>
                <input 
                    type="number" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500" 
                    value={productData.total} 
                    readOnly 
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
